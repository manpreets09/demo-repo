import React,{useContext, useState} from 'react';

import { Link } from "react-router-dom";
import logo from  '../../assets/images/IMG_6172.PNG'
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import Searchbox from "../Searchbox";
import { MdLightMode } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BsShieldFillExclamation } from "react-icons/bs";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from '../../App';

const Header=()=>{
    const [anchorEl, setAnchorEl] = useState(null)
    const [isOpennotificationsDrop, setisOpennotificationsDrop] = useState(null) 
    const openmyacc = Boolean(anchorEl);
    const opennotifications = Boolean(isOpennotificationsDrop);

    const context = useContext(MyContext)

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
    const handleOpennotificationDrop = (event) => {
        setisOpennotificationsDrop(true);
    };
    const handleClosenotificationsDrop = () => {
        setisOpennotificationsDrop(false);
    };
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                    <div style={{display:'flex',alignItems:'center',}}>
                    
                    <div className="col-sm-2 d-flex align-items-center part1">
                        <Link to={"/"}className="col-sm-2 d-flex align-items-center logo">
                            <img src={logo}/>
                            <span className="ml-2">HOTASH</span>
                        </Link>
                    </div>
                    
                        <div className="d-flex align-items-center part2">
                            <Button className="rounded-circle" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar===false ? <MdOutlineMenu/> :
                                    <MdMenuOpen/>
                                }
                            </Button>
                        </div>
                        
                        <div className="searchbox">
                            <Searchbox/>
                        </div>
                        
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle"><MdLightMode/></Button>
                            <Button className="rounded-circle"><FaShoppingCart/></Button>
                            <Button className="rounded-circle"><IoMail/></Button>

                        <div className='dropDown psition-relative'>
                        <Button className="rounded-circle"
                            onClick={handleOpennotificationDrop}
                            ><FaBell/></Button>
                            <Menu
                            anchorEl={isOpennotificationsDrop}
                            className='notifications dropdown_list'
                            id="notifications"
                            open={opennotifications}
                            onClose={handleClosenotificationsDrop}
                            onClick={handleClosenotificationsDrop}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

                            <div className='head' >
                            <h4>Notificatios</h4>
                            </div>

                            <Divider className='mb-1'/>
                            
                            <div className='scrollbar'>
                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Rahul</b>
                                            added new order 
                                            <b>Leather belt</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>Few seconds ago</p>
                                </div>
                                </div>
                            </MenuItem>

                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://tse4.mm.bing.net/th?id=OIP.uylP8xkcq2xBURDQruiergHaE8&pid=Api&P=0&h=180'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Alis</b>
                                            added new order 
                                            <b>Leather Shoes</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>14 minutes ago</p>
                                </div>
                                </div>
                            </MenuItem>

                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Rahul</b>
                                            added new order 
                                            <b>Leather belt</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>18 minutes ago</p>
                                </div>
                                </div>
                            </MenuItem>

                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://tse4.mm.bing.net/th?id=OIP.uylP8xkcq2xBURDQruiergHaE8&pid=Api&P=0&h=180'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Alis</b>
                                            added new order 
                                            <b>Leather Shoes</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>20 minutes ago</p>
                                </div>
                                </div>
                            </MenuItem>

                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://img.freepik.com/premium-photo/young-businessman-isolated-white_53419-207.jpg?w=2000'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Kevin</b>
                                            added new order 
                                            <b>Leather belt</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>1 hour ago</p>
                                </div>
                                </div>
                            </MenuItem>

                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Rahul</b>
                                            added new order 
                                            <b>Leather belt</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>1 hour ago</p>
                                </div>
                                </div>
                            </MenuItem>     

                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <div className='d-flex '>
                                <div>
                                    <div className='userImg'>
                                        <span className='image'>
                                            <img src='https://img.freepik.com/premium-photo/young-businessman-isolated-white_53419-207.jpg?w=2000'/>
                                        </span>
                                    </div>
                                </div>
                                <div className='dropdowninfo'>
                                    <h4>
                                        <span>
                                            <b>Kevin</b>
                                            added new order 
                                            <b>Leather belt</b>
                                        </span>
                                    </h4>
                                    <p className='text-sky mb-0'>1 hour ago</p>
                                </div>
                                </div>
                            </MenuItem>
                            </div>
                            <div className='pl-5 pr-5 w-100'>
                                <Button className='btn-blue w-100'>View all notifications</Button>
                            </div>
                            </Menu>
                        </div>

                            
                        {
                            context.isLogIn!==true ? <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                            :
                            
                            <div className='myaccWrapper'>
                            <Button className="myacc d-flex align-items-center"
                            onClick={handleOpenMyAccDrop}>
                                <div className="userImg">
                                    <span className="image">
                                        <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"/>
                                    </span>
                                </div>
                            
                            <div className="userInfo">
                                <h4>Sujal Singh</h4>
                                <p className="mb-0">@Sujal354</p>
                            </div>
                            </Button>
                                <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openmyacc}
                            onClose={handleCloseMyAccDrop}
                            onClick={handleCloseMyAccDrop}
                            
                            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
                            
                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>My account
                                    
                                </MenuItem>
                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <BsShieldFillExclamation/>
                                </ListItemIcon>Reset Password

                                </MenuItem>
                            <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>Logout
                            </MenuItem>
                        </Menu>
                        </div>
                        }
                        

                        
                    </div>
                </div>
            </div>
            </div>
            </header>
        </>
        )
}
export default Header;