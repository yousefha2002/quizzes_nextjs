'use server'
import { clearAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
export async function logout()
{
    await clearAuth()
    redirect('/')
}