import '/src/styles/boton.css'

export const Boton = ({ texts }) => {
    return (
        <div className="container">
            <div className="row">
                <button>{texts[0]}</button>
                <button>{texts[1]}</button>
            </div>
            <div className="row">
                <button>{texts[2]}</button>
                <button>{texts[3]}</button>
            </div>
        </div>
    );
};
