import IEditor from './IEditor';
import IShape from '../Shape/IShape';
import Frame from '../Common/Frame';

class CEditor implements IEditor {
    private m_shapes: Array<IShape>;
    private m_subscribers: (() => void)[]

    public constructor() {
        this.m_shapes = new Array<IShape>();
        this.m_subscribers = new Array<() => void>();
    }

    public AddShape(shape: IShape): void {
        const isFound = this.FindByShapeID(shape.ID());

        if (isFound) {
            throw new Error(`Shape with ID ${shape.ID()} already stored`);
        }

        this.m_shapes.push(shape);
        this.Notify();
    }

    public RemoveShape(id: string): void {
        this.m_shapes = this.m_shapes.filter(storedShape => storedShape.ID() !== id)
        this.Notify();
    }

    public Shapes(): Array<IShape> {
        return this.m_shapes;
    }

    public UpdateShapeFrame(id: string, updateCb: (frame: Frame) => Frame): void {
        const shape = this.FindByShapeID(id)
        if (!shape) {
            throw new Error(`Shape with ID ${id} not found`);
        }

        shape.SetFrame(updateCb(shape.Frame()));
        this.Notify();
    }

    public Subscribe(subscriber: () => void): void
    {
        this.m_subscribers.push(subscriber);
    }

    private FindByShapeID(id: string): IShape|null {
        return this.m_shapes.find(storedShape => id === storedShape.ID()) ?? null;
    }

    private Notify(): void {
        this.m_subscribers.forEach(sub => sub());
    }
}

export default CEditor;