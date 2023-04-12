import IShape from '../Shape/IShape';

interface IEditor {
    Shapes(): Array<IShape>;

    AddShape(shape: IShape): void;

    RemoveShape(id: string): void;
}

export default IEditor;