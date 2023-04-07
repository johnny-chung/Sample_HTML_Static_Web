
// using unsplash api
const unsplashAccessKey = "9WSLLRYPiPx5QQUrf6cUmM7cNE2Ex4UjWsskNOeF9-4";

let searchPhotoUrl = `https://api.unsplash.com/search/photos?client_id=${unsplashAccessKey}`;

let allImages = [];
let selectImgs = [];

function getImages(category) 
{
    //alert("in getimages");
    searchPhotoUrl = searchPhotoUrl + `&query=${category}&per_page=30`;
    //alert(searchPhotoUrl);
    fetch(searchPhotoUrl)
    .then(res => res.json())
    .then(data => {        
        allImages = data.results;
        const arrStart = Math.floor(Math.random()*15);
        selectImgs = allImages.slice(arrStart, (arrStart + 16));
        selectImgs.forEach(element => {
            const productContainer = document.createElement('figure');
            const productCaption = document.createElement('figcaption');
            const img = document.createElement('img');
            productCaption.innerHTML = element.alt_description;
            img.src = element.urls.regular;
            img.alt = element.alt_description;
            img.className = 'productImg';
            img.addEventListener("click", ()=> {  
                popUp(img.src, img.alt);                             
            });
            productContainer.appendChild(img);
            productContainer.appendChild(productCaption);
            document.getElementById('productList').appendChild(productContainer);
        });        
    });    
}

const popUp = function(imgSrc, imgAlt)
{
    const pop = document.querySelector(".pop");
    const largeImg = document.querySelector(".largeImg");
    const closeBtn = document.querySelector(".closeBtn");
    const productCap = document.querySelector('.descTitle');    
    pop.classList.remove("hide");
    closeBtn.addEventListener("click", () => {
        closePop();
    })
    largeImg.src = imgSrc;
    largeImg.alt = imgAlt;
    productCap.innerHTML = imgAlt;
}

const closePop = function()
{
    const pop = document.querySelector(".pop");
    pop.classList.add("hide");
}


const changeHeroBg = function()
{
    var bgImgSrc = ["./media/header_bg2.1_big.jpg", "./media/header_bg4.2_big.jpg", "./media/header_bg5.2_big.jpg"];
    var i = Math.floor((Math.random()*3));
    const header = document.querySelector('header');
    header.style.backgroundImage=`url(${bgImgSrc[i]})`;
}



window.onscroll = function() {backToTopVisible()};  

const backToTopVisible = function () {
    let backTopBtn = document.querySelector(".backTopBtn");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        backTopBtn.style.display = "block";
    } else {
        backTopBtn.style.display = "none";
    }
}