import AboutOurValues from "./AboutOurValues";
import HeroAbout from "./HeroAbout";
import postData from '../../data/posts.json'
import AboutOurTeam from "./AboutOurTeam";
import AboutTalkWithUs from "./AboutTalkWithUs";

export default function About() {
  const {posts} = postData;

  
  return (
    <div>
      <HeroAbout/>
      <AboutOurValues/>
      <AboutOurTeam posts={posts}/>
      <AboutTalkWithUs/>
    </div>
  )
}
