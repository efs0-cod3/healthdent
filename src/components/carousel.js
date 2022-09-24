import React, {useState} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Carousel = ({img, slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}

const nextImage = () => {
 setCurrent(current === length - 1 ? 0 : current +1)
 console.log(current);
}
const prevImage = () => {
 setCurrent(current === 0 ? length - 1 : current - 1)
 console.log(current);
}



  return (
    <section className='slider' id='instalaciones'>
      <div class="custom-shape-divider-top-1664033787">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    <FaArrowAltCircleLeft className='left-arrow'  onClick={prevImage}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextImage} />
        {img.map((slide, index) => {

            return (
                <div className={index === current ? 'slide front' : 'slide'} key={index}>
                {index === current && (<img className='images' src={slide.image} alt= "instalaciones" />)}
                </div>
            )
        })}
      <div class="custom-shape-divider-bottom-1664034752">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
      </div>
    </section>
  );
};

export default Carousel 