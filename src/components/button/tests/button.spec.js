import React from 'react';
import { render } from '@testing-library/react';
import Button from '..';

describe('Button Component', () => {
  it('should render with standard class name', () => {
    const { container } = render(<Button>My Button</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
