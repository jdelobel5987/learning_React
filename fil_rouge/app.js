function Header() {
    const title = "La Maison Jungle";
    return(
        <h1>{title}</h1>
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
        <img src={imageUrl} alt="La Maison Jungle" />
    )
}

function Banner() {
    return (<div>
        <Header />
        <Description />
        <Image />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Banner />);
