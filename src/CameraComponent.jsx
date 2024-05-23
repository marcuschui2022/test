import { useEffect, useRef, useState } from "react";

const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const constraints = {
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 2160 }, // 2160p for 4K vertical resolution
        height: { ideal: 3840 },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing the camera: ", err);
      });
  }, []);

  const handleTakePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
    setPhoto(canvasRef.current.toDataURL("image/png"));
  };

  return (
    <div>
      <h1>Camara Test</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          maxHeight: "80vh",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      ></video>
      <button onClick={handleTakePhoto}>Take photo</button>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      {photo && (
        <img
          src={photo}
          alt="Captured"
          style={{
            marginTop: "10px",
            width: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      )}
    </div>
  );
};

export default CameraComponent;
