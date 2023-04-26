import {ForwardedRef, forwardRef} from 'react';

type ResizeAnchorOverlayProps = {
    x: number,
    y: number,
    anchorSize: number,
}

const ResizeAnchorOverlay = forwardRef(({ x, y, anchorSize }: ResizeAnchorOverlayProps, ref: ForwardedRef<SVGRectElement>) => {
    return (
        <rect
            ref={ ref }
            x={ x }
            y={ y }
            width={ anchorSize }
            height={ anchorSize }
            fill={ "#9e6eff" }
        />
    );
});

export default ResizeAnchorOverlay;