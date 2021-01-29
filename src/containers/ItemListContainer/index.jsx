import ItemCountComponent from '../../components/ItemCount'
import './style.css'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2>{greeting}</h2>
            <ItemCountComponent stock={15}/>
        </> 
    )
}

export default ItemListContainer