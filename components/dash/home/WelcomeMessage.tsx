export default function WelcomeMessage({ name = "Yousef" }) {
    return (
        <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
            Welcome back, <span className="text-primary">{name}</span> 👋
        </h1>
        <p className="text-muted mt-2">
            Keep pushing! Your next certificate is just one quiz away.
        </p>
        </div>
    );
}