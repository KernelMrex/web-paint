import { useEffect } from 'react';

type Handler = (e: KeyboardEvent) => void;

function useHotkey(key: string, handler: Handler) {
    const onKeyDown = (e: Event) => {
        const event = e as KeyboardEvent;

        if (event.key === key) {
            event.preventDefault();
            handler(event);
        }
    };

    useEffect(() => {
       window.addEventListener('keydown', onKeyDown);

       return () => {
           window.removeEventListener('keydown', onKeyDown);
       }
    });
}

export default useHotkey;