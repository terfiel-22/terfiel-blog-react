import { FormEventHandler } from "react";
import { SidebarContainer } from "./sidebar.styles";

const Sidebar = () => {
  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <SidebarContainer>
      <div className="section search">
        <h2 className="section-title">Search</h2>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="search-term"
            className="text-input"
            placeholder="Search..."
          />
        </form>
      </div>
      <div className="section topics">
        <h2 className="section-title">Topics</h2>
        <ul>
          <li>
            <a href="#">Adventure</a>
          </li>
          <li>
            <a href="#">Inspiration</a>
          </li>
          <li>
            <a href="#">Wellness</a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
          <li>
            <a href="#">Creativity</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Nature</a>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
