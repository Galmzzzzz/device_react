import "./cart.css"
import { Link } from "react-router-dom"
import Items from "./items";
export default function Cart(){
     const data = [
        {
            name: 'Смартфон XYZ',
            price: '999'
        },
        {
            name: 'Ноутбук ABC',
            price: '1999'
        },
        {
            name: 'Беспроводные наушники DEF',
            price: '99'
        }
    ]
        
        
    
    return(
                <>
                <header>
                <div className="header-container">
                    <h1>DeviceShop</h1>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>Каталог</Link></li>
                            <li><a href="#">Акции</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        
            <main>
                <section className="cart">
                    <h2>Ваша корзина</h2>
        
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Количество</th>
                                <th>Цена за единицу</th>
                                <th>Всего</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        {data.map((item)=>(
                            <Items key={item} {...item}></Items>
                        ))}
                    </table>
        
                    <div className="cart-summary">
                        <p>Общая стоимость: <span>510 000 тг</span></p>
                        
                        <Link to={'/order'}><button className="checkout-btn">Оформить Заказ</button></Link>
                    </div>
                </section>
            </main>
        
            <footer>
                <p>&copy; 2024 DeviceShop</p>
            </footer>
                </>
            )
}