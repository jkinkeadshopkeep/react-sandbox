import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '..';

jest.mock('../inputWrapper', () => 'mock-input-wrapper');

describe('Text input component', () => {
  const createComponent = (props) => <TextInput {...props} />;
  const defaultProps = {
    name: 'text-input-1',
    label: 'Your Name'
  };

  describe('when text input with no error is instantiated', () => {
    it('renders the text input', () => {
      const component = render(createComponent(defaultProps));
      expect(component.asFragment()).toMatchSnapshot();
    });
  });

  describe('when email input with no error is instantiated', () => {
    it('renders the email input', () => {
      const component = render(
        createComponent({
          ...defaultProps,
          type: 'email'
        })
      );
      expect(component.asFragment()).toMatchSnapshot();
    });
  });

  describe('when telephone input with no error is instantiated', () => {
    it('renders the telephone input', () => {
      const component = render(
        createComponent({
          ...defaultProps,
          type: 'tel'
        })
      );
      expect(component.asFragment()).toMatchSnapshot();
    });
  });
});
