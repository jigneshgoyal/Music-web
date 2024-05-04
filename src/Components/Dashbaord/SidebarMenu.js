import UserIcon from "../../image/user.svg";
import MusicIcon from "../../image/music2.png";
import SettingIcon from "../../image/settings.png"
import ChatIcon from '../../image/chatIcon.png'

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
    icon: SettingIcon,
    path: "/dashboard/setting",
    title: "Setting",
  },
  {
    id: 4,
    icon: ChatIcon,
    path: "/dashboard/leeloop-connect",
    title: "Connect",
  },
];

export default SidebarMenu;
