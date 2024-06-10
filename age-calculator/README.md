# Age Calculator 👨‍💻

This project is a web application that calculates a person's age based on their date of birth. The calculation considers years, months, and days, taking leap years into account.

## Features 🛠

- **Date of Birth Input**: Allows the user to enter the day, month, and year of birth.
- **Age Calculation**: Calculates the age in years, months, and days from the date of birth to the current date.
- **Input Validation**: Checks if the date of birth is valid, considering the validity of the entered day, month, and year.

## Technologies Used 🧰

- **React**: JavaScript library for building user interfaces.
- **date-fns**: Utility library for manipulating and formatting dates in JavaScript.
- **CSS**: Styling of application components.
- **TypeScript**: Superset of JavaScript that adds static typing to the code.

## Project Structure

```
src/
├── app/
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.css
│ └── page.tsx
|
├── components/
│ ├── AddIcon.tsx
│ ├── Button.tsx
| ├── Card.tsx
│ ├── Input.tsx
│ ├── Text.tsx
└── index.tsx
```

- **src/**: Contains the source code.
- **app/**: Contains the application pages.
- **components/**: Contains reusable application components.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yoshi00/age-calculator.git
   ```

2. Navigate to the project directory:

   ```sh
   cd age-calculator
   ```

3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the application:
   ```sh
   npm run dev
   ```

## Code Explanation 👨‍🏫

#### **page.tsx**:

This file contains the main logic for age calculation:

#### **States**:

-**age**: Stores the calculated age.

-**inputValue**: Stores the input values (day, month, and year).

-**inputEnabled**: Controls whether the input is valid or not.

#### **Functions**:

-**calculateAge**: Calculates the age based on the current date and the entered date of birth.

-**handleInputChange**: Updates the input values as the user types.

-**handleKeyPress**: Validates the allowed characters in the input.

#### **Rendering**:

-A form with inputs for day, month, and year.

-A button to calculate the age.

-Display of the calculated age.
