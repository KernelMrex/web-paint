import IShape from '../../../Model/Shape/IShape';
import { ForwardedRef, useRef } from 'react';
import useShapeDragAndDrop from '../../../Hook/useShapeDragAndDrop';
import useShapeResize from '../../../Hook/useShapeResize';
import SelectedOverlay from '../Overlay/SelectedOverlay';
import ResizeAnchorOverlay from '../Overlay/ResizeAnchorOverlay';
import ShapeType from '../../../Model/Shape/ShapeType';
import Ellipse from './Ellipse';
import CCircle from '../../../Model/Shape/CCircle';
import Rectangle from './Rectangle';
import CRectangle from '../../../Model/Shape/CRectangle';
import Triangle from './Triangle';
import CTriangle from '../../../Model/Shape/CTriangle';

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
            { buildShape(shape, shapeRef) }
            { isSelected && <>
                <SelectedOverlay frame={shape.Frame()}/>
                <ResizeAnchorOverlay shape={shape} ref={resizeAnchorRef}/>
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