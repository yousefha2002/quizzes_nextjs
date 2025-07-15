'use client';
import { Certificate } from "@/types/entities/Certificate";
import { formatDate } from "@/utils/heplers/formatDate";
import { useRef } from "react";
import CertificateHeader from "./CertificateHeader";
import CertificateRecipient from "./CertificateRecipient";
import CertificateLevelInfo from "./CertificateLevelInfo";
import CertificateFooter from "./CertificateFooter";
import CertificateActions from "./CertificateActions";

export default function CertificateDetails({ certificate }: { certificate: Certificate }) {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
        margin: 0,
        filename: `certificate-${certificate.id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    };

    html2pdf().from(certificateRef.current).set(opt).save();
};

    return (
        <section className="text-center">
            <div
                ref={certificateRef}
                className="bg-white text-black border-[8px] border-yellow-600 rounded-[24px] px-12 py-16 shadow-2xl max-w-4xl mx-auto print:shadow-none print:border-black print:text-black print:bg-white print:p-12 font-serif"
            >
                <CertificateHeader id={certificate.id} />
                <CertificateRecipient name={certificate.user.name} />
                <CertificateLevelInfo
                title={certificate.level.title}
                category={certificate.level.category.title}
                />
                <p className="text-sm mt-4 text-gray-600">
                Date of Completion: {formatDate(certificate.obtainedAt)}
                </p>
                <CertificateFooter userId={certificate.user.id} />
            </div>
            <CertificateActions onDownload={handleDownloadPDF} />
        </section>
    );
}