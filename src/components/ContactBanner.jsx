import React from 'react';
import Ptext from './Ptext';
import Button from './Button';

export default function ContactBanner() {
  return (
    <div>
      <div className="container">
        <div className="contactBanner__wrapper">
          <Ptext light>Would like to collaborate?</Ptext>
          <h3 className="contactBanner__heading">
            Let's get to know eachother
          </h3>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}
