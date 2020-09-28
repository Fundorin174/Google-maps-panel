import React from 'react';
import classes from './SidePanel.module.css';
import mainImg from './../../img/mainImg.jpg';
import searchIcon from './../../img/search.png'; 
import closeIcon from './../../img/close.png'; 
import cn from 'classnames';
import iconImg1 from './../../img/icons/directions_white_18dp.png';
import iconImg2 from './../../img/icons/bookmark_border_gm_blue_18dp.png';
import iconImg5 from './../../img/icons/share_gm_blue_18dp.png';
import iconImg4 from './../../img/icons/send_to_mobile_gm_blue_18dp.png';
import iconImg3 from './../../img/icons/share_location_gm_blue_18dp.png';
import contacticonImg1 from './../../img/contacts/place_gm_blue_24dp.png';
import contacticonImg2 from './../../img/contacts/schedule_gm_blue_24dp.png';
import contacticonImg3 from './../../img/contacts/ic_plus_code.png';
import contacticonImg4 from './../../img/contacts/phone_gm_blue_24dp.png';
import contacticonImg7 from './../../img/contacts/label_gm_blue_24dp.png';
import contacticonImg6 from './../../img/contacts/verified_user_gm_blue_24dp.png';
import contacticonImg5 from './../../img/contacts/public_gm_blue_24dp.png';
import attendance from './../../img/attendance.png';
import photo1 from './../../img/Photo/all.jpg';
import photo2 from './../../img/Photo/panorama.jpg';
import photo3 from './../../img/Photo/video.jpg';
import avatar1 from './../../img/reviews/0/avatar.png';
import avatar2 from './../../img/reviews/1/avatar.png';


import { useState } from 'react';
import Photo from './Photo/Photo';
import Review from './Review/Review';


const SidePanel = () => {

const initialState = {
  currentTargetID: 0,
  targets: [
    {
      id: 0,
      name: 'Краеведческий музей',
      fullName: 'Воронежский областной краеведческий музей',
      raiting: 4.6,
      views: 397,
      photos: [
        {url: photo1, text: 'Все'},
        {url: photo2, text: 'Панорама и просмотр улиц'},
        {url: photo3, text: 'Видео'}],
      contacts: {
          address: {
            index: '394018',
            district: 'Воронежская обл.',
            city: 'Воронеж',
            street: 'Плехановская ул.',
            building: '29',
          },
          webSiteUrl: 'museum-vrn.ru',
          phone: '8(473)252-03-95',
          destination: 'M58V+M9 Воронеж',
        },
      reviews: [
        {
          id: 0,
          name: 'Jello Kde',
          avatar: avatar1,
          raiting: '',
          countOfreviews: 1,
          countOfLikes: 0,
          textReview: 'Познавательно',
          photos: []
        },
        {
          id: 1,
          name: 'Екатерина Иванченко',
          avatar: avatar2,
          raiting: 'Местный эксперт',
          countOfreviews: 101,
          countOfLikes: 1,
          textReview: 'Хороший вариант для отдыха, после долгой дороги. Минус только  за лай собак под окнами и шуршание мыши на потолке. Постель, полотенца чистые белые. Завтрак включен в стоимость.',
          photos: [
            'https://lh5.googleusercontent.com/p/AF1QipPLZQjqFtZZnAuIT3yk2Q5zTB5iG7gLOkJg57ex=w600-h600-p-k-no',
            'https://lh5.googleusercontent.com/p/AF1QipM3Q3JVacmYuBZN0UcoFTcE6DlatAx8M_77fmLS=w600-h600-p-k-no',
            'https://lh5.googleusercontent.com/p/AF1QipOO76rSIP7hh1l3kSGpp2ps8iCCFIJlEJgWELg1=w600-h600-p-k-no',
            'https://lh5.googleusercontent.com/p/AF1QipOcxfD9sxWSx8as9xsqW79XfzSIkwQh0s1iNU_8=w600-h600-p-k-no',
          ]
        }
      ]
    }
  ]
}


const [isSheduleOpen, isSheduleOpenToggle] = useState(false);
const [state, setState] = React.useState({
  ...initialState,
})

let fullAddress = `${state.targets[state.currentTargetID].contacts.address.street}, ${state.targets[state.currentTargetID].contacts.address.building} ${state.targets[state.currentTargetID].contacts.address.city}, ${state.targets[state.currentTargetID].contacts.address.district}, ${state.targets[state.currentTargetID].contacts.address.index}`;

const createPhotos = state.targets[state.currentTargetID].photos.map(photoItem => {
  return <Photo key = {photoItem.url} text = {photoItem.text} photo = {photoItem.url}/>
});

const createReviews = state.targets[state.currentTargetID].reviews.map(review => {
  return <Review data = {review}/>
});

  return (
    <div className = {classes.mainWrapper}>
      <div className = {classes.sidePanelWrp}>
        {/* Main Image */}
      <div className = {classes.mainImg}>
      <div className = {classes.ImgWrp}>
        <img src={mainImg} alt="mainImg"/>
      </div>
      <div className = {classes.searchBlock}>
        <div className = {cn(classes.gamburger, classes.tooltip)} data-tooltip='Меню'>
          <img src="https://fonts.gstatic.com/s/i/googlematerialicons/menu/v6/black-24dp/1x/gm_menu_black_24dp.png" alt="hamburger"/>
        </div>
        <div className = {classes.inputCoord}>
          <input type="inputCoord" defaultValue = '51°52"" 47.7 N 48°18 29.3 E' />
        </div>
        <div className = {cn(classes.searchIcon, classes.tooltip)} data-tooltip='Поиск'>
          <img src={searchIcon} alt="search"/>
        </div>
        <div className = {cn(classes.closeBtn, classes.tooltip)} data-tooltip='Удалить результаты поиска'>
          <img src={closeIcon} alt="close"/>
        </div>
      </div>
    </div>

    {/* Main Text */}
    <div className = {classes.mainText}>
        <h1>
          {state.targets[state.currentTargetID].fullName}
        </h1>
        <div className = {classes.raiting}>
          <span>{state.targets[state.currentTargetID].raiting}</span>
          <ol>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
            <li>&#9733;</li>
          </ol>
          <span>{state.targets[state.currentTargetID].views}</span>
        </div>
        <p>{state.targets[state.currentTargetID].name}</p>
    </div>


    {/* Main Icons */}
    <div className = {classes.IconsWrp}>
      <div className = {classes.iconItem}> <div className = {cn(classes.iconImgWrp, classes.active)}><img src={iconImg1} alt=""/></div> <p>Проложить маршрут</p> </div>
      <div className = {classes.iconItem}> <div className = {classes.iconImgWrp}><img src={iconImg2} alt=""/></div> <p>Созранить</p> </div>
      <div className = {classes.iconItem}> <div className = {classes.iconImgWrp}><img src={iconImg3} alt=""/></div> <p>Искать поблизости</p> </div>
      <div className = {classes.iconItem}> <div className = {classes.iconImgWrp}><img src={iconImg4} alt=""/></div> <p>Отправить на телефон</p> </div>
      <div className = {classes.iconItem}> <div className = {classes.iconImgWrp}><img src={iconImg5} alt=""/></div> <p>Поделится</p> </div>
    </div>
    
    {/* COVID */}
    <div className = {classes.covidWrp}>
      <div className = {classes.covidItem}>
        <h4>Уточните информацию в организации</h4>
        <p>Из-за пандемии COVID-19 данные о часах работы и услугах могут быть не точными</p>
      </div>
    </div>

    {/* contacts */}

    <div className = {classes.contactsWrp}>
        <div className = {classes.contactItemRow}><img src={contacticonImg1} alt=""/> 
        <p>{fullAddress}</p></div>
          <div className = {classes.contactItemRowExtended} >
              <div className = {classes.contactItemRow} onClick = {()=> isSheduleOpenToggle(prev => ! prev)}><img src={contacticonImg2} alt=""/> <p>Закрыто</p>{isSheduleOpen ? <span>&#8743;</span> : <span>&#8744;</span>}
              </div>

              {isSheduleOpen && 
              <div>
                <p><b>воскресенье 10:00–18:00</b></p>
                <p>понедельник Закрыто</p>
                <p>вторник Закрыто</p>
                <p>среда 11:00 - 18:00</p>
                <p>четверг 12:00 - 20:00</p>
                <p>пятница 10:00 - 18:00</p>
                <p>суббота 10:00 - 18:00</p>
                </div>}
          </div>
        <div className = {classes.contactItemRow}><img src={contacticonImg3} alt=""/> <p>{state.targets[state.currentTargetID].contacts.webSiteUrl}</p></div>
        <div className = {classes.contactItemRow}><img src={contacticonImg4} alt=""/> <p>{state.targets[state.currentTargetID].contacts.phone}</p></div>
        <div className = {classes.contactItemRow}><img src={contacticonImg5} alt=""/> <p>{state.targets[state.currentTargetID].contacts.destination}</p></div>
        <div className = {classes.contactItemRow}><img src={contacticonImg6} alt=""/> <p>Я владелец компании</p></div>
        <div className = {classes.contactItemRow}><img src={contacticonImg7} alt=""/> <p>Добавить ярлык</p></div>
    </div>

    {/* attendance */}
    <div className = {classes.attendanceWrp}>
    <form>
      <span>Посещаемость: </span>
      <select size='1'>
                <option value = 'Воскресеньям'>по воскресеньям</option>
                <option value = 'Понедельникам'>по понедельникам</option>
                <option value = 'Вторникам'>по вторникам</option>
                <option value = 'Средам'>по средам</option>
                <option value = 'Четвергам'>по четвергам</option>
                <option value = 'Пятницам'>по пятницам</option>
                <option value = 'Субботам'>по субботам</option>
      </select>
    </form>      
    {/* Тут бы реакт бутстрапом сделать норм слайдер, но не успеваю. */}
    <div className = {classes.attendanceImgWrp}>
      <img src={attendance} alt=""/>
    </div>
    </div>

    {/* Photo */}
    <div className = {classes.photoMainWrp}>
      <p>Фото</p>
      <div className = {classes.photoImgItemsWrp}>
      {createPhotos}
      </div>
      <div className = {classes.addPhotoBtnWrp}><button>Добавить фото</button></div>
    </div>

      {/* Reviews */}
      <div className = {classes.mainReviewsWrp}> 
        <div className = {classes.mainReviewsTitle}>
          <h4>Все отзывы</h4>
          <div className = {cn(classes.searchIconWrp, classes.tooltip)} data-tooltip='Поиск отзывов'><img src={searchIcon} alt=""/>
          </div>
        </div>
        <div className = {classes.reviewsWrp}>
         {createReviews}
        </div>


      </div>


    </div>
    </div>
  )


}

export default SidePanel;