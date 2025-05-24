import ava from "../media/ava.jpeg";
import audio from "../media/svg_icons/audio.svg";
import file from "../media/svg_icons/file.svg";
import image from "../media/svg_icons/image.svg";
import { Component } from "react";

class NewTweet extends Component {

  constructor(props){
    super(props);
    this.state = {
      text : '',
    }

  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSave = ()=>{
    this.props.addTweet(this.state.text)
    this.setState({text:''})
  };

render(){
  return (
    <div
      className="tweet d-flex justify-content-start align-items-start" 
      style={{width:"90%"}}
    >
      <div
        class=" d-flex align-items-start justify-content-start m-1"
        style={{ width: "10%" }}
      >
        <img
          src={ava}
          className="img-fluid m-1"
          style={{
            borderRadius: "100%",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        className="d-flex flex-column justify-content-between m-1"
        style={{ width: "90%" }}
      >
        <textarea
        value={this.state.text}
       onChange = {this.handleChange}
          className="form-control h-25 mb-2 w-100"
          rows="2"
          placeholder="What's happening?"
          style={{
            minHeight: "70px",
          }}
        />

        <div className="bottom d-flex justify-content-between align-items-center">
          <div className="actions ms-3 w-50 h-50 d-flex justify-content-start">
            <img src={audio} className="me-1" />
            <img src={file} className="me-1" />
            <img src={image} className="me-1" />
          </div>
          <btn className="btn btn-primary rounded-pill px-4 py-2" onClick = {this.handleSave}>Tweet</btn>
        </div>
      </div>
    </div>
  );

}

  
}

export default NewTweet;
