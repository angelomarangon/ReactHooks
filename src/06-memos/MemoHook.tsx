import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"

export const MemoHook = () => {
    const [title, setTitle] = useState<string>('title')
    const [subtitle, setSubtitle] = useState<string>('subtitle')

    // actua como un useEffect, se va a renderizar cada vez que el valor de la dependecia cambie
    // esta funcion sin el useCallback hace siempre un re-render
    // se usa exclusivamente para memorizar funciones
    const handleMyAPICall = useCallback(() => {
        console.log('Llamar a mi API', subtitle)
    }, [subtitle])

    return (
        <div className="min-h-screen p-6 flex flex-col gap-4
                    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title} />
            <MySubTitle subTitle={subtitle} callMyAPI={handleMyAPICall} />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle(`Hello, ${new Date().getTime()}`)}
            >Cambiar titulo</button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubtitle(`World`)}
            >Cambiar subitulo</button>

        </div>
    )
}
