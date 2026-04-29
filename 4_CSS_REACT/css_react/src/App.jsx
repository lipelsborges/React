import './App.css'

//2 - css de componente
import MyComponents from './components/MyComponents'



function App() {
  

  return (
    <div className = "App">
      {/* 1 - css global */}
      <h1>CSS no react</h1>
                             
      {/* 2 - css de componnete */}
      <MyComponents/>
      <p>Pegou o CSS do componente</p>
    </div>
      
  )
}

export default App
