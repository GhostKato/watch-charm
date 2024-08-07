import s from './ContentImage.module.css';

const ContentImage = ({
  mobWebp1x, mobWebp2x, mob1x, mob2x,
  tabWebp1x, tabWebp2x, tab1x, tab2x,
  deskWebp1x, deskWebp2x, desk1x, desk2x, alt, width, type, style
}) => (
  <picture>
   
    <source
      media="(max-width: 767px)"
      type="image/webp"
      srcSet={`${mobWebp1x} 1x, ${mobWebp2x} 2x`}
        />
        
    <source
      media="(max-width: 767px)"
      type={type}
      srcSet={`${mob1x} 1x, ${mob2x} 2x`}
    />
    
    <source
      media="(min-width: 768px) and (max-width: 1199px)"
      type="image/webp"
      srcSet={`${tabWebp1x} 1x, ${tabWebp2x} 2x`}
    />
   
    <source
     media="(min-width: 768px) and (max-width: 1199px)"
      type={type}
      srcSet={`${tab1x} 1x, ${tab2x} 2x`}
    />
    
    <source
      media="(min-width: 1280px)"
      type="image/webp"
      srcSet={`${deskWebp1x} 1x, ${deskWebp2x} 2x`}
    />
    
    <source
      media="(min-width: 1280px)"
      type={type}
      srcSet={`${desk1x} 1x, ${desk2x} 2x`}
    />
   
    <img
      className={s[style]}
      src={mobWebp1x}      
      alt={alt}
      loading="lazy"
      width={width}
    />
  </picture>
);

export default ContentImage;
