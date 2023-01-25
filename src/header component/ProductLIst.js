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
    <Carousel variant="dark">
      <Carousel.Item>
        <div className="w-100 row  justify-content-center  mx-5 text-primary ">
          <div className="col-11 col-lg-3 border border-black border-2 rounded mx-3 ">
            <div className="row justify-content-center">
              <img className="col-6  w-25 " src="21.png" alt="s" />
              <div className="col-6 ">
                <h4>Speakers</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-3  border border-black border-2 rounded">
            <div className="row justify-content-center">
              <img className="col-6  w-25" src="51.png" alt="s" />
              <div className="col-6 ">
                <h4>Dekstop</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-3  border border-black border-2 rounded mx-3">
            <div className="row justify-content-center ">
              <img className="col-6 w-25" src="81.png" alt="s" />
              <div className="col-6 ">
                <h4>DSLR camera</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-100 row  justify-content-center  mx-5 text-primary ">
          <div className="col-11 col-lg-3 border border-black border-2 rounded mx-3 ">
            <div className="row justify-content-center">
              <img className="col-6  w-25 " src="21.png" alt="s" />
              <div className="col-6 ">
                <h4>Speakers</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-3  border border-black border-2 rounded">
            <div className="row justify-content-center">
              <img className="col-6  w-25" src="51.png" alt="s" />
              <div className="col-6 ">
                <h4>Dekstop</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-3  border border-black border-2 rounded mx-3">
            <div className="row justify-content-center ">
              <img className="col-6 w-25" src="81.png" alt="s" />
              <div className="col-6 ">
                <h4>DSLR camera</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-100 row  justify-content-center  mx-5 text-primary ">
          <div className="col-11 col-lg-3 border border-black border-2 rounded mx-3 ">
            <div className="row justify-content-center">
              <img className="col-6  w-25 " src="21.png" alt="s" />
              <div className="col-6 ">
                <h4>Speakers</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-3  border border-black border-2 rounded">
            <div className="row justify-content-center">
              <img className="col-6  w-25" src="51.png" alt="s" />
              <div className="col-6 ">
                <h4>Dekstop</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-3  border border-black border-2 rounded mx-3">
            <div className="row justify-content-center ">
              <img className="col-6 w-25" src="81.png" alt="s" />
              <div className="col-6 ">
                <h4>DSLR camera</h4>
                <h6>(6 items)</h6>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
