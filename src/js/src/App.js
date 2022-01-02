import React, { useState, useEffect } from 'react';
import './App.css';

import fetch from 'unfetch'


const App = () => {
  const [students, setStudents] = useState('');

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
    <div className='App'>
      <div className="App-header">
        {
          students.map((student) => {
            return (
              <div key={student.id}>
                <h1>{student.firstName} {student.lastName}</h1>
                <p>{student.email}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
