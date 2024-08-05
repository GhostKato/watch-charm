import OpenMenu from '../Icons/OpenMenu/OpenMenu';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import s from './Header.module.css';
import { useMediaQuery } from 'react-responsive';

const Header = ({toggleModalMenu}) => {   
  
  const decktopScreen = useMediaQuery({ minWidth: 1280 });
  const mobTabScreen = useMediaQuery({ maxWidth: 1279 });
  return (
    <header className={s.header}>
     <div className={`${s.container} container`}>
        <Logo style='logoMenu' />
        {decktopScreen && <Menu styleList='headerMenuList' styleItem='headerMenuItem' styleLink='headerMenuLink' />}
        {decktopScreen && <Social styleIcon='headerSocialIcon' />}
        {mobTabScreen && <button className={s.btn} onClick={toggleModalMenu}><OpenMenu /></button>}
     </div> 
          </header>
  );
}

export default Header;
