import { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import {Button, Card, Form, Spinner} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { isLoadingAtom } from "../../atoms/application/application";
import { userInfoAtom } from "../../atoms/user/user";
import { globalToastTheme } from "../../config/toast.config";
import {doSignup} from "../../restAPI/userAuthAPIs";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

const FormInitValues = () => {
    return {
        email: '',
        username: '',
        password: '',
        confPassword: ''
    }
};


const SignupForm: () => JSX.Element = () => {

    const { t } = useTranslation();

    const customSchema = Yup.object({
        username: Yup.string().min(4).max(20, t('form.error.usernameMaxLength')).required(t('form.error.usernameRequired')),
        email: Yup.string().email(t('form.error.invalidMail')).required(t('form.error.emailRequired')).min(5, t('form.error.emailMinLength')).max(60, t('form.error.emailMaxLength')),
        password: Yup.string().min(8, t('form.error.passMinLength')).max(20, t('form.error.passMaxLength')).required(t('form.error.passwordRequired')).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, t('form.error.passNoRequirements')),
        confPassword: Yup.string().oneOf([Yup.ref('password'), null], t('form.error.noPassMatch')).required(t('form.error.confPassRequired'))
    })

    const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
    const [, setUserInfo] = useRecoilState(userInfoAtom);

    /* const [formState, setFormState]: [ISignupForm, Dispatch<SetStateAction<ISignupForm>>] = useState({
        email: '',
        username: '',
        password: '',
        confPass: ''
    }); */

    /* const handleInput: (event: ChangeEvent<any>) => void = (event: ChangeEvent<any>) => {
        let newState: ISignupForm = {
            ...formState,
            [event.currentTarget.name]: event.currentTarget.value
        };

        setFormState(newState);
    } */

   /*  useEffect(() => {
        validateInput()
    }, [formState]) */

    /* const validateInput = () => {
        if(formState.username?.length <= 0) return setIsValidForm(false);
        if(formState.email?.length <= 0) return setIsValidForm(false);
        if(formState.password.length <= 0) return setIsValidForm(false);
        if(formState.password !== formState.confPass) return setIsValidForm(false);

        setIsValidForm(true);
    }; */

    useEffect(() => {

    })


    const handleSignup = (object: any) => {
        console.log('Form obj: ', object);
        /* setIsLoading(true);
        doSignup(formState)
            .then(userInfo => {
                    setIsLoading(false);
                    setUserInfo(userInfo.data);
                    toast(t('toast.registration.succeed'), { type: 'success', theme: globalToastTheme } );
                },
                error => {
                    console.log('Error during registration: ', error);
                    setIsLoading(false);
                    toast(t('toast.registration.error'), {type: 'error', theme: globalToastTheme})
                }
            ) */
    }

    return(
        <Card>
            <Card.Body>
                {isLoading && <Spinner className="loading-spinner" animation="grow"/>}
                <Formik 
                initialValues={FormInitValues}
                validationSchema={customSchema}
                onSubmit={e => handleSignup(e)}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Control required id='email' name='email' isValid={touched['email'] && !errors['email']} value={values['email']} onChange={handleChange} type="email" placeholder={t('form.email')} />
                                <Form.Text className="text-muted">
                                    {t('form.nonDisclousureMessage')}
                                </Form.Text>
                                <Form.Control.Feedback>{t('form.validationOkMessage')}</Form.Control.Feedback>
                                {errors['email']? <FormError>{errors['email']}</FormError> : ''}
                            </Form.Group>

                            {console.log(errors)}

                            <Form.Group className="mb-3" >
                                <Form.Control required id='username' name='username' isValid={touched['username'] && !errors['username']} value={values['username']} onChange={handleChange} type="text" placeholder={t('form.username')} />
                                <Form.Control.Feedback>{t('form.validationOkMessage')}</Form.Control.Feedback>
                                {errors['username'] ? <FormError>{errors['username']}</FormError> : ''}
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Control required aria-describedby="passwordHelpBlock" id='password' name='password' isValid={touched['password'] && !errors['password']} value={values['password']} onChange={handleChange} type="password" placeholder={t('form.password')}/>
                                <Form.Text id="passwordHelpBlock" muted>
                                    {t('form.passRequirements')}
                                </Form.Text>
                                <Form.Control.Feedback>{t('form.validationOkMessage')}</Form.Control.Feedback>
                                {errors['password'] ? <FormError>{errors['password']}</FormError> : ''}
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Control  required id='confPassword' name='confPassword' isValid={touched['confPassword'] && !errors['confPassword']} value={values['confPassword']} onChange={handleChange} type="password" placeholder={t('form.confPassword')} />
                                <Form.Control.Feedback>{t('form.validationOkMessage')}</Form.Control.Feedback>
                                {errors['confPassword'] ? <FormError>{errors['confPassword']}</FormError> : ''}
                            </Form.Group>

                            <div className="d-flex justify-content-center align-items-center">
                                <Button variant={'primary'}   type="submit">
                                    {t('form.signup')}
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    )
}

const FormError: StyledComponent<"div", DefaultTheme> = styled.div`
color: red;
`;

export interface ISignupForm{
    email: string,
    username: string,
    password: string,
    confPass: string
}

export default SignupForm;