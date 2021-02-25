import React from 'react';
import {render} from '@testing-library/react';
import Form from "../index";
import TextInput from "../../text-input";

describe('Form Component', () => {
    it('should render form with an input', () => {
        const {container} = render(<Form id='hookForm'>
            <TextInput
                type='text'
                name='forename'
                label='Forename'
            />
        </Form>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
