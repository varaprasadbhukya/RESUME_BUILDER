import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

function ExperienceProjects() {
    return (
        <div>
            <h4><b>Experience</b></h4>
            <hr />
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'company']}
                                            rules={[{ required: true, message: 'Missing Company Name' }]}
                                        >
                                            <Input placeholder="Company" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-2">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'years']}
                                            rules={[{ required: true, message: 'Missing Percentage' }]}
                                        >
                                            <Input placeholder="Years" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'place']}
                                            rules={[{ required: true, message: 'Missing Institution Name' }]}
                                        >
                                            <Input placeholder="Place" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'range']}
                                            rules={[{ required: true, message: 'Missing Year Range' }]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-1">
                                        <MinusCircleOutlined style={{fontSize:25,color:'tomato'}} onClick={() => remove(name)} />
                                    </div>

                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            
            <h4><b>Projects</b></h4>
            <hr />
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-4">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'title']}
                                            rules={[{ required: true, message: 'Missing Qualification' }]}
                                        >
                                            <Input placeholder="Project Title" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-4">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            rules={[{ required: true, message: 'Missing Description' }]}
                                        >
                                            <TextArea placeholder="Add description about your project" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'range']}
                                            rules={[{ required: true, message: 'Missing timeline' }]}
                                        >
                                            <Input placeholder="Project Timeline" />
                                        </Form.Item>
                                    </div>
                                    
                                    <div className="col-md-1">
                                        <MinusCircleOutlined style={{fontSize:25,color:'tomato'}} onClick={() => remove(name)} />
                                    </div>

                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Project
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default ExperienceProjects