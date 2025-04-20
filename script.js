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

arr = new Array(3);

one.addEventListener("click",()=>
{
    populate("1");
})

two.addEventListener("click",() =>
{
    populate("2");
})

addbutton.addEventListener("click",()=>
{
    populate("+")
})

function populate(value)
{
    if (arr[0] === undefined)
    {
        arr[0] = value
        disp.innerHTML = value 
        return;
    }

    else if ( arr[0] !== undefined && ["+", "-", "*", "/"].includes(value)
    )
    {
        arr[1] = value
        console.log(arr)
        disp.innerHTML = arr[0] + arr[1]
    }

    else if ( arr[1] !== undefined && ["1","2","3"].includes(value))
    {
        arr[2] = value
        console.log("one is:",arr[1])
        disp.innerHTML = arr[0] + arr[1] + arr[2]
    }
}

function populateoperator(oper)
{
    
}







