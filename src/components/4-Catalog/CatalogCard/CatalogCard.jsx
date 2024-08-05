import ContentImage from '../../ContentImage/ContentImage';
import s from './CatalogCard.module.css';

const CatalogCard = ({ image }) => {
  const {
    mobWebp1x, mobWebp2x, mob1x, mob2x,
    tabWebp1x, tabWebp2x, tab1x, tab2x,
    deskWebp1x, deskWebp2x, desk1x, desk2x, model, price
  } = image;

  return (
    <li className={s.item}>
      <div className={s.img}>
        <ContentImage
          mobWebp1x={mobWebp1x}
          mobWebp2x={mobWebp2x}
          mob1x={mob1x}
          mob2x={mob2x}
          tabWebp1x={tabWebp1x}
          tabWebp2x={tabWebp2x}
          tab1x={tab1x}
          tab2x={tab2x}
          deskWebp1x={deskWebp1x}
          deskWebp2x={deskWebp2x}
          desk1x={desk1x}
          desk2x={desk2x}
          type='image/png'
          alt='Image description'
          width='704'
        />
      </div>
      <p className={s.model}>{model}</p>
      <p className={s.price}>{price}</p>
    </li>
  );
}

export default CatalogCard;
