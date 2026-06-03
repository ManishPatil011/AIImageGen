import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

import { colors } from '../utils/colors'

const { width } = Dimensions.get('window')
const PREVIEW_SIZE = width - 80

const ImagePreview = ({ imageSource }) => {
  if (imageSource) {
    return (
      <Image
        source={imageSource}
        style={styles.previewImage}
        resizeMode="contain"
      />
    )
  }

  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>
        Generated image will appear here
      </Text>
    </View>
  )
}

export default ImagePreview

const styles = StyleSheet.create({
  previewImage: {
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    borderRadius: 12,
    backgroundColor: colors.surfaceMuted,
    alignSelf: 'center',
  },
  placeholder: {
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    backgroundColor: colors.surfaceMuted,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  placeholderText: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
})
