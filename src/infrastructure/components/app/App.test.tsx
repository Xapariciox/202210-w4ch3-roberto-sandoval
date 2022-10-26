import { screen, render } from '@testing-library/react';
import { App } from './App';

describe('Given App component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning react"', () => {
            render(
                <>
                    <App></App>
                </>
            );
            const element = screen.getByText(/Testing App/i);
            expect(element).toBeInTheDocument();
        });
    });
});
