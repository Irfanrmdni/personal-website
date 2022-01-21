export default function ProjectItem({ image, name, description }) {
    return (
        <article className="text-center">
            <img src={image} alt="hasten" className="rounded-lg w-full" />
            <h3 className="text-xl font-semibold mt-5">{name}</h3>
            <p className="text-lg text-gray-600 mt-2">{description}</p>
        </article>
    );
}