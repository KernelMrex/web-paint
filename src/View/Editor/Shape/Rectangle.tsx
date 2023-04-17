import CRectangle from '../../../Model/Shape/CRectangle';
import { useRef } from 'react';
import useShapeDragAndDrop from '../../../Hook/useShapeDragAndDrop';
import SelectedOverlay from '../Overlay/SelectedOverlay';
import ResizeAnchorOverlay from '../Overlay/ResizeAnchorOverlay';
import useShapeResize from '../../../Hook/useShapeResize';

type RectangleProps = {
    shape: CRectangle;
    moveShape: (id: string, deltaX: number, deltaY: number) => void,
    resizeShape: (id: string, width: number, height: number) => void,
    isSelected: boolean,
    setSelected: () => void,
}

function Rectangle({ shape, moveShape, resizeShape, isSelected, setSelected }: RectangleProps) {
    const shapeRef = useRef(null);
    const resizeAnchorRef = useRef(null);

    useShapeDragAndDrop(
        shapeRef,
        (x, y) => moveShape(shape.ID(), x, y),
        setSelected
    );

    useShapeResize(
        resizeAnchorRef,
        shape,
        (width: number, height: number) => resizeShape(shape.ID(), width, height)
    );

    return (
        <>
            <rect
                ref={shapeRef}
                x={shape.Frame().leftTop.x}
                y={shape.Frame().leftTop.y}
                width={shape.Frame().width}
                height={shape.Frame().height}
            />
            { isSelected && <>
                <SelectedOverlay frame={shape.Frame()}/>
                <ResizeAnchorOverlay shape={shape} ref={resizeAnchorRef}/>
            </> }
        </>
    )
}

export default Rectangle;