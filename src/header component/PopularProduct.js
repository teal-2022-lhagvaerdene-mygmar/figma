export function PopularProduct() {
  return (
    <section className="container-fluid px-5 my-5">
      <div className="d-flex justify-content-between">
        <div>
          <h1>Popular product</h1>
        </div>
        <div>
          <button className="btn btn-outline-secondary item"> Cameras</button>
          <button className="btn btn-outline-secondary item">Laptops</button>
          <button className="btn btn-outline-secondary item"> Tablets</button>
          <button className="btn btn-outline-secondary item">Mouse</button>
        </div>
      </div>
      <Item />
    </section>
  );
}
function Item() {
  return (
    <>
      <div className="head-product">
        <div className="product">
          <img src="camera 1.png" alt="camera" />
          <img src="Frame28.png" alt="frame" />
          <h4>Camera</h4>
          <h5>$11.70</h5>
          <img src="Frame36.png" alt="frame36" />
        </div>
        <div className="product">
          <img src="camera 1.png" alt="camera" />
          <img src="Frame28.png" alt="frame" />
          <h4>Camera</h4>
          <h5>$11.70</h5>
          <img src="Frame36.png" alt="frame36" />
        </div>
        <div className="product">
          <img src="camera 1.png" alt="camera" />
          <img src="Frame28.png" alt="frame" />
          <h4>Camera</h4>
          <h5>$11.70</h5>
          <img src="Frame36.png" alt="frame36" />
        </div>
        <div className="product">
          <img src="camera 1.png" alt="camera" />
          <img src="Frame28.png" alt="frame" />
          <h4>Camera</h4>
          <h5>$11.70</h5>
          <img src="Frame36.png" alt="frame36" />
        </div>
      </div>
    </>
  );
}
