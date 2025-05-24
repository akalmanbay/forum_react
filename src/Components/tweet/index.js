import { Component } from "react"
import "./index.css"


class Tweet extends Component {
    constructor(props){
        super(props)
        this.state = {
          isClicked:false

        }}
        likeTweet = ()=>{
          this.setState({
            isClicked: this.state.isClicked?false:true
          })
          
        }
  

    render(){
        let tweet = this.props.tweet
        let likeBtnSvg =  <svg width="20" height="20" viewBox="0 0 24 24" fill={this.state.isClicked ? "red" : "gray"}>
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
         2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
         4.5 2.09C13.09 3.81 14.76 3 16.5 3 
         19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
         11.54L12 21.35z" />
</svg>
    return (
      <div className="post d-flex justify-content-between align-items-start bg-light my-3 px-0" style={{width:"90%"}}>
        <div
          className=" d-flex align-items-start justify-content-start m-1 "
          style={{ width: "10%" }}
        >
          <img
            src={tweet.ava}
            className="img-fluid m-1"
            style={{
              borderRadius: "100%",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
  
        <div className="content d-flex flex-column m-1" style={{ width: "80%" }}>
          <div className="d-flex">
            <div className="me-2">{tweet.name}</div>
            <div className="me-1">@{tweet.nickname}</div>
            <div className="me-1">*</div>
            <div>{tweet.time}</div>
          </div>
          <div>{tweet.content}</div>
          <div>Media</div>
          <div className="bottom d-flex w-50 justify-content-between">
            <button className="btn"
            onClick={this.likeTweet}>{likeBtnSvg}</button>
            <btn className="btn">Comment</btn>
            <btn className="btn">Share</btn>
          </div>
        </div>
        <btn className="btn" style={{ width: "5%" }} onClick={()=>{this.props.deleteTweet(this.props.index)}}>
          x
        </btn>
      </div>
    );
  }}

  export default Tweet