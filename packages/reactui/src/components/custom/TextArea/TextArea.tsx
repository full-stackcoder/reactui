import React from 'react'
import Box from '../Box/Box'
import withLayout from '../../utils/withLayout'

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  className?: string
  variant?: 'outlined'
}

const TextArea = ({ className, variant, ...props }: TextAreaProps) => {
  const classNames = ['fscTextArea', className && `${className}`, variant === 'outlined' && 'fscTextArea_outlined']
    .filter(Boolean)
    .join(' ')
  return (
    <>
      <Box className='fscTextArea_wrap' display='flex' alignItems='center'>
        <textarea {...props} className={classNames} />
      </Box>
    </>
  )
}

export default withLayout(TextArea)
