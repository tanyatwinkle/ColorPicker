import React, { useState } from 'react';

const ColorPicker = () => {
  const colorOptions = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'indigo',
    'gray',
    'black',
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorPick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div
          className="selected-color"
          style={{
            backgroundColor: selectedColor || 'white',
            width: '100%',
            height: '100%',
            margin: '0 auto',
            borderRadius: '25px',
          }}
        >
    <div style={{ textAlign: 'center' }}>
      <h1>Color Picker</h1>
      <div>
        <button onClick={() => handleColorPick(colorOptions[Math.floor(Math.random() * colorOptions.length)])}>
          Pick a Color
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorPick(color)}
            className="color-option"
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              margin: '10px',
              cursor: 'pointer',
              border:'5px',
              borderRadius:'1px',
              borderColor: 'black',
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ColorPicker;