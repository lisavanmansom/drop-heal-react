import { render, screen } from '@testing-library/react';
import Task1 from './task1';
import Task2 from './task2';
import Task3 from './task3';
import Task4 from './task4';

test('renders learn react link', () => {
  render(<>
          <Task1/>
          <Task2/>
          <Task3/>
          <Task4/>
        </>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
