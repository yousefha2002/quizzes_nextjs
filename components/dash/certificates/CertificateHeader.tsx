export default function CertificateHeader({ id }: { id: number }) {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-700 tracking-wide uppercase text-center">
            Certificate of Completion
            </h1>
            <p className="text-sm text-gray-600 italic">Certificate No. #{id}</p>
        </>
    );
}