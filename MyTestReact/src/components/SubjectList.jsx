import "./SubjectList.css";

export default function SubjectList({ data }) {
  console.table(data);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Credits</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((item) => (
          <tr key={item.ID}>
            <td>{item.ID}</td>
            <td>{item.name}</td>
            <td>{item.credits}</td>
          </tr>
        ))}
      </tbody>
    </table>


  <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Credits</th>
        </tr>
      </thead>

   <tbody>
    {data
        ?.filter(item => item.credits >= 3)
        .map(item => (
        <tr key={item.ID}>
            <td>{item.ID}</td>
            <td>{item.name}</td>
            <td>{item.credits}</td>
        </tr>
        ))}
    </tbody>

    </table>



    </>
  );
}
