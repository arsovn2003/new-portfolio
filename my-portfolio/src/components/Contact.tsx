import CustomInput from "@/shared/Input";
import PrimaryButton from "@/shared/PrimaryButton";
import { Input } from "postcss";

const Contact = () => {
    return (
        <>
            <div className="max-w-screen-xl text-white mx-auto px-4 mt-28" id="contact">
                <h1 className="md:text-6xl text-4xl md:mb-0 mb-12 md:text-start text-center font-bold uppercase">Contact</h1>
                <form>
                    <div className="flex flex-col">
                        <div className="w-full  mb-5 mt-5">
                            <span>First Name *</span>
                            <br></br>
                            <CustomInput placeholder="John" />
                        </div>
                        <div className="w-full ">
                            <span>Last Name *</span>
                            <br></br>
                            <CustomInput placeholder="Doe" />
                        </div>
                        <div className="w-full  mt-5">
                            <span>E-mail *</span>
                            <br></br>
                            <CustomInput placeholder="john@example.com" />
                        </div>
                        <textarea
                            className="
                            w-full 
                            bg-transparent 
                            border-2 
                            border-rose-800 
                            mt-8 
                            p-3 
                            focus:outline-none
                            "
                            placeholder="Message...">
                        </textarea>
                        <PrimaryButton value="Contact" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;