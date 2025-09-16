import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activeTab }) => {
  const dispatch = useDispatch();
  const [listNav] = useState([
    "home",
    "about",
    "projects",
    "contacts",
    "roadmap",
  ]);
  const [statusNav, changeStatusNav] = useState(null);
  const toggleNav = () => {
    changeStatusNav(statusNav === null ? "active" : null);
  };
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <nav className={statusNav}>
        {listNav.map((value, key) => (
          <span
            key={key}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
