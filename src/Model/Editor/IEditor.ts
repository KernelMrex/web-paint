import IShape from '../Shape/IShape';
import Frame from '../Common/Frame';

interface IEditor {
    Shapes(): Array<IShape>;

    AddShape(shape: IShape): void;

    RemoveShape(id: string): void;

    UpdateShapeFrame(id: string, updateCb: (frame: Frame) => Frame): void;

    Subscribe(subscriber: () => void): void;
}

export default IEditor;