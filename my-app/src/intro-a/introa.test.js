import { render, screen } from '@testing-library/react';
import IntroA1 from './introa1';
import IntroA2 from './introa2';
import IntroA3 from './introa3';

test('renders learn react link', () => {
  render(<>
          <IntroA1/>
          <IntroA2/>
          <IntroA3/>
        </>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
