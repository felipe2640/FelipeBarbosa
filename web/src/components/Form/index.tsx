import React, { FormEvent, useState } from 'react'
import { api } from '../../lib/api'

type Props = {}

function index({}: Props) {
  const [type, setType] = useState('')
  const [comment, setComment] = useState('')

  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type,
      comment
    })

    const users = await api.get('/filterPosts')
    console.log(users.data)

    setIsSendingFeedback(false)
  }

  return (
    <form
      onSubmit={handleSubmitFeedback}
      className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl"
    >
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Full name</span>
          <input
            type="text"
            className="mt-1 block w-full"
            placeholder=""
            onChange={(event) => setType(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Additional details</span>
          <textarea
            className="mt-1 block w-full"
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex items-center m-2 px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 "
      >
        {isSendingFeedback ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
            'Processing...'
          </svg>
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  )
}

export default index
