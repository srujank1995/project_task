
function Navbar({ role }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <i className="bi bi-kanban-fill"></i> AI TaskFlow
        </span>
        <span className="badge bg-dark">Role: {role}</span>
      </div>
    </nav>
  );
}

export default Navbar;
