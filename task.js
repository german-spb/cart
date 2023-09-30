const plus = document.getElementsByClassName('product__quantity-control product__quantity-control_inc')
const minus = document.getElementsByClassName('product__quantity-control product__quantity-control_dec')
const quantity = document.getElementsByClassName('product__quantity-value')
const add = document.getElementsByClassName('product__add')
const products = document.getElementsByClassName('product')
const images = document.getElementsByClassName('product__image')
for (let i = 0; i< plus.length; i++){
    plus[i].onclick = () => {
    quantity[i].textContent = Number(quantity[i].textContent)+1
    }
    minus[i].onclick = () => {
        if (quantity[i].textContent > 1){
            quantity[i].textContent = Number(quantity[i].textContent)-1
        }
    }
    add[i].onclick = () => {
        console.log(products[i].getAttribute('data-id'))
        console.log(images[i].getAttribute('src'))
    }
}
