import s from './Menu.module.css';

const Menu = ({styleList, styleItem, styleLink}) => {
    return (
        <ul className={s[styleList]}>
        <li className={s[styleItem]}><a className={s[styleLink]} href="">Home</a></li>
        <li className={s[styleItem]}><a className={s[styleLink]} href="#projects">About Us</a></li>
        <li className={s[styleItem]}><a className={s[styleLink]} href="#contacts">Catalog</a></li>
        <li className={s[styleItem]}><a className={s[styleLink]} href="#sale">Sale</a></li>
        <li className={s[styleItem]}><a className={s[styleLink]} href="#reviews">Reviews</a></li>
        <li className={s[styleItem]}><a className={s[styleLink]} href="#contact-us">Contact Us</a></li>
        </ul>
    )
}
export default Menu