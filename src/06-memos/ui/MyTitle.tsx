import { memo } from "react";

interface Props {
    title: string;
}
export const MyTitle = memo(({title}:Props) => {
  return <h1 className="text-white text-3xl">{title}</h1>
})
