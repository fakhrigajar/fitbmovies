import React from "react";
import { StyledSection } from "../../assets/styles/styled.components";
import contactImage from "../../assets/images/hero-image.png";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function ContactForm() {
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
        <Form className="rounded-xl bg-dark-06 border border-dark-15 desktop:p-10 p-5">
          <div className="grid desktop:grid-cols-2 desktop:gap-5">
            <Form.Item>
              <Flex vertical gap={10}>
                <label className="text-white">First Name</label>
                <Input
                  placeholder="Enter your first name"
                  type="text"
                  className="py-4 bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30"
                />
              </Flex>
            </Form.Item>
            <Form.Item>
              <Flex vertical gap={10}>
                <label className="text-white">Last Name</label>
                <Input
                  placeholder="Enter your last name"
                  type="text"
                  className="py-4 bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30"
                />
              </Flex>
            </Form.Item>
          </div>
          <Form.Item>
            <Flex vertical gap={10}>
              <label className="text-white">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="py-4 bg-dark-08 border placeholder:text-dark-30 border-dark-15 text-gray-99 hover:bg-dark-08 focus:bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30"
              />
            </Flex>
          </Form.Item>
          <Form.Item>
            <Flex vertical gap={10}>
              <label className="text-white">Message</label>
              <TextArea
                placeholder="Enter your message"
                rows={4}
                className="py-4 !resize-none placeholder:text-dark-30 bg-dark-08 border border-dark-15 text-gray-99 hover:bg-dark-08 focus:bg-dark-08 hover:!border-dark-20 focus:bg-transparent focus:!border-dark-30"
              />
            </Flex>
          </Form.Item>
          <Flex className="flex-col desktop:flex-row desktop:items-center gap-5 justify-between">
            <Checkbox className="text-gray-60">
              I agree with Terms of Use and Privacy Policy
            </Checkbox>

            <Button className="py-[18px] px-6 bg-primary-45 text-white border-none hover:!border-primary-45 hover:!bg-primary-55 hover:!text-white">
              Send Message
            </Button>
          </Flex>
        </Form>
      </div>
    </StyledSection>
  );
}

export default ContactForm;
