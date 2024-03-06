
import './App.css';
import  FirstComponent from './Components/Learning-examples/FirstComponent';
import SecondComponent from './Components/Learning-examples/SecondComponent';
import ThirdComponent from './Components/Learning-examples/ThirdComponent';
import FourthComponent from './Components/Learning-examples/FourthComponent';
import {FifthComponent} from './Components/Learning-examples/FirstComponent';
import LearningJavaScript from './Components/Learning-examples/LearningJavaScript';
import Counter from './Components/Counter/Counter';
import TodoApp from './Components/TodoApplication/TodoApp';

function App() {
  return (
    <div className="App">

     {/* <FirstComponent></FirstComponent>
     <SecondComponent></SecondComponent>
     <ThirdComponent></ThirdComponent>
     <FourthComponent></FourthComponent>
     <FifthComponent></FifthComponent>
      <LearningJavaScript></LearningJavaScript> */} 
    {/* <PlayingwithPros prooerty1="value1" prooerty2="value2"  /> */}

   {/* <Counter/> */}

        <TodoApp />
    </div>
  );
}

// function PlayingwithPros(properties) {

//   return (
//     <div>Props</div>
//   )
// }

export default App;