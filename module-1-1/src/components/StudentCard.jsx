export default function StudentCard({ data }) {
  return (
    <div className="card-container">
      {data?.map((item) => (
        <div className="card" key={item.studentID}>
          <img
            src={item.image}
            alt={item.name}
            width={250}
            height={250}
          />

          <p><b>ID:</b> {item.studentID}</p>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Major:</b> {item.major}</p>

          {item.gpa < 2.0 ? (
            <p>
              <b>GPA:</b> {item.gpa} <span style={{ color: "red" }}>(Probation)</span>
            </p>
          ) : (
            <p><b>GPA:</b> {item.gpa}</p>
          )}
        </div>
      ))}
    </div>
  );
}
