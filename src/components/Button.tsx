import { FC } from "react";

type Props = {
  onClick: () => void;
  children: string;
}

export const Button: FC<Props> = ({onClick, children}) => (
  <button onClick={onClick}>
    {children}
  </button>
) 
