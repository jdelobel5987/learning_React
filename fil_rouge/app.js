function Header() {
    const title = "la maison jungle";
    return(
        <h1>{title.toUpperCase()}</h1>
    )
}

function Description() {
    const description = "La Maison Jungle est une boutique en ligne spécialisée dans la vente de plantes d'intérieur et de décoration végétale. Nous proposons une large sélection de plantes, pots, accessoires et conseils pour vous aider à créer un intérieur verdoyant et harmonieux.";
    return(
    <p>{description}</p>
    )
}

function Image() {
    const imageUrl = "https://m.media-amazon.com/images/I/617HcycXHYL._AC_UF1000,1000_QL80_.jpg";
    return(
        <img src={imageUrl} alt="La Maison Jungle" width="50%" />
    )
}


function Banner() {
    return (<div>
        <Header />
        <Description />
        <Image />
    </div>)
}

function Cart() {
    const price = {
        "monstera": 8,
        "lierre": 10,
        "bouquet de fleurs": 15,
    }

    const title = "Mon panier";

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

function Page() {
    return (
        <div>
            <Banner />
            <Cart />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
