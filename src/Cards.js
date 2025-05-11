import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Electronics } from './Electronics';
import { Link } from 'react-router-dom';

export const Cards = ({searchQuery}) => {

console.log(searchQuery,Electronics, "**********");

const filteredItems = Electronics.filter(item =>
    item.name?.toLowerCase().includes(searchQuery?.toLowerCase())
);
    console.log(filteredItems, "**********");

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {filteredItems.map((item, index) => (
                    <div key={index} className="col">
                        <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }} target="_self">
                            <div className="card h-100">

                                <img src={item?.image} width={30} height={300} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item?.name}</h5>
                                    <p className="card-text">{item?.description}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-link text-decoration-none">
                                        Click for more info <i className="bi bi-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>))}
            </div>

        </>
    )
}
