'use client';
import ButtonLink from "@/components/ui/PrimaryButton";

export default function CertificateActions({onDownload,}: {onDownload: () => void;}) {
    return (
        <div className="flex justify-center gap-4 mt-10 print:hidden">
        <ButtonLink href="/dashboard">Back to Dashboard</ButtonLink>
        <button
            onClick={onDownload}
            className="bg-yellow-700 px-6 py-2 rounded text-white hover:bg-yellow-800 transition"
        >
            Download PDF
        </button>
        </div>
    );
}
