import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';
import AnimatedShapes from "../animatedShapes/AnimatedShapes";

const Contact = () => {
    const [done, setDone] = useState("");
    const [message, setMessage] = useState("");

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formRef.current.user_name.value) {
            setMessage("Please fill out Name field.");
            setDone("failure");
        } else if (!formRef.current.user_email.value) {
            setMessage("Please fill out Email field.");
            setDone("failure");
        } else if (!formRef.current.user_subject.value) {
            setMessage("Please fill out Subject field.");
            setDone("failure");
        } else if (!formRef.current.message.value) {
            setMessage("Please fill out Message field.");
            setDone("failure");
        } else {
            emailjs
                .sendForm(
                    'service_iudcgb6', 
                    'template_f0ez1jh', 
                    formRef.current, 
                    'user_DTYCuu7ECAydbIaYu8wcB'
                )
                .then((result) => {
                    console.log(result.text);
                    setMessage("Thanks, I'll reply ASAP :)");
                    setDone("success");
                    
                    // clear all inputs
                    formRef.current.user_name.value = "";
                    formRef.current.user_email.value = "";
                    formRef.current.user_subject.value = "";
                    formRef.current.message.value = "";
                }, 
                (error) => {
                    console.log(error.text);
                }
            );
        }
    };

    return (
        <div className='contact' id="contact">
            <div className="background"></div>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>                        
                    <input type="email" placeholder="Email" name="user_email"/>
                    <input type="text" placeholder="Subject" name="user_subject" id="subject"/>
                    <textarea rows="5" placeholder="Your Message" name="message"></textarea>
                    <button>Send</button>
                    {done === "success" ? (<span style={{ color: "green" }}>{message}</span>) 
                        : (<span style={{ color: "red" }}>{message}</span>)}
                </form>
            </div>
            <AnimatedShapes />
        </div>
    );
};

export default Contact;
