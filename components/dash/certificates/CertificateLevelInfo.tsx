export default function CertificateLevelInfo({title,category,}: {title: string;category: string;}) {
    return (
        <div className="mt-4 space-y-1">
        <p className="text-base">For successfully completing the level</p>
        <p className="text-2xl font-semibold text-yellow-700 capitalize">{title}</p>
        <p className="text-base text-gray-700 capitalize">Category: {category}</p>
        </div>
    );
}
