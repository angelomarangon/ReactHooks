import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type ColorProps = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setLight] = useState<ColorProps>('red')
    const [countdown, setCountdown] = useState<number>(5)
    

    useEffect(() => {
        if (countdown == 0) return

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [countdown]);

    useEffect(() => {

        if (countdown > 0) return

        if (light == 'red') {
            setLight('green');
            setCountdown(5);
            return
        }
        if (light == 'green') {
            setLight('yellow');
            setCountdown(2);
            return
        }
        if (light == 'yellow') {
            setLight('red');
            setCountdown(10);
            return
        }
    }, [countdown, light])

    const condicion = light == 'red' ? 10
        : light == 'yellow' ? 3
            : 5;


    return {
        // values
        light,
        countdown,
        colors,
        // methods or actions
        condicion

    }
}