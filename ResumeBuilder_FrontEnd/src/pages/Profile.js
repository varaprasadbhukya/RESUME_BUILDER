import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'

import { Button, Form, message, Spin, Tabs } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios'


const { TabPane } = Tabs;

function Profile() {
  const [loading, setLoading] = useState(false)
  const user = JSON.parse(localStorage.getItem('resume-user'));
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post('/api/users/update', { ...values, _id: user._id });
      localStorage.setItem('resume-user', JSON.stringify(result.data))
      setLoading(false);

      message.success("Profile Updated Successfully");
    } catch (error) {
      setLoading(false);
      message.error('Updatation failed');
    }
  };

  return (
    <DefaultLayout>
      {loading && <Spin size='large' />}
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Project" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>

    </DefaultLayout>

  )
}

export default Profile