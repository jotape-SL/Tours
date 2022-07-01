import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <div className='tour-info'>
        <h4>{name}</h4>
      </div>
    </article>
  );
};

export default Tour;
