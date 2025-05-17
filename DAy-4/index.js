var a = 5;
var b = 6;
var c = 10

// var c;
// c = a > b;
// console.log("value of c is", c);

//  conditional
// Ques: which is the greatest?

// if(a>b)
// {
//     if(a>c)
//     {
//        console.log("A is greatest");
//     }
//     else
//     {
//         console.log("C is greatest");
//     }
// }
// else
// {
//    if(b>c)
//    {
//     console.log("B is greatest");
//    }
//    else
//    {
//     console.log("C is greatest");
//    }
// }




// while()
// {
//     console.log();
// }


//  print 1-100 using for and while loop
// var i = 0;
// while(i<100)
// {
//     console.log(i);
//     i = i + 1;
// }

// for(var p=1; p < 101 ; p++)
// {
//    console.log(" value of P is", p);
// }



// Functions

// function sum( a, b)
// {
//     var tempSum = a+b;
//     console.log(tempSum);
// }

// sum(1, 3)
// sum(2, -5)
// sum(9, 100009)


// question:  check if a number is even or odd

// function isEven(x)
// {
//     if(x%2==0)
//     {
//       console.log(x," is even");
//     }
//     else
//     {
//       console.log(x," is odd")
//     }
   
// }


// isEven(20);
// isEven(17);
// isEven(-3);
// isEven(0);



// function factorial(f)
// {
//    var ans = 1;
//    for( var i=1; i <=f ; i++)
//    {
//     ans = ans * i;
//    }
//   console.log(ans);
// }

// factorial(5);   5*4*3*2*1;
// factorial(2);   2*1
// factorial(1);   1
// factorial(0);   



// var temp = [1, 30, 9, -4, 7];

// var ans = 0;
// var n = temp.length;

// for( var i = 0; i<n; i++)
// {
//   ans = ans + temp[i];
// }

// console.log(ans);
// var temp = document.getElementById("#main");
// temp.classList.add("fruit");


var btn = document.querySelector("button");
var item = document.getElementById("#main");
var btn2 = document.getElementById("#back");
var heading = document.querySelector("h1");
var isGreen = false;


function random()
{
  console.log("someone clicked......");
  item.classList.toggle("fruit");
}


function change_background()
{
  if(isGreen)
    document.body.style.backgroundColor = "#ffffff";
  else
    document.body.style.backgroundColor = "green";
  isGreen= !isGreen
}

function increase_size()
{
  console.log("hovered!!!!!");
  heading.style.fontSize = "60px";
}

btn.addEventListener("click", random); 
btn2.addEventListener("dblclick", change_background);
heading.addEventListener("mouseover", increase_size);
