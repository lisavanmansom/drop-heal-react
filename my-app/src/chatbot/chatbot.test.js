import { render, screen } from '@testing-library/react';
import Chatbot from './chatbot';

test('renders learn react link', () => {
  render(<>
          <Chatbot/>
        </>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
