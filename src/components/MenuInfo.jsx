import CoffeeShop from '../assets/images/CoffeeShop.svg'

export const MenuInfo = () => {
  return (
    <>
        <main className='MainBackGround'>
            <div className="MenuInfo">
                <img src={CoffeeShop} className="CoffeeShop" alt="CoffeeShop" />
            </div>
            <div className='MenuInfoFooter'></div>
        </main>
        <main className='MainButtons'>
            <div>
                <button>
                    <i className='HouseFood'/>
                </button>
                <span>PRODUCTOS</span>
            </div>
            <div>
                <button>
                    <i className='Promotion'/>
                </button>
                <span>PROMOCIONES</span>
            </div>
            <div>
                <button>
                    <i className='Car'/>
                </button>
                <span>CARRITO</span>
            </div>
        </main>
    </>
  )
}
