import ReactModal from 'react-modal';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import s from './Modal.module.css';
import Closes from '../Icons/Сloses/Closes';


ReactModal.setAppElement('#root');

const Modal = ({isOpenModalMenu, toggleModalMenu}) => {    

  return (
    <ReactModal
      isOpen={isOpenModalMenu}
      onRequestClose={toggleModalMenu}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.container}>
        <button className={s.btn} onClick={toggleModalMenu}>
          <Closes/>
        </button>
        <Menu styleList='modalMenuList' styleItem='modalMenuItem' styleLink='modalMenuLink' toggleModalMenu={toggleModalMenu} />
        <Social styleIcon='modalSocialIcon'/>
      </div>
    </ReactModal>
  );
}

export default Modal;
