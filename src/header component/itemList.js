import { Container } from "react-bootstrap";
import "./App.css";
export function ItemList() {
  return (
    <Container className="d-flex justify-content-between my-5">
      <div>
        <div style={{ width: 175, height: 120 }}>
          <h2>Canon camera</h2>
        </div>
        <div className="my-5">
          <button
            className="btn btn-warning text-light"
            style={{ width: 140, height: 60, borderRadius: 30 }}>
            Shop now
          </button>
          <button
            className="btn btn-outline-primary mx-3"
            style={{ width: 140, height: 60, borderRadius: 30 }}>
            view more
          </button>
        </div>
      </div>
      <div>
        <img src="81.png" alt="canon" />
        <div
          className="rounded-circle bg-warning card-circle me-auto fw-bolder font-monospace"
          style={{ width: 120, height: 115 }}>
          <h3>only $89</h3>
        </div>
      </div>
    </Container>
  );
}
