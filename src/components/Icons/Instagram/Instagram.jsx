import { AiFillInstagram } from "react-icons/ai";

import s from './Instagram.module.css';

const Instagram = ({styleIcon}) => {
  return <AiFillInstagram className={`${s[styleIcon]} ${s.icon}`}/>;
};

export default Instagram;