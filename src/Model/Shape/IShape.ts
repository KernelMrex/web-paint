import Frame from '../Common/Frame';
import ShapeType from './ShapeType';

interface IShape {
    ID(): string;

    Type(): ShapeType;

    Frame(): Frame;

    SetFrame(frame: Frame): void;
}

export default IShape;