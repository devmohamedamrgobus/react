// import Home from './components/Home'
// import About from './components/About'
import First from './components/First'
import Second from './components/Second'
import {Store} from './Redux/Store'
import {Provider} from 'react-redux'
// import CounterContextProvider from './Context/CounterContextProvider';

function App() {
  return (
    <>
    {/* <CounterContextProvider>
      <Home />
      <About />
    </CounterContextProvider> */}


      <Provider store={Store}>
        <First />
        <Second />
      </Provider>

     
    </>
  );
}

export default App;
