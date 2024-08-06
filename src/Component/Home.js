import { Slides } from "../constant";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import News from "./News";


// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  // Video and indicator states
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useEffect(() => {
    // Slider animation
    gsap.to("#slider", {
      xPercent: -100 * videoId,
      duration: 2,
      ease: "power2.inOut",
    });

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: "#video",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
      onLeave: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: false,
          isPlaying: false,
        }));
      },
    });
  }, [videoId, isEnd]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // Animation for progress bar
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            // Set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            // Set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            Slides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }

      return () => {
        gsap.ticker.remove(animUpdate);
      };
    }
  }, [videoId, startPlay, isPlaying]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (isPlaying) {
        videoRef.current[videoId].play();
      } else {
        videoRef.current[videoId].pause();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: (i + 1) % Slides.length // Loop back to 0 if it's the last video
        }));
        break;
      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          videoId: 0,
          isLastVideo: false
        }));
        break;
      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying
        }));
        break;
      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying
        }));
        break;
      default:
        break;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex overflow-hidden">
        <div id="slider" className="d-flex">
          {Slides.map((list, i) => (
            <div key={list.id} className="flex-shrink-0 w-100">
              <div className="video-carousel_container">
                <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-black rounded-3xl overflow-hidden">
                  <video
                    id="video"
                    playsInline
                    className="w-100 h-100"
                    preload="auto"
                    muted
                    ref={(el) => (videoRef.current[i] = el)}
                    onEnded={() =>
                      handleProcess("video-end", i)
                    }
                    onPlay={() =>
                      setVideo((prev) => ({ ...prev, isPlaying: true }))
                    }
                    onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  >
                    <source src={list.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card position-absolute end-0 d-flex justify-content-center bg-white bg-opacity-25" style={{ width: "25rem", height: "30rem", marginTop: "5rem", marginRight: "2rem" }}>
        <div className="card-body px-0 fw-normal">
          <News />
        </div>
      </div>

      <div className='position-absolute top-50 start-0 container bg-white' style={{ width: "15vw", marginLeft: "1rem" }}>
        
      </div>
    </div>
  );
};

export default Home;
