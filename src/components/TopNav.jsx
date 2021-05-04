import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

export default function TopNav({ links, title, image }) {
  return (
    <>
      <NavbarWrapper>
        <StyledNavBar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              viewBox="0 0 1020.152 850.289"
            >
              <path fill="#231f20" d="M.5 0h1019.652v850.289H.5z" />
              <path
                d="M560.022 349.746v-14.519c.016-2.21 1.682-3.688 3.697-3.688h65.109c2.097 0 3.76 1.52 3.76 3.675v12.474c-.025 2.059-1.786 4.798-4.904 9.134l-33.754 48.153c12.526-.293 25.779 1.578 37.161 7.98 2.564 1.448 3.261 3.559 3.456 5.658v15.527c0 2.146-2.344 4.625-4.783 3.334-20.062-10.524-46.659-11.668-68.817.126-2.27 1.213-4.632-1.216-4.632-3.362v-14.771c0-2.354.038-6.391 2.418-9.983l39.071-56.066h-34.013c-2.078-.001-3.745-1.483-3.769-3.672zM322.506 440.531h-19.812c-1.885-.115-3.404-1.533-3.544-3.344l.018-101.712c0-2.028 1.697-3.663 3.818-3.663l18.448-.007c1.933.106 3.478 1.566 3.605 3.422v13.284h.363c4.797-12.844 13.871-18.847 26.064-18.847 12.399 0 20.144 6.003 25.707 18.847 4.812-12.844 15.712-18.847 27.374-18.847 8.326 0 17.378 3.431 22.934 11.137 6.295 8.538 4.994 20.972 4.994 31.864l-.008 64.199c0 2.04-1.727 3.666-3.829 3.666h-19.781c-1.997-.115-3.557-1.696-3.557-3.645l-.008-53.936c0-4.276.362-14.965-.564-19.05-1.49-6.845-5.925-8.771-11.657-8.771-4.787 0-9.791 3.212-11.832 8.35-2.024 5.141-1.848 13.683-1.848 19.471v53.913c0 2.04-1.712 3.666-3.822 3.666h-19.785c-1.992-.115-3.562-1.696-3.562-3.645l-.025-53.936c0-11.351 1.859-28.034-12.189-28.034-14.252 0-13.693 16.281-13.693 28.034l-.008 53.913c-.002 2.045-1.68 3.671-3.801 3.671zM688.66 329.665c29.376 0 45.312 25.253 45.312 57.354 0 31.015-17.602 55.659-45.312 55.659-28.859 0-44.59-25.299-44.59-56.742 0-31.655 15.909-56.271 44.59-56.271zm.188 20.75c-14.629 0-15.557 19.927-15.557 32.301 0 12.419-.186 38.946 15.368 38.946 15.316 0 16.044-21.393 16.044-34.414 0-8.572-.36-18.84-2.957-26.979-2.212-7.074-6.652-9.854-12.898-9.854zM772.086 440.531h-19.753c-1.996-.115-3.555-1.696-3.555-3.645l-.042-101.749c.174-1.866 1.814-3.326 3.814-3.326l18.396-.007c1.74.092 3.163 1.275 3.522 2.857v15.546h.373c5.545-13.898 13.28-20.544 26.967-20.544 8.889 0 17.598 3.216 23.145 12.001 5.148 8.106 5.148 21.815 5.148 31.654v64c-.229 1.822-1.854 3.212-3.758 3.212h-19.892c-1.807-.107-3.307-1.476-3.535-3.212v-55.221c0-11.11 1.314-27.399-12.396-27.399-4.816 0-9.207 3.22-11.439 8.146-2.769 6.21-3.132 12.397-3.132 19.254v54.767c-.05 2.04-1.754 3.666-3.863 3.666zM283.681 421.869c-3.604-5.019-7.459-9.07-7.459-18.356V372.64c0-13.062.935-25.067-8.716-34.075-7.607-7.303-20.204-9.876-29.851-9.876-18.855 0-39.881 7.037-44.298 30.334-.47 2.492 1.334 3.785 2.96 4.151l19.202 2.081c1.785-.092 3.096-1.871 3.44-3.652 1.652-8.035 8.375-11.904 15.931-11.904 4.062 0 8.696 1.51 11.117 5.155 2.779 4.065 2.406 9.655 2.406 14.374v2.551c-11.498 1.293-26.513 2.147-37.246 6.871-12.419 5.374-21.12 16.293-21.12 32.394 0 20.604 12.964 30.899 29.63 30.899 14.115 0 21.792-3.33 32.678-14.411 3.6 5.208 4.775 7.721 11.351 13.214 1.479.783 3.367.721 4.684-.467l.044.048c3.959-3.529 11.16-9.779 15.185-13.166 1.607-1.334 1.323-3.496.062-5.292zm-38.98-8.901c-3.156 5.549-8.148 8.986-13.705 8.986-7.604 0-12.05-5.795-12.05-14.352 0-16.866 15.144-19.926 29.47-19.926v4.28c0 7.699.181 14.142-3.715 21.012zM543.393 421.869c-3.632-5.019-7.48-9.07-7.48-18.356V372.64c0-13.062.928-25.067-8.724-34.075-7.573-7.303-20.188-9.876-29.816-9.876-18.851 0-39.889 7.037-44.302 30.334-.47 2.492 1.334 3.785 2.957 4.151l19.19 2.081c1.813-.092 3.114-1.871 3.452-3.652 1.662-8.035 8.356-11.904 15.923-11.904 4.072 0 8.716 1.51 11.113 5.155 2.772 4.065 2.402 9.655 2.402 14.374v2.551c-11.483 1.293-26.49 2.147-37.23 6.871-12.419 5.374-21.132 16.293-21.132 32.394 0 20.604 12.956 30.899 29.645 30.899 14.078 0 21.796-3.33 32.67-14.411 3.592 5.208 4.776 7.721 11.351 13.214 1.49.783 3.359.721 4.669-.467l.043.048c3.968-3.529 11.167-9.779 15.213-13.166 1.612-1.334 1.336-3.496.056-5.292zm-38.994-8.901c-3.131 5.549-8.143 8.986-13.705 8.986-7.604 0-12.031-5.795-12.031-14.352 0-16.866 15.124-19.926 29.447-19.926v4.28c0 7.699.192 14.142-3.711 21.012z"
                fill="#fff"
              />
              <g fill="#f9a51b">
                <path d="M586.477 480.055c-37.793 26.976-90.436 41.545-136.88 41.545-65.057 0-123.044-23.549-167.721-63.893-4.132-3.732-1.464-8.109 3.674-5.156 48.602 28.107 106.849 44.551 167.965 44.551 41.215 0 84.992-8.207 126.593-25.905 9.096-3.877 12.866 4.215 6.369 8.858z" />
                <path d="M602.626 461.848c-4.78-6.106-31.47-2.887-43.461-1.471-3.609.443-4.197-2.732-.907-5.027 21.288-14.881 56.185-10.549 60.22-5.637 4.081 5.053-1.078 40.066-21.022 56.779-3.075 2.588-5.962 1.184-4.608-2.203 4.476-11.228 14.534-36.357 9.778-42.441z" />
              </g>
              <path
                d="M852.636 423.922c2.231 0 4.129.785 5.694 2.355 1.563 1.556 2.352 3.448 2.352 5.663 0 2.229-.787 4.124-2.352 5.69-1.56 1.571-3.455 2.358-5.694 2.358-2.233 0-4.129-.787-5.689-2.358-1.555-1.566-2.335-3.463-2.335-5.69 0-2.215.78-4.107 2.352-5.663 1.565-1.57 3.462-2.355 5.672-2.355zm9.306 7.999c0-2.564-.913-4.749-2.725-6.553-1.814-1.806-4.019-2.709-6.59-2.709-2.559 0-4.738.903-6.555 2.709-1.811 1.813-2.723 3.995-2.723 6.553 0 2.579.9 4.778 2.7 6.59 1.805 1.827 4.004 2.74 6.575 2.74 2.572 0 4.775-.913 6.591-2.74 1.814-1.815 2.727-4.013 2.727-6.59zm-6.844-2.007c0 .766-.353 1.287-1.062 1.567-.395.154-.972.222-1.74.222h-1.647v-3.637h1.552c1.018 0 1.748.116 2.214.368.453.254.683.74.683 1.48zm-6.206-3.112v10.172h1.756v-4.009h1.438c.972 0 1.65.113 2.032.324.657.388.979 1.156.979 2.336v.806l.039.325.022.115c.016.029.022.069.03.103h1.67l-.065-.13c-.05-.088-.078-.258-.094-.526-.021-.271-.021-.521-.021-.759v-.739c0-.514-.193-1.042-.555-1.585-.373-.536-.95-.868-1.749-.991.629-.1 1.119-.262 1.475-.492.673-.436 1.01-1.104 1.01-2.009 0-1.276-.536-2.134-1.593-2.576-.593-.241-1.524-.363-2.794-.363l-3.58-.002z"
                fill="#fff"
              />
            </svg>{" "}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <div className="d-flex">
              <Nav.Item className="mr-3">
                <Link to="/" className="text-white d-flex">
                  <div className="d-flex align-items-end">
                    <GrLocation />
                  </div>

                  <div className="text-left">
                    {" "}
                    <p>Hello</p>
                    <p>Select your Address</p>
                  </div>
                </Link>
              </Nav.Item>
            </div>
          </Nav>

          <Form inline>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button
                  type="button"
                  class="btn btn-outline-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <CustomFormControl type="text" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  <BiSearchAlt2 />
                </button>
              </div>
            </div>
          </Form>

          <div className="d-flex">
            <NavDropdown title="UK FLAG" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="ACCOUNTS AND LISTS"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="ml-4 mr-2">
              <Link
                className="text-white d-flex flex-column justify-content-center align-items-center"
                style={{ fontSize: "12px" }}
              >
                RETURNS AND ORDERS
              </Link>
            </Nav.Item>
            <Nav.Item className="ml-4 mr-2">
              <Link
                className="text-white d-flex flex-column justify-content-center align-items-center"
                style={{ fontSize: "12px" }}
              >
                BASKET
              </Link>
            </Nav.Item>
          </div>
        </StyledNavBar>
      </NavbarWrapper>
    </>
  );
}

const StyledNavBar = styled(Navbar)``;

const CustomFormControl = styled(FormControl)`
  width: 560px !important;
`;

const NavbarWrapper = styled.div`
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const StyledTable = styled(Table)`
//   & th {
//     border: none !important;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     padding: 0;
//     font-size: 11px;
//     font-weight: 500;
//     letter-spacing: 1px;
//   }
//   .tableBodyBorder {
//     border-top: 2px solid white;
//   }

//   & .showTitle {
//     min-width: 320px;
//   }

//   & td {
//     padding: 2rem 0 0.5rem 0;
//     color: #b2b2b2;
//     font-weight: 600;
//     border: none;
//     border-top: 1px solid rgb(51, 51, 51);
//     font-size: 18px;
//     p {
//       font-weight: 400;
//     }
//     .show-info-box {
//       display: flex;
//       min-width: 320px;
//     }

//     .line-clamp {
//       display: -webkit-box;
//       -webkit-line-clamp: 3;
//       -webkit-box-orient: vertical;
//       overflow: hidden;
//     }

//     :hover {
//       color: white;
//     }
//   }

//   & .showTime {
//     color: white;
//   }

//   & .image-container {
//     max-height: 70px;
//     margin-right: 1rem;
//     position: relative;

//     :hover .playBtnCircle {
//       z-index: 9;
//       opacity: 1;
//     }

//     img {
//       object-fit: contain;
//       border-radius: 50%;
//       width: 60px;
//       min-width: 50px;
//     }

//     .playBtnCircle {
//       position: absolute;
//       width: 30px;
//       height: 30px;
//       border: none;
//       border-radius: 50%;
//       background-color: #ea602b;
//       left: 25%;
//       bottom: 35%;
//       z-index: -1;
//       opacity: 0;
//       transition: 0.3s ease-in;
//     }

//     .playBtnCircle::before {
//       content: "";
//       position: absolute;
//       margin: auto;
//       width: 0px;
//       top: 32%;
//       left: 41%;
//       height: 0;
//       border-style: solid;
//       border-width: 5.5px 0 5.5px 8px;
//       border-color: transparent transparent transparent white;
//     }
//   }

//   & .dayDateHeading {
//     border-bottom: 1px solid #ea602b;
//   }
//   & p {
//     color: #b2b2b2;
//   }
// `;
