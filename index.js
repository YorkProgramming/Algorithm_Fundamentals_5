//1. 
//Sigma

/* Implement function sigma(num) that given a number, 
returns the sum of all positive integers up to number (inclusive). 
Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). */

function sigma(num){

    var sum = 0;
    
    for(var i = 1; i <= num; i++){
        sum += i;
    }
    
    return sum;
}

//We set sum to 0, then we loop through the numbers from 1 to num,
//adding each number to sum. Finally, we return sum.

//####################################################################################

//2.
//Factorial

/* Just the Facts, ma’am. Factorials, that is. Write a function factorial(num)
that, given a number, returns the product (multiplication) of all positive integers
from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3);
factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5). */

function factorial(num){

    var product = 1;

    for(var i = 1; i <= num; i++){
        product *= i;
    }

    return product;
}

//We set product to 1, then we loop through the numbers from 1 to num,
//multiplying each number to product

//####################################################################################

//3.
//Star Art

/* Assume that you have a text field that is exactly 75 characters long.
You want to fill it with spaces and asterisks ('*'), sometimes called stars.
You should print the given number of asterisks consecutively.
Depending on which function is called, those stars should be left-justified
(the first star would be very first char in the text field), or right-justified
(the last star would be very last char in the text field, with potentially some
number of spaces at beginning of text field before the block of stars start),
or centered in the 75-character text field (with same number of spaces on either
side of the block of stars, plus/minus one).

Write a function drawLeftStars(num) that accepts a number and prints that many
asterisks.

Write a function drawRightStars(num) that prints 75 characters total. Stars should
build from right side. The last num characters should be asterisks; the other 75
should be spaces.

Write function drawCenteredStars(num) that prints 75 characters total. The stars
should be centered in the 75. The middle num characters should be asterisks; the
rest of the 75 spaces. */

function drawLeftStars(num){
    
        var stars = "";
    
        for(var i = 0; i < num; i++){
            stars += "*";
        }
    
        return stars;
    }

    console.log(drawLeftStars(500));

    //We set stars to an empty string, then we loop through the numbers from 0 to num,
    //adding a star to stars each time

//####################################################################################

function drawRightStars(num){
    
        var stars = "";
    
        for(var i = 0; i < 75; i++){
            if(i < 75 - num){
                stars += " ";
            }
            else{
                stars += "*";
            }
        }
    
        return stars;
    }

    console.log(drawRightStars(25));

    //We set stars to an empty string, then we loop through the numbers from 0 to 75,
    //adding a star to stars each time, except when i is less than 75 - num, in which
    //case we add a space to stars

//####################################################################################

function drawCenteredStars(num){
        
            var stars = "";
        
            for(var i = 0; i < 75; i++){
                if(i < Math.floor((75 - num) / 2) || i >= Math.floor((75 - num) / 2) + num){
                    stars += " ";
                }
                else{
                    stars += "*";
                }
            }
        
            return stars;
        }

        console.log(drawCenteredStars(25));

        //We set stars to an empty string, then we loop through the numbers from 0 to 75,
        //adding a star to stars each time, except when i is less than the floor of 75 - num
        //divided by 2, or when i is greater than or equal to the floor of 75 - num divided by 2
        //plus num, in which case we add a space to stars

//####################################################################################

