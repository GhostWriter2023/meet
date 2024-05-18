import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import mockData from '../mock-data';

jest.mock('../api', () => ({
  getEvents: jest.fn()
}));

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        EventListComponent = render(<EventList events={[]} />);
    })

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    getEvents.mockResolvedValue(mockData);

    const allEvents = await getEvents(); 
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});
