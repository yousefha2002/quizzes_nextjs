import { UserProfile } from '@/types/entities/User'
import { formatDate } from '@/utils/heplers/formatDate'
import React from 'react'

export default function UserInfoCard({user}:{user:UserProfile}) {
    return (
        <div className="bg-card rounded p-6 shadow border border-white/10 text-white space-y-4">
            <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-muted text-sm">Joined: {formatDate(user.createdAt)}</p>
            </div>
        
            {user.bio && (
                <p className="text-sm text-muted border-l-4 border-primary pl-4 italic">{user.bio}</p>
            )}
        
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm">
                <div>
                    <span className="block text-lg font-bold">{user.totalPoints}</span>
                    <span className="text-muted">Points</span>
                </div>
                <div>
                    <span className="block text-lg font-bold">{user.certificates}</span>
                    <span className="text-muted">Certificates</span>
                </div>
                <div>
                    <span className="block text-lg font-bold">{user.attemptsCount}</span>
                    <span className="text-muted">Quiz Attempts</span>
                </div>
            </div>
        </div>
    )
}