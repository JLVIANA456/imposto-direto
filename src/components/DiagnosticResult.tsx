import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";
import logo from "@/assets/logo-jlviana.png";

interface DiagnosticResultProps {
  mustDeclare: boolean;
  onRestart: () => void;
}

const DiagnosticResult = ({ mustDeclare, onRestart }: DiagnosticResultProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      className="w-full max-w-lg mx-auto px-6 text-center"
    >
      <div className="bg-card border border-border p-12 mb-8">
        {/* Gold accent */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-px bg-accent" />
        </div>

        <div className="flex justify-center mb-8">
          {mustDeclare ? (
            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-full border border-success/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
          )}
        </div>

        <h2 className="text-2xl font-extralight text-foreground mb-4 tracking-wide">
          {mustDeclare
            ? "Você provavelmente precisa declarar"
            : "Você provavelmente não precisa declarar"}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed mb-10">
          {mustDeclare
            ? "Com base nas suas respostas, pelo menos um critério de obrigatoriedade da IN RFB Nº 2312/2026 foi atendido. Recomendamos consultar um contador para confirmar."
            : "Com base nas suas respostas, nenhum dos critérios verificados indica obrigatoriedade. Ainda assim, consulte um profissional para uma análise completa."}
        </p>

        <a
          href="https://www.legisweb.com.br/legislacao/?id=467612"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline tracking-wider uppercase"
        >
          Consultar IN RFB Nº 2312/2026 →
        </a>
      </div>

      <button
        onClick={onRestart}
        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider uppercase"
      >
        Refazer diagnóstico
      </button>

      {/* Contact section */}
      <div className="mt-14 space-y-4">
        <div className="w-8 h-px bg-accent mx-auto" />
        <p className="text-xs text-muted-foreground tracking-wider uppercase">
          Fale conosco
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:contabilidade@jlviana.com.br"
            className="text-xs text-foreground/70 hover:text-primary transition-colors duration-200"
          >
            contabilidade@jlviana.com.br
          </a>
          <a
            href="https://wa.me/5511940003954"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-sm bg-[hsl(142,71%,45%)] text-[hsl(0,0%,100%)] text-xs font-normal tracking-wider uppercase transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img src={logo} alt="JL Viana Consultoria Contábil" className="h-8 opacity-40" />
      </div>
    </motion.div>
  );
};

export default DiagnosticResult;
