import "../css/main.css";
import PropTypes from "prop-types";

export default function UploadComp({ uploadFunc }) {
  return (
    <>
      <form className="upload-wrapper">
        <input
          className="upload-input"
          type="file"
          id="image_uploads"
          name="image_uploads"
          multiple
          accept=".jpg, .jpeg, .png"
          onInput={async (evt) => {
            const files = [...evt.target.files];
            const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
            uploadFunc(urls);
          }}
        />
        <label
          className="upload-label"
          htmlFor="image_uploads"
        >
          Click to select
        </label>
      </form>
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

UploadComp.propTypes = {
  uploadFunc: PropTypes.func,
};
