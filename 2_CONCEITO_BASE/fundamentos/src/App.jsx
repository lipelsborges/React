import './App.css'

import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';

import Events from './components/Events';

function App() {

  return (
      
        <div className="App">
          <h1>Fundamentos do React </h1>
            <FirstComponent texto="Felipe"/>
            <TemplateExpression/>
            <Events/>
        </div>

  );
}





export default App
