import ContentImage from '../../ContentImage/ContentImage'
import s from './AboutUsImage.module.css'

import aboutMobWebp from '../../../img/3-About-us/aboutMob.webp'
import aboutMob2xWebp from '../../../img/3-About-us/aboutMob@2x.webp'
import aboutMob from '../../../img/3-About-us/aboutMob.jpg'
import aboutMob2x from '../../../img/3-About-us/aboutMob@2x.jpg'
import aboutTabWebp from '../../../img/3-About-us/aboutTab.webp'
import aboutTab2xWebp from '../../../img/3-About-us/aboutTab@2x.webp'
import aboutTab from '../../../img/3-About-us/aboutTab.jpg'
import aboutTab2x from '../../../img/3-About-us/aboutTab@2x.jpg'
import aboutDesWebp from '../../../img/3-About-us/aboutDes.webp'
import aboutDes2xWebp from '../../../img/3-About-us/aboutDes@2x.webp'
import aboutDes from '../../../img/3-About-us/aboutDes.jpg'
import aboutDes2x from '../../../img/3-About-us/aboutDes@2x.jpg'

const AboutUsImage = () => {
  return (
     <div className={s.imgContainer}>  
          
<ContentImage
        mobWebp1x={aboutMobWebp}
        mobWebp2x={aboutMob2xWebp}
        mob1x={aboutMob}
        mob2x={aboutMob2x}
            
        tabWebp1x={aboutTabWebp}
        tabWebp2x={aboutTab2xWebp}
        tab1x={aboutTab}
        tab2x={aboutTab2x}
            
        deskWebp1x={aboutDesWebp}
        deskWebp2x={aboutDes2xWebp}
        desk1x={aboutDes}
        desk2x={aboutDes2x}
        type='image/jpeg'
            alt='Clock'            
            width='704'
/>                        
        </div>
  )
}

export default AboutUsImage