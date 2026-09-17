import { useParams } from 'react-router-dom'
import postData from '../../../data/posts.json'
import PostHero from './PostHero';
import PostSidebar from './PostSidebar';
import PostContent from './PostContent';
import { parsePostContent } from '../../../utils/parsePostContent'

export default function PostDetails() {
    const { slug } = useParams();

    const { posts } = postData

    const post = posts.find((p) => p.slug === slug);
    const date = new Date(post.date)
    const formatDate = (date) => {
        return date.toLocaleDateString('ar-EG', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    const result = formatDate(date);
    const { intro, sections } = parsePostContent(post.content);
    return (
        <article className='bg-[#0a0a0a] min-h-screen'>
            <PostHero date={result} post={post} />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid lg:grid-cols-[1fr_300px] gap-12'>
                    <PostContent post={post}  intro={intro} sections={sections}/>
                    <PostSidebar date={result} post={post}  intro={intro} sections={sections}/>
                </div>

            </div>
        </article>
    )
}
