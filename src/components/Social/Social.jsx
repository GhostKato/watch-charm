import Facebook from '../Icons/Facebook/Facebook';
import Instagram from '../Icons/Instagram/Instagram';
import Youtube from '../Icons/Youtube/Youtube';
import s from './Social.module.css';

const Social = ({styleIcon}) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <a href="#">
                    <Facebook styleIcon={styleIcon} />
                </a>
            </li>

            <li className={s.item}>
                <a href="#">
                    <Instagram styleIcon={styleIcon}/>
                </a>
            </li>

            <li className={s.item}>
                <a href="#">
                    <Youtube styleIcon={styleIcon}/>
                </a>
            </li>
        </ul>
    );
};

export default Social;
