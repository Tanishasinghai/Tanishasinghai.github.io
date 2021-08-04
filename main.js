let num = new Array(11);
num[0] = "1";
num[1] = "2";
num[2] = "3";
num[3] = "4";
num[4] = "5";
num[5] = "6";
num[6] = "7";
num[7] = "8";
num[8] = "9";
num[9] = "*";
num[10] = "0";
num[11] = "#";

let symbol = new Array(11);
symbol[0] = "o_o";
symbol[1] = "abc";
symbol[2] = "def";
symbol[3] = "ghi";
symbol[4] = "jkl";
symbol[5] = "mno";
symbol[6] = "pqrs";
symbol[7] = "tuv";
symbol[8] = "wxyz";
symbol[9] = " ";
symbol[10] = "_";
symbol[11] = " ";


let text = "";
let counter = 0;
let val = "";
longPressed = false;

var
    busy = true,
    hold,
    is_busy,
    delay = 500,
    change = -1,
    click = null;
// function to create the 12 div ( keypad buttons ). In the div I put the onclick function move() and I assign them a class and Id to style it in CSS.
// also every 3 div, the next div will appear in the second line to create a keypad style.

function start() {

    let division_content = "";

    for (i = 0; i <= 11; i++) {
        let element = "number" + i;
        division_content = division_content + '<div class="symbol"  id="' + element + '">' + num[i] + '<br>' + symbol[i] + '</div>';
        if ((i + 1) % 3 == 0) division_content = division_content + '<div style="clear:both;"></div>';
    }

    // onclick="move(' + i + ');"

    document.getElementById("contentOfKey").innerHTML = division_content;

    var button = document.querySelectorAll('.symbol')
    const len = button.length;
    for (var i = 0;i < len; ++i) {
        
        button[i].onmousedown = function(e) {
            longPressed = false;
            busy = true;
            clearTimeout(is_busy);
            if (click !== e.target) {
                busy = false;
            }
            if (change >= text.length - 1 || click !== e.target) {
                change = 0;
                click = e.target;
            } else {
                change = change + 1;
            }
            if (text[0] === '#') {
                hold = setTimeout(function() {
                    
                }, delay);
                return;
            }
            hold = setTimeout(function() {
                var number =  parseInt(e.target.id.split("number")[1])
                number++;
                if(number == 11)
                    number = 0
                else if(number == 10)
                    number = "*"
                else if(number == 12)
                    number = "#"
                text += number+""
                document.getElementById("keypad").value = text;
                counter = 0;
                longPressed = true;
            }, delay);
            // input.value = busy ? input.value.slice(0, -1) + text[change] : input.value + text[change];
        };
        button[i].onmouseup = function(e) {
            const number =  parseInt(e.target.id.split("number")[1])
            if(!longPressed) 
                move(number)
            clearTimeout(hold);
            busy = true;
            is_busy = setTimeout(function() {
                change = -1;
                busy = false;
                e.target = null;
            }, delay);
            // put caret at the end of text input
        };
    }
}



//////////////////////////////////////////////////////////////////////Operating Script//////////////////////////////////////////////////

//function move will be activated when any of the div-button will be pressed, divi function argument will indicate which of the button has been pressed.

function move(divi) {
    longPressed = false;

    //for loop to assign addEventListener onmouseleave to all the buttons. it will activate the reset function that will show the result on
    //the display and will go to the next position in a way to choise another symbol.

    for (i = 0; i <= 11; i++) {
        let element = "number" + i;
        document.getElementById(element).addEventListener("mouseleave",
            function reset() {
                document.getElementById("keypad").value = text;
                counter = 0;
                return counter;
            });
        // document.getElementById(element).addEventListener("long-press",
        //     function set() {

        //         document.getElementById("keypad").value = text;
        //     });

    }
    //switch will check which div button has been pressed and will display the correct symbol. Inside the cases there are two if.
    //one to check the counter ( to check which symbol need to be displayed )
    //the second one is to check if the capital symbol button is clicked, if yes, all the next symbols will be Capital symbol till will not be deactivated.

    switch (divi) {
        case 0:
            counter++;
            if (counter >= 6) {

                counter = 1;
                text = text.toString().replace(/.$/, ".");
                document.getElementById("keypad").value = text;

                //return counter;
            }
            else {

                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "?");
                    document.getElementById("keypad").value = text;
                }

                else if (counter % 4 == 0) {
                    text = text.toString().replace(/.$/, "!");
                    document.getElementById("keypad").value = text;
                }

                else if (counter % 5 == 0) {
                    text = text.toString().replace(/.$/, "'");
                    document.getElementById("keypad").value = text;
                }

                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, ",");
                    document.getElementById("keypad").value = text;
                }

                else {
                    text += ".";
                    document.getElementById("keypad").value = text;

                }
            }

            break;

        case 1:
            counter++;

            if (counter >= 4) {
                counter = 1;
                text = text.toString().replace(/.$/, "a");
                document.getElementById("keypad").value = text;

            }
            else {
                if (counter % 3 == 0) {

                    text = text.toString().replace(/.$/, "c");
                    document.getElementById("keypad").value = text;
                }

                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "b");
                    document.getElementById("keypad").value = text;
                }
                else {
                    text += "a";
                    document.getElementById("keypad").value = text;
                }
            }
            break;
        case 2:
            counter++;

            if (counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/, "d");
                document.getElementById("keypad").value = text;

            }
            else {
                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "f");
                    document.getElementById("keypad").value = text;
                }

                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "e");
                    document.getElementById("keypad").value = text;
                }
                else {
                    text += "d";
                    document.getElementById("keypad").value = text;
                }
            }
            break;
        case 3:
            counter++;

            if (counter >= 4) {
                counter = 1;
                text = text.toString().replace(/.$/, "g");
                document.getElementById("keypad").value = text;

            }
            else {
                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "i");
                    document.getElementById("keypad").value = text;
                }
                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "h");
                    document.getElementById("keypad").value = text;

                }
                else {
                    text += "g";
                    document.getElementById("keypad").value = text;
                }
            }
            break;
        case 4:
            counter++;

            if (counter >= 4) {
                counter = 1;
                text = text.toString().replace(/.$/, "j");
                document.getElementById("keypad").value = text;
            }
            else {
                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "l");
                    document.getElementById("keypad").value = text;

                }
                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "k");
                    document.getElementById("keypad").value = text;

                }
                else {
                    text += "j";
                    document.getElementById("keypad").value = text;
                }
            }
            break;
        case 5:
            counter++;

            if (counter >= 4) {
                counter = 1;
                text = text.toString().replace(/.$/, "m");
                document.getElementById("keypad").value = text;
            }
            else {
                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "o");
                    document.getElementById("keypad").value = text;

                }
                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "n");
                    document.getElementById("keypad").value = text;
                }
                else {
                    text += "m";
                    document.getElementById("keypad").value = text;

                }
            }
            break;
        case 6:
            counter++;

            if (counter >= 5) {

                counter = 1;
                text = text.toString().replace(/.$/, "p");
                document.getElementById("keypad").value = text;

            }
            else {
                if (counter % 3 == 0) {

                    text = text.toString().replace(/.$/, "r");
                    document.getElementById("keypad").value = text;

                }

                else if (counter % 4 == 0) {

                    text = text.toString().replace(/.$/, "s");
                    document.getElementById("keypad").value = text;
                }
                else if (counter % 2 == 0) {

                    text = text.toString().replace(/.$/, "q");
                    document.getElementById("keypad").value = text;

                }

                else {

                    text += "p";
                    document.getElementById("keypad").value = text;


                }
            }
            break;
        case 7:
            counter++;

            if (counter >= 4) {
                counter = 1;
                text = text.toString().replace(/.$/, "t");
                document.getElementById("keypad").value = text;
            }
            else {
                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "v");
                    document.getElementById("keypad").value = text;
                }
                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "u");
                    document.getElementById("keypad").value = text;
                }
                else {
                    text += "t";
                    document.getElementById("keypad").value = text;
                }
            }
            break;
        case 8:
            counter++;

            if (counter >= 5) {
                counter = 1;
                text = text.toString().replace(/.$/, "w");
                document.getElementById("keypad").value = text;
            }
            else {
                if (counter % 3 == 0) {
                    text = text.toString().replace(/.$/, "y");
                    document.getElementById("keypad").value = text;
                }
                else if (counter % 4 == 0) {
                    text = text.toString().replace(/.$/, "z");
                    document.getElementById("keypad").value = text;
                }

                else if (counter % 2 == 0) {
                    text = text.toString().replace(/.$/, "x");
                    document.getElementById("keypad").value = text;
                }

                else {
                    text += "w";
                    document.getElementById("keypad").value = text;

                }
            }
            break;
        case 9:
            counter++;

            if (counter >= 1) {
                text += "*";
                document.getElementById("keypad").value = text;
            }

            break;
        case 10:
            counter++;

            if (counter >= 1) {
                text += " ";
                document.getElementById("keypad").value = text;
            }

            break;
        case 11:
            counter++;
            if (counter >= 1) {
                text += "#";
                document.getElementById("keypad").value = text;
            }
            break;


    }

}
