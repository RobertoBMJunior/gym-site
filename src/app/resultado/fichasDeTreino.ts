// fichasDeTreino.ts

interface ExerciseList {
  name: string
  sets: string | number
  reps: string | number
  rest: string | number
}

interface TrainingPlan {
  label: string
  caption: string
  exercises: ExerciseList[]
}

interface WorkOutPlan {
  id: string
  title: string
  pdfFile: string
  workOutRoutine: TrainingPlan[]
}

export const fichasDeTreino: WorkOutPlan[] = [
  {
    id: 'fullBodyCalisteniaIniciante',
    title: 'Full Body Calistenia - Iniciante',
    pdfFile: '/pdfs/fullBodyCalisteniaIniciante.pdf',
    workOutRoutine: [
      {
        label: 'Treino Único',
        caption: 'Foco em Base, Coordenação e Progressão',
        exercises: [
          {
            name: 'Agachamento Livre (Peso Corporal)',
            sets: '3',
            reps: '12–15',
            rest: '60–90 seg',
          },
          {
            name: 'Flexão de Braço (parede → joelhos → normal)',
            sets: '3',
            reps: '8–12',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana (ou puxada improvisada em mesa)',
            sets: '3',
            reps: '8–12',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '10 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Prancha (joelhos → completa)',
            sets: '3',
            reps: '20–40 seg',
            rest: '45–60 seg',
          },
          {
            name: 'Polichinelos',
            sets: '3',
            reps: '30–40 seg',
            rest: '30 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'calisteniaIniciante6x',
    title: 'Calistenia Iniciante - 6x por Semana (A/B/C)',
    pdfFile: '/pdfs/calisteniaIniciante6x.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Foco em Base e Coordenação',
        exercises: [
          {
            name: 'Agachamento Livre (ou com apoio)',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Flexão (parede → joelhos → normal)',
            sets: '3',
            reps: '8–12',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana (ou mesa)',
            sets: '3',
            reps: '8–12',
            rest: '60–90 seg',
          },
          {
            name: 'Prancha (joelhos → completa)',
            sets: '3',
            reps: '20–30 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Foco em Resistência e Cardio Leve',
        exercises: [
          {
            name: 'Afundo Alternado (com apoio se necessário)',
            sets: '3',
            reps: '10 cada perna',
            rest: '60 seg',
          },
          { name: 'Flexão de Braço', sets: '3', reps: '8–12', rest: '60 seg' },
          {
            name: 'Polichinelos',
            sets: '3',
            reps: '30–40 seg',
            rest: '30 seg',
          },
          {
            name: 'Mountain Climbers (leve)',
            sets: '3',
            reps: '20–30 seg',
            rest: '30 seg',
          },
        ],
      },
      {
        label: 'Treino C',
        caption: 'Foco em Controle e Estabilidade',
        exercises: [
          {
            name: 'Agachamento com pausa',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana (execução lenta)',
            sets: '3',
            reps: '8–10',
            rest: '60–90 seg',
          },
          {
            name: 'Flexão com tempo (lento)',
            sets: '3',
            reps: '8–10',
            rest: '60 seg',
          },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '15–20 seg cada lado',
            rest: '45 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'hiitCalisteniaFatLoss',
    title: 'Calistenia HIIT - Queima de Gordura',
    pdfFile: '/pdfs/hiitCalisteniaFatLoss.pdf',
    workOutRoutine: [
      {
        label: 'Treino Único',
        caption: 'Foco em Alta Intensidade com Estímulo de Força',
        exercises: [
          {
            name: 'Burpees',
            sets: '4',
            reps: '30 seg',
            rest: '30 seg',
          },
          {
            name: 'Flexão de Braço',
            sets: '4',
            reps: '30 seg',
            rest: '30 seg',
          },
          {
            name: 'Remada Australiana (barra baixa)',
            sets: '4',
            reps: '30 seg',
            rest: '30 seg',
          },
          {
            name: 'Agachamento Livre (rápido e controlado)',
            sets: '4',
            reps: '30 seg',
            rest: '30 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '30 seg',
            rest: '30 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '3',
            reps: '30 seg',
            rest: '30 seg',
          },
          {
            name: 'Prancha',
            sets: '3',
            reps: '40 seg',
            rest: '20 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyCalisteniaIntermediario2x',
    title: 'Full Body Calistenia - Intermediário (2x por Semana)',
    pdfFile: '/pdfs/fullBodyCalisteniaIntermediario2x.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Foco em Força e Base Completa',
        exercises: [
          {
            name: 'Barra Fixa (pegada pronada)',
            sets: '4',
            reps: '6–10',
            rest: '90–120 seg',
          },
          {
            name: 'Flexão de Braço Tradicional',
            sets: '4',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '3',
            reps: '10–12 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Pike Push-Up',
            sets: '3',
            reps: '8–12',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Pernas',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Prancha',
            sets: '2',
            reps: '40–60 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Foco em Volume e Resistência',
        exercises: [
          {
            name: 'Barra Fixa Supinada (chin-up)',
            sets: '4',
            reps: '6–10',
            rest: '90–120 seg',
          },
          {
            name: 'Flexão Declinado (pé elevado)',
            sets: '3',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '12–15 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana (pegada aberta)',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco (Tríceps)',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Panturrilha',
            sets: '3',
            reps: '15–20',
            rest: '45–60 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '2',
            reps: '30–40 seg',
            rest: '30 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'upperLowerCalisteniaIntermediario4x',
    title: 'Upper/Lower Calistenia - Intermediário',
    pdfFile: '/pdfs/upperLowerCalisteniaIntermediario4x.pdf',
    workOutRoutine: [
      {
        label: 'Segunda e Quinta - Superior',
        caption: 'Foco em Força, Hipertrofia e Controle',
        exercises: [
          {
            name: 'Barra Fixa (pegada pronada)',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Flexão de Braço Tradicional',
            sets: '4',
            reps: '12–15',
            rest: '60–90 seg',
          },
          {
            name: 'Barra Fixa Supinada (chin-up)',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Flexão Declinado (pé elevado)',
            sets: '3',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Pike Push-Up (ombro)',
            sets: '3',
            reps: '8–12',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco (Tríceps)',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Prancha',
            sets: '3',
            reps: '30–45 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Terça e Sexta - Inferior',
        caption: 'Foco em Pernas, Glúteos e Core',
        exercises: [
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '10–12 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Pistol Squat (ou progressão)',
            sets: '3',
            reps: '5–8 cada perna',
            rest: '90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '12 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Panturrilha (em degrau)',
            sets: '4',
            reps: '15–20',
            rest: '45–60 seg',
          },
          {
            name: 'Elevação de Pernas (barra ou solo)',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '20–30 seg cada lado',
            rest: '45 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '3',
            reps: '30–40 seg',
            rest: '30 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyCalisteniaIntermediario3x',
    title: 'Full Body Calistenia - Intermediário',
    pdfFile: '/pdfs/fullBodyCalisteniaIntermediario3x.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Foco em Força e Base',
        exercises: [
          {
            name: 'Barra Fixa (pegada pronada)',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Flexão de Braço Tradicional',
            sets: '4',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '3',
            reps: '10 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Pike Push-Up (ombro)',
            sets: '3',
            reps: '8–12',
            rest: '60 seg',
          },
          {
            name: 'Prancha',
            sets: '3',
            reps: '30–45 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Foco em Volume e Resistência',
        exercises: [
          {
            name: 'Barra Fixa Supinada (chin-up)',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Flexão Declinado (pé elevado)',
            sets: '3',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '12 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana (pegada aberta)',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco (Tríceps)',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Pernas (barra ou solo)',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Treino C',
        caption: 'Foco em Controle e Estabilidade',
        exercises: [
          {
            name: 'Barra Fixa (execução controlada)',
            sets: '3',
            reps: '6–8',
            rest: '90 seg',
          },
          {
            name: 'Flexão com Tempo (3-1-3)',
            sets: '3',
            reps: '10–12',
            rest: '60 seg',
          },
          {
            name: 'Agachamento Livre (pausa no fundo)',
            sets: '3',
            reps: '12–15',
            rest: '60–90 seg',
          },
          {
            name: 'Step-Up em banco',
            sets: '3',
            reps: '10 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Pike Push-Up ou Handstand (progressão)',
            sets: '3',
            reps: '8–12 ou 20–30 seg',
            rest: '60 seg',
          },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '20–30 seg cada lado',
            rest: '45 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'calisteniaIntermediario5x',
    title: 'Calistenia Intermediário - 5x por Semana',
    pdfFile: '/pdfs/calisteniaIntermediario5x.pdf',
    workOutRoutine: [
      {
        label: 'Segunda - Superior',
        caption: 'Foco em Força e Base',
        exercises: [
          { name: 'Barra Fixa', sets: '4', reps: '6–10', rest: '90 seg' },
          {
            name: 'Flexão de Braço',
            sets: '4',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          { name: 'Pike Push-Up', sets: '3', reps: '8–12', rest: '60 seg' },
          { name: 'Prancha', sets: '3', reps: '30–45 seg', rest: '45 seg' },
        ],
      },
      {
        label: 'Terça - Inferior',
        caption: 'Foco em Pernas e Core',
        exercises: [
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '10 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo Alternado',
            sets: '3',
            reps: '12 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Panturrilha',
            sets: '4',
            reps: '15–20',
            rest: '45 seg',
          },
          {
            name: 'Elevação de Pernas',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Quarta - Full Body',
        caption: 'Foco em Volume e Resistência',
        exercises: [
          {
            name: 'Barra Fixa Supinada',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Flexão Declinado',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Agachamento Livre',
            sets: '3',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '3',
            reps: '30 seg',
            rest: '30 seg',
          },
        ],
      },
      {
        label: 'Quinta - Superior',
        caption: 'Foco em Volume',
        exercises: [
          { name: 'Barra Fixa', sets: '4', reps: '8–12', rest: '90 seg' },
          { name: 'Flexão de Braço', sets: '4', reps: '12–15', rest: '60 seg' },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Sexta - Inferior',
        caption: 'Foco em Volume e Resistência',
        exercises: [
          {
            name: 'Agachamento Livre',
            sets: '4',
            reps: '15–20',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo Alternado',
            sets: '3',
            reps: '15 cada perna',
            rest: '60 seg',
          },
          { name: 'Step-Up', sets: '3', reps: '12 cada perna', rest: '60 seg' },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '20–30 seg',
            rest: '45 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'calisteniaIntermediario6x',
    title: 'Calistenia Intermediário - 6x por Semana',
    pdfFile: '/pdfs/calisteniaIntermediario6x.pdf',
    workOutRoutine: [
      {
        label: 'Segunda - Superior',
        caption: 'Foco em Força',
        exercises: [
          { name: 'Barra Fixa', sets: '4', reps: '6–10', rest: '90 seg' },
          {
            name: 'Flexão de Braço',
            sets: '4',
            reps: '10–15',
            rest: '60–90 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          { name: 'Pike Push-Up', sets: '3', reps: '8–12', rest: '60 seg' },
        ],
      },
      {
        label: 'Terça - Inferior',
        caption: 'Foco em Pernas',
        exercises: [
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '10 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo Alternado',
            sets: '3',
            reps: '12 cada perna',
            rest: '60 seg',
          },
          { name: 'Panturrilha', sets: '4', reps: '15–20', rest: '45 seg' },
        ],
      },
      {
        label: 'Quarta - Full Body',
        caption: 'Foco em Volume',
        exercises: [
          {
            name: 'Barra Fixa Supinada',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Flexão Declinado',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Agachamento Livre',
            sets: '3',
            reps: '15–20',
            rest: '60 seg',
          },
          { name: 'Prancha', sets: '3', reps: '30–45 seg', rest: '45 seg' },
        ],
      },
      {
        label: 'Quinta - Superior',
        caption: 'Foco em Volume',
        exercises: [
          { name: 'Barra Fixa', sets: '4', reps: '8–12', rest: '90 seg' },
          { name: 'Flexão', sets: '4', reps: '12–15', rest: '60 seg' },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Sexta - Inferior',
        caption: 'Foco em Volume',
        exercises: [
          {
            name: 'Agachamento Livre',
            sets: '4',
            reps: '15–20',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo Alternado',
            sets: '3',
            reps: '15 cada perna',
            rest: '60 seg',
          },
          { name: 'Step-Up', sets: '3', reps: '12 cada perna', rest: '60 seg' },
        ],
      },
      {
        label: 'Sábado - Full Body',
        caption: 'Foco em Resistência e Core',
        exercises: [
          { name: 'Flexão', sets: '3', reps: '12–15', rest: '60 seg' },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '3',
            reps: '30–40 seg',
            rest: '30 seg',
          },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '20–30 seg',
            rest: '45 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyCalisteniaAvancado2x',
    title: 'Full Body Calistenia - Avançado (2x por Semana)',
    pdfFile: '/pdfs/fullBodyCalisteniaAvancado2x.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Foco em Força Máxima e Controle',
        exercises: [
          {
            name: 'Barra Fixa com Peso (ou progressão avançada)',
            sets: '5',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Flexão Pseudo Planche ou Declinado',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Pistol Squat',
            sets: '4',
            reps: '5–8 cada perna',
            rest: '120 seg',
          },
          {
            name: 'Remada Australiana (pé elevado)',
            sets: '3',
            reps: '8–12',
            rest: '90 seg',
          },
          {
            name: 'Pike Push-Up Elevado ou Handstand Push-Up (progressão)',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Hanging Leg Raise (ou elevação avançada)',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Prancha Avançada (com peso ou variação)',
            sets: '2',
            reps: '45–60 seg',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Foco em Volume, Resistência e Estabilidade',
        exercises: [
          {
            name: 'Barra Fixa',
            sets: '4',
            reps: '8–12',
            rest: '90 seg',
          },
          {
            name: 'Flexão de Braço (alta repetição ou avançada)',
            sets: '4',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '10–12 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '12–15 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco ou Paralelas',
            sets: '3',
            reps: '10–15',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Panturrilha (unilateral)',
            sets: '3',
            reps: '15–20',
            rest: '45–60 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '2',
            reps: '40 seg',
            rest: '30 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyCalisteniaAvancado3x',
    title: 'Full Body Calistenia - Avançado (3x)',
    pdfFile: '/pdfs/fullBodyCalisteniaAvancado3x.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Foco em Força Máxima',
        exercises: [
          {
            name: 'Barra Fixa com Peso (ou progressão avançada)',
            sets: '5',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Flexão Pseudo Planche ou Declinado',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Pistol Squat',
            sets: '4',
            reps: '5–8 cada perna',
            rest: '120 seg',
          },
          {
            name: 'Remada Australiana (pé elevado)',
            sets: '3',
            reps: '8–12',
            rest: '90 seg',
          },
          {
            name: 'Pike Push-Up Elevado',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Hollow Body Hold',
            sets: '3',
            reps: '40–60 seg',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Foco em Volume e Hipertrofia',
        exercises: [
          {
            name: 'Barra Fixa',
            sets: '4',
            reps: '8–12',
            rest: '90 seg',
          },
          {
            name: 'Flexão de Braço (alta repetição)',
            sets: '4',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '10–12 cada perna',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '3',
            reps: '12–15 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Banco',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Pernas',
            sets: '3',
            reps: '15–20',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Treino C',
        caption: 'Foco em Controle, Técnica e Estabilidade',
        exercises: [
          {
            name: 'Barra Fixa (execução lenta 3-1-3)',
            sets: '3',
            reps: '6–8',
            rest: '90 seg',
          },
          {
            name: 'Flexão Controlada (tempo 3-1-3)',
            sets: '3',
            reps: '10–12',
            rest: '60 seg',
          },
          {
            name: 'Agachamento com Pausa (2 seg no fundo)',
            sets: '3',
            reps: '12–15',
            rest: '60–90 seg',
          },
          {
            name: 'Cossack Squat',
            sets: '3',
            reps: '8–10 cada lado',
            rest: '60 seg',
          },
          {
            name: 'Handstand (ou progressão)',
            sets: '4',
            reps: '30–45 seg',
            rest: '60 seg',
          },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '30–40 seg cada lado',
            rest: '45 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'upperLowerCalisteniaAvancado4x',
    title: 'Upper/Lower Calistenia - Avançado (4x por Semana)',
    pdfFile: '/pdfs/upperLowerCalisteniaAvancado4x.pdf',
    workOutRoutine: [
      {
        label: 'Segunda - Superior (Força)',
        caption: 'Foco em Baixas Reps e Alta Intensidade',
        exercises: [
          {
            name: 'Barra Fixa com Peso (ou progressão avançada)',
            sets: '5',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Flexão Pseudo Planche ou Declinado',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Barra Fixa Supinada (chin-up)',
            sets: '4',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Pike Push-Up Elevado ou HSPU (progressão)',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Hanging Leg Raise',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Terça - Inferior (Força)',
        caption: 'Foco em Unilateral Pesado e Controle',
        exercises: [
          {
            name: 'Pistol Squat',
            sets: '5',
            reps: '4–6 cada perna',
            rest: '120 seg',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '8–10 cada perna',
            rest: '90 seg',
          },
          {
            name: 'Nordic Curl (ou progressão)',
            sets: '3',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Elevação de Panturrilha (unilateral)',
            sets: '4',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Hollow Body Hold',
            sets: '3',
            reps: '30–40 seg',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Quinta - Superior (Volume)',
        caption: 'Foco em Hipertrofia e Resistência',
        exercises: [
          {
            name: 'Barra Fixa',
            sets: '4',
            reps: '8–12',
            rest: '90 seg',
          },
          {
            name: 'Flexão de Braço (alta repetição)',
            sets: '4',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '4',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Flexão Diamante',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Paralelas ou Banco',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Prancha',
            sets: '3',
            reps: '40–60 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Sexta - Inferior (Volume)',
        caption: 'Foco em Resistência e Estímulo Metabólico',
        exercises: [
          {
            name: 'Agachamento Livre (alto volume)',
            sets: '4',
            reps: '15–20',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '4',
            reps: '15 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Step-Up em banco',
            sets: '3',
            reps: '12 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Panturrilha',
            sets: '4',
            reps: '20–25',
            rest: '45 seg',
          },
          {
            name: 'Mountain Climbers',
            sets: '3',
            reps: '30–40 seg',
            rest: '30 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'calisteniaAvancado5x',
    title: 'Calistenia Avançado - 5x por Semana',
    pdfFile: '/pdfs/calisteniaAvancado5x.pdf',
    workOutRoutine: [
      {
        label: 'Segunda - Superior (Força)',
        caption: 'Foco em Alta Intensidade',
        exercises: [
          {
            name: 'Barra Fixa com Peso',
            sets: '5',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Flexão Pseudo Planche',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          { name: 'Chin-Up', sets: '4', reps: '4–6', rest: '120 seg' },
          {
            name: 'Pike Push-Up Elevado',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
        ],
      },
      {
        label: 'Terça - Inferior (Força)',
        caption: 'Foco em Unilateral Pesado',
        exercises: [
          { name: 'Pistol Squat', sets: '5', reps: '4–6', rest: '120 seg' },
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '8–10',
            rest: '90 seg',
          },
          { name: 'Nordic Curl', sets: '3', reps: '4–6', rest: '120 seg' },
          {
            name: 'Panturrilha Unilateral',
            sets: '4',
            reps: '12–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Quarta - Full Body',
        caption: 'Foco em Volume e Resistência',
        exercises: [
          { name: 'Barra Fixa', sets: '4', reps: '8–12', rest: '90 seg' },
          { name: 'Flexão', sets: '4', reps: '15–20', rest: '60 seg' },
          {
            name: 'Agachamento Livre',
            sets: '4',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Pernas',
            sets: '3',
            reps: '15–20',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Quinta - Superior (Volume)',
        caption: 'Foco em Hipertrofia',
        exercises: [
          { name: 'Barra Fixa', sets: '4', reps: '8–12', rest: '90 seg' },
          { name: 'Flexão Diamante', sets: '3', reps: '12–15', rest: '60 seg' },
          {
            name: 'Remada Australiana',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Mergulho em Paralelas',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Sexta - Inferior (Volume)',
        caption: 'Foco em Resistência',
        exercises: [
          {
            name: 'Agachamento Livre',
            sets: '4',
            reps: '15–20',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo Alternado',
            sets: '4',
            reps: '15 cada perna',
            rest: '60 seg',
          },
          { name: 'Step-Up', sets: '3', reps: '12 cada perna', rest: '60 seg' },
          {
            name: 'Mountain Climbers',
            sets: '3',
            reps: '30–40 seg',
            rest: '30 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'calisteniaAvancado6xSemana',
    title: 'Calistenia Avançado - 6x por Semana',
    pdfFile: '/pdfs/calisteniaAvancado6xSemana.pdf',
    workOutRoutine: [
      {
        label: 'Segunda - Superior (Força)',
        caption: 'Foco em Baixas Reps e Alta Intensidade',
        exercises: [
          {
            name: 'Barra Fixa (com peso ou progressão difícil)',
            sets: '5',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Flexão Declinado ou Pseudo Planche Push-Up',
            sets: '4',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Barra Fixa Supinada (chin-up)',
            sets: '4',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Pike Push-Up (elevado)',
            sets: '3',
            reps: '6–10',
            rest: '90 seg',
          },
          {
            name: 'Prancha com Peso ou Avançada',
            sets: '3',
            reps: '40–60 seg',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Terça - Inferior (Força)',
        caption: 'Foco em Controle e Unilateral Pesado',
        exercises: [
          {
            name: 'Pistol Squat',
            sets: '5',
            reps: '4–6 cada perna',
            rest: '120 seg',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '4',
            reps: '8–10 cada perna',
            rest: '90 seg',
          },
          {
            name: 'Nordic Curl (ou progressão)',
            sets: '3',
            reps: '4–6',
            rest: '120 seg',
          },
          {
            name: 'Elevação de Panturrilha (unilateral)',
            sets: '4',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Hollow Body Hold',
            sets: '3',
            reps: '30–40 seg',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Quarta - Superior (Volume)',
        caption: 'Foco em Mais Reps e Resistência',
        exercises: [
          {
            name: 'Barra Fixa',
            sets: '4',
            reps: '8–12',
            rest: '90 seg',
          },
          {
            name: 'Flexão de Braço',
            sets: '4',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana',
            sets: '4',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Flexão Diamante',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Pernas',
            sets: '3',
            reps: '15–20',
            rest: '60 seg',
          },
        ],
      },
      {
        label: 'Quinta - Inferior (Volume)',
        caption: 'Foco em Resistência e Estímulo Metabólico',
        exercises: [
          {
            name: 'Agachamento Livre (alto volume)',
            sets: '4',
            reps: '15–20',
            rest: '60–90 seg',
          },
          {
            name: 'Afundo (Lunge) Alternado',
            sets: '4',
            reps: '15 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Step-Up em banco',
            sets: '3',
            reps: '12 cada perna',
            rest: '60 seg',
          },
          {
            name: 'Elevação de Panturrilha',
            sets: '4',
            reps: '20–25',
            rest: '45 seg',
          },
          {
            name: 'Prancha',
            sets: '3',
            reps: '40–60 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Sexta - Superior (Leve/Técnica)',
        caption: 'Foco em Controle, Forma e Habilidade',
        exercises: [
          {
            name: 'Barra Fixa (execução lenta)',
            sets: '3',
            reps: '6–8',
            rest: '90 seg',
          },
          {
            name: 'Flexão Controlada (tempo 3-1-3)',
            sets: '3',
            reps: '10–12',
            rest: '60 seg',
          },
          {
            name: 'Handstand (ou progressão na parede)',
            sets: '4',
            reps: '20–40 seg',
            rest: '60 seg',
          },
          {
            name: 'Remada Australiana (isometria no topo)',
            sets: '3',
            reps: '10 + 5 seg segurando',
            rest: '60 seg',
          },
          {
            name: 'Prancha com controle respiratório',
            sets: '3',
            reps: '40 seg',
            rest: '45 seg',
          },
        ],
      },
      {
        label: 'Sábado - Inferior (Leve/Core)',
        caption: 'Foco em Mobilidade, Core e Estabilidade',
        exercises: [
          {
            name: 'Agachamento Profundo (mobilidade)',
            sets: '3',
            reps: '12–15',
            rest: '45 seg',
          },
          {
            name: 'Cossack Squat (lateral)',
            sets: '3',
            reps: '8–10 cada lado',
            rest: '60 seg',
          },
          {
            name: 'Glute Bridge',
            sets: '3',
            reps: '15–20',
            rest: '45 seg',
          },
          {
            name: 'Elevação de Pernas',
            sets: '3',
            reps: '12–15',
            rest: '60 seg',
          },
          {
            name: 'Prancha Lateral',
            sets: '3',
            reps: '30 seg cada lado',
            rest: '45 seg',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyFatLossMen',
    title: 'Full Body Iniciante - Masculino',
    pdfFile: '/pdfs/fullBodyFatLossMen.pdf',
    workOutRoutine: [
      {
        label: 'Treino Único',
        caption: 'Foco em Base Muscular e Gasto Calórico',
        exercises: [
          {
            name: 'Agachamento Livre ou Máquina',
            sets: '3',
            reps: '10–12',
            rest: '90 seg',
          },
          {
            name: 'Supino Reto (Halteres ou Máquina)',
            sets: '3',
            reps: '10–12',
            rest: '90 seg',
          },
          {
            name: 'Puxada Aberta no Pulley',
            sets: '3',
            reps: '10–12',
            rest: '90 seg',
          },
          { name: 'Leg Press 45º', sets: '3', reps: '12', rest: '90 seg' },
          {
            name: 'Desenvolvimento de Ombros (Máquina)',
            sets: '3',
            reps: '12',
            rest: '90 seg',
          },
          {
            name: 'Abdominal Supra (Solo)',
            sets: '3',
            reps: '15–20',
            rest: '60 seg',
          },
          {
            name: 'Cardio: Caminhada Inclinada ou Bike',
            sets: '1',
            reps: '15-20 min',
            rest: '0',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyFatLossWomen',
    title: 'Full Body Iniciante - Feminino',
    pdfFile: '/pdfs/fullBodyFatLossWomen.pdf',
    workOutRoutine: [
      {
        label: 'Treino Único',
        caption: 'Foco em Membros Inferiores e Tonificação',
        exercises: [
          {
            name: 'Agachamento Sumô',
            sets: '3',
            reps: '12–15',
            rest: '90 seg',
          },
          {
            name: 'Puxada Aberta no Pulley',
            sets: '3',
            reps: '12',
            rest: '90 seg',
          },
          {
            name: 'Cadeira Flexora (Posterior)',
            sets: '3',
            reps: '12–15',
            rest: '90 seg',
          },
          {
            name: 'Supino Vertical (Máquina)',
            sets: '3',
            reps: '12',
            rest: '90 seg',
          },
          {
            name: 'Elevação Pélvica (Sem peso ou Halter)',
            sets: '3',
            reps: '15',
            rest: '90 seg',
          },
          {
            name: 'Prancha Abdominal',
            sets: '3',
            reps: '30-45 seg',
            rest: '60 seg',
          },
          {
            name: 'Cardio: Elíptico ou Esteira',
            sets: '1',
            reps: '15-20 min',
            rest: '0',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyAltaPerformance',
    title: 'Protocolo Full Body Completo',
    pdfFile: '/pdfs/fullBodyAltaPerformance.pdf',
    workOutRoutine: [
      {
        label: 'Treino I - Full Body',
        caption: 'Foco em Compostos e Força de Base',
        exercises: [
          { name: 'Agachamento Livre', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Supino Reto', sets: '3', reps: '8–10', rest: '2 min' },
          {
            name: 'Remada Curvada ou Baixa',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Stiff (Posterior de Coxa)',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Desenvolvimento de Ombros',
            sets: '3',
            reps: '10',
            rest: '2 min',
          },
          {
            name: 'Puxada Aberta (Lat Pulldown)',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Rosca Direta', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Tríceps Corda', sets: '3', reps: '10–12', rest: '1 min' },
          {
            name: 'Prancha Abdominal',
            sets: '3',
            reps: '45-60 seg',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Treino II - Full Body',
        caption: 'Foco em Variedade de Estímulo e Simetria',
        exercises: [
          { name: 'Leg Press 45º', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Supino Inclinado na Máquina',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Remada Cavalinho ou Unilateral',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '2 min' },
          {
            name: 'Elevação Lateral',
            sets: '3',
            reps: '12–15',
            rest: '1.5 min',
          },
          {
            name: 'Puxada com Triângulo',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Rosca Martelo', sets: '3', reps: '10–12', rest: '1 min' },
          {
            name: 'Tríceps Testa ou Francês',
            sets: '3',
            reps: '10–12',
            rest: '1 min',
          },
          {
            name: 'Abdominal Supra (Solo ou Máquina)',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
    ],
  },

  {
    id: 'treinoAB',
    title: 'Treino AB Básico',
    pdfFile: '/pdfs/treinoAB.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Superior',
        exercises: [
          { name: 'Supino reto', sets: '3', reps: '8–12', rest: '2 min' },
          { name: 'Remada baixa', sets: '4', reps: '8–10', rest: '2 min' },
          { name: 'Elevação lateral', sets: '3', reps: '12', rest: '1 min' },
          { name: 'Rosca direta', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Tríceps corda', sets: '3', reps: '10–12', rest: '1 min' },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Inferior',
        exercises: [
          { name: 'Agachamento livre', sets: '4', reps: '8–10', rest: '2 min' },
          { name: 'Leg press', sets: '3', reps: '10', rest: '2 min' },
          { name: 'Mesa flexora', sets: '3', reps: '10', rest: '1 min' },
          {
            name: 'Panturrilha em pé',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          { name: 'Abdominal', sets: '3', reps: '15', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'treinoABC',
    title: 'Treino ABC',
    pdfFile: '/pdfs/treinoABC.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Peito • Ombro • Tríceps',
        exercises: [
          {
            name: 'Supino Reto (Barra ou Halter)',
            sets: '4',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Supino Inclinado com Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Crossover (Polia Média/Baixa)',
            sets: '3',
            reps: '12',
            rest: '1 min',
          },
          {
            name: 'Desenvolvimento com Halteres',
            sets: '3',
            reps: '10',
            rest: '2 min',
          },
          { name: 'Elevação Lateral', sets: '4', reps: '12–15', rest: '1 min' },
          {
            name: 'Tríceps Pulley (Corda)',
            sets: '3',
            reps: '12',
            rest: '1 min',
          },
          { name: 'Tríceps Testa', sets: '3', reps: '10', rest: '1 min' },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Costas • Bíceps • Trapézio',
        exercises: [
          {
            name: 'Puxada Alta (Lat Pulldown)',
            sets: '4',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Remada Curvada ou Cavalinho',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Remada Baixa Sentada',
            sets: '3',
            reps: '12',
            rest: '2 min',
          },
          {
            name: 'Face Pull (Posterior de Ombro)',
            sets: '3',
            reps: '15',
            rest: '1 min',
          },
          {
            name: 'Encolhimento com Halteres',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Rosca Direta (Barra W)',
            sets: '3',
            reps: '10',
            rest: '2 min',
          },
          { name: 'Rosca Martelo', sets: '3', reps: '12', rest: '1 min' },
        ],
      },
      {
        label: 'Treino C',
        caption: 'Pernas • Glúteos • Panturrilha',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '8–10', rest: '2 min' },
          { name: 'Leg Press 45°', sets: '3', reps: '12', rest: '2 min' },
          {
            name: 'Cadeira Extensora',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Stiff ou Mesa Flexora',
            sets: '4',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Afundo ou Passada',
            sets: '3',
            reps: '10 (cada perna)',
            rest: '2 min',
          },
          {
            name: 'Panturrilha em Pé',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
          { name: 'Panturrilha Sentado', sets: '3', reps: '15', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'treinoABCEvolucaoFeminina',
    title: 'Protocolo Evolução Feminina (6x/semana)',
    pdfFile: '/pdfs/treinoABCEvolucaoFeminina.pdf',
    workOutRoutine: [
      {
        label: 'Treino A: Membros Inferiores (Geral)',
        caption: 'Segunda e Quinta',
        exercises: [
          {
            name: 'Agachamento Livre ou no Smith',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Leg Press 45', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Elevação Pélvica (Máquina ou Barra)',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
          {
            name: 'Cadeira Extensora',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '1 min' },
          {
            name: 'Panturrilha em Pé',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Treino B: Superiores (Costas, Bíceps e Ombro)',
        caption: 'Terça e Sexta',
        exercises: [
          {
            name: 'Puxada Aberta no Pulley',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Remada Baixa Triângulo',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Desenvolvimento com Halteres',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
          {
            name: 'Elevação Lateral Halteres',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Rosca Direta Polia',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Abdominal Supra (Solo)',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Treino C: Inferior (Foco Posterior/Glúteo) e Tríceps',
        caption: 'Quarta e Sábado',
        exercises: [
          {
            name: 'Stiff com Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Afundo (Passada)', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Cadeira Abdutora', sets: '3', reps: '15–20', rest: '1 min' },
          {
            name: 'Glúteo na Polia (Extensão)',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Tríceps Polia (Corda)',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          { name: 'Prancha Isométrica', sets: '3', reps: '45s', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'upperLowerMaquinas',
    title: 'Treino AB Upper / Lower (Máquinas)',
    pdfFile: '/pdfs/upperLowerMaquinas.pdf',
    workOutRoutine: [
      {
        label: 'Upper A',
        caption: 'Peito reto + ombro lateral/posterior',
        exercises: [
          {
            name: 'Supino reto articulado',
            sets: '3',
            reps: '6–10',
            rest: '2 min',
          },
          {
            name: 'Peck deck / Chest fly máquina',
            sets: '3',
            reps: '10–15',
            rest: '1 min',
          },
          {
            name: 'Puxada alta (pegada média/neutra)',
            sets: '3',
            reps: '8–12',
            rest: '2 min',
          },
          {
            name: 'Remada baixa na máquina',
            sets: '3',
            reps: '8–12',
            rest: '2 min',
          },
          {
            name: 'Elevação lateral na máquina',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Reverse peck deck',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Tríceps máquina/polia',
            sets: '3',
            reps: '10–15',
            rest: '1 min',
          },
          { name: 'Bíceps máquina', sets: '3', reps: '10–15', rest: '1 min' },
        ],
      },

      {
        label: 'Lower A',
        caption: 'Ênfase em quadríceps',
        exercises: [
          { name: 'Leg press', sets: '4', reps: '8–12', rest: '2 min' },
          { name: 'Mesa flexora', sets: '3', reps: '10–15', rest: '1 min' },
          {
            name: 'Cadeira extensora',
            sets: '3',
            reps: '10–15',
            rest: '1 min',
          },
          {
            name: 'Panturrilha em máquina/leg press',
            sets: '4',
            reps: '12–20',
            rest: '1 min',
          },
          {
            name: 'Abdômen em máquina/polia',
            sets: '3',
            reps: '12–20',
            rest: '1 min',
          },
        ],
      },

      {
        label: 'Upper B',
        caption: 'Peito inclinado + ombro completo',
        exercises: [
          {
            name: 'Supino inclinado articulado',
            sets: '3',
            reps: '6–10',
            rest: '2 min',
          },
          {
            name: 'Chest fly máquina',
            sets: '3',
            reps: '10–15',
            rest: '1 min',
          },
          {
            name: 'Remada articulada convergente',
            sets: '3',
            reps: '8–12',
            rest: '2 min',
          },
          {
            name: 'Puxada alta pegada aberta',
            sets: '3',
            reps: '8–12',
            rest: '2 min',
          },
          {
            name: 'Desenvolvimento de ombro na máquina',
            sets: '3',
            reps: '8–12',
            rest: '2 min',
          },
          {
            name: 'Elevação lateral na máquina',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Tríceps máquina/polia',
            sets: '3',
            reps: '10–15',
            rest: '1 min',
          },
          { name: 'Bíceps na polia', sets: '3', reps: '10–15', rest: '1 min' },
        ],
      },

      {
        label: 'Lower B',
        caption: 'Ênfase posterior e glúteos',
        exercises: [
          {
            name: 'Hack machine ou agachamento no Smith',
            sets: '4',
            reps: '6–10',
            rest: '2 min',
          },
          {
            name: 'Flexora sentada/deitada',
            sets: '3',
            reps: '10–15',
            rest: '1 min',
          },
          {
            name: 'Afundo no Smith',
            sets: '3',
            reps: '8–12 por perna',
            rest: '2 min',
          },
          {
            name: 'Panturrilha sentada/máquina',
            sets: '4',
            reps: '12–20',
            rest: '1 min',
          },
          { name: 'Abdômen', sets: '3', reps: '12–20', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'femininoLowerFocus',
    title: 'Treino Feminino 5x (Foco em Inferiores)',
    pdfFile: '/pdfs/femininoLowerFocus.pdf',
    workOutRoutine: [
      {
        label: 'Lower A',
        caption: 'Quadríceps',
        exercises: [
          { name: 'Agachamento livre', sets: '4', reps: '8–10', rest: '2 min' },
          { name: 'Leg press', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Cadeira extensora',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Afundo com halteres',
            sets: '3',
            reps: '10 por perna',
            rest: '2 min',
          },
          {
            name: 'Panturrilha em pé',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
        ],
      },

      {
        label: 'Upper A',
        caption: 'Costas e braços',
        exercises: [
          { name: 'Puxada na frente', sets: '3', reps: '8–12', rest: '2 min' },
          { name: 'Remada baixa', sets: '3', reps: '8–12', rest: '2 min' },
          { name: 'Elevação lateral', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Rosca direta', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Tríceps corda', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Abdominal', sets: '3', reps: '15', rest: '1 min' },
        ],
      },

      {
        label: 'Lower B',
        caption: 'Glúteos',
        exercises: [
          { name: 'Hip thrust', sets: '4', reps: '8–12', rest: '1 min' },
          { name: 'Glute bridge', sets: '3', reps: '12', rest: '1 min' },
          { name: 'Cadeira abdutora', sets: '3', reps: '15', rest: '1 min' },
          {
            name: 'Afundo no smith',
            sets: '3',
            reps: '10 por perna',
            rest: '2 min',
          },
          {
            name: 'Panturrilha sentada',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
        ],
      },

      {
        label: 'Upper B',
        caption: 'Peito e ombro',
        exercises: [
          {
            name: 'Supino máquina ou halteres',
            sets: '3',
            reps: '8–12',
            rest: '2 min',
          },
          { name: 'Crucifixo máquina', sets: '3', reps: '12', rest: '1 min' },
          {
            name: 'Desenvolvimento de ombro',
            sets: '3',
            reps: '10',
            rest: '2 min',
          },
          { name: 'Elevação lateral', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Tríceps testa', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Abdominal', sets: '3', reps: '15', rest: '1 min' },
        ],
      },

      {
        label: 'Lower C',
        caption: 'Posterior de coxa',
        exercises: [
          { name: 'Stiff', sets: '4', reps: '8–10', rest: '2 min' },
          { name: 'Mesa flexora', sets: '3', reps: '10–12', rest: '1 min' },
          {
            name: 'Leg press pés altos',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Cadeira abdutora', sets: '3', reps: '15', rest: '1 min' },
          { name: 'Panturrilha', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'conquistaContinua5x',
    title: 'Protocolo Performance 5 Dias (Seg-Sex)',
    pdfFile: '/pdfs/conquistaContinua5x.pdf',
    workOutRoutine: [
      {
        label: 'Upper (Superior Completo)',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Supino Reto Barra', sets: '3', reps: '6–8', rest: '2 min' },
          { name: 'Remada Curvada', sets: '3', reps: '8–10', rest: '2 min' },
          {
            name: 'Desenvolvimento Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Puxada Alta', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Rosca Direta Polia',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          { name: 'Tríceps Corda', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
      {
        label: 'Lower (Inferior Completo)',
        caption: 'Terça-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '3', reps: '6–8', rest: '2 min' },
          { name: 'Stiff', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Leg Press 45', sets: '3', reps: '12–15', rest: '2 min' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '1 min' },
          {
            name: 'Panturrilha em Pé',
            sets: '4',
            reps: '12–15',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Push (Peito/Ombro/Tríceps)',
        caption: 'Quarta-feira',
        exercises: [
          {
            name: 'Supino Inclinado Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Crucifixo Máquina (Peck Deck)',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Crossover Polia Alta',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Elevação Lateral Halteres',
            sets: '4',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Tríceps Testa Barra W',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
        ],
      },
      {
        label: 'Pull (Costas/Bíceps/Posterior)',
        caption: 'Quinta-feira',
        exercises: [
          {
            name: 'Barra Fixa ou Graviton',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Remada Unilateral (Serrote)',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Face Pull (Corda)',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
          {
            name: 'Rosca Martelo Halteres',
            sets: '3',
            reps: '10–12',
            rest: '1 min',
          },
          {
            name: 'Rosca Inversa Barra',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
          {
            name: 'Encolhimento Halteres',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Legs (Membros Inferiores)',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Agachamento Hack ou Sumô',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Afundo (Passada)', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Cadeira Extensora',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Panturrilha Sentado',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
          {
            name: 'Abdominal Supra Máquina',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
          {
            name: 'Elevação de Pernas (Infra)',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyAvancadoMasculino',
    title: 'Protocolo Full Body Avançado',
    pdfFile: '/pdfs/fullBodyAvancadoMasculino.pdf',
    workOutRoutine: [
      {
        label: 'Dia 1: Foco Tensional (Força)',
        caption: 'Segunda-feira',
        exercises: [
          {
            name: 'Agachamento Livre Barra',
            sets: '4',
            reps: '4–6',
            rest: '2 min',
          },
          { name: 'Supino Reto Barra', sets: '4', reps: '4–6', rest: '2 min' },
          {
            name: 'Levantamento Terra Convencional',
            sets: '3',
            reps: '5',
            rest: '2 min',
          },
          {
            name: 'Desenvolvimento Militar (OHP)',
            sets: '3',
            reps: '6–8',
            rest: '2 min',
          },
          {
            name: 'Puxada Articulada (Pegada Supinada)',
            sets: '3',
            reps: '6–8',
            rest: '2 min',
          },
          {
            name: 'Supino com Pegada Fechada',
            sets: '3',
            reps: '6–8',
            rest: '2 min',
          },
        ],
      },
      {
        label: 'Dia 2: Foco Metabólico (Volume)',
        caption: 'Quarta-feira',
        exercises: [
          {
            name: 'Leg Press 45 (Drop-set na última)',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
          {
            name: 'Supino Inclinado Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Remada Curvada Pronada',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Elevação Lateral Cabo',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '1 min' },
          {
            name: 'Rosca Scott Máquina',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Tríceps Polia Barra Reta',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
        ],
      },
      {
        label: 'Dia 3: Híbrido (Power-Building)',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Agachamento Búlgaro',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Supino Reto Halteres',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Remada Unilateral (Serrote)',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Stiff Barra', sets: '3', reps: '8–10', rest: '2 min' },
          {
            name: 'Crucifixo Inclinado Cabo',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          { name: 'Face Pull', sets: '3', reps: '15–20', rest: '1 min' },
          {
            name: 'Panturrilha em Pé (Pausa 2s)',
            sets: '4',
            reps: '10–12',
            rest: '1 min',
          },
        ],
      },
    ],
  },

  {
    id: 'fullBodyFemininoAvancado',
    title: 'Protocolo Curvas de Aço',
    pdfFile: '/pdfs/fullBodyFemininoAvancado.pdf',
    workOutRoutine: [
      {
        label: 'Dia 1: Força e Base (Foco Glúteo Máximo)',
        caption: 'Segunda-feira',
        exercises: [
          {
            name: 'Agachamento Livre Barra',
            sets: '4',
            reps: '6–8',
            rest: '2 min',
          },
          {
            name: 'Elevação Pélvica com Barra',
            sets: '4',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Supino Reto Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Puxada Aberta no Pulley',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Stiff com Barra ou Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Prancha Abdominal com Peso',
            sets: '3',
            reps: '45-60s',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Dia 2: Volume e Detalhes (Foco Quadríceps/Ombro)',
        caption: 'Quarta-feira',
        exercises: [
          {
            name: 'Leg Press 45 (Pés Baixos)',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
          {
            name: 'Afundo ou Passada Alternada',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Desenvolvimento com Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Elevação Lateral na Polia',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
          {
            name: 'Cadeira Extensora (Pico de contração 2s)',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Remada Baixa com Triângulo',
            sets: '3',
            reps: '12–15',
            rest: '2 min',
          },
          {
            name: 'Tríceps Polia (Corda)',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Dia 3: Cadeia Posterior e Metabólico',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Levantamento Terra Sumô',
            sets: '4',
            reps: '6–8',
            rest: '2 min',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '1 min' },
          {
            name: 'Cadeira Abdutora (Tronco inclinado)',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
          {
            name: 'Remada Unilateral com Halter',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          {
            name: 'Rosca Direta com Halteres',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Panturrilha em Pé',
            sets: '4',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
    ],
  },

  {
    id: 'forcaFundamental',
    title: 'Protocolo Base Inquebrável',
    pdfFile: '/pdfs/forcaFundamental.pdf',
    workOutRoutine: [
      {
        label: 'Upper A',
        caption: 'Segunda-feira',
        exercises: [
          {
            name: 'Supino Reto com Barra',
            sets: '3',
            reps: '6–8',
            rest: '2 min',
          },
          {
            name: 'Remada Curvada com Barra',
            sets: '3',
            reps: '6–8',
            rest: '2 min',
          },
          {
            name: 'Desenvolvimento com Halteres',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10', rest: '2 min' },
          {
            name: 'Rosca Direta com Barra',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Tríceps Testa', sets: '3', reps: '10–12', rest: '1 min' },
        ],
      },

      {
        label: 'Lower A',
        caption: 'Terça-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '6–8', rest: '2 min' },
          {
            name: 'Levantamento Terra Romeno',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Leg Press 45°', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Cadeira Flexora', sets: '3', reps: '10–12', rest: '1 min' },
          {
            name: 'Panturrilha em Pé',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
        ],
      },

      {
        label: 'Upper B',
        caption: 'Quinta-feira',
        exercises: [
          {
            name: 'Supino Inclinado com Halteres',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          {
            name: 'Remada Unilateral com Halter',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Elevação Lateral', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Puxada Triângulo', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Rosca Martelo', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Tríceps Polia', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },

      {
        label: 'Lower B',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Levantamento Terra Convencional',
            sets: '3',
            reps: '5–7',
            rest: '2 min',
          },
          {
            name: 'Agachamento Búlgaro',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Stiff', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Cadeira Extensora',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          {
            name: 'Panturrilha Sentado',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
    ],
  },

  {
    id: 'corpoDeImpacto',
    title: 'Protocolo Arquitetura de Força',
    pdfFile: '/pdfs/corpoDeImpacto.pdf',
    workOutRoutine: [
      {
        label: 'Upper',
        caption: 'Segunda-feira',
        exercises: [
          {
            name: 'Supino Reto com Barra',
            sets: '3',
            reps: '6–8',
            rest: '2 min',
          },
          { name: 'Remada Curvada', sets: '3', reps: '6–8', rest: '2 min' },
          {
            name: 'Desenvolvimento Militar',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Crucifixo', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Rosca Direta', sets: '3', reps: '10–12', rest: '1 min' },
        ],
      },
      {
        label: 'Lower',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '6–8', rest: '2 min' },
          {
            name: 'Levantamento Terra Romeno',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Leg Press', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Panturrilha', sets: '3', reps: '15–20', rest: '1 min' },
        ],
      },
      {
        label: 'Full Body',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Agachamento Frontal',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10', rest: '2 min' },
          {
            name: 'Remada Unilateral',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Stiff', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Desenvolvimento Arnold',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Rosca Martelo', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'potenciaAvancada',
    title: 'Protocolo Pilar de Titânio',
    pdfFile: '/pdfs/potenciaAvancada.pdf',
    workOutRoutine: [
      {
        label: 'Push',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Supino Reto', sets: '4', reps: '6–8', rest: '2 min' },
          {
            name: 'Desenvolvimento com Halteres',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Elevação Lateral', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Tríceps Francês', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Tríceps Polia', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
      {
        label: 'Pull',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Levantamento Terra', sets: '3', reps: '5–7', rest: '2 min' },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Remada Curvada', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Puxada Triângulo', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Rosca Direta', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Rosca Martelo', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
      {
        label: 'Legs',
        caption: 'Quinta-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '6–8', rest: '2 min' },
          { name: 'Leg Press 45°', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Stiff', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Cadeira Extensora',
            sets: '3',
            reps: '12–15',
            rest: '1 min',
          },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15', rest: '1 min' },
          {
            name: 'Panturrilha em Pé',
            sets: '3',
            reps: '15–20',
            rest: '1 min',
          },
        ],
      },
      {
        label: 'Full Body',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Agachamento Frontal',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Remada Cavalinho', sets: '3', reps: '10–12', rest: '2 min' },
          {
            name: 'Levantamento Terra Romeno',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Elevação Frontal', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
    ],
  },

  {
    id: 'fundacaoDeAco',
    title: 'Protocolo Fundação Sólida',
    pdfFile: '/pdfs/fundacaoDeAco.pdf',
    workOutRoutine: [
      {
        label: 'Full Body A',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '3', reps: '6–8', rest: '2 min' },
          { name: 'Supino Reto', sets: '3', reps: '6–8', rest: '2 min' },
          { name: 'Remada Curvada', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Desenvolvimento', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Rosca Direta', sets: '3', reps: '10–12', rest: '1 min' },
          { name: 'Tríceps Testa', sets: '3', reps: '10–12', rest: '1 min' },
        ],
      },
      {
        label: 'Full Body B',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Levantamento Terra', sets: '3', reps: '5–7', rest: '2 min' },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10', rest: '2 min' },
          { name: 'Leg Press', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Elevação Lateral', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Panturrilha', sets: '3', reps: '15–20', rest: '1 min' },
        ],
      },
      {
        label: 'Full Body C',
        caption: 'Sexta-feira',
        exercises: [
          {
            name: 'Agachamento Frontal',
            sets: '3',
            reps: '8–10',
            rest: '2 min',
          },
          { name: 'Remada Unilateral', sets: '3', reps: '8–10', rest: '2 min' },
          {
            name: 'Supino com Halteres',
            sets: '3',
            reps: '10–12',
            rest: '2 min',
          },
          { name: 'Stiff', sets: '3', reps: '10–12', rest: '2 min' },
          { name: 'Rosca Martelo', sets: '3', reps: '12–15', rest: '1 min' },
          { name: 'Tríceps Polia', sets: '3', reps: '12–15', rest: '1 min' },
        ],
      },
    ],
  },
]
