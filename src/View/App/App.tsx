import React from 'react';
import './App.css';
import Editor from '../Editor/Editor';
import CEditorController from '../../Controller/CEditorController';
import IShape from '../../Model/Shape/IShape';

type AppProps = {
    shapes: Array<IShape>;
    controller: CEditorController;
};

function App({ shapes, controller }: AppProps) {
    const moveShape = (id: string, deltaX: number, deltaY: number) => controller.MoveShape(id, deltaX, deltaY)

    return (
        <div className="app">
            <Editor shapes={shapes} moveShape={moveShape}/>
        </div>
    );
}

export default App;
