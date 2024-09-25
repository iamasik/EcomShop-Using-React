import './Css/Modal.css'
import { ContextValues } from './Provider'
function Cartitem({item}){
    const {Inc,Dec,Del,state}=ContextValues()
    return(
        <>
        <div className="item">
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className="Details">
                <p>{item.title} </p>
                <p>Price: {item.price}</p>
            </div>
            <div className="Control">
                <button className='Dec' onClick={()=>Dec(item.id)}>-</button>
                <span className='Qty'>
                    {item.qty}
                </span>
                <button className='Inc' onClick={()=>Inc(item.id)}>+</button>
            </div>
            <div className="Delete" onClick={()=>Del(item.id)}>
                <p>X</p>
            </div>
        </div>
        </>
    )
}
export default Cartitem