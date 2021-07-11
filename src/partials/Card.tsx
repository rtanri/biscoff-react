import React from "react";
import { Link } from "react-router-dom";
import ModalPopup from "./Modal";

class Card extends React.Component {
  render() {
    const cake = this.props.cake;
    let modalTarget = `#${cake.slug}`;

    return (
      <div>
        <Link
          className="card-link"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={modalTarget}
        >
          <div className="card">
            <img src={cake.image} alt="baked-food" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{cake.name}</h5>
              <p className="card-text">{cake.price}</p>
            </div>
          </div>
        </Link>

        {/* Modal pop up */}
        <ModalPopup cake={cake} />
      </div>
    );
  }
}

export default Card;
