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
    id: 'fullbody',
    title: 'Full Body Iniciante',
    pdfFile: '/pdfs/fullbody.pdf',
    workOutRoutine: [
      {
        label: 'Treino Full Body',
        caption: 'Treino para o corpo todo',
        exercises: [
          { name: 'Agachamento livre', sets: '3', reps: '10–12' },
          { name: 'Supino reto', sets: '3', reps: '10–12' },
          { name: 'Puxada na frente', sets: '3', reps: '10–12' },
          { name: 'Elevação lateral', sets: '3', reps: '12–15' },
          { name: 'Abdominal', sets: '3', reps: '15' },
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
          { name: 'Remada curvada', sets: '3', reps: '8–12' },
          { name: 'Desenvolvimento', sets: '3', reps: '10' },
          { name: 'Rosca direta', sets: '3', reps: '10–12' },
          { name: 'Tríceps corda', sets: '3', reps: '10–12' },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Inferior',
        exercises: [
          { name: 'Agachamento', sets: '3', reps: '8–12' },
          { name: 'Leg press', sets: '3', reps: '10–12' },
          { name: 'Mesa flexora', sets: '3', reps: '10–12' },
          { name: 'Panturrilha', sets: '3', reps: '12–15' },
        ],
      },
    ],
  },

  {
    id: 'treinoABC',
    title: 'Treino ABC Clássico',
    pdfFile: '/pdfs/treinoABC.pdf',
    workOutRoutine: [
      {
        label: 'Treino A',
        caption: 'Peito • Ombro • Tríceps',
        exercises: [
          { name: 'Supino reto', sets: '3', reps: '8–12' },
          { name: 'Crucifixo', sets: '3', reps: '12' },
        ],
      },
      {
        label: 'Treino B',
        caption: 'Costas • Bíceps',
        exercises: [
          { name: 'Puxada na frente', sets: '3', reps: '10' },
          { name: 'Rosca direta', sets: '3', reps: '10' },
        ],
      },
      {
        label: 'Treino C',
        caption: 'Pernas • Glúteos',
        exercises: [
          { name: 'Agachamento', sets: '3', reps: '8–12' },
          { name: 'Leg press', sets: '3', reps: '10–12' },
          { name: 'Mesa flexora', sets: '3', reps: '10–12' },
          { name: 'Panturrilha', sets: '3', reps: '12–15' },
        ],
      },
    ],
  },

  {
    id: 'upperLower',
    title: 'Upper / Lower Intermediário',
    pdfFile: '/pdfs/upperLower.pdf',
    workOutRoutine: [
      {
        label: 'Upper',
        caption: 'Parte superior',
        exercises: [
          { name: 'Supino inclinado', sets: '4', reps: '8–10' },
          { name: 'Remada baixa', sets: '4', reps: '8–10' },
          { name: 'Elevação lateral', sets: '3', reps: '12' },
          { name: 'Rosca direta', sets: '3', reps: '10' },
          { name: 'Tríceps corda', sets: '3', reps: '10' },
        ],
      },
      {
        label: 'Lower',
        caption: 'Parte inferior',
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
    id: 'fullbody3x',
    title: 'Full Body 3x por semana',
    pdfFile: '/pdfs/fullbody3x.pdf',
    workOutRoutine: [
      {
        label: 'Treino Full Body',
        caption: 'Treino para dias alternados',
        exercises: [
          { name: 'Agachamento', sets: '3', reps: '10–12' },
          { name: 'Supino reto', sets: '3', reps: '10–12' },
          { name: 'Puxada na frente', sets: '3', reps: '10–12' },
          { name: 'Elevação lateral', sets: '3', reps: '12–15' },
          { name: 'Abdominal', sets: '3', reps: '15' },
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
    title: 'Protocolo Corpo de Impacto (4x/semana)',
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
