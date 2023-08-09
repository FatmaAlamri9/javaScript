//EX1:
// var name = "fatma";
// var age = 23;

// var output = `Im ${name} and ${age} yers old`
// console.log(output); 

// //EX2:
//  function getName(x)
//  {
//     console.log(x);
//  }
//  getName("hello")
//  const get_Name = x =>console.log(x);
//  getName("fatma")

//EX3:
// const getEven = number =>
// {
//     for(let i=0; i<=number; i++)
//     {
//         if(i %2 ===0)
//         {
//             console.log(`${i} this is even`)
//         }
//         else
//         {
//             console.log(`${i} his is odd`)
//         }
//     }
// }
// getEven(12);

// //EX4:

// const num1 = [1,2,3,4]
// const num2 = num1
// num1.push(20)
// console.log(num1)

// //spread operater
// const num1 = [1,2,3,4,5]
// const num2 = [...num1]   // ... copy 
// num2.push(50)
// console.log(num1)

// // other way

// const num1 = [1,2,3,4,5]
// const num2 = [...num1,6,7,8]   // ... copy 
// console.log(num2)

// EX5: rest operater: show the rest of the object

// const user ={
//     userName : "fatma",
//     age : 23 ,
//     address : "seeb"
// }
// const{userName,age,...x} = user // {} object - [] array
// console.log(user)

//EX6: to show one mobile number

// const user =[
//     {
//         userName : "fatma",
//         age : 23,
//         mobile : ["909393939","4887575757"]
//     }
// ]
// const[{mobile}] = user
// console.log(mobile[1])

// or 

// const user =[
//     {
//         userName : "fatma",
//         age : 23,
//         mobile : ["909393939","4887575757"]
//     }
// ]
// const[{mobile}] = user
// const [mob1,mob2] = mobile
// console.log(mob2)
 
// //EX7:
// const names =["fatma","noor","hamed","mohamed"]
// names.forEach(el => console.log(el))

//EX8: forEatch and map same

// const user =[
//         {
//             userName : "fatma",
//             age : 23,
//             mobile : ["909393939","4887575757"]
//         },
//         {
//             userName : "hamed",
//             age : 25,
//             mobile : ["909393939","4887575757"]
//         },
//         {
//             userName : "noor",
//             age : 27,
//             mobile : ["909393939","4887575757"]
//         }
//     ]

// user.map(el => console.log(el.userName))     

//EX9:
// const x =[1,2,3,4,5,6,7]
// const newX = x.filter(el => el >5)
// console.log(newX);

// from the PDF 
//Q5:


// const number = (x,y,z) => {
//     {
//        if(x>y && x>z && y>z)
//        {
//         console.log("x is max number")
//        } 
//         else if(y>x && y>z && x>z)
//         {
//             console.log("y is max number")
//         }
//         else if(z>y && z>x && y>z)
//         {
//             console.log("z is max number")
//         }
//         else
//         {
//             console.log("enter number")
//         }
//     } 
// }
//  number(12,23,45);

// other way 

// console.log(Math.max(4,7,2));
// console.log(Math.min(4,7,2));

//Q12:
// const number =(s1,s2,s3,s4,s5) => {
 
//     total = s1+s2+s3+s4+s5;
//     console.log(total)
//     ave = total/5;
//     console.log(ave);
//     per=ave*0.8 ;
//     console.log(per);
// }
// number (95,76,58,90,89)

//Q13:
// const monthNum = (m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12) => {

//     if(m1 === 1)
//     {
//         console.log("31 days")
//     }
//     else if (m2 === 2)
//     {
//         console.log("28 days")
//     }
//     else if (m3 === 3)
//     {
//         console.log("31")
//     }
//     else if (m4 === 4)
//     {
//         console.log("30")
//     }
//     else if (m5 === 5)
//     {
//         console.log("31")
//     }
//     else if (m6 === 6)
//     {
//         console.log("30")
//     }
//     else if (m7 === 7)
//     {
//         console.log("30")
//     }
//     else if (m8 === 8)
//     {
//         console.log("31")
//     }
//     else if (m9 === 9)
//     {
//         console.log("30")
//     }
//     else if (m10 === 10)
//     {
//         console.log("31")
//     }
//     else if (m11 === 11)
//     {
//         console.log("30")
//     }
//     else if (m12 === 12)
//     {
//         console.log("31")
//     }
// }

// monthNum (1)

// Q:
// power : console.log(5**5);
 // math power : console.log(Math.pow(3,6));

//  // Q14:
//  const percentage =(s1,s2,s3,s4,s5) =>
//  {
//     total = s1+s2+s3+s4+s5;
//      ave = total/5;
//      per=ave*0.8 ;

//     if(per <= 100 && per >=90 )
//     {
//         console.log("Grad A")
//     }
//     else if(per <= 89 && per >=80 )
//     {
//         console.log("Grad B")
//     }
//  }
//  percentage(45,54,56,56,56)

 //-------------------------------------------
