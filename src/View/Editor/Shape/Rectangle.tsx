import CRectangle from '../../../Model/Shape/CRectangle';
import { useRef } from 'react';
import useShapeDragAndDrop from '../../../Hook/useShapeDragAndDrop';
import SelectedOverlay from '../Overlay/SelectedOverlay';

type RectangleProps = {
    shape: CRectangle;
    moveShape: (id: string, deltaX: number, deltaY: number) => void,
    isSelected: boolean,
    setSelected: () => void,
}

function Rectangle({ shape, moveShape, isSelected, setSelected }: RectangleProps) {
    const ref = useRef(null);

    useShapeDragAndDrop(
        ref,
        (x, y) => moveShape(shape.ID(), x, y),
        setSelected
    );

    return (
        <>
            <rect
                ref={ref}
                x={shape.Frame().leftTop.x}
                y={shape.Frame().leftTop.y}
                width={shape.Frame().width}
                height={shape.Frame().height}
            />
            { isSelected && <SelectedOverlay frame={shape.Frame()}/> }
        </>
    )
}

export default Rectangle;