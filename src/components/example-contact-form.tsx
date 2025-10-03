"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/contact-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AttachmentIcon } from "./icons/attachment-icon";
import { Textarea } from "./ui/text-area";

const contactFormSchema = z.object({
  email: z.string().email("wrong email"),
  emailagain: z.string().email("wrong email"),
  phone: z.string().min(9, "wrong phone"),
  name: z.string().min(2, "wrong name"),
  institutionName: z.string().min(2, "wrong institution"),
  position: z.string().min(2, "wrong position"),
  message: z.string().min(5, "wrong message"),
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
          <div className="gap-4">
            <div className="mb-4 h-5 w-5 bg-red-600"></div>
            <h1 className="text-2xl font-bold"> CONTACT FORM </h1>
          </div>
          <div className="">
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
                    <Input
                      placeholder="Phone (International format)"
                      {...field}
                      className="rounded-none"
                    />
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
                    <Input placeholder="Name" {...field} className="rounded-none" />
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
                    <Input placeholder="Institution Name" {...field} className="rounded-none" />
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
                    <Input placeholder="Your position" {...field} className="rounded-none" />
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

            <Button type="submit">Odeslat</Button>
            <div className="flex items-center gap-2 text-gray-300">
              <AttachmentIcon className="h-4 w-4 text-gray-300" />
              <p>add attachment max 10MB</p>
            </div>
            <div className="mt-20 flex flex-col items-center gap-8">
              <div className="w-50 bg-amber-700">SPACE FOR CAPTCHA</div>
              <p className="text-gray-300">
                by submitting the form i agree to acknowledge the processing of{" "}
                <a href="/terms" className="text-red-600 hover:underline">
                  personal data
                </a>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
