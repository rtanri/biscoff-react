import React from 'react';

type Cake = {
    name: string;
    slug: string;
    price: string;
    image: string;
    detail?: string;
};

function ModalPopup({ cake }: { cake: Cake }) {
    return (
        <div className="modal fade" id={cake.slug} tabindex="-1">
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
    );
}

export default ModalPopup;
