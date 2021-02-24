import React from 'react';
import { render } from '@testing-library/react';
import InputWrapper from '../inputWrapper';

describe('TextInputWrapper component', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
    testContext.component = render(
      <InputWrapper id="foo" label="Dummy Label">
        <span>Dummy child</span>
      </InputWrapper>
    );
  });

  it('renders its children, and a label for an element with the given id', () => {
    expect(testContext.component.asFragment()).toMatchSnapshot();
  });
});
