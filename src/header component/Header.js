export function Header() {
  return (
    <>
      <header className="container-fluid" style={{ color: "#292D32" }}>
        <div className="row justify-content-between text-center">
          <h5 className="col-6 col-md-4">
            Need help? Call us: (+98) 0234 456 789
          </h5>
          <h5 className="col-6 col-md-4">
            <img src="Vector.png" alt="location" className="mx-3" />
            Our store
            <img src="group.png" alt="car" className="mx-3" />
            Track your order
          </h5>
        </div>
      </header>
      <Search />
    </>
  );
}
function Search() {
  return (
    <div
      className="container-fluid text-light row align-items-center"
      style={{ backgroundColor: "#003F62" }}>
      <img src="logo 1.png" alt="electron " className="col-6 col-md-2" />
      <form className="col-6  ">
        <input placeholder="search" className="border-0 rounded-4 " />
        <button className="border-0 rounded-4">search</button>
      </form>

      <h4 className="col-12 col-md-4"></h4>
    </div>
  );
}
