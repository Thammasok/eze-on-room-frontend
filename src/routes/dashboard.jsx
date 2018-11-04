import Login from "views/Login/Login.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notes from "views/Notes/Notes.jsx";
import Store from "views/Store/Store.jsx";
import Income from "views/Income/Income.jsx";

import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    // pro: true,
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bank",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-tv-2",
    component: Dashboard
  },
  {
    path: "/to-do",
    name: "Todo",
    icon: "nc-icon nc-time-alarm",
    component: Dashboard
  },
  {
    path: "/note",
    name: "Notes",
    icon: "nc-icon nc-book-bookmark",
    component: Notes
  },
  {
    path: "/income",
    name: "Income",
    icon: "nc-icon nc-money-coins",
    component: Income
  },
  {
    path: "/store",
    name: "Store",
    icon: "nc-icon nc-box",
    component: Store
  },
  {
    path: "/wash",
    name: "Wash",
    icon: "nc-icon nc-basket",
    component: Dashboard
  },
  {
    path: "/config",
    name: "Configs",
    icon: "nc-icon nc-settings",
    component: Dashboard
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons
  },
  { path: "/maps", name: "Maps", icon: "nc-icon nc-pin-3", component: Maps },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography
  },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship"
  // },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
