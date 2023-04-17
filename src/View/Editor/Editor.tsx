import IShape from '../../Model/Shape/IShape';
import { useRef } from 'react';
import useSelect from '../../Hook/useSelect';
import useHotkey from '../../Hook/useHotkey';
import Shape from './Shape/Shape';

type EditorProps = {
    shapes: Array<IShape>;
    moveShape: (id: string, deltaX: number, deltaY: number) => void;
    removeShape: (id: string) => void;
    resizeShape: (id: string, width: number, height: number) => void;
}

function Editor({ shapes, moveShape, removeShape, resizeShape }: EditorProps) {
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
            {shapes.map(shape => <Shape
                key={ shape.ID() }
                shape={ shape }
                moveShape={ moveShape }
                resizeShape={ resizeShape }
                isSelected={ shape.ID() === selectedId }
                setSelected={ () => { setSelectedId(shape.ID()); } }/>
            )}
        </svg>
    )
}

export default Editor;