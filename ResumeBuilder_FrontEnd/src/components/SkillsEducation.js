import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function SkillsEducation() {
    return (
        <div>
            <h4><b>Education</b></h4>
            <hr />
            <Form.List name="education">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'qualification']}
                                            rules={[{ required: true, message: 'Missing Qualification' }]}
                                        >
                                            <Input placeholder="Qualification" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-2">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'percentage']}
                                            rules={[{ required: true, message: 'Missing Percentage' }]}
                                        >
                                            <Input placeholder="Percentage" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-3">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'institution']}
                                            rules={[{ required: true, message: 'Missing Institution Name' }]}
                                        >
                                            <Input placeholder="Institution" />
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
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            
            <h4><b>Skills</b></h4>
            <hr />
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-4">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'technology']}
                                            rules={[{ required: true, message: 'Missing Qualification' }]}
                                        >
                                            <Input placeholder="Technology" />
                                        </Form.Item>
                                    </div>

                                    
                                    <div className="col-md-2">
                                        <MinusCircleOutlined style={{fontSize:25,color:'tomato'}} onClick={() => remove(name)} />
                                    </div>

                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default SkillsEducation