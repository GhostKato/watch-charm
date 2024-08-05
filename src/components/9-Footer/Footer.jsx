import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${s.footer} section`}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.logoSocialNumber}>
           <div className={s.logoSocial}>
              <Logo style='logoFooter' />
              <Social styleIcon='footerSocialIcon' />
           </div>
            <a className={s.number} href="tel:+380684439426">+380 (68) 443-94-26</a>
         </div>
          <p className={s.p}>
            Have the time of your life with our watches: where high-class craftsmanship meets impeccable design
          </p>
          <div className={s.menuAdd}>
            <Menu styleList='footerMenuList' styleItem='footerMenuItem' styleLink='footerMenuLink' />
            <address className={s.address}>
              1678 S. Pioneer Road
              Salt Lake City UT 84104
            </address>
          </div>
          <div className={s.copyPolicy}>
            <p className={s.copy}>&copy;{new Date().getFullYear()} The Watch Spot. All rights reserved.</p>
            <div className={s.policyContainer}>
              <a className={s.policy} href="">Terms of Service</a>
              <a className={s.policy} href="">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
