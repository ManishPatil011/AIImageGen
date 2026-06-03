import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

import { colors } from '../utils/colors'

const { width } = Dimensions.get('window')
const CARD_WIDTH = width * 0.22

const CategoryCard = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.label, selected && styles.labelSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    marginRight: 10,
  },
  cardSelected: {
    borderColor: colors.accentMuted,
    backgroundColor: colors.accentSoft,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  labelSelected: {
    color: colors.accent,
    fontWeight: '600',
  },
})
