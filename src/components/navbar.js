import React,  { useState, useEffect } from "react";
import './navlinks.css'
import { FaBars,FaPhoneAlt,FaTimes } from "react-icons/fa";

const MobileNavBar = ({src,style,}) => {
  const [ active, setActive ] = useState('bars');
  const [ toggleIcon, setToggle ] = useState('active');
  const [ navLink, setLinks ] = useState('links');
  const [ scroll, setScroll ] = useState('')



  function ToggleShow(){
      active === 'bars' ? setActive ("bars active") : setActive('bars');
      toggleIcon === 'times' ? setToggle ('times active') : setToggle('times');
      navLink === 'links' ? setLinks ('links show') : setLinks('links')
    }

    // manage navbar on scrolling
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        windowHeight > 0 ? setScroll('nav--scrolled') : setScroll('');
      }
    };
// navbar on scrolling
    
  return (
    <header onScroll={ stickNavbar } className= {scroll}>
    <nav>
        <div onClick= { ToggleShow } className='sandwish-mobile' >
          <FaBars style={ style } className={ active }  />
          <FaTimes style={ style } className={ toggleIcon } />
        </div>
      <div>
      <img src={src} alt='logo' className='logo'/>
      </div>
      <ul className={navLink}>
        <li onClick= { ToggleShow } className="link"><a href='#nosotros'>Quienes somos?</a></li>
        <li onClick= { ToggleShow } className="link"><a href='#servicios'>Servicios</a></li>
        <li onClick= { ToggleShow } className="link"><a href='#instalaciones'>Instalaciones</a></li>
        <li onClick= { ToggleShow } className="link"><a href='#contacto'>Contacto</a></li>
      </ul>
      <div className="mail-div">
        <p className="mail" >staff.healthdent@gmail.com</p>
        <span>Escribenos</span>
      </div>
      <div className='phone'>
      <FaPhoneAlt style={{color: '#e9c47c', fontSize: '20px'}} className='phone' />
      </div>
      </nav>
      </header>
  );
}


export default MobileNavBar

