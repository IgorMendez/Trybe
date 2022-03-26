import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../pages/Home.css';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    const { quantity } = this.state;
    const { id, title, thumbnail, price } = this.props;
    const totalValues = price;
    const obj = {
      id,
      title,
      price,
      thumbnail,
      quantity,
      totalValues,
    };
    window.localStorage
      .setItem(id, JSON.stringify(obj));
  }

  render() {
    const { title, thumbnail, price, category_id: categoryId, id } = this.props;
    return (
      <div className="card" data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <div className="card-info">
          <h3>{title}</h3>
          <p>{`R$ ${price}`}</p>
        </div>
        <div className="card-ui">
          <button
            data-testid="product-add-to-cart"
            onClick={ this.handleAddCart }
            type="button"
          >
            Add to Cart
          </button>
          <Link
            data-testid="product-detail-link"
            to={ `/product/${categoryId}/${id}/${encodeURI(title)}` }
          >
            Mais Detalhes
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
