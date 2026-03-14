
function TaskCard({ task, onComplete }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5>{task.name}</h5>
          <span className="badge bg-warning text-dark">{task.priority}</span>

          <p className="small text-muted mt-2">
            {task.timeFrom} - {task.timeTo}
          </p>

          <button
            className="btn btn-success btn-sm"
            onClick={() => onComplete(task.id)}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
