let addbutton = document.getElementById("add")
let subbutton = document.getElementById("sub")
let divbutton = document.getElementById("divide")
let mulbutton = document.getElementById("multiply")
let equalbutton = document.getElementById("equal")
let decimalbutton = document.getElementById("decimal")
let clearbutton = document.getElementById("clear")
let delbutton = document.getElementById("delete")
let one = document.getElementById("one")
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let disp = document.getElementById("displaybar");


one.addEventListener("click",()=>
{
    populate("1");
})
two.addEventListener("click",() =>
{
    populate("2");
})
three.addEventListener("click", () =>
{
    populate("3");
})

four.addEventListener("click", () =>
{
    populate("4");
})
five.addEventListener("click",() =>
{
    populate("5");
})

six.addEventListener("click",() =>
{
    populate("6");
})

seven.addEventListener("click",() =>
{
    populate("7");
})

eight.addEventListener("click",() =>
{
    populate("8");
})

nine.addEventListener("click",() =>
{
    populate("9");
})

zero.addEventListener("click",() =>
{
    populate("0");
})


addbutton.addEventListener("click",()=>
{
    populate("+")
})

subbutton.addEventListener("click",()=>
    {
        populate("-")
})

mulbutton.addEventListener("click",()=>
    {
        populate("*")
})

divbutton.addEventListener("click",()=>
    {
        populate("/")
})

decimalbutton.addEventListener("click", ()=>
{
    populate(".")
})

arr1 = []
arr2 = new Array(1)
arr3 = []
flag = 0
temp1 = '';
temp3 = '';


function populate(value)
{
    if((arr1[0] === undefined || ["1","2","3",".","4","5","6","7","8","9","0"].includes(value) ) && 
    !["+","-","*","/"].includes(value) && flag === 0)
    {
        if ( arr1.includes(".") && value === ".")
        {
            return;
        }
        else
        {
            arr1.push(value)
            temp1 += value;
            disp.innerHTML = temp1;
            return;
        }
    }

    if (["+","-","*","/"].includes(value))
    {
        arr2[0] = value;
        // ensuring same operator doesnt pop up twice in display bar: 
        if ( !["+","-","*","/"].includes(disp.innerHTML.slice(-1)))
        {
            disp.innerHTML += value;
        }
        flag = 1;
        return;
    }

    if((arr3[0] === undefined || ["1","2","3",".","4","5","6","7","8","9","0"].includes(value) ) && 
    !["+","-","*","/"].includes(value) && arr2[0] !== undefined)
    {
        if ( arr3.includes(".") && value === ".")
        {
            return;
        }
        else
        {
            arr3.push(value)
            temp3 += value
            disp.innerHTML = temp3;
            return;
        }
    }
}
equalbutton.addEventListener("click",()=>
{
    calculate();
})

function calculate()
{
    str1 = arr1.join("")
    
    str3 = ""
    for ( let j in arr3 )
    {
        str3 += arr3[j]
    }

    str2 = arr2[0]
    let result = 0
    if ( str2 === "+")
    {
        result = parseFloat(str1) + parseFloat(str3)
        disp.innerHTML = result;    
        firstarrayreset(result);
    }

    if ( str2 === "-")
    {
        result = parseFloat(str1) - parseFloat(str3)
        disp.innerHTML = result; 
        firstarrayreset(result);
    }

    if ( str2 === "*")
    {
        result = parseFloat(str1) * parseFloat(str3)
        disp.innerHTML = result;
        firstarrayreset(result);
    }

    if ( str2 === "/")
    {
        result = parseFloat(str1) / parseFloat(str3)
        disp.innerHTML = result;
        firstarrayreset(result);
    }
}

function firstarrayreset(resetvalue)
{
    let splitstring = String(resetvalue).split("")
    for ( let i = 0 ; i<splitstring.length ; i++)
    {
        arr1[i] = splitstring[i]
    }
    arr2[0] = undefined;
    arr3 =[]
    temp3 = ''
    temp1 = String(resetvalue)
}

clearbutton.addEventListener("click", ()=>
{
    reset();
})

function reset()
{
    temp1 = ''
    temp3 = ''
    arr1 = []
    arr2 = new Array(1)
    arr3 = []
    disp.innerHTML = "0"
    flag = 0
}

delbutton.addEventListener("click",()=>
{
    backspace();
})

function backspace()
{
    if ( flag === 1) //then change can only be made to 2nd number
    {
        temp3 = temp3.slice(0,-1)
        arr3.pop();
        disp.innerHTML = temp3;
    }
    else if ( flag === 0)
    {
        temp1 = temp1.slice(0,-1)
        arr1.pop()
        disp.innerHTML = temp1;
        console.log(temp1,"is temp1.")
    }
}
