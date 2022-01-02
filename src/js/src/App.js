import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';


import fetch from 'unfetch';


const columns = [
  {
    title: 'Student Id',
    dataIndex: 'studentId',
    key: 'studentId',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  }
];


const App = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {

    fetch('http://localhost:8080/students')
      .then(response => response.json()
        .then(students => {
          // console.log(students);
          setStudents(students);
        }));
  }

  useEffect(() => {
    fetchStudents();
  }, [])

  return (
    <>


      <div className='App'>
        <Table className='App-header'
          dataSource={students}
          columns={columns}
          rowKey='StudentId'
        />
      </div>
    </>
  )
}

export default App;
