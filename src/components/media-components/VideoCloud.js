import React, { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const VideoCloud = () =>{

  const [videoPublicId, setVideoPublicId] = useState(null);
  const [alt, setAlt] = useState(null);

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "binar-cloud",
        uploadPreset: "lznoc89x"
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
    )
    widget.open();
  }

  return (
    <HelmetProvider>
    <div >
        < main>
            < section>
                  <Helmet>
                  <meta  />
                  <script
                    src="https://widget.cloudinary.com/v2.0/global/all.js"
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
          </form>
            </section>
            < section>
            {videoPublicId && (
            <>
              <video
                src={`https://res.cloudinary.com/binar-cloud/video/upload/l_video:${videoPublicId}/fl_layer_apply/${videoPublicId}.mp4`}
                alt={alt}
                controls
                autoPlay
                height="300"
                width="250"
              ></video>
            </>
          )}
            </section>
            
        </main>
    </div>
    </HelmetProvider>
  )
}

export default VideoCloud
