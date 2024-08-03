import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type {UploadFile, UploadProps} from 'antd';
import { message, Upload } from 'antd';
import type {UploadChangeParam} from "antd/es/upload";

const { Dragger } = Upload;

interface UploadsType {
    change: (info: UploadChangeParam<UploadFile<any>>) => void
}

function Uploads(props: UploadsType) {
    const config: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
                props.change(info);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <>
            <Dragger {...config}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
        </>
    );
}

export default Uploads;
