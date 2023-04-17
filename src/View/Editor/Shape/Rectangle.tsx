import CRectangle from '../../../Model/Shape/CRectangle';
import { ForwardedRef, forwardRef } from 'react';

type RectangleProps = {
    shape: CRectangle;
}

const Rectangle = forwardRef(({ shape }: RectangleProps, ref: ForwardedRef<SVGRectElement>) => {
    return (
        <rect
            ref={ref}
            x={shape.Frame().leftTop.x}
            y={shape.Frame().leftTop.y}
            width={shape.Frame().width}
            height={shape.Frame().height}
        />
    );
});

export default Rectangle;