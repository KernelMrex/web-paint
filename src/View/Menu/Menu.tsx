type MenuProps = {
    addRectangle: () => void
}

function Menu({ addRectangle }: MenuProps) {
    return (
        <div>
            <button onClick={ () => {
                addRectangle();
            } }>Rectangle</button>
        </div>
    );
}

export default Menu;