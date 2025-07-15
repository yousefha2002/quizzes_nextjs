export default function AlertMessage({ message }: {message:string}) {
    if (!message) return null;

    return (
        <div className="mb-4 bg-red-100 text-red-700 px-4 py-2 rounded border border-red-300 text-sm animate-fade-in">
            {message}
        </div>
    );
}