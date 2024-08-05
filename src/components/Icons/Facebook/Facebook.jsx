import { TiSocialFacebook } from "react-icons/ti";

import s from './Facebook.module.css';

const Facebook = ({styleIcon}) => {
  return <TiSocialFacebook className={`${s[styleIcon]} ${s.icon}`}/> ;
};

export default Facebook;