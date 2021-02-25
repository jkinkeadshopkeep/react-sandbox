import useCustomFormHook from '../../components/customHooks/useCustomFormHook'
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import InfoBox from "../../components/info-box";
import MainContainer from "../../components/main-container";
import ContentContainer from "../../components/content-container";
import Form from "../../components/form";

export default function Index() {
    const [values, formChange, formSubmit, clearForm] = useCustomFormHook({
        forename: '',
        surname: '',
        email: '',
        mobile: ''
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
                        value={values.forename}
                        onChange={formChange}
                    />
                    <TextInput
                        type='text'
                        name='surname'
                        label='Surname'
                        value={values.surname}
                        onChange={formChange}
                    />
                    <TextInput
                        type='email'
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={formChange}
                    />
                    <TextInput
                        type='tel'
                        name='mobile'
                        label='Mobile'
                        onChange={formChange}
                        value={values.mobile}
                    />
                    <Button type='submit' value='Submit'>Submit</Button>
                    <Button type='button' onClick={clearForm}>Clear Form</Button>
                </Form>
            </ContentContainer>
        </MainContainer>
    );
}
