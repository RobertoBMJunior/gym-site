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
