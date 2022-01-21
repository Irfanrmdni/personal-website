import SectionParagraf from "./SectionParagraf"
import SectionTitle from "./SectionTitle"
import SkillCard from "./SkillCard"

export default function SectionSkill() {
    return (
        <section className="py-28 bg-skill" id="skill">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraf>Beberapa kemampuan saya.</SectionParagraf>

                <div className="flex justify-center items-center flex-wrap mt-20">
                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="JavaScript" image="/javascript.svg" level="Lanjutan" imageClassName="md:h-10 h-16 rounded-full" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="React JS" image="/react.svg" level="Menengah" imageClassName="md:h-10 h-16" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="Node JS" image="/nodejs.svg" level="Lanjutan" imageClassName="md:h-10 h-16" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="Node JS" image="/nodejs.svg" level="Lanjutan" imageClassName="md:h-10 h-16" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="JavaScript" image="/javascript.svg" level="Lanjutan" imageClassName="md:h-10 h-16 rounded-full" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="React JS" image="/react.svg" level="Menengah" imageClassName="md:h-10 h-16" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="React JS" image="/react.svg" level="Menengah" imageClassName="md:h-10 h-16" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="Node JS" image="/nodejs.svg" level="Lanjutan" imageClassName="md:h-10 h-16" />
                    </div>

                    <div className="md:w-4/12 w-full px-4 py-4">
                        <SkillCard name="JavaScript" image="/javascript.svg" level="Lanjutan" imageClassName="md:h-10 h-16 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}