import { useState } from 'react'
import Container from '../components/Container'
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { toast } from 'react-toastify';
import Location from '../assets/icons/location.svg'
import Time from '../assets/icons/time.svg'
import Phone from '../assets/icons/phone.svg'
import Email from '../assets/icons/email.svg'
import SubHeaderSection from '../components/SubHeaderSection';
import ContactSubHedImage from '../assets/images/contactSubhedImage.png'
import * as emailjs from '@emailjs/browser';


const ContactPage = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        company: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ---------------- Validate form ----------------
        let newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
        if (!formData.company) newErrors.company = "Company is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setLoading(true); // disable button

        try {
            const serviceID = "service_804e26k";
            const templateID = "template_y213m5n";
            const publicKey = "XDh3JCwEif2ZbDZ49";

            const templateParams = {
                fullName: formData.fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                company: formData.company,
                subject: formData.subject,
                message: formData.message.replace(/\n/g, '<br>'), // preserve line breaks
            };

            await emailjs.send(serviceID, templateID, templateParams, publicKey);

            toast.success("Your message has been sent!");
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                company: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Try again later.");
        } finally {
            setLoading(false); // enable button again
        }
    };



    const companyNumber = "+919265753274"; // Your company number

    const handleCall = () => {
        // Open default dialer with number
        window.location.href = `tel:${companyNumber}`;

        // Show toast message
        toast.success("Phone number copied!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };


    return (
        <>
            <SubHeaderSection alt={'Contact_sub_head_image'} src={ContactSubHedImage} SubheadingDesc={'Have questions or need support? Our team is ready to assist with product details, quotations, and partnership inquiries, ensuring clear guidance and a reliable experience'} SubheadingTitle={'Contact Flow Wave'} />
            <Container>
                <div className='flex flex-col 600px:gap-52 gap-28 600px:pt-100 pt-40'>
                    <div className='flex 1024px:flex-row flex-col w-full 1024:gap-20 gap-28'>

                        <div className='flex flex-col 1024px:gap-56 428:gap-48 gap-36 rounded-[15px] bg-white border border-divider 600px:px-32 px-28 600px:py-40 py-28 w-full'>
                            <p className='font-montserrat font-medium text-32 text-muted_text 600px:text-start text-center'>Business Inquiry Form</p>

                            <form onSubmit={handleSubmit} className='w-full flex flex-col 600px:gap-48 gap-20'>

                                {/* ----------------------------- Name and Email ------------------------- */}
                                <div className='grid 600px:grid-cols-2 grid-cols-1 w-full gap-20'>
                                    <InputField
                                        type='text'
                                        label={"Full Name"}
                                        placeholder={"John Doe"}
                                        required={true}
                                        name={'fullName'}
                                        onChange={handleChange}
                                        value={formData.fullName}
                                        error={errors.fullName}
                                    />
                                    <InputField
                                        type='email'
                                        label={"Email"}
                                        placeholder={'example@gmail.com'}
                                        required={true}
                                        name={'email'}
                                        onChange={handleChange}
                                        value={formData.email}
                                        error={errors.email}
                                    />
                                </div>

                                {/* ----------------------------- Phone Number and Company Name ------------------------- */}
                                <div className='grid 600px:grid-cols-2 grid-cols-1 w-full gap-20'>
                                    <InputField
                                        type='tel'
                                        label={"Phone Number"}
                                        placeholder={"+91 123456789"}
                                        required={true}
                                        name={'phoneNumber'}
                                        onChange={handleChange}
                                        value={formData.phoneNumber}
                                        error={errors.phoneNumber}
                                    />
                                    <InputField
                                        type='text'
                                        label={"Company Name"}
                                        placeholder={'xyz Organization'}
                                        required={true}
                                        name={'company'}
                                        onChange={handleChange}
                                        value={formData.company}
                                        error={errors.company}
                                    />
                                </div>

                                {/* ----------------------------- Subject / Inquiry Type ------------------------- */}
                                <div className='w-full'>
                                    <InputField
                                        type='text'
                                        label={"Subject / Inquiry Type"}
                                        placeholder={"Enter your Subject or Inquiry Type"}
                                        required={true}
                                        name={'subject'}
                                        onChange={handleChange}
                                        value={formData.subject}
                                        error={errors.subject}
                                    />
                                </div>


                                <div className='w-full flex flex-col 428:gap-20 gap-2'>
                                    <label htmlFor='message' className='font-montserrat font-medium text-black text-18'>Message <span className="text-red-500 font-montserrat font-medium text-18">*</span></label>
                                    <textarea
                                        className={`border font-medium font-montserrat text-18 text-muted_text rounded-lg py-16 px-16 focus:outline-none  transition-all duration-200 ${errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-divider'} resize-none`}
                                        placeholder='Type your message here ...'
                                        rows={5}
                                        required={true}
                                        name='message'
                                        onChange={handleChange}
                                        value={formData.message}
                                    />
                                    {errors.message && <p className="font-montserrat text-sm text-red-500">{errors.message}</p>}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <PrimaryButton title={loading ? 'Sending...' : 'Send Request'} pl={36} pr={36} type={'submit'} />
                                </div>

                            </form>
                        </div>

                        <div className="flex flex-col 600px:gap-20 gap-28">
                            <div className="flex flex-col items-start 1024px:gap-56 428:gap-48 gap-36 rounded-[15px] bg-white border border-divider 600px:px-32 px-28 600px:py-40 py-28 h-full">
                                <p className="font-montserrat font-medium text-32 leading-32 text-muted_text 600px:text-start text-center w-full">
                                    Contact Information
                                </p>

                                <div className='flex flex-col justify-between h-full 530:gap-48 gap-36 '>

                                    {/* --------------------- Location ------------------------- */}
                                    <div className='flex 530:flex-row flex-col 428:gap-24 gap-20 items-center'>
                                        <img loading='lazy' src={Location} alt='location_icon' className='1024px:w-[70px] 1024px:h-[70px] w-50 h-50' />
                                        <p className='font-montserrat font-normal text-20 leading-20 text-muted_text w-full 530:text-start text-center '>AB / 309 Nil Nandish Complex , Behind Narayan Wadi , Opp Vatsalya Vatika , Bill , Vadodara , Gujarat , India</p>
                                    </div>
                                    {/* --------------------- Email ------------------------- */}
                                    <div className='flex 530:flex-row flex-col 428:gap-24 gap-20 items-center'>
                                        <img loading='lazy' src={Phone} alt='location_icon' className='1024px:w-[70px] 1024px:h-[70px] w-50 h-50' />
                                        <p className='font-montserrat font-normal text-20 leading-20 text-muted_text w-full 530:text-start text-center'>+91  9265753274</p>
                                    </div>
                                    {/* --------------------- Time ------------------------- */}
                                    <div className='flex 530:flex-row flex-col 428:gap-24 gap-20 items-center'>
                                        <img loading='lazy' src={Email} alt='location_icon' className='1024px:w-[70px] 1024px:h-[70px] w-50 h-50' />
                                        <p className='font-montserrat font-normal text-20 leading-20 text-muted_text w-full 530:text-start text-center'>flowwaveinstrument@gmail.com</p>
                                    </div>
                                    {/* --------------------- Location ------------------------- */}
                                    <div className='flex 530:flex-row flex-col 428:gap-24 gap-20 items-center'>
                                        <img loading='lazy' src={Time} alt='location_icon' className='1024px:w-[70px] 1024px:h-[70px] w-50 h-50' />
                                        <p className='font-montserrat font-normal text-20 leading-20 text-muted_text w-full 530:text-start text-center'>MON - FRI   08:00 AM -- 06:00 PM</p>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col items-start 1024px:gap-56 428:gap-48 gap-36 rounded-[15px] bg-white border border-divider 600px:px-32 px-28 600px:py-40 py-28 h-full'>
                                <div className='flex flex-col 428:gap-24 gap-12'>
                                    <p className="font-montserrat font-medium text-32 leading-32 text-muted_text">
                                        Need Immediate Assistance?
                                    </p>
                                    <p className='font-montserrat font-normal text-20 leading-20 text-muted_text'>Our technical support team is available to help with urgent inquiries</p>
                                </div>

                                <PrimaryButton onClick={handleCall} title={'Call Now'} width={'100%'} />

                            </div>
                        </div>

                    </div>


                    <div className="w-full h-[500px] rounded-[15px] overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.851088036117!2d73.14555837533545!3d22.263260879713272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc70e58052f3f%3A0x631d25dc409bc232!2sFlow%20Wave%20Instrument!5e1!3m2!1sen!2sin!4v1762861920857!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default ContactPage
