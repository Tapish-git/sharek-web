"use client"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the Box fills its parent's height
  },
  carouselContainer: {
    width: '100%',
    height: '100%', // Ensure the Carousel fills its parent's height
    position: 'relative', // Position the Carousel relative to its parent
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%', // Ensure each image container fills the Carousel's height
  },
  image: {
    width: '100%',
    height: '100%', // Ensure the image fills its parent container
    objectFit: 'cover', // Maintain aspect ratio and cover the container
  },
  bookmarkIcon: {
    position: 'absolute',
    top: '10px',
    right: '5px',
    color: 'white',
  },
};

const CarouselCars = () => {
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 1",
    },
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 2",
    },
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 3",
    },
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 4",
    },
  ];

  return (
    <Box style={styles.root}>
      <Box style={styles.carouselContainer}>
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible={isHovered}
          indicatorContainerProps={{
            style: {
              position: 'absolute',
              bottom: 10,
              left: 0,
              right: 0,
              margin: '0 auto',
              zIndex: 999,
            },
          }}
          indicatorIconButtonProps={{
            style: {},
          }}
        >
          {images.map((item, index) => (
            <Box style={styles.imageContainer} key={index}>
              <img
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={styles.image}
                src={item.imgPath}
                alt={item.label}
              />
              <BookmarkBorderIcon style={styles.bookmarkIcon} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CarouselCars;
