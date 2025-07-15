export default function CertificateRecipient({ name }: { name: string }) {
    return (
        <div className="mt-6">
        <p className="text-lg">This certificate is proudly presented to</p>
        <p className="text-4xl font-extrabold text-black mt-2 underline decoration-dotted decoration-yellow-600 underline-offset-8">
            {name}
        </p>
        </div>
    );
}