# Temp Converter
A react app that converts temperature values from F <--> C

### Here's what to do:
 - build a temperature converter between F and C
   - C = (F-32)*(5/9)
   - F = C*(9/5)+32
 - Start a new react app with the Vite react template
 - Add two components, the Fahrenheit component and the Celsius component, both children of the root component
 - Both components should have:
   - an input field to enter temp
   - the temp in that unit rendered on page
   - a button to calculate the conversion
 - Users should be able to enter a temp in either F or C, click the button, and see the other component update with the newly calculated temp.
 - Use lifting state to lift the input to the shared parent component, convert the temperature, then send it down to the other child component to be displayed.


### Stretch Goals:
 - Update the app so that just entering a temp causes the conversion to occur immedately, no button press necessary
 - Update the temperature displayed in the input boxes immediately so the two inputs are both always synced
 - Add a third component, one for temperatures in Kelvin
