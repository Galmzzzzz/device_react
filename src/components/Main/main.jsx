import './styles.css';
import { Link } from 'react-router-dom';
import { data } from "../../data.js";
import Catalog from './items.jsx';

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

            <h2>Каталог товаров</h2>

            <div className="catalog">
                {data.map((item) => (
                    <Catalog key={item.name} {...item} />
                ))}
            </div>
        </div>
    );
}
