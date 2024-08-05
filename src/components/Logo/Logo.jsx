import s from './Logo.module.css';

const Logo = ({ style }) => {
    return (
        <a className={`${s[style]} ${s.logo}`} href="">watchcharm</a>
    );
}

export default Logo;
