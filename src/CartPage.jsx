// import React from "react";
// import { useCart } from "./Cart";
// import { Container, Row, Col, Button } from "react-bootstrap";

// export const CartPage = () => {
//   const { cartItems, removeItem, increaseQuantity, decreaseQuantity } =
//     useCart();

//   if (cartItems.length === 0) {
//     return (
//       <div className="text-center mt-5">
//         <h2>Your Cart is Empty</h2>
//       </div>
//     );
//   }

//   return (
//     <Container>
//       <h2 className="my-4">Your Cart</h2>
//       {cartItems.map((item) => (
//         <Row key={item.uniqueId} className="mb-4">
//           <Col md={4}>
//             <img src={item.image1} alt={item.name} className="img-fluid" />
//           </Col>
//           <Col md={8}>
//             <h4>{item.name}</h4>
//             <p>{item.description}</p>
//             <div className="d-flex align-items-center">
//               <Button
//                 variant="secondary"
//                 onClick={() => decreaseQuantity(item.uniqueId)}
//               >
//                 -
//               </Button>
//               <span className="mx-2">{item.quantity}</span>
//               <Button
//                 variant="secondary"
//                 onClick={() => increaseQuantity(item.uniqueId)}
//               >
//                 +
//               </Button>
//               &nbsp;&nbsp;
//               <div>
//                 <Button
//                   variant="secondary"
//                   onClick={() =>
//                     alert("You don't have a buy now option at the moment")
//                   }
//                 >
//                   Buy Now
//                 </Button>
//               </div>
//             </div>
//             <Button
//               variant="danger"
//               onClick={() => {
//                 removeItem(item.uniqueId);
//                 alert(`${item.name} has been removed from cart`);
//               }}
//               className="mt-2"
//             >
//               Remove
//             </Button>
//           </Col>
//         </Row>
//       ))}
//     </Container>
//   );
// };

import React from "react";
import { useCart } from "./Cart";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const {
    cartItems,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const navigate = useNavigate();
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h2 className="my-4">Your Cart</h2>

      {cartItems.map((item) => (
        <Row key={item.uniqueId} className="mb-4 border-bottom pb-3">
          <Col md={4}>
            <img src={item.image1} alt={item.name} className="img-fluid" />
          </Col>
          <Col md={8}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>
              <strong>Price:</strong> ${item.price} × {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <div className="d-flex align-items-center mb-2">
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
              <Button
                variant="secondary"
                onClick={() =>
                  alert("You don't have a buy now option at the moment")
                }
              >
                Buy Now
              </Button>
            </div>

            <Button
              variant="danger"
              onClick={() => {
                removeItem(item.uniqueId);
                alert(`${item.name} has been removed from cart`);
              }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}

      {/* Total Section */}
      <Row className="mt-4">
        <Col className="text-center">
          <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
        </Col>
      </Row>
      <Row className="mt-4 text-end">
        <Col>
          <Button
            variant="success"
            className="me-4"
            onClick={() => {
              alert("Your order is placed");
              clearCart();
              navigate("/");
            }}
          >
            Proceed to Checkout
          </Button>

          <Button variant="secondary" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
