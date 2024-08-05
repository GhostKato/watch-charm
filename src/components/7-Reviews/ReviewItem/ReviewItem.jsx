import PropTypes from 'prop-types';
import s from './ReviewItem.module.css'

const ReviewItem = ({ review }) => (
    <li className = {`${s.item} swiper-slide`} id={review._id}>
        <img className = {s.img} src={review.avatar_url} alt="author_photo" />
    <h3 className={s.name}>{review.author}</h3>
    <p className={s.review}>{review.review}</p>    
  </li>
);

ReviewItem.propTypes = {
  review: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    review: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default ReviewItem;





