import CTriangle from '../../../Model/Shape/CTriangle';
import { ForwardedRef, forwardRef } from 'react';
import Frame from '../../../Model/Common/Frame';
import Point from '../../../Model/Common/Point';

type TriangleProps = {
    shape: CTriangle;
}

const Triangle = forwardRef(({ shape }: TriangleProps, ref: ForwardedRef<SVGPolygonElement>) => {
    return (
        <polygon
            ref={ref}
            points={pointsToString(...getTrianglePoints(shape.Frame()))}
        />
    );
});

function pointsToString(...points: Point[]): string {
    return points
        .map(p => `${p.x},${p.y}`)
        .reduce((res, p) => res + ' ' + p, '');
}

function getTrianglePoints(frame: Frame) {
    return [
        {
            x: frame.leftTop.x + frame.width / 2,
            y: frame.leftTop.y,
        },
        {
            x: frame.leftTop.x + frame.width,
            y: frame.leftTop.y + frame.height,
        },
        {
            x: frame.leftTop.x,
            y: frame.leftTop.y + frame.height,
        }
    ];
}

export default Triangle;