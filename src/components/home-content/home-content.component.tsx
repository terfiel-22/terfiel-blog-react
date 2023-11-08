import RecentPostItem from "../recent-post-item/recent-post-item.component";
import { HomeContentContainer } from "./home-content.styles";

const HomeContent = () => (
  <HomeContentContainer className="clearfix">
    <div className="main-content">
      <h1 className="recent-posts">Recent Posts</h1>
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
    </div>
    <div className="sidebar"></div>
  </HomeContentContainer>
);

export default HomeContent;
