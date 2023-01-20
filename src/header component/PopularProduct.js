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
    </section>
  );
}
