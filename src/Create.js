import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import {  useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
       // dispatch(addUser({id: users[users.length - 1].id + 1, name, email }))
          dispatch(addUser({id: users[users.length - 1].id + 1, name, email }))
        console.log(addUser);
        navigate('/')
    }
    return (
        <div>
            <h1>Add new user</h1>
            <hr />
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="border rounded shadow justify-content-center align-item-center ">
                        <div className="p-4 bg-secondary text-white mb-4">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group m-3">
                                    <label for="exampleInputName" className="p-2">Name</label>
                                    <input type="text" name="name" onChange={e => setName(e.target.value)} class="form-control p-2" placeholder="Enter Name" />

                                </div>
                                <div class="form-group m-3">
                                    <label for="exampleInputEmail1" className="p-2">Email address</label>
                                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} class="form-control p-2" placeholder="Enter email" />
                                </div>

                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Create;