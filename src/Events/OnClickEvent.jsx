const OnClickEvent = () => {
    function add() {
        alert("hello")
    }

    const calc = (number) => {
        alert(number)
    }

    return (
        <>
            <div className="col-lg-6 mx-auto my-4 shadow p-5">
                <h1>click event</h1>

                {/* /// without argument */}
                <button onClick={add} className="btn btn-outline-success">click here</button>


                {/* //// with argument or parameter */}
                <button onClick={() => calc(1)} className="btn btn-outline-success">1</button>
                <button onClick={() => calc(2)} className="btn btn-outline-success">2</button>
                <button onClick={() => calc(3)} className="btn btn-outline-success">3</button>
                <button onClick={() => calc(4)} className="btn btn-outline-success">4</button>

            </div>

        </>
    )
}

export default OnClickEvent