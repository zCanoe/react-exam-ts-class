import styles from "./index.module.css"
import React, {useState} from "react";
import {Button, TreeSelect, TreeSelectProps} from "antd"; // 使用css_module
const Subject_add: React.FC = () => {
    const treeData = [
        {
            value: 'parent 1',
            title: 'parent 1',
            children: [
                {
                    value: 'parent 1-0',
                    title: 'parent 1-0',
                    children: [
                        {
                            value: 'leaf1',
                            title: 'leaf1',
                        },
                        {
                            value: 'leaf2',
                            title: 'leaf2',
                        },
                        {
                            value: 'leaf3',
                            title: 'leaf3',
                        },
                        {
                            value: 'leaf4',
                            title: 'leaf4',
                        },
                        {
                            value: 'leaf5',
                            title: 'leaf5',
                        },
                        {
                            value: 'leaf6',
                            title: 'leaf6',
                        },
                    ],
                },
                {
                    value: 'parent 1-1',
                    title: 'parent 1-1',
                    children: [
                        {
                            value: 'leaf11',
                            title: <b style={{ color: '#08c' }}>leaf11</b>,
                        },
                    ],
                },
            ],
        },
    ];

    const [value, setValue] = useState<string>();

    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
        console.log('onPopupScroll', e);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.top}>
                <div className={styles.top_left}>
                    基础-网络基础
                </div>
                <div className={styles.top_right}>
                    <TreeSelect
                        showSearch
                        style={{ width: '100%' }}
                        value={value}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="Please select"
                        allowClear
                        treeDefaultExpandAll
                        onChange={onChange}
                        treeData={treeData}
                        onPopupScroll={onPopupScroll}
                    />
                </div>
                <div className={styles.add_button}>
                    <Button type={"primary"}>新增</Button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div>
        </div>
    )
}
export default Subject_add;
