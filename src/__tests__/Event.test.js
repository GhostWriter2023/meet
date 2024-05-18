import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
    let event;
    let container;

    beforeEach(() => {
        event = mockData[0];
        const renderResult = render(<Event event={event} />);
        container = renderResult.container;
        });

    test('shows event title', () => {
        expect(screen.queryByText(event.summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        const createdDate = (new Date(event.created)).toUTCString();
        expect(screen.queryByText(createdDate)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(screen.queryByText(event.location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(screen.queryByText('show details')).toBeInTheDocument();
    });

    test('event details hidden by default', () => {
        expect(container.querySelector('.details')).not.toBeInTheDocument();
    });
    
    test('shows details section when the user clicks on (show details) button', async () => {
        const user = userEvent.setup();
        const showDetailsButton = screen.queryByText('show details'); 
        
        await user.click(showDetailsButton);
        expect(container.querySelector('.details')).toBeInTheDocument();
        expect(screen.queryByText('hide details')).toBeInTheDocument();
        //expect(screen.queryByText('show details')).not.toBeInTheDocument();
    });

    test('hide details section when the user clicks on (hide details) button', async () => {
        const user = userEvent.setup();
        const showDetailsButton = screen.queryByText('show details');

        await user.click(showDetailsButton);
        expect(container.querySelector('.details')).toBeInTheDocument();
        expect(screen.queryByText('hide details')).toBeInTheDocument();
        //expect(screen.queryByText('show details')).not.toBeInTheDocument();

        const hideDetailsButton = screen.queryByText('hide details');
        await user.click(hideDetailsButton);
        expect(container.querySelector('.details')).not.toBeInTheDocument();
        //expect(screen.queryByText('hide details')).not.toBeInTheDocument();
        expect(screen.queryByText('show details')).toBeInTheDocument();
    });
});