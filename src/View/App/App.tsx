import './App.css';
import React from 'react';
import Editor from '../Editor/Editor';
import CEditorController from '../../Controller/CEditorController';
import IShape from '../../Model/Shape/IShape';
import Menu from '../Menu/Menu';
import ShapeType from "../../Model/Shape/ShapeType";

type AppProps = {
    shapes: Array<IShape>;
    controller: CEditorController;
};

function App({ shapes, controller }: AppProps) {
    const moveShape = (id: string, deltaX: number, deltaY: number) => controller.MoveShape(id, deltaX, deltaY);
    const removeShape = (id: string) => controller.RemoveShape(id)
    const resizeShape = (id: string, width: number, height: number) => controller.ResizeShape(id, width, height)

    const addRectangle = () => controller.CreateShape(ShapeType.RECTANGLE);
    const addEllipse = () => controller.CreateShape(ShapeType.CIRCLE);
    const addTriangle = () => controller.CreateShape(ShapeType.TRIANGLE);

    return (
        <div className="app">
            <div className="app__menu">
                <Menu addRectangle={ addRectangle }
                      addEllipse={ addEllipse }
                      addTriangle={ addTriangle } />
            </div>
            <div className="app__editor">
                <Editor shapes={shapes}
                        moveShape={moveShape}
                        removeShape={removeShape}
                        resizeShape={resizeShape} />
            </div>
        </div>
    );
}

export default App;
