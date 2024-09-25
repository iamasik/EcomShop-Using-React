import './Css/Product.css'
import { MdStarRate, MdPerson4 } from "react-icons/md";
import { toast  } from 'react-toastify';
import { ContextValues } from './Provider';
function Products({item}){
    const {state,AddData}=ContextValues()

    function SubmitData(){
        for (let key of state) {
            
            if(key.id==item.id){
                toast.error('This item already in the cart', {autoClose:2000, theme: "dark", hideProgressBar: true})
                return
            }
          }
        const cartinfo={
            id:item.id,
            title:item.title,
            price:item.price,
            qty:1,
            img:item.image
        }
        AddData(cartinfo)
        toast.info('Item Added.',{autoClose:2000, theme: "dark", position: "bottom-right", hideProgressBar: true})
    }
    return(
        <div className="ProdCard">
            <div className='imgBox'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='Rate'>
                <span><MdStarRate /> {item.rating.rate}</span>
                <span><MdPerson4 /> {item.rating.count}</span>
            </div>
            <p className="Category">{item.category}</p>
            <p className="Title">{item.title}</p>
            <p className="Price"><span>Price: </span>${item.price}</p>
            <button onClick={()=>SubmitData()}>Add to Cart</button>
        </div>
    )
}

export default Products