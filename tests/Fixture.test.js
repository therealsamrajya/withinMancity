import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import Fixture from "../app/(tabs)/Fixture";
import { footballEndpoints } from "../utils/api";

// Mock the API endpoints
jest.mock("../utils/api", () => ({
  footballEndpoints: {
    getUpcomingMatches: jest.fn(),
    getCurrentSeasonMatches: jest.fn(),
  },
}));

describe("Fixture Component", () => {
  // Setup mock data
  const mockMatches = [
    {
      id: 1,
      competition: { name: "Premier League" },
      utcDate: "2023-06-15T18:00:00Z",
      homeTeam: { name: "Manchester City FC" },
      awayTeam: { name: "Manchester United FC" },
      stage: "REGULAR_SEASON",
    },
  ];

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Default mock implementation
    footballEndpoints.getUpcomingMatches.mockResolvedValue({
      data: { matches: mockMatches },
    });
    footballEndpoints.getCurrentSeasonMatches.mockResolvedValue({
      data: { matches: mockMatches },
    });
  });

  // Test tab switching with act
  it("switches between tabs", async () => {
    const { getByText, debug } = render(<Fixture />);

    // Wait for component to load
    await waitFor(() => {
      expect(getByText("Upcoming")).toBeTruthy();
      expect(getByText("Season")).toBeTruthy();
    });

    // Use act for state updates
    await act(async () => {
      // Find and press the Season tab
      const seasonTab = getByText("Season");
      fireEvent.press(seasonTab);
    });

    // Verify API call
    await waitFor(() => {
      expect(footballEndpoints.getCurrentSeasonMatches).toHaveBeenCalled();
    });
  });

  // Detailed rendering test
  it("renders matches correctly", async () => {
    const { getByText } = render(<Fixture />);

    // Wait for matches to render
    await waitFor(() => {
      expect(getByText("Manchester City FC")).toBeTruthy();
      expect(getByText("Manchester United FC")).toBeTruthy();
      expect(getByText("Premier League")).toBeTruthy();
    });
  });

  // Error handling test
  it("displays error when API fails", async () => {
    // Mock API to throw an error
    footballEndpoints.getUpcomingMatches.mockRejectedValue(
      new Error("Network error")
    );

    const { getByText } = render(<Fixture />);

    // Wait for error message
    await waitFor(() => {
      expect(getByText("Failed to fetch fixtures")).toBeTruthy();
    });
  });

  // Refresh functionality test
  it("handles pull to refresh", async () => {
    const { getByTestId } = render(<Fixture />);

    await waitFor(() => {
      const fixtureList = getByTestId("fixture-list");
      expect(fixtureList).toBeTruthy();
    });

    // Simulate refresh
    await act(async () => {
      // Trigger refresh
      fireEvent(getByTestId("fixture-list"), "refreshing");
    });

    // Verify API called again
    await waitFor(() => {
      expect(footballEndpoints.getUpcomingMatches).toHaveBeenCalled();
    });
  });
});
