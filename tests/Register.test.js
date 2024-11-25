import React from "react";
import { render } from "@testing-library/react-native";
import Register from "../components/Form/Register";
import { userEvent } from "@testing-library/react-native";

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn()
})); 

describe("Basic Register Tests", () => {
    // This test will run
    it("renders the register title", () => {
      const { getByText } = render(
        <Register onNavigatetoLogin={() => {}} />
      );
      expect(getByText("Register")).toBeTruthy();
    });
  
    // fill form 
    // const fillForm = (getByPlaceholderText, { name = "" , email = "",password = ""})=> {
    //   userEvent.type(getByPlaceholderText("Enter your name"),name)
    //   userEvent.type(getByPlaceholderText("Enter your email"),email)
    //   userEvent.type(getByPlaceholderText("Enter your password"),password)

    // }
    


    }
  );