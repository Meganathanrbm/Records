import React, { useState } from "react";
import youtubeApi from "../../../apis/youtube.api";

const YouTubeCourse = () => {
  const [youtubePlayListUrl, setYoutubePlayListUrl] = useState("");
  const arr = [1, 2, 3];

  function convertYoutubeToCourse() {
    youtubeApi.handleCreatePlaylist({
      payload: { youtubePlayListUrl },
      success: (res) => {
        console.log("Youtube Course", res);
      },
      error: (err) => {
        console.log("Youtube Course Error", err);
      },
    });
  }

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      <section
        className=" d-flex flex-column justify-content-center align-items-center mb-5"
        style={{ width: "50vw" }}
      >
        <h2 className="fw-semibold mb-4">Convert Youtube Playlist</h2>

        <div
          className="d-flex gap-3 justify-content-around align-items-center rounded-3 "
          style={{
            backgroundColor: "rgba(243, 243, 243, 1)",
            width: "inherit",
          }}
        >
          <input
            type="text"
            className="w-100 p-2 px-4"
            placeholder="Paste the content/playlist link here"
            style={{
              backgroundColor: "rgba(243, 243, 243, 1)",
              border: "none",
            }}
            value={youtubePlayListUrl}
            onChange={(e) => setYoutubePlayListUrl(e.target.value)}
          />
          <div className="p-3">
            <button
              className="btn d-flex gap-2"
              style={{
                backgroundColor: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
                color: "white",
              }}
              onClick={convertYoutubeToCourse}
            >
              Convert <i class="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>
      </section>

      <section
        className="mt-5 d-flex flex-column justify-content-center align-items-center "
        style={{ marginTop: "2rem" }}
      >
        <h4 style={{ fontWeight: "normal", fontSize: "26px" }} className="">
          How to convert the YouTube playlist to Course?
        </h4>
        <div className="d-flex justify-content-around align-items-center">
          {arr.map((item, index) => {
            return (
              <div className="d-flex flex-column justify-content-center align-items-center p-4 gap-3">
                <h5>2. Convert it on Record</h5>
                <img
                  src="/youtubecourse.png"
                  alt=""
                  style={{ width: "15vw" }}
                />
                <p className="text-center">
                  Paste the link in the above text field and press the convert
                  option to convert your content or playlist from YouTube to
                  course.
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default YouTubeCourse;
