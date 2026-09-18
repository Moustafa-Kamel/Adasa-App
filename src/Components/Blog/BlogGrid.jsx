import { useState, useRef } from "react";
import { BsGrid } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import PostCard from "./PostCard";
import { IoMdClose } from "react-icons/io";
import { HiOutlineArrowPath, HiOutlineFaceFrown } from "react-icons/hi2";

export default function BlogGrid({ posts, activeCategory, onResetFilters, hasActiveFilters }) {
    const [viewMode, setViewMode] = useState('grid')
    const [currentPage, setCurrentPage] = useState(1);
    const [prevPosts, setPrevPosts] = useState(posts);
    const gridTopRef = useRef(null);

    if (posts !== prevPosts) {
        setPrevPosts(posts);
        setCurrentPage(1);
    }

    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
 const scrollToTop = () => {
        gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const handelPrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
            scrollToTop();
        }
    }
    const handelNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage((prev) => prev + 1)
            scrollToTop();
        }
    }
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
    return (

        <div ref={gridTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <div className="mb-8 flex items-center justify-between">
                <p className="text-neutral-400">
                    عرض <span className="font-bold text-white">{posts.length}</span> مقالات
                    {activeCategory !== 'الكل' && (
                        <span> في <span className="text-orange-500 font-bold capitalize">{activeCategory}</span></span>)}
                </p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                        <button title="grid" onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all duration-300
                            ${viewMode === 'grid' ? `bg-orange-500 text-white` : `text-neutral-400 hover:text-white`}`}>
                            <BsGrid className="w-5 h-5 font-bold" />
                        </button>
                        <button title="list" onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all duration-300 
                            ${viewMode === 'list' ? ` bg-orange-500 text-white` : `text-neutral-400 hover:text-white`}`}>
                            <RxHamburgerMenu className="w-5 h-5" />
                        </button>
                    </div>
                    {hasActiveFilters &&
                        <button onClick={onResetFilters} className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"><IoMdClose className="w-4 h-4" /> مسح الفلاتر</button>
                    }
                </div>
            </div>


            {posts.length > 0 ? (
                <>
                    <div className={viewMode === 'grid' ? `grid md:grid-cols-2 lg:grid-cols-3 gap-8` : `flex flex-col gap-6`}>
                        {currentPosts.map((post, index) => (
                            <PostCard viewMode={viewMode} key={post.id} post={post} index={index} />
                        ))}
                    </div>

                    {pages.length > 1 && (
                        <>
                            <div className="flex justify-center items-center gap-2 mt-12">
                                <button
                                    onClick={handelPrev} disabled={currentPage === 1}
                                    className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === 1
                                        ? `bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed`
                                        : `bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]`
                                        }`}>
                                    <MdKeyboardArrowRight className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-1">
                                    {pages.map((page) => (
                                        <button key={page} onClick={() => {setCurrentPage(page);scrollToTop();}}
                                            className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === page
                                                ? `bg-linear-to-r from-orange-500 to-orange-600 text-white`
                                                : `bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white`
                                                }`}>{page}</button>
                                    ))}
                                </div>
                                <button
                                    onClick={handelNext} disabled={currentPage === pages.length}
                                    className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === pages.length
                                        ? `bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed`
                                        : `bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]`
                                        }`}>
                                    <MdKeyboardArrowRight className="w-5 h-5 rotate-180" />
                                </button>
                            </div>
                            <p className="text-center text-neutral-500 mt-4 text-sm">
                                صفحة {currentPage} من {pages.length}
                            </p>
                        </>
                    )}
                </>
            )
                :

                (<div className="text-center py-20">
                    <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
                        <HiOutlineFaceFrown className="w-12 h-12 text-neutral-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">لا توجد مقالات</h3>
                    <p className="text-neutral-400 mb-6">حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.</p>

                    <button
                        onClick={onResetFilters}
                        className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-orange-500/20 active:scale-95 inline-flex items-center justify-center gap-2"
                    >
                        <HiOutlineArrowPath className="w-5 h-5" />
                        إعادة تعيين الفلاتر
                    </button>
                </div>)}

        </div>
    )
}