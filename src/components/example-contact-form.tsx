"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/contact-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AttachmentIcon } from "./icons/attachment-icon";
import { Textarea } from "./ui/text-area";

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
  })
  .refine((data) => data.email === data.emailagain, {
    path: ["emailagain"],
    message: "Emails must match",
  });

type ContactFormData = z.infer<typeof contactFormSchema>;

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
    },
  });

  function onSubmit(data: ContactFormData) {
    console.log("data", data);
  }

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
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <AttachmentIcon className="h-4 w-4 text-gray-300" />
                <p>add attachment max 10MB</p>
              </div>
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
