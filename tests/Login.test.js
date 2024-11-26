import React from "react";
import { fireEvent, render,screen, userEvent } from "@testing-library/react-native";
import Login from "../components/Form/Login"
import { Pressable } from "react-native";


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

  describe("It renders",()=>{
    it("renders App component",()=> {
      render (<Login onNavigatetoRegister={()=> {}}/>)
      expect(screen.getByPlaceholderText("Enter your email")).toBeTruthy();
      expect(screen.getByPlaceholderText("Enter your password")).toBeTruthy();
      const submitButton = screen.getByRole("button")
      expect(submitButton).toBeTruthy()
      fireEvent.press(submitButton);
      // screen.debug()
    })

    it("allows user to type in the fields", () => {
      render(<Login onNavigatetoRegister={() => {}} />);

      const emailInput = screen.getByPlaceholderText("Enter your email");
      const passwordInput = screen.getByPlaceholderText("Enter your password");
    
      fireEvent.changeText(emailInput, "test@example.com");
      fireEvent.changeText(passwordInput, "password123");
    
      expect(emailInput.props.value).toBe("test@example.com");
      expect(passwordInput.props.value).toBe("password123");
    });



    

    
  })
