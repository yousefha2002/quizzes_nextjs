import React from 'react'
import { IconType } from 'react-icons';

type props = {
    type: string,
    required?: boolean,
    name: string,
    placeholder: string,
    icon: IconType,
    defaultValue?: string,
};

export default function InputField(props: props) {
    const { name, type, required, placeholder, defaultValue, icon: Icon } = props;

    return (
        <div className="relative">
        <div className="flex items-center bg-darkBlueGray border border-white/10 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary transition">
            <div className="text-muted mr-2 text-lg">
            <Icon />
            </div>
            <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            defaultValue={defaultValue}
            className="bg-transparent text-textBase w-full focus:outline-none placeholder:text-muted text-sm"
            autoComplete="off"
            />
        </div>
        </div>
    );
}