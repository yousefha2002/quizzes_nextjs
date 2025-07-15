import { FaPlayCircle, FaCheckCircle, FaStar } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const pointItems = [
    {
        icon: <FaPlayCircle className="text-blue-400 text-2xl" />,
        title: 'Quiz Attempt',
        points: '+2 Points',
    },
    {
        icon: <FaCheckCircle className="text-green-400 text-2xl" />,
        title: 'Quiz Passed',
        points: '+5 Points',
    },
    {
        icon: <FaStar className="text-purple-400 text-2xl" />,
        title: 'Level Completed',
        points: '+10 Points',
    },
];

export default function PointsSystem() {
    return (
        <section className="py-16 bg-dark">
            <Container>
                <SectionTitle>
                    How to Earn Points
                </SectionTitle>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {pointItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-card rounded-lg p-5 shadow border border-white/10 text-center hover:scale-105 transition-transform"
                        >
                            <div className="mb-3 flex justify-center">{item.icon}</div>
                            <h3 className="font-semibold text-white">{item.title}</h3>
                            <p className="text-muted text-sm">{item.points}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}