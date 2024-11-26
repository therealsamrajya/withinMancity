import React from "react";
import { fireEvent, render,screen } from "@testing-library/react-native";
import Register from "../components/Form/Register";
import { userEvent } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn()
})); 

describe('Register Component', () => {
  it('navigates to login after successful registration', () => {
    // Create a mock navigation function
    const mockNavigate = jest.fn();

    const { getByPlaceholderText, getByRole } = render(
      <Register onNavigatetoLogin={mockNavigate} />
    );

    // Fill out registration form
    fireEvent.changeText(
      getByPlaceholderText('Enter your name'), 
      'John Doe'
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your email'), 
      'john@example.com'
    );
    fireEvent.changeText(
      getByPlaceholderText('Enter your password'), 
      'StrongPassword123!'
    );

    // Stub AsyncStorage to simulate successful save
    AsyncStorage.setItem.mockResolvedValue(null);
    AsyncStorage.getItem.mockResolvedValue(
      JSON.stringify([])
    );

    // Press submit
    fireEvent.press(getByRole('button'));

    // Assert navigation function was called
    expect(mockNavigate).toHaveBeenCalled();
  });
});

describe("Basic Register Tests", () => {
    // This test will run
    it("renders the register title", () => {
      const { getByText } = render(
        <Register onNavigatetoLogin={() => {}} />
      );
      expect(getByText("Register")).toBeTruthy();

    
      // screen.debug()
    });
  
    //checking if the component is rendering
    describe("It renders",()=>{

      it("renders App component",()=> {
        render (<Register/>)
        expect(screen.getByPlaceholderText("Enter your name")).toBeTruthy();
        expect(screen.getByPlaceholderText("Enter your email")).toBeTruthy();
        expect(screen.getByPlaceholderText("Enter your password")).toBeTruthy();
        
        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeTruthy()
        fireEvent.press(submitButton);
       
        // screen.debug()
      })


      it("allows user to type in the fields", () => {
        render(<Register onNavigatetoLogin={() => {}} />);
  
        const emailInput = screen.getByPlaceholderText("Enter your email");
        const passwordInput = screen.getByPlaceholderText("Enter your password");
      
        fireEvent.changeText(emailInput, "test@example.com");
        fireEvent.changeText(passwordInput, "password123");
      
        expect(emailInput.props.value).toBe("test@example.com");
        expect(passwordInput.props.value).toBe("password123");
      });
    

    
    })

    
    


    }
  );