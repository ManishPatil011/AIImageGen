import { GENERATED_IMAGES } from './constants'

let creations = []
let imageIndex = 0
const listeners = new Set()

export const getCreations = () => [...creations]

export const getNextGeneratedImage = () => {
  const image = GENERATED_IMAGES[imageIndex % GENERATED_IMAGES.length]
  imageIndex += 1
  return image
}

export const addCreation = ({ title, style, image }) => {
  const creation = {
    id: `${Date.now()}-${imageIndex}`,
    title,
    style,
    image,
  }

  creations = [creation, ...creations]
  listeners.forEach(listener => listener(getCreations()))
  return creation
}

export const subscribeToCreations = listener => {
  listener(getCreations())
  listeners.add(listener)
  return () => listeners.delete(listener)
}
