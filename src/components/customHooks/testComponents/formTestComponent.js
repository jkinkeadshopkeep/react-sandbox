import useCustomFormHook from "../useCustomFormHook";

export default function TestComponent() {
    const [values, formChange, submitForm, clearForm] = useCustomFormHook({
        forename: "Joe",
        surname: "Bloggs"
    });

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="forename">
                Forename
            </label>
            <input
                type="text"
                value={values.forename}
                name="forename"
                id="forename"
                onChange={formChange}
            />
            <label htmlFor="surname">
                Surname
            </label>
            <input
                type="text"
                value={values.surname}
                name="surname"
                id="surname"
                onChange={formChange}
            />
            <button type="button" onClick={clearForm}>Clear Form</button>
        </form>
    );
}