
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Blog from './Pages/Blog';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout />}>

    <Route path ="/" element={<Home />} />
    <Route path ="/about" element={<About />} />
    <Route path ="/team" element={<Team />} />
    <Route path ="/blog" element={<Blog />} />
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
