import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraf from "./SectionParagraf";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

export default function SectionContact() {
    return (
        <section className="container px-10 md:px0 mx-auto" id="contact">
            <div className="bg-skill flex flex-wrap rounded-lg">
                <div className="md:w-6/12 w-full md:border-r border-b">
                    <div className="lg:py-16 lg:px-20 md:p-14">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraf left>Beberapa cara menghubungi saya.</SectionParagraf>
                        <ContactItem label="Mail" value="irfan@gmail.com" icon="email.svg" />
                        <ContactItem label="Phone" value="081234567890" icon="phone.svg" />
                        <ContactItem label="Twitter" value="@irfanrmdni" icon="twitter.svg" />
                    </div>
                </div>
                <div className="md:w-6/12 w-full mt-8 md:mt-0">
                    <form className="lg:py-16 lg:px-20 md:p-14">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">
                                <Field label="Name" name="name" type="text" />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                                <Field label="Email" name="email" type="text" />
                            </div>
                        </div>

                        <Field label="Subject" name="subject" type="text" />
                        <Field label="Message" name="message" type="textarea" className="h-32" />

                        <div className="text-right">
                            <Button variant="black">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
}