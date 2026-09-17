import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';

export default function MainLayout() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-50'>
      <ScrollToTop />
      <Navbar />
      {/* Outlet هي المكان الذي ستظهر فيه الصفحة المتغيرة (Home, About, ...etc) */}
      <main className='grow pt-20'>
        <Outlet /> 
      </main>
      <Footer/>
      {/* <Footer /> */}
    </div>
  );
}