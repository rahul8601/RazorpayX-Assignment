import './App.css';
import MainContent from './components/mainContent/MainContent';
import MainContent2 from './components/secondPage/mainContent/MainContent2';
import SideMenu from './components/sidemenu/SideMenu';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <>
      {/* First Page  */}
      <Wrapper>
       <SideMenu/>
       <MainContent/>
      </Wrapper>

       
      {/* Divider */}
      <div className='h-[20px] w-full bg-white'>
      </div>

      {/* Second Page */}
      <Wrapper>
       <SideMenu/>
       <MainContent2/>
      </Wrapper>
    </>
  );
}

export default App;



