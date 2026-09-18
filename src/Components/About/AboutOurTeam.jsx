import { FaXTwitter, FaGithub, FaLinkedin, FaCheck } from "react-icons/fa6";
export default function AboutOurTeam({posts}) {
    const members = posts.map(m=>m.author)
    

  return (
<section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== الهيدر ===== */}
        <div className="text-center mb-16">
          <span className="section-label mb-4">فريقنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            تعرف على كتابنا
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        {/* ===== الشبكة ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member,index) => (
            <div
              key={index}
              className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
            >
              {/* --- الصورة + علامة التوثيق --- */}
              <div className="relative inline-block mb-4">
                <img
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  src={member.avatar}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                  <FaCheck className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* --- الاسم + الوظيفة --- */}
              <h3 className="font-bold text-white text-lg">{member.name}</h3>
              <p className="text-orange-500 text-sm font-medium mb-4">
                {member.role}
              </p>

              {/* --- السوشيال --- */}
              <div className="flex justify-center gap-3">
                <a
                  href='#'
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a
                  href='#'
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href='#'
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
