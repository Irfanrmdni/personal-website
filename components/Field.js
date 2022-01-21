export default function Field({ label, name, type, className }) {

    const addClassName = className ? `${className}` : "";
    const formControlClassName = `w-full outline-none text-sm py-2 px-3 bg-transparent border border-gray-400 ${addClassName}`;

    return (
        <div className="mb-8">
            <label htmlFor={name} className="block font-semibold text-base mb-1">{label}</label>
            {type === "text" && (
                <input type={type} name={name} id={name} className={formControlClassName} />
            )}

            {type === "textarea" && (
                <textarea type={type} name={name} id={name} className={formControlClassName} />
            )}
        </div>
    );
}