import { FaYoutube } from "react-icons/fa";

import s from './Youtube.module.css';

const Youtube = ({styleIcon}) => {
  return <FaYoutube className={`${s[styleIcon]} ${s.icon}`}/>;
};

export default Youtube;