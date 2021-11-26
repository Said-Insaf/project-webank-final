import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";

const Navbar = () => {
  //   const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  return (
    <nav
      className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm"
    
    >
      <div className="container">
        <Link to="/home">
          {/*<a href="/" className="navbar-brand">*/}

          <img
            src="WebankTitle.png"
            width={80}
            alt=""
            className="d-inline-block align-middle mr-2"
          />

          <span className="text-uppercase font-weight-bold"></span>
          {/* </a> */}
        </Link>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <a href="/home" className="nav-link">
                Accueil <span className="sr-only">(current)</span>
              </a>
            </li> */}
            <ul>
              {isAuth ? (
                <ul>
                  <li className="nav-item">
                    <a
                      href="/home"
                      onClick={() => dispatch(logout())}
                      className="nav-link"
                    >
                      Déconnecter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/Profile"
                      //

                      className="nav-link"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className="nav-item">
                    <a href="/signup" className="nav-link">
                      Devenir Client
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/signin" className="nav-link">
                      Gérer vos Comptes
                    </a>
                  </li>
                </ul>
              )}
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
