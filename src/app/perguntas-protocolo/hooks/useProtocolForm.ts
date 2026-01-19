'use client'

import { useState } from 'react'
import { questions } from '../questions'

export function useProtocolForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | number>>({})

  const totalSteps = questions.length
  const currentQuestion = questions[currentStep]

  function next() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  function prev() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  function saveAnswer(value: string | number) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  return {
    currentStep,
    totalSteps,
    currentQuestion,
    answers,
    next,
    prev,
    saveAnswer,
  }
}
