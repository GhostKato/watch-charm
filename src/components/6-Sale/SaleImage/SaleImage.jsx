import { useState } from 'react';
import { imagesData } from '../../../assets/saleData';
import ContentImage from '../../ContentImage/ContentImage';
import s from './SaleImage.module.css'

const SaleImage = () => {

   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); 
  };

  return (
    <div className={s.container}>
      <ul className={s.list}>
         {imagesData.map((image, index) => (
           <li className={s.item} key={image.id} onClick={() => handleImageClick(index)}>
             <ContentImage
          mobWebp1x={image.mobWebp1x}
          mobWebp2x={image.mobWebp2x}
          mob1x={image.mob1x}
          mob2x={image.mob2x}
          tabWebp1x={image.tabWebp1x}
          tabWebp2x={image.tabWebp2x}
          tab1x={image.tab1x}
          tab2x={image.tab2x}
          deskWebp1x={image.deskWebp1x}
          deskWebp2x={image.deskWebp2x}
          desk1x={image.desk1x}
          desk2x={image.desk2x}
          type='image/png'
          alt='Image description'
               width='704'
             style='saleSmallImage'
             />
           </li>
            ))}
      </ul>
      <div className={s.bigImg}>
        <ContentImage 
            mobWebp1x={imagesData[selectedImageIndex].mobWebp1x}
          mobWebp2x={imagesData[selectedImageIndex].mobWebp2x}
          mob1x={imagesData[selectedImageIndex].mob1x}
          mob2x={imagesData[selectedImageIndex].mob2x}
          tabWebp1x={imagesData[selectedImageIndex].tabWebp1x}
          tabWebp2x={imagesData[selectedImageIndex].tabWebp2x}
          tab1x={imagesData[selectedImageIndex].tab1x}
          tab2x={imagesData[selectedImageIndex].tab2x}
          deskWebp1x={imagesData[selectedImageIndex].deskWebp1x}
          deskWebp2x={imagesData[selectedImageIndex].deskWebp2x}
          desk1x={imagesData[selectedImageIndex].desk1x}
          desk2x={imagesData[selectedImageIndex].desk2x}
          type='image/png'
          alt='Image description'
          width='704' 
          style='saleBigImage'
        />
      </div>
    </div>
  )
}

export default SaleImage