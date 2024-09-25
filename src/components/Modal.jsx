import './Css/Modal.css'
import {ContextValues} from './Provider'
import Cartitem from './Cartitem'
function Modal(){
    const {state, setisOpen, isOpen}=ContextValues()
    const Total= state.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price*currentValue.qty),
        0,
      );
    return(
        <>
            <div onClick={()=>setisOpen(false)} className="outer">
            </div>
            <div className="inner">
                <p><button onClick={()=>setisOpen(false)}>X</button> Total: {Total}</p>
                {state.map(item=><Cartitem item={item} key={item.id}/>)}
            </div>
        </>
    )
}

export default Modal