import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import { Table, Avatar, Modal } from 'antd';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Footer from './Footer';


import fetch from 'unfetch';

const App = () => {
  const columns = [
    {
      title: '',
      key: 'avatar',
      render: (text, student) => (
        <Avatar size='large'>
          {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
        </Avatar>
      )

    },
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


  //const { classes } = useStyle();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openAddStudentModal = () => { setIsModalVisible(true) }

  const closeAddStudentModal = () => { setIsModalVisible(false) }


  const fetchStudents = () => {

    fetch('http://localhost:8080/api/students')
      .then(response => response.json()
        .then(students => {
          // console.log(students);
          setStudents(students);
          setLoading(true);

        }));
  }

  useEffect(() => {
    fetchStudents();
    setLoading(false);
  }, [])

  return (
    <>
      <div className='App'>
        {!loading ?

          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
            <CircularProgress color="inherit" />
          </Backdrop>

          :

          <div>
            <Table className='App-header'
              dataSource={students}
              columns={columns}
              pagination={false}
              rowKey='StudentId'
            />
            <Modal
              title='Add new student'
              visible={isModalVisible}
              onOk={closeAddStudentModal}
              onCancel={closeAddStudentModal}
              width={1000}>

              <h1>Hello modal</h1>

            </Modal>
            <Footer numberOfStudents={students.length}
              handleAdStudentClickEvent={openAddStudentModal}

            />
          </div>
        }

      </div>


    </>
  )
}

export default App;
