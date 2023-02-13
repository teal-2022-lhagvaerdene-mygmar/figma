import Carousel from "react-bootstrap/Carousel";
export function ProductList() {
  return (
    <>
      <div className="container text-center">
        <div className="row  align-items-center ">
          <div className="col-12 col-md-6 my-3">
            <h1
              style={{
                fontSize: 43,
                color: "#1B5A7D",
                fontWeight: 700,
                width: 175,
                height: 135,
              }}>
              Canon camera
            </h1>
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
    <Carousel variant="dark">
      <Carousel.Item>
        <div className="conteiner-md">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-6" src="21.png" alt="First slide" />
                <div className="col-6">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-4" src="51.png" alt="First slide" />
                <div className="col-8">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-4" src="81.png" alt="First slide" />
                <div className="col-8">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="conteiner-md">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-6" src="21.png" alt="First slide" />
                <div className="col-6">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-4" src="51.png" alt="First slide" />
                <div className="col-8">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-4" src="81.png" alt="First slide" />
                <div className="col-8">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="conteiner-md">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-6" src="21.png" alt="First slide" />
                <div className="col-6">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-4" src="51.png" alt="First slide" />
                <div className="col-8">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 border border-dark rounded mx-4">
              <div className="row">
                <img className="col-4" src="81.png" alt="First slide" />
                <div className="col-8">
                  <h5>Speaker</h5>
                  <h6>(6 items) </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
