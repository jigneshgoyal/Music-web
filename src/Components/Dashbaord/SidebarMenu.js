import UserIcon from '../../image/user.svg';
import MusicIcon from '../../image/music.svg';

const SidebarMenu = [ 
     {
        id: 1,
        icon: UserIcon,
        path: '/dashboard',
        title: 'My Profile',
    },
    {
        id: 2,
        icon: MusicIcon,
        path: '/dashboard/mymusic',
        title: 'My Music',
    },
   
  
]

export default SidebarMenu;
