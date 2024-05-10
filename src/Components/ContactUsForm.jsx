import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//

const ContactUsForm = () => {
    // Create a ref for the card element
    const cardRef = useRef(null);
    const form = useRef();
    //
    const notify = () =>
        toast.success("Wow SUCCESS !!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_fhd6lb8", "template_83i5uw7", form.current, {
                publicKey: "3TsZCgya_uougcAlK",
            })
            .then(
                () => {
                    // console.log("SUCCESS!");
                    notify();
                    form.current.reset(); // Reset the form fields
                },
                (error) => {
                    // console.log("FAILED...", error.text);
                    toast.error("FAILED!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            );
    };

    // Function to update custom CSS properties
    const updateCustomProperties = (x, y) => {
        // Set custom CSS properties on the card element
        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };

    // Function to log mousemove event
    const handleMouseMove = (event) => {
        // Calculate x and y coordinates relative to the card element
        const { left, top } = cardRef.current.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        // Update custom CSS properties
        updateCustomProperties(x, y);
    };

    return (
        <>
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="card  overflow-hidden max-w-md w-full mx-auto p-6 rounded-lg shadow-lg glass "
            >
                <h1 className="text-3xl text-center font-bold text-pink-600 mb-6">
                    Contact Us
                </h1>
                <form ref={form} onSubmit={sendEmail} action="">
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm font-semibold mb-2"
                            htmlFor="nameInput"
                        >
                            Your Name
                        </label>
                        <input
                            name="user_name"
                            id="nameInput"
                            placeholder="Yahia Ahmed"
                            className="w-full rounded-lg py-2 px-3 border bg-gray-800  text-white focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm font-semibold mb-2"
                            htmlFor="emailInput"
                        >
                            Your Email
                        </label>
                        <input
                            name="user_email"
                            id="emailInput"
                            placeholder="otakayahia@gmail.com"
                            className="w-full rounded-lg py-2 px-3 border bg-gray-800  text-white focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm font-semibold mb-2"
                            htmlFor="massageInput"
                        >
                            Your Massage
                        </label>
                        <textarea
                            name="message"
                            id="massageInput"
                            placeholder="Hello!!..."
                            className="w-full rounded-lg py-2 px-3 border resize-none scrollbar-hidden bg-gray-800  text-white focus:outline-none focus:border-blue-500"
                            required
                            rows="5"
                            type="text"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-400 hover:outline-white"
                        >
                            Send Massage
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default ContactUsForm;
