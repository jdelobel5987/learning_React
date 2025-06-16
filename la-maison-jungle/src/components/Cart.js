function Cart() {
    const title = "Mon panier";

    const price = {
        "monstera": 8,
        "lierre": 10,
        "bouquet de fleurs": 15,
    }

    return(
        <>
            <h2>{title}</h2>
            <ul>
                {Object.entries(price).map(([key, value]) => {
                    return (
                        <li key={key}>{key} - {value}€</li>
                    )
                })}
                <p>Total :&nbsp;
                    {/* reduce accumulateur + valeur courrante, acc initialisé à 0 */}
                    {Object.values(price).reduce((acc, curr) => acc + curr, 0)}€
                </p>
            </ul>
        </>
    )
}

export default Cart;