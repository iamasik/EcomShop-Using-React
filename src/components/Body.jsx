import Products from './Products'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Css/style.css'
import { ContextValues } from './Provider'
function Body(){
    const {Items,Error, isLoaded}=ContextValues()
    return(
        <>
            <ToastContainer/>
            <div className='Container'>
                {isLoaded && <div className='Loading'><h1>Loading...</h1></div>}
                {Error && <div className='Error'><h1>Something is wrong!!!</h1></div>}
                <div className='ProductBox'>
                    {Items && Items.map(item=><Products key={item.id} item={item}/>)}
                </div>
            </div>
        </>
    )
}

export default Body