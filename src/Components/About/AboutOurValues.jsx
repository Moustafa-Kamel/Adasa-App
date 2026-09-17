import { FaBolt, FaBullseye, FaHandshake } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

export default function AboutOurValues() {
     const values = [
    {
      id: 1,
      icon: FaBullseye,
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      id: 2,
      icon: FaBolt,
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
      gradient: "from-orange-600 to-orange-400",
    },
    {
      id: 3,
      icon: FaHandshake,
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      id: 4,
      icon: FaArrowsRotate,
      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
      gradient: "from-orange-600 to-orange-400",
    },
  ];
  return (
 <section className="py-20 bg-[#111111] border-y border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* الهيدر */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full"></span>
            قيمنا
            <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
              >
                {/* الخلفية المتدرجة عند الـ hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  {/* الأيقونة */}
                  <Icon className="text-4xl text-orange-500 mb-4 mx-auto" />

                  {/* العنوان */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {value.title}
                  </h3>

                  {/* الوصف */}
                  <p className="text-neutral-400 text-sm">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
