import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function HomeSearch() {
  return (
    <section className="card-sec d-flex p-4 justify-content-between">
      <div className="d-flex card-div">
        <div>
          <img src="logo 1.png" alt="logo" />
        </div>
        <div>
          <input placeholder="search" />
          <button>search</button>
        </div>
        <div>
          <img src="Vector2.png" alt="s" className="bg-ligth" />
        </div>
      </div>
      <Search />
    </section>
  );
}
function Search() {
  return (
    <div className="d-flex text-light card-last">
      <div className="d-flex card-last-div">
        <div>
          <img src="user.png" alt="user" />
          Sign in
        </div>
        <div>
          <img src="heart.png" alt="heart" />0
        </div>
        <div>
          <img src="shopping-cart.png" alt="shopping-cart" />0
        </div>
      </div>
    </div>
  );
}
