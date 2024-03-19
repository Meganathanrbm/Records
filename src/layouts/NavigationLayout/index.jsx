import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, Outlet, useLocation } from "react-router-dom";
import navigationConstants from "../../constants/navigation.constant";
import gift from "../../assets/svg/gift.svg";
import settings from "../../assets/svg/settings.svg";
import help from "../../assets/svg/help.svg";
import dashBoardlogo from "../../assets/svg/dashBoardlogo.svg";
import styles from "./navigation.module.css";
import plusIcon from "../../assets/svg/plusIcon.svg";
import notificationIcon from "../../assets/svg/notification.svg";

const NavigationLayout = () => {
  const notification = false;
  const dropdown = [
    { name: "Add New Learning" },
    {
      name: "Add Education",
    },
    {
      name: "Add Experience",
    },
    {
      name: "Add Credintials",
    },
    { name: "Add Project" },
    {
      name: "Add Activity",
    },
  ];
  const path = useLocation();
  console.log(path);
  return (
    <div className="d-flex min-vh-100">
      <nav
        className="d-flex flex-column justify-content-between align-items-baseline p-3 "
        style={{
          background: "rgba(251, 251, 251, 1)",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          width: "20vw",
          border: "1px solid lightgray",
        }}
      >
        <section>
          <ul
            className="d-flex flex-column   gap-0"
            style={{ color: "rgba(143, 143, 143, 1)" }}
          >
            <img src={dashBoardlogo} alt="logo" className="mb-4" />
            {navigationConstants.map((item, index) => {
              return (
                <li
                  className={`d-flex align-items-center p-2 gap-3 rounded ${
                    path.pathname == item.path ? styles.activeLink : ""
                  }`}
                  key={index}
                >
                  <img
                    src={
                      path.pathname == item.path ? item.activeIcon : item.icon
                    }
                    alt={item.name}
                    height={15}
                    srcset=""
                  />
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <section
            className="d-flex flex-column bg-white p-4"
            style={{ width: "max-content" }}
          >
            <div className="d-flex justify-content-center align-items-center ">
              <img className="mb-1" src={gift} alt="" srcset="" />
              <p className="fw-semibold px-3  mb-1">Free Gifts awaits You!</p>
            </div>
            <Link className="" style={{ fontSize: "15px" }}>
              Explore More Fetures
            </Link>
          </section>
          <ul className="d-flex flex-column gap-3">
            <li className="d-flex gap-3">
              <img src={help} alt="help" srcset="" />
              <a href="/register">Help</a>
            </li>
            <li className="d-flex gap-3">
              <img src={settings} alt="settings" srcset="" />
              <a href="/">Settings</a>
            </li>
          </ul>
        </section>
      </nav>
      <div className=" w-100 p-4">
        <section className="d-flex justify-content-between align-items-center w-100 mb-4">
          <div class="input-group mb-3 w-25">
            <span class="input-group-text" id="basic-addon1">
              <i class="bi bi-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div className="dropdown">
              <button
                className="btn d-flex justify-content-center align-items-center "
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  backgroundColor: "rgba(235, 124, 73, 1)rgba(240, 79, 82, 1)",
                  color: "white",
                }}
              >
                <i class="bi bi-plus"></i>
              </button>
              <ul class="dropdown-menu mr-3">
                {dropdown.map((item, index) => {
                  return (
                    <li key={index}>
                      <a class="dropdown-item" href="#">
                        <img
                          src={plusIcon}
                          alt=""
                          srcset=""
                          style={{ width: "1vw", marginRight: "0.5vw" }}
                        />
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div class="dropdown">
              <i
                class="bi bi-bell-fill btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
              <ul
                class="dropdown-menu "
                style={{
                  minHeight: "50vh",
                  minWidth: "15vw",
                }}
              >
                <div className="p-2">
                  <h6>Notifications</h6>
                </div>
                {notification ? (
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center p-2">
                    <img src={notificationIcon} alt="" srcset="" />
                    <p className="text-center">
                      Oh! There is no notifications at the moment.
                    </p>
                  </div>
                )}
              </ul>
            </div>

            <img
              src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              alt=""
              className="rounded-circle"
            />
          </div>
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationLayout;
