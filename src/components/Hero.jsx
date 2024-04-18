import React from 'react';

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo quisquam eveniet asperiores magnam modi animi possimus nam beatae aperiam odit, vitae quo hic cum. Nulla recusandae atque aliquam, quia dignissimos eligendi asperiores eum maiores quasi repellat autem repudiandae doloribus reprehenderit eius totam voluptas sapiente corrupti similique fugiat? Asperiores aut maiores, necessitatibus pariatur mollitia perferendis doloribus nulla consequatur deleniti, officia iste quo ratione molestias laudantium aperiam quasi dicta? Perferendis, odit.
        </p>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
