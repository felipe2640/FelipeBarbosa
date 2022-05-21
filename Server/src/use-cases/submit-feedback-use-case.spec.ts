import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase({ create: createFeedbackSpy })

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example',
        screenshot: 'test.jps'
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
  })
})
