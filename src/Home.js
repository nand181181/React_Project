
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";
function Home(){
    const users = useSelector((state) => state.users);
    console.log(users);

    const dispatch = useDispatch();
    const handleDelete =(id)=>{
        dispatch(deleteUser({id: id}));
    }
    return(
        <div>
            <h1>User List</h1>
            <Link to="Create" className="btn btn-primary m-3">Create +</Link>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>(
    <tr key={index}>      
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/edit/${user.id}`} className="btn btn-sm bg-primary text-white m-1">Edit</Link>
        <button onClick={()=> handleDelete(user.id)} className="btn btn-sm bg-danger text-white m-1">Delete</button>
      
      </td>
    </tr>
        ))
    }
  </tbody>
</table>
        </div>
    )
}
export default Home
