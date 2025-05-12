import React from "react";
import { useCart } from "./Cart";
import { Container, Row, Col, Button } from "react-bootstrap";

export const CartPage = () => {
  const { cartItems, removeItem, increaseQuantity, decreaseQuantity } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <Container>
      <h2 className="my-4">Your Cart</h2>
      {cartItems.map((item) => (
        <Row key={item.id} className="mb-4">
          <Col md={4}>
            <img src={item.image1} alt={item.name} className="img-fluid" />
          </Col>
          <Col md={8}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="d-flex align-items-center">
              <Button
                variant="secondary"
                onClick={() => decreaseQuantity(item.uniqueId)}
              >
                -
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                variant="secondary"
                onClick={() => increaseQuantity(item.uniqueId)}
              >
                +
              </Button>
              &nbsp;&nbsp;
              <div>
                <Button
                  variant="secondary"
                  onClick={() =>
                    alert("You dont have buy now option at the moment")
                  }
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <Button
              variant="danger"
              onClick={() => removeItem(item.uniqueId)}
              className="mt-2"
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};