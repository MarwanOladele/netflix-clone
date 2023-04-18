import { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleBlackBackground = () => {
    if (window.scrollY > 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBlackBackground);

    return () => {
      window.removeEventListener("scroll", handleBlackBackground);
    };
  }, []);

  return (
    <div className="nav ">
      <div className={`nav__content ${show && "nav__black"}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="nav__logo"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="nav__avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Nav;
