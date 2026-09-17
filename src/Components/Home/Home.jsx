import HeroSecHome from "./HeroSecHome";
import HeroSelectedArticles from "./HeroSelectedArticles";
import postData from '../../data/posts.json'
import HomeCategories from "./HomeCategories";
import HomeLatest from "./HomeLatest";
import HomeOurNewsletter from "./HomeOurNewsletter";

export default function Home() {
  const  {posts}  = postData;
  const {categories} = postData
  console.log(posts.slice(3,6));
  
  return (
    <>
      <HeroSecHome />
      <HeroSelectedArticles posts={posts}/>
      <HomeCategories categories={categories}/>
      <HomeLatest posts={posts.slice(3,6)}/>
      <HomeOurNewsletter/>
    </>
  )
}
