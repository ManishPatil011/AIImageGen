import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import PrimaryButton from './PrimaryButton'
import { colors } from '../utils/colors'

const EmptyState = ({ title, subtitle, buttonTitle, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {buttonTitle && onButtonPress ? (
        <View style={styles.button}>
          <PrimaryButton title={buttonTitle} onPress={onButtonPress} />
        </View>
      ) : null}
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: colors.surfaceMuted,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
})
