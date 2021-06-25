import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
        const cake = this.props.cake;

        return (
            <div>
                <Link
                    className="card-link"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    <div className="card">
                        <img
                            src={cake.image}
                            alt="baked-food"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{cake.name}</h5>
                            <p className="card-text">{cake.price}</p>
                        </div>
                    </div>
                </Link>

                {/* modal pop-up */}
                <div class="modal fade" id="exampleModal" tabindex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Add to Cart:{' '}
                                    <span className="product-title-modal">
                                        {cake.name}
                                    </span>
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                ></button>
                            </div>
                            <div className="modal-body card-model-flexbox">
                                <img
                                    src={cake.image}
                                    alt="baked-food"
                                    className="card-img-top"
                                />
                                <div className="card-model-detail">
                                    <h3>Price: {cake.price}</h3>
                                    <p>{cake.detail}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
