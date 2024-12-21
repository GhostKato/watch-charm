import Button from '../../Button/Button'
import s from './AboutUsText.module.css'

const AboutUsText = () => {
  return (
      <div className={s.content}>
          <h2 className={s.title}>About Us</h2>
          <p className={s.p1}>Welcome to our premium watch collection, where luxury and style meet functionality and precision.
              Our selection of timepieces embodies the very best in Swiss craftsmanship and engineering, ensuring that you'll
              always have a reliable and stylish accessory on your wrist.</p>
          <p className={s.p2}>At our premium watch collection, we believe that a watch is more than just a timekeeping device – it's a
              statement piece that reflects your personality and style.
              So why settle for anything less than the best? </p>
          <Button style='aboutUsBtn' text='View catalog' type='button' click={'catalog'}/>
    </div>
  )
}

export default AboutUsText