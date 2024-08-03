// var productName=document.getElementById('productName')
// var productPrice=document.getElementById('productPrice')
// var productCategory=document.getElementById('productCategory')
// var productImage=document.getElementById('productImage')
// var desc=document.getElementById('desc')
// var addpro=document.getElementById('addpro')

// addpro.onclick=addproduct;

// var productlist=[];
// function addproduct (){

//  var product ={
//     productName:productName.value,
//     productPrice:productPrice.value,

//     productCategory:productCategory.value,

//     productImage:'img.jpg',
//     desc:desc.value
//  }

// console.log(product);
// productlist.push(product);
// addund ()

// console.log(productlist);

// }
// function addund(){
//     var box='';
//     for(var i=0;i<productlist.length;i++){
//         box+=`
//         <div class="col-md-3 col-sm-6">
// <div class="product">
//   <img src="./img/img8.jpg" class="w-100" />
//   <div class="product-details p-2 border">
//     <h2 class="h4">${productlist[i].productName}</h2>
//     <p class="text-secondary border-bottom pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veniam nisi hic pariatur voluptatem modi!
//     </p>
//     <p><span class="fw-bold">Price</span><span class="text-secondary">${productlist[i].productPrice}</span></p>
//     <p><span class="fw-bold">Category</span><span class="text-secondary">${productlist[i].productCategory}</span></p>
//   </div> 
// </div>
// </div>
// `
// }
// document.getElementById('rowBody').innerHTML=box
// }
// function reset (){}


// var numbers=[30,40,50]
// numbers.unshift(60,70);
// console.log(numbers)

// numbers.pop()
// numbers.shift()
// console.log(numbers);

// numbers.splice(1,0,400,300)
// console.log(numbers);
 

var productName =document.getElementById("productName")
var productPrice =document.getElementById("productPrice")
var productCategory =document.getElementById("productCategory")
var desc =document.getElementById("desc")

var productarr=[]

function addProduct() {

    var product ={
        productName:productName.value,
        productPrice:productPrice.value,
        productCategory:productCategory.value,
        desc:desc.value
    }
   productarr.push(product);
//   console.log(productarr);


var box = ""
for (var i = 0; i < productarr.length; i++) {
  box += `
    <p>       ${productarr[i].productName} 
    </p>
    <p>       ${productarr[i].productPrice} 
    </p>
    <p>       ${productarr[i].productPrice} 
    </p>
    <p>       ${productarr[i].desc} 
    </p>
    
    `
}

console.log(box);
document.getElementById("rowBody").innerHTML=box
}