import { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")

    function submitData(e) {
        e.preventDefault()
        const user = { username, mobile };
        console.log(user)
        alert("form submitted")
    }
    return (
        <>
            <form className="col-lg-6 mx-auto my-5 p-5 shadow" method="post" onSubmit={submitData}>
                <div className="mt-4">
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="enter username" />
                </div>
                <div className="mt-4">
                    <input type="number" onChange={(e) => setMobile(e.target.value)} className="form-control" placeholder="enter username" />
                </div>
                <div className="mt-5">
                    <button className="btn btn-outline-success">submit</button>
                </div>
            </form>
        </>
    )
}

const username = "myname";
const mobile = "87686876";
const obj = {
    username: username,
    mobile: mobile
}
console.log(obj)

// when variable and key name same the can we pass as 
const obj2 = { username, mobile }
console.log(obj2)

export default Form
