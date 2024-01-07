import "../css/main.css";
import PropTypes from "prop-types";

export default function PhotosList(props) {
  console.log(props);
  const images = props.images;
  const removeItem = props.removeItem;
  return (
    <div className="items-list">
      {images.map((item) => (
        <div
          className="item"
          key={item.id}
        >
          <img
            className="item-img"
            src={item.url}
            alt="error"
          ></img>
          <button
            className="item-remove material-icons"
            onClick={() => removeItem(item.id)}
          >
            close
          </button>
          {/* {item.id} */}
        </div>
      ))}
    </div>
  );
}

PhotosList.propTypes = {
  images: PropTypes.array,
  removeItem: PropTypes.func
};
