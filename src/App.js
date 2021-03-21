import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";

function App() {
    const [cartItem, setCartItem] = useState([]);

    const addCartItem = (item) => {
        const alreadyInCart = cartItem.findIndex(
            (singleitem) => singleitem.id === item.id
        );

        if (alreadyInCart !== -1) {
            return toast("already in cart", { type: "error" });
        }
        setCartItem([...cartItem, item]);
    };

    const removeCartItem = (item) => {
        setCartItem(cartItem.filter((aitem) => aitem.id !== item.id));
    };

    const buyNow = () => {
        toast("Purchase Complete", {
            type: "success",
        });
        setCartItem([]);
    };

    return (
        <Container >
          <ToastContainer/>
            <Row>
                <Col md={8}>
                <BuyPage addCartItem={addCartItem}></BuyPage>
                </Col>
                <Col md={4}>
                  <Cart removeCartItem={removeCartItem} cartItems={cartItem} buyNow={buyNow} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
