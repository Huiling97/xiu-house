import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './style.scss';

const CarouselBanner = () => {
  return (
    <div className='carousel-container'>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className='carousel-image-container'>
          <div className='image-overlay'></div>
          <img src='src/app/assets/images/image1.jpg' className='image' />
          <div className='text'>
            <p className='text--large'>
              There is beauty in everyone,<br></br>
              realize yours today
            </p>
            <p className='text--small'>
              Achieve total well-being and empower yourself today
            </p>
          </div>
        </div>
        <div className='carousel-image-container'>
          <div className='image-overlay'></div>
          <img src='src/app/assets/images/image2.jpg' className='image' />
          <div className='text'>
            <p className='text--large'>Indulge in Relaxation</p>
            <p className='text--small'>
              Pamper Your Senses with Tranquil Spa Treatments and Rejuvenating
              Massages
            </p>
          </div>
        </div>
        <div className='carousel-image-container'>
          <div className='image-overlay'></div>
          <img src='src/app/assets/images/image3.jpg' className='image' />
          <div className='text'>
            <p className='text--large'>Revitalize Your Hair</p>
            <p className='text--small'>
              Visit us today and Unlock the Secrets to Luscious, Healthy Locks
            </p>
          </div>
        </div>
        <div className='carousel-image-container'>
          <div className='image-overlay'></div>
          <img src='src/app/assets/images/image4.jpg' className='image' />
          <div className='text'>
            <p className='text--large'>Transform Yourself</p>
            <p className='text--small'>
              Experience Professional Makeup Artistry for Special Occasions or
              Everyday Glam
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
