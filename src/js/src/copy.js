import React, { Component } from "react";
import './App.css';

import fetch from 'unfetch'


class App extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {

        fetch('http://localhost:8080/students')
            .then(response => response.json()
                .then(students => {
                    // console.log(students);
                    this.setState({ students })
                }));
    }

    render() {

        const { students } = this.state;
        console.log(students);
        if (students && students.length) {
            return students.map((student, id) => {
                return (
                    <div key={id} className="App-header">
                        <h1>{student.firstName} {student.lastName}</h1>
                        <p>{student.email}</p>
                        <p>{student.studentId}</p>

                    </div>
                );
            })
        }
        return <h1>Hello</h1>
    }


}

export default App;



