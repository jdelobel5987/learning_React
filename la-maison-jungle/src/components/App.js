// import logo from '../logo.svg';
// import '../App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Welcome to React 🎆</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import Banner from './Banner';
import logo from '../assets/logo.png';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

const title = "La maison jungle";

function App() {
  return <>
    <Banner>
        <img src={logo} alt="logo de la maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>
    </Banner>
    <Cart />
    <ShoppingList />
  </>
}

export default App;