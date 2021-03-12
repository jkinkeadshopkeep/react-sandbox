import styles from './stylesheets/index.module.scss';
import useCustomFormHook from '../../components/customHooks/useCustomFormHook'
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import InfoBox from "../../components/info-box";
import MainContainer from "../../components/main-container";
import ContentContainer from "../../components/content-container";
import Form from "../../components/form";
import RegistrationFormSchema from "../../formSchemas/registrationFormSchema.json"

export default function Index() {
    const [values, formChange, formSubmit, clearForm, errors] = useCustomFormHook({
        validations: RegistrationFormSchema,
        initialValues: {
            forename: '',
            surname: '',
            email: '',
            mobile: ''
        }
    });

    return (
        <MainContainer>
            <ContentContainer>
                <InfoBox/>
                <Form id='hookForm' onSubmit={formSubmit}>
                    <TextInput
                        type='text'
                        name='forename'
                        label='Forename'
                        error={errors}
                        value={values.forename}
                        onChange={formChange}
                    />
                    <TextInput
                        type='text'
                        name='surname'
                        label='Surname'
                        error={errors}
                        value={values.surname}
                        onChange={formChange}
                    />
                    <TextInput
                        type='email'
                        name='email'
                        label='Email'
                        error={errors}
                        value={values.email}
                        onChange={formChange}
                    />
                    <TextInput
                        type='tel'
                        name='mobile'
                        label='Mobile'
                        error={errors}
                        onChange={formChange}
                        value={values.mobile}
                    />
                    <div className={styles['button-left']}>
                        <Button type='submit' value='Submit'>Submit</Button>
                        <Button type='button' onClick={clearForm}>Clear Form</Button>
                    </div>
                </Form>
            </ContentContainer>
        </MainContainer>
    );
}
