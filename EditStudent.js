/**import React, { useState } from "react";
import axios from "axios";
import AddStudent from './AddStudent';
import StudentList from './StudentList';

class row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddStudent: false,
      error: null,
      response: {},
      student: {},
      isEditStudent: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddStudent: true });
  }

  onFormSubmit(data) {
    let post;

    if(this.state.isEditStudent){
      .post("http://localhost:3000/student",;
    } else {await axios
        .post("http://localhost:3000/student",;
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(post, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddProduct: false,
          isEditProduct: false
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  editProduct = productId => {

    const .post("http://localhost:3000/student",;
    const formData = new FormData();
    formData.append('productId', productId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            student: result,
            isEditStudent: true,
            isAddStudent: true
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

   render() {

    let studentForm;
    if(this.state.isAddStudent || this.state.isEditStudent) {
      studentForm = <AddStudent onFormSubmit={this.onFormSubmit} student={this.state.student} />
    }


    return (
        <div className="row">
          <Container>
            <h1 style={{textAlign:'center'}}> EditStudent </h1>
            {!this.state.isAddStudent && <Button variant="primary" onClick={() => this.onCreate()}>AddStudent</Button>}
            {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
            {!this.state.isAddStudent && <ProductList editStudent={this.editStudent}/>}
            { StudentForm }
            {this.state.error && <div>Error: {this.state.error.message}</div>}
          </Container>
        </div>
      );
    }
  }
  
  export default App;
  