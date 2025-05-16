import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useCart } from "./Cart";
import {
  AccessoriesDescriptionList,
  AppliancesDescriptionList,
  AudioDescriptionList,
  AutomobileDescriptionList,
  BeautyDescriptionList,
  BooksDescriptionList,
  DecorDescriptionList,
  DescriptionList,
  FitnessDescriptionList,
  FurnitureDescriptionList,
  GamingDescriptionList,
  GroceriesDescriptionList,
  KidawearFashionDescriptionList,
  KitchenDescriptionList,
  LaptopsDescriptionList,
  MenFashionDescriptionList,
  PetDescriptionList,
  TravelDescriptionList,
  TvDescriptionList,
  WomenFashionDescriptionList,
} from "./DescriptionList";

export const Description = () => {
  const { cart = [], addToCart } = useCart();
  const {
    phoneName,
    laptopName,
    appliancename,
    tvname,
    audioname,
    menfashionname,
    womenfashionname,
    kidswearfashionname,
    beautyname,
    kitchenname,
    fitnessname,
    booksname,
    gamingname,
    automobilename,
    groceriesname,
    petname,
    travelname,
    accessoriesname,
    decorname,
    furniturename,
  } = useParams();

  const allProducts = [
    ...DescriptionList,
    ...LaptopsDescriptionList,
    ...AppliancesDescriptionList,
    ...TvDescriptionList,
    ...AudioDescriptionList,
    ...MenFashionDescriptionList,
    ...WomenFashionDescriptionList,
    ...KidawearFashionDescriptionList,
    ...BeautyDescriptionList,
    ...KitchenDescriptionList,
    ...FitnessDescriptionList,
    ...BooksDescriptionList,
    ...GamingDescriptionList,
    ...AutomobileDescriptionList,
    ...GroceriesDescriptionList,
    ...PetDescriptionList,
    ...TravelDescriptionList,
    ...AccessoriesDescriptionList,
    ...DecorDescriptionList,
    ...FurnitureDescriptionList,
  ];

  const urlNames = [
    phoneName,
    laptopName,
    appliancename,
    tvname,
    audioname,
    menfashionname,
    womenfashionname,
    kidswearfashionname,
    beautyname,
    kitchenname,
    fitnessname,
    booksname,
    gamingname,
    automobilename,
    groceriesname,
    petname,
    travelname,
    accessoriesname,
    decorname,
    furniturename,
  ].filter(Boolean);

  const selectedItem = allProducts.find((item) =>
    urlNames.includes(item.name.toLowerCase().replace(/\s+/g, "-"))
  );

  if (!selectedItem) {
    return <div>Phone not found</div>;
  }

  const handleAddToCart = () => {
    const uniqueId = `${selectedItem.id}-${selectedItem.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    const existingCartItem = cart.find((item) => item.uniqueId === uniqueId);

    if (existingCartItem) {
      const confirmAdd = window.confirm(
        `${selectedItem.name} is already in the cart with quantity ${existingCartItem.quantity}. Do you want to add one more?`
      );
      if (!confirmAdd) return;
    }

    const updatedItem = {
      ...selectedItem,
      quantity: existingCartItem ? existingCartItem.quantity + 1 : 1,
      uniqueId,
    };

    addToCart(updatedItem);

    alert(
      `${selectedItem.name} added to cart${existingCartItem ? " again" : ""}`
    );
  };

  const imageStyle = {
    width: "100%",
    height: "550px",
    objectFit: "cover",
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                src={selectedItem.image1}
                className="d-block card-img-top"
                style={imageStyle}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={selectedItem.image2}
                className="d-block card-img-top"
                style={imageStyle}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={selectedItem.image3}
                className="d-block card-img-top"
                style={imageStyle}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        {/* <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xs={12}
          md={6}
        >
          <h1>{selectedItem.name}</h1>
          <p>{selectedItem.description}</p>

          <p>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </p>

          <Button
            variant="secondary"
            onClick={() => alert("You dont have buy now option at the moment")}
          >
            Buy Now
          </Button>
        </Col> */}
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xs={12}
          md={6}
        >
          <h1>{selectedItem.name}</h1>
          <p>{selectedItem.description}</p>

          {/* Show Price */}
          <h4 className="text-success mb-3 ">${selectedItem.price}</h4>

          {/* Show Features if available */}
          {selectedItem.features && selectedItem.features.length > 0 && (
            <div className="text-center w-100 ">
              <h5>Key Features:</h5>
              <ul className="d-flex flex-column justify-content-center align-items-center">
                {selectedItem.features.map((feature, index) => (
                  <li className="text-center" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </p>

          <Button
            variant="secondary"
            onClick={() => alert("You don't have buy now option at the moment")}
          >
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
