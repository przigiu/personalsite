"use client";

import { useState } from "react";
import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectSection from "@/app/components/ProjectSection";

const inputClass =
  "border-b border-black/15 pb-2 bg-transparent font-normal text-[13px] leading-[1.4] text-black/75 focus:outline-none focus:border-black/40 transition-colors";
const labelClass =
  "font-medium text-[12px] leading-[13.82px] text-black/40 uppercase";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `From: ${name} <${email}>\n\n${message}`;
    const mailto = `mailto:przigiulia@outlook.com?subject=${encodeURIComponent(
      subject || "Hello from giuliaporzio.com",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="fluid-page">
      <ProjectNavbar />

      <h1 className="sr-only">Contact</h1>

      <ProjectSection className="pt-[6px]">
        <p className="font-normal text-[13px] leading-[1.4] text-black/75 pb-[38px]">
          Have a project in mind, a question, or just want to say hello? Fill out the form below, or email me directly at{" "}
          <a href="mailto:przigiulia@outlook.com" className="border-b border-black/75">
            przigiulia@outlook.com
          </a>
          .
        </p>
      </ProjectSection>

      <ProjectSection className="pt-[48px] md:pt-[91px] pb-[48px] md:pb-[91px]">
        <h2 className="font-bold text-[14px] leading-[13.82px] text-black/75">
          Let&apos;s start a conversation.
        </h2>
        <div className="h-[13.715px]" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] pt-4">
          <Field id="name" label="Name">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
          <Field id="email" label="Email">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
          <Field id="subject" label="Subject">
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field id="message" label="Message">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </Field>
          <div className="pt-[12px]">
            <button
              type="submit"
              className="font-normal text-[14px] leading-[13.82px] text-black/75 border-b border-black/75"
            >
              Send message →
            </button>
          </div>
        </form>
      </ProjectSection>
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}
