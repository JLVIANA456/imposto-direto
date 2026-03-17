import { motion, AnimatePresence } from "framer-motion";

interface DiagnosticQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  detail?: string;
  onAnswer: (answer: boolean) => void;
  onBack: () => void;
}

const DiagnosticQuestion = ({
  questionNumber,
  totalQuestions,
  question,
  detail,
  onAnswer,
  onBack,
}: DiagnosticQuestionProps) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-lg mx-auto px-6">
      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider uppercase"
        >
          ← Voltar
        </button>
        <span className="text-xs text-muted-foreground tabular-nums tracking-wider">
          {questionNumber} / {totalQuestions}
        </span>
      </div>
      <div className="h-px w-full bg-border overflow-hidden mb-10">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={questionNumber}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          className="bg-card border border-border p-10"
        >
          {/* Gold accent */}
          <div className="w-8 h-px bg-accent mb-6" />

          <span className="text-xs font-normal text-muted-foreground tracking-widest uppercase mb-5 block">
            Questão {String(questionNumber).padStart(2, "0")}
          </span>

          <h2
            className="text-xl font-extralight text-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: question }}
          />

          {detail && (
            <p className="text-xs text-muted-foreground leading-relaxed mb-10">
              {detail}
            </p>
          )}

          {!detail && <div className="mb-10" />}

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onAnswer(true)}
              className="h-12 border border-border text-foreground font-normal text-sm tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-[0.98] will-change-transform"
            >
              Sim
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="h-12 border border-border text-foreground font-normal text-sm tracking-wider uppercase transition-all duration-200 hover:bg-foreground hover:text-background hover:border-foreground active:scale-[0.98] will-change-transform"
            >
              Não
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DiagnosticQuestion;
