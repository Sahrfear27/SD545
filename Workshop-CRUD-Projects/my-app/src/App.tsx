import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-2 text-white">
                Add
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
