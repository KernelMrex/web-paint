import IShape from '../../Model/Shape/IShape';
import ShapeType from '../../Model/Shape/ShapeType';
import Rectangle from './Shape/Rectangle';
import CRectangle from '../../Model/Shape/CRectangle';

type EditorProps = {
    shapes: Array<IShape>;
    moveShape: (id: string, deltaX: number, deltaY: number) => void
}

function Editor({ shapes, moveShape }: EditorProps) {
    return (
        <svg
            viewBox={'0 0 1024 1024'}
            width={'1024'}
            height={'1024'}
        >
            {shapes.map(shape => {
                switch (shape.Type()) {
                    case ShapeType.RECTANGLE:
                        return <Rectangle key={shape.ID()} shape={shape as CRectangle} moveShape={moveShape} />
                }
                return <></>
            })}
        </svg>
    )
}

export default Editor;