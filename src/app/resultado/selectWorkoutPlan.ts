//selectWorkoutPlan.tsx
import { fichasDeTreino } from './fichasDeTreino'

interface Answers {
  gymOrCalisthenics?: string
  goal?: string
  experience?: string
  frequency?: string
  focus?: string
  gender?: string
  age?: number | string
}

export function selectWorkoutPlan(answers: Answers) {
  const { experience, frequency, gender, goal, gymOrCalisthenics } = answers

  if (gymOrCalisthenics === 'Academia') {
    //2x por semana
    if (frequency === '2x por semana') {
      if (goal === 'Perder gordura' && experience === 'Iniciante') {
        if (gender === 'Homem') {
          return fichasDeTreino.find(
            (treino) => treino.id === 'fullBodyFatLossMen'
          )
        }

        if (gender === 'Mulher') {
          return fichasDeTreino.find(
            (treino) => treino.id === 'fullBodyFatLossWomen'
          )
        }
      }

      if (experience === 'Iniciante') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyAltaPerformance'
        )
      }

      if (experience === 'Intermediário') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyAltaPerformance'
        )
      }

      if (experience === 'Avançado') {
        if (gender === 'Homem') {
          return fichasDeTreino.find(
            (treino) => treino.id === 'fullBodyAltaPerformance'
          )
        }

        if (gender === 'Mulher') {
          return fichasDeTreino.find(
            (treino) => treino.id === 'fullBodyAltaPerformance'
          )
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
        return fichasDeTreino.find(
          (treino) => treino.id === 'upperLowerMaquinas'
        )
      }

      if (experience === 'Avançado') {
        return fichasDeTreino.find((treino) => treino.id === 'potenciaAvancada')
      }
    }

    //5x por semana
    if (frequency === '5x por semana') {
      if (gender === 'Mulher') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'femininoLowerFocus'
        )
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
          (treino) => treino.id === 'treinoABCEvolucaoFeminina'
        )
      }
    }
  } else {
    //2x por semana
    if (frequency === '2x por semana') {
      if (experience === 'Iniciante') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyCalisteniaIniciante'
        )
      }

      if (experience === 'Intermediário') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyCalisteniaIntermediario2x'
        )
      }

      if (experience === 'Avançado') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyCalisteniaAvancado2x'
        )
      }
    }

    //3x por semana
    if (frequency === '3x por semana') {
      if (experience === 'Iniciante') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyCalisteniaIniciante'
        )
      }

      if (experience === 'Intermediário') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyCalisteniaIntermediario3x'
        )
      }

      if (experience === 'Avançado') {
        return fichasDeTreino.find(
          (treino) => treino.id === 'fullBodyCalisteniaAvancado3x'
        )
      }
    }
  }

  //4x por semana
  if (frequency === '4x por semana') {
    if (experience === 'Iniciante') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'fullBodyCalisteniaIniciante'
      )
    }

    if (experience === 'Intermediário') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'upperLowerCalisteniaIntermediario4x'
      )
    }

    if (experience === 'Avançado') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'upperLowerCalisteniaAvancado4x'
      )
    }
  }

  //5x por semana
  if (frequency === '5x por semana') {
    if (experience === 'Iniciante') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'fullBodyCalisteniaIniciante'
      )
    }
  }

  //6x por semana
  if (frequency === '6x por semana') {
    if (experience === 'Iniciante') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'fullBodyCalisteniaIniciante'
      )
    }

    if (experience === 'Avançado') {
      return fichasDeTreino.find(
        (treino) => treino.id === 'calisteniaAvancado6xSemana'
      )
    }
  }

  // fallback
  return fichasDeTreino[0]
}
