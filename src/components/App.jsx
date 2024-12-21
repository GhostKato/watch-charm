import Header from './1-Header/Header';
import Hero from './2-Hero/Hero';
import AboutUs from './3-About-us/AboutUs';
import Catalog from './4-Catalog/Catalog';
import Advertisement from './5-Advertisement/Advertisement';
import Sale from './6-Sale/Sale';
import Reviews from './7-Reviews/Reviews';
import ContactUs from './8-Contact-us/ContactUs';
import Footer from './9-Footer/Footer';
import Modal from './10-Modal/Modal';
import s from './App.module.css';

import useToggle from '../hooks/modalVisibility';

function App() {

  const [isOpenModalMenu, toggleModalMenu] = useToggle();  

  return (
    <>
      <Header toggleModalMenu={toggleModalMenu} />
      <main className={s.main}>
        <Hero />
        <AboutUs/>
        <Catalog />
        <Advertisement />
        <Sale />
        <Reviews />
        <ContactUs />
      </main>
      <Footer />
      <Modal isOpenModalMenu={isOpenModalMenu} toggleModalMenu={toggleModalMenu} />
    </>
  );
}

export default App;
