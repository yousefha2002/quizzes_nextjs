import { BaseCertificate } from '@/types/entities/Certificate';
import { formatDate } from '@/utils/heplers/formatDate';
import React from 'react';
import { FaCertificate } from 'react-icons/fa';

export default function CertificateSection({ certificate }: { certificate: BaseCertificate }) {
    return (
        <div className="relative bg-card border border-white/10 rounded-xl p-6 text-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 text-primary text-3xl opacity-20">
                <FaCertificate />
            </div>

            <h4 className="text-xl font-bold capitalize mb-2">{certificate.level.title}</h4>

            <p className="text-sm text-muted mb-1">
                Category:{' '}
                <span className="text-white capitalize font-medium">
                    {certificate.level.category.title}
                </span>
            </p>

            <p className="text-sm text-muted">
                Obtained at:{' '}
                <span className="text-white font-medium">
                    {formatDate(certificate.obtainedAt)}
                </span>
            </p>
        </div>
    );
}
