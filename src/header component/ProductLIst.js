import Carousel from "react-bootstrap/Carousel";
export function ProductList() {
  return (
    <>
      <div className="container text-center">
        <div className="row  align-items-center ">
          <div className="col-12 col-md-6 my-3">
            <h1 style={{ fontSize: 43, color: "#1B5A7D" }}>Canon camera</h1>
            <button className="btn btn-warning mx-3">Shop now</button>
            <button className="btn btn-outline-primary">View more</button>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="row">
              <img src="81.png" alt="camera" className="col-8" />
              <h3
                className="bg-warning text-light col-4  "
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  position: "relative",
                  top: 150,
                }}>
                89$
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider />
    </>
  );
}

function ImageSlider() {
  return (
    <div className="container ">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ backgroundColor: "white", color: "black" }}
      />
    </div>
  );
}
