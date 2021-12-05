import Button from '../'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
    it('should show an accesible button that execute function when clicked', () => {
        const mockFn = jest.fn()
        render(<Button onClick={mockFn} />);
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
        userEvent.click(button)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})