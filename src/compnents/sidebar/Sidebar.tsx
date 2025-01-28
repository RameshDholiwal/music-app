import './Sidebar.css'
import SidebarButton from './SidebarButton'
import { ImLibrary } from "react-icons/im";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import musiclogo from '../../assets/images/music logo.jpg'

export default function Sidebar() {
  return (
    <>
        <div className="sidebar-container">
            <div className='sidebar-img'>
                <img src={musiclogo} alt="profile-img" className='profile-img' />
            </div>
            <div className='sidebar-buttons'>
                <SidebarButton title="Feed" to='/Feed' icon={ <BsFillGrid1X2Fill /> } />
                <SidebarButton title="Trending" to='/Trending' icon={ <AiFillFire /> } />
                <SidebarButton title="Player" to='/Player' icon={ <TbPlayerPlayFilled /> } />
                <SidebarButton title="Favourite" to='/Favourite' icon={ <MdFavorite /> } />
                <SidebarButton title="Library" to='/' icon={ <ImLibrary /> } />
            </div>
            <div className="sidebar-logout">
                <SidebarButton title="Log Out" to='/' icon={ <TbLogout /> } />
            </div>
        </div>
    </>
  )
}
