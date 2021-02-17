import "./stylesheets/form.css";
import useCustomFormHook from "../customHooks/useCustomFormHook"

export default function Form() {
    const [values, formChange, formSubmit, clearForm] = useCustomFormHook({
        title: "Mr",
        forename: "",
        surname: "",
        email: "",
        mobile: "",
        username: "",
        pin: ""
    });

    return (
        <div className={"container"}>
            <form id="hookForm" onSubmit={formSubmit} className={"form-box"}>
                <label>
                    Title:{" "}
                    <select value={values.title} name="title" onChange={formChange}>
                        <option value="Mr">Mr</option>
                        <option value="Miss">Miss</option>
                        <option value="Mrs">Mrs</option>
                    </select>
                </label>
                <br/>
                <label>
                    Forename:{" "}
                    <input
                        type="text"
                        value={values.forename}
                        name="forename"
                        onChange={formChange}
                    />
                </label>
                <br/>
                <label>
                    Surname:{" "}
                    <input
                        type="text"
                        value={values.surname}
                        name="surname"
                        onChange={formChange}
                    />
                </label>
                <br/>
                <label>
                    Email:{" "}
                    <input
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={formChange}
                    />
                </label>
                <br/>
                <label>
                    Mobile:{" "}
                    <input
                        type="tel"
                        value={values.mobile}
                        name="mobile"
                        onChange={formChange}
                    />
                </label>
                <br/>
                <label>
                    Username:{" "}
                    <input
                        type="text"
                        value={values.username}
                        name="username"
                        onChange={formChange}
                    />
                </label>
                <br/>
                <label>
                    PIN:{" "}
                    <input
                        type="password"
                        value={values.pin}
                        name="pin"
                        onChange={formChange}
                    />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
                <button type="button" onClick={clearForm}>Clear Form</button>
            </form>
        </div>
    );
}
