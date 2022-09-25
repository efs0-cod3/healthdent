import React, { useState } from "react";
import "./css/style.css";
import Logo from "./assets/healthDent.png";
import MobileNavBar from "./components/navbar";
import Services from "./components/services";
import NosEncanta from "./assets/nos-en.png";
import CompInput from "./components/input";
import {
  FormVal,
  ButtonCentered,
  Button,
  // SuccessMsj,
  // ErrorMsj,
  // FaExclamationTriangle
} from "./elements/form";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Carousel from "./components/carousel";
import Unid from "./assets/unid.png";
import Equipo from "./assets/equipo.png";
import EquipoFront from "./assets/equipofront.png";

const style = { color: "#e9c47c", fontSize: "20px" };

function App() {
  const carData = [
    {
      image: Unid,
    },
    {
      image: Equipo,
    },
    {
      image: EquipoFront,
    },
  ];

  const [name, changeName] = useState({ field: "", valid: null });
  const [interes, changeInterest] = useState({ field: "", valid: null });
  const [mail, changeMail] = useState({ field: "", valid: null });
  const [phone, changePhone] = useState({ field: "", valid: null });
  // const [formValid, changeFormValid] = useState(null);

  const expresions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{10,14}$/, // 7 a 14 numeros.
  };

  // const encode = (data) => {
  //   return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //       .join("&");
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     name.valid === "true" &&
  //     mail.valid === "true" &&
  //     phone.valid === "true"
  //   ) {
  //     changeFormValid(true);
  //     changeName({ field: "", valid: null });
  //     changeMail({ field: "", valid: null });
  //     changePhone({ field: "", valid: null });
  //     changeInterest({ field: "", valid: null });

  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({ "form-name": "contact", ...this.state })
  //     })
  //       .then(() => alert("Success!"))
  //       .catch(error => alert(error));


  //   } else {
  //     changeFormValid(false);
  //   }
  // };

  return (
    <div className="App">
      <MobileNavBar src={Logo} style={style} />
      <main id="nosotros">
        <img
          className="encanta"
          src={NosEncanta}
          alt="nos encanta verte sonreir"
        />
        <article className="about">
          <p>
            Con mas de 10 años trabajando para el cuidado de tu salud e higiene
            bucal, verte sonreir es nuestra meta y queremos brindarte nuestros
            servicios para que lo hagas toda confianza.
          </p>
        </article>
      </main>

      <section className="services" id="servicios">
        <div class="custom-shape-divider-top-1664034511">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <Services
          style={style}
          service="Endodoncia"
          description="Procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando así su pérdida."
        />
        <Services
          style={style}
          service="Rehabilitación Bucal y Estetica"
          description="Nos encargamos de restaurar, devolver la función estética y armonía oral mediante diversos procedimientos como prótesis dentales, entre otros."
        />
        <Services
          style={style}
          service="Periodoncia"
          description="Tratamos las enfermedades de las encías y del hueso que sostiene los dientes."
        />
        <Services
          style={style}
          service="Implantes Dentales"
          description="Colocamos pernos metalicos quirúrgicamente en los huesos maxilares, debajo de las encías, y sobre ellos colocamos piezas o puentes fijos que reemplazaran las piezas perdidas."
        />
        <Services
          style={style}
          service="Odontología General"
          description="Nos encargamos de solucionar los problemas más comunes que aparecen en el día a día en su boca."
        />
        <Services
          style={style}
          service="Cirugía Oral"
          description="Realizamos cualquier procedimiento quirúrgico en la boca y la mandíbula o alrededor de estas"
        />
      </section>

      <Carousel img={carData} slides={carData} />

      <section className="contacto" id="contacto">
        <FormVal name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
          <CompInput
            state={name}
            changeState={changeName}
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Juan Pérez"
            errorLeyend="Nombre solo debe contener solo letras y espacios"
            expresionRegular={expresions.name}
          />

          <CompInput
            state={interes}
            changeState={changeInterest}
            type="text"
            label="Mensaje"
            name="message"
            placeholder="Cuentanos como podemos ayudarte..."
            errorLeyend="texto libre"
          />

          <CompInput
            state={mail}
            changeState={changeMail}
            type="email"
            label="E-mail"
            name="email"
            placeholder="Jhon@mail.com"
            errorLeyend="Email solo debe contener letras, puntos, numeros, - y  _"
            expresionRegular={expresions.mail}
          />

          <CompInput
            state={phone}
            changeState={changePhone}
            type="text"
            name="telefono"
            label="Telefono"
            placeholder="8093421122"
            errorLeyend="Telefono solo puede contener 10 - 14 caracteres"
            expresionRegular={expresions.phone}
          />

          {/* {formValid === false && (
            <ErrorMsj>
              <FaExclamationTriangle />
              <p>
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </ErrorMsj>
          )} */}

          <ButtonCentered>
            <Button type="submit">Enviar</Button>
            {/* {formValid === true && (
              <SuccessMsj>Formulario enviado exitosamente!</SuccessMsj>
            )} */}
          </ButtonCentered>
        </FormVal>
      </section>
      <footer> 
        <section className="socials">
          <div className="socials_hd">
            <a href="https://www.instagram.com/healthdentrd/" target="_blank" rel="noreferrer"><FaInstagram className=" s_icons"/></a>
            <a href="https://www.facebook.com/healthdentrd/" target="_blank" rel="noreferrer"><FaFacebook className=" s_icons"/></a>
          </div>
          <div>
            <h2 className="h2footer">&copy; 2022, HealthDentrd</h2>
          </div>
        </section>
      </footer> 
    </div>
  );
}

export default App;
