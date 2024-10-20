// import React from 'react';
// import './ProductDetails.css';
// import ProductImage from '../../assets/Card-1.png'; // Replace with your product image path

// const ProductDetails = () => {
//     return (
//         <div className="product-details-container">
//             <div className="image-gallery">
//                 <div className="thumbnails">
//                     <img src={ProductImage} alt="Product Thumbnail" />
//                     <img src={ProductImage} alt="Product Thumbnail" />
//                     <img src={ProductImage} alt="Product Thumbnail" />
//                 </div>
//                 <div className="thumbnail">
//                     <img src={ProductImage} alt="Product" />
//                 </div>

//             </div>
//             <div className="product-info">
//                 <h2>Elegant Red Dress</h2>
//                 <p>Lorem ipsum odor amet, consectetur adipiscing elit. Nisi porttitor libero etiam in quisque ante.</p>
//                 <div className="price-section">
//                     <span className="price">PRICE ON REQUEST</span>
//                     <div className="buttons">
//                         <button className="enquire">Enquire</button>
//                         <button className="custom-size">Custom Size</button>
//                     </div>
//                 </div>
//                 <p className="shipping-info">Free worldwide shipping on all orders</p>
//                 <div className="details">
//                     <h3>Details</h3>
//                     <p>This is a two piece look. Kindly note, product tones may vary due to lighting. For queries or customisations, please mail us at: orders@PritamNayak.in</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

import React from 'react';
import './ProductDetails.css';
import image from '../../assets/Card-1.png'

const ProductPage = () => {
    return (
        <div className="product-page">
            <div className="product-gallery">
                <img src={image} alt="Red Dress" />
                <img src={image} alt="Red Dress" />
                <img src={image} alt="Red Dress" />
                {/* <div className="thumbnail">
                    <img src={image} alt="Red Dress" />
                </div> */}
                {/* <div className="thumbnail">
                    <img src={image} alt="Red Dress" />
                </div>
                <div className="thumbnail">
                    <img src={image} alt="Red Dress" />
                </div> */}
            </div>

            <div className="product-main">
                <img src={image} alt="Red Dress" className="main-image" />
            </div>

            <div className="product-details">
                <h1>Elegant Red Dress</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl porttitor libero etiam in quisque ante donec molestie.</p>
                <p className="price">PRICE ON REQUEST</p>

                <div className="product-actions">
                    <button className="btn enquire">Enquire</button>
                    <button className="btn custom-size">Custom Size</button>
                </div>

                <div className="shipping-info">
                    <p>Free worldwide shipping on all orders</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
