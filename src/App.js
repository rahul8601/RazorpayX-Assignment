
import './App.css';
import MainContent from './components/mainContent/MainContent';
import PageNotFound from './components/PageNotFound';
import MainContent2 from './components/secondPage/mainContent/MainContent2';
import Sidebar from './components/sideBar/Sidebar';
import  { BrowserRouter, Route, Routes } from "react-router-dom"
import Wrapper from './components/Wrapper';


function App() {

  return (
    <>
   
      <BrowserRouter>
     
      <Wrapper>
      <Sidebar/>

      <Routes>
       <Route path='/' element={<MainContent/>}/>
       <Route path='/Home' element={<MainContent/>}/>
       <Route path='/Payouts' element={<MainContent2/>}/>
       <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Wrapper>
      </BrowserRouter>

    </>


  );
}

export default App;



