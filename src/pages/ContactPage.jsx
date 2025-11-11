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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.fullName) newErrors.fullName = "Full Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
        if (!formData.company) newErrors.company = "Company is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (result.status === "success") {
                    toast.success(result.message);

                    setFormData({
                        fullName: "",
                        email: "",
                        phoneNumber: "",
                        company: "",
                        subject: "",
                        message: "",
                    });
                    setErrors({});
                } else {
                    toast.error("Failed to send inquiry. Try again.");
                }
            } catch (error) {
                console.error("Submission error:", error);
                toast.error("Something went wrong! Try again.");
            }
        } else {
            toast.error("Please fill all required fields before submitting!");
        }
    };


    return (
        <>
            <SubHeaderSection alt={'Contact_sub_head_image'} src={ContactSubHedImage} SubheadingDesc={'Have questions or need assistance? Our team is here to help with product details, quotations, or partnership inquiries.'} SubheadingTitle={'Contact Flow Wave'} width={'1000px'} />
            <Container>
                <div className='flex flex-col gap-52 py-100'>
                    <div className='flex w-full gap-20'>

                        <div className='flex flex-col gap-56 rounded-[15px] bg-white border border-divider px-32 py-40 w-full'>
                            <p className='font-montserrat font-medium text-32 text-muted_text'>Business Inquiry Form</p>

                            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-48'>

                                {/* ----------------------------- Name and Email ------------------------- */}
                                <div className='grid grid-cols-2 w-full gap-20'>
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
                                <div className='grid grid-cols-2 w-full gap-20'>
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
                                        placeholder={"Select Your Inquiry Type"}
                                        required={true}
                                        name={'subject'}
                                        onChange={handleChange}
                                        value={formData.subject}
                                        error={errors.subject}
                                    />
                                </div>


                                <div className='w-full flex flex-col gap-20'>
                                    <label htmlFor='message' className='font-montserrat font-medium text-black text-18'>Message <span className="text-red-500 font-montserrat font-medium text-18">*</span></label>
                                    <textarea
                                        className={`border font-medium font-montserrat text-18 text-muted_text rounded-lg py-16 px-16 focus:outline-none  transition-all duration-200 ${errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-divider'}`}
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
                                    <PrimaryButton title={'Send Request'} pl={36} pr={36} type={'submit'} />
                                </div>

                            </form>
                        </div>

                        <div className="flex flex-col gap-20">
                            <div className="flex flex-col items-start gap-56 rounded-[15px] bg-white border border-divider px-32 py-40 h-full">
                                <p className="font-montserrat font-medium text-32 text-muted_text">
                                    Contact Information
                                </p>

                                <div className='flex flex-col justify-between h-full gap-48'>

                                    {/* --------------------- Location ------------------------- */}
                                    <div className='flex gap-24 items-center'>
                                        <img src={Location} alt='location_icon' />
                                        <p className='font-montserrat font-normal text-20 text-muted_text'>AB / 309 Nil Nandish Complex , Behind Narayan Wadi , Opp Vatsalya Vatika , Bill , Vadodara , Gujarat , India</p>
                                    </div>
                                    {/* --------------------- Email ------------------------- */}
                                    <div className='flex gap-24 items-center'>
                                        <img src={Phone} alt='location_icon' />
                                        <p className='font-montserrat font-normal text-20 text-muted_text'>+91  9265753274</p>
                                    </div>
                                    {/* --------------------- Time ------------------------- */}
                                    <div className='flex gap-24 items-center'>
                                        <img src={Email} alt='location_icon' />
                                        <p className='font-montserrat font-normal text-20 text-muted_text'>flowwaveinstrument@gmail.com</p>
                                    </div>
                                    {/* --------------------- Location ------------------------- */}
                                    <div className='flex gap-24 items-center'>
                                        <img src={Time} alt='location_icon' />
                                        <p className='font-montserrat font-normal text-20 text-muted_text'>MON - FRI   08:00 AM -- 06:00 PM</p>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col items-start gap-56 rounded-[15px] bg-white border border-divider px-32 py-40 h-full'>
                                <div className='flex flex-col gap-24'>
                                    <p className="font-montserrat font-medium text-32 text-muted_text">
                                        Need Immediate Assistance?
                                    </p>
                                    <p className='font-montserrat font-normal text-20 text-muted_text'>Our technical support team is available to help with urgent inquiries</p>
                                </div>

                                <PrimaryButton title={'Call Now'} width={'100%'} />

                            </div>
                        </div>

                    </div>


                    <div className="w-full h-[500px] bg-amber-300 rounded-[15px] overflow-hidden">
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
