/* *\
*   * Name: Syntax 0.0.1
*   * Creator: Sabri Meeran
*   * Licence: Creative Commons Attribution-ShareAlike 4.0 International Licence
\* */

var a = "div: load";
var b = 0;
var c = "";
while (a.charAt(b) !== ":") {
    c = c.concat(a.charAt(b));
    b++;
};
console.log(c);
