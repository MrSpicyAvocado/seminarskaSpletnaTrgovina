function loadBestSellers(){
    $.get("data.json", function(data, status){
        let randomNumbers = [];
        while(randomNumbers.length < 8){
            let randomNumber = Math.floor(Math.random() * data.articles.length);
            if(!randomNumbers.includes(randomNumber)){
                randomNumbers.push(randomNumber);
            }
        }
        let bestSellersHTML = "";
        $(randomNumbers).each(function(index, value){
            bestSellersHTML +=`
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="outer-box-article">

                    <a href="products.php?articleID=${data.articles[value].articleID}">

                        <div class="inner-box-article">
                            <div class="img-box-article">
                                <img src="${data.articles[value].img}" alt="..." class="img-article">
                            </div>
                            <h4 class="box-article-title">${data.articles[value].title}</h4>
                            <p class="p-article">${data.articles[value].description}</p>
                            <h4 class="box-article-price">Cena: ${data.articles[value].price} €</h4>
                            <button class="btn btn-article rounded-0" onclick="return cartButtonAdd(${data.articles[value].articleID})"><i class="bi bi-cart-plus bi-cart-color"></i> V košarico</button>
                        </div>

                    </a>

                </div>
            </div>`;
        });
        $('.productsBestSeller').html(bestSellersHTML);
    });
}

function loadLastSixBlogPosts(){
    $.get("data.json", function(data, status){
        let lastSixBlogPostsHTML = "";
        let count = 0;
        for(let i = data.blog.length-1; count < 6; i--){
            lastSixBlogPostsHTML +=`
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="box-blog">
                    <!--a href="blog.php?blogID=${data.blog[i].blogID}""-->
                        <div class="outer-box-blog">
                            <div class="inner-box-blog">
                                <h4 class="h-blog">`+data.blog[i].title+ `</h4>
                                <div class="img-box-blog">
                                    <img src="`+data.blog[i].img+`" alt="..." class="img-blog">
                                </div>
                                <p class="p-blog">`+data.blog[i].content+`</p>
                                <a href="blog.php?blogID=${data.blog[i].blogID}"><button class="btn btn-article rounded-0" id="${data.blog[i].blogID}"><i class="bi bi-book"></i> Preberi več</button></a>
                            </div>
                        </div>
                    <!--/a-->
                </div>
            </div>`;
            count++;
        }
        $('.lastSixBlogPosts').html(lastSixBlogPostsHTML);
    });
}

function loadProductPage(){
    let urlParams = new URLSearchParams(window.location.search);
    let paramGetArticleCategoryID = urlParams.get("articleCategoryID");
    let paramGetArticleCategory = urlParams.get("articleCategory");
    let paramGetArticleID = urlParams.get("articleID");
    let paramGetSearch = urlParams.get("search");
    //prikaz izdelka
    if(paramGetArticleID){
        $.get("data.json", function(data, status){
            data = $.grep(data.articles, function(obj){
                return obj.articleID === parseInt(paramGetArticleID);
            });

            if(data){
                let productsHTML = "";
                let technicalSpecificationsHTML = "";

                for(let technicalSpecifications in data[0].technicalSpecifications){
                    technicalSpecificationsHTML +=`<li class="list-group-item"><b>${technicalSpecifications}</b>: ${data[0].technicalSpecifications[technicalSpecifications]}</li> `;
                };

                let randomNumberTo25 = 0;
                if(data[0].price < 50){
                    // 30 - 50
                    randomNumberTo25 = Math.floor(Math.random() * (50 - 30 + 1) + 30);
                }else if(50 <= data[0].price && data[0].price < 100){
                    // 25 - 30
                    randomNumberTo25 = Math.floor(Math.random() * (30 - 25 + 1) + 25);
                }else if(100 <= data[0].price && data[0].price < 250){
                    // 20 - 25
                    randomNumberTo25 = Math.floor(Math.random() * (25 - 20 + 1) + 20);
                }else if(250 <= data[0].price && data[0].price < 500){
                    // 15 - 20
                    randomNumberTo25 = Math.floor(Math.random() * (20 - 15 + 1) + 15);
                }else if(500 <= data[0].price && data[0].price < 750){
                     // 7 - 15
                     randomNumberTo25 = Math.floor(Math.random() * (15 - 7 + 1) + 7);
                }else{
                    // 1 - 7
                    randomNumberTo25 = Math.floor(Math.random() * (7 - 1 + 1) + 1);
                }

                let randomArticleInStorage = "";
                if(randomNumberTo25 == 1){
                    randomArticleInStorage = `Na zalogi v skladišču ${randomNumberTo25} artikel`;
                }else if(randomNumberTo25 == 2){
                    randomArticleInStorage = `Na zalogi v skladišču ${randomNumberTo25} artikla`;
                }else if(randomNumberTo25 == 3 || randomNumberTo25 == 4){
                    randomArticleInStorage = `Na zalogi v skladišču ${randomNumberTo25} artikli`;
                }else{
                    randomArticleInStorage = `Na zalogi v skladišču ${randomNumberTo25} artiklov`;
                }

                let freeShipping = data[0].price >= 100 ? `<i class="bi bi-truck"></i> Brezplačna dostava` : ``;
                
                productsHTML = `
                <div class="container">
                    <div class="row pt-2">
                        <div class="col-lg-6">
                            <div class="img-box-article-show-product">
                                <img src="${data[0].img}" alt="..." class="img-article-show-product">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="buy-box-article-show-product">
                                <h2 class="title-article-show-product">${data[0].title}</h2>
                                <p class="article-show-product-text">Cena</p>
                                <p class="article-show-product-price">${parseInt(data[0].price).toFixed(2)} €</p>
                                <p class="article-show-product-freeShipping">${freeShipping}</p>
                                <p class="article-show-product-text">${randomArticleInStorage}</p>
                                <button class="btn btn-buy-article shadow-0 rounded-0" onclick="return cartButtonAdd(${data[0].articleID})"><i class="bi bi-cart-plus bi-cart-color"></i> V košarico</button>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-lg-6">
                            <h3>Opis izdelka</h3>
                            <p class="p-article-show-product pb-2">${data[0].description}</p>
                        </div>
                        <div class="col-lg-6">
                            <h3>Tehnične specifikacije</h3>
                            <ul class="list-group list-group-flush pb-2">
                                <li class="list-group-item"><b>Proizvjalec</b>: ${data[0].brand}</li>
                                ${technicalSpecificationsHTML}
                            </ul>
                        </div>
                    </div>
                <div>   
                `;
            
                $(".products").html(productsHTML);
            }
        });
    }
    //za skupine komponent ki so v podkategorijah
    else if(paramGetArticleCategory){
        $.get("data.json", function(data, status){

            let dataArticlesInCategorieIDs = [];
            if(paramGetArticleCategory === '3-12'){
                dataArticlesInCategorieIDs = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }else if(paramGetArticleCategory === '13-16'){
                dataArticlesInCategorieIDs = [13, 14, 15, 16];
            }else if(paramGetArticleCategory === '17-23'){
                dataArticlesInCategorieIDs = [17, 18, 19, 20, 21, 22, 23];
            }
            let dataArticlesInCategories = [];
            //iz definiranih idjev pregledamo json in damo podatke v dataArticlesInCategories
            $.each(dataArticlesInCategorieIDs, function(index, ArticlesInCategorieID) {
                let dataFilteredArticlesInCategories = $.grep(data.articles, function(objArticle){
                    return objArticle.articleCategoryID === ArticlesInCategorieID;
                });
                $.each(dataFilteredArticlesInCategories, function(index, FilteredArticlesInCategorie){
                    dataArticlesInCategories.push(FilteredArticlesInCategorie);
                });
            });

            if(dataArticlesInCategories){
                let productsHTML = "";
                for(let i = 0; i< dataArticlesInCategories.length; i++){
                    productsHTML +=`
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="outer-box-article">
                            <a href="products.php?articleID=${dataArticlesInCategories[i].articleID}">
                                <div class="inner-box-article">
                                    <div class="img-box-article">
                                        <img src="${dataArticlesInCategories[i].img}" alt="..." class="img-article">
                                    </div>
                                    <h4 class="box-article-title">${dataArticlesInCategories[i].title}</h4>
                                    <p class="p-article">${dataArticlesInCategories[i].description}</p>
                                    <h4 class="box-article-price">Cena: ${dataArticlesInCategories[i].price} €</h4>
                                    <button class="btn btn-article rounded-0" onclick="return cartButtonAdd(${dataArticlesInCategories[i].articleID})"><i class="bi bi-cart-plus bi-cart-color"></i> V košarico</button>
                                </div>
                            </a>
                        </div>
                    </div>`; 
                }
                $('.products').html(productsHTML);
            }
        });
    }
    //filtriranje po kategoriji
    else if(paramGetArticleCategoryID){
        $.get("data.json", function(data, status){

            data = $.grep(data.articles, function(obj){
                return obj.articleCategoryID === parseInt(paramGetArticleCategoryID);
            });

            if(data){
                let productsHTML = "";
                for(let i = 0; i< data.length; i++){
                    productsHTML +=`
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="outer-box-article">
                            <a href="products.php?articleID=${data[i].articleID}">
                                <div class="inner-box-article">
                                    <div class="img-box-article">
                                        <img src="${data[i].img}" alt="..." class="img-article">
                                    </div>
                                    <h4 class="box-article-title">${data[i].title}</h4>
                                    <p class="p-article">${data[i].description}</p>
                                    <h4 class="box-article-price">Cena: ${parseInt(data[i].price).toFixed(2)} €</h4>
                                    <button class="btn btn-article rounded-0" onclick="return cartButtonAdd(${data[i].articleID})"><i class="bi bi-cart-plus bi-cart-color"></i> V košarico</button>
                                </div>
                            </a>
                        </div>
                    </div>`;
                }
                $('.products').html(productsHTML);
            }
        });
    }
    //flitriranje po iskani besedi
    else if(paramGetSearch){
        $.get("data.json", function(data, status){
            // išče po produktih katerih ime vsebuje iskalni parameter
            let dataArticles = $.grep(data.articles, function(obj){
                return obj.title.toLowerCase().includes(paramGetSearch);
            });
            // išče po kategorijah katerih ime vsebuje iskalni parameter in dobimo id kategorije
            let dataMatchingCategories = $.grep(data.articlesCategory, function(objCategory) {
                return objCategory.title.toLowerCase().includes(paramGetSearch);
            });
            //prek idja najdemo vse izdelke z tem idjem kategorije
            let dataArticlesInCategories = [];
            $.each(dataMatchingCategories, function(index, MatchingCategorieItem) {
                let dataFilteredArticlesInCategories = $.grep(data.articles, function(objArticle){
                    return objArticle.articleCategoryID === MatchingCategorieItem.articleCategoryID;
                });
                //vzamemo tabelo dataFilteredArticlesInCategories gremo čez njega in dajemo podatke v tabelo dataArticlesInCategories
                $.each(dataFilteredArticlesInCategories, function(index, FilteredArticlesInCategorie){
                    dataArticlesInCategories.push(FilteredArticlesInCategorie);
                });
            });
            //združimo najdene artikle in najdene artikle preko kategorije brez ponavljanja
            for (let i = dataArticlesInCategories.length - 1; i >= 0; i--) {
                let includes = false;
                for(let j = 0; j < dataArticles.length; j++){
                    if(dataArticlesInCategories[i].articleID === dataArticles[j].articleID){
                        includes = true;
                    break;
                    }
                }
                if(includes == false){
                    dataArticles.push(dataArticlesInCategories[i]);
                }
                dataArticlesInCategories.pop();
            }

            let productsHTML = "";
            if(dataArticles.length == 0){
                productsHTML +=`
                <div class="col-12 pt-1">
                    <div class="alert alert-danger" role="alert">
                        <i class="bi bi-exclamation-octagon"></i> Za iskalni parameter trenutno ni nobenih izdelkov.
                    </div>
                </div>`;
            }else if(dataArticles){
                for(let i = 0; i< dataArticles.length; i++){
                    productsHTML +=`
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="outer-box-article">
                            <a href="products.php?articleID=${dataArticles[i].articleID}">
                                <div class="inner-box-article">
                                    <div class="img-box-article">
                                        <img src="${dataArticles[i].img}" alt="..." class="img-article">
                                    </div>
                                    <h4 class="box-article-title">${dataArticles[i].title}</h4>
                                    <p class="p-article">${dataArticles[i].description}</p>
                                    <h4 class="box-article-price">Cena: ${parseInt(dataArticles[i].price).toFixed(2)} €</h4>
                                    <button class="btn btn-article rounded-0" onclick="return cartButtonAdd(${dataArticles[i].articleID})"><i class="bi bi-cart-plus bi-cart-color"></i> V košarico</button>
                                </div>
                            </a>
                        </div>
                    </div>`; 
                }
            }
            $('.products').html(productsHTML);
        });
    }
    //random 12 izdelkov
    else{
        $.get("data.json", function(data, status){
            let randomNumbers = [];
            while(randomNumbers.length < 12){
                let randomNumber = Math.floor(Math.random() * data.articles.length);
                if(!randomNumbers.includes(randomNumber)){
                    randomNumbers.push(randomNumber);
                }
            }
            let productsHTML = "";
            $(randomNumbers).each(function(index, value){
                productsHTML +=`
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="outer-box-article">
                        <a href="products.php?articleID=${data.articles[value].articleID}">
                            <div class="inner-box-article">
                                <div class="img-box-article">
                                    <img src="${data.articles[value].img}" alt="..." class="img-article">
                                </div>
                                <h4 class="box-article-title">${data.articles[value].title}</h4>
                                <p class="p-article">${data.articles[value].description}</p>
                                <h4 class="box-article-price">Cena: ${parseInt(data.articles[value].price).toFixed(2)} €</h4>
                                <button class="btn btn-article rounded-0" onclick="return cartButtonAdd(${data.articles[value].articleID})"><i class="bi bi-cart-plus bi-cart-color"></i> V košarico</button>
                            </div>
                        </a>
                    </div>
                </div>`; 

            });
            $('.products').html(productsHTML);
        });
    }
}

function loadBlogPage(){
    let urlParams = new URLSearchParams(window.location.search);
    let paramGetBlogID = urlParams.get("blogID");
    //Ce je podan blogID odpre samo en blog
    if(paramGetBlogID){
        $.get("data.json", function(data, status){
            data = $.grep(data.blog, function(obj){
                return obj.blogID === parseInt(paramGetBlogID);
            });
            let blogHTML = "";
            if(data){
                
                blogHTML += `
                    <div class="col-12">
                        <div class="box-blog">
                            <div class="outer-box-blog-show-post">
                                <div class="inner-box-blog-show-post">
                                    <h4 class="h-blog">${data[0].title}</h4>
                                    <div class="img-box-blog-solo">
                                        <img src="${data[0].img}" alt="..." class="img-blog-solo">
                                    </div>
                                    <p>Objavljeno: ${data[0].date}</p>
                                    <p white-space: pre;>${data[0].content}</p>
                                    <a href="blog.php"><button class="btn btn-article rounded-0" id="${data[0].blogID}">Nazaj na blog</button></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }
                $(".blog").html(blogHTML);
            });
    }
    // ce ni podan blogID prikaze vse
    else{
        $.get("data.json", function(data, status){
            data = $.grep(data.blog, function(obj){
                return obj.blogID;
            });
            let blogHTML = "";
            if(data){
                for(let i = data.length-1; 0 <= i; i--){
                    blogHTML += `
                    <div class="col-lg-6 col-sm-12">
                        <div class="box-blog">
                            <!--a href="?blogID=${data[i].blogID}"-->
                                <div class="outer-box-blog">
                                    <div class="inner-box-blog">
                                        <h4 class="h-blog">${data[i].title}</h4>
                                        <div class="img-box-blog">
                                            <img src="${data[i].img}" alt="..." class="img-blog">
                                        </div>
                                        <p class="p-blog">${data[i].content}</p>
                                        <a href="?blogID=${data[i].blogID}"><button class="btn btn-article rounded-0" id="${data[i].blogID}"><i class="bi bi-book"></i> Preberi več</button></a>
                                    </div>
                                </div>
                            <!--/a-->
                        </div>
                    </div>`;
                }
                $(".blog").html(blogHTML);
            }
        });
    }
}

function searchButton(){
    let input = $('#searchBar').val().toLowerCase();
    if(input){
        window.location.href = `products.php?search=${input}`;
    }
}

function searchOnEnter(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton();
    }
}

function cartButtonAdd(btnId){
    let cartArticlesIDsGty = [];
    if(sessionStorage.getItem('cartArticlesIDsGty')){
        cartArticlesIDsGty = JSON.parse(sessionStorage.getItem('cartArticlesIDsGty'));
    }
    let findArticle = cartArticlesIDsGty.find(el => el.id === btnId);
    if(findArticle){
        findArticle.quantity++;
    }else{
        cartArticlesIDsGty.push({id: btnId, quantity: 1});
    }
    sessionStorage.setItem('cartArticlesIDsGty', JSON.stringify(cartArticlesIDsGty));
    loadCartArticles();
    return false;
}

function cartButtonRemove(btnId){
    let cartArticlesIDsGty = [];
    if(sessionStorage.getItem('cartArticlesIDsGty')){
        cartArticlesIDsGty = JSON.parse(sessionStorage.getItem('cartArticlesIDsGty'));
    }
    let findArticle = cartArticlesIDsGty.find(el => el.id === btnId);
    if(findArticle){
        if(findArticle.quantity == 0) return;
        findArticle.quantity--;
    }
    sessionStorage.setItem('cartArticlesIDsGty', JSON.stringify(cartArticlesIDsGty));
    loadCartArticles();
}

function cartButtonDelete(btnId){
    let cartArticlesIDsGty = [];
    if(sessionStorage.getItem('cartArticlesIDsGty')){
        cartArticlesIDsGty = JSON.parse(sessionStorage.getItem('cartArticlesIDsGty'));
    }
    let findArticle = cartArticlesIDsGty.find(el => el.id === btnId);
    if(findArticle){
        let id = cartArticlesIDsGty.indexOf(findArticle);
        cartArticlesIDsGty.splice(id, 1);
    }
    sessionStorage.setItem('cartArticlesIDsGty', JSON.stringify(cartArticlesIDsGty));
    loadCartArticles();
}

function cartDiscountCode(discountCode){
    if(discountCode.value === 'fis15'){
        if(!sessionStorage.getItem('discountCode')){
            sessionStorage.setItem('discountCode', JSON.stringify({discountCode: 'fis15'}));
        }
    }
    loadCartArticles();
    return false;
}

function updateCartItemNumber(){
    let articleCount = 0;
    if(sessionStorage.getItem('cartArticlesIDsGty') != null){
        cartArticlesIDsGty = JSON.parse(sessionStorage.getItem('cartArticlesIDsGty'));
        cartArticlesIDsGty.forEach(function(article) {
            articleCount += article.quantity;
          });
    }
    let articleCountHTML = `${articleCount}`;
    $(".articleCount").html(articleCountHTML);
}

function cartBuyItems(){
    let cartArticlesIDsGty = [];
    if(sessionStorage.getItem('cartArticlesIDsGty')){
        cartArticlesIDsGty = JSON.parse(sessionStorage.getItem('cartArticlesIDsGty'));
    }
    if(cartArticlesIDsGty.length != 0){
        cartArticlesIDsGty = [];
        cartBuyPersonInfo();
    }
}

function cartBuyPersonInfo(){
    let cartHTML = "";
    cartHTML += `
        <div class="card border shadow-0 mt-5 p-3 cartForm">
            <form method="post" onsubmit="return false">
                <div class="row">
                    <div class="col-12">
                        <label for="nameSurname" class="form-label">Ime in priimek:</label>
                        <input type="text" class="form-control rounded-0" name="nameSurname" id="nameSurname" placeholder="Vnesite vaše ime in priimek...">
                    </div>
                    <div class="col-12">
                        <label for="company" class="form-label">Podjetje</label>
                        <input type="company" class="form-control rounded-0" name="company" id="company" placeholder="Vnesite ime vašega podjetja...">
                    </div>
                    <div class="col-12">
                        <label for="address" class="form-label">Naslov</label>
                        <input type="address" class="form-control rounded-0" name="address" id="address" placeholder="Vnesite vaš naslov za dostavo...">
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control rounded-0" name="email" id="email" placeholder="Vnesite vaš e-mail...">
                    </div>
                    <div class="col-12">
                        <label for="phone" class="form-label">Telefon</label>
                        <input type="tel" class="form-control rounded-0" name="phone" id="phone" placeholder="Vnesite telefonsko številko... 090123123">
                    </div>
                    <div class="col-12 text-end">
                        <input type="submit" class="btn btn-buy w-100 shadow-0 mb-2 rounded-0 mt-4" value="Pošlji" onclick="cartSendOrder()"></input>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Hvala za vaše zaupanje!</h5>
                    </div>
                    <div class="modal-body">
                        <img src="img/green-tick.png" class="img-tick"> Vaše naročilo je bilo posredovano podjetju.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-buy w-100 shadow-0 mb-2 rounded-0" data-bs-dismiss="modal" onclick="moveToProductPage()">Zapri</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    $(".shoppingCart").html(cartHTML);
}

function cartSendOrder(){
    cartArticlesIDsGty = [];
    sessionStorage.setItem('cartArticlesIDsGty', JSON.stringify(cartArticlesIDsGty));
    loadCartArticles();
    const bootstrapModal = new bootstrap.Modal(exampleModalCenter);
    bootstrapModal.show();
}

function moveToProductPage(){
    window.location.href = "products.php";
}

function loadCartArticles(){
    let cartArticlesIDsGty = JSON.parse(sessionStorage.getItem('cartArticlesIDsGty'));

    $.get("data.json", function(data, status){
        let dataArticles = [];
        //iz definiranih idjev pregledamo json in damo podatke v dataArticlesInCategories
        $.each(cartArticlesIDsGty, function(index, cartArticlesID) {
            let dataFilteredArticles = $.grep(data.articles, function(objArticle){
                return objArticle.articleID === cartArticlesID.id;
            });
            $.each(dataFilteredArticles, function(index, dataFilteredArticle){
                dataArticles.push(dataFilteredArticle);
            });
        });

        let cartHTML = "";
        let cartPriceHTML = "";
        let priceForItemsTotal = 0;
        if(dataArticles.length > 0){
            cartHTML = "<ul>";
            for(let i = 0; i < dataArticles.length; i++){
                priceForItemsTotal += dataArticles[i].price*cartArticlesIDsGty[i].quantity;
                cartHTML += `
                    <div class="row gy-3 mb-4">
                        <div class="col-lg-5">
                            <div class="me-lg-5">
                                <div class="d-flex">
                                    <img src="${dataArticles[i].img}" class="border rounded-0 me-3" style="width: 96px; height: 96px;" />
                                    <div class="">
                                        <a href="#" class="nav-link">${dataArticles[i].title}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                            <button class="btn btn-link px-2 bi-cart-height" onclick="cartButtonRemove(${dataArticles[i].articleID})">
                                <i class="bi bi-cart-dash bi-cart-color"></i>
                            </button>
                            <input id="form1" min="0" name="quantity" value="${cartArticlesIDsGty[i].quantity}" type="number" class="form-control form-control-height rounded-0" />
                            <button class="btn btn-link px-2 bi-cart-height" onclick="return cartButtonAdd(${dataArticles[i].articleID})">
                                <i class="bi bi-cart-plus bi-cart-color"></i>
                            </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2">
                            <h5>${(dataArticles[i].price*cartArticlesIDsGty[i].quantity).toFixed(2)} €</h5>
                        </div>
                        <div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                            <div class="float-md-end">
                                <button class="btn btn-light border text-danger icon-hover-danger rounded-0" onclick="cartButtonDelete(${dataArticles[i].articleID})">Odstrani</button>
                            </div>
                        </div>
                    </div>
                `;
            }
            cartHTML += "</ul>";
            $(".cartArticles").html(cartHTML);

            let discount = 0;
            if(sessionStorage.getItem('discountCode') != null){
                discount = priceForItemsTotal*0.15;
            }
            let priceForItemsTotalWithDiscount = priceForItemsTotal - discount;

            cartPriceHTML = `
            <div class="d-flex justify-content-between">
                <p class="mb-2">Cena:</p>
                <p class="mb-2">${priceForItemsTotal.toFixed(2)} €</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="mb-2">Popust:</p>
                <p class="mb-2 text-success">${discount.toFixed(2)} €</p>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <p class="mb-2">Skupna cena:</p>
                <p class="mb-2 fw-bold">${priceForItemsTotalWithDiscount.toFixed(2)} €</p>
            </div>            
            `
            $(".cartPrice").html(cartPriceHTML);
        }else{
            cartHTML = `<div class="alert alert-success" role="alert">Trenutno nimate v košarici nobenega artikla.</div>`;
            $(".cartArticles").html(cartHTML);
            
            let discount = 0;
            if(sessionStorage.getItem('discountCode') != null){
                discount = priceForItemsTotal*0.15;
            }
            let priceForItemsTotalWithDiscount = priceForItemsTotal - discount;

            cartPriceHTML = `
            <div class="d-flex justify-content-between">
                <p class="mb-2">Cena:</p>
                <p class="mb-2">${priceForItemsTotal.toFixed(2)} €</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="mb-2">Popust:</p>
                <p class="mb-2 text-success">${discount.toFixed(2)} €</p>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
                <p class="mb-2">Skupna cena:</p>
                <p class="mb-2 fw-bold">${priceForItemsTotalWithDiscount.toFixed(2)} €</p>
            </div>            
            `
            $(".cartPrice").html(cartPriceHTML);
        }

    });
    updateCartItemNumber();
}

function partnerLogotips(){
    let items = document.querySelectorAll(".partnerLogotips .partnerLogotip");

    items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
        next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
    });
}
