//selectWorkoutPlan.tsx
import { fichasDeTreino } from './fichasDeTreino'

interface Answers {
  goal?: string
  experience?: string
  frequency?: string
  focus?: string
}

export function selectWorkoutPlan(answers: Answers) {
  const { experience, frequency, focus, goal } = answers

  // INICIANTE
  if (experience === 'Iniciante') {
    if (frequency === '2x por semana' || frequency === '3x por semana') {
      return fichasDeTreino.find((w) => w.id === 'fullbody3x')
    }

    if (frequency === '4x por semana') {
      return fichasDeTreino.find((w) => w.id === 'treinoAB')
    }
  }

  // INTERMEDIÁRIO
  if (experience === 'Intermediário') {
    if (frequency === '4x por semana') {
      return fichasDeTreino.find((w) => w.id === 'upperLower')
    }

    if (frequency === '3x por semana') {
      return fichasDeTreino.find((w) => w.id === 'treinoABC')
    }
  }

  // FOCO EM PERNAS / FEMININO
  if (focus === 'Pernas e glúteos' && frequency === '5x ou mais') {
    return fichasDeTreino.find((w) => w.id === 'femininoLowerFocus')
  }

  // CONDICIONAMENTO
  if (goal === 'Condicionamento físico') {
    return fichasDeTreino.find((w) => w.id === 'circuito')
  }

  // fallback
  return fichasDeTreino[0]
}
