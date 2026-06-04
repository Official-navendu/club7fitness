import { useState, memo } from "react";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Send, MessageCircle, UserCheck, ShieldCheck } from "lucide-react";

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
}: FloatingInputProps) {
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
    toast.success("Inquiry submitted successfully! Our team will connect shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  const getWhatsAppLink = () => {
    const phone = "918810469577";
    const message = "Hello Club 7 Fitness, I would like to inquire about your premium memberships.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= PREMIUM CONTACT CARDS ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Card 1: WhatsApp */}
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border border-border bg-card shadow-soft hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 hover:shadow-glow text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary-gradient shadow-soft mb-5">
              <MessageCircle className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              Chat on WhatsApp
            </h3>
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              +91 88104 69577
            </p>
            <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Click to message &rarr;
            </span>
          </a>

          {/* Card 2: Reception */}
          <div className="group p-6 rounded-2xl border border-border bg-card shadow-soft hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 hover:shadow-elegant text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary-gradient shadow-soft mb-5">
              <Phone className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              Reception Desk
            </h3>
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              +91 92175 14428
            </p>
            <span className="text-xs text-muted-foreground">
              Call for membership details
            </span>
          </div>

          {/* Card 3: Owner */}
          <div className="group p-6 rounded-2xl border border-border bg-card shadow-soft hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 hover:shadow-elegant text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary-gradient shadow-soft mb-5">
              <UserCheck className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              Direct Owner Escalation
            </h3>
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              +91 88824 51016
            </p>
            <span className="text-xs text-muted-foreground">
              Direct support and feedback
            </span>
          </div>

          {/* Card 4: Location */}
          <div className="group p-6 rounded-2xl border border-border bg-card shadow-soft hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 hover:shadow-elegant text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary-gradient shadow-soft mb-5">
              <MapPin className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              Nearest Metro
            </h3>
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              Nawada Metro Station
            </p>
            <span className="text-xs text-muted-foreground">
              Just 2 minutes walk from station
            </span>
          </div>

        </div>

        {/* ================= FORM & INFO SPLIT ================= */}
        <div className="grid gap-12 lg:grid-cols-5 text-left">
          
          {/* Info Side */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Inquire
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to transform? Let's talk today.
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Reach out to schedule a complimentary facility tour, check membership pricing, or request a slot with our expert trainers.
              </p>

              <div className="mt-8 space-y-6">
                
                {/* Address details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Facility Location
                    </h4>
                    <p className="text-sm text-foreground mt-0.5 leading-relaxed">
                      B-17, Main Matiala Road,<br />
                      Nawada, Uttam Nagar,<br />
                      New Delhi, 110059
                    </p>
                  </div>
                </div>

                {/* Hours details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Hours of Operation
                    </h4>
                    <div className="text-sm text-foreground mt-0.5 space-y-0.5">
                      <p>Mon–Fri: 5:00 AM – 11:00 PM</p>
                      <p>Sat: 7:00 AM – 9:00 PM</p>
                      <p>Sun: 8:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick response note */}
            <div className="mt-8 lg:mt-0 p-5 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3.5 items-start">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">
                  Quick Response Guarantee
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  Our digital support team responds to all online submissions and WhatsApp inquiries within 30 minutes during operational hours.
                </p>
              </div>
            </div>

          </div>

          {/* Form Side */}
          <form
            onSubmit={submit}
            className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10 lg:col-span-3 flex flex-col justify-between"
          >
            <div className="space-y-5">
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
              <div>
                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  required
                />
              </div>
              <div className="relative">
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
                  Describe your fitness goals or inquiry
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-gradient px-6 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] active:scale-95 disabled:opacity-60 cursor-pointer"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

        </div>

      </div>

      {/* ================= 3. MAP UPDATE ================= */}
      <MapComponent />

    </section>
  );
}

const MapComponent = memo(function MapComponent() {
  // Embed accurate public Google Map pointing to exact Nawada location
  const mapEmbedUrl = "https://maps.google.com/maps?q=B-17%20Main%20Matiala%20Road,%20Nawada,%20Uttam%20Nagar,%20Delhi%20110059&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
        <iframe
          title="Club 7 Fitness Google Maps Location"
          src={mapEmbedUrl}
          className="h-[380px] w-full md:h-[450px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
});
