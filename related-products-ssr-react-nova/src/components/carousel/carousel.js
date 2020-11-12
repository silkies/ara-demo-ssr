import React, { useState, useEffect } from 'react';
import ProductCard from '../product-card/product-card';
import ItemsCarousel from 'react-items-carousel';
import './carousel.css';

class ProductsCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [], width: window.width, activeItemIndex: 0, slides: []};
}

  componentDidMount() {
    this.setState({products: this.props.products});
    this.setState({slides: this.createSlides()});

  }

  setNumberOfCards() {
    if (this.state.width < 650) {
      return 1;
    } else if (this.state.width < 930) {
      return 2;
    } else if (this.state.width < 1200) {
      return 3;
    } else if (this.state.width < 1400) {
      return 4;
    } else {
      return 5;
    }
  }

  changeActiveItem (activeItemIndex){
    this.setState({ activeItemIndex });
  }

  createSlides() {

    let slides = this.props.products.map((product) => {
        return <ProductCard product={product} key={product.id} />
      }
    );
    return slides;
  } 
  render() {
    return (
      <div style={{ padding: `0 ${65}px` }}>
      <ItemsCarousel
        numberOfCards={this.setNumberOfCards()}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        activePosition={'center'}

        leftChevron={<button className='btn-chevron'>{'<'}</button>}
        rightChevron={<button className='btn-chevron'>{'>'}</button>}
        outsideChevron={true}
        chevronWidth={65}
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={this.state.activeItemIndex}
      >
        {this.createSlides()}
      </ItemsCarousel>
    </div>
    );
  }
}

export default ProductsCarousel;

/*
export default function ProductsCarousel(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const products = props.products;
  const chevronWidth = 65;
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const slides = products.map((product) =>
    <ProductCard product={product} key={product.id} />
  );

  
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  const setNumberOfCards = () => {
    if (width < 650) {
      return 1;
    } else if (width < 930) {
      return 2;
    } else if (width < 1200) {
      return 3;
    } else if (width < 1400) {
      return 4;
    } else {
      return 5;
    }
  }

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        numberOfCards={setNumberOfCards()}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        activePosition={'center'}

        leftChevron={<button className='btn-chevron'>{'<'}</button>}
        rightChevron={<button className='btn-chevron'>{'>'}</button>}
        outsideChevron={true}
        chevronWidth={chevronWidth}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
      >
        {slides}
      </ItemsCarousel>
    </div>
  );

}*/