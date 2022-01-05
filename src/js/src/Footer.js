import { Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import "./Footer.css";

const Footer = (props) => (

    <div className='footer'>
        {props.numberOfStudents ?
            <Avatar className='avatar'
                size="large">
                {props.numberOfStudents}
            </Avatar>
            :
            null
        }
        <Button type='primary' onClick={() => props.handleAdStudentClickEvent()}> Add new student</Button>

    </div>

);




export default Footer;


