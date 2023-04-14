import React, { useEffect } from 'react';

type MouseEventHandler = (e: MouseEvent) => void;

function useDragAndDrop<T extends EventTarget>(
    ref: React.RefObject<T>,
    onStart: MouseEventHandler|null,
    onMove: MouseEventHandler|null,
    onStop: MouseEventHandler|null,
) {
    const onMouseDown = (e: Event) => {
        onStart?.(e as MouseEvent);

        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
    }

    const onMouseUp = (e: Event) => {
        onStop?.(e as MouseEvent);

        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (e: Event) => {
        onMove?.(e as MouseEvent);
    }

    useEffect(() => {
        const node = ref?.current;

        node?.addEventListener('mousedown', onMouseDown)

        return () => {
            node?.removeEventListener('mousedown', onMouseDown)
        }
    });
}

export default useDragAndDrop;