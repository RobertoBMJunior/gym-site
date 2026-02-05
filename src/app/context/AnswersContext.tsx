'use client'

import { createContext, useContext, useState } from 'react'

export type FormAnswers = Record<string, string | number>

type AnswersContextType = {
  answers: FormAnswers | null
  setAnswers: (data: FormAnswers) => void
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined)

export function AnswersProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<FormAnswers | null>(null)

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswersContext.Provider>
  )
}

export function useAnswers() {
  const context = useContext(AnswersContext)

  if (!context) {
    throw new Error('useAnswers must be used within AnswersProvider')
  }

  return context
}
