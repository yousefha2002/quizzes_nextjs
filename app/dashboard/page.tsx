import DashboardStats from '@/components/dash/home/DashboardStats'
import RecentAttemptsTable from '@/components/dash/home/RecentAttemptsTable'
import WelcomeMessage from '@/components/dash/home/WelcomeMessage'
import Container from '@/components/ui/Container'
import React from 'react'

export default async function page() {
    return (
        <Container>
            <WelcomeMessage/>
            <DashboardStats/>
            <RecentAttemptsTable/>
        </Container>
    )
}
