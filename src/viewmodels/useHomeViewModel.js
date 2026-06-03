import { useState, useEffect } from 'react'

import {
  getCreations,
  subscribeToCreations,
} from '../utils/creationsStore'

export const useHomeViewModel = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [recentCreations, setRecentCreations] = useState(getCreations())

  useEffect(() => {
    return subscribeToCreations(setRecentCreations)
  }, [])

  const filteredCreations = recentCreations.filter(item => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) {
      return true
    }

    return (
      item.title.toLowerCase().includes(query) ||
      item.style.toLowerCase().includes(query)
    )
  })

  const hasRecentCreations = recentCreations.length > 0
  const hasFilteredResults = filteredCreations.length > 0

  const handleCategoryPress = style => {
    setSelectedCategory(style)
  }

  const handleCreateNew = navigation => {
    navigation.navigate('Generate')
  }

  const creationCount = recentCreations.length

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    recentCreations: filteredCreations,
    creationCount,
    hasRecentCreations,
    hasFilteredResults,
    handleCategoryPress,
    handleCreateNew,
  }
}
