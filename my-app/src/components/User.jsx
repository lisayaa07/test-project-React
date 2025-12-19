 import f from "../assets/huhu.png"
 import m from "../assets/love.png"
 
export default function User({item,deleteUser}) {
    return(
        <>
        <li
         style={{
            borderStyle:"solid",
            borderColor: item.gender == "male" ? "blue" : "pink"
         }}
         >
            <img src={ item.gender == "male" ? m : f} width={50} height={50} />
            <p> { item.name}</p>

          <div className="control">
            <button onClick={()=>deleteUser(item.id)}>delete</button>
          </div>
          </li>
    

        </>
    )
}