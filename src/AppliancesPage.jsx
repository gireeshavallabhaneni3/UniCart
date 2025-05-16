import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppliancesList } from "./Mobilelist";

export const AppliancesPage = ({ searchQuery }) => {
  const filteredItems = AppliancesList.filter((item) =>
    item.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  const imageStyle = {
    width: "100%",
    height: "200px", // fixed height for card images
    objectFit: "cover",
  };
  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {filteredItems.map((item, index) => (
        <div key={index} className="col">
          <Carousel>
            <Carousel.Item>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.image1}
                  style={imageStyle}
                  className="card-img-top"
                  alt={item.image1}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={item.image2}
                style={imageStyle}
                className="card-img-top"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={item.image3}
                style={imageStyle}
                className="card-img-top"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body mt-3">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <Link
              to={`/appliances/${item.name
                .toLowerCase()
                .replace(/\s+/g, "-")}/description`}
              className="btn btn-primary"
            >
              more info
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
