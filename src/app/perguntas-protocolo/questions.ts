export type QuestionType = 'options' | 'number'

export interface Question {
  id: string
  title: string
  description?: string
  type: QuestionType
  options?: string[]
  placeholder?: string
}

export const questions: Question[] = [
  {
    id: 'goal',
    title: 'Qual é o seu objetivo principal?',
    description: 'Isso define toda a estrutura do seu treino.',
    type: 'options',
    options: [
      'Ganhar massa muscular',
      'Perder gordura',
      'Ganhar massa e perder gordura',
      'Melhorar condicionamento físico',
      'Saúde e qualidade de vida',
    ],
  },
  {
    id: 'experience',
    title: 'Qual é o seu nível de treino?',
    description: 'Assim evitamos treinos fracos ou avançados demais.',
    type: 'options',
    options: ['Iniciante', 'Intermediário', 'Avançado'],
  },
  {
    id: 'frequency',
    title: 'Quantos dias por semana você pretende treinar?',
    description: 'Vamos organizar o treino de forma eficiente.',
    type: 'options',
    options: ['2x por semana', '3x por semana', '4x por semana', '5x ou mais'],
  },
  {
    id: 'age',
    title: 'Qual é a sua idade?',
    description: 'A idade influencia no volume e recuperação.',
    type: 'number',
    placeholder: 'Ex: 28',
  },
  {
    id: 'weight',
    title: 'Qual é o seu peso atual?',
    description: 'Usamos isso para ajustar intensidade e volume.',
    type: 'number',
    placeholder: 'Ex: 75 (kg)',
  },
  {
    id: 'height',
    title: 'Qual é a sua altura?',
    description: 'Ajuda em estimativas mais precisas.',
    type: 'number',
    placeholder: 'Ex: 175 (cm)',
  },
  {
    id: 'activity',
    title: 'Como está seu nível de atividade física atualmente?',
    description: 'Isso evita exageros e reduz risco de lesões.',
    type: 'options',
    options: ['Sedentário', 'Pouco ativo', 'Ativo', 'Muito ativo'],
  },
]
