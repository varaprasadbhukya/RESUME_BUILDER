import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post('/api/users/register', values)
            setLoading(false);
            console.log(result);
            message.success(result.data.message);
        } catch (error) {
            setLoading(false);
            message.error('Registration failed')
        }
    };

    useEffect(() => {
        if (localStorage.getItem('resume-user')) {
            navigate('/home')
        }
    })

    return (
        <div className="auth-parent">
            {loading && (<Spin size='Large' />)}
            <Form layout='vertical' onFinish={onFinish}>

                <h1>Register</h1>
                <hr></hr>

                <Form.Item name='username' label='username'>
                    <Input />
                </Form.Item>

                <Form.Item name='password' label='password'>
                    <Input />
                </Form.Item>

                <Form.Item name='cpassword' label='Confirm Password' >
                    <Input/>
                </Form.Item>

                <div className="d-flex align-items-center justify-content-between">
                    <Link to='/login'>Click here to Login</Link>
                    <Button type='primary' htmlType='submit' >Register</Button>
                </div>
            </Form>
        </div>
    );
}

export default Register