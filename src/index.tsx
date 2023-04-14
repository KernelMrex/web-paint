import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './View/App/App';
import reportWebVitals from './reportWebVitals';
import CEditor from './Model/Editor/CEditor';
import CEditorController from './Controller/CEditorController';
import CRectangle from './Model/Shape/CRectangle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const editor = new CEditor();
const controller = new CEditorController(editor);

controller.AddShape(new CRectangle('a', {
    leftTop: {x: 50, y: 70},
    height: 20,
    width: 40,
}));

controller.AddShape(new CRectangle('b', {
    leftTop: {x: 400, y: 600},
    height: 50,
    width: 50,
}));

function render() {
    root.render(
        <React.StrictMode>
            <App controller={controller} shapes={editor.Shapes()}/>
        </React.StrictMode>
    );
}

editor.Subscribe(render);
render();

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
