export default function SectionTitle({ children, left }) {
    return (
        <h2 className={`text-2xl font-mono font-semibold ${!left ? "text-center" : "text-left"}`}>{children}</h2>
    );
}