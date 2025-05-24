import Tweet from "./tweet";
import NewTweet from "./NewTweet";
import photo from "../media/ava.jpeg"
import { Component } from "react";



class Feed extends Component {

  constructor(){
    super()
    this.state = {
      newTweetText : '',
      tweets : [{
        name: "Akma",
        nickname: "aklmnb",
        time: "23h",
        content: "sokdfhijbhvdihcdv",
        ava: photo
      },
      {
        name: "Ardak",
        nickname: "aklmnb",
        time: "23h",
        content: "sokdfhijbhvdihcdv",
        ava: photo
      }]
    }
 
  }

  
  addTweet = (text)=>{
    let newTweet = {

      name: "Akma",
      nickname: "akalmanb",
      time: "new",
      content: text,
      ava: photo
    }
    this.setState({tweets: [newTweet,...this.state.tweets]})

  }

  deleteTweet = (id)=>{
    console.log("deleteTweet", id)
    this.setState({
      tweets: this.state.tweets.filter((_, index)=>index!=id)
    })
  }



  render(){
    

    return (
      <div className="w-50 d-flex flex-column justify-content-center align-items-start">
        Home
    <NewTweet addTweet = {this.addTweet}/>
    {this.state.tweets.map((item, index)=> <Tweet tweet = {item} key={index} index={index} deleteTweet = {this.deleteTweet}/>)}
    </div>
  )
  }
  }

export default Feed;
