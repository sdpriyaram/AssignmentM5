const operArr = ["+","-","*","/"];

function validatenum(num)
 {  
    let res = false;
    if (!(isNaN(parseInt(num))))
        res =  true;
    return res;
 }
 
function validateoper(oper)
{
    let res = false;
    if (operArr.includes(oper))
        res = true;
    return res; 
}

function validateAll(num1,num2,oper)
{
    res = false;
    if (validatenum(num1) && validatenum(num2) && validateoper(oper))
       res = true;
    return res;
}

// ADD A FUNCTION CALLED CALCULATE
const calculate = (num1, num2,oper) => eval(num1 + oper + num2)

// COLLECT FIRST NUMBER FROM USER
function getNumber1()
{
    let num1 = prompt("Enter first number: ");
    return num1;
}
// COLLECT SECOND NUMBER FROM USER
function getNumber2()
{
    let num2 = prompt("Enter second number: ");
    return num2;
}
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
function getOperator()
{
    oper = prompt("Enter Operator (+,-,*,/) : ");
    return oper;
}
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
function main()
{
    do
    {
    num1 = getNumber1();
    num2 = getNumber2();
    oper = getOperator();

        if (validateAll(num1,num2,oper))
        {
            let result = calculate(num1,num2,oper);
            alert(result);
        }
        else
            alert("Please enter valid numbers and operator.");
    }
    while (!validateAll(num1,num2,oper));
}

main(); 