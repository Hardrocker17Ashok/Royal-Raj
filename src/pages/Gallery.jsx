import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "ch/r1.webp",
    "ch/r2.webp",
    "ch/r3.webp",
    "ch/r4.webp",
    "ch/r5.webp",
    "ch/r6.webp",
    "ch/r7.webp",
    "ch/r8.webp",
    "ch/r9.webp",
    "ch/r10.webp",
    "ch/r11.webp",
    "ch/r12.webp",
    "ch/r13.webp",  
    "ch/r14.webp",
    "ch/r15.webp",
    "ch/r16.webp",
    
  ];

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">
        📸 Royal Raj <span>Gallery</span>
      </h1>

      {/* GRID */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt="restaurant" />
            <div className="overlay">View</div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}
    </div>
  );
};

export default Gallery;