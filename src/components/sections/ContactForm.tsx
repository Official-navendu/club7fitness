import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer h-14 w-full rounded-xl border border-border bg-card px-4 pt-5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Message sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* ===== Info ===== */}
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's talk fitness
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions about memberships, classes, or training? Drop us a line and we'll
            respond within one business day.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              { Icon: MapPin, label: "Address", value: "221 Strength Avenue, Downtown" },
              { Icon: Phone, label: "Phone", value: "+1 (555) 000-7777" },
              { Icon: Mail, label: "Email", value: "hello@club7.fit" },
              { Icon: Clock, label: "Hours", value: "Mon–Fri 5:00–23:00" },
            ].map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm text-foreground">{value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Form ===== */}
        <form
          onSubmit={submit}
          className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FloatingInput
              id="name"
              label="Full name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <FloatingInput
              id="email"
              label="Email address"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
          </div>
          <div className="mt-5">
            <FloatingInput
              id="phone"
              label="Phone (optional)"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />
          </div>
          <div className="relative mt-5">
            <textarea
              id="message"
              value={form.message}
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder=" "
              rows={5}
              className="peer w-full rounded-xl border border-border bg-card px-4 pb-3 pt-6 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-3 text-xs text-primary transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary"
            >
              Your message
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-gradient px-6 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] active:scale-95 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>

      {/* ===== Map ===== */}
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Club 7 Fitness location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.74&layer=mapnik"
            className="h-80 w-full md:h-96"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
