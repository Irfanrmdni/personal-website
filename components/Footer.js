export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="my-16">
            <div className="container mx-auto text-center">
                <h1 className="text-lg font-semibold text-gray-400">© Copyright Irpanrmdni - {year}</h1>
            </div>
        </footer>
    );
}