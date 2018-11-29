(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = [
    {name: 'WaxSnax Cheeseburger',
    image: '../Products/burger.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Cherry Pie',
    image: '../Products/cherryPie.jpg',
    rating: 4,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'wooh', content: 'rap', rating: 1}]},
    {name: 'Finger Food',
    image: '../Products/fingerFood.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Fruit Basket',
    image: '../Products/fruitBasket.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Ice Cream',
    image: '../Products/iceCream.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Meatball Sub',
    image: '../Products/meatbullSub.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Pho',
    image: '../Products/pho.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Pizza',
    image: '../Products/pizza.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Shrimp Cocktail',
    image: '../Products/shrimpCocktail.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Stir Fry',
    image: '../Products/stirfry.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Turkey Platter',
    image: '../Products/turkeyPlatter.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]},
    {name: 'Veggie Platter',
    image: '../Products/veggiePlatter.jpg',
    rating: 3,
    reviews: [{title: 'title', content: 'Wax!', rating: 3},
                {title: 'woop', content: 'rah', rating: 2}]}]

const loadHTML = (dataPoint) => {
    let html = `<div class="individualHeader">
    <p class="indHead">${dataPoint.name}</p>
</div>
<div class="container">
    <div class="row row1">
        <div class="col-md-6">
            <div>
                <img class="individualImage" src="${dataPoint.image}">
            </div>
            <div>
                <p class="ratingDisplay">Rating: ${dataPoint.rating} of 5.0</p>
            </div>
            <button class="reviewButton" onclick="document.querySelector('.reviewModal').style.display='block'">Leave a review</button>

        </div>
        <div class="col-md-6">
            <div>
                <p class="reviewColumnsBanner">Reviews</p>
            </div>
            <ul class="burgerReviews">

            </ul>
        </div>
    </div>
</div>

<!-- REVIEW FORM/MODAL -->

<div class="modal reviewModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Please leave a review</h5>
                </div>
                <div class="modal-body">
                    <form class="signupForm">
                            <label for="username">Rating (1-5)</label>
                            <input id="username" class="ratingInput" type="number" min="1" max="5" required><br>
                            <label for="password">Comments</label>
                            <input id="password" class="comment" type="textbox" required><br>
                            <button class="reviewSubmitButton" type="submit" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="document.querySelector('.reviewModal').style.display='none'" class="close" title="Close Modal">Cancel</button>
                    </form>
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
    </div>`

    document.getElementById('changeableHTML').innerHTML = '<link rel="stylesheet" href="./Products/products.css" id="changeableHTML">'
    return html
}

const buildEventListeners = () => {
    let productListener
    const querySelectors = []

    for(let i = 0; i < data.length; i++) {
        productListener = document.getElementById(`productEntry-${i}`)
        querySelectors.push([productListener, data[i]])
    }
    querySelectors.map((ele) => {
        ele[0].addEventListener('click', (e) => {
            e.preventDefault()

            const productPage = loadHTML(ele[1])

            document.querySelector(`.productFocusMain`).innerHTML = productPage
        })
    })
}

document.addEventListener("DOMContentLoaded", (e) => {
    buildEventListeners()
})
},{}]},{},[1]);
