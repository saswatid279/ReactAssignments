import { useState } from "react";
import "./styles.css";
export default function Cart() {
  const [itemlist, setitemlist] = useState([
    {
      id: Math.random(),
      name: "Dracula",
      quantity: 1
    },
    {
      id: Math.random(),
      name: "Hounds of Baskerville",
      quantity: 1
    },
    {
      id: Math.random(),
      name: "A Christmas Carol",
      quantity: 1
    },
    {
      id: Math.random(),
      name: "Harry Potter",
      quantity: 1
    }
  ]);
  const [cartitem, setcartitem] = useState([]);
  function Add(id, item) {
    if (cartitem.length === 0) setcartitem((prev) => [...prev, item]);
    else {
      let cnt = 0;
      cartitem.map((iteminlist) => {
        if (iteminlist.id === id) {
          cnt = cnt + 1;
          alert("Item is already present in the list");
        }
      });
      if (cnt === 0) setcartitem((prev) => [...prev, item]);
    }
  }
  function increment(id) {
    setcartitem((previous) =>
      previous.map((iteminCart) => {
        if (iteminCart.id === id) {
          return { ...iteminCart, quantity: iteminCart.quantity + 1 };
        }
        return iteminCart;
      })
    );
  }
  function decrement(id) {
    setcartitem((previous) =>
      previous.map((iteminCart) => {
        if (iteminCart.id === id) {
          if (iteminCart.quantity === 0) {
            return iteminCart;
          }
          return { ...iteminCart, quantity: iteminCart.quantity - 1 };
        }
        return iteminCart;
      })
    );
  }
  return (
    <div id="cart">
      <h2>Books</h2>
      <ul type="none">
        {itemlist.map((item) => {
          return (
            <div className="cartli">
              <li key={item.id}>
                <span className="carttext">{item.name}</span>
                <button className="cartbtn" onClick={() => Add(item.id, item)}>
                  Add to Cart
                </button>
                {item.message}
              </li>
            </div>
          );
        })}
      </ul>
      <h2>Cart Items</h2>
      <ul type="none">
        {cartitem.map((items) => {
          return (
            <div className="cartli">
              <li key={items.id}>
                <span className="carttext">
                  {" "}
                  {items.name} {" Quantity-"}
                  {items.quantity}
                </span>
                <span>
                  <button
                    className="cartbtn"
                    onClick={() => increment(items.id)}
                  >
                    +
                  </button>
                  <button
                    className="cartbtn"
                    onClick={() => decrement(items.id)}
                  >
                    -
                  </button>
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
