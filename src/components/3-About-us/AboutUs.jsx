import s from './AboutUs.module.css';
import AboutUsImage from './AboutUsImage/AboutUsImage';
import AboutUsText from './AboutUsText/AboutUsText';

const AboutUs = () => {
  return (
    <section className={`${s.section} section`}>
      <div className={`${s.container} container`}>
        <AboutUsText/>
        <AboutUsImage />        
      </div>
    </section>
  )
}
export default AboutUs