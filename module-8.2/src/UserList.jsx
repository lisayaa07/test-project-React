import useFetch from "./useFetch";
import "./UserList.css"
export default function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul  className="user-list">
      {data.map(user => (
        <li  key={user.id} className="user-card">
          ชื่อ : {user.name}<br></br>
          อีเมล : {user.email}<br></br>
          โทร : {user.phone}<br></br>
          เว็บไซต์ : {user.website}</li>
      ))}
    </ul>
  );
}
