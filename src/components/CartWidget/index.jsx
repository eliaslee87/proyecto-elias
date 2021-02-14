import cartlogo from './icon.svg'

const CartWidgetComponent = () => {
    return (
        <a href="/#">
            <img src={cartlogo} className="d-inline-block align-bottom" style={{filter: "invert(99%) sepia(10%) saturate(360%) hue-rotate(60deg) brightness(111%) contrast(100%)"}} width="23" height="23" alt="Carrito"/>
        </a>
    )
}

export default CartWidgetComponent