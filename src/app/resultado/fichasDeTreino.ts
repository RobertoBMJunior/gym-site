// fichasDeTreino.ts

interface ExerciseList {
  name: string
  sets: string | number
  reps: string | number
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
    title: 'Full Body Completo 2.0',
    pdfFile: '/pdfs/fullbody_performance.pdf',
    workOutRoutine: [
      {
        label: 'Treino Full Body',
        caption: 'Foco em Compostos e Equilíbrio Muscular',
        exercises: [
          { name: 'Agachamento Livre', sets: '3', reps: '8–10' },
          { name: 'Supino Reto', sets: '3', reps: '8–10' },
          { name: 'Remada Curvada ou Baixa', sets: '3', reps: '10–12' },
          { name: 'Stiff (Posterior de Coxa)', sets: '3', reps: '10–12' },
          { name: 'Desenvolvimento de Ombros', sets: '3', reps: '10' },
          { name: 'Puxada Aberta (Lat Pulldown)', sets: '3', reps: '10–12' },
          { name: 'Rosca Direta', sets: '3', reps: '10–12' },
          { name: 'Tríceps Corda', sets: '3', reps: '10–12' },
          { name: 'Prancha Abdominal', sets: '3', reps: '45-60 seg' },
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
          { name: 'Supino reto', sets: '3', reps: '8–12' },
          { name: 'Remada baixa', sets: '4', reps: '8–10' },
          { name: 'Elevação lateral', sets: '3', reps: '12' },
          { name: 'Rosca direta', sets: '3', reps: '10–12' },
          { name: 'Tríceps corda', sets: '3', reps: '10–12' },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Inferior',
        exercises: [
          { name: 'Agachamento livre', sets: '4', reps: '8–10' },
          { name: 'Leg press', sets: '3', reps: '10' },
          { name: 'Mesa flexora', sets: '3', reps: '10' },
          { name: 'Panturrilha em pé', sets: '3', reps: '12–15' },
          { name: 'Abdominal', sets: '3', reps: '15' },
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
          { name: 'Supino Reto (Barra ou Halter)', sets: '4', reps: '8–10' },
          { name: 'Supino Inclinado com Halteres', sets: '3', reps: '10–12' },
          { name: 'Crossover (Polia Média/Baixa)', sets: '3', reps: '12' },
          { name: 'Desenvolvimento com Halteres', sets: '3', reps: '10' },
          { name: 'Elevação Lateral', sets: '4', reps: '12–15' },
          { name: 'Tríceps Pulley (Corda)', sets: '3', reps: '12' },
          { name: 'Tríceps Testa', sets: '3', reps: '10' },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Costas • Bíceps • Trapézio',
        exercises: [
          { name: 'Puxada Alta (Lat Pulldown)', sets: '4', reps: '10–12' },
          { name: 'Remada Curvada ou Cavalinho', sets: '3', reps: '8–10' },
          { name: 'Remada Baixa Sentada', sets: '3', reps: '12' },
          { name: 'Face Pull (Posterior de Ombro)', sets: '3', reps: '15' },
          { name: 'Encolhimento com Halteres', sets: '3', reps: '12–15' },
          { name: 'Rosca Direta (Barra W)', sets: '3', reps: '10' },
          { name: 'Rosca Martelo', sets: '3', reps: '12' },
        ],
      },
      {
        label: 'Treino C',
        caption: 'Pernas • Glúteos • Panturrilha',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '8–10' },
          { name: 'Leg Press 45°', sets: '3', reps: '12' },
          { name: 'Cadeira Extensora', sets: '3', reps: '12–15' },
          { name: 'Stiff ou Mesa Flexora', sets: '4', reps: '10–12' },
          { name: 'Afundo ou Passada', sets: '3', reps: '10 (cada perna)' },
          { name: 'Panturrilha em Pé', sets: '4', reps: '15–20' },
          { name: 'Panturrilha Sentado', sets: '3', reps: '15' },
        ],
      },
    ],
  },

  {
    id: 'treinoABC-evolucaoFeminina',
    title: 'Protocolo Evolução Feminina (6x/semana)',
    pdfFile: '/pdfs/evolucaoFeminina6x.pdf',
    workOutRoutine: [
      {
        label: 'Treino A: Membros Inferiores (Geral)',
        caption: 'Segunda e Quinta',
        exercises: [
          { name: 'Agachamento Livre ou no Smith', sets: '3', reps: '10–12' },
          { name: 'Leg Press 45', sets: '3', reps: '10–12' },
          {
            name: 'Elevação Pélvica (Máquina ou Barra)',
            sets: '3',
            reps: '12–15',
          },
          { name: 'Cadeira Extensora', sets: '3', reps: '12–15' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15' },
          { name: 'Panturrilha em Pé', sets: '4', reps: '15–20' },
        ],
      },
      {
        label: 'Treino B: Superiores (Costas, Bíceps e Ombro)',
        caption: 'Terça e Sexta',
        exercises: [
          { name: 'Puxada Aberta no Pulley', sets: '3', reps: '10–12' },
          { name: 'Remada Baixa Triângulo', sets: '3', reps: '10–12' },
          { name: 'Desenvolvimento com Halteres', sets: '3', reps: '12–15' },
          { name: 'Elevação Lateral Halteres', sets: '3', reps: '12–15' },
          { name: 'Rosca Direta Polia', sets: '3', reps: '12–15' },
          { name: 'Abdominal Supra (Solo)', sets: '3', reps: '15–20' },
        ],
      },
      {
        label: 'Treino C: Inferior (Foco Posterior/Glúteo) e Tríceps',
        caption: 'Quarta e Sábado',
        exercises: [
          { name: 'Stiff com Halteres', sets: '3', reps: '10–12' },
          { name: 'Afundo (Passada)', sets: '3', reps: '10–12' },
          { name: 'Cadeira Abdutora', sets: '3', reps: '15–20' },
          { name: 'Glúteo na Polia (Extensão)', sets: '3', reps: '12–15' },
          { name: 'Tríceps Polia (Corda)', sets: '3', reps: '12–15' },
          { name: 'Prancha Isométrica', sets: '3', reps: '45s' },
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
          { name: 'Supino reto articulado', sets: '3', reps: '6–10' },
          { name: 'Peck deck / Chest fly máquina', sets: '3', reps: '10–15' },
          {
            name: 'Puxada alta (pegada média/neutra)',
            sets: '3',
            reps: '8–12',
          },
          { name: 'Remada baixa na máquina', sets: '3', reps: '8–12' },
          { name: 'Elevação lateral na máquina', sets: '3', reps: '12–15' },
          { name: 'Reverse peck deck', sets: '3', reps: '12–15' },
          { name: 'Tríceps máquina/polia', sets: '3', reps: '10–15' },
          { name: 'Bíceps máquina', sets: '3', reps: '10–15' },
        ],
      },

      {
        label: 'Lower A',
        caption: 'Ênfase em quadríceps',
        exercises: [
          { name: 'Leg press', sets: '4', reps: '8–12' },
          { name: 'Mesa flexora', sets: '3', reps: '10–15' },
          { name: 'Cadeira extensora', sets: '3', reps: '10–15' },
          {
            name: 'Panturrilha em máquina/leg press',
            sets: '4',
            reps: '12–20',
          },
          { name: 'Abdômen em máquina/polia', sets: '3', reps: '12–20' },
        ],
      },

      {
        label: 'Upper B',
        caption: 'Peito inclinado + ombro completo',
        exercises: [
          { name: 'Supino inclinado articulado', sets: '3', reps: '6–10' },
          { name: 'Chest fly máquina', sets: '3', reps: '10–15' },
          { name: 'Remada articulada convergente', sets: '3', reps: '8–12' },
          { name: 'Puxada alta pegada aberta', sets: '3', reps: '8–12' },
          {
            name: 'Desenvolvimento de ombro na máquina',
            sets: '3',
            reps: '8–12',
          },
          { name: 'Elevação lateral na máquina', sets: '3', reps: '12–15' },
          { name: 'Tríceps máquina/polia', sets: '3', reps: '10–15' },
          { name: 'Bíceps na polia', sets: '3', reps: '10–15' },
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
          },
          { name: 'Flexora sentada/deitada', sets: '3', reps: '10–15' },
          { name: 'Afundo no Smith', sets: '3', reps: '8–12 por perna' },
          { name: 'Panturrilha sentada/máquina', sets: '4', reps: '12–20' },
          { name: 'Abdômen', sets: '3', reps: '12–20' },
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
          { name: 'Agachamento livre', sets: '4', reps: '8–10' },
          { name: 'Leg press', sets: '3', reps: '10–12' },
          { name: 'Cadeira extensora', sets: '3', reps: '12–15' },
          { name: 'Afundo com halteres', sets: '3', reps: '10 por perna' },
          { name: 'Panturrilha em pé', sets: '3', reps: '12–15' },
        ],
      },

      {
        label: 'Upper A',
        caption: 'Costas e braços',
        exercises: [
          { name: 'Puxada na frente', sets: '3', reps: '8–12' },
          { name: 'Remada baixa', sets: '3', reps: '8–12' },
          { name: 'Elevação lateral', sets: '3', reps: '12–15' },
          { name: 'Rosca direta', sets: '3', reps: '10–12' },
          { name: 'Tríceps corda', sets: '3', reps: '10–12' },
          { name: 'Abdominal', sets: '3', reps: '15' },
        ],
      },

      {
        label: 'Lower B',
        caption: 'Glúteos',
        exercises: [
          { name: 'Hip thrust', sets: '4', reps: '8–12' },
          { name: 'Glute bridge', sets: '3', reps: '12' },
          { name: 'Cadeira abdutora', sets: '3', reps: '15' },
          { name: 'Afundo no smith', sets: '3', reps: '10 por perna' },
          { name: 'Panturrilha sentada', sets: '3', reps: '12–15' },
        ],
      },

      {
        label: 'Upper B',
        caption: 'Peito e ombro',
        exercises: [
          { name: 'Supino máquina ou halteres', sets: '3', reps: '8–12' },
          { name: 'Crucifixo máquina', sets: '3', reps: '12' },
          { name: 'Desenvolvimento de ombro', sets: '3', reps: '10' },
          { name: 'Elevação lateral', sets: '3', reps: '12–15' },
          { name: 'Tríceps testa', sets: '3', reps: '10–12' },
          { name: 'Abdominal', sets: '3', reps: '15' },
        ],
      },

      {
        label: 'Lower C',
        caption: 'Posterior de coxa',
        exercises: [
          { name: 'Stiff', sets: '4', reps: '8–10' },
          { name: 'Mesa flexora', sets: '3', reps: '10–12' },
          { name: 'Leg press pés altos', sets: '3', reps: '10–12' },
          { name: 'Cadeira abdutora', sets: '3', reps: '15' },
          { name: 'Panturrilha', sets: '3', reps: '12–15' },
        ],
      },
    ],
  },

  {
    id: 'conquistaContinua5x',
    title: 'Protocolo Performance 5-Dias (Seg-Sex)',
    pdfFile: '/pdfs/conquistaContinua5x.pdf',
    workOutRoutine: [
      {
        label: 'Upper (Superior Completo)',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Supino Reto Barra', sets: '3', reps: '6–8' },
          { name: 'Remada Curvada', sets: '3', reps: '8–10' },
          { name: 'Desenvolvimento Halteres', sets: '3', reps: '10–12' },
          { name: 'Puxada Alta', sets: '3', reps: '10–12' },
          { name: 'Rosca Direta Polia', sets: '3', reps: '12–15' },
          { name: 'Tríceps Corda', sets: '3', reps: '12–15' },
        ],
      },
      {
        label: 'Lower (Inferior Completo)',
        caption: 'Terça-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '3', reps: '6–8' },
          { name: 'Stiff', sets: '3', reps: '10–12' },
          { name: 'Leg Press 45', sets: '3', reps: '12–15' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15' },
          { name: 'Panturrilha em Pé', sets: '4', reps: '12–15' },
        ],
      },
      {
        label: 'Push (Peito/Ombro/Tríceps)',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Supino Inclinado Halteres', sets: '3', reps: '10–12' },
          { name: 'Crucifixo Máquina (Pec Deck)', sets: '3', reps: '12–15' },
          { name: 'Crossover Polia Alta', sets: '3', reps: '12–15' },
          { name: 'Elevação Lateral Halteres', sets: '4', reps: '12–15' },
          { name: 'Tríceps Testa Barra W', sets: '3', reps: '10–12' },
        ],
      },
      {
        label: 'Pull (Costas/Bíceps/Posterior)',
        caption: 'Quinta-feira',
        exercises: [
          { name: 'Barra Fixa ou Graviton', sets: '3', reps: '8–10' },
          { name: 'Remada Unilateral (Serrote)', sets: '3', reps: '10–12' },
          { name: 'Face Pull (Corda)', sets: '3', reps: '15–20' },
          { name: 'Rosca Martelo Halteres', sets: '3', reps: '10–12' },
          { name: 'Rosca Inversa Barra', sets: '2', reps: '12–15' },
          { name: 'Encolhimento Halteres', sets: '3', reps: '12–15' },
        ],
      },
      {
        label: 'Legs (Membros Inferiores)',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Agachamento Hack ou Sumô', sets: '3', reps: '10–12' },
          { name: 'Afundo (Passada)', sets: '3', reps: '10–12' },
          { name: 'Cadeira Extensora', sets: '3', reps: '12–15' },
          { name: 'Panturrilha Sentado', sets: '4', reps: '15–20' },
          { name: 'Abdominal Supra Máquina', sets: '3', reps: '15–20' },
          { name: 'Elevação de Pernas (Infra)', sets: '3', reps: '15–20' },
        ],
      },
    ],
  },

  {
    id: 'fullBodyAvancadoMasculino',
    title: 'Protocolo Full Body Advanced V2 (3x/semana)',
    pdfFile: '/pdfs/fullBodyAvancado.pdf',
    workOutRoutine: [
      {
        label: 'Dia 1: Foco Tensional (Força)',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Agachamento Livre Barra', sets: '4', reps: '4–6' },
          { name: 'Supino Reto Barra', sets: '4', reps: '4–6' },
          { name: 'Levantamento Terra Convencional', sets: '3', reps: '5' },
          { name: 'Desenvolvimento Militar (OHP)', sets: '3', reps: '6–8' },
          {
            name: 'Puxada Articulada (Pegada Supinada)',
            sets: '3',
            reps: '6–8',
          },
          { name: 'Supino com Pegada Fechada', sets: '3', reps: '6–8' },
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
          },
          { name: 'Supino Inclinado Halteres', sets: '3', reps: '10–12' },
          { name: 'Remada Curvada Pronada', sets: '3', reps: '10–12' },
          { name: 'Elevação Lateral Cabo', sets: '4', reps: '15–20' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15' },
          { name: 'Rosca Scott Máquina', sets: '3', reps: '12–15' },
          { name: 'Tríceps Polia Barra Reta', sets: '3', reps: '12–15' },
        ],
      },
      {
        label: 'Dia 3: Híbrido (Power-Building)',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Agachamento Búlgaro', sets: '3', reps: '8–10' },
          { name: 'Supino Reto Halteres', sets: '3', reps: '8–10' },
          { name: 'Remada Unilateral (Serrote)', sets: '3', reps: '8–10' },
          { name: 'Stiff Barra', sets: '3', reps: '8–10' },
          { name: 'Crucifixo Inclinado Cabo', sets: '3', reps: '12–15' },
          { name: 'Face Pull', sets: '3', reps: '15–20' },
          { name: 'Panturrilha em Pé (Pausa 2s)', sets: '4', reps: '10–12' },
        ],
      },
    ],
  },

  {
    id: 'fullBodyFemininoAvancado',
    title: 'Protocolo Curvas de Aço (Feminino 3x)',
    pdfFile: '/pdfs/curvasDeAco.pdf',
    workOutRoutine: [
      {
        label: 'Dia 1: Força e Base (Foco Glúteo Máximo)',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Agachamento Livre Barra', sets: '4', reps: '6–8' },
          { name: 'Elevação Pélvica com Barra', sets: '4', reps: '8–10' },
          { name: 'Supino Reto Halteres', sets: '3', reps: '10–12' },
          { name: 'Puxada Aberta no Pulley', sets: '3', reps: '10–12' },
          { name: 'Stiff com Barra ou Halteres', sets: '3', reps: '10–12' },
          { name: 'Prancha Abdominal com Peso', sets: '3', reps: '45-60s' },
        ],
      },
      {
        label: 'Dia 2: Volume e Detalhes (Foco Quadríceps/Ombro)',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Leg Press 45 (Pés Baixos)', sets: '3', reps: '12–15' },
          { name: 'Afundo ou Passada Alternada', sets: '3', reps: '10–12' },
          { name: 'Desenvolvimento com Halteres', sets: '3', reps: '10–12' },
          { name: 'Elevação Lateral na Polia', sets: '4', reps: '15–20' },
          {
            name: 'Cadeira Extensora (Pico de contração 2s)',
            sets: '3',
            reps: '12–15',
          },
          { name: 'Remada Baixa com Triângulo', sets: '3', reps: '12–15' },
          { name: 'Tríceps Polia (Corda)', sets: '3', reps: '12–15' },
        ],
      },
      {
        label: 'Dia 3: Cadeia Posterior e Metabólico',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Levantamento Terra Sumô', sets: '4', reps: '6–8' },
          { name: 'Agachamento Búlgaro', sets: '3', reps: '10–12' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15' },
          {
            name: 'Cadeira Abdutora (Tronco inclinado)',
            sets: '4',
            reps: '15–20',
          },
          { name: 'Remada Unilateral com Halter', sets: '3', reps: '10–12' },
          { name: 'Rosca Direta com Halteres', sets: '2', reps: '12–15' },
          { name: 'Panturrilha em Pé', sets: '4', reps: '15–20' },
        ],
      },
    ],
  },

  {
    id: 'forcaFundamental',
    title: 'Protocolo Força Fundamental (4x/semana)',
    pdfFile: '/pdfs/forcaFundamental.pdf',
    workOutRoutine: [
      {
        label: 'Upper A',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Supino Reto com Barra', sets: '3', reps: '6–8' },
          { name: 'Remada Curvada com Barra', sets: '3', reps: '6–8' },
          { name: 'Desenvolvimento com Halteres', sets: '3', reps: '8–10' },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10' },
          { name: 'Rosca Direta com Barra', sets: '2', reps: '10–12' },
          { name: 'Tríceps Testa', sets: '2', reps: '10–12' },
        ],
      },

      {
        label: 'Lower A',
        caption: 'Terça-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '6–8' },
          { name: 'Levantamento Terra Romeno', sets: '3', reps: '8–10' },
          { name: 'Leg Press 45°', sets: '3', reps: '10–12' },
          { name: 'Cadeira Flexora', sets: '3', reps: '10–12' },
          { name: 'Panturrilha em Pé', sets: '3', reps: '12–15' },
        ],
      },

      {
        label: 'Upper B',
        caption: 'Quinta-feira',
        exercises: [
          { name: 'Supino Inclinado com Halteres', sets: '3', reps: '8–10' },
          { name: 'Remada Unilateral com Halter', sets: '3', reps: '8–10' },
          { name: 'Elevação Lateral', sets: '3', reps: '10–12' },
          { name: 'Puxada Triângulo', sets: '3', reps: '10–12' },
          { name: 'Rosca Martelo', sets: '2', reps: '10–12' },
          { name: 'Tríceps Polia', sets: '2', reps: '12–15' },
        ],
      },

      {
        label: 'Lower B',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Levantamento Terra Convencional', sets: '3', reps: '5–7' },
          { name: 'Agachamento Búlgaro', sets: '3', reps: '8–10' },
          { name: 'Stiff', sets: '3', reps: '10–12' },
          { name: 'Cadeira Extensora', sets: '3', reps: '12–15' },
          { name: 'Panturrilha Sentado', sets: '3', reps: '15–20' },
        ],
      },
    ],
  },

  {
    id: 'corpoDeImpacto',
    title: 'Protocolo Corpo de Impacto (3x/semana)',
    pdfFile: '/pdfs/corpoDeImpacto.pdf',
    workOutRoutine: [
      {
        label: 'Upper',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Supino Reto com Barra', sets: '3', reps: '6–8' },
          { name: 'Remada Curvada', sets: '3', reps: '6–8' },
          { name: 'Desenvolvimento Militar', sets: '3', reps: '8–10' },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10' },
          { name: 'Crucifixo', sets: '2', reps: '12–15' },
          { name: 'Rosca Direta', sets: '2', reps: '10–12' },
        ],
      },
      {
        label: 'Lower',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '6–8' },
          { name: 'Levantamento Terra Romeno', sets: '3', reps: '8–10' },
          { name: 'Leg Press', sets: '3', reps: '10–12' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15' },
          { name: 'Panturrilha', sets: '3', reps: '15–20' },
        ],
      },
      {
        label: 'Full Body',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Agachamento Frontal', sets: '3', reps: '8–10' },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10' },
          { name: 'Remada Unilateral', sets: '3', reps: '10–12' },
          { name: 'Stiff', sets: '2', reps: '10–12' },
          { name: 'Desenvolvimento Arnold', sets: '2', reps: '10–12' },
          { name: 'Rosca Martelo', sets: '2', reps: '12–15' },
        ],
      },
    ],
  },

  {
    id: 'potenciaAvancada',
    title: 'Protocolo Potência Avançada (4x/semana)',
    pdfFile: '/pdfs/potenciaAvancada.pdf',
    workOutRoutine: [
      {
        label: 'Push',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Supino Reto', sets: '4', reps: '6–8' },
          { name: 'Desenvolvimento com Halteres', sets: '3', reps: '8–10' },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10' },
          { name: 'Elevação Lateral', sets: '3', reps: '12–15' },
          { name: 'Tríceps Francês', sets: '2', reps: '10–12' },
          { name: 'Tríceps Polia', sets: '2', reps: '12–15' },
        ],
      },
      {
        label: 'Pull',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Levantamento Terra', sets: '3', reps: '5–7' },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10' },
          { name: 'Remada Curvada', sets: '3', reps: '8–10' },
          { name: 'Puxada Triângulo', sets: '3', reps: '10–12' },
          { name: 'Rosca Direta', sets: '2', reps: '10–12' },
          { name: 'Rosca Martelo', sets: '2', reps: '12–15' },
        ],
      },
      {
        label: 'Legs',
        caption: 'Quinta-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '4', reps: '6–8' },
          { name: 'Leg Press 45°', sets: '3', reps: '10–12' },
          { name: 'Stiff', sets: '3', reps: '10–12' },
          { name: 'Cadeira Extensora', sets: '3', reps: '12–15' },
          { name: 'Cadeira Flexora', sets: '3', reps: '12–15' },
          { name: 'Panturrilha em Pé', sets: '3', reps: '15–20' },
        ],
      },
      {
        label: 'Full Body',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Agachamento Frontal', sets: '3', reps: '8–10' },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10' },
          { name: 'Remada Cavalinho', sets: '3', reps: '10–12' },
          { name: 'Levantamento Terra Romeno', sets: '2', reps: '10–12' },
          { name: 'Elevação Frontal', sets: '2', reps: '12–15' },
        ],
      },
    ],
  },

  {
    id: 'fundacaoDeAco',
    title: 'Protocolo Fundação de Aço (3x/semana)',
    pdfFile: '/pdfs/fundacaoDeAco.pdf',
    workOutRoutine: [
      {
        label: 'Full Body A',
        caption: 'Segunda-feira',
        exercises: [
          { name: 'Agachamento Livre', sets: '3', reps: '6–8' },
          { name: 'Supino Reto', sets: '3', reps: '6–8' },
          { name: 'Remada Curvada', sets: '3', reps: '8–10' },
          { name: 'Desenvolvimento', sets: '2', reps: '10–12' },
          { name: 'Rosca Direta', sets: '2', reps: '10–12' },
          { name: 'Tríceps Testa', sets: '2', reps: '10–12' },
        ],
      },
      {
        label: 'Full Body B',
        caption: 'Quarta-feira',
        exercises: [
          { name: 'Levantamento Terra', sets: '3', reps: '5–7' },
          { name: 'Supino Inclinado', sets: '3', reps: '8–10' },
          { name: 'Puxada Frontal', sets: '3', reps: '8–10' },
          { name: 'Leg Press', sets: '3', reps: '10–12' },
          { name: 'Elevação Lateral', sets: '2', reps: '12–15' },
          { name: 'Panturrilha', sets: '2', reps: '15–20' },
        ],
      },
      {
        label: 'Full Body C',
        caption: 'Sexta-feira',
        exercises: [
          { name: 'Agachamento Frontal', sets: '3', reps: '8–10' },
          { name: 'Remada Unilateral', sets: '3', reps: '8–10' },
          { name: 'Supino com Halteres', sets: '3', reps: '10–12' },
          { name: 'Stiff', sets: '2', reps: '10–12' },
          { name: 'Rosca Martelo', sets: '2', reps: '12–15' },
          { name: 'Tríceps Polia', sets: '2', reps: '12–15' },
        ],
      },
    ],
  },
]
