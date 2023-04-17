import IShape from '../Model/Shape/IShape';
import { RefObject } from 'react';
import useDragAndDrop from './useDragAndDrop';

function useShapeResize<T extends SVGElement>(
    ref: RefObject<T>,
    shape: IShape,
    setShapeFrame: (width: number, height: number) => void,
) {
    let prevPos = { x: 0, y: 0 };

    const onMoveStart = (e: MouseEvent) => {
        prevPos = { x: e.pageX, y: e.pageY };
    }

    const onMove = (e: MouseEvent) => {
        const delta = {
            width: e.pageX - prevPos.x,
            height: e.pageY - prevPos.y,
        }

        setShapeFrame(
            shape.Frame().width + delta.width,
            shape.Frame().height + delta.height,
        );

        prevPos = {
            x: e.pageX,
            y: e.pageY,
        }
    }

    useDragAndDrop(ref, onMoveStart, onMove, null);

}

export default useShapeResize;