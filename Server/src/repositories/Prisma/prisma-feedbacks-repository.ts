import { prisma } from '../../prisma'
import { FeedbacksRepository, FeedbackCreateData } from '../Feedbacks'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        // type: req.body.type,
        // comment: req.body.comment,
        // screenshot: req.body.screenshot
        type,
        comment,
        screenshot
      }
    })
  }
}

