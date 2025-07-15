import DashboardLayout from "@/components/dash/DashboardLayout";
import Container from "@/components/ui/Container";

export default async function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <DashboardLayout>
            <Container className="lg:my-4">
                {children}
            </Container>
        </DashboardLayout>
    );
}