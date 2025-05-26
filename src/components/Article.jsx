export default function Article({ title }) {
  return (
    <div className="col-4">
      <div className="card h-100">
        <div className="card-body fw-bold">{title}</div>
      </div>
    </div>
  );
}
