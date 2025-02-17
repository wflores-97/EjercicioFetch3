fetch("https://api.escuelajs.co/api/v1/products")
    .then(response=>response.json())
    .then(data=>{
        let card = "";
        data.forEach(products => {
           card += `
           
            <div class="product-card">
                <div class="badge">Hot</div>
                    <div class="product-tumb">
                        <img src="${products.image}" alt="${products.id}">
                    </div>
                    <div class="product-details">
                        <h4><a href="">${products.title}</a></h4>
                        <p>${products.description}</p>
                        <div class="product-bottom-details">
                            <div class="product-price">${products.price+".00"}</div>
                            <div class="product-links">
                                <a href=""><i class="fa fa-heart"></i></a>
                                <a href=""><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           ` 
        });
        document.getElementById("categoryList").innerHTML=card
    })