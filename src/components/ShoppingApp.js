import React, {useState} from "react"
import AddPopularProducts from "./AddPopularProducts"
import AddProductForm from "./AddProductForm"
import ShoppingList from "./ShoppingList"

const ShoppingApp = () => {
    const [shopping, setShopping] = useState(["cumin", "curry"]);

    const addToShoppingList = (product) => {
    setShopping([...shopping, product]);
  };

    const removeFromShoppingList = (product) => {
    setShopping(shopping.filter((el) => el !== product));
  };

    return (
        <section>
            <h2>Produits à acheter</h2>

            <AddPopularProducts 
            shopping={shopping}
            addToShoppingList={addToShoppingList}
            removeFromShoppingList={removeFromShoppingList}
            />

            <ShoppingList 
            shopping={shopping}
            removeFromShoppingList={removeFromShoppingList}
            />

            <AddProductForm 
            shopping={shopping}
            addToShoppingList={addToShoppingList}
            />
        </section>
    );
}

export default ShoppingApp

