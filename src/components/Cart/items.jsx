export default function Items(props) {
    console.log(props)
    return (
        <tbody>
            
            <tr>
                <td>{props.name}</td>
                <td><input type="number" value="1" min="1" /></td>
                <td>{props.price}</td>
                <td>{props.price}</td>
                <td><button className="remove-btn">Удалить</button></td>
            </tr>
        </tbody>
    );
}
