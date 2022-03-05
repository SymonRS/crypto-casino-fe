import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { isLoadingAtom } from "../../atoms/application/application";
import { userInfoAtom, userStateAtom } from "../../atoms/user/user";
import { globalToastTheme } from "../../config/toast.config";
import { doLogin } from "../../restAPI/userAuthAPIs";
import { ISignupForm } from "../SignupForm/SignupForm";


const LoginForm = ({orientation = 'horizontal'}: ILoginFormProps) => {

    const { t } = useTranslation();
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(userStateAtom);

    const [isValidForm, setIsValidForm] = useState(false);

    const handleInput: (event: ChangeEvent<any>) => void = (event: ChangeEvent<any>) => {
        let newState: Pick<ISignupForm, 'email' | 'password'> = {
            ...formState,
            [event.currentTarget.name]: event.currentTarget.value
        };

        setFormState(newState);
    }

    const validateInput = () => {
        if(formState.email?.length <= 0) return setIsValidForm(false);
        if(formState.password.length <= 0) return setIsValidForm(false);

        setIsValidForm(true);
    };

    const handleLogin = () => {
        setIsLoading(true);
        doLogin(formState)
            .then(userInfo => {
                    setIsLoading(false);
                    setIsLoggedIn(true);
                    setUserInfo(userInfo.data);
                    toast(t('toast.login.succeed'), { type: 'success', theme: globalToastTheme } );
                },
                error => {
                    setIsLoading(false);
                    toast(t('toast.login.error'), {type: 'error', theme: globalToastTheme})
                }
            )
    }

    useEffect(() => {
        validateInput()
    }, [formState])



    return(
        <div className={`${orientation}-form`}>
            <Form className="d-flex  justify-content-center align-items-center">
                <Form.Group className="formGroup" controlId="formBasicEmail">
                    <Form.Control  name={'email'} value={formState.email} onChange={e => handleInput(e)} type="email" placeholder={t('form.email')} />
                </Form.Group>
                
                <Form.Group className="formGroup" controlId="formBasicPassword">
                    <Form.Control name={'password'} value={formState.password} onChange={e => handleInput(e)} type="password" placeholder={t('form.password')} />
                </Form.Group>

                <Button disabled={!isValidForm} onClick={e => handleLogin()} variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}

interface ILoginFormProps{
    orientation: 'horizontal' | 'vertical'
}

export default LoginForm;