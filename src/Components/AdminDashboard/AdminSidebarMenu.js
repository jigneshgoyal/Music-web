import UserIcon from '../../image/user.svg';
import MusicIcon from '../../image/music2.png';

const AdminSidebarMenu = [ 
     {
        id: 1,
        icon: UserIcon,
        path: '/admindashboard/artist',
        title: 'Artist',
    },
    {
        id: 2,
        icon: MusicIcon,
        path: '/admindashboard/music',
        title: 'Music',
    },
    {
        id: 3,
        icon: MusicIcon,
        path: '/admindashboard/chat',
        title: 'Chat',
    },
   
  
]

export default AdminSidebarMenu;
