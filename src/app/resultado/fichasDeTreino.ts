interface ExerciseList {
  name: string
  sets: string | number
  reps: string | number
}

interface TrainingPlan {
  label: string
  exercises: ExerciseList[]
}

interface WorkOutPlan {
  id: string
  title: string
  workOutRoutine: TrainingPlan[]
}

export const fichasDeTreino: WorkOutPlan[] = [
  {
    id: 'fullbody',
    title: 'Full Body Iniciante',
    workOutRoutine: [
      {
        label: 'Treino Full Body',
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
    workOutRoutine: [
      {
        label: 'Treino A — Superior',
        exercises: [
          { name: 'Supino reto', sets: '3', reps: '8–12' },
          { name: 'Remada curvada', sets: '3', reps: '8–12' },
          { name: 'Desenvolvimento', sets: '3', reps: '10' },
          { name: 'Rosca direta', sets: '3', reps: '10–12' },
          { name: 'Tríceps corda', sets: '3', reps: '10–12' },
        ],
      },
      {
        label: 'Treino B — Inferior',
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
    workOutRoutine: [
      {
        label: 'Treino A — Peito e tríceps',
        exercises: [
          { name: 'Supino reto', sets: '3', reps: '8–12' },
          { name: 'Crucifixo', sets: '3', reps: '12' },
        ],
      },

      {
        label: 'Treino B — Costas e bíceps',
        exercises: [
          { name: 'Puxada na frente', sets: '3', reps: '10' },
          { name: 'Rosca direta', sets: '3', reps: '10' },
        ],
      },

      {
        label: 'Treino C — Pernas',
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
    workOutRoutine: [
      {
        label: 'Upper — Parte superior',
        exercises: [
          { name: 'Supino inclinado', sets: '4', reps: '8–10' },
          { name: 'Remada baixa', sets: '4', reps: '8–10' },
          { name: 'Elevação lateral', sets: '3', reps: '12' },
          { name: 'Rosca direta', sets: '3', reps: '10' },
          { name: 'Tríceps corda', sets: '3', reps: '10' },
        ],
      },
      {
        label: 'Lower — Parte inferior',
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
    id: 'circuito',
    title: 'Treino em Circuito (Condicionamento)',
    workOutRoutine: [
      {
        label: 'Circuito Full Body',
        exercises: [
          { name: 'Agachamento com halteres', sets: '3', reps: '15' },
          { name: 'Flexão de braço', sets: '3', reps: '12' },
          { name: 'Remada com halteres', sets: '3', reps: '12' },
          { name: 'Burpee', sets: '3', reps: '10' },
          { name: 'Abdominal bicicleta', sets: '3', reps: '20' },
        ],
      },
    ],
  },

  {
    id: 'upperLowerMaquinas',
    title: 'Treino AB Upper / Lower (Máquinas)',
    workOutRoutine: [
      {
        label: 'Upper A — Peito reto + ombro lateral/posterior',
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
        label: 'Lower A — Ênfase em quadríceps',
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
        label: 'Upper B — Peito inclinado + ombro completo',
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
        label: 'Lower B — Ênfase posterior e glúteos',
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
    workOutRoutine: [
      {
        label: 'Lower A — Quadríceps',
        exercises: [
          { name: 'Agachamento livre', sets: '4', reps: '8–10' },
          { name: 'Leg press', sets: '3', reps: '10–12' },
          { name: 'Cadeira extensora', sets: '3', reps: '12–15' },
          { name: 'Afundo com halteres', sets: '3', reps: '10 por perna' },
          { name: 'Panturrilha em pé', sets: '3', reps: '12–15' },
        ],
      },

      {
        label: 'Upper A — Costas e braços',
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
        label: 'Lower B — Glúteos',
        exercises: [
          { name: 'Hip thrust', sets: '4', reps: '8–12' },
          { name: 'Glute bridge', sets: '3', reps: '12' },
          { name: 'Cadeira abdutora', sets: '3', reps: '15' },
          { name: 'Afundo no smith', sets: '3', reps: '10 por perna' },
          { name: 'Panturrilha sentada', sets: '3', reps: '12–15' },
        ],
      },

      {
        label: 'Upper B — Peito e ombro',
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
        label: 'Lower C — Posterior de coxa',
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
]
