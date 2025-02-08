import { Component } from "react";
import cardData from "../layout/cardData";
import ClassCardUi from "./ClassCardUi";

class ClassProps extends Component {
    render() {
        return (
            <div className="container">
                <h1>About us</h1>
                <div className="row">
                    {
                        cardData.map((ele, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                                    <ClassCardUi title={ele.title} paragraph={ele.para} image={ele.cardImg} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ClassProps