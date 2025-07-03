
// //fetch-native method of fetching api datas
// // fetch("https://fakestoreapi.com/products?limit=10").then(response=>
// {
//     if(!response.ok)
//     {
//         throw new Error("API resonpse error");
//     }
//     return response.json();
// }
// ).then(data=>{
//     console.log(data);

// }).catch(error=>{
//     console.error(error);
// })


// 2nd example
 async function fetchApiData()
{
    //exception handling
    try{

    

    const response=  await fetch("https://fakestoreapi.com/Products");
    if(!response.ok){
throw new Error("Api response error");

    }
    const products= await response.json();
displayproducts(products);//function callback
}catch(error){
    console.error(error);
}
}
function displayproducts(products)
{
    const productcontainer=document.getElementById("product-container");
    products.forEach(apidata=>
    {
        const productitem=document.createElement("div");
        productitem.classList.add("product-item");
        const imageelement=document.createElement("img");
        imageelement.classList.add("product-image");
        imageelement.src=apidata.image;
        imageelement.alt=apidata.title;

        const titleelement=document.createElement("p");
        titleelement.classList.add("product-title");
        titleelement.textContent=apidata.title;
        productitem.appendChild(imageelement);
        
        productitem.appendChild(titleelement);
        productcontainer.appendChild(productitem);
    }
    )
}
fetchApiData();