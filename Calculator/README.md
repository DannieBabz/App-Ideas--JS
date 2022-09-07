# Calculator

Calculators are not only one of the most useful tools available, but they are
also a great way to understand UI and event processing in an application. In
this problem you will create a calculator that supports basic arithmetic
calculations on integers. 

The styling is up to you so use your imagination and get creative! You might
also find it worth your time to experiment with the calculator app on your
mobile device to better understand basic functionality and edge cases.

### Constraints

- You may not use the `eval()` function to execute calculations

## User Stories

- User can see a display showing the current number entered or the
result of the last operation.
- User can see an entry pad containing buttons for the digits 0-9, 
operations - '+', '-', '/', and '=', a 'back arrow' button (for clear), and an 'C'
button (for clear all).
- User can enter numbers as sequences up to 8 digits long by clicking on
digits in the entry pad. Entry of any digits more than 8 will be ignored.
- User can click on an operation button to display the result of that
operation on:
    * the result of the preceding operation and the last number entered OR
    * the last two numbers entered OR
    * the last number entered
- User can click the 'Back Arrow' button to clear the last number or the last
operation. If the users last entry was an operation the display will be
updated to the value that preceded it.
- User can click the 'C' button to clear all internal work areas and
to set the display to 0.
