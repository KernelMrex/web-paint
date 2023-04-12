import CAbstractShape from './CAbstractShape';
import ShapeType from './ShapeType';
import Frame from '../Common/Frame';

class CTriangle extends CAbstractShape {
    public constructor(id: string, frame: Frame) {
        super(id, frame);
    }

    public Type(): ShapeType {
        return ShapeType.TRIANGLE;
    }
}

export default CTriangle;