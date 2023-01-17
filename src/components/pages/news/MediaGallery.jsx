import React from "react";
import photos from "./MediaGalleryPhotos";

const MediaGallery = () => {
  const photo = [
    {
      id: 1,
      key: "photo1",
    },
    {
      id: 2,
      key: "photo2",
    },
    {
      id: 3,
      key: "photo3",
    },
    {
      id: 4,
      key: "photo4",
    },
    {
      id: 5,
      key: "photo5",
    },
    {
      id: 6,
      key: "photo6",
    },
    {
      id: 7,
      key: "photo7",
    },
    {
      id: 8,
      key: "photo8",
    },
  ];

  return (
    <div>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {photo.map((info) => {
          return (
            <div key={info.key}>
              <img
                className="image"
                src={photos[info.key]}
                style={{
                  maxHeight: "500px",
                  width: "100%",
                  height: "100vh",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaGallery;
