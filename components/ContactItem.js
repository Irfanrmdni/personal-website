export default function ContactItem({ label, value, icon }) {
    return (
        <div className="flex my-10 items-start">
            <img src={icon} alt="icon" />
            <div className="ml-4">
                <div className="text-sm font-semibold">{label}</div>
                <div className="text-lg font-semibold">{value}</div>
            </div>
        </div>
    );
}