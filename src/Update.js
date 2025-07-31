import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./UserReducer";

const Update =()=>{
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const exitingUser = users.filter(f => f.id === id);
    const {name, email} = exitingUser[0];

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

   const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleUpdate = (event)=>{
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/');
    }

    return(
        <div>
        <h1>Update user</h1>
        <hr />
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div className="border rounded shadow justify-content-center align-item-center ">
                    <div className="p-4 bg-secondary text-white mb-4">
                        <form onSubmit={handleUpdate}>
                            <div class="form-group m-3">
                                <label for="exampleInputEmail1" className="p-2">Name</label>
                                <input type="text" name="name" value={uname} onChange={e => setName(e.target.value)} class="form-control p-2" placeholder="Enter Name" />

                            </div>
                            <div class="form-group m-3">
                                <label for="exampleInputEmail1" className="p-2">Email address</label>
                                <input type="email" name="email" value={uemail} onChange={e => setEmail(e.target.value)} class="form-control p-2" placeholder="Enter email" />
                            </div>

                            <button type="submit" class="btn btn-primary mt-4">Update</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    )
}


export default Update;