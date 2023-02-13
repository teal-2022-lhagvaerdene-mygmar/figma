import { AdminNavbar } from "./AdminNavbar";

export function Header() {
  return (
    <>
      <header
        className="container-fluid"
        style={{ color: "#292D32", padding: 30 }}>
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
      <AdminNavbar />
    </>
  );
}
function Search() {
  return (
    <>
      <div
        className="container-fluid text-light  py-4 d-flex"
        style={{ backgroundColor: "#003F62" }}>
        <img
          src="logo 1.png"
          alt="electron "
          height={40}
          width={140}
          style={{ marginLeft: 120 }}
        />
        <form className="mx-5">
          <input
            placeholder="Search any things"
            className="border-0 rounded-4 "
            style={{
              width: 440,
              height: 54,
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 21,
            }}
          />
          <button
            className="border-0 rounded-4 text-light "
            style={{
              height: 54,
              width: 156,
              position: "relative",
              right: 156,
              fontSize: 18,
              backgroundColor: "#EDA415",
            }}>
            search
          </button>
        </form>

        <div>
          <h4>
            <img src="user.png " alt="user" /> sign in
            <img src="heart.png" alt="heart" className="mx-3" />
            <img
              src="0.png"
              alt="0"
              className="bg-warning rounded-2"
              width={10}
            />
            <img src="shopping-cart.png" alt="shopping" className="mx-3" />
            <img
              src="0.png"
              alt="0"
              className="bg-warning rounded-2"
              width={10}
            />
          </h4>
        </div>
      </div>
    </>
  );
}
