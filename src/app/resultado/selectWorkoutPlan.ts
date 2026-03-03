//selectWorkoutPlan.tsx
import { fichasDeTreino } from './fichasDeTreino'

interface Answers {
  goal?: string
  experience?: string
  frequency?: string
  focus?: string
  gender?: string
  age?: number | string
}

export function selectWorkoutPlan(answers: Answers) {
  const { experience, frequency, focus, goal, gender } = answers

  //2x por semana
  if (frequency === '2x por semana') {
    if (experience === 'Iniciante') {
      return fichasDeTreino.find((treino) => treino.id === 'forcaFundamental')
    }

    if (experience === 'Intermediário') {
      return fichasDeTreino.find((treino) => treino.id === 'potenciaAvancada')
    }

    if (experience === 'Avançado') {
      if (gender === 'Homem') {
        return fichasDeTreino.find((treino) => treino.id === 'potenciaAvancada')
      }

      if (gender === 'Mulher') {
        return fichasDeTreino.find((treino) => treino.id === 'potenciaAvancada')
      }
    }
  }

  //3x por semana
  if (frequency === '3x por semana') {
    if (experience === 'Iniciante') {
      return fichasDeTreino.find((treino) => treino.id === 'fundacaoDeAco')
    }

    if (experience === 'Intermediário') {
      return fichasDeTreino.find((treino) => treino.id === 'corpoDeImpacto')
    }

    if (experience === 'Avançado') {
      if (gender === 'Homem') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyAvancadoMasculino'
        )
      }

      if (gender === 'Mulher') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyFemininoAvancado'
        )
      }
    }
  }

  //4x por semana
  if (frequency === '4x por semana') {
    if (experience === 'Iniciante') {
      return fichasDeTreino.find((treino) => treino.id === 'forcaFundamental')
    }

    if (experience === 'Intermediário') {
      return fichasDeTreino.find((treino) => treino.id === 'upperLowerMaquinas')
    }

    if (experience === 'Avançado') {
      return fichasDeTreino.find((treino) => treino.id === 'potenciaAvancada')
    }
  }

  //5x por semana
  if (frequency === '5x por semana') {
    if (gender === 'Mulher') {
      return fichasDeTreino.find((treino) => treino.id === 'femininoLowerFocus')
    }

    if (gender === 'Homem') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'conquistaContinua5x'
      )
    }
  }

  //6x por semana
  if (frequency === '6x por semana') {
    if (gender === 'Homem') {
      return fichasDeTreino.find((treino) => treino.id === 'treinoABC')
    }

    if (gender === 'Mulher') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'treinoABC-evolucaoFeminina'
      )
    }
  }

  // fallback
  return fichasDeTreino[0]
}
