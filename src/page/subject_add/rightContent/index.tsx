import {Button, Form, FormInstance, Input, UploadFile} from 'antd';
import React from 'react';
import TextArea from "antd/es/input/TextArea";
import Uploads from "@/page/subject_add/rightContent/Upload";
import {UploadChangeParam} from "antd/es/upload";

function Index(props: any) {
    const [form]: [FormInstance<any>] = Form.useForm();
    let files = {};
    const handleFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
        files = info;
        console.log(files)
    }
    const handleFormSubmit = async () => {
        const form_data = await form.validateFields()
        console.log(form_data)
        if(form_data) {

        }
    }
    return (
        <>
            <Form name="basic" labelCol={{ span:2 }} wrapperCol={{ span: 16 }} initialValues={{}} autoComplete="off" form={form}>
                <Form.Item
                    label="标题"
                    name="title"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="描述"
                    name="dec"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <TextArea />
                </Form.Item>

                <Uploads change={(info) => handleFileChange(info)}/>
                <Button onClick={() => handleFormSubmit()}>保存</Button>
            </Form>
        </>
    );
}

export default Index;
