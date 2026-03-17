import { useState, useCallback } from "react";
import DiagnosticLanding from "@/components/DiagnosticLanding";
import DiagnosticQuestion from "@/components/DiagnosticQuestion";
import DiagnosticResult from "@/components/DiagnosticResult";

const questions = [
  {
    question:
      'Em 2025 você recebeu rendimentos tributáveis acima de <span class="font-medium">R$ 35.584,00</span>?',
    detail: 'Exemplos: salários, pró-labore, aposentadoria, pensão, aluguel e demais rendimentos tributáveis.',
  },
  {
    question:
      'Em 2025 você recebeu rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte acima de <span class="font-medium">R$ 200.000,00</span>?',
    detail: 'Exemplos: dividendos, FGTS, rendimentos de poupança, indenizações e aplicações com tributação exclusiva.',
  },
  {
    question:
      'Em 2025 você teve ganho de capital na venda de bens ou direitos?',
    detail: 'Exemplos: imóvel, veículo, participação societária ou outros bens com lucro na alienação.',
  },
  {
    question:
      'Em 2025 você operou em bolsa e vendeu mais de <span class="font-medium">R$ 40.000,00</span>, ou teve ganho líquido tributável?',
    detail: 'Inclui bolsa de valores, mercadorias, futuros e assemelhadas.',
  },
  {
    question:
      'Em 2025 você teve atividade rural com receita bruta acima de <span class="font-medium">R$ 177.920,00</span>, ou pretende compensar prejuízos rurais?',
    detail: 'Considere a receita bruta da atividade rural e eventual compensação de prejuízos de anos anteriores ou do próprio ano.',
  },
  {
    question:
      'Em 31/12/2025 você possuía bens ou direitos em valor total superior a <span class="font-medium">R$ 800.000,00</span>?',
    detail: 'Exemplos: imóveis, veículos, aplicações, participações societárias e demais bens e direitos.',
  },
  {
    question:
      'Em 2025 você passou à condição de residente no Brasil e permaneceu nessa condição até 31/12/2025?',
    detail: 'Aplica-se a quem adquiriu residência fiscal no Brasil durante 2025.',
  },
  {
    question:
      'Em 2025 você vendeu imóvel residencial e utilizou a isenção por reinvestimento na compra de outro imóvel em até 180 dias?',
    detail: 'A utilização dessa isenção é um dos critérios de obrigatoriedade de entrega.',
  },
  {
    question:
      'Em 2025 você possuía aplicações financeiras no exterior ou recebeu rendimentos desses investimentos?',
    detail: 'Inclui rendimentos e variações patrimoniais relacionados a aplicações financeiras no exterior.',
  },
  {
    question:
      'Em 2025 você possuía trust, entidade controlada no exterior, ou recebeu rendimentos, lucros ou dividendos do exterior?',
    detail: 'Inclui estruturas no exterior com impacto nas regras de obrigatoriedade da declaração.',
  },
];

type Phase = "landing" | "questions" | "result";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("landing");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleStart = useCallback(() => {
    setPhase("questions");
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback(
    (answer: boolean) => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setPhase("result");
      }
    },
    [answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion === 0) {
      setPhase("landing");
    } else {
      setCurrentQuestion((prev) => prev - 1);
      setAnswers((prev) => prev.slice(0, -1));
    }
  }, [currentQuestion]);

  const mustDeclare = answers.some((a) => a === true);

  return (
    <div className="min-h-screen flex items-center justify-center py-16 relative overflow-hidden">
      {/* 45° geometric background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large rotated diamond top-right */}
        <div className="absolute -top-32 -right-32 w-64 h-64 border border-border/40 rotate-45" />
        {/* Medium diamond bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 border border-border/30 rotate-45" />
        {/* Small accent diamond */}
        <div className="absolute top-1/4 right-[10%] w-16 h-16 border border-accent/20 rotate-45" />
        {/* Thin 45° line across */}
        <div className="absolute top-0 left-0 w-[200%] h-px bg-border/20 origin-top-left rotate-45" />
        {/* Small filled diamond */}
        <div className="absolute bottom-1/3 left-[8%] w-3 h-3 bg-accent/15 rotate-45" />
        {/* Another subtle diamond */}
        <div className="absolute top-[15%] left-[20%] w-8 h-8 border border-border/20 rotate-45" />
      </div>

      <div className="relative z-10 w-full">
        {phase === "landing" && <DiagnosticLanding onStart={handleStart} />}
        {phase === "questions" && (
          <DiagnosticQuestion
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            question={questions[currentQuestion].question}
            detail={questions[currentQuestion].detail}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        )}
        {phase === "result" && (
          <DiagnosticResult mustDeclare={mustDeclare} onRestart={handleStart} />
        )}
      </div>
    </div>
  );
};

export default Index;
