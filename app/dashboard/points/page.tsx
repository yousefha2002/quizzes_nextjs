import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Table from "@/components/ui/table/Table";
import TableCell from "@/components/ui/table/TableCell";
import TableHead from "@/components/ui/table/TableHead";
import TableRow from "@/components/ui/table/TableRow";
import pointsDetails from "@/data/fakes/pointsDetails";

const headers = ["Date", "Activity", "Points"];

export default function Points() {
    return (
        <Container>
            <SectionTitle>Points Details</SectionTitle>
                <Table>
                    <TableHead columns={headers} />
                    <tbody>
                        {pointsDetails.map(({ id, date, activity, points }) => (
                            <TableRow
                            key={id}
                            cells={[
                                date,
                                activity,
                                <span className="font-semibold text-right block">{points}</span>,
                            ]}
                            />
                        ))}
                        <tr className="border-t border-white/10">
                            <TableCell colSpan={2} className="text-left font-semibold text-white">
                                Total Points
                            </TableCell>
                            <TableCell className="text-right font-bold text-primary text-lg">
                                {220}
                            </TableCell>
                        </tr>
                    </tbody>
                </Table>
        </Container>
    );
}