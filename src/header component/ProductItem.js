export function ProductItem() {
  return (
    <>
      <div className="row justify-content-between m-3">
        <h1 className="col-5 mx-5">Popular Product</h1>
        <div className="col-9 col-md-7 col-xl-4 ">
          <button className="btn btn-outline-secondary mx-2">cameras</button>
          <button className="btn btn-outline-secondary mx-2">cameras</button>
          <button className="btn btn-outline-secondary mx-2">cameras</button>
          <button className="btn btn-outline-secondary mx-2">cameras</button>
        </div>
      </div>
      <CamerasList />
    </>
  );
}
function CamerasList() {
  return (
    <>
      <div className="row row-lg-2 row-xl-4">
        <div className="border border-dark rounded col-2 mx-5">
          <img src="Frame30.png" alt="a" />
          <h6>Play game</h6>
          <h6>$11,70</h6>
          <img src="Frame36.png " alt=" shopping" />
        </div>
        <div className="border border-dark rounded col-2 mx-5">
          <img src="Frame30.png" alt="a" />
          <h6>Play game</h6>
          <h6>$11,70</h6>
          <img src="Frame36.png " alt=" shopping" />
        </div>
        <div className="border border-dark rounded col-2 mx-5">
          <img src="Frame30.png" alt="a" />
          <h6>Play game</h6>
          <h6>$11,70</h6>
          <img src="Frame36.png " alt=" shopping" />
        </div>
        <div className="border border-dark rounded col-2 mx-5">
          <img src="Frame30.png" alt="a" />
          <h6>Play game</h6>
          <h6>$11,70</h6>
          <img src="Frame36.png " alt=" shopping" />
        </div>
      </div>
    </>
  );
}
