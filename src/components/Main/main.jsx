import './styles.css';
import { Link } from 'react-router-dom';
export default function Main() {
    return (
        <div>
            <header>
                <div className="header-container">
                    <h1>DeviceShop</h1>
                    <p>Продажа и доставка современных девайсов</p>
                    <nav>
                        <ul>
                            <li><a href="#">Каталог</a></li>
                            <li><a href="#">Акции</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                    <Link to="/cart">
                        <button className="buy-btn">Корзина</button>
                    </Link>
                </div>
            </header>

            <main>
                <section className="catalog">
                    <h2>Каталог товаров</h2>
                    <div className="product">
                        <img src="smartphone.jpg" alt="Смартфон" />
                        <h3>Смартфон XYZ</h3>
                        <p>Цена: 120 000 тг</p>
                        <button onClick={() => alert('Товар добавлен в корзину')}>Купить</button>
                    </div>
                    <div className="product">
                        <img src="laptop.jpg" alt="Ноутбук" />
                        <h3>Ноутбук ABC</h3>
                        <p>Цена: 300 000 тг</p>
                        <button onClick={() => alert('Товар добавлен в корзину')}>Купить</button>
                    </div>
                    <div className="product">
                        <img src="headphones.jpg" alt="Наушники" />
                        <h3>Беспроводные наушники</h3>
                        <p>Цена: 45 000 тг</p>
                        <button onClick={() => alert('Товар добавлен в корзину')}>Купить</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
