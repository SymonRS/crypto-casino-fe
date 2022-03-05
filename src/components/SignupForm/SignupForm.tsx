import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import {Button, Card, Form, Spinner} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { isLoadingAtom } from "../../atoms/application/application";
import { userInfoAtom } from "../../atoms/user/user";
import { globalToastTheme } from "../../config/toast.config";
import {doSignup} from "../../restAPI/userAuthAPIs";

const SignupForm: () => JSX.Element = () => {

    const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
    const [, setUserInfo] = useRecoilState(userInfoAtom);

    const { t } = useTranslation();

    const [isValidForm, setIsValidForm] = useState(false);

    const [formState, setFormState]: [ISignupForm, Dispatch<SetStateAction<ISignupForm>>] = useState({
        email: '',
        username: '',
        password: '',
        confPass: ''
    });

    const handleInput: (event: ChangeEvent<any>) => void = (event: ChangeEvent<any>) => {
        let newState: ISignupForm = {
            ...formState,
            [event.currentTarget.name]: event.currentTarget.value
        };

        setFormState(newState);
    }

    useEffect(() => {
        validateInput()
    }, [formState])

    const validateInput = () => {
        if(formState.username?.length <= 0) return setIsValidForm(false);
        if(formState.email?.length <= 0) return setIsValidForm(false);
        if(formState.password.length <= 0) return setIsValidForm(false);
        if(formState.password !== formState.confPass) return setIsValidForm(false);

        setIsValidForm(true);
    };

    const handleSingup = () => {
        setIsLoading(true);
        doSignup(formState)
            .then(userInfo => {
                    setIsLoading(false);
                    setUserInfo(userInfo.data);
                    toast(t('toast.registration.succeed'), { type: 'success', theme: globalToastTheme } );
                },
                error => {
                    setIsLoading(false);
                    toast(t('toast.registration.error'), {type: 'error', theme: globalToastTheme})
                }
            )
    }

    return(
        <Card>
            <Card.Body>
                {isLoading && <Spinner className="loading-spinner" animation="grow"/>}
                <Form as={'div'} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name={'email'} value={formState.email} onChange={e => handleInput(e)} type="email" placeholder={t('form.email')} />
                        <Form.Text className="text-muted">
                            {t('form.nonDisclousureMessage')}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Control name={'username'} value={formState.username} onChange={e => handleInput(e)} type="text" placeholder={t('form.username')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name={'password'} value={formState.password} onChange={e => handleInput(e)} type="password" placeholder={t('form.password')}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control name={'confPass'} value={formState.confPass} onChange={e => handleInput(e)} type="password" placeholder={t('form.confPassword')} />
                    </Form.Group>
                    <div className="d-flex justify-content-center align-items-center">
                        <Button variant="primary" disabled={!isValidForm} onClick={e => handleSingup()} type="submit">
                            {t('form.signup')}
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export interface ISignupForm{
    email: string,
    username: string,
    password: string,
    confPass: string
}

export default SignupForm;