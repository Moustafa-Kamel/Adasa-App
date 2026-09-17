import { GiMountainCave } from 'react-icons/gi';
import { FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export default function HomeCategories() {

  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label mb-4">
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            التصنيفات
          </span>
          <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
          <p className="section-subtitle max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        {/* Grid Static */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* 1. إضاءة */}
          <a
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            href={`/blog?category=${encodeURIComponent('إضاءة')}`}
            style={{ animationDelay: '0ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <BsGearFill className='text-xl text-orange-500 group-hover:text-white transition-colors duration-300' />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">إضاءة</h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <HiOutlineArrowNarrowLeft className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

          {/* 2. بورتريه */}
          <a
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            href={`/blog?category=${encodeURIComponent('بورتريه')}`}
            style={{ animationDelay: '100ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <FaUser className='text-xl text-orange-500 group-hover:text-white transition-colors duration-300' />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">بورتريه</h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <HiOutlineArrowNarrowLeft className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

          {/* 3. مناظر طبيعية */}
          <a
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            href={`/blog?category=${encodeURIComponent('مناظر طبيعية')}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <GiMountainCave className='text-xl text-orange-500 group-hover:text-white transition-colors duration-300' />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">مناظر طبيعية</h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">2 مقالة</p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <HiOutlineArrowNarrowLeft className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

          {/* 4. تقنيات */}
          <a
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            href={`/blog?category=${encodeURIComponent('تقنيات')}`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <HiOutlineAdjustmentsHorizontal className='text-xl text-orange-500 group-hover:text-white transition-colors duration-300' />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">تقنيات</h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">5 مقالة</p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <HiOutlineArrowNarrowLeft className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

          {/* 5. معدات */}
          <a
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            href={`/blog?category=${encodeURIComponent('معدات')}`}
            style={{ animationDelay: '400ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <BsGearFill className='text-xl text-orange-500 group-hover:text-white transition-colors duration-300' />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">معدات</h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">3 مقالة</p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <HiOutlineArrowNarrowLeft className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}