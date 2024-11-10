import React from 'react';
import birthdayCakeImg from '../birthday_cake.jpeg';
import weddingCakeImg from '../wedding_cake.jpg';
// import customCakeImg from '../custom_cake.jpg'; // Add image for Custom Cakes
import fruitCakeImg from '../fruit.jpeg'; // Add image for Fruit Cakes
import plumCakeImg from '../christmas_plum_cake.jpeg'; // Add image for Plum Cakes
import browniesImg from '../brownies.jpeg'; // Add image for Brownies
import cookiesImg from '../cookies.jpg'; // Add image for Cookies

function Homepage() {
  // Define an array of cake categories and images
  const categories = [
    { name: 'Birthday Cakes', image: birthdayCakeImg },
    { name: 'Wedding Cakes', image: weddingCakeImg },
    // { name: 'Custom Cakes', image: customCakeImg },
    { name: 'Fruit Cakes', image: fruitCakeImg },
    { name: 'Plum Cakes', image: plumCakeImg },
    { name: 'Brownies', image: browniesImg },
    { name: 'Cookies', image: cookiesImg },
  ];

  return (
    <div className="homepage">
      

      {/* Add the cool description here */}
      <section className="welcome-description">
        <h2>Welcome to Heavenly Bakes – A Slice of Paradise in Every Bite!</h2>
        <p>
          At Heavenly Bakes, we believe that every celebration deserves a cake that's as extraordinary as the moment itself. From decadent birthday cakes to elegant wedding cakes, from delightful brownies to mouthwatering cookies, we bake it all with love, passion, and the finest ingredients. Let us add a touch of sweetness to your day with our freshly baked, heavenly creations. Whether you're here for a special occasion or just to indulge in a little treat, you're sure to find something that will make your taste buds dance.
        </p>
        <p><strong>Indulge in Heaven – One Bite at a Time.</strong></p>
      </section>

      <div className="cake-categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
