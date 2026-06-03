import React from 'react'
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'

import SectionCard from '../components/SectionCard'
import SectionHeader from '../components/SectionHeader'
import InputField from '../components/InputField'
import CategoryCard from '../components/CategoryCard'
import PrimaryButton from '../components/PrimaryButton'
import ImagePreview from '../components/ImagePreview'
import { useGenerateViewModel } from '../viewmodels/useGenerateViewModel'
import { AI_CATEGORIES } from '../utils/constants'
import { colors } from '../utils/colors'

const GenerateScreen = ({ navigation }) => {
  const {
    prompt,
    setPrompt,
    selectedStyle,
    generatedImage,
    isGenerateEnabled,
    handleStylePress,
    onGenerate,
    handleGoBack,
  } = useGenerateViewModel()

  const onBackPress = () => {
    handleGoBack(navigation)
  }

  const onGeneratePress = () => {
    onGenerate()
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <SectionHeader
        title="Generate Image"
        subtitle="Describe your vision and pick a style to create AI artwork."
      />

      <SectionCard title="Prompt" subtitle="What would you like to create?">
        <InputField
          value={prompt}
          onChangeText={setPrompt}
          placeholder="Describe your image..."
          multiline
        />
      </SectionCard>

      <SectionCard title="Style" subtitle="Choose an art style for your image.">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContent}
        >
          {AI_CATEGORIES.map(category => (
            <CategoryCard
              key={category}
              label={category}
              selected={selectedStyle === category}
              onPress={() => handleStylePress(category)}
            />
          ))}
        </ScrollView>
      </SectionCard>

      <PrimaryButton
        title="Generate"
        onPress={onGeneratePress}
        disabled={!isGenerateEnabled}
      />

      <SectionCard
        title="Preview"
        subtitle="Your generated image will appear below."
        style={styles.previewCard}
      >
        <ImagePreview imageSource={generatedImage} />
      </SectionCard>
    </ScrollView>
  )
}

export default GenerateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: colors.accent,
    fontWeight: '600',
  },
  horizontalContent: {
    paddingBottom: 4,
  },
  previewCard: {
    marginTop: 16,
    marginBottom: 0,
  },
})
