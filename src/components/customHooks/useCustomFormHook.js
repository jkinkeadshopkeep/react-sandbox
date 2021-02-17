import {useState} from 'react';

const useFormHandlingHook = (initObj) => {
    const [values, setValues] = useState(initObj);

    const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value});

    function handleSubmit(event) {
        alert("Form submitted: " + JSON.stringify(values));
        event.preventDefault();
    }

    function clearForm() {
        let emptyValueList = Object.fromEntries(Object.entries(values).map(([key, _]) => [key, ""]));
        setValues({...values, ...emptyValueList});
    }

    return [
        values,
        handleChange,
        handleSubmit,
        clearForm];
}

export default useFormHandlingHook;