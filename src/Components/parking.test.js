import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Parkingmain from './Parkingmain'; // here we imported the component.

// Mocking Axios
jest.mock('axios');

describe('ParkingManagement component', () => {
  it('fetches data and sets state after 1 second', async () => {
    // Arrange
    const mockData = {
      _id: '65449c2ca88bb6f3d401b47f',
      a1: 1,
      a2: 1,
      a3: 0,
      a4: 0,
      a5: 0,
      a6: 0,
    };
    axios.get.mockResolvedValue({ data: [mockData] });

    // Act
    render(<Parkingmain />); // here we rendered the component parking main

    // Advance timers by 1 second
    jest.advanceTimersByTime(1000);

    // Wait for the asynchronous operations to complete
    await waitFor(() => {
      // Assert after waiting
expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
expect(screen.queryByText(/available cars/i)).toBeInTheDocument();
    });
});
});


test('test', ()=>{
    expect(true).toBe(true);
})