import s from './Button.module.css'

const Button = ({style, text, type}) => {
  return (
    <button type={type} className={s[style]}>{text}</button>
  )
}

export default Button