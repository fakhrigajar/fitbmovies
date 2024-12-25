import React, { useRef } from "react";
import { StyledSection } from "../../assets/styles/styled.components";
import contactImage from "../../assets/images/hero-image.png";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { contactSchema } from "../../validations/contact.validation";

function ContactForm() {
  const { values, errors, handleChange, resetForm } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
  });

  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    if (
      Object.values(values).every((field) => field.trim() !== "") &&
      Object.keys(errors).length === 0
    ) {
      emailjs
        .sendForm("service_w7ttlj9", "template_o54layb", form.current, {
          publicKey: "bzj7XofiRWUJhFwDn",
        })
        .then(() => {
          toast.success("Message sent succesfully");
          resetForm();
        })
        .catch((error) => {
          toast.error("There is an error!");
          console.log(error);
        });
    } else {
      toast.error("Please fill all fields!");
    }
  };

  console.log(values);

  return (
    <StyledSection className="!py-8">
      <div className="flex flex-col desktop:grid grid-cols-2 gap-10 desktop:gap-20">
        <Flex vertical className="gap-6 sm:gap-[50px]">
          <Flex vertical gap={14}>
            <h1 className="desktop:font-bold desktop:text-[38px] sm:font-semibold sm:text-3xl text-2xl">
              Welcome to our support page!
            </h1>
            <p className="text-gray-60 text-sm sm:text-lg">
              We're here to help you with any problems you may be having with
              our product.
            </p>
          </Flex>
          <img
            className="rounded-2xl  overflow-hidden"
            src={contactImage}
            alt="Contact Us Image"
          />
        </Flex>
        <form
          name="basic"
          autoComplete="off"
          onSubmit={sendMessage}
          onChange={handleChange}
          ref={form}
          className="rounded-xl bg-dark-06 border border-dark-15 desktop:p-10 p-5 flex flex-col gap-2"
        >
          <div className="grid desktop:grid-cols-2 gap-4 desktop:gap-5">
            <div>
              <Flex vertical gap={10}>
                <label className="text-white">First Name</label>
                <Input
                  value={values.firstName}
                  name="firstName"
                  placeholder="Enter your first name"
                  type="text"
                  className={`py-4 !bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:!bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30 ${
                    errors.firstName &&
                    "border-primary-45 hover:!border-primary-45 focus:!border-primary-45"
                  }`}
                />
                <p className="text-xs text-primary-45">{errors.firstName}</p>
              </Flex>
            </div>
            <div>
              <Flex vertical gap={10}>
                <label className="text-white">Last Name</label>
                <Input
                  value={values.lastName}
                  name="lastName"
                  placeholder="Enter your last name"
                  type="text"
                  className={`py-4 bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:!bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30 ${
                    errors.lastName &&
                    "border-primary-45 hover:!border-primary-45 focus:!border-primary-45"
                  }`}
                />
                <p className="text-xs text-primary-45">{errors.lastName}</p>
              </Flex>
            </div>
          </div>
          <div>
            <Flex vertical gap={10}>
              <label className="text-white">Email</label>
              <Input
                value={values.email}
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`py-4 bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:!bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30 ${
                  errors.email &&
                  "border-primary-45 hover:!border-primary-45 focus:!border-primary-45"
                }`}
              />
              <p className="text-xs text-primary-45">{errors.email}</p>
            </Flex>
          </div>
          <div>
            <Flex vertical gap={10}>
              <label className="text-white">Message</label>
              <TextArea
                value={values.message}
                name="message"
                placeholder="Enter your message"
                rows={4}
                className={`py-4 !resize-none placeholder:text-dark-30 bg-dark-08 border border-dark-15 text-gray-99 hover:bg-dark-08 focus:!bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30 ${
                  errors.message &&
                  "border-primary-45 hover:!border-primary-45 focus:!border-primary-45"
                }`}
              />
              <p className="text-xs text-primary-45">{errors.message}</p>
            </Flex>
          </div>
          <Flex className="flex-col gap-5 justify-between">
            <Checkbox className="text-gray-60">
              I agree with Terms of Use and Privacy Policy
            </Checkbox>

            <Button
              type="submit"
              className="py-[18px] px-6 bg-primary-45 text-white border-none hover:!border-primary-45 hover:!bg-primary-55 hover:!text-white"
              htmlType="submit"
            >
              Send Message
            </Button>
          </Flex>
        </form>
      </div>
    </StyledSection>
  );
}

export default ContactForm;
