// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ];

// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (
//                 <li key={{plant}-{index}} >{plant}</li>
//             ))}
//         </ul>
//     )
// }

import { plantList } from '../data/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';
import '../styles/PlantItem.css';


function ShoppingList({CareScale}) {

    const categories = plantList.reduce((acc, curr) => {    // acc = accumulateur (initialisé comme [], curr = valeur courante)
        if (!acc.includes(curr.category)) {
            acc.push(curr.category)
        }
        return acc;
    }, []);


	return (
        <>
            <h1>Liste de courses</h1>

            <h2>Catégories de plantes :</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>

            <h2>Liste des plantes</h2>
            <ul className="lmj-plant-list">
                {plantList.map(({name, cover, id, isSpecialOffer,light, water}) => (
                    <PlantItem 
                        name={name} 
                        cover={cover} 
                        id={id} 
                        isSpecialOffer={isSpecialOffer}
                        light={light} 
                        water={water} 
                    />
                ))}
            </ul>
        </>
    )
}

export default ShoppingList;