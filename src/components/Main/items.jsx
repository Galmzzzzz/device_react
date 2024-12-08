export default function Catalog(props) {
    return (
      <section className="catalog">
        <div className="product">
          <img src="smartphone.jpg" alt="Смартфон" />
          <h3>{props.name}</h3>
          <p>Цена: {props.price} тг</p>
          <button onClick={() => alert('Товар добавлен в корзину')}>Купить</button>
        </div>
      </section>
    );
  }
  