import React from 'react';
import { render } from '@testing-library/react';
import InfoBox from "../index";

describe('Info Box Component', () => {
  it('should render info box component', () => {
    const { container } = render(<InfoBox/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
