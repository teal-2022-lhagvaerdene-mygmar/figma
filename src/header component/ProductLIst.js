import SimpleImageSlider from "react-simple-image-slider";
export function ProductList() {
  return (
    <>
      <div className="row container align-items-center text-center">
        <div className="col-12 col-md-6 my-3">
          <h1 style={{ fontSize: 43, color: "#1B5A7D" }}>Canon camera</h1>
          <button className="btn btn-warning">Shop now</button>
          <button className="btn btn-outline-primary">View more</button>
        </div>
        <div className="col-12 col-md-6 ">
          <img src="81.png" alt="camera" />
          <div
            className="bg-warning  text-light"
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              position: "relative",
              left: 400,
              bottom: 150,
            }}>
            <h3>89$</h3>
          </div>
        </div>
      </div>
      <ImageSlider />
    </>
  );
}

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
];

const ImageSlider = () => {
  return (
    <div className="container ">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ backgroundColor: "white"}}
      />
    </div>
  );
};
