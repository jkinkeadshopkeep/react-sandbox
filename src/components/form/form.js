import './stylesheets/form.scss';
import useCustomFormHook from '../customHooks/useCustomFormHook'
import Button from '../button';
import TextInput from '../text-input';

export default function Form() {
    const [values, formChange, formSubmit, clearForm] = useCustomFormHook({
        forename: '',
        surname: '',
        email: '',
        mobile: ''
    });

    return (
        <div className={'container'}>
            <div className={'info-box'}>
                <div>
                    <h1>React sandbox</h1>
                    <p>React sandbox for personal training of with react related tasks</p>
                </div>
                <div>
                    <div>078 0192841</div>
                    <div>reactsandbox@test.com</div>
                    <div>992 Testing React Ave, TestWood, Testy McTestville</div>
                </div>
            </div>
            <div>
                <form id='hookForm' onSubmit={formSubmit} className={'form-box'}>
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
                </form>
            </div>
        </div>
    );
}
