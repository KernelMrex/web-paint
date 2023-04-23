import IEditor from '../Model/Editor/IEditor';
import IShape from '../Model/Shape/IShape';
import ShapeType from "../Model/Shape/ShapeType";
import CCircle from "../Model/Shape/CCircle";
import {v4 as uuid} from "uuid";
import CRectangle from "../Model/Shape/CRectangle";
import CTriangle from "../Model/Shape/CTriangle";

class CEditorController {
    private readonly editor: IEditor;

    constructor(editor: IEditor) {
        this.editor = editor;
    }

    public CreateShape(type: ShapeType): void {
        this.editor.AddShape(this.CreateShapeByType(type));
    }

    public RemoveShape(id: string): void {
        this.editor.RemoveShape(id);
    }

    public MoveShape(id: string, deltaX: number, deltaY: number): void {
        this.editor.UpdateShapeFrame(id, frame => ({
            ...frame,
            leftTop: {
                x: frame.leftTop.x + deltaX,
                y: frame.leftTop.y + deltaY,
            }
        }))
    }

    public ResizeShape(id: string, newWidth: number, newHeight: number): void {
        this.editor.UpdateShapeFrame(id, frame => ({
            ...frame,
            width: newWidth,
            height: newHeight,
        }));
    }

    private CreateShapeByType(shapeType: ShapeType): IShape {
        switch (shapeType) {
            case ShapeType.CIRCLE:
                return new CCircle(uuid(), {
                    leftTop: {x: 50, y: 50},
                    height: 80,
                    width: 80,
                });
            case ShapeType.RECTANGLE:
                return new CRectangle(uuid(), {
                    leftTop: {x: 50, y: 50},
                    height: 80,
                    width: 80,
                });
            case ShapeType.TRIANGLE:
                return new CTriangle(uuid(), {
                    leftTop: {x: 50, y: 50},
                    height: 80,
                    width: 80,
                });
        }
    }
}

export default CEditorController;