import React, { useEffect, useState } from "react";
import "./learningContent.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoMdAdd,
} from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import LearningContentCard from "../../components/learningContentCard/LearningContentCard";
import LearningContentSection from "../../components/learningContentSection2/LearningContentSection";
import youtubeApi from "../../apis/youtube.api";
import YoutubePlayer from "./YoutubePlayer";
import learningApi from "../../apis/learning.api";
const LearningContent = () => {

  const location = useLocation();  
  const data = location.state?.myData;
  const [notesText, setNotesText] = useState(""); 
  const [videoTime, setVideoTime] = useState("1:42");
  const [notes, setNotes] = useState([]); 

  console.log(data);
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/2zXbRJty4vc"
  );
  useEffect(() => {
    youtubeApi.handleGetCourseById({
      payload: { courseId: "2zXbRJty4vc" },
      success: (response) => {
        console.log("response", response);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
    learningApi.getNotes({
      query: { courseId:"cec400d2ec494030b424d962c1159b30",
      videoId:"2zXbRJty4vc" 
      },
      success:(res)=>{
        console.log("notes",res.data.notes);
        setNotes(res.data.notes);
      },
      error:(err)=>{
          console.error("error",err);
      }
    })
  }, []);

  const secondsToTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  };

  const sortedNotes = notes.sort((a, b) => b.videoTime - a.videoTime);
  const handleaddnote= ()=>{
    const timeToSeconds = (timeStr) => {
      const [minutes, seconds] = timeStr.split(':').map(Number);
      return (minutes * 60) + seconds; 
    };
    learningApi.AddNote({
      query: {
        courseId: "cec400d2ec494030b424d962c1159b30",
        videoId: "2zXbRJty4vc",
        videoTime: timeToSeconds(videoTime), 
        notes: notesText,
      },
      success: (response) => {
        console.log("notes response", response.message);
      },
      error: (error) => {
        console.error("Error adding note:", error);
      },
    });
    setNotesText("");
  }

  const handleVideoStopped = (currentTime) => {
    // Function to handle video stop event
    setVideoTime(currentTime); // Update video time when player stops
    console.log(currentTime);
  };

  return (
    <div className="learningContent">
      <div className="learningContent__wrapper">
        <div className="learningContent__section">
          <div className="learningContent__container1">
            <div className="learningContent__title">
              <p>
                My Learnings <IoIosArrowForward /> Web Developmet Masterclas
              </p>
              <p className="learningContent__udemy">
                Enrolled on <span>Udemy</span>
              </p>
            </div>
            {videoLink ? (
              <YoutubePlayer
              onPlayerStateChange={handleVideoStopped}
               videoId="2zXbRJty4vc" />
            ) : (
              <div className="learningContent__video">
                <div className="learningContent__video_icon">
                  <FaPlay fontSize={50} />
                </div>
                <h1>Web Development</h1>
                <h2>MasterClass</h2>
              </div>
            )}
          </div>
          <div className="learningContent__notes">
            <div className="learningContent__notes_title">
              <h5>Notes</h5>
              <p>
                Sort by Latest <IoIosArrowDown />
              </p>
            </div>
            <div className="learningContent__inputs">
              <div className="learningContent__input_wrapper">
                <input type="text" placeholder="Add new note at 3:12" 
                 value={notesText} 
                 onChange={(e) => setNotesText(e.target.value)}/>
                <IoMdAdd style={{ cursor: "pointer" }}  onClick={handleaddnote}/>
              </div>
              <div className="notes-list">
      {sortedNotes.map((note) => (
        <LearningContentCard
          key={note._id} 
          time={`${secondsToTime(note.videoTime)}`}
          content={note.text} 
        />
      ))}
    </div>
              
            </div>
          </div>
        </div>

        <div className="learningContent__section2">
          <LearningContentSection />
        </div>
      </div>
    </div>
  );
};

export default LearningContent;
