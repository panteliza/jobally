import React from 'react';

import './mid.css'
import Midcard from './midcard.js'
import Midcard2 from './midcard2';
import Midcard3 from './midcard3';
import Midcard4 from './midcard4';
import Midcard5 from './midcard5';
import Midcard6 from './midcard6';
import Midcard7 from './midcard7';
import Midcard8 from './midcard8';

const Mid = () => {
 
  
  
  return (
    <div className="container">
    <h2 className="title">Popular Internship Categories</h2>
    <p className="desc">
        A better career is out there.We'll help you find it.
        We're your first step to becoming everything you want to be.
    </p>
      <div className="wrapper">
<Midcard/>
<Midcard2/>
<Midcard3/>
<Midcard4/>
<Midcard5/>
<Midcard6/>
<Midcard7/>
<Midcard8/>







</div>
<div className='button'>
        <button >Browse All</button>
      </div>

    </div>
  )
}

export default Mid
