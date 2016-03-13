/* *\
*   * Name: Syntax 0.0.1
*   * Creator: Sabri Meeran
*   * Licence: Creative Commons Attribution-ShareAlike 4.0 International Licence
\* */

var a = "text: uppercase;";
var b = 0;
var c = "";
var d = "";
while (a.charAt(b) !== ":" || b === a.length) {
    c = c.concat(a.charAt(b));
    b ++;
};
if (b === a.length) {
    console.log("Error: Colon not found.")
} else {
    b += 2;
    while (a.charAt(b) !== ";" || b === a.length) {
         d = d.concat(a.charAt(b));
         b ++;
    }
    /*
    console.log(c);
    console.log(d);
    */
    if (d === "uppercase") {
        console.log(c.toUpperCase());
    };
};
