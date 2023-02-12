import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

export default class DishCard extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Card key={this.props.dish.dishKey} onClick={() => this.props.onDishSelect(this.props.dish)}>
          <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
          <CardImgOverlay>
              <CardTitle>{this.props.dish.name}</CardTitle>
          </CardImgOverlay>
      </Card>
    )
  }
}
