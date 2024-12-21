import s from './Menu.module.css';

const Menu = ({styleList, styleItem, styleLink, toggleModalMenu}) => {
    return (
        <ul className={s[styleList]}>
        <li className={s[styleItem]} onClick={toggleModalMenu}><a className={s[styleLink]} href="#home">Home</a></li>
        <li className={s[styleItem]} onClick={toggleModalMenu}><a className={s[styleLink]} href="#about-us">About Us</a></li>
        <li className={s[styleItem]} onClick={toggleModalMenu}><a className={s[styleLink]} href="#catalog">Catalog</a></li>
        <li className={s[styleItem]} onClick={toggleModalMenu}><a className={s[styleLink]} href="#sale">Sale</a></li>
        <li className={s[styleItem]} onClick={toggleModalMenu}><a className={s[styleLink]} href="#reviews">Reviews</a></li>
        <li className={s[styleItem]} onClick={toggleModalMenu}><a className={s[styleLink]} href="#contact-us">Contact Us</a></li>
        </ul>
    )
}
export default Menu