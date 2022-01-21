export default function SectionParagraf({ children, left }) {
    return (
        <p className={`text-xl mt-2 text-gray-600 ${!left ? "text-center" : "text-left"}`}>{children}</p>
    );
}