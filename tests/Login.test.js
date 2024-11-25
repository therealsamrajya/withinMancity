import React from "react";
import { render } from "@testing-library/react-native";
import Login from "../components/Form/Login"


jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(),
    getItem: jest.fn()
  }));


  describe("Basic Login Tests",()=> {
    it("renders the login title", () => {
        const { getByText } = render(
            <Login onNavigatetoRegister={() => {}} />
            );
            expect(getByText("Login")).toBeTruthy();
  })
  })