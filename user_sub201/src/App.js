import logo from './logo.svg';
import 'reset-css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sub201 from './pages/Sub201/Sub201';
import Sub404 from './pages/Sub404/Sub404';
import Container from './pages/Main/Container';
import './styles/common.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
       duration: 1000, // 애니메이션 지속 시간
    });
    return () => {
       AOS.refresh(); // 컴포넌트 언마운트 시 AOS 새로 고침
    };
 }, []);
  return (
    <BrowserRouter>
         <div className='App'>
            {/* 메인 */}
            <Header />
            <Routes>
               <Route path='/' element={<Container />} />
               <Route path='/Sub201' element={<Sub201 />} />
               <Route path='/Sub404' element={<Sub404 />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
  );
}

export default App;
