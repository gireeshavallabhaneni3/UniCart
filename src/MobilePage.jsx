import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MobilesList } from './Mobilelist';



export const MobilePage = ({searchQuery}) => {
  console.log(searchQuery,MobilesList, "**********search");
  
  const filteredItems = MobilesList.filter(item =>
      item.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
      console.log(filteredItems, "**********");
  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {
        filteredItems.map((item, index) => (
          <div key={index} className="col">
            <Carousel>
              <Carousel.Item>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={item.image1} width={200} height={150} alt={item.image1} />
                </div>

              </Carousel.Item>
              <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <img src={item.image2} width={200} height={150} alt="First slide" />
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img src={item.image3} width={200} height={150} alt="First slide" />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
              <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      {/* <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }} target="_self"></Link> */}
                      <Link to={`/mobiles/${item.name.toLowerCase().replace(/\s+/g, '-')}/description`} className="btn btn-primary" target="_self">
                        more info
                      </Link>
                  </div>
          </div>
        ))
      }
    </div>
  )
};
