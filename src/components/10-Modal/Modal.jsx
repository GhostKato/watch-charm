import ReactModal from 'react-modal';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import s from './Modal.module.css';
import Closes from '../Icons/OpenMenu/OpenMenu';


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
        <Menu styleList='modalMenuList' styleItem='modalMenuItem' styleLink='modalMenuLink' />
        <Social styleIcon='modalSocialIcon'/>
      </div>
    </ReactModal>
  );
}

export default Modal;
