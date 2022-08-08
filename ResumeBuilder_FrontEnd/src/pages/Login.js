import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    
    const onFinish = async (values) => {
        setLoading(true)
        try {
            const result = await axios.post('/api/users/login', values)
            console.log(result);
            message.success('Login Successful');
            localStorage.setItem('resume-user', JSON.stringify(result.data))
            setLoading(false)
            navigate('/home')
        } catch (error) {
            setLoading(false)
            message.error('Login failed')
        }
    };

    useEffect(()=>{
        if(localStorage.getItem('resume-user'))
        {
            navigate('/home')
        }
    })
    return (
        <div className='bg'>


            <div className="auth-parent">
                {loading && (<Spin size='Large'/>)}
                <Form layout='vertical' onFinish={onFinish} id="frm">

                    <h1>Login</h1>
                    <hr></hr>

                    <Form.Item name='username' label='username'>
                        <Input />
                    </Form.Item>

                    <Form.Item name='password' label='password'>
                        <Input />
                    </Form.Item>


                    <div className="d-flex align-items-center justify-content-between">
                        <Link to='/register'>Click here to Register</Link>
                        <Button type='primary' htmlType='submit' >Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login 