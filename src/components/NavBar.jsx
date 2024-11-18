import React, { useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/logo.png'

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screnSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window?.innerWidth)

        window?.addEventListener('resize', handleResize)
        handleResize()

        return () => window?.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screnSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screnSize])

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <div className='logo-container-inner'>
                    <Avatar src={icon} size={'large'} />
                    <Typography.Title level={2} className='logo'>
                        <Link to='/'>App</Link>
                    </Typography.Title>
                    <Button
                        className='menu-control-container'
                        onClick={() => setActiveMenu(!activeMenu)}
                    >
                        <MenuOutlined />
                    </Button>
                </div>
                {
                    activeMenu && (
                        <Menu theme='dark' className='menu-container'>
                            <Menu.Item key='1' icon={<HomeOutlined />}>
                                <Link to='/'>Home</Link>
                            </Menu.Item>
                            <Menu.Item key='4' icon={<FundOutlined />}>
                                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                            </Menu.Item>
                            <Menu.Item key='2' icon={<MoneyCollectOutlined />}>
                                <Link to='/exchanges'>Exchanges</Link>
                            </Menu.Item>
                            <Menu.Item key='3' icon={<BulbOutlined />}>
                                <Link to='/news'>News</Link>
                            </Menu.Item>
                        </Menu>
                    )
                }

            </div>
        </div>
    )
}

export default NavBar