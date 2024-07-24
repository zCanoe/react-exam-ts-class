import React, {useEffect, useState} from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {RouterKeys, routersData, superAdminMenus} from "@/config";
import {useNavigate} from "react-router-dom";
import usePathKey from "@/hooks/usePathKey";


const App: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const navigateFunction = useNavigate(); // 钩子函数不能在有二义性判断的代码片段中调用，react底层是链表结构调用的
    const key = usePathKey();
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigateFunction(routersData[e.key as any as RouterKeys].path)
    };

    useEffect(() => {
       setCurrent(() => key)
    }, [])

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={superAdminMenus} />;
};

export default App;
