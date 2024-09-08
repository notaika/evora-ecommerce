import React from 'react';
import './Landing.scss';

export default function Landing() {
  return (
    <section className="main">
      <div className="main__container">
        <div className="main__text">
          <h2 className="main__text-slogan">Elevate Your Essence.</h2>
          <p className="main__text-description">Experience the perfect blend of nature and science with Evora. Our products nourish your hair, skin, and body, bringing out your natural beauty with every use.</p>
        </div>
        <div className="main__model">
          <img src="src/assets/images/model.jpg" alt="Skin care model." className="main__model-img"/>
        </div>
      </div>
    </section>
  )
}
