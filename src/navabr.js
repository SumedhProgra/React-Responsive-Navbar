import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { XLg, List } from "react-bootstrap-icons";
import { Fade } from "react-reveal";
const Navbar = () => {
  const [hide, sethide] = useState(false);

  const hidesavevertnav = () => {
    sethide(true);
  };

  const hidenav = () => {
    sethide(false);
  };
  return (
    <>
      <div className="pn">
        <div className="subpn">
          <div className="vnavfpart">
            <div>
              <svg
                id="logo-14"
                width="73"
                height="20"
                viewBox="0 0 73 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                  class="ccustom"
                  fill="#68DBFF"
                ></path>{" "}
                <path
                  d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                  class="ccompli1"
                  fill="#FF7917"
                ></path>{" "}
                <path
                  d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                  class="ccompli2"
                  fill="#5D2C02"
                ></path>{" "}
              </svg>
            </div>
            <div className="navbarhlinks">
              <div>
                <NavLink className="navbarhlinksn" to="/about">
                  About
                </NavLink>
              </div>

              <div>
                <NavLink className="navbarhlinksn" to="/products">
                  Products
                </NavLink>
              </div>

              <div>
                <NavLink className="navbarhlinksn" to="/photos">
                  Photos
                </NavLink>
              </div>

              <div>
                <NavLink className="navbarhlinksn" to="/contact">
                  Contact
                </NavLink>
              </div>

              <div>
                <NavLink className="navbarhlinksn" to="/login">
                  Login
                </NavLink>
              </div>
            </div>
            <div className="listl">
              <List
                style={{ display: hide ? "none" : "" }}
                className="listlogo"
                onClick={hidesavevertnav}
              />
              <XLg
                style={{ display: hide ? "" : "none" }}
                className="listlogo"
                onClick={hidenav}
              />
            </div>
          </div>

          <Fade className="fd" right collapse when={hide}>
            <div style={{ display: hide ? "" : "none" }} className="secnavprt">
              <div className="subsecnavprt">
                <div>
                  <NavLink
                    onClick={hidenav}
                    to="/about"
                    className="navbarhlinksn"
                  >
                    About
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    onClick={hidenav}
                    to="/products"
                    className="navbarhlinksn"
                  >
                    Products
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    onClick={hidenav}
                    to="/photos"
                    className="navbarhlinksn"
                  >
                    Photos
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    onClick={hidenav}
                    to="/contact"
                    className="navbarhlinksn"
                  >
                    Contact
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    onClick={hidenav}
                    to="/login"
                    className="navbarhlinksn"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Navbar;
