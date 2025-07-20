'use client'
import { logout } from '@/actions/logout'
import React from 'react'

export default function LogoutButton() {
    return (
        <button
        onClick={() =>logout()}
        className="px-4 py-2 bg-error hover:bg-opacity-90 text-white text-sm font-semibold rounded-md transition"
        >
        Logout
        </button>
    )
}
