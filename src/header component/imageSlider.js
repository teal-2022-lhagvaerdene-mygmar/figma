import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <Container>
          <div className="d-flex imageslide">
            <div className="image-fx">
              <div>
                <img src="21.png" alt="First slide" />
              </div>
              <div>
                <h3>Speaker</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
            <div className="image-fx">
              <div>
                <img
                  className=""
                  width={110}
                  height={120}
                  src="51.png"
                  alt="First slide1"
                />
              </div>
              <div>
                <h3>Dekstop and laptop</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
            <div className="image-fx">
              <div>
                <img
                  className=""
                  width={110}
                  height={120}
                  src="81.png"
                  alt="First slide2"
                />
              </div>

              <div>
                <h3>DSLR camera</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <div className="d-flex imageslide">
            <div className="image-fx">
              <div>
                <img src="21.png" alt="First slide" />
              </div>
              <div>
                <h3>Speaker</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
            <div className="image-fx">
              <div>
                <img
                  className=""
                  width={110}
                  height={120}
                  src="51.png"
                  alt="First slide1"
                />
              </div>
              <div>
                <h3>Dekstop and laptop</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
            <div className="image-fx">
              <div>
                <img
                  className=""
                  width={110}
                  height={120}
                  src="81.png"
                  alt="First slide2"
                />
              </div>

              <div>
                <h3>DSLR camera</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <div className="d-flex imageslide">
            <div className="image-fx">
              <div>
                <img src="21.png" alt="First slide" />
              </div>
              <div>
                <h3>Speaker</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
            <div className="image-fx">
              <div>
                <img
                  className=""
                  width={110}
                  height={120}
                  src="51.png"
                  alt="First slide1"
                />
              </div>
              <div>
                <h3>Dekstop and laptop</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
            <div className="image-fx">
              <div>
                <img
                  className=""
                  width={110}
                  height={120}
                  src="81.png"
                  alt="First slide2"
                />
              </div>
              <div>
                <h3>DSLR camera</h3>
                <h4 className="mx-4 my-4">(6 items)</h4>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
