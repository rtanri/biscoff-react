import React, { ReactNode } from "react";
import Card from "../partials/Card";
// import { getInitialCakes } from '../utils/database';

type cakesProps = {
  name: string;
  slug: string;
  price: string;
  image: string;
  detail: string;
}[];

class BakedGoods extends React.Component<
  {},
  { cakes: cakesProps; item: ReactNode }
> {
  constructor(props: any) {
    super(props);

    let cakes = [
      {
        name: "Pain Au Chocolat",
        slug: "pain-au-chocolat",
        price: "$6.50",
        image: "/assets/product-1-300px.jpg",
        detail:
          "Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Parturient montes nascetur ridiculus mus mauris vitae ultricies.",
      },
      {
        name: "Mini Subway Cookies",
        slug: "mini-subway-cookies",
        price: "$3.20",
        image: "/assets/product-2-300px.jpg",
        detail:
          "Rutrum quisque non tellus orci ac auctor augue. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Turpis massa sed elementum tempus. Ut sem nulla pharetra diam sit amet.",
      },
      {
        name: "Blueberry Cupcakes",
        slug: "blueberry-cupcakes",
        price: "$4.00",
        image: "/assets/product-3-300px.jpg",
        detail:
          "Tristique senectus et netus et malesuada fames. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Id faucibus nisl tincidunt eget nullam non nisi est.",
      },
    ];

    this.state = {
      cakes: cakes,
    };
  }

  // componentDidMount() {
  // let productList = getInitialCakes()
  // this.state.cakes.setState({
  //      cakes: productList
  // })
  // console.log("== data is ingested ==")

  render() {
    let displayCards = this.state.cakes.map(item => {
      return <Card cake={item} />;
    });
    return (
      <div>
        <h2 className="text-center mt-5">Baked Goods</h2>
        <p className="text-center mb-3">Try to click the products</p>

        <div className="d-flex justify-content-center">{displayCards}</div>
      </div>
    );
  }
}

export default BakedGoods;
