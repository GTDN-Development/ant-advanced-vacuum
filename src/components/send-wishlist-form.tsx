"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/contact-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AttachmentIcon } from "./icons/attachment-icon";
import { Textarea } from "./ui/textarea";
import { useRef, useState } from "react";
import type { Technology } from "../lib/technologies";

import { TurnstileComponent } from "./turnstile/turnstile";
import type { TurnstileRef } from "./turnstile/turnstile";

const SendWishlistFormSchema = z
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
    message: z.string().optional(),
    attachments: z
      .array(z.any())
      .optional()
      .refine(
        (files) => !files || files.every((file) => file.size <= 10 * 1024 * 1024),
        "Each file must be under 10MB"
      )
      .refine(
        (files) =>
          !files || files.reduce((total, file) => total + file.size, 0) <= 10 * 1024 * 1024,
        "Total attachment size must be under 10MB"
      ),
  })
  .refine((data) => data.email === data.emailagain, {
    path: ["emailagain"],
    message: "Emails must match",
  });

type SendWishlistFormData = z.infer<typeof SendWishlistFormSchema>;

interface SendWishlistFormProps {
  wishlist: Technology[];
}

function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export function SendWishlistForm({ wishlist }: SendWishlistFormProps) {
  const form = useForm<SendWishlistFormData>({
    resolver: zodResolver(SendWishlistFormSchema),
    defaultValues: {
      email: "",
      emailagain: "",
      phone: "",
      name: "",
      institutionName: "",
      position: "",
      message: "",
      attachments: [],
    },
  });
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const turnstileRef = useRef<TurnstileRef>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const onSubmit = async (data: SendWishlistFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      let attachments: string[] = [];

      if (data.attachments && data.attachments.length > 0) {
        attachments = await Promise.all(
          data.attachments.map(async (file) => {
            return await getBase64(file as File);
          })
        );
      }
      if (!turnstileToken) {
        alert("prosím ověřte");
        return;
      }

      const payload = {
        turnstileToken,
        email: data.email,
        phone: data.phone,
        name: data.name,
        institution: data.institutionName,
        position: data.position,
        comment: data.message || "",
        wishlist: wishlist.map((tech) => ({
          name: tech.name,
          slug: tech.slug,
          technologySection: tech.technologySection,
        })),
        ...(attachments.length > 0 && {
          attachments: attachments.map((base64, index) => ({
            name: (data.attachments![index] as File).name,
            base64: base64,
          })),
        }),
      };

      console.log("📦 Payload to be sent:", {
        ...payload,
        ...(payload.attachments && {
          attachments: payload.attachments.map((att) => ({
            name: att.name,
            base64: att.base64?.substring(0, 200) + "...",
          })),
        }),
      });

      const response = await fetch(
        "https://advancedvacuum.antstudio.dev/wp-json/wp/v2/form-process",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payload }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Server error:", errorText);
        setSubmitStatus("error");
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log("✅ Form sent successfully!", result);
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        form.reset();
        setFileNames([]);
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        setSubmitStatus("idle");
      }, 3000);
    } catch (err) {
      console.error("❌ Network or parsing error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <div className="h-3 w-3 bg-red-600"></div>
            <h1 className="text-2xl font-bold">Contact form</h1>
          </div>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailagain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Confirm Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email again *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone (International format) *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institutionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Institution Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution Name *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Your position *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Comment" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="group flex cursor-pointer items-center gap-2 text-gray-400 hover:text-red-500">
                    <AttachmentIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400 group-hover:text-red-500"
                    />
                    <span className="text-sm group-hover:text-red-500">
                      add attachments (max 10MB total)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      multiple
                      className="sr-only"
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        field.onChange(files);
                        setFileNames(files.map((file) => file.name));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                  {fileNames.length > 0 && (
                    <div className="mt-1 text-sm text-gray-400">
                      <p>Selected files:</p>
                      <ul className="ml-4 list-disc">
                        {fileNames.map((name, index) => (
                          <li key={index}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </FormItem>
              )}
            />
            <TurnstileComponent
              ref={turnstileRef}
              onSuccess={(t) => setTurnstileToken(t)}
              onError={() => setTurnstileToken(null)}
              onExpire={() => setTurnstileToken(null)}
              className="flex justify-center"
            />
            <div className="flex flex-col items-start gap-4">
              <p className="w-full text-gray-400">
                By submitting the form I agree to acknowledge the processing of{" "}
                <a href="/" className="text-red-600 hover:underline">
                  personal data
                </a>
                .
              </p>
              <Button type="submit" className="mt-6" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Odeslat"}
              </Button>
              {submitStatus === "success" && (
                <p className="mt-2 text-sm text-green-600">Form sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-2 text-sm text-red-600">Failed to send form. Please try again.</p>
              )}
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

// Implementována Cloudflare Turnstile Captcha.
// Po úspěšném ověření na frontendu dostaneme od Cloudflare `turnstileToken`.
// Ten je nutné ověřit na backendu podle dokumentace:
// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
