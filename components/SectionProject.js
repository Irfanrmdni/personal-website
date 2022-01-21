import ProjectItem from "./ProjectItem";
import SectionParagraf from "./SectionParagraf";
import SectionTitle from "./SectionTitle";

export default function SectionProject() {
    return (
        <section className="my-32" id="project">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraf>Beberapa proyek pilihan saya.</SectionParagraf>

                <div className="flex flex-wrap mt-20">
                    <div className="md:w-6/12 w-full px-4 md:pb-8 py-8">
                        <ProjectItem image="/hasten.png" name="Hasten" description="Explorasi landing page" />
                    </div>
                    <div className="md:w-6/12 w-full px-4 md:pb-8 py-8">
                        <ProjectItem image="/resource.png" name="Resources" description="Explorasi landing page" />
                    </div>
                    <div className="md:w-6/12 w-full px-4 py-8 md:py-0">
                        <ProjectItem image="/hasten.png" name="Hasten" description="Explorasi landing page" />
                    </div>
                    <div className="md:w-6/12 w-full px-4 py-8 md:py-0">
                        <ProjectItem image="/resource.png" name="Resources" description="Explorasi landing page" />
                    </div>
                </div>
            </div>
        </section>
    );
}