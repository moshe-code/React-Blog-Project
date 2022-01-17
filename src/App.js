import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
       <div className="App-root">
      <Navbar />
      <div className='App-content'>
      <Routes>
        <Route  path="" element={<Home />}/>
        <Route  path="/home" element={<Home />}/>
        <Route  path="/createblog" element={<CreateBlog />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;


// <Home />
// <CreateBlog />