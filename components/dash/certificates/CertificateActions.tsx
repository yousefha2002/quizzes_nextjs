'use client';
import ButtonLink from "@/components/ui/PrimaryButton";

type CertificateActionsProps = {
    onDownload: () => void;
    onShare: () => void;
};

export default function CertificateActions({ onDownload, onShare }: CertificateActionsProps) {
    return (
        <div className="flex justify-center flex-wrap gap-4 mt-10 print:hidden">
        <ButtonLink href="/dashboard">Back to Dashboard</ButtonLink>
        <button
            onClick={onDownload}
            className="bg-yellow-700 px-6 py-2 rounded text-white hover:bg-yellow-800 transition"
            type="button"
        >
            Download PDF
        </button>
        <button
            onClick={onShare}
            className="bg-green-600 px-6 py-2 rounded text-white hover:bg-green-700 transition"
            type="button"
        >
            Share Certificate
        </button>
        </div>
    );
}