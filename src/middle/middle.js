import React from 'react';

import cd from '../assests/cd.avif';
import './middle.css';

const Middle = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> HUNDREDS OF JOBS IN NEPAL FIND THE ONE THAT'S RIGHT FOR YOU
      </h1>
      <p> Search all the open positions on the Job Ally.
     Get your own personalized incentive estimate.The right job/internship in Nepal is out there.</p>

      <div className="gpt3__header-content__input">
        
        <button type="button">Get Started</button>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={cd} />
    </div>
  </div>
);

export default Middle;
