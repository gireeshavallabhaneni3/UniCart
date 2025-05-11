import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useCart } from "./Cart";
import { AccessoriesDescriptionList, AppliancesDescriptionList, AudioDescriptionList, AutomobileDescriptionList, BeautyDescriptionList, BooksDescriptionList, DecorDescriptionList, DescriptionList, FitnessDescriptionList, FurnitureDescriptionList, GamingDescriptionList, GroceriesDescriptionList, KidawearFashionDescriptionList, KitchenDescriptionList, LaptopsDescriptionList, MenFashionDescriptionList, PetDescriptionList, TravelDescriptionList, TvDescriptionList, WomenFashionDescriptionList } from "./DescriptionList";

export const Description = () => {
  const { addToCart } = useCart();
  // const product = getProductById(productId); // Implement this function to fetch product details

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
  } = useParams(); // 👈 get phone name from URL

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
  ].filter(Boolean); // remove undefined values
  
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
    addToCart({ ...selectedItem, quantity: 1, uniqueId });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                src={selectedItem.image1}
                className="d-block w-100"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={selectedItem.image2}
                className="d-block w-100"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={selectedItem.image3}
                className="d-block w-100"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xs={12}
          md={6}
        >
          <h1>{selectedItem.name}</h1>
          <p>{selectedItem.description}</p>

          <p>
            <Button Primary onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </p>

          <Button
            variant="secondary"
            onClick={() => alert("You dont have buy now option at the moment")}
          >
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};