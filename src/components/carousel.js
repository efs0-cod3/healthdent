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
    <FaArrowAltCircleLeft className='left-arrow'  onClick={prevImage}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextImage} />
        {img.map((slide, index) => {

            return (
                <div className={index === current ? 'slide front' : 'slide'} key={index}>
                {index === current && (<img className='images' src={slide.image} alt= "instalaciones" />)}
                </div>
            )
        })}
    </section>
  );
};

export default Carousel 