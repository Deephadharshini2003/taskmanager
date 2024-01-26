import React from 'react';

const ImageComponent = () => {
  const imageUrl = 'example.jpg'; // Path to your image file

  return (
    <div>
      <h1>Image Display Example</h1>
      <img src={imageUrl} alt="Example" />
    </div>
  );
};

export default ImageComponent;