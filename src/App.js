import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from './App1';
import App2 from './App2';
import Demo from './Demo';
import Cal1 from './cal1';
import Cal2 from './cal2';
import Cards from './card';
import Todo from './todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './imgg/f BMW-i4-eDrive40-8.jpg'
import img2 from './imgg/forma-1-ausztriai-nagydij.jpg'
import img3 from './imgg/forma-1-mexikoi-nagydij-2021.jpg'
import img4 from './imgg/forma-1-olasz-nagydij-2021.webp'
import Effect from './Effect';
import Result from './result';
import Effect1 from './effect1';
import Effect2 from './effect2';
import Dummyapi from './dummyapi';
import Prodetail from './prodetail';
import Cart from './cart';

function App() {

  var card = [
    {
      img: img1,
      tit: 'card 1',
      txt: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      img: { img2 },
      tit: 'card 2',
      txt: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      img: { img3 },
      tit: 'card 3',
      txt: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      img: { img4 },
      tit: 'card 4',
      txt: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      img: { img1 },
      tit: 'card 5',
      txt: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      img: { img2 },
      tit: 'card 6',
      txt: 'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
  ]

  return (
    <>

      {/* <Cards data={card} /> */}

      {/* <Cal1/> */}

      {/* <Cal2/> */}

      {/* <App1/> */}

      {/* <App2/> */}

      {/* <Todo/> */}

      {/* <Result/> */}

      {/* <Effect1/> */}

      {/* <Effect2/> */}

      {/* <Dummyapi/> */}

      {/* <Demo /> */}

      {/* <Effect /> */}

      <Routes>
        <Route path="/" element={<Dummyapi />} />
        <Route path="/product/:id" element={<Prodetail />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

    </>
  )
}

export default App;