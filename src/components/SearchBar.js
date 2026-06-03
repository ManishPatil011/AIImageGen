import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { colors } from '../utils/colors'

const SearchBar = ({ value, onChangeText, placeholder = 'Search creations...' }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.textMuted}
      style={styles.searchBar}
    />
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
    fontSize: 16,
    color: colors.textPrimary,
  },
})
