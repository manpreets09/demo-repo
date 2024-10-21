import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/IMG_6172.PNG'
import { Link } from "react-router-dom";

import { IoIosMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";

import { MyContext } from '../../App';

const Login = ()=>{

    const context = useContext(MyContext);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [user,setUser]= useState({
        email:"",
        password:"",
    });

    const handleChange =(e)=>{
        // console.log(e);
        
        let {name,value} = e.target;
            
        setUser({
            ...user,
            [name]:value
        });


    }
    const handleSubmit = (e)=>{
        
       e.preventDefault();
       console.log(user);
    }

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
    },[]);

    return(
        <section className="loginSection">
            <div className="loginBox">
                <div className='logo text-center'>
                    <img src={logo} width="60px"/>
                    <h5 className='font-weight-bold'>Login to HOTASH</h5>
                </div>
                <div className='wrapper mt-3 card border'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3 position-relative'>
                            <span className='icon'><IoIosMail/></span> 
                            <input type='text' className='form-control' name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' />
                        </div>

                        <div className='form-group mb-4 position-relative'>
                            <span className='icon'><IoMdLock/></span> 
                            <input type={`${isShowPassword===true ? 'text' : 'password'}`} name='password' className='form-control ' value={user.password} onChange={handleChange} placeholder='Enter your password'/>

                            <span className='toggleShowPassword'onClick={()=>setIsShowPassword(!isShowPassword)}>
                                {
                                    isShowPassword===true ? <IoMdEyeOff/> : <IoEye/>
                                }
                            </span>
                        </div>

                        <div className='form-group'>
                            <Button type='submit' className="btn-blue btn-lg btn-big w-100">Sign in</Button>
                        </div>

                        <div className='form-group text-center mb-0'>
                            <Link to={'/forgot-password'}className="link">Forgot password</Link>
                            <div className='d-flex align-items-center justify-content-center or mt-3'>
                                <span className='line'></span>
                                <span className='txt'>or</span>
                                <span className='line'></span>
                            </div>
                                
                                
                            <Button variant="outlined" className='w-100 btn-lg loginWithGoogle'>
                            <span className='icon d-flex'><FcGoogle/></span>
                            Sign in with Google
                            </Button>
                        </div>
                    </form>
                </div>.

                <div className='wrapper mt-3 card border footer p-3'>
                        <span className='text-center'>
                            Don't have an account?
                            <Link to={'/signUp'} className='link color ml-3'>Register</Link>
                        </span>
                </div>
            </div>
        </section>  
    )
}

export default Login;