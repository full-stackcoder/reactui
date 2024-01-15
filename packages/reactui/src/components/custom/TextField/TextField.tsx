import React from 'react'
import Box from '../Box/Box'
import withLayout from '../../utils/withLayout'

type TextFieldProps = React.HTMLProps<HTMLInputElement> & {
  className?: string
  type?: 'text' | 'email' | 'password' | 'search' | 'url'
  variant?: 'outlined'
  startAdornment?: React.ReactNode
}

const TextField = ({ className, type, variant, startAdornment, ...props }: TextFieldProps) => {
  const classNames = ['fscTextField', className && `${className}`, variant === 'outlined' && 'fscTextField_outlined']
    .filter(Boolean)
    .join(' ')
  return (
    <>
      <Box className='fscTextField_wrap' display='flex' alignItems='center'>
        {startAdornment}
        <input {...props} type={type} className={classNames} />
      </Box>
    </>
  )
}

export default withLayout(TextField)
