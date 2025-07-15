import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-background text-muted py-10 mt-10 border-t border-[#333]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
                <div>
                <h3 className="text-xl text-primary font-bold">CodeQuiz</h3>
                <p className="text-sm mt-2">
                    Challenge your coding skills and earn certificates.
                </p>
                </div>

                <div className="space-y-2">
                <h4 className="font-semibold text-textBase text-lg">Quick Links</h4>
                <ul className="text-sm space-y-1">
                    <li><a href="/about" className="hover:text-primary">About</a></li>
                    <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                    <li><a href="/terms" className="hover:text-primary">Terms of Use</a></li>
                    <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
                </ul>
                </div>
            </div>

            <div className="text-center text-xs text-muted mt-6">
                &copy; 2025 CodeQuiz. All rights reserved.
            </div>
        </footer>
    )
}