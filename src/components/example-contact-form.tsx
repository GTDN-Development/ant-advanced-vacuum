"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/contact-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AttachmentIcon } from "./icons/attachment-icon";
import { Textarea } from "./ui/text-area";
import { useState } from "react";

const contactFormSchema = z
  .object({
    email: z.email("Please enter valid email"),
    emailagain: z.email("Please re-enter a valid email address"),
    phone: z
      .string()
      .min(9, "Phone number must be at least 9 digits")
      .max(16, "Phone number is too long"),
    name: z.string().min(2, "Your name must be at least 2 characters"),
    institutionName: z.string().min(2, "Institution name must be at least 2 characters"),
    position: z.string().min(2, "Position must be at least 2 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    attachment: z
      .any()
      .optional()
      .refine((file) => !file || file.size <= 10 * 1024 * 1024, "File must be under 10MB"),
  })
  .refine((data) => data.email === data.emailagain, {
    path: ["emailagain"],
    message: "Emails must match",
  });

type ContactFormData = z.infer<typeof contactFormSchema>;

function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export function WishlistForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      emailagain: "",
      phone: "",
      name: "",
      institutionName: "",
      position: "",
      message: "",
      attachment: undefined,
    },
  });
  const [fileName, setFileName] = useState<string>("");

  const onSubmit = async (data: ContactFormData) => {
    try {
      let attachmentBase64 = "";
      let attachmentName = "";

      if (data.attachment) {
        const file = data.attachment as File;
        attachmentName = file.name;
        attachmentBase64 = await getBase64(file);
      }
      console.log("📦 Payload to be sent:");
      console.log({
        email: data.email,
        phone: data.phone,
        name: data.name,
        institution: data.institutionName,
        position: data.position,
        comment: data.message,
        attachment_name: attachmentName,
        attachment: attachmentBase64
          ? attachmentBase64.substring(0, 200) + "..." // jen prvních 200 znaků
          : null,
      });

      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          phone: data.phone,
          name: data.name,
          institution: data.institutionName,
          position: data.position,
          comment: data.message,
          attachment_name: attachmentName,
          attachment: attachmentBase64,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("❌ Server error:", error);
        return;
      }

      console.log("Form sent successfully!");
    } catch (err) {
      console.error("❌ Network or parsing error:", err);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <div className="h-3 w-3 bg-red-600"></div>
            <h1 className="text-2xl font-bold"> CONTACT FORM </h1>
          </div>
          <div className="flex flex-col gap-4">
            <FormField<ContactFormData>
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField<ContactFormData>
              control={form.control}
              name="emailagain"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email again" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField<ContactFormData>
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone (International format)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField<ContactFormData>
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField<ContactFormData>
              control={form.control}
              name="institutionName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Institution Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField<ContactFormData>
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField<ContactFormData>
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Comment" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attachment"
              render={({ field }) => (
                <FormItem className="">
                  <label
                    htmlFor="attachment-input"
                    className="group flex cursor-pointer items-center gap-2 text-gray-300 transition-colors hover:text-red-500"
                  >
                    <AttachmentIcon className="h-5 w-5 text-gray-300 group-hover:text-red-500" />
                    <span className="text-sm group-hover:text-red-500">
                      add attachment (max 10MB)
                    </span>
                  </label>

                  <FormControl className="text- border-none shadow-transparent">
                    <input
                      id="attachment-input"
                      className="hidden"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                        setFileName(file ? file.name : "");
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                  {fileName && <p className="mt-1 text-sm text-gray-400">Selected: {fileName}</p>}
                </FormItem>
              )}
            />
            <div className="flex flex-col items-start gap-4">
              <p className="w-full text-gray-300">
                by submitting the form i agree to acknowledge the processing of{" "}
                <a href="/" className="text-red-600 hover:underline">
                  personal data
                </a>
              </p>
              <Button type="submit" className="mt-6">
                Odeslat
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
