import React, { useState } from "react";
import { Helmet } from "react-helmet";

const VideoCloud = () => {
  const [videoPublicId, setVideoPublicId] = useState(null);
  const [alt, setAlt] = useState(null);
  const [audioPublicId, setAudioPublicId] = useState(null);

  const openWidget = () => {

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "cloudfathan",
        uploadPreset: "xntii28f"
      },
      (error, result) => {
        if (result.event === "success") {
          console.log(result.info);
          if (result.info.is_audio === true) {
            setAudioPublicId(result.info.public_id);
            setAlt(`A file of ${result.info.original_filename}`);
          } else {
            setVideoPublicId(result.info.public_id);
            setAlt(`A file of ${result.info.original_filename}`);
          }
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <main >
        <section className="left-side">
          <Helmet>
            <meta charSet="utf-8" />
            <script
              src="https://widget.Cloudinary.com/v2.0/global/all.js"
              type="text/javascript"
            ></script>
          </Helmet>
          <form>
            <button
              type="button"
              className="btn widget-btn"
              onClick={openWidget}
            >
              Upload Video
            </button>
            {/* <button
              type="button"
              className="btn widget-btn"
              onClick={openWidget}
            >
              Upload Audio Video
            </button> */}
          </form>
          < br />
        </section>
        <section className="right-side">


            <>
              <video
                src={`https://res.cloudinary.com/cloudfathan/video/upload/l_video:${videoPublicId}/fl_layer_apply/${videoPublicId}.mp4`}
                alt={alt}
                controls
                autoPlay
                height="200"
                width="240"
              ></video>
            </>

        </section>
      </main>
    </div>
  );
};
export default VideoCloud;