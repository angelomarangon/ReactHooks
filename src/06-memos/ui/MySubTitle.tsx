import { memo } from "react";

interface Props {
  subTitle: string;
  callMyAPI: () => void;
}
export const MySubTitle = memo(({ subTitle, callMyAPI }: Props) => {
  return (
    <>
      <h6 className="text-white text-2xl">{subTitle}</h6>

      <button 
      className="text-white bg-indigo-500 ox-2 py-1 rounded-md cursor-pointer"
      onClick={callMyAPI}
      >Llamar a funcion</button>
    </>
  )
})
