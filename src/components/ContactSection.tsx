import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = encodeURIComponent(
      `Olá, meu nome é ${formData.name}.\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/5564999881043?text=${text}`, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será direcionado para enviar sua mensagem.",
    });

    setSending(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-12 md:py-16 lg:py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">Contato</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            O primeiro passo para resolver sua questão jurídica é uma conversa. Entre em contato e agende sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Formulário */}
          <div className="bg-primary rounded-sm p-8 md:p-10 order-1 lg:order-2">
            <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground text-center mb-2">
              Entre em Contato Agora Mesmo
            </h3>
            <p className="text-primary-foreground/80 text-center mb-8">
              Realize uma Consulta
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu Melhor E-mail"
                required
                maxLength={255}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone/WhatsApp"
                required
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 resize-y"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-foreground text-background font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity text-base"
              >
                Solicitar Atendimento
              </button>
            </form>
          </div>

          {/* Cards de contato */}
          <div className="space-y-4 order-2 lg:order-1">
            <a
              href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors group"
            >
              <MessageCircle className="w-8 h-8 text-primary shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground text-base">(64) 99988-1043</p>
              </div>
            </a>

            <a
              href="mailto:keniagarcia.advocacia@gmail.com"
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors group"
            >
              <Mail className="w-8 h-8 text-primary shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">E-mail</h3>
                <p className="text-muted-foreground text-sm break-all">keniagarcia.advocacia@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-card border border-border rounded-sm p-6">
              <MapPin className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">Atendimento</h3>
                <p className="text-muted-foreground text-base">Presencial e Online — Todo o Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
