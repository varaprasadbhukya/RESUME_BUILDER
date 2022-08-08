import { Form, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'

function PersonalInfo() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Form.Item name="firstName" label="Firs tName" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className="col-md-4">
                    <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className="col-md-4">
                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className="col-md-4">
                    <Form.Item name="mobileNumber" label="Mobile Number" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </div>

                <div className="col-md-4">
                    <Form.Item name="linkedIn" label="LinkedIn URL" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                </div>
                <div className="col-md-12">
                <Form.Item name="objective" label="Objective" rules={[{ required: true }]}>
                        <TextArea/>
                    </Form.Item>
                </div>

                <div className="col-md-12">
                <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                        <TextArea/>
                    </Form.Item>
                </div>

            </div>
        </div>
    )
}

export default PersonalInfo