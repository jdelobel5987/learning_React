import '../styles/Banner.css';

function Banner({ children}) {
    return <div className="lmj-banner"> {children} </div>;
}

export default Banner; 
// export default allows to import without using curly braces