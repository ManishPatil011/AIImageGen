import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { colors } from '../utils/colors'

const CountBadge = ({ count }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

export default CountBadge

const styles = StyleSheet.create({
  badge: {
    minWidth: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: colors.accentSoft,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.accent,
  },
})
