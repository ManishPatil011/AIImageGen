import { useState } from 'react'
import { Alert } from 'react-native'

const validateEmail = email => {
  const atIndex = email.indexOf('@')
  if (atIndex <= 0) {
    return false
  }

  const dotIndex = email.indexOf('.', atIndex + 1)
  return dotIndex > atIndex + 1 && dotIndex < email.length - 1
}

export const useLoginViewModel = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const isEmailValid = validateEmail(email)
  const isPasswordValid = password.length >= 6
  const isValid = isEmailValid && isPasswordValid

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const showLoginInfo = () => {
    Alert.alert(
      'Login Examples',
      'Email address:\nname@email.com\n\nPassword (min. 6 characters):\nabc123',
    )
  }

  const handleLogin = navigation => {
    if (isValid) {
      navigation.replace('Home')
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    isValid,
    togglePasswordVisibility,
    showLoginInfo,
    handleLogin,
  }
}
