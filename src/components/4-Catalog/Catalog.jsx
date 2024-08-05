import s from './Catalog.module.css';
import { imagesData } from '../../assets/catalogData';
import CatalogCard from './CatalogCard/CatalogCard';
import { useState } from 'react';

const Catalog = () => {
  const [displayCount, setDisplayCount] = useState(window.innerWidth >= 768 ? 6 : 4);
  
  const imagesToDisplay = imagesData.slice(0, displayCount);    

  return (
    <section className='section'>
      <div className={`${s.container} container`}>
        <h2 className={s.title}>Catalog</h2>

        <ul className={s.list}>
          {imagesToDisplay.map((image) => (
            <CatalogCard key={image.id} image={image} />
          ))}
        </ul>
       
        {displayCount < imagesData.length && (

          <button onClick={() => setDisplayCount(6)} className={s.catalogBtn} type='button'>Show more</button>
          
        )}
      </div>
    </section>
  );
}

export default Catalog;
