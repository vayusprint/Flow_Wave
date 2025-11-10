import { useState } from 'react'
import Container from '../components/Container'
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { toast } from 'react-toastify';

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
        <Container>
            <div className='flex w-full gap-20'>
                <div className='flex flex-col gap-56 rounded-[15px] bg-white border border-divider px-32 py-40 w-full '>
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
            </div>
        </Container>
    )
}

export default ContactPage
