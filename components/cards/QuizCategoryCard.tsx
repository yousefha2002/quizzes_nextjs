import { capitalize } from '@/utils/heplers/capitalize'
import Link from 'next/link'
import React from 'react'

export default function QuizCategoryCard({title}:{title:string}) {
    return (
        <Link
            href={`/categories/${title}`}
            key={title}
            className="bg-card p-6 rounded-xl shadow hover:shadow-lg hover:border-primary border border-transparent transition duration-300 flex flex-col items-center"
        >
            <div className="text-primary text-4xl font-bold mb-4">
                {title.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-xl font-semibold text-textBase mb-2">
                {capitalize(title)}
            </h3>
            <p className="text-muted text-center text-sm">
                Practice quizzes and test your knowledge in {title}.
            </p>
    </Link>
    )
}
