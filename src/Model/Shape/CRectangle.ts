import Frame from '../Common/Frame';
import ShapeType from './ShapeType';
import CAbstractShape from './CAbstractShape';

class CRectangle extends CAbstractShape {
    public constructor(id: string, frame: Frame) {
        super(id, frame);
    }

    public Type(): ShapeType {
        return ShapeType.RECTANGLE;
    }
}

export default CRectangle;