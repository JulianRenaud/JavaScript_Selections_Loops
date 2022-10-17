// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if (i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log("Not Divisible");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3, PT 1:\n==========\n");

let x = 0;
while (x <= 100)
{
    if (x % 3 == 0 && x % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (x % 3 == 0)
    {
        console.log("Fizz");
    }
    else if (x % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log("Not Divisible");
    }
    x++
}
console.log("EXERCISE 3, PT 2:\n==========\n");
let y = 0;
do
{
    if (y % 3 == 0 && y % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (y % 3 == 0)
    {
        console.log("Fizz");
    }
    else if (y % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log("Not Divisible");
    }
    y++
} while (x <= 100)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
// creates a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 
// creates a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;
for (let i = 0; i < n; i++) {
    if (i = value)
    {
        console.log("Found Value!\n" + 
                    `The value is: ${i}`
                   );
        found = true;
        break;
    }
}
if (found = false)
{
    console.log("Did not find value");
}

// Exercise 5 Section
console.log("EXERCISE 5 --BONUS--:\n==========\n");
// creates a random number between 1 and 10
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// creates a random number between 1 and 1000
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1); 

for (; start <= end; start++) {
    if (start % fizzDivisor == 0 && start % buzzDivisor == 0)
    {
        console.log("FizzBuzz");
    }
    else if (start % fizzDivisor == 0)
    {
        console.log("Fizz");
    }
    else if (start % buzzDivisor == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log("Not Divisible");
    }
}