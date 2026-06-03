import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Card from './Card'
import { colors } from '../utils/colors'

const SectionCard = ({
  title,
  subtitle,
  headerRight,
  children,
  style,
}) => {
  const hasHeader = title || subtitle

  return (
    <Card style={[styles.section, style]}>
      {hasHeader ? (
        <View style={headerRight ? styles.headerRow : undefined}>
          <View style={headerRight ? styles.headerText : undefined}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {subtitle ? (
              <Text style={[styles.subtitle, !headerRight && styles.subtitleSpaced]}>
                {subtitle}
              </Text>
            ) : null}
          </View>
          {headerRight}
        </View>
      ) : null}
      {children}
    </Card>
  )
}

export default SectionCard

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  subtitleSpaced: {
    marginBottom: 16,
  },
})
