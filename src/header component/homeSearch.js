import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function HomeSearch() {
  return (
    <section className="card-sec">
      <div>
        <img src="logo 1.png" alt="logo" />
      </div>
      <Search />
      <div>
        <img src="Vector2.png" alt="s" className="bg-ligth" />
      </div>
    </section>
  );
}
function Search() {
  return (
    <div>
      <input placeholder="search" />
      <button>search</button>
    </div>
  );
}
