import Button from '../Button/Button';
import s from './Advertisement.module.css';

const Advertisement = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className={s.content}>
          <h2 className='visually-hidden'>Advertisement</h2>
          <p className={s.p}>Choose <span>your story</span>, making every moment unique.
            Time is your style, and we reveal it.</p>
          <Button style='advertisementBtn' text='Contact Us' type='button'/>
        </div>
      </div>
  </section>
  )
}
export default Advertisement