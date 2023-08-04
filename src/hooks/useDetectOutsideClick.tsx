import { RefObject, useEffect } from 'react';

function useDetectOutsideClick(ref: RefObject<HTMLElement>, callback: Function) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useDetectOutsideClick;
