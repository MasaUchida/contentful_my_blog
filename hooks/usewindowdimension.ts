import { useState, useEffect } from 'react';

function getWindowDimensions() {
    if (!process.browser) return //Nextで使う場合はこのifをつけてprocess.browserまでの処理を弾くこと
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}