import axios from "axios";
import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "../Navbar/Navbar";


class Review extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    prediction: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("data", this.state.selectedFile);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("http://127.0.0.1:5000/postcsv", formData).then((response) => {
      if (response.data >= 1) {
        this.setState({prediction: String(100* (response.data-1)) + "% positive, " + String(100 * (2 - response.data)) + "% neutral."})
      }
      else {
        this.setState({prediction: String(100* (response.data)) + "% neutral, " + String(100 * (1 - response.data)) + "% negative."})
      }
    });
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <Alert
          variant="success"
          style={{ width: "40%", position: "relative", left: "30%" }}
        >
          File Uploaded
        </Alert>
      );
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }
  };

  render() {
    return (
      <>
      <Navbar/>
        <h3 style={{fontFamily:"Ubuntu", fontSize:"40px" ,}}>Machine Learning System</h3>
        <div className="tpw">        <h6 style={{color: "grey", fontSize:"13px", fontWeight:"bold"}}>Your CSVs go here</h6>
</div>
      <Form style={{
        width: "25%",
        marginTop: "1rem",
        borderRadius: "4px",
        position: "relative",
        left: "38%",
        border: "1px  #536DFE",
        padding: "30px",
        height: "24rem",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize: "20px", fontWeight: "bold", fontFamily: "Inter"}}>Upload File for Prediction</Form.Label>
        <input type="file" onChange={this.onFileChange} style={{ marginLeft:"12%", marginBottom:"2%", borderRadius: "6px",color:"#536DFE"  
}}/>
        <Button onClick={this.onFileUpload} style={{ width: "80%" , marginTop:"10%", borderRadius:"4px",backgroundColor:"#536DFE",border:"none"}}> Predict
</Button>
      </Form.Group>
         <h3 style={{marginTop:"30%", fontFamily:"Ubuntu"}} >Prediction: {this.state.prediction}</h3>


    </Form>
    </>


      // <div>
      //   <h1>Upload Pipeline</h1>
      //   <h3>File Upload using React!</h3>
      //   <div>
      //     <input type="file" onChange={this.onFileChange} />
      //     <button type="button" onClick={this.onFileUpload}>
      //       Upload!
      //     </button>
      //     <h3>Prediction: {this.state.prediction}</h3>
      //   </div>
      //   {this.fileData()}
      // </div>
    );
  }
}

export default Review;
