console.log(React);

/*replace #app element*/
ReactDOM.render(
    <h1>React is working here!</h1>,
    document.getElementById('app')
)

/*replace #root element with a function = React functional component*/
function MyComponent() {
    return <h2>This is a REACT functional component ✨</h2>;
}
ReactDOM.render(<MyComponent />, document.getElementById('root'));

/* ReactDOM.render() is deprecated in React 18+
it is recommended to use ReactDOM.createRoot() instead */
const appRoot = ReactDOM.createRoot(document.getElementById('app'));
appRoot.render(<h1>React 18 is at work here 🚀</h1>);

function MyComponent2() {
    return <h2>This is a REACT18 functional component 🎇</h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent2 />);