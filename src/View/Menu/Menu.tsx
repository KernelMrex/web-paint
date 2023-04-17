type MenuProps = {
    addRectangle: () => void;
    addEllipse: () => void,
    addTriangle: () => void,
}

function Menu({ addRectangle, addEllipse, addTriangle }: MenuProps) {
    return (
        <div>
            <button onClick={ addRectangle }>Rectangle</button>
            <button onClick={ addEllipse }>Circle</button>
            <button onClick={ addTriangle }>Triangle</button>
        </div>
    );
}

export default Menu;