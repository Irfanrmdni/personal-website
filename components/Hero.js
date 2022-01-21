import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
    return (
        <div className="bg-hero 2xl:h-[712px] xl:h-[612px] lg:h-[550px] md:h-[500px] pb-20">
            <header className="container mx-auto px-10 2xl:px-0">
                <Navbar />
                <div className="text-center xl:mt-28 lg:mt-14 md:mt-12">
                    <h1 className="mx-auto lg:leading-relaxed text-xl lg:text-3xl font-mono text-white capitalize font-semibold 2xl:w-6/12 xl:w-8/12 lg:w-10/12 md:w-10/12 md:text-2xl">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
                    <p className="mx-auto mt-4 text-lg text-opacity-70 text-white leading-relaxed 2xl:w-3/12 xl:w-4/12 lg:w-6/12 md:w-7/12">Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.</p>
                    <Button variant="fill" pill className="mt-14" href="#profile">Pelajari</Button>
                </div>
            </header>
        </div>
    );
}