import CRectangle from '../../../Model/Shape/CRectangle';
import { useRef } from 'react';
import useShapeDragAndDrop from '../../../Hook/useShapeDragAndDrop';

type RectangleProps = {
    shape: CRectangle;
    moveShape: (id: string, deltaX: number, deltaY: number) => void
}

function Rectangle({ shape, moveShape }: RectangleProps) {
    const ref = useRef(null);

    useShapeDragAndDrop(ref, (x, y) => moveShape(shape.ID(), x, y));

    return (
        <rect
            ref={ref}
            x={shape.Frame().leftTop.x}
            y={shape.Frame().leftTop.y}
            width={shape.Frame().width}
            height={shape.Frame().height}
        />
    )
}

export default Rectangle;