import React, { useState } from 'react';

export function CheckText() {
  const [isSantosChecked, setIsSantosChecked] = useState(false);
  const [isRealMadridChecked, setIsRealMadridChecked] = useState(false);

  return (
    <div className='app'>
      <p>Maior de todos:</p>
      <div className='topping'>

        <input type="checkbox" id="santos" checked={isSantosChecked} 
        onChange={() => setIsSantosChecked(!isSantosChecked)} />
        <label htmlFor="santos" 
        style={{ textDecoration: isSantosChecked ? 'line-through' : 'none' }}>
          Santos
        </label>
        <br />

        <input type="checkbox" id="realMadrid" checked={isRealMadridChecked} 
        onChange={() => setIsRealMadridChecked(!isRealMadridChecked)} />
        <label htmlFor="realMadrid" 
        style={{ textDecoration: isRealMadridChecked ? 'line-through' : 'none' }}>
          Real Madrid
        </label>
      </div>
    </div>
  );
}
