import { useState } from "react";

const SingleFuncForm = () => {
    const [user, setUser] = useState({})
    function getInput(e) {


        const name = e.target.name;
        const value = e.target.value;

        //// when you want variable's value pass as a key in object then assign 

        // {[variable_name]:value}

        const newUser = {
            [name]: value
        }

        const finalData = Object.assign(user, newUser)

        // setUser({...user, ...newUser})
        setUser(finalData)
    }

    function signup(e) {
        e.preventDefault()
        console.log(user)
    }
    return (
        <>
            <form className="col-lg-6 mx-auto my-5 p-5 shadow" method="post" onSubmit={signup}>
                <div className="mt-4">
                    <input type="text" name="username" onChange={(e) => getInput(e)} className="form-control" placeholder="enter username" />
                </div>
                <div className="mt-4">
                    <input type="number" name="mobile" onChange={(e) => getInput(e)} className="form-control" placeholder="enter mobile" />
                </div>
                <div className="mt-5">
                    <button className="btn btn-outline-success">submit</button>
                </div>
            </form>
        </>
    )
}
export default SingleFuncForm
