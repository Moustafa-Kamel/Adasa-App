import { Link } from "react-router-dom";
import { FaClock, FaArrowLeft } from "react-icons/fa";
import { HiArrowLeft as HiArrowLeftIcon } from "react-icons/hi";
//FaArrowRight
export default function HomeLatest({ posts = [] }) {
    const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الهيدر */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="section-label mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              الأحدث
            </span>
            <h2 className="section-title text-white">أحدث المقالات</h2>
            <p className="section-subtitle max-w-lg">محتوى جديد طازج من المطبعة</p>
          </div>

          <Link to='/blog'
            
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
          >
            عرض جميع المقالات
            <HiArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* الشبكة */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group card overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {/* الصورة */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={post.image}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* التصنيف */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* المحتوى */}
                <div className="p-6">
                  {/* وقت القراءة + التاريخ */}
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaClock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                    <span>{formatDate(post.date)}</span>
                  </div>

                  {/* العنوان */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* الوصف */}
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* الكاتب + السهم */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src={post.author.avatar}
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <FaArrowLeft className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}