import "./stylesheets/form.scss";
import useCustomFormHook from "../customHooks/useCustomFormHook"

export default function Form() {
    const [values, formChange, formSubmit, clearForm] = useCustomFormHook({
        forename: "",
        surname: "",
        email: "",
        mobile: ""
    });

    return (
        <div className={"container"}>

            <div className={"info-box"}>
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
                <form id="hookForm" onSubmit={formSubmit} className={"form-box"}>
                    <label htmlFor="forename">
                        Forename
                    </label>
                    <input
                        type="text"
                        value={values.forename}
                        name="forename"
                        onChange={formChange}
                    />
                    <br/>
                    <label htmlFor="surname">
                        Surname
                    </label>
                    <input
                        type="text"
                        value={values.surname}
                        name="surname"
                        onChange={formChange}
                    />
                    <br/>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={formChange}
                    />
                    <br/>
                    <label htmlFor="mobile">
                        Mobile
                    </label>
                    <input
                        type="tel"
                        value={values.mobile}
                        name="mobile"
                        onChange={formChange}
                    />
                    <br/>
                    <button type="submit" value="Submit">Submit</button>
                    <button type="button" onClick={clearForm}>Clear Form</button>
                </form>
            </div>
        </div>
    );
}
