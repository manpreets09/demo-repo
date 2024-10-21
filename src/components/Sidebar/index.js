import Button from '@mui/material/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { PiGooglePhotosLogoBold } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const Sidebar =() =>{

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext)

    const isOpenSubmenu=(index)=>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    }

    return(
        <>
        <div className="sidebar">
            <ul>
                <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)} >
                        <span className='icon'><LuLayoutDashboard/></span>
                        Dashboard
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===1  &&isToggleSubmenu===true?'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                        <span className='icon'><PiGooglePhotosLogoBold/></span>
                        products
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===1  &&isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Product list</Link></li>
                            <li><Link to="#">Product view</Link></li>
                            <li><Link to="#">Product upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                        <span className='icon'><HiUsers/></span>
                        Users
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                        <span className='icon'><FaShoppingCart/></span>
                        Orders
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                        <span className='icon'><TbInvoice/></span>
                        Invoices
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`}onClick={()=>isOpenSubmenu(5)} >
                        <span className='icon'><TiMessage/></span>
                        messages
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`}onClick={()=>isOpenSubmenu(6)} >
                        <span className='icon'><IoIosNotifications/></span>
                        Notifications
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===7 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(7)}>
                        <span className='icon'><IoIosSettings/></span>
                        Settings
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Sidebar;