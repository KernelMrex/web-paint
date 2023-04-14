import React from 'react';
import useDragAndDrop from './useDragAndDrop';

function useShapeDragAndDrop<T extends SVGElement>(
    ref: React.RefObject<T>,
    onShapeMove: (deltaX: number, deltaY: number) => void,
) {
    let prevPos = { x: 0, y: 0 };

    const onMoveStart = (e: MouseEvent) => {
        prevPos = { x: e.pageX, y: e.pageY };
    }

    const onMove = (e: MouseEvent) => {
        onShapeMove(e.pageX - prevPos.x, e.pageY - prevPos.y);
        prevPos = {
            x: e.pageX,
            y: e.pageY,
        }
    }

    useDragAndDrop(ref, onMoveStart, onMove, null);
}

export default useShapeDragAndDrop;