import React,  { useState } from "react";
import './navlinks.css'
import { FaBars,FaPhoneAlt,FaTimes } from "react-icons/fa";



const MobileNavBar = ({src,style,}) => {
  const [ active, setActive ] = useState('bars');
  const [ toggleIcon, setToggle ] = useState('active');
  const [ navLink, setLink ] = useState('links');

  function ToggleShow(){
      active === 'bars' ? setActive ("bars active") : setActive('bars');
      toggleIcon === 'times' ? setToggle ('times active') : setToggle('times');
      navLink === 'links' ? setLink ('links show') : setLink('links')
    }


  return (
    <div>
    <nav>
        <div onClick= { ToggleShow } className='sandwish-mobile' >
    <FaBars style={ style } className={ active }  />
    <FaTimes style={ style } className={ toggleIcon } />
        </div>
      <div>
      <img src={src} alt='logo' className='logo'/>
      </div>
      <ul className={navLink}>
        <li><a href='#nosotos'>Quienes somos?</a></li>
        <li><a href='#equipo'>Equipo</a></li>
        <li><a href='#instalaciones'>Instalaciones</a></li>
        <li><a href='#contacto'>Contacto</a></li>
      </ul>
      <div className="mail-div">
        <p className="mail" >staff.healthdent@gmail.com</p>
        <span>Escribenos</span>
      </div>
      <div className='phone'>
      <FaPhoneAlt style={{color: '#e9c47c', fontSize: '20px'}} className='phone' />
      </div>
        
      </nav>
    </div>
  );
}


export default MobileNavBar

