# Instructions - Roman Numerals

Make all changes in the `task.js` and the `spec/task.spec.js` file.

Given a positive integer number (eg 42) determine its Roman numeral representation as a String (eg "XLII"). You cannot write numerals like IM for 999.

| Arabic Number | Roman Numeral | Arabic Number | Roman Numeral |
|---------------|---------------|---------------|---------------|
| 1             | I             | 60            | LX            |
| 2             | II            | 70            | LXX           |
| 3             | III           | 80            | LXXX          |
| 4             | IV            | 90            | XC            |
| 5             | V             | 100           | C             |
| 6             | VI            | 200           | CC            |
| 7             | VII           | 300           | CCC           |
| 8             | VIII          | 400           | CD            |
| 9             | IX            | 500           | D             |
| 10            | X             | 600           | DC            |
| 20            | XX            | 700           | DCC           |
| 30            | XXX           | 800           | DCCC          |
| 40            | XL            | 900           | CM            |
| 50            | L             | 1000          | M             |

| Arabic Number | Roman Numeral | Thousands | Cents | Tenths | Units |
|---------------|---------------|-----------|-------|--------|-------|
| 846           | DCCCXLVI      | -         | DCC   | XL     | VI    |
| 1999          | MCMXCIX       | M         | CM    | XC     | IX    |
| 2008          | MMVIII        | MM        | -     | -      | VIII  |