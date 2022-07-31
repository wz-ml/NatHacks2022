import axios from 'axios';
import React,{Component} from 'react'; 
class Review extends Component { 

    state = { 
  
      // Initially, no file is selected 
      selectedFile: null,
      prediction: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = (e) => { 
      e.preventDefault()
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "data", 
        this.state.selectedFile); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("http://127.0.0.1:5000/postcsv", formData).then((response) => {
        
        if (Math.round(response.data) === 2) {this.setState({prediction: "Positive"})}
        if (Math.round(response.data) === 1) {this.setState({prediction: "Neutral"})}
        if (Math.round(response.data) === 0) {this.setState({prediction: "Negative"})}

      });
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
      return ( 
        <div> 
            <h1> 
              Upload Pipeline
            </h1> 
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button type="button" onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
                <h3>Prediction: {this.state.prediction}</h3>
            </div> 
          {this.fileData()} 

        </div> 
      ); 
    } 
  } 
  
  export default Review; 
