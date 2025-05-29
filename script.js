import { Products } from "./components/product"
import { Toproduct } from "./components/to-product"


let grid = document.querySelector(".grid")

grid.append(Toproduct())

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let pices_text = document.querySelector(".text")



minus.onclick = () => {
    if (pices_text.textContent < 2) {
        pices_text.textContent = 1
    } else {
        pices_text.textContent--
    }
}

plus.onclick = () => {
    pices_text.textContent++
}


// let res = await fetch("https://6832b59ec3f2222a8cb333b6.mockapi.io/api/v1/products");
// let products = await res.json();

// let productPlace = document.querySelector(".products_place");
// reload(products, Products, productPlace);