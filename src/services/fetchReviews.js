import axios from 'axios';

export const fetchReviews = async () => {
  const url = 'https://portfolio-js.b.goit.study/api/reviews';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch reviews');
  }
};

