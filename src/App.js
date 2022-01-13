import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';

const App = () => {
  return (
    <BrowserRouter>
       <div className="App-root">
      <Navbar />
      <div className='App-content'>
      <Routes>
        <Route  path="/home" element={<Home />}/>
        <Route  path="/createblog" element={<CreateBlog />}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;


// <Home />
// <CreateBlog />