import { render, screen } from '@testing-library/react'
import Ep13 from '../../Notes/Courses/ReactCourse/Ep13'

test('Should load React Course Ep13 notes without errors', () => {
  render(<Ep13 />)

  const heading = screen.getByText('Episode 13:')
  expect(heading).toBeInTheDocument()
})
