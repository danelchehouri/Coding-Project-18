// src/components/UploadButton.js
import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Uploading image...');
    // Simulate an image upload
    setTimeout(() => {
      alert('Image uploaded successfully!');
    }, 2000);
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;
