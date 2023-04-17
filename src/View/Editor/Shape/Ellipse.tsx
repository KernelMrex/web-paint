import CCircle from '../../../Model/Shape/CCircle';
import { ForwardedRef, forwardRef } from 'react';

type EllipseProps = {
    shape: CCircle
}

const Ellipse = forwardRef(({ shape }: EllipseProps, ref: ForwardedRef<SVGEllipseElement>) => {
    return (
        <ellipse
            cx={ shape.Frame().leftTop.x + (shape.Frame().width / 2) }
            cy={ shape.Frame().leftTop.y + (shape.Frame().height / 2) }
            rx={ shape.Frame().width / 2 }
            ry={ shape.Frame().height / 2 }
            ref={ref}
        />
    );
});

export default Ellipse;