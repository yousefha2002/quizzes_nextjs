export default function CertificateFooter({userId,}: {userId: number;}) {
    return (
        <div className="flex justify-between items-end mt-12 px-10">
        <div className="text-left space-y-1">
            <p className="text-sm font-medium">Signature</p>
            <div className="w-40 h-0.5 bg-black mb-1"></div>
            <p className="text-xs italic">CodeQuiz Admin</p>
        </div>
        <div className="text-right text-xs text-gray-500">
            <p>
            This certificate is issued by <strong>CodeQuiz Platform</strong>.
            </p>
            <p>Verified for user ID: {userId}</p>
        </div>
        </div>
    );
}
