import { useState } from 'react'

import {
  addCreation,
  getNextGeneratedImage,
} from '../utils/creationsStore'

export const useGenerateViewModel = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('Realistic')
  const [generatedImage, setGeneratedImage] = useState(null)

  const isGenerateEnabled = prompt.trim().length > 0

  const handleStylePress = style => {
    setSelectedStyle(style)
  }

  const onGenerate = () => {
    if (!isGenerateEnabled) {
      return
    }

    const image = getNextGeneratedImage()
    const title = prompt.trim()

    setGeneratedImage(image)
    addCreation({
      title,
      style: selectedStyle,
      image,
    })
  }

  const handleGoBack = navigation => {
    navigation.goBack()
  }

  return {
    prompt,
    setPrompt,
    selectedStyle,
    generatedImage,
    isGenerateEnabled,
    handleStylePress,
    onGenerate,
    handleGoBack,
  }
}
