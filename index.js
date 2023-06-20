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