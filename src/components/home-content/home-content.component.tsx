import RecentPostItem from "../recent-post-item/recent-post-item.component";
import Sidebar from "../sidebar/sidebar.component";
import { HomeContentContainer } from "./home-content.styles";

const HomeContent = () => (
  <HomeContentContainer className="clearfix">
    <div className="main-content">
      <h1 className="recent-posts">Recent Posts</h1>
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
    </div>
    <Sidebar />
  </HomeContentContainer>
);

export default HomeContent;
