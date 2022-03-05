import React from 'react';
import './testimonials.css';
import AVTA1 from '../../assets/avatar1.jpg';
import AVTA2 from '../../assets/avatar2.jpg';
import AVTA3 from '../../assets/avatar3.jpg';
import AVTA4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const client = [
  {
    id: 1,
    image: AVTA1,
    name: "뽀글",
    review: "꾸준하게 열심히 잘 해요!"
  },
  {
    id: 2,
    image: AVTA2,
    name: "우현",
    review: "미루지 않고 일합니다."
  },
  {
    id: 3,
    image: AVTA3,
    name: "요한",
    review: "빠르게 배우고 있습니다!"
  },
  {
    id: 4,
    image: AVTA4,
    name: "재균",
    review: "기록을 잘 해둡니다!"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          client.map(({ id,image ,name, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="Avatar One" />  
                </div>  
                <h5 className="client__name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          })  
        }
      </Swiper>
    </section>
  )
}

export default Testimonials