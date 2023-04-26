import IShape from '../../../Model/Shape/IShape';
import {ForwardedRef, useRef} from 'react';
import useShapeDragAndDrop from '../../../Hook/useShapeDragAndDrop';
import useRightBottomResizeAnchor from '../../../Hook/useRightBottomResizeAnchor';
import SelectedOverlay from '../Overlay/SelectedOverlay';
import ResizeAnchorOverlay from '../Overlay/ResizeAnchorOverlay';
import ShapeType from '../../../Model/Shape/ShapeType';
import Ellipse from './Ellipse';
import CCircle from '../../../Model/Shape/CCircle';
import Rectangle from './Rectangle';
import CRectangle from '../../../Model/Shape/CRectangle';
import Triangle from './Triangle';
import CTriangle from '../../../Model/Shape/CTriangle';
import useLeftTopResizeAnchor from "../../../Hook/useLeftTopResizeAnchor";
import useRightTopResizeAnchor from "../../../Hook/useRightTopResizeAnchor";
import useLeftBottomResizeAnchor from "../../../Hook/useLeftBottomResizeAnchor";

type ShapeProps = {
    shape: IShape;
    moveShape: (id: string, deltaX: number, deltaY: number) => void,
    resizeShape: (id: string, width: number, height: number) => void,
    isSelected: boolean,
    setSelected: () => void,
}

function Shape({ shape, moveShape, resizeShape, isSelected, setSelected }: ShapeProps) {
    const shapeRef = useRef(null);
    const resizeAnchorRef = useRef(null);
    const resizeLeftTopResizeAnchorRef = useRef(null);
    const resizeRightTopResizeAnchorRef = useRef(null);
    const resizeLeftBottomResizeAnchorRef = useRef(null);

    useShapeDragAndDrop(
        shapeRef,
        (x, y) => moveShape(shape.ID(), x, y),
        setSelected
    );

    useRightBottomResizeAnchor(
        resizeAnchorRef,
        shape,
        (width: number, height: number) => resizeShape(shape.ID(), width, height)
    );

    useLeftTopResizeAnchor(
        resizeLeftTopResizeAnchorRef,
        shape,
        (width: number, height: number) => resizeShape(shape.ID(), width, height),
        (x: number, y: number) => moveShape(shape.ID(), x, y),
    );

    useRightTopResizeAnchor(
        resizeRightTopResizeAnchorRef,
        shape,
        (width: number, height: number) => resizeShape(shape.ID(), width, height),
        (x: number, y: number) => moveShape(shape.ID(), x, y),
    );

    useLeftBottomResizeAnchor(
        resizeLeftBottomResizeAnchorRef,
        shape,
        (width: number, height: number) => resizeShape(shape.ID(), width, height),
        (x: number, y: number) => moveShape(shape.ID(), x, y),
    );

    const anchorSize = 8;

    return (
        <>
            { buildShape(shape, shapeRef) }
            { isSelected && <>
                <SelectedOverlay frame={shape.Frame()}/>
                <ResizeAnchorOverlay
                    x={ shape.Frame().leftTop.x + shape.Frame().width - (anchorSize / 2) }
                    y={ shape.Frame().leftTop.y + shape.Frame().height - (anchorSize / 2) }
                    anchorSize={ anchorSize }
                    ref={ resizeAnchorRef } />
                <ResizeAnchorOverlay
                    x={ shape.Frame().leftTop.x - (anchorSize / 2) }
                    y={ shape.Frame().leftTop.y - (anchorSize / 2) }
                    anchorSize={ anchorSize }
                    ref={ resizeLeftTopResizeAnchorRef } />
                <ResizeAnchorOverlay
                    x={ shape.Frame().leftTop.x + shape.Frame().width - (anchorSize / 2) }
                    y={ shape.Frame().leftTop.y - (anchorSize / 2) }
                    anchorSize={ anchorSize }
                    ref={ resizeRightTopResizeAnchorRef } />
                <ResizeAnchorOverlay
                    x={ shape.Frame().leftTop.x - (anchorSize / 2) }
                    y={ shape.Frame().leftTop.y + shape.Frame().height - (anchorSize / 2) }
                    anchorSize={ anchorSize }
                    ref={ resizeLeftBottomResizeAnchorRef } />
            </> }
        </>
    )
}

function buildShape<T extends SVGElement>(shape: IShape, ref: ForwardedRef<T>) {

    switch (shape.Type())
    {
        case ShapeType.CIRCLE:
            return <Ellipse shape={shape as CCircle} ref={ref as ForwardedRef<SVGEllipseElement>}/>;
        case ShapeType.RECTANGLE:
            return <Rectangle shape={shape as CRectangle} ref={ref as ForwardedRef<SVGRectElement>}/>;
        case ShapeType.TRIANGLE:
            return <Triangle shape={shape as CTriangle} ref={ref as ForwardedRef<SVGPolygonElement>}/>;
        default:
            return <></>;
    }
}


export default Shape;