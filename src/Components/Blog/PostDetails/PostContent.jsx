import { FaLink, FaShareNodes } from "react-icons/fa6";
import { FaCamera, FaTags, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';

export default function PostContent({ post,intro ,sections}) {
    return (
        <div className='order-2 lg:order-1'>
            <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">"اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية."</p>
            </div>
            <div>
                {intro && (
                    <p className="text-neutral-300 leading-relaxed mb-6 text-lg">{intro}</p>
                )}

                {sections.map((section, index) => (
                    <div key={index}>
                        <h2
                            id={`section-${index}`}
                            className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                        >
                            <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                                <FaCamera className="text-orange-500" />
                            </span>
                            {section.title}
                        </h2>
                        {section.paragraphs.map((p, i) => (
                            <p key={i} className="text-neutral-300 leading-relaxed mb-6 text-lg">{p}</p>
                        ))}
                    </div>
                ))}
            </div>

            <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <FaTags className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {post.tags?.map((t) => (
                        <span key={t} className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">#{t}</span>
                    ))}
                </div>
            </div>
            <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                            <FaShareNodes className="text-orange-500" />
                        </div>
                        <h3 className="font-bold text-white">شارك المقال</h3>
                    </div>
                    <div className="flex gap-2">
                        <button class="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                            <BsTwitterX />
                        </button>
                        <button class="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                            <FaLinkedin />
                        </button>
                        <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                            <FaWhatsapp />
                        </button>
                        <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                            <FaLink />
                        </button>
                    </div>


                </div>
            </div>
            <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20" src={post.author.avatar} alt={post.author.name} />
                    <div className="text-center sm:text-right flex-1">
                        <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">كاتب المقال</span>
                        <h3 className="text-xl font-bold text-white mt-1">{post.author.name}</h3>
                        <p className="text-neutral-500 text-sm mb-3"> {post.author.role}</p>
                        <p className="text-neutral-400 text-sm leading-relaxed">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}


//"content": "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",