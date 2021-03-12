import {useState} from 'react';

const useFormHandlingHook = (initObj) => {
    const [values, setValues] = useState(initObj?.initialValues || {});
    const [errors, setErrors] = useState({});

    const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value});

    const handleSubmit = async (event) => {
        event.preventDefault();
        validateFormValues();
    }

    function clearForm() {
        let emptyValueList = Object.fromEntries(Object.entries(values).map(([key, _]) => [key, ""]));
        setValues({...values, ...emptyValueList});
    }

    function validateFormValues() {
        const validations = initObj?.validations;
        if (validations) {
            let valid = true;
            const newErrors = {};
            for (const key in validations) {
                const value = values[key];
                const validation = validations[key];
                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});
        alert("Form submitted: " + JSON.stringify(values));
    }

    return [
        values,
        handleChange,
        handleSubmit,
        clearForm,
        errors];
}

export default useFormHandlingHook;