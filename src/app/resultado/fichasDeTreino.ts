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
]
