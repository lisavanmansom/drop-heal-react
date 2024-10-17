import { render, screen } from '@testing-library/react';
import Introh1 from './introh1';
import Introh2 from './introh2';
import Introh3 from './introh3';

test('renders learn react link', () => {
  render(<>
          <Introh1/>
          <Introh2/>
          <Introh3/>
        </>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
