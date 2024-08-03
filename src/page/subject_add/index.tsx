import styles from "./index.module.css"
import React, {useEffect} from "react";
import {Button, TreeSelect, TreeSelectProps} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store";
import {
    get_subject_tree_sync,
    set_subject_active_two,
    subject_active_two_select,
    subject_tree_select
} from "@/store/slice/subject";
import LeftContent from "@/page/subject_add/leftContent";
import RightContent from "@/page/subject_add/rightContent";
// 使用css_module
const Subject_add: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const treeData: any[] = useSelector(subject_tree_select);
    const value: any = useSelector(subject_active_two_select);

    useEffect(() => {
        dispatch(get_subject_tree_sync()).then((res) => {
            if(res.payload.length) {
               dispatch(set_subject_active_two(res.payload[0].children[0]))
            }
        })
    }, [])

    const onChange = (newValue: string, name: any[]) => {
        dispatch(set_subject_active_two({ title: name[0], value: newValue }));
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
                <div className={styles.left}>
                    <LeftContent />
                </div>
                <div className={styles.right}>
                    <RightContent />
                </div>
            </div>
        </div>
    )
}
export default Subject_add;
