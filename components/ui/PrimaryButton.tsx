import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
    size?: "xs" | "sm" | "md" | "lg";
    block?: boolean;
    className?: string;
    colorClass?: string;
};

export default function ButtonLink({
    href,
    children,
    size = "md",
    block = false,
    className = "",
    colorClass,
}: ButtonLinkProps) {
    const baseStyle = "text-background rounded font-semibold transition";
    const sizeStyles = {
        xs: "px-3 py-1.5 text-xs",   // ✅ تم إضافة xs هنا
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const bgClass = colorClass || "bg-primary hover:bg-primary/90";

    return (
        <Link
            href={href}
            className={clsx(
                block ? "block w-full text-center" : "inline-block",
                baseStyle,
                sizeStyles[size],
                bgClass,
                className
            )}
        >
            {children}
        </Link>
    );
}
