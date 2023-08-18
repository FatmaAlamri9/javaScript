

// let box1 = document.getElementById("box1")
// let box2 = document.getElementById("box2")
// let box3 = document.getElementById("box3")
// let box4 = document.getElementById("box4")
// setTimeout(()=>{
//     box1.style.display ="block"
// },1000)
// setTimeout(()=>{
//     box2.style.display ="block"
// },2000)
// setTimeout(()=>{
//     box3.style.display ="block"
// },3000)
// setTimeout(()=>{
//     box4.style.display ="block"
// },4000)
//-------------------------------------

// let main = document.getElementById('main')
// let image = document.getElementsByName('img')
// for(let i=0; i<image.length; i++)
// {
//     image[i].addEventListener('click',function(){
//         let x=image[i].getAttribute('img')
//   main.setAttribute('src',source)
//     })
// }
// --------------------

//to save data in local storge:
let main = document.getElementById('main')
let image = document.getElementsByName('img')
if(localStorage.getItem('image') !== null)
{
    let y = JSON.parse(localStorage.getItem("image"))
    main.style.background=y
}
for(let i=0; i<image.length; i++)
{
    image[i].addEventListener('click',function(){
        let x=image[i].getAttribute('img')
        main.style.background=x
        localStorage.setItem('image',JSON.stringify(x))
    })
}