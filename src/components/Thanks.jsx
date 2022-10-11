import React from 'react';
import Card from './Card';
import './Thanks.css';
import Thank from './media/th.jpg';

const Thanks = (rating) => {
  return (
    <Card>
        <div className="thanks_img_container">
            <img className='thnks' src={Thank} alt="" />
        </div>

        <div className="selected">
            <p>You selected {rating} out of 5</p>
        </div>

        <h2 className='title'>Thank You</h2>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ab esse! Voluptatum?</p>
    </Card>
  )
}

export default Thanks