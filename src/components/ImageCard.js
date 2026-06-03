import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

import { colors } from '../utils/colors'

const { width } = Dimensions.get('window')
const CARD_WIDTH = width * 0.4
const IMAGE_HEIGHT = width * 0.35

const ImageCard = ({ source, title }) => {
  return (
    <View style={styles.card}>
      <Image source={source} style={styles.image} resizeMode="cover" />
      {title ? <Text style={styles.title} numberOfLines={1}>{title}</Text> : null}
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: colors.surface,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  image: {
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    backgroundColor: colors.surfaceMuted,
  },
  title: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    backgroundColor: colors.surfaceMuted,
  },
})
