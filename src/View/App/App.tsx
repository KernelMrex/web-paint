import './App.css';
import React from 'react';
import { v4 as uuid } from 'uuid';
import Editor from '../Editor/Editor';
import CEditorController from '../../Controller/CEditorController';
import IShape from '../../Model/Shape/IShape';
import Menu from '../Menu/Menu';
import CRectangle from '../../Model/Shape/CRectangle';

type AppProps = {
    shapes: Array<IShape>;
    controller: CEditorController;
};

function App({ shapes, controller }: AppProps) {
    const moveShape = (id: string, deltaX: number, deltaY: number) => controller.MoveShape(id, deltaX, deltaY);
    const removeShape = (id: string) => controller.RemoveShape(id)
    const resizeShape = (id: string, width: number, height: number) => controller.ResizeShape(id, width, height)

    const addRectangle = () => {
        const rect = new CRectangle(uuid(), {
            leftTop: {x: 50, y: 70},
            height: 20,
            width: 40,
        });

        controller.AddShape(rect);
    }

    return (
        <div className="app">
            <Menu addRectangle={ addRectangle } />
            <Editor
                shapes={shapes}
                moveShape={moveShape}
                removeShape={removeShape}
                resizeShape={resizeShape}
            />
        </div>
    );
}

export default App;
