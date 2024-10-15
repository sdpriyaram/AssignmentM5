//STEP 1
function halfNumber(num1)
{
    let num2;
    if (isNaN(parseInt(num1)))
        num2 = "Invalid number";
    else
        {
            num2 = num1/2
            console.log(`Half of ${num1} is ${num2}.`);
        }
    return num2;
}
//STEP 2
function squareNumber(num1)
{
    let num2;
    if (isNaN(parseInt(num1)))
        num2 = "Invalid number";
    else
        {
            num2 = num1 * num1;
            console.log(`The result of squaring the number ${num1} is ${num2}.`);
        }
    return num2;
    
}
//STEP 3
function percentOf(num1, num2)
{
    let num3;
    if (isNaN(parseInt(num1)) || isNaN(parseInt(num2)))
        num3 = "Invalid numbers";
    else
        {
            if (num1 > num2)
                num3 = (num2/num1) * 100;
            else
                num3 = (num1/num2) * 100;
            
            console.log(`${num1} is ${num3}% of ${num2}.`);
        }
    return num3;
}
//STEP 4
function findModulus(num1,num2)
{
    let num3;
    if (isNaN(parseInt(num1)) || isNaN(parseInt(num2)))
        num3 = "Invalid numbers";
    else
        {
            if (num1 > num2)
                num3 = num1%num2;
            else
                num3 = num2%num1;
            console.log(`${num3} is the modulus of ${num1} and ${num2}.`);
        }
    return num3;
}
//STEP 5
function main()
{
    halfNumber(86);
    squareNumber(5);
    percentOf(60,20);
    findModulus(74,13);
}

main();