'use client';
import { Certificate } from "@/types/entities/Certificate";
import { formatDate } from "@/utils/heplers/formatDate";
import { useRef } from "react";
import CertificateHeader from "./CertificateHeader";
import CertificateRecipient from "./CertificateRecipient";
import CertificateLevelInfo from "./CertificateLevelInfo";
import CertificateFooter from "./CertificateFooter";
import CertificateActions from "./CertificateActions";
import { toPng } from "html-to-image";

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

    const handleShareImage = async () => {
        if (!certificateRef.current) return;

        try {
            const dataUrl = await toPng(certificateRef.current, {
                pixelRatio: 3,
                backgroundColor: '#fff',
            });

            if (navigator.share) {
                const response = await fetch(dataUrl);
                const blob = await response.blob();
                const file = new File([blob], `certificate-${certificate.id}.png`, { type: blob.type });

                await navigator.share({
                    files: [file],
                    title: 'My Certificate',
                    text: 'Check out my certificate!',
                });
            } else {
                const link = document.createElement('a');
                link.download = `certificate-${certificate.id}.png`;
                link.href = dataUrl;
                link.click();
            }
        } catch (error) {
            console.error('Error sharing certificate image:', error);
            alert('Sharing failed. You can try downloading the image.');
        }
    };

    return (
        <section className="text-center px-4 sm:px-8 md:px-12">
            <div
                ref={certificateRef}
                className="bg-white text-black border-[8px] border-yellow-600 rounded-[24px] px-4 sm:px-8 md:px-12 py-12 sm:py-16 shadow-2xl max-w-4xl w-full mx-auto print:shadow-none print:border-black print:text-black print:bg-white print:p-12 font-serif"
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

            <CertificateActions onDownload={handleDownloadPDF} onShare={handleShareImage} />
        </section>
    );
}