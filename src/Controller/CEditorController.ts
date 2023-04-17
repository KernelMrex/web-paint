import IEditor from '../Model/Editor/IEditor';
import IShape from '../Model/Shape/IShape';

class CEditorController {
    private readonly editor: IEditor;

    constructor(editor: IEditor) {
        this.editor = editor;
    }

    public AddShape(shape: IShape): void {
        this.editor.AddShape(shape);
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
}

export default CEditorController;