import React from 'react';
import Link from 'next/link';
import { certificate } from '@/types/fakes/certificate';

export default function CertificateCard({id,levelName,categoryName,obtainedDate,}: certificate) {
    return (
        <div className="bg-card border border-white/10 rounded-lg p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h2 className="text-xl font-semibold">{levelName}</h2>
                <p className="text-muted text-sm">{categoryName}</p>
                <p className="text-sm mt-1">Obtained: <span className="font-medium">{obtainedDate}</span></p>
            </div>

            <div>
                <Link
                href={`/dashboard/certificates/${id}`}
                className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition font-semibold"
                >
                View Details
                </Link>
            </div>
        </div>
    );
}