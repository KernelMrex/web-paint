import React, { useEffect, useState } from 'react';

function useSelect(ref: React.RefObject<SVGElement>) {
    const [ selectedId, setSelectedId ] = useState('');

    const onMouseDown = (e: MouseEvent) => {
        if (e.target === ref.current) {
            setSelectedId('');
        }
    }

    useEffect(() => {
        const target = ref.current;
        if (!target)
        {
            return
        }

        target.addEventListener('mousedown', onMouseDown)

        return () => {
            target.removeEventListener('mousedown', onMouseDown)
        };
    });

    return { selectedId, setSelectedId };
}

export default useSelect;