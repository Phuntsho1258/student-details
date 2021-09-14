import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDetail = (props) => {
  return (
    <ul class="list-group">
       <li class="list-group-item">{props.student.id}</li>
      <li class="list-group-item">{props.student.full_name}</li>
      <li class="list-group-item">{props.student.sex}</li>
      <li class="list-group-item">{props.student.age}</li>
      <li class="list-group-item">{props.student.final_score}</li>
      {/* <li class="list-group-item">{props.student.final_score {$lt: 40, 'Pass' }}</li> */}

    </ul>
  );
};

export const StudentList = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);

  const [studentList, setStudentList] = useState();

  const [selectedStudent, setSelectedStudent] = useState();

  const fetchStudentList = async () => {
    await axios
      .get(`http://localhost:3000/student`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function (response) {
        // handle success
        setStudentList(response.data);
        // setWeatherData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    fetchStudentList();
  }, []);


  const deleteStudent = async _id =>{
    await axios
    .delete(`http://localhost:3000/student/${_id}`);
    fetchStudentList();
  }



  return (
    <div>
      <div class="row">
        <div className="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Age</th>
                <th scope="col">Sex</th>
                <th scope="col">Final Score</th>
              </tr>
            </thead>
            <tbody>
              {studentList &&
                studentList.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.ID}</td>
                      <td>{item.full_name}</td>
                      <td>{item.age}</td>
                      <td>{item.sex}</td>
                      <td>{item.final_score}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setSelectedStudent(item);
                            setDisplayDetail(true);
                          }}
                        >
                          Results
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setSelectedStudent(item);
                            setDisplayDetail(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteStudent(item._id);
                          }}
                        >
                          Delete
                        </button>
                      
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h2>Details</h2>

          {displayDetail && (
            <>
              <StudentDetail student={selectedStudent} />
              <button
                className="btn btn-sm btn-warning"
                onClick={() => setDisplayDetail(!displayDetail)}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
      <br />
    </div>
  );
};