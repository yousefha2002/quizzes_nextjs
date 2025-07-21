import DashboardStats from '@/components/dash/home/DashboardStats'
import UserActions from '@/components/dash/home/UserActions'
import UserInfo from '@/components/dash/home/UserInfo'
import WelcomeMessage from '@/components/dash/home/WelcomeMessage'
import Container from '@/components/ui/Container'
import { getUserToken } from '@/lib/auth'
import { getUserStatistic } from '@/lib/statistic'
import { getUser } from '@/lib/user'
import React from 'react'

export default async function page() {
    const token = await getUserToken();
    const tokenValue = token?.value;
    const statistic = await getUserStatistic(tokenValue)
    const user = await getUser(tokenValue);
    return (
        <Container>
            <WelcomeMessage/>
            <DashboardStats statistic={statistic}/>
            <UserInfo {...user}/>
            <UserActions/>
        </Container>
    )
}
