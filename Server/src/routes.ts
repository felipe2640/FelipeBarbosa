import express from 'express'
import { prisma } from './prisma'
import { PrismaFeedbacksRepository } from './repositories/Prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { PrismaClient } from '@prisma/client'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
    // nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})



routes.get('/login', async (req, res) => {
  
  const users = await prisma.feedback.findMany()
  
})