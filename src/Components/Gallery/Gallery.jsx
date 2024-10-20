
import React from 'react';
import './Gallery.css';
import { PiSquareSplitHorizontalThin, PiSquaresFour } from 'react-icons/pi';

import CardImage1 from '../../assets/Card.png';
import CardImage2 from '../../assets/Card-1.png';
import CardImage3 from '../../assets/Card-2.png';
import CardImage4 from '../../assets/Card-3.png';
import CardImage5 from '../../assets/Card-4.png';
import CardImage6 from '../../assets/Card-5.png';
import CardImage7 from '../../assets/Card-6.png';
import CardImage8 from '../../assets/Card-7.png';
import CardImage9 from '../../assets/Card-8.png';
import CardImage10 from '../../assets/Card-9.png';
import CardImage11 from '../../assets/Card-10.png';
import CardImage12 from '../../assets/Card-11.png';

const relatedProducts = [
  { id: 1, image: CardImage1, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 2, image: CardImage2, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 3, image: CardImage3, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 4, image: CardImage4, title: 'Green Western Dress', price: '(USD) $1000' },
];

const recentlyViewedProducts = [
  { id: 5, image: CardImage5, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 6, image: CardImage6, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 7, image: CardImage7, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 8, image: CardImage8, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 9, image: CardImage9, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 10, image: CardImage10, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 11, image: CardImage11, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 12, image: CardImage12, title: 'Green Western Dress', price: '(USD) $1000' },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="extra">
        {/* <div>
          <PiSquareSplitHorizontalThin style={{ fontSize: "1.7rem" }} />
          <PiSquaresFour style={{ fontSize: "1.7rem" }} />
        </div> */}
      </div>

      <h2>Related Products</h2>
      <div className="grid">
        {relatedProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="couture">COUTURE</div>
            <div className="details">
              <h4>{product.title}</h4>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Recently Viewed Products</h2>
      <div className="grid">
        {recentlyViewedProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="couture">COUTURE</div>
            <div className="details">
              <h4>{product.title}</h4>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
