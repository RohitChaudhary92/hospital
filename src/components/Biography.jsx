import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Nestled amidst the picturesque Himalayan ranges, Indira Gandhi Medical College and Hospital (IGMC) Shimla stands as a beacon of healthcare excellence in Northern India. Established in 1966, IGMC has a rich legacy of providing quality medical education and comprehensive healthcare services to the people of Himachal Pradesh and beyond. With a sprawling campus, state-of-the-art facilities, and a dedicated team of healthcare professionals, IGMC is committed to delivering compassionate care, fostering research, and nurturing the next generation of medical leaders. Our institution is renowned for its expertise in various medical specialties, including cardiology, neurology, oncology, and trauma care, making us a trusted destination for patients seeking advanced medical treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;