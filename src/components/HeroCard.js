import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'

import Card from './Card'
import { colors } from '../utils/colors'

const { width } = Dimensions.get('window')

const HeroCard = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <Card variant="muted" style={styles.hero}>
        <View style={styles.textBlock}>
          <Text style={styles.badge}>Start creating</Text>
          <Text style={styles.title}>Create New Image</Text>
          <Text style={styles.subtitle}>
            Turn your imagination into art with AI-powered generation.
          </Text>
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>Go</Text>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default HeroCard

const styles = StyleSheet.create({
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textBlock: {
    flex: 1,
    paddingRight: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentSoft,
    color: colors.accent,
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  action: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: 12,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.accent,
  },
})
