import s from './SaleText.module.css'

const SaleText = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>MARQ® Commander (Gen 2) - Carbon Edition</h3>
      <p className={s.tag}>Product tag: 706587</p>
      <div className={s.priceCont}>
        <p className={s.price1}>€1500</p>
        <p className={s.price2}>€3000</p>        
      </div>
      <p className={s.about}>The Garmin MARQ Commander Gen 2 Carbon Edition is a modern smartwatch for adventurers that takes materials and features to the next level.
        The body of the watch is made of very durable Fused Carbon Fiber material and has a precise AMOLED touch screen.
        The sensitive touch screen is complemented by buttons that can be used in any conditions. </p>
      <div className={s.descriptionCont}>
        <p className={s.description}>Fused carbon fiber</p>
        <p className={s.description}>Grade-5 Titanuim</p>
        <p className={s.description}>Athlete</p>
        <p className={s.description}>Golfer</p>
        <p className={s.description}>Commander</p>
        <p className={s.description}>Adventurer</p>
      </div>
    </div>
  )
}

export default SaleText