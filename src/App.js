
import './css/style.css'
import Logo from './assets/healthDent.png'
import MobileNavBar from './components/navbar';
import Services from './components/services';
import NosEncanta from './assets/nos-en.png'


const style = {color: '#e9c47c', fontSize: '20px'};

function App() {  

return (
    <div className="App">
      <header className="App-header">
        <MobileNavBar src={Logo} style={style} />
      </header>
      <main>  
        <img className='encanta' src={NosEncanta} alt='nos encanta verte sonreir' />
        <article className='about'>
          <p>Con mas de 10 años trabajando para el cuidado tu salud e higiene bucal, verte sonreir es nuestra meta y queremos brindarte nuestros servicios para que lo hagas toda confianza.</p>
        </article>
      </main>

      <section className='services'>

      <Services style={ style } title='Odontologia General'/>
      <Services style={ style } title='Endodoncia'/>
      <Services style={ style } title='Rehabilitacion Bucal y Estetica'/>
      <Services style={ style } title='Periodoncia'/>
      <Services style={ style } title='Implantes Dentales'/>
      <Services style={ style } title='Cirugia Oral'/>

      </section>
    </div>
  );

}

export default App;
