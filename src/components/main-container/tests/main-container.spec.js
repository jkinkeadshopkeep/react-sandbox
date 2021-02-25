import React from 'react';
import { render } from '@testing-library/react';
import MainContainer from "../index";

describe('Main container Component', () => {
  it('should render with content inside container', () => {
    const { container } = render(<MainContainer><p>Hello am rendered</p></MainContainer>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
