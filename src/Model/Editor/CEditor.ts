import IEditor from './IEditor';
import IShape from '../Shape/IShape';

class CEditor implements IEditor {
    private m_shapes: Array<IShape>;

    public constructor() {
        this.m_shapes = new Array<IShape>();
    }

    public AddShape(shape: IShape): void {
        const isFound = this.m_shapes.find(storedShape => shape.ID() === storedShape.ID());

        if (isFound) {
            throw new Error(`Shape with ID ${shape.ID()} already stored`);
        }

        this.m_shapes.push(shape);
    }

    public RemoveShape(id: string): void {
        this.m_shapes = this.m_shapes.filter(storedShape => storedShape.ID() !== id)
    }

    public Shapes(): Array<IShape> {
        return this.m_shapes;
    }
}

export default CEditor;