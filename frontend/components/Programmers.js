/*
PROGRAMMERS Instructions

Watch the short video in `design-files/programmers.gif`:

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently featured programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from 'react';

export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {
  const [programmers] = useState(listOfAwesome);
  const [featured, setFeatured] = useState(null);

  const reset = () => setFeatured(null);

  const getNameOfFeatured = () => {
    return programmers.filter(dev => dev.id === featured)[0].name;
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: featured ? 'gold' : 'royalblue',
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          programmers.map(dev =>
            <div className='programmer' key={dev.id}>
              {dev.name} <button onClick={() => setFeatured(dev.id)}>Feature</button>
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        {
          featured
            ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
            : 'Pick an awesome programmer'
        }
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
