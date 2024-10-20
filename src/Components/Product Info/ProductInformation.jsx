import React from 'react';
import './ProductInformation.css';

const ProductInformation = () => {
    return (
        <div className="product-information-container">
            <div className="sidebar">
                <div className="tab">Details</div>
                <div className="tab">Care instructions</div>
                <div className="tab">Fit</div>
                <div className="tab">Legal</div>
            </div>
            <div className="content">

                <span>This is a two-piece look.</span>
                <span>Kindly note, product tones may vary due to lighting.</span>
                <p>
                    For queries or customisations, please mail us at:{' '}
                    <a href="mailto:orders@PritamNayak.in">orders@PritamNayak.in</a>
                </p>
                <p>
                    For more details: <a href="#contact">contact us</a>
                </p>
            </div>
        </div>
    );
};

export default ProductInformation;
