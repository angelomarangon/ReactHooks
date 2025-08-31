import { memo } from "react";

interface Props {
  subTitle: string;
  callMyAPI: () => void;
}
export const MySubTitle = memo(({ subTitle, callMyAPI }: Props) => {
  console.log('MySubtitle re-render')
  return (
    <>
      <h6 className="text-white text-2xl">{subTitle}</h6>

      <button 
      className="text-white bg-indigo-500 px-2 py-1 rounded-md cursor-pointer"
      onClick={callMyAPI}
      >Llamar a funcion</button>
    </>
  )
})
