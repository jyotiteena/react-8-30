// const CardUi = (props) => {
//     console.log(props)
//     return (
//         <>
//             <div className="card shadow border-0">
//                 <img src={props.image ?? "images/avatar.avif"} alt="" height={320} />
//                 <div className="card-body">
//                     <h1>{props.title ?? "dummy title"}</h1>
//                     <p>{props.paragraph ?? "dummy paragraph"}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

const CardUi = ({ title, paragraph, image }) => {
    return (
        <>
            <div className="card shadow border-0">
                <img src={image ?? "images/avatar.avif"} alt="" height={320} />
                <div className="card-body">
                    <h1>{title ?? "dummy title"}</h1>
                    <p>{paragraph ?? "dummy paragraph"}</p>
                </div>
            </div>
        </>
    )
}

export default CardUi