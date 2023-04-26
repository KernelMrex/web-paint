import IShape from '../Model/Shape/IShape';
import {RefObject} from 'react';
import useDragAndDrop from './useDragAndDrop';

function useRightBottomResizeAnchor<T extends SVGElement>(
    ref: RefObject<T>,
    shape: IShape,
    setShapeFrame: (width: number, height: number) => void,
) {
    let prevPos = { x: 0, y: 0 };
    let shapeDelta = { width: shape.Frame().width, height: shape.Frame().height };

    const onMoveStart = (e: MouseEvent) => {
        prevPos = { x: e.pageX, y: e.pageY };
        shapeDelta = { width: shape.Frame().width, height: shape.Frame().height }
    }

    const onMove = (e: MouseEvent) => {
        const delta = {
            width: e.pageX - prevPos.x,
            height: e.pageY - prevPos.y,
        }

        shapeDelta = {
            width: shapeDelta.width + delta.width,
            height: shapeDelta.height + delta.height,
        }

        setShapeFrame(
            (shapeDelta.width > 1) ? (shape.Frame().width + delta.width) : 1,
            (shapeDelta.height > 1) ? (shape.Frame().height + delta.height) : 1,
        );

        prevPos = {
            x: e.pageX,
            y: e.pageY,
        }
    }

    useDragAndDrop(ref, onMoveStart, onMove, null);
}

export default useRightBottomResizeAnchor;