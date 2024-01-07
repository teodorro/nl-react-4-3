import "../css/main.css";
import PropTypes from "prop-types";

export default function PhotosList(props) {
  // if (props == null) {
  //   return (<></>)
  // }
  console.log(props);
  const images = props.images;
  console.log(images);
  return (
    <>
      {images.map((item) => (
        <div
          className="item"
          key={item.id}
        >
          <img className="item-img" src={item.url}></img>
          {item.id}
        </div>
      ))}
    </>
  );
}

PhotosList.propTypes = {
  images: PropTypes.array,
};
