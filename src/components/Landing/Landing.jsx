import React from 'react';
import './Landing.scss';

export default function Landing() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <h2 className="hero__text-slogan">Elevate Your Essence.</h2>
            <p className="hero__text-description">Experience the perfect blend of nature and science with Evora. Our products nourish your hair, skin, and body, bringing out your natural beauty with every use.</p>
          </div>
          <div className="hero__model">
            <img src="src/assets/images/model.jpg" alt="Skin care model." className="hero__model-img"/>
          </div>
        </div>
      </section>
      <section className="popular">
        <h1 className="popular__heading">Most Popular Products</h1>
      </section>
    </main>
  )
}
