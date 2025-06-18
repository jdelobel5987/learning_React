import "../styles/Cart.css";

function Cart() {
    const title = "Mon panier";

    const price = {
        "Monstera": 8,
        "Lierre": 10,
        "Bouquet de fleurs": 15,
    }

    return(
        <div className="lmj-cart">
            <h2>{title}</h2>
            <ul>
                {Object.entries(price).map(([key, value]) => {
                    return (
                        <li key={key}>{key} - {value}€</li>
                    )
                })}
            </ul>
            <p>Total :&nbsp;
                {/* reduce accumulateur + valeur courrante, acc initialisé à 0 */}
                {Object.values(price).reduce((acc, curr) => acc + curr, 0)}€
            </p>
        </div>
    )
}

export default Cart;