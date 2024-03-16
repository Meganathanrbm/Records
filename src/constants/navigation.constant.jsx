import dashboard from "../assets/svg/dashboard.svg";
import activeDashboard from "../assets/svg/activeDashboard.svg";
import profile from "../assets/svg/profile.svg";
import activeProfile from "../assets/svg/activeProfile.svg";
import tools from "../assets/svg/tools.svg";
import activeTools from "../assets/svg/activeTools.svg";
import learning from "../assets/svg/learning.svg";
import activeLearning from "../assets/svg/activeLearning.svg";

const navigationConstants = [
  {
    name: "Dashboard",
    path: "/",
    icon: dashboard,
    activeIcon: activeDashboard,
  },
  {
    name: "Learning",
    path: "/learning",
    icon: learning,
    activeIcon: activeLearning,
  },
  {
    name: "Tools",
    path: "/tools",
    icon: tools,
    activeIcon: activeTools,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: profile,
    activeIcon: activeProfile,
  },
];

export default navigationConstants;
