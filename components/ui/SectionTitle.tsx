type SectionTitleProps = {
    children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold capitalize text-primary relative inline-block">
                {children}
                <span className="block h-1 w-24 bg-gradient-to-r from-primary via-blue-400 to-primary animate-pulse mt-3 mx-auto rounded"></span>
            </h2>
        </div>
    );
}