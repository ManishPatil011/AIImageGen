import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'

import { colors } from '../utils/colors'

const Card = ({ children, style, variant = 'surface' }) => {
  const backgroundColor =
    variant === 'muted' ? colors.surfaceGray : colors.surface

  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
})
