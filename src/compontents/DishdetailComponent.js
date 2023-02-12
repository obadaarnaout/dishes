import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle , CardText} from 'reactstrap';

export default class DishDetail   extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish == null){
            return(
                <div></div>
            );
        }
        
        return(
            <div className="col-12 col-md-5 col-sm-12 col-xs-12 m-1">
                <Card key={dish.id}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        if (comments == null){
            return(
                <div></div>
            );
        }
            
        const allComments = comments.map(comment => {
            let date = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(comment.date));

            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {date}</p>
                </li>
            )
        });

        return (
            <div className='col-12 col-md-5 col-sm-12 col-xs-12 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {allComments}
                </ul>
            </div>
        )
    }

  render() {
    if(this.props.dish == null){
        return(
            <div></div>
        );
    }
    return (
        <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
        </div>
    )
  }
}