import { motion } from "framer-motion";
import logo from "@/assets/logo-jlviana.png";

interface DiagnosticLandingProps {
  onStart: () => void;
}

const DiagnosticLanding = ({ onStart }: DiagnosticLandingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className="flex flex-col items-center text-center max-w-lg mx-auto px-6"
    >
      <img src={logo} alt="JL Viana Consultoria Contábil" className="h-14 mb-12" />

      {/* Gold accent line */}
      <div className="w-12 h-px bg-accent mb-8" />

      <h1 className="text-3xl font-extralight tracking-wide text-foreground mb-4 uppercase">
        Diagnóstico IRPF 2026
      </h1>

      <p className="text-sm text-muted-foreground leading-relaxed mb-2 tracking-wide">
        Baseado na Instrução Normativa RFB Nº 2312.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-12">
        Responda algumas perguntas para saber se você precisa declarar.
      </p>

      <button
        onClick={onStart}
        className="h-12 px-10 rounded-sm bg-primary text-primary-foreground font-normal text-sm tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-[0.98] will-change-transform"
      >
        Iniciar Verificação
      </button>

      <p className="text-xs text-muted-foreground mt-8 tracking-wider uppercase">
        Tempo estimado: 3 minutos
      </p>

      {/* Contact info */}
      <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
        <a
          href="mailto:contabilidade@jlviana.com.br"
          className="hover:text-primary transition-colors duration-200"
        >
          contabilidade@jlviana.com.br
        </a>
        <span className="w-px h-3 bg-border" />
        <a
          href="https://wa.me/5511940003954"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-200"
        >
          (11) 94000-3954
        </a>
      </div>
    </motion.div>
  );
};

export default DiagnosticLanding;
