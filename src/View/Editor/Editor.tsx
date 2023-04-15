import IShape from '../../Model/Shape/IShape';
import ShapeType from '../../Model/Shape/ShapeType';
import Rectangle from './Shape/Rectangle';
import CRectangle from '../../Model/Shape/CRectangle';
import { useRef } from 'react';
import useSelect from '../../Hook/useSelect';
import useHotkey from '../../Hook/useHotkey';

type EditorProps = {
    shapes: Array<IShape>;
    moveShape: (id: string, deltaX: number, deltaY: number) => void;
    removeShape: (id: string) => void;
}

function Editor({ shapes, moveShape, removeShape }: EditorProps) {
    const ref = useRef(null);

    const { selectedId, setSelectedId } = useSelect(ref);
    useHotkey('Delete', () => {
        if (selectedId !== '') {
            removeShape(selectedId);
        }
    });

    return (
        <svg
            ref={ ref }
            viewBox={'0 0 1024 1024'}
            width={'1024'}
            height={'1024'}
        >
            {shapes.map(shape => {
                switch (shape.Type()) {
                    case ShapeType.RECTANGLE:
                        return <Rectangle
                            key={shape.ID()}
                            shape={shape as CRectangle}
                            moveShape={moveShape}
                            isSelected={shape.ID() === selectedId}
                            setSelected={() => { setSelectedId(shape.ID()); } }
                        />
                }
                return <></>
            })}
        </svg>
    )
}

export default Editor;