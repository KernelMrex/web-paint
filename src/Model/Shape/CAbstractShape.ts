import Frame from '../Common/Frame';
import IShape from './IShape';
import ShapeType from './ShapeType';

abstract class CAbstractShape implements IShape {
    private readonly m_id: string;
    private m_frame: Frame;

    protected constructor(id: string, frame: Frame) {
        this.m_frame = frame;
        this.m_id = id;
    }

    public Frame(): Frame {
        return this.m_frame;
    }

    public ID(): string {
        return this.m_id;
    }

    public SetFrame(frame: Frame): void {
        this.m_frame = frame;
    }

    public abstract Type(): ShapeType;
}

export default CAbstractShape;