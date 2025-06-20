import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({ name, cover, id, isSpecialOffer, light, water }) {
    return (
        <li key={id} className="lmj-plant-item">
            <img src={cover} alt={"plante {name}"} className="lmj-plant-item-cover" />
            {name}
            {isSpecialOffer ? <span className="lmj-sales">Soldes</span> : ""}
            <CareScale careType="light" scaleValue={light} />
            <CareScale careType="water" scaleValue={water} />
        </li>

    )
}

export default PlantItem;