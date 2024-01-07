import "../css/main.css";
import { useRef, useState } from "react";
import PhotosList from "./PhotosList";
import UploadComp from "./UploadComp";
import seqId from "./seq-id";

export default function PhotosComp() {
  const imagesRef = useRef([]);
  const upload = (urls) => {
    urls.forEach((url) => {
      imagesRef.current.push({
        id: seqId.getId(),
        url,
      });
    });
    setImages([...imagesRef.current]);
  };
  const [iimages, setImages] = useState([]);
  // const getImages = () => imagesRef.current;
  return (
    <div className="photos-component">
      <div className="upload-component">
        <UploadComp uploadFunc={upload} />
      </div>
      <div className="photos-list-component">
        <PhotosList images={iimages} />
      </div>
    </div>
  );
}
