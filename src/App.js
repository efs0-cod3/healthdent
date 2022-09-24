
import React, {useState} from 'react'
import './css/style.css'
import Logo from './assets/healthDent.png'
import MobileNavBar from './components/navbar';
import Services from './components/services';
import NosEncanta from './assets/nos-en.png'
import CompInput from './components/input';
import {  FormVal,
  ButtonCentered,
  Button,
  SuccessMsj,
  ErrorMsj } from './elements/form'
import { FaExclamationTriangle} from "react-icons/fa"
import Carousel from './components/carousel'; 
import Unid from './assets/unid.png'
import Equipo from './assets/equipo.png'
import EquipoFront from './assets/equipofront.png'





const style = {color: '#e9c47c', fontSize: '20px'};

function App() {  

  const carData = [
    {
        image: Unid
    },
    {
        image: Equipo
    },
    {
        image: EquipoFront
    }
]

const [name, changeName] = useState({field:'', valid: null})
  const [interes, changeInteres] = useState({field:'', valid: null})
  const [mail, changeMail] = useState({field:'', valid: null})
  const [phone, changePhone] = useState({field:'', valid: null})
  const [formValid, changeFormValid] = useState(null);


  const expresions = {
      user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      phone: /^\d{10,14}$/ // 7 a 14 numeros. 
  }

  const onSubmit = (e) => {
      e.preventDefault()
      if( name.valid === 'true' 
      && mail.valid === 'true' 
      && phone.valid === 'true' 
    ){
          changeFormValid(true)
          changeName({field: '', valid: null})
          changeMail({field: '', valid: null})
          changePhone({field: '', valid: null})

      }else{
          changeFormValid(false)
      }

  }

return (
    <div className="App">
        <MobileNavBar src={Logo} style={style} />
      <main id='nosotros'>  
        <img className='encanta' src={NosEncanta} alt='nos encanta verte sonreir' />
        <article className='about'>
          <p>Con mas de 10 años trabajando para el cuidado tu salud e higiene bucal, verte sonreir es nuestra meta y queremos brindarte nuestros servicios para que lo hagas toda confianza.</p>
        </article>
      </main>

      <section className='services' id='servicios'>
        <Services style={ style } service='Endodoncía' description='Procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando así su pérdida.' />
        <Services style={ style } service='Rehabilitación Bucal y Estetica' description='Nos encargamos de restaurar, devolver la función estética y armonía oral mediante diversos procedimientos como prótesis dentales, entre otros.'/>
        <Services style={ style } service='Periodoncia' description='Tratamos las enfermedades de las encías y del hueso que sostiene los dientes.'/>
        <Services style={ style } service='Implantes Dentales' description='Colocamos pernos metalicos quirúrgicamente en los huesos maxilares, debajo de las encías, y sobre ellos colocamos piezas o puentes fijos que reemplazaran las piezas perdidas.'/>
        <Services style={ style } service='Odontología General' description='Nos encargamos de solucionar los problemas más comunes que aparecen en el día a día en su boca.'/>
        <Services style={ style } service='Cirugía Oral' description='Realizamos cualquier procedimiento quirúrgico en la boca y la mandíbula o alrededor de estas'/>
      </section>


  <Carousel 
  img= {carData}
  slides= {carData} />


      <section className='contacto' id='contacto'>
        <FormVal action="" onSubmit={onSubmit}>
        <CompInput 
          state={name}
          changeState={changeName}
          type="text"
          label="Nombre"
          placeholder="Juan Pérez"
          errorLeyend="Nombre solo debe contener solo letras y espacios"
          expresionRegular={expresions.name}
        />

        <CompInput 
          state={interes}
          changeState={changeInteres}
          type="text"
          label="Interes"
          placeholder="Cuentanos como podemos ayudarte..."
          name="interes"
          errorLeyend="Password should contain 10 - 14 characters"
        />

        <CompInput 
          state={mail}
          changeState={changeMail}
          type="email"
          label="E-mail"
          placeholder="Jhon@mail.com"
          name="mail"
          errorLeyend="Mail should contain only letters, points, numbers, - and _"
          expresionRegular={expresions.mail}
        />

        <CompInput 
          state={phone}
          changeState={changePhone}
          type="text"
          label="Telefono"
          placeholder="8093421122"
          name="mail"
          errorLeyend="Password should contain 10 - 14 characters"
          expresionRegular={expresions.phone}
        />
        

        {formValid === false && <ErrorMsj>
            <FaExclamationTriangle />
                <p><b>Error:</b> Por favor rellena el formulario correctamente.</p>
            </ErrorMsj>}

            <ButtonCentered>
                <Button type='submit'>Enviar</Button>
                {formValid === true && <SuccessMsj>Formulario enviado exitosamente!</SuccessMsj>}
            </ButtonCentered>
        </FormVal>
      </section>
    </div>
  );

}

export default App;
