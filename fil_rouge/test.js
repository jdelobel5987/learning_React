function Header() {
  return(<h1>TEST Maison Jungle</h1>);
}

const divRoot = document.getElementById('root');
console.log(divRoot.innerText);
const root = ReactDOM.createRoot(divRoot);
root.render(<Header />);