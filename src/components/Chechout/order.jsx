import './oreder.css'
import { Link } from 'react-router-dom';


export default function Order() {
    return (
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
                    <Link to={'/cart'} className="buy-btn">Корзина</Link>
                    
                </div>
            </header>

            <div className="checkout-container">
                <h2>Оплата заказа</h2>

                {/* Order Summary */}
                <div className="order-summary">
                    <h3>Итоги заказа</h3>
                    <p>Товар 1: 100 000 тг</p>
                    <p>Товар 2: 50 000 тг</p>
                    <p><strong>Итого: 150 000 тг</strong></p>
                </div>

                {/* Payment Form */}
                <form action="/payment-process" method="POST">

                    <label htmlFor="full-name">ФИО</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Введите ваше полное имя" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Введите ваш email" required />

                    <label htmlFor="phone">Телефон</label>
                    <input type="tel" id="phone" name="phone" placeholder="Введите ваш номер телефона" required />

                    <label htmlFor="address">Адрес доставки</label>
                    <input type="text" id="address" name="address" placeholder="Введите ваш адрес" required />

                    {/* Payment Methods */}
                    <div className="payment-methods">
                        <label><input type="radio" name="payment-method" value="credit-card" defaultChecked /> Банковская карта</label>
                        <label><input type="radio" name="payment-method" value="paypal" /> PayPal</label>
                        <label><input type="radio" name="payment-method" value="cash" /> Наличные при доставке</label>
                    </div>

                    <button type="submit" className="checkout-btn">Подтвердить и оплатить</button>
                </form>
            </div>

            <footer>
                <p>&copy; 2024 DeviceShop</p>
            </footer>
        </>
    );
}
