import UserIcon from "../../image/user.svg";
import MusicIcon from "../../image/music2.png";

const SidebarMenu = [
  {
    id: 1,
    icon: UserIcon,
    path: "/dashboard/profile",
    title: "My Profile",
  },
  {
    id: 2,
    icon: MusicIcon,
    path: "/dashboard/mymusic",
    title: "My Music",
  },
  {
    id: 3,
    icon: MusicIcon,
    path: "/dashboard/setting",
    title: "Setting",
  },
];

export default SidebarMenu;
