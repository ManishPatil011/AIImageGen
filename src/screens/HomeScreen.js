import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import HeroCard from '../components/HeroCard'
import SectionCard from '../components/SectionCard'
import SearchBar from '../components/SearchBar'
import EmptyState from '../components/EmptyState'
import CountBadge from '../components/CountBadge'
import CategoryCard from '../components/CategoryCard'
import ImageCard from '../components/ImageCard'
import PrimaryButton from '../components/PrimaryButton'
import { useHomeViewModel } from '../viewmodels/useHomeViewModel'
import { AI_CATEGORIES } from '../utils/constants'
import { colors } from '../utils/colors'

const HomeScreen = ({ navigation }) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    recentCreations,
    creationCount,
    hasRecentCreations,
    hasFilteredResults,
    handleCategoryPress,
    handleCreateNew,
  } = useHomeViewModel()

  const onCreatePress = () => {
    handleCreateNew(navigation)
  }

  const renderRecentSection = () => {
    if (!hasRecentCreations) {
      return (
        <EmptyState
          title="No creations yet"
          subtitle="Your gallery is empty. Start creating something amazing with AI and your artwork will show up here."
          buttonTitle="Start Creating"
          onButtonPress={onCreatePress}
        />
      )
    }

    if (!hasFilteredResults) {
      return (
        <EmptyState
          title="No matches found"
          subtitle="Try a different search term or create a new image."
        />
      )
    }

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContent}
      >
        {recentCreations.map(item => (
          <ImageCard
            key={item.id}
            source={item.image}
            title={item.title}
          />
        ))}
      </ScrollView>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back!</Text>
        <Text style={styles.tagline}>
          Explore styles, browse your gallery, and bring new ideas to life.
        </Text>
      </View>

      <HeroCard onPress={onCreatePress} />

      <SectionCard
        title="Discover"
        subtitle="Search through your past creations and inspirations."
      >
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      </SectionCard>

      <SectionCard
        title="AI Styles"
        subtitle="Pick a style to inspire your next masterpiece."
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContent}
        >
          {AI_CATEGORIES.map(category => (
            <CategoryCard
              key={category}
              label={category}
              selected={selectedCategory === category}
              onPress={() => handleCategoryPress(category)}
            />
          ))}
        </ScrollView>
      </SectionCard>

      <SectionCard
        title="Recent Creations"
        subtitle="Your latest generated artwork at a glance."
        headerRight={<CountBadge count={creationCount} />}
      >
        {renderRecentSection()}
      </SectionCard>

      <PrimaryButton title="Create New Image" onPress={onCreatePress} />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  horizontalContent: {
    paddingBottom: 4,
  },
})
