import { FC, FormEvent } from "react";

type Props = {
  customField: 'str' | 'filter';
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
}

export const Input: FC<Props> = ({ customField, onChange, value, placeholder }) => {
  return (
    <input className={customField} placeholder={placeholder} onChange={onChange} value={value ?? ''} />
  );
} 
