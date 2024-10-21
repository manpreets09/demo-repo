import DashboardBox from "./dashcomp/dashboardBox";
import { HiDotsVertical } from "react-icons/hi";
import { FaUsersLine } from "react-icons/fa6";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdShoppingBag } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import  React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from "react-icons/io";
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70px" },
    'backgroundColor': 'transparent'
};

const Dashboard = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setshowBy] = useState('');
    const [categoryBy, setcategoryBy] = useState('');
    const [brandBy, setbrandBy] = useState('');
    const [searchBy, setsearchBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#0D5229", "#48d483"]} icon={<FaUsersLine/>} grow={true}/>
                            <DashboardBox color={["#7A197A", "#C128C2"]} icon= {<PiShoppingCartFill/>}/>
                            <DashboardBox color={["#18327A", "#2C5BDE"]} icon={<MdShoppingBag/>}/>
                            <DashboardBox color={["#777A18", "#C9CF28"]} icon={<BsStars/>}/>
                        </div>
                    </div>


                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h4 className="text-white mb-0 mt-0">Total Sales</h4>
                                <div className="ml-auto">
                                    <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical/></Button>
                                    <Menu
                                        className="dropdown_menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                        <IoIosTimer />last days
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <IoIosTimer />last week
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <IoIosTimer />last month
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <h3 className="text-white font-weight-bold">$3,789,874.00</h3>
                            <p>$3,789,874.00 in last month </p>
                            <Chart
                            chartType="AreaChart"
                            width="100%"
                            height="250px"
                            data={data}
                            options={options}
                            />

                        </div>
                    </div>

                </div>

                <div className="card shadow border-0 p-3">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small">
                            <Select
                                value={showBy}
                                onChange={(e)=>setshowBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small">
                            <Select
                                value={categoryBy}
                                onChange={(e)=>setcategoryBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small">
                            <Select
                                value={brandBy}
                                onChange={(e)=>setbrandBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>
                        <div className="col md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small">
                            <Select
                                value={searchBy}
                                onChange={(e)=>setsearchBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>
                    </div>
                        

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>UID</th>
                                            <th>PRODUCTS</th>
                                            <th>CATEGORY</th>
                                            <th>BRAND</th>
                                            <th>PRICE</th>
                                            <th>STOCK</th>
                                            <th>RATING</th>
                                            <th>ORDER</th>
                                            <th>SALES</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex slign-items-center productBox">
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://tse2.mm.bing.net/th?id=OIP.E07rESkFkLf655DUjGkSBAHaHa&pid=Api&P=0&h=180"/>
                                                        </div>
                                                    </div>
                                                    <div className="info PL-0">
                                                        <h6>Tops and skirts set for womans</h6>
                                                        <p>women's exclusive summer tops and skirts female tops and skirts set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <del className="old">$21.00</del>
                                                <span className="new text-danger">$19.00</span>
                                            </td>
                                            <td>30</td>
                                            <td>4.9(16)</td>
                                            <td>380</td>
                                            <td>$38k</td>
                                            <td>
                                                <div className="actions d-flex align-items-center ">
                                                    <Button className="secondary" color="secondary"><FaEye/></Button>
                                                    <Button className="success" color="success"><IoPencil/></Button>
                                                    <Button className="error" color="error"><MdOutlineDelete/></Button>
                                                </div>
                                            </td>

                                        </tr>

                                        
                                    </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default Dashboard;