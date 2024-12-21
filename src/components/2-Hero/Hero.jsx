import ContentImage from '../ContentImage/ContentImage';
import s from './Hero.module.css'

import timesMobWebp from '../../img/2-Hero/timesMob.webp'
import timesMob2xWebp from '../../img/2-Hero/timesMob@2x.webp'
import timesMob from '../../img/2-Hero/timesMob.jpg'
import timesMob2x from '../../img/2-Hero/timesMob@2x.jpg'
import timesTabWebp from '../../img/2-Hero/timesTab.webp'
import timesTab2xWebp from '../../img/2-Hero/timesTab@2x.webp'
import timesTab from '../../img/2-Hero/timesTab.jpg'
import timesTab2x from '../../img/2-Hero/timesTab@2x.jpg'
import timesDesWebp from '../../img/2-Hero/timesDes.webp'
import timesDes2xWebp from '../../img/2-Hero/timesDes@2x.webp'
import timesDes from '../../img/2-Hero/timesDes.jpg'
import timesDes2x from '../../img/2-Hero/timesDes@2x.jpg'

import people1MobWebp from '../../img/2-Hero/people1Mob.webp'
import people1Mob2xWebp from '../../img/2-Hero/people1Mob@2x.webp'
import people1Mob from '../../img/2-Hero/people1Mob.jpg'
import people1Mob2x from '../../img/2-Hero/people1Mob@2x.jpg'
import people1TabWebp from '../../img/2-Hero/people1Tab.webp'
import people1Tab2xWebp from '../../img/2-Hero/people1Tab@2x.webp'
import people1Tab from '../../img/2-Hero/people1Tab.jpg'
import people1Tab2x from '../../img/2-Hero/people1Tab@2x.jpg'
import people1DesWebp from '../../img/2-Hero/people1Des.webp'
import people1Des2xWebp from '../../img/2-Hero/people1Des@2x.webp'
import people1Des from '../../img/2-Hero/people1Des.jpg'
import people1Des2x from '../../img/2-Hero/people1Des@2x.jpg'

import people2MobWebp from '../../img/2-Hero/people2Mob.webp'
import people2Mob2xWebp from '../../img/2-Hero/people2Mob@2x.webp'
import people2Mob from '../../img/2-Hero/people2Mob.jpg'
import people2Mob2x from '../../img/2-Hero/people2Mob@2x.jpg'
import people2TabWebp from '../../img/2-Hero/people2Tab.webp'
import people2Tab2xWebp from '../../img/2-Hero/people2Tab@2x.webp'
import people2Tab from '../../img/2-Hero/people2Tab.jpg'
import people2Tab2x from '../../img/2-Hero/people2Tab@2x.jpg'
import people2DesWebp from '../../img/2-Hero/people2Des.webp'
import people2Des2xWebp from '../../img/2-Hero/people2Des@2x.webp'
import people2Des from '../../img/2-Hero/people2Des.jpg'
import people2Des2x from '../../img/2-Hero/people2Des@2x.jpg'

import people3MobWebp from '../../img/2-Hero/people3Mob.webp'
import people3Mob2xWebp from '../../img/2-Hero/people3Mob@2x.webp'
import people3Mob from '../../img/2-Hero/people3Mob.jpg'
import people3Mob2x from '../../img/2-Hero/people3Mob@2x.jpg'
import people3TabWebp from '../../img/2-Hero/people3Tab.webp'
import people3Tab2xWebp from '../../img/2-Hero/people3Tab@2x.webp'
import people3Tab from '../../img/2-Hero/people3Tab.jpg'
import people3Tab2x from '../../img/2-Hero/people3Tab@2x.jpg'
import people3DesWebp from '../../img/2-Hero/people3Des.webp'
import people3Des2xWebp from '../../img/2-Hero/people3Des@2x.webp'
import people3Des from '../../img/2-Hero/people3Des.jpg'
import people3Des2x from '../../img/2-Hero/people3Des@2x.jpg'
import scrollToSection from '../../utils/scroll';

const Hero = () => { 

  return (
    <section className="section">
      <div className={`${s.container} container`}>
        <div className={s.textContainer}>
          <h1 className={s.title}>Welcome to our <span>collection</span> of premium watches</h1>
          <p className={s.p}>Our watches are not just timepieces,
            but also an expression of your personality and lifestyle.
            From classic designs to modern ones, we have a watch to suit every taste and occasion.</p>
          <ul className={s.list}>
            <li className={`${s.item} ${s.item1}`}>
            <ContentImage className={s.imgPeople}
        mobWebp1x={people1MobWebp}
        mobWebp2x={people1Mob2xWebp}
        mob1x={people1Mob}
        mob2x={people1Mob2x}
            
        tabWebp1x={people1TabWebp}
        tabWebp2x={people1Tab2xWebp}
        tab1x={people1Tab}
        tab2x={people1Tab2x}
            
        deskWebp1x={people1DesWebp}
        deskWebp2x={people1Des2xWebp}
        desk1x={people1Des}
        desk2x={people1Des2x}
            type='image/jpeg'
            alt='People1'                
            width='60'
/>            
            </li>
             <li className={`${s.item} ${s.item2}`}>
             <ContentImage
         mobWebp1x={people2MobWebp}
        mobWebp2x={people2Mob2xWebp}
        mob1x={people2Mob}
        mob2x={people2Mob2x}
            
        tabWebp1x={people2TabWebp}
        tabWebp2x={people2Tab2xWebp}
        tab1x={people2Tab}
        tab2x={people2Tab2x}
            
      deskWebp1x={people2DesWebp}
      deskWebp2x={people2Des2xWebp}
      desk1x={people2Des}
      desk2x={people2Des2x}
                type='image/jpeg'
            alt='People2'                
                width='60'                
              />   
            </li>
             <li className={s.item}>          
        <ContentImage
         mobWebp1x={people3MobWebp}
        mobWebp2x={people3Mob2xWebp}
        mob1x={people3Mob}
        mob2x={people3Mob2x}
            
        tabWebp1x={people3TabWebp}
        tabWebp2x={people3Tab2xWebp}
        tab1x={people3Tab}
        tab2x={people3Tab2x}
            
        deskWebp1x={people3DesWebp}
        deskWebp2x={people3Des2xWebp}
        desk1x={people3Des}
        desk2x={people3Des2x}
                type='image/jpeg'
            alt='People3'                
                width='60'
/>    
            </li>
          </ul>
          <button className={s.btn} onClick={() => scrollToSection('footer')}>Scroll down</button>
        </div>
        <div className={s.imgContainer}>  
          
<ContentImage
        mobWebp1x={timesMobWebp}
        mobWebp2x={timesMob2xWebp}
        mob1x={timesMob}
        mob2x={timesMob2x}
            
        tabWebp1x={timesTabWebp}
        tabWebp2x={timesTab2xWebp}
        tab1x={timesTab}
        tab2x={timesTab2x}
            
        deskWebp1x={timesDesWebp}
        deskWebp2x={timesDes2xWebp}
        desk1x={timesDes}
        desk2x={timesDes2x}
            type='image/jpeg'
            alt='Clock'            
            width='704'
/>                        
        </div>
      </div>
    </section>
  );
};

export default Hero;
