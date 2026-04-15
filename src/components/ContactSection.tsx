import { MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-12 md:py-16 lg:py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">Contato</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
          Vamos conversar sobre o seu caso
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-base md:text-lg">
          O primeiro passo para resolver sua questão jurídica é uma conversa. Entre em contato e agende sua consulta.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-colors group"
          >
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-base">(64) 99988-1043</p>
          </a>

          <a
            href="mailto:keniagarcia.advocacia@gmail.com"
            className="bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-colors group"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">E-mail</h3>
            <p className="text-muted-foreground text-base">keniagarcia.advocacia@gmail.com</p>
          </a>

          <div className="bg-card border border-border rounded-sm p-8">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">Atendimento</h3>
            <p className="text-muted-foreground text-base">Presencial e Online — Todo o Brasil</p>
          </div>
        </div>

        <a
          href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wide text-base"
        >
          <MessageCircle size={18} />
          Agende sua consulta agora
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
