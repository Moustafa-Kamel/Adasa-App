import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo-GdqARQRt.png'
import { HiOutlineSearch, HiX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to={'/'} className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                                <img src={logo} alt="Photography Logo" />
                            </div>
                            <div className="flex flex-col">
                                <span className='text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent'>عدسة</span>
                                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">عالم التصوير الفوتوغرافي</span>
                            </div>
                        </Link>
                        <div className='hidden md:flex items-center'>
                            <div className="flex items-center rounded-full p-1.5 border border-[#262626] bg-[#161616]">
                                <NavLink to='/' className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'text-neutral-400 hover:text-white'}`}>الرئيسية</NavLink>
                                <NavLink to='/blog' className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'text-neutral-400 hover:text-white'}`}>المدونة</NavLink>
                                <NavLink to='/about' className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'text-neutral-400 hover:text-white'}`}>من نحن</NavLink>

                            </div>
                        </div>
                        <div className='hidden md:flex items-center gap-3'>
                            <button className='p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]'>
                                <HiOutlineSearch className='w-5 h-5' />
                            </button>
                            <Link to='/blog' className='btn-primary text-sm'>ابدأ القراءة</Link>
                        </div>
                        <button onClick={toggleMenu} className='md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]'>
                            {isOpen ? (<HiX className='w-6 h-6' />) : (<RxHamburgerMenu className='h-6 w-6' />)}
                        </button>
                    </div>
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 pb-6' : 'max-h-0'
                            }`}>
                        <div className='bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]'>
                            <div className="flex flex-col space-y-1">
                                <NavLink onClick={() => setIsOpen(false)} to='/' className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none select-none ${isActive ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30' : 'text-neutral-400 hover:bg-[#1a1a1a] hover:text-white border border-transparent'}`}>الرئيسية</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to='/blog' className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none select-none ${isActive ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30' : 'text-neutral-400 hover:bg-[#1a1a1a] hover:text-white border border-transparent'}`}>المدونة</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to='/about' className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none select-none ${isActive ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30' : 'text-neutral-400 hover:bg-[#1a1a1a] hover:text-white border border-transparent'}`}>من نحن</NavLink>
                            <Link onClick={() => setIsOpen(false)} to='/blog' className='btn-primary text-sm text-center mt-2'>ابدأ القراءة</Link>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
