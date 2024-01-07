import "../css/main.css";
import PropTypes from "prop-types";

export default function UploadComp({uploadFunc}) {
  return (
    <>
      <div className="upload-wrapper">
        <button className="upload">Upload file</button>
        <input
          type="file"
          // onInput={handleSelect}
          onInput={async(evt) => {
            const files = [...evt.target.files];
            const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
            uploadFunc(urls);
          }}
          />
      </div>
    </>
  );
}

const fileToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", (evt) => {
      resolve(evt.currentTarget.result);
    });

    fileReader.addEventListener("error", (evt) => {
      reject(new Error(evt.currentTarget.error));
    });

    fileReader.readAsDataURL(file);
  });
};

// const handleSelect = async (evt) => {
//   const files = [...evt.target.files];
//   const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
//   console.log(urls)
//   // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
// };

UploadComp.propTypes = {
  uploadFunc: PropTypes.func,
};