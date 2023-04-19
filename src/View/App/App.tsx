import './App.css';
import React from 'react';
import {v4 as uuid} from 'uuid';
import Editor from '../Editor/Editor';
import CEditorController from '../../Controller/CEditorController';
import IShape from '../../Model/Shape/IShape';
import Menu from '../Menu/Menu';
import CRectangle from '../../Model/Shape/CRectangle';
import CCircle from '../../Model/Shape/CCircle';
import CTriangle from '../../Model/Shape/CTriangle';

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
            leftTop: {x: 50, y: 50},
            height: 80,
            width: 80,
        });
        controller.AddShape(rect);
    }

    const addEllipse = () => {
        const circle = new CCircle(uuid(), {
            leftTop: {x: 50, y: 50},
            height: 80,
            width: 80,
        });
        controller.AddShape(circle);
    }

    const addTriangle = () => {
        const triangle = new CTriangle(uuid(), {
            leftTop: {x: 50, y: 50},
            height: 80,
            width: 80,
        });
        controller.AddShape(triangle);
    }

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
