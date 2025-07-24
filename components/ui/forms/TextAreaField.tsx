import React from 'react';
type Props = {
    name: string;
    required?: boolean;
    placeholder?: string;
    defaultValue?: string;
};
export default function TextareaField({name,required,placeholder,defaultValue,}: Props) {
    return (
        <div className="relative">
        <textarea
            name={name}
            required={required}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="w-full bg-darkBlueGray text-textBase text-sm placeholder:text-muted border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none min-h-[100px]"
        />
        </div>
    );
}