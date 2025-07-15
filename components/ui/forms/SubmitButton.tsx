import React from "react";

type Props = {
    children: React.ReactNode;
    isPending?: boolean;
};

export default function SubmitButton({ children, isPending }: Props) {
    return (
        <button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary hover:bg-opacity-90 transition-all text-white font-semibold py-2 rounded-md disabled:opacity-50"
        >
            {isPending ? 'Loading...' : children}
        </button>
    );
}
