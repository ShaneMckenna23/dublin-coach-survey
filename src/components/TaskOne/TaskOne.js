import React from 'react'

const TaskOne = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
    </form>
  )
}

export default TaskOne