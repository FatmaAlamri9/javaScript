//  let element = document.createElement('div')
//  element.classList.add('box')
//  element.setAttribute('class','box')
//  document.body.appendChild(element)
//-------------------------------------------

let prouductName = document.getElementById('pName')
let prouductPrice = document.getElementById('pPrice')
let prouductcategory = document.getElementById('pcategory')
let prouductDescription = document.getElementById('pdescription')
let button= document.getElementById('addBtn')
let array=[]


button.addEventListener('click',()=>{
let productData ={
    pName:prouductName.value,
    pPrice:prouductPrice.value,
    pcategory:prouductcategory.value,
    pdescription:prouductDescription.value
}
array.push(productData)
console.log(array);
loopData()
clearData()
})
function loopData(){
    let tableData=""
    let idconter
    for(let i=0;i<array.length;i++)
    {
let tableData = " "
tableData+=`<tr>
<td>${idconter++}</td>
<td>${array[i].prouductName}</td>
<td>${array[i].prouductPrice}</td>
<td>${array[i].prouductcategory}</td>
<td>${array[i].prouductDescription}</td>
</tr>`;
 document.getElementById('info').innerHTML+=tableData;

    }
    function deleteData(element){
        array.splice(element,1);
            loopData();
        localStorage.setItem("products", JSON.stringify(array));
    }

    let saveBtn = document.getElementById("saveBtn");
    let y;
    function updateData(indexedElement){
        y=indexedElement;
        prouductName.value=array[indexedElement].pName;
        prouductPrice.value=array[indexedElement].pPrice;
        prouductcategory.value=array[indexedElement].pcategory
        prouductDescription.value=array[indexedElement].pdescription;
       button.classList.toggle("show");
       saveBtn.classList.toggle("show");
    }

    
    pName.array[y]=prouductName.value;
    pPrice.array[y]=prouductPrice.value;
    pcategory.array[y]=prouductcategory.value;
    pdescription.array[y]=prouductcategory.value;
    button.classList.toggle("show");
    saveBtn.classList.toggle("show");

}
let regex = / ^([1-9][0-9]{2}|1000)$/;
let price = 300;
console.log(regex.test(price));

function clearData(){
    prouductName.value="";
    prouductPrice.value="";
    prouductcategory.value=""
    prouductDescription.value="";
} 