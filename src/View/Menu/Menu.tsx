import './Menu.css';

type MenuProps = {
    addRectangle: () => void;
    addEllipse: () => void,
    addTriangle: () => void,
}

function Menu({ addRectangle, addEllipse, addTriangle }: MenuProps) {
    return (
        <div className="menu">
            <div className="menu__section">
                <button onClick={ addRectangle }>Rectangle</button>
                <button onClick={ addEllipse }>Circle</button>
                <button onClick={ addTriangle }>Triangle</button>
            </div>
        </div>
    );
}

export default Menu;