export default function Button({ className, variant, children, pill, href }) {
    const addClassName = className ? `${className}` : "";
    const variants = {
        "outline": `border-2 border-yellow-400 text-yellow-400 hover:border-white hover:text-white transition-all ease-in-out`,
        "fill": `bg-yellow-400 text-black hover:bg-white transition-all ease-in-out`,
        "black": `bg-black text-white hover:bg-purple-700 transition-all ease-in-out cursor-pointer`,
    }
    const pickedVariant = variants[variant];

    return (
        <>
            <a href={href} className={`py-1.5 inline-block px-9 text-lg font-semibold ${pill ? "rounded-full" : ""} ${pickedVariant} ${addClassName}`}>{children}</a>
        </>
    );
}