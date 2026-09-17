import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from 'react-router-dom';
export default function PostCard({ post, index, viewMode }) {
    const isList = viewMode === 'list'
    const delay = (index % 6) * 100;
    const date = new Date(post.date)
    const formatDate = (date) => {
        return date.toLocaleDateString('ar-EG', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    const result = formatDate(date);
    return (

        <article
            className={`group overflow-hidden ${isList
                ? "bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                : "card"
                }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <Link
                to={`/blog/${post.slug}`}
                className={isList ? "flex flex-col md:flex-row" : "block"}
            >
                {/* Container الصورة */}
                <div
                    className={
                        isList
                            ? "relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden"
                            : "relative h-52 overflow-hidden"
                    }
                >
                    <img
                        className={`w-full h-full object-cover transition-transform ease-out ${isList
                            ? "group-hover:scale-105 duration-500"
                            : "group-hover:scale-110 duration-700"
                            }`}
                        src={post.image}
                        alt={post.title}
                    />
                    <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isList
                            ? "bg-linear-to-l from-[#161616]/50 to-transparent"
                            : "bg-linear-to-t from-black/60 via-transparent to-transparent"
                            }`}
                    ></div>

                    {/* Badge القسم يظهر فقط على الصورة في حالة الـ Grid */}
                    {!isList && (
                        <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                                {post.category}
                            </span>
                        </div>
                    )}
                </div>

                {/* تفاصيل المقال */}
                <div
                    className={`p-6 ${isList ? "flex-1 flex flex-col justify-center" : ""
                        }`}
                >
                    {/* Header التفاصيل (الوقت/التاريخ/Badge القسم) */}
                    <div
                        className={`flex items-center gap-3 mb-3 ${isList ? "flex-wrap" : "text-sm text-neutral-500"
                            }`}
                    >
                        {/* Badge القسم يظهر هنا فقط في حالة الـ List */}
                        {isList && (
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                {post.category}
                            </span>
                        )}

                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <FaRegClock className="w-4 h-4" /> {post.readTime}
                        </span>

                        <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>

                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                            {isList && <FaRegCalendarAlt className="w-4 h-4" />}
                            {result || post.date}
                        </span>
                    </div>

                    {/* العنوان */}
                    <h3
                        className={`font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight ${isList ? "text-xl lg:text-2xl" : "text-xl"
                            }`}
                    >
                        {post.title}
                    </h3>

                    {/* الوصف المختصر */}
                    <p
                        className={`text-neutral-400 line-clamp-2 leading-relaxed ${isList ? "mb-4 text-base" : "mb-5 text-sm"
                            }`}
                    >
                        {post.excerpt}
                    </p>

                    {/* Footer الكارد (الكاتب وأزرار التفاعل) */}
                    <div
                        className={`flex items-center justify-between ${isList ? "mt-auto" : "pt-4 border-t border-[#262626]"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className={`rounded-full object-cover ring-2 ring-[#262626] ${isList ? "w-10 h-10" : "w-9 h-9"
                                    }`}
                            />
                            <div>
                                <p
                                    className={`text-sm text-white ${isList ? "font-semibold" : "font-medium"
                                        }`}
                                >
                                    {post.author.name}
                                </p>
                                <p className="text-xs text-neutral-500">{post.author.role}</p>
                            </div>
                        </div>

                        {/* الأزرار المختلفة بناءً على النمط */}
                        {isList ? (
                            <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                اقرأ المقال
                                <HiOutlineArrowNarrowLeft className="w-5 h-5" />
                            </span>
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                <MdKeyboardArrowRight className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" />
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    )
}
