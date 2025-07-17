import Table from "@/components/ui/table/Table";
import TableCell from "@/components/ui/table/TableCell";
import TableHead from "@/components/ui/table/TableHead";
import TableRow from "@/components/ui/table/TableRow";
import { Point } from "@/types/entities/Point";
import { formatDate } from "@/utils/heplers/formatDate";

type Props = {
    points: Point[];
};

const headers = ["Date", "Activity", "Points"];

export default function PointsTable({ points }: Props) {
    const totalPoints = points.reduce((sum, item) => sum + item.points, 0);

    const getActivityLabel = (point: Point) => {
        switch (point.type) {
            case "pass quiz":
                return `Passed quiz: ${point.quiz?.title ?? "Unknown quiz"}`;
            case "attempt":
                return `Attempted quiz: ${point.quiz?.title ?? "Unknown quiz"}`;
            case "certificate":
                const level = point.certificate?.level;
                const levelTitle = level?.title ?? "Unknown level";
                const category = level?.category?.title ?? "Unknown category";
                return `Earned certificate for: ${levelTitle} - ${category}`;
            default:
                return point.type;
        }
    };

    return (
        <Table>
            <TableHead columns={headers} />
            <tbody>
                {points.map((point) => (
                    <TableRow
                        key={point.id ?? `${point.type}-${point.createdAt}`}
                        cells={[
                            formatDate(point.createdAt.toLocaleString()),
                            getActivityLabel(point),
                            <span className="font-semibold text-right block">
                                {point.points}
                            </span>,
                        ]}
                    />
                ))}

                <tr className="border-t border-white/10">
                    <TableCell colSpan={2} className="text-left font-semibold text-white">
                        Total Points
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary text-lg">
                        {totalPoints}
                    </TableCell>
                </tr>
            </tbody>
        </Table>
    );
}
