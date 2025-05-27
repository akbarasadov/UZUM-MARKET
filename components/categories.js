import { reload } from "../utils/reload.js";
import { add } from "./product.js";

export function categories(item, allProducts, productPlace) {
    let categoryContainer = document.createElement("div");
    categoryContainer.className = "category";

    let p = document.createElement("p");
    p.textContent = item.name;

    categoryContainer.appendChild(p);



    categoryContainer.onclick = () => {
        let category = document.querySelectorAll(".category");
        category.forEach(el => el.classList.remove("active"));

        categoryContainer.classList.add("active");


        if (item.name === "Все") {
            reload(allProducts, add, productPlace);
        } else {
            let filtered = allProducts.filter(product => product.category == item.name)
            reload(filtered, add, productPlace);
        }
    };

    return categoryContainer;
}
