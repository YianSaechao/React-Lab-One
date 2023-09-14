import React, { useState } from 'react';

const ColorChanger = () => {

    const [backgroundColor, setBackgroundColor] = useState('#747bff');

    const generateRandomColor = () => `#${Math.random().toString(16).substr(2, 6)}`;

    const handleButtonClick = () => {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
    };

    return (
    <div className='backgroundColor'style={{ backgroundColor: backgroundColor , width: '400px', height: '400px' }}>
        
    <button onClick={handleButtonClick} id='btn'>Click Me</button>
    </div>
    );
};

export default ColorChanger;
