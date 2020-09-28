import React from 'react';
import classes from './Review.module.css'

const Review = (props) => {

  const createRewiewPhotos = props.data.photos[0] ? 
props.data.photos.map(photo => {
  return <img key ={photo} src={photo} />
}) : null;

  return(
    <div className = {classes.reviewItem}>
                <div className = {classes.reviewTitle}>
                  <div className = {classes.avatarWrp}><img src={props.data.avatar} alt="avatar"/> </div>
                  <div className = {classes.userDataWrp}>
                    <h4>{props.data.name}</h4>
                    <p>{`${props.data.raiting} : ${props.data.countOfreviews} отзыв`}</p>
                  </div>
                  <div className = {classes.dotsWrp}><img src="https://www.gstatic.com/images/icons/material/system_gm/1x/more_vert_black_18dp.png" alt=""/></div>
                </div>
                <div>
                  <p>{props.data.textReview}</p>
                </div>
                <div className = {classes.reviewsPhotosWrp}>
                  {createRewiewPhotos}
                </div>
                <div className = {classes.reviewFooter}>
                  <div className = {classes.like}>
                    <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/thumb_up_black_18dp.png" alt="like"/>
                    {props.data.countOfLikes && props.data.countOfLikes}
                    <p>Нравится</p>
                  </div>
                  <div className = {classes.share}>
                  <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/share_black_18dp.png" alt="share"/>
                    <p>Поделиться</p>
                  </div>
                </div>
          </div>
  )
}

export default Review;