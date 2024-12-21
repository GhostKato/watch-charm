import Facebook from '../Icons/Facebook/Facebook';
import Instagram from '../Icons/Instagram/Instagram';
import Youtube from '../Icons/Youtube/Youtube';
import s from './Social.module.css';

const Social = ({styleIcon}) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <a href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer nofollow">
                    <Facebook styleIcon={styleIcon} />
                </a>
            </li>

            <li className={s.item}>
                <a href="https://www.instagram.com/goitclub"
                target="_blank"
                rel="noopener noreferrer nofollow">
                    <Instagram styleIcon={styleIcon}/>
                </a>
            </li>

            <li className={s.item}>
                <a href="https://www.youtube.com/@GoIT"
                target="_blank"
                rel="noopener noreferrer nofollow">
                    <Youtube styleIcon={styleIcon}/>
                </a>
            </li>
        </ul>
    );
};

export default Social;
