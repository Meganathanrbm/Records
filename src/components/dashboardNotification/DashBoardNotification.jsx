import React, { useState } from "react";
import "./dashboardNotification.css";
import { IoIosClose } from "react-icons/io";
import notification from "../../assets/noNotification.avif";

const DashboardNotification = () => {
  const [notificationShow, setNotificationShow] = useState(false);

  const handleClick = () => {
    setNotificationShow(true);
    if (notificationShow == true) {
      setNotificationShow(false);
    }
  };

  return (
    <div className="dashboardNotification">
      <div className="dashboardNotification__wrapper">
        <div className="dashboardNotification__header">
          <h4>Notifications</h4>
          <IoIosClose fontSize={30} onClick={handleClick} />
        </div>
        <div className="dashboardNotification__notifications">
          <img src={notification} alt="" width={"200px"} />
          <p>
            Oh! There is no notifications <br /> at the moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNotification;
