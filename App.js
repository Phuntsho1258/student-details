// import logo from "./logo.svg";
// import "./styles.css";
import { AddStudent } from "./AddStudent";
import { StudentList } from "./StudentList";
/*import { EditStudent } from "./EditStudent";*/

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center"><strong> Student Management System</strong></h3>
        </div>
      </div>
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;