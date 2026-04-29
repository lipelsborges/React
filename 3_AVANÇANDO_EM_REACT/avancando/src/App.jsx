
import './App.css'
import reactLogo from './assets/react.svg';

//1 - useState
import { Children, useState } from 'react';

// 2 - imagem assets
import noite from './assets/reactimg2.png';

//3 - useState
import Data from '../components/Data';

//4 - renderizacao de lista
import ListRender from '../components/ListRender';

//5 - renderização condicional
import CondicionalRender from '../components/CondicionalRender';

//6 - props
import ShowUserName from '../components/ShowUserName';

//7 - destruturando props
import CarDetails from '../components/CarDetails';

//8 - renderização de listas com componentes
const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 }
]

// 9 - fragments
import Fragment from '../components/Fragment';

// 10 - children
import Container from '../components/Container';

//11 - funcao em prop
import ExecuteFunction from '../components/ExecuteFunction';

//12 - state lift
import Message from '../components/Message';
import ChangeMessage from '../components/ChangeMessage';



function App() {
  
  //11 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  //12 - state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
      setMessage(msg);
  };

  return (
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>

        {/* 1 - imagem em public */}
        <img src="../public/reactimg22.avif" alt="Alguma imagem" />
        
        {/* 2 - imagem em assets */}
        <img src={noite} alt="Outra imagem" />

        {/* 3 - useState */}
          <Data/>

        {/* 4- render de lista */}
        <ListRender/>

        {/* 5- Render condicional */}
        <CondicionalRender/>
         
        {/* 6- Props */}
        <h3>Props</h3>
        <ShowUserName name= "Felipe"/>

        {/* 7 - destruturando props */}
        <CarDetails brand = "BMW" km = {999} color= "Preto"/>
        <CarDetails brand = "Audi" km = {777} color= "Cinza"/>

        {/* 8 - renderizacao de lista com map */}
        {cars.map((car)=> 
          <CarDetails
              key={car.id}
              brand={car.brand}
              km={car.km}
              color={car.color}
          />
        )}

        {/* 9 - fragments */}
        <Fragment/>

        {/* 10- children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>

        {/* 11- funcao em prop */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* 12 - state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
  );
}

export default App
