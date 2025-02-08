import ClassCounter from "./classComponent/ClassCounter"
import ClassProps from "./classComponent/ClassProps"
import OnClickEvent from "./Events/OnClickEvent"
import Form from "./HandleForm/Form"
import SingleFuncForm from "./HandleForm/SingleFuncForm"
import Counter from "./hook/Counter"
import RenderApi from "./hook/RenderApi"
import About from "./pages/About"
import Home from "./pages/Home"

const App = () => {
    return (
        <>
            {/* <Home />
            <About/>
            <Counter/> */}
            {/* <ClassCounter />
            <ClassProps/> */}
            {/* <RenderApi/> */}
            {/* <OnClickEvent/> */}
            <Form/>
            <SingleFuncForm/>
        </>
    )
}

export default App