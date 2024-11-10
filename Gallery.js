import React from 'react';
import berryBlastImg from '../berry_blast.jpeg';
import birthdayCakeImg from '../birthday_cake.jpeg';
import browniesImg from '../brownies.jpeg';
import butterscotchImg from '../butterscotch.jpg';
import chocolateFudgeImg from '../chocolate_fudge.jpeg';
import chocolateImg from '../chocolate.jpg';
import christmasPlumCakeImg from '../christmas_plum_cake.jpeg';
import cookiesImg from '../cookies.jpg';
import fruitImg from '../fruit.jpeg';
import pineappleImg from '../pineapple.jpg';
import redVelvetImg from '../red_velvet.jpeg';
import vanillaImg from '../vanilla.jpeg';
import weddingCakeImg from '../wedding_cake.jpg';

const Gallery = () => {
  const galleryImages = [
    { name: 'Berry Blast', image: berryBlastImg },
    { name: 'Birthday Cake', image: birthdayCakeImg },
    { name: 'Brownies', image: browniesImg },
    { name: 'Butterscotch Cake', image: butterscotchImg },
    { name: 'Chocolate Fudge', image: chocolateFudgeImg },
    { name: 'Chocolate Cake', image: chocolateImg },
    { name: 'Christmas Plum Cake', image: christmasPlumCakeImg },
    { name: 'Cookies', image: cookiesImg },
    { name: 'Fruit Cake', image: fruitImg },
    { name: 'Pineapple Cake', image: pineappleImg },
    { name: 'Red Velvet Cake', image: redVelvetImg },
    { name: 'Vanilla Cake', image: vanillaImg },
    { name: 'Wedding Cake', image: weddingCakeImg },
  ];

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.name} className="gallery-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
