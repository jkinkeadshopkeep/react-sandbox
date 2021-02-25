import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from "../index";

describe('Content container Component', () => {
  it('should render with content inside container', () => {
    const { container } = render(<ContentContainer><p>Hello am rendered</p></ContentContainer>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
