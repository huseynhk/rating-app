import React from 'react';
import Card from './Card';
import './Rating.css';
import starImg from './media/str.png';
import { useState } from 'react';

const Rating = (rating ,setRating , setShowThanks) => {

const [activeRatings , setActiveRatings] = useState({
    oneStar : false,
    twoStar : false,
    threeStar : false,
    fourStar : false,
    fiveStar : false,
});

const handleSubmit = () =>{
  if(!rating) return;
  setShowThanks(true);
}

  return (
    <Card>
   <div className="star_img_container">
    <img className='strPhoto' src={starImg} alt="" />
   </div>
    <h2 className='title'>How did we do ?</h2>
   <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquam debitis numquam corrupti quasi ad!</p>

   <div className="rating">
    <div className={activeRatings.oneStar ? "rating_container active" : "rating_container"}
     onClick={() => {
     setActiveRatings({
        oneStar : true,
        twoStar : false,
        threeStar : false,
        fourStar : false,
        fiveStar : false,
    })
    setRating(1)
    }}>1</div>

    <div className={activeRatings.twoStar ? "rating_container active" : "rating_container"}
     onClick={() =>{
        setActiveRatings({
            oneStar : false,
            twoStar : true,
            threeStar : false,
            fourStar : false,
            fiveStar : false,
        })
    setRating(2)

     }}  >2</div>

    <div className={activeRatings.threeStar ? "rating_container active" : "rating_container"}
     onClick={() => {
        setActiveRatings({
            oneStar : false,
            twoStar : false,
            threeStar : true,
            fourStar : false,
            fiveStar : false,
        })
    setRating(3)


     }}>3</div>
    <div className={activeRatings.fourStar ? "rating_container active" : "rating_container"}
    onClick={() => {
        setActiveRatings({
            oneStar : false,
            twoStar : false,
            threeStar : false,
            fourStar : true,
            fiveStar : false, 
        })
    setRating(4)

    }}
    >4</div>

    <div className={activeRatings.fiveStar ? "rating_container active" : "rating_container"}
     onClick={()=>{
        setActiveRatings({
            oneStar : false,
            twoStar : false,
            threeStar : false,
            fourStar : false,
            fiveStar : true,
        })
    setRating(5)

     }}
     
    
    >5</div>

   </div>
   <button className='submit_btn' onClick={handleSubmit}>Submit</button>

    </Card>
  )
}

export default Rating