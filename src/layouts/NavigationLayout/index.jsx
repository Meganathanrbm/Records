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

import feedIcon from "../../assets/svg/feedBtn.svg";
import notificationIcon from "../../assets/svg/notificationIcon.svg";

import { useRecoilState } from "recoil";
import currentUserState from "../../store/user.store";

const NavigationLayout = () => {
  const notification = true;
  const notificationLi = [
    {
      title: " PSG Collage of Technology has sent for Review",
      desc: "6h ago | Education",
    },
    {
      title: " PSG Collage of Technology has sent for Review",
      desc: "6h ago | Education",
    },
    {
      title: " PSG Collage of Technology has sent for Review",
      desc: "6h ago | Education",
    },
    {
      title: " PSG Collage of Technology has sent for Review",
      desc: "6h ago | Education",
    },
  ];
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

  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);

  return (
    <div className="d-flex min-vh-100">
      <nav
        className="d-flex flex-column justify-content-between align-items-baseline p-3 "
        style={{
          background: "rgba(251, 251, 251, 1)",
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "18vw",
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
              console.log("currentLoggedInUser", currentLoggedInUser);
              return (
                <li
                  className={`d-flex align-items-center p-2 gap-3 rounded ${
                    path.pathname.includes(item.path) ? styles.activeLink : ""
                  }`}
                  key={index}
                >
                  <img
                    src={
                      path.pathname.includes(item.path)
                        ? item.activeIcon
                        : item.icon
                    }
                    alt={item.name}
                    height={15}
                    srcset=""
                  />
                  <Link
                    to={
                      item.path === "/profile"
                        ? `/profile/${currentLoggedInUser.userId}`
                        : item.path
                    }
                  >
                    {item.name}
                  </Link>
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
          <ul className="d-flex flex-column gap-3 mt-2">
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
              <img
                data-bs-toggle="dropdown"
                aria-expanded="false"
                src={feedIcon}
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
                alt="feedIcon"
              />
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
              <img
              
                src={notificationIcon}
                alt="notification icon"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />

              <ul
                class="dropdown-menu "
                style={{
                  minHeight: "50vh",
                  minWidth: "15vw",
                }}
              >
                <div className="p-3 pb-2">
                  <h4>Notifications</h4>
                </div>
                {notification ? (
                  <div className={` notification ${styles.notification}`}>
                    {notificationLi.map((li, i) => (
                      <li key={i} className={`${styles.li} px-3`}>
                        <a className={styles.notification_container} href="#">
                          <div className={styles.notification_logo}></div>
                          <div className={styles.notification_content}>
                            <p className={styles.notification_title_para}>
                              {li.title}
                            </p>
                            <p className={styles.notification_light_para}>
                              {li.desc}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                    <a className={`p-3 pt-4 ${styles.notification_a}`} href="#">
                      Mark all as read
                    </a>
                  </div>
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
              style={{
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                }}
            />
          </div>
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationLayout;
