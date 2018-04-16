import React from 'react';
import ReactDOM from 'react-dom';
import {Upload, Button, Icon, message, Modal} from 'antd';
import './antd.css';

/*Avatar, upload user's avatar, and validate size and format of picture with beforeUpload.*/
function ant002_1() {
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    
    function beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if(!isJPG) {
            message.error('You can only upload JPG file!');
        }
        
        const isLt2M = file.size / 1024 / 1024 < 2;
        if(!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        
        return isJPG && isLt2M;
    }
    
    class Avatar extends React.Component {
        state = {
            loading: false,
        };
        handleChange = (info) => {
            if(info.file.status === 'uploading') {
                this.setState({loading: true});
                return;
            }
            if(info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, imageUrl => this.setState({
                    imageUrl,
                    loading: false,
                }));
            }
        }
        
        render() {
            const uploadButton = (
                <div>
                    <Icon type={this.state.loading ? 'loading' : 'plus'} />
                    <div className="ant-upload-text">Upload</div>
                </div>
            );
            const imageUrl = this.state.imageUrl;
            return (
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatart-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
                </Upload>
            );
        }
    }
    
    ReactDOM.render(<Avatar />, document.getElementById('root'));
}


/*Pictures Wall*/
/*
After users upload picture, the thumbnail will be shown in list. The upload button will
disappear when count meets limitation.
*/
function ant002_2() {
    class PictureWall extends React.Component {
        state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
        
        handleCancel = () => this.setState({previewVisible: false});
        
        handlePreview = (file) => {
            this.setState({
                previewImage: file.url || file.thumbUrl,
                previewVisible: true,
            });
        }
        
        handleChange = ({fileList}) => this.setState({fileList});
        
        render() {
            const {previewVisible, previewImage, fileList} = this.state;
            const uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">Upload</div>
                </div>
            );
            return (
                <div className="clearfix">
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {fileList.length >=3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={previewImage} />
                    </Modal>
                </div>
            );
        }
    }
    
    ReactDOM.render(<PictureWall />, document.getElementById('root'));
                    
}


/*Drag and Drop*/
/*
You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.
We can upload serveral files at once in modern browsers by giving the input the multiple attribute.
*/
function ant002_3() {
    const Dragger = Upload.Dragger;
    
    const props = {
        name: 'file',
        multiple: true,
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange(info) {
            const status = info.file.status;
            if(status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if(status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            }else if(status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        listType: 'picture-card',    // This param is used to choose uploaded file list's type: text, picture or picture-card.
        //showUploadList: false,     // This param is used to show/hide the uploaded files.
        className: 'dragger-image-list',
    };
    
    ReactDOM.render(
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Dragger>
        , document.getElementById('root'));
}



function ant002_4() {
    const fileList = [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];

    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        defaultFileList: [...fileList],
        className: 'upload-list-inline',
    };

    ReactDOM.render(
        <div>
            <Upload {...props}>
                <Button>
                    <Icon type="upload" /> upload
                </Button>
            </Upload>
        </div>
        , document.getElementById('root')
    );
}

export {ant002_1, ant002_2, ant002_3, ant002_4}

















