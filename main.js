var ProductNameInput=document.getElementById('ProductNameInput');
var ProductPriceInput=document.getElementById('ProductPriceInput');
var ProductCategoryInput=document.getElementById('ProductCategoryInput');
var ProductDescriptionInput=document.getElementById('ProductDescriptionInput');
var productsContainer=[];

if(localStorage.getItem('products')!=null){
productsContainer=JSON.parse(localStorage.getItem('products'));
displayProducts();
}

function addProduct(){
    var product={
        name:ProductNameInput.value,
        price:ProductPriceInput.value,
        catagery:ProductCategoryInput.value,
        desc:ProductDescriptionInput.value
    }
    productsContainer.push(product);
    console.log(productsContainer);
    localStorage.setItem('products',JSON.stringify(productsContainer));
    clearForm();
    displayProducts();
   
}



function clearForm(){
    ProductNameInput.value="";
    ProductPriceInput.value="";
    ProductCategoryInput.value="";
    ProductDescriptionInput.value="";
}

function deleteProducts(deleteIndex){
    productsContainer.splice(deleteIndex,1);
    localStorage.setItem('products',JSON.stringify(productsContainer));
    displayProducts();

}

function searchProduct(term){
    var cartoona=``;
    for(var i=0;i<productsContainer.length;i++){
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){

        
        cartoona+=
        `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].catagery}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="deleteProducts(${i})">Delete</button></td>
        
        </tr>`
    }}
    document.getElementById('tableBody').innerHTML=cartoona;

}


function displayProducts(){
    var cartoona=``;
    for(var i=0;i<productsContainer.length;i++){
        cartoona+=
        `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].catagery}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="deleteProducts(${i})">Delete</button></td>
        
        </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}






