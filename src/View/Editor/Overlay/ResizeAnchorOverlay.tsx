import IShape from '../../../Model/Shape/IShape';
import { ForwardedRef, forwardRef } from 'react';

type ResizeAnchorOverlayProps = {
    shape: IShape
}

const ResizeAnchorOverlay = forwardRef(({ shape }: ResizeAnchorOverlayProps, ref: ForwardedRef<SVGRectElement>) => {
    const anchorSize = 8;

    return (
        <rect
            ref={ ref }
            x={ shape.Frame().leftTop.x + shape.Frame().width - (anchorSize / 2) }
            y={ shape.Frame().leftTop.y + shape.Frame().height - (anchorSize / 2) }
            width={ anchorSize }
            height={ anchorSize }
            fill={ "#9e6eff" }
        />
    );
});

export default ResizeAnchorOverlay;