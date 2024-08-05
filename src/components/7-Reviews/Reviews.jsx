import { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import toast, { Toaster } from 'react-hot-toast';
import { fetchReviews } from '../../services/fetchReviews';
import { checkWebPSupport } from '../../services/checkWebPSupport';
import ReviewItem from '../7-Reviews/ReviewItem/ReviewItem'; // Переконайтесь, що шлях правильний
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [webPSupported, setWebPSupported] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        const reviewsData = await fetchReviews();
        setReviews(reviewsData);

        const isWebPSupported = await checkWebPSupport();
        setWebPSupported(isWebPSupported);

        new Swiper('.review-swiper', {
          watchOverflow: true,
          keyboard: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          direction: 'horizontal',
          slidesPerView: 1,
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1280: { slidesPerView: 3, spaceBetween: 16 },
          },
        });
      } catch (error) {
        toast.error('NOT FOUND ANY REVIEWS');
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    if (webPSupported) {
      document.querySelectorAll('.reviews-photo').forEach(img => {
        const webpSrc = img.src.replace(/\.(jpe?g|png)$/i, '.webp');
        img.src = webpSrc;
      });
    }
  }, [webPSupported]);

  return (
   <section className='section'>
      <div className='container'>
        <h2 className={s.title}>Reviews</h2>
        <Toaster />
        <div className="swiper review-swiper">
          <div className="swiper-wrapper">
            {reviews.map(review => (
              <ReviewItem key={review._id} review={review} />
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
   </section>
  );
};

export default Reviews;
