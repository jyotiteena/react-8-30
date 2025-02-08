import CardUi from "../layout/CardUi"

const Home = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-3">
                        <CardUi title="title1" paragraph="para1" />
                    </div>
                    <div className="col-lg-3">
                        <CardUi title="title2" paragraph="para2" />
                    </div>
                    <div className="col-lg-3">
                        <CardUi paragraph="para3" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home