import { render, screen } from '@testing-library/react';

import { Cards } from './cards';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning react"', () => {
            render(
                <>
                    <Cards></Cards>
                </>
            );
            const element = screen.getByText(/nombre y familia/i);
            expect(element).toBeInTheDocument();
        });
    });
});
