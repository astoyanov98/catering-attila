"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  id?: string;
  className?: string;
};

type Status = {
  type: "" | "success" | "error";
  message: string;
};

const endpoint = [
  "https://api",
  ["web", "3", "forms"].join(""),
  "com/submit",
].join(".");

const keyFieldName = ["access", "key"].join("_");
const formKey = "a68197a7-ba93-4fa4-ad29-e6880c138658";

export function ContactForm({
  id = "contact",
  className = "rounded-[28px] border border-accent/35 bg-white p-6 shadow-[0_24px_70px_rgba(107,46,15,0.08)] sm:p-8",
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append(keyFieldName, formKey);
      formData.append("subject", "Ново запитване от Attila Catering");

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean };

      if (data.success) {
        setStatus({
          type: "success",
          message: "Съобщението е изпратено успешно! Ще се свържем с вас скоро.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: "Възникна грешка. Моля, опитайте отново.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Възникна грешка. Моля, опитайте отново.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-accent/45 bg-white px-4 py-3 text-site-text outline-none transition-colors focus:border-primary disabled:opacity-50";

  return (
    <form id={id} onSubmit={handleSubmit} className={className}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-primary">Име</span>
          <input
            type="text"
            name="name"
            required
            disabled={isLoading}
            className={inputClass}
            placeholder="Вашето име"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-primary">Телефон</span>
          <input
            type="tel"
            name="phone"
            required
            disabled={isLoading}
            className={inputClass}
            placeholder="+359..."
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-primary">Имейл</span>
          <input
            type="email"
            name="email"
            required
            disabled={isLoading}
            className={inputClass}
            placeholder="ime@primer.bg"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-primary">Брой гости</span>
          <input
            type="number"
            name="guests"
            min="1"
            disabled={isLoading}
            className={inputClass}
            placeholder="Напр. 40"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-primary">Съобщение</span>
        <textarea
          name="message"
          required
          rows={6}
          disabled={isLoading}
          className={`${inputClass} resize-none`}
          placeholder="Опишете събитието, дата, локация и предпочитано меню"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(107,46,15,0.24)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
        >
          {isLoading ? "Изпращане..." : "Изпрати запитване"}
        </button>

        {status.message ? (
          <p
            className={
              status.type === "success"
                ? "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                : "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            }
            role="status"
          >
            {status.message}
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-site-text/60">
        Ще използваме информацията само за да отговорим на запитването ви.
      </p>
    </form>
  );
}

export default ContactForm;
