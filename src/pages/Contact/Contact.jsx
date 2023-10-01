import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const form = useRef();


  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string().email("Email is invalid").required("email is required!"),
    message: Yup.string().required("email is required!")
  })

 
  const sendEmail = () => {
    

    emailjs.sendForm('service_ggismw7', 'template_k687oj7', form.current, 'JqxwnroRewv8Ylwal')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <main>
      <div className="w-[90%] m-auto text-slate-900 flex flex-col md:flex-row mt-40 justify-around">
          <div className="w-full md:w-1/2 p-2">
            <h1 className="font-normal text-3xl my-3 dark:text-yellow-400">Contact Info</h1>
            <p className="text-xl dark:text-white font-medium">Let Connect Here send me message i will asnwe to you ASAP! Let conncet Here Send Me a Message</p>
            <div className="flex gap-4 mt-2 items-center text-slate-900 dark:text-white">
              <BsTelephoneOutboundFill /> +25261 9 69 07 05
            </div>
            <div className="flex gap-4 mt-2 items-center text-slate-900 dark:text-white">
              <MdEmail /> walaalpakar08@gmai.com
            </div>
          </div>
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
          > 

          <Form ref={form} className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3 p-2">
            <Field ype="text"  placeholder="name" name="name" autoComplete="off" className="w-full m-2 outline-none text-xl font-normal border py-2 px-4 rounded dark:bg-slate-800 dark:border-gray-200 dark:text-white" />
             <ErrorMessage name="name" component={"div"} className="text-base p-2 -mt-6 ml-1 text-red-500" /> 
             <Field type="email" placeholder="email" name="email" autoComplete="off" className="w-full m-2 outline-none text-xl font-normal border py-2 px-4 rounded dark:bg-slate-800 dark:border-gray-200 dark:text-white"/>
             <ErrorMessage name="email" component={"div"} className="text-base p-2 -mt-6 ml-1 text-red-500" /> 
             <Field as="textarea" name="message" id="" placeholder="write any thing you want!" autoComplete="off" className="w-full m-2 outline-none text-xl font-normal border py-2 px-4 rounded h-40 dark:bg-slate-800 dark:border-gray-200 dark:text-white" />
             <ErrorMessage name="message" component={"div"} className="text-base p-2 -mt-6 ml-1 text-red-500" />
             <Field type="submit" value="send message" className="w-full m-2 outline-none text-xl font-normal border py-2 px-4 rounded bg-slate-900 text-yellow-400 dark:bg-yellow-400 dark:text-slate-900 border-none cursor-pointer opacity-90"/> 
          </Form>
          
           </Formik>
      </div>
    </main>
  )
}
