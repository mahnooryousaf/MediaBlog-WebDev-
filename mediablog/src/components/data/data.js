import React, { useState } from "react";
import BarChart from "./chart";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
//import Particles from "react-tsparticles";
import './data.css';
//import { loadFull } from "tsparticles";
import { db } from "../../firebase";


function DataPage() {

  const REACT_APP_REDIRECT_URL='http://localhost:3000/'
  const handleLogin = () => {
    let token=JSON.parse( localStorage.getItem('token'))
    if(token){
        history.push("/");
    }
    
    window.location = REACT_APP_REDIRECT_URL;
  };
  let history = useHistory();
  const handleClick=()=> {
      history.push("/");
    }

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const location = useLocation();
  const tokens = location.hash;
  const getParamValues = (url) => {
    return url
      .slice(1)
      .split("&")
      .reduce((prev, curr) => {
        const [title, value] = curr.split("=");
        prev[title] = value;
        return prev;
      }, {});
  };
  console.log(tokens);
  const x = getParamValues(tokens);
  if (x.access_token) {
    localStorage.setItem("token", JSON.stringify(tokens));
  }
  const [token, setstate] = useState(x.access_token);
  const [items, setitems] = useState([]);

  const data = {
    labels: [],
    datasets: [
      {
        label: "Popularity",
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const [chartitems, setChartitems] = useState(data);

  const callApi = (event) => {
    if(event.includes('song')||event.includes('songs')){
      event=event.replace('song', 'track')
    }
    const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      event
    )}&type=track&limit=50&market=US`;
    axios({
      url: API_URL,
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }).then(function (response) {
      // handle success
      let items = response.data.tracks.items;
      let x = {
        labels: items.map((elem) => elem.name),
        datasets: [
          {
            label: "Number of listens",
            data: items.map((elem) => elem.popularity),
            color: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
       
      };
      setChartitems(x);

      console.log(response.data.tracks.items);
      setitems(response.data.tracks.items);
    });
  };                                

  const [topic, setTopic] = useState("");
  const [comment, setComment] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("comments")
      .add({
        topic: topic,
        comment: comment,
      })
      .then(() => {
        setLoader(false);
        alert("Your comment has been submitted!");
      })
      .catch((error) => {
        alert(error.comment);
        setLoader(false);
      });

    setTopic("");
    setComment("");
  }
  return (
    
    <div id="mainpage" className="w-full h-screen text-center justify-center items-center">
      
      <div id = "dataheader">
          <h1>Data</h1>
      </div>
  
      <div id= "chartbody">
  
      <div id="chart" className="columns-1 w-1/2">
      <button onClick={handleLogin} className="buttonStyle">Back Home</button>
      <p>Enter a song title or artist here!</p>
        <div className="row">
          <input
            className="w-full"
            onBlur={(event) => {
              callApi(event.target.value);
            }}
            type={"text"}
            placeholder={"search"}
          />
        </div>
        <div className="row">
          <BarChart data={chartitems}  backgroundColor='rgba(255, 99, 132, 0.5)'/>
        </div>
       
        </div>
      </div>
      <div>
      <form id="commentsystem" onSubmit= {handleSubmit}>
         <div><h1 className="greenText">Share Your Gossip</h1>
           
        <input type="text" size="40" placeholder="Artist/Song/Album..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}/></div>
            
        <div className="commentBox">
      <textarea
        placeholder="Enter Gossip"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea></div>
        

      <button
        type="submit" 
        className="buttonStyle">
        <h2 className="whiteText">Submit</h2>
      </button>
        </form>
        </div>

    </div>
    
  );
}

export default DataPage;
