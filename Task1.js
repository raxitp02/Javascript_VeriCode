function multiply(num1, num2)
{
    /* this will add Num1 one by one */
    if(num2 > 0 )
    {
        return (num1 + multiply(num1, num2-1));
    }

    /* This condition for num2 is negative */
    else if(num2 < 0 )
    {
        return -multiply(num1, -num2);
    }

    return 0;
}

document.write(multiply(20, 5));