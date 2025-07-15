"use client";
import React, { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchByName() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentSearch = searchParams.get("name") || "";

    function handleSearchByName(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const searchValue = formData.get("search") as string;

        const params = new URLSearchParams(searchParams.toString());
        params.delete("page");

        if (searchValue) {
            params.set("name", searchValue);
        } else {
            params.delete("name");
        }

        router.push(`?${params.toString()}`);
    }

    return (
        <form
            onSubmit={handleSearchByName}
            className="flex items-center gap-2 py-4 w-full"
        >
            <input
                autoComplete="off"
                type="text"
                name="search"
                placeholder="Search By Title..."
                defaultValue={currentSearch}
                className="
                    flex-1 
                    px-4 py-2 
                    rounded-xl 
                    border 
                    border-white/20 
                    bg-darkBlueGray 
                    text-white 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-primary 
                    transition
                "
            />
            <button
                type="submit"
                className="
                    px-5 py-2 
                    bg-primary 
                    text-background 
                    rounded-xl 
                    hover:bg-primary-dark 
                    transition-colors
                "
            >
                Search
            </button>
        </form>
    );
}