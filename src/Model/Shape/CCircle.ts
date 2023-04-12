import CAbstractShape from './CAbstractShape';
import Frame from '../Common/Frame';
import ShapeType from './ShapeType';

class CCircle extends CAbstractShape {
    public constructor(id: string, frame: Frame) {
        super(id, frame);
    }

    public Type(): ShapeType {
        return ShapeType.CIRCLE;
    }
}

export default CCircle;