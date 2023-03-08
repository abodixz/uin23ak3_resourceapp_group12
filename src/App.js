import './css/main.css';
import Button from './components/Button';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Resources from './components/Resources';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route exact path='/' element={<Resources category={'html'} />} />
        <Route path='/html' element={<Resources category={'html'} />}/>
        <Route path='/css' element={<Resources category={'css'} />}/>
        <Route path='/javascript' element={<Resources category={'javascript'} />}/>
        <Route path='/react' element={<Resources category={'react'} />}/>
        <Route path='/headless-cms' element={<Resources category={'headless-cms'} />}/>
        <Route element={<Button/>}/>
      </Route>
    </Routes>
  );
}
export default App;
