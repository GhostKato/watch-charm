import scrollToSection from '../../utils/scroll'
import s from './Button.module.css'

const Button = ({style, text, type, click}) => {
  return (
    <button type={type} className={s[style]} onClick={() => scrollToSection(click)}>{text}</button>
  )
}

export default Button