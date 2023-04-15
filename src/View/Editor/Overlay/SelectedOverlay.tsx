import Frame from '../../../Model/Common/Frame';

type SelectedOverlayProps = {
    frame: Frame,
}

function SelectedOverlay({ frame }: SelectedOverlayProps) {
    return (
        <rect
            x={frame.leftTop.x}
            y={frame.leftTop.y}
            width={frame.width}
            height={frame.height}
            stroke="#9e6eff"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
        />
    );
}

export default SelectedOverlay;