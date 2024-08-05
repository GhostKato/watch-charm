import ContentImage from '../../ContentImage/ContentImage'
import s from './ContactUsImage.module.css'

import contactUsMobWebp from '../../../img/8-Contact-us/contactUsMob.webp'
import contactUsMob2xWebp from '../../../img/8-Contact-us/contactUsMob@2x.webp'
import contactUsMob from '../../../img/8-Contact-us/contactUsMob.jpg'
import contactUsMob2x from '../../../img/8-Contact-us/contactUsMob@2x.jpg'
import contactUsTabWebp from '../../../img/8-Contact-us/contactUsTab.webp'
import contactUsTab2xWebp from '../../../img/8-Contact-us/contactUsTab@2x.webp'
import contactUsTab from '../../../img/8-Contact-us/contactUsTab.jpg'
import contactUsTab2x from '../../../img/8-Contact-us/contactUsTab@2x.jpg'
import contactUsDesWebp from '../../../img/8-Contact-us/contactUsDes.webp'
import contactUsDes2xWebp from '../../../img/8-Contact-us/contactUsDes@2x.webp'
import contactUsDes from '../../../img/8-Contact-us/contactUsDes.jpg'
import contactUsDes2x from '../../../img/8-Contact-us/contactUsDes@2x.jpg'

const ContactUsImage = () => {
  return (
     <div className={s.imgContainer}>  
          
<ContentImage
        mobWebp1x={contactUsMobWebp}
        mobWebp2x={contactUsMob2xWebp}
        mob1x={contactUsMob}
        mob2x={contactUsMob2x}
            
        tabWebp1x={contactUsTabWebp}
        tabWebp2x={contactUsTab2xWebp}
        tab1x={contactUsTab}
        tab2x={contactUsTab2x}
            
        deskWebp1x={contactUsDesWebp}
        deskWebp2x={contactUsDes2xWebp}
        desk1x={contactUsDes}
        desk2x={contactUsDes2x}
        type='image/jpeg'
            alt='Clock'            
            width='704'
/>                        
        </div>
  )
}

export default ContactUsImage