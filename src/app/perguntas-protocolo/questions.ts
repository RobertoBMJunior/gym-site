//questions.ts
export type QuestionType = 'options' | 'number'

export interface Question {
  id: string
  title: string
  description: string
  type: QuestionType
  options?: string[]
  placeholder?: string
}

export const questions: Question[] = [
  {
    id: 'goal',
    title: 'Qual é o seu objetivo principal?',
    description: 'Isso define o tipo de treino e o volume ideal.',
    type: 'options',
    options: [
      'Ganhar massa muscular',
      'Perder gordura',
      'Recomposição corporal',
      'Condicionamento físico',
    ],
  },

  {
    id: 'experience',
    title: 'Qual é o seu nível de treino?',
    description: 'Evita treinos avançados ou leves demais.',
    type: 'options',
    options: ['Iniciante', 'Intermediário', 'Avançado'],
  },

  {
    id: 'frequency',
    title: 'Quantos dias por semana você pretende treinar?',
    description: 'Define a divisão de treino mais eficiente.',
    type: 'options',
    options: ['2x por semana', '3x por semana', '4x por semana', '5x ou mais'],
  },

  {
    id: 'focus',
    title: 'Qual região você quer priorizar?',
    description: 'Ajuda a ajustar a ênfase dos exercícios.',
    type: 'options',
    options: ['Treino equilibrado', 'Parte superior', 'Pernas e glúteos'],
  },

  {
    id: 'age',
    title: 'Qual é a sua idade?',
    description: 'A idade ajuda a ajustar volume e recuperação.',
    type: 'number',
    placeholder: 'Ex: 25',
  },
]
