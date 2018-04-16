import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { DatePicker, version } from 'antd';
import 'antd/dist/antd.css';


function ant001_1() {
    console.log(moment());
    ReactDOM.render(
        <div style={{ margin: 24 }}>
            <p style={{ marginBottom: 24 }}>
                Current antd version: {version} <br/>
                You can change antd version on the left panel (Dependencies section).
            </p>
            <DatePicker defaultValue={moment()} />   
        </div>,
        document.getElementById('root')
    );
}

export {ant001_1}