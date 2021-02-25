import TestComponent from "./testComponents/formTestComponent";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('#useCustomFormHook', () => {

    describe('when initial form values initialized', () => {
        it('should render input values correctly', () => {
            const {asFragment} = render(<TestComponent/>);
            screen.debug();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('when input value is updated', () => {
        it('update and render correctly', () => {
            const {asFragment, getByLabelText} = render(<TestComponent/>);
            const input = getByLabelText('Forename');
            userEvent.clear(input);
            userEvent.type(input, "Bob");
            expect(input.value).toBe('Bob');
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('when form is cleared', () => {
        it('update and render correctly', () => {
            const {asFragment, getByText, getByLabelText} = render(<TestComponent/>);
            const clearButton = getByText('Clear Index');
            const forenameInput = getByLabelText('Forename');
            const surnameInput = getByLabelText('Surname');

            userEvent.click(clearButton);
            expect(forenameInput.value).toBe('');
            expect(surnameInput.value).toBe('');
            expect(asFragment()).toMatchSnapshot();
        });
    });
});