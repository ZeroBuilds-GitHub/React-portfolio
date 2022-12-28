import React from 'react';
import { HomeOutlined, BarsOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

const MenuBar = (props) => {
	return (
		<>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <div className="logo" />
        <Menu.Item key="1">
          <Link to="/">
            <HomeOutlined style={{ fontSize: 16, color: '#08c' }} />
            <label>&nbsp; Home</label>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/AboutPage">
            <UserOutlined style={{ fontSize: 16, color: '#08c' }}/>
            <label>&nbsp; About Me</label>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/SkillPage">
            <DesktopOutlined style={{ fontSize: 16, color: '#08c' }}/>
            <label>&nbsp; Skill</label>
          </Link>
        </Menu.Item>
          <Menu.Item key="4">
              <Link to="/ProjectPage">
                <BarsOutlined style={{ fontSize: 16, color: '#08c' }}/>
                <label>&nbsp; Project</label>
              </Link>
          </Menu.Item>
      </Menu>
		</>
	);
};

export default MenuBar;