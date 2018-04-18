import React from 'react';
import ReactDOM from 'react-dom';

/* NOTE: Use node to run ../nodejs/l005_restful/server.js first,
then the following api will be support by server.*/ 
const apiName = "http://192.168.28.37:8081/listUsers"
/*
If meets problem: No 'Access-Control-Allow-Origin' header,
the server should add access control allow.
*/

function demo001_1() {
    const request = new XMLHttpRequest()
    request.open('GET', apiName)
    request.onload = () => printNames(request.response)
    request.send()
    
    var printNames = response => {
        var users = JSON.parse(response);
        var user = users["user" + 1] 
        console.log(user.name);
    }
}

export {demo001_1}