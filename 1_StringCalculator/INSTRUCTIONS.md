# Instructions - String Calculator

Make all changes in the `task.js` and the `spec/task.spec.js` file.

1. Create a simple String calculator with a method `add("string of numbers")`
    - The method can take 0, 1 or 2 ("", "1", "2, 5") comma-separated numbers as a string, and will return a number value of their sum.
    - Start with the simplest test case of an empty string (which returns 0) and move to 1 and two numbers

2. Allow the `add` method to handle an unknown amount of numbers

3. Allow the `add` method to handle new lines between numbers (instead of commas).
    - the following input is ok:  “1\n2,3”  (will equal 6)
    - the following input is NOT ok:  “1,\n” (not need to prove it - just clarifying)

4. Support different delimiters
    - to change a delimiter, the beginning of the string will contain a separate line that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
    - the first line is optional. all existing scenarios should still be supported

5. Calling `add` with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message

### Advanced Features

6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2

7. Delimiters can be of any length with the following format:  “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6

8. Allow multiple delimiters like this:  “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.
9. Make sure you can also handle multiple delimiters with length longer than one char
