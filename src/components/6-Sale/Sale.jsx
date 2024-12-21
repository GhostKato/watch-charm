import s from './Sale.module.css';
import SaleImage from './SaleImage/SaleImage';
import SaleText from './SaleText/SaleText';


const Sale = () => {
  return (
    <section className='section' id='sale'>
      <div className='container'>
        <h2 className={s.title}>Sale</h2>
        <div className={s.content}>
          <SaleImage />
          <SaleText/>
        </div>
      </div>
  </section>
  )
}
export default Sale