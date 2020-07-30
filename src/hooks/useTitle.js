import { useEffect, useRef } from 'react';

const useTitle = title => {
    const pageDidLoad = useRef(false);

    useEffect( () => {
        if ( !pageDidLoad.current ) {
            document.title = title;
            pageDidLoad.current = true;
        }
    });
}

export default useTitle;