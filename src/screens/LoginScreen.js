import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'

import Card from '../components/Card'
import InputField from '../components/InputField'
import PrimaryButton from '../components/PrimaryButton'
import { useLoginViewModel } from '../viewmodels/useLoginViewModel'
import { LOGO_LOGIN } from '../utils/constants'
import { colors } from '../utils/colors'

const { width } = Dimensions.get('window')
const LOGO_SIZE = width * 0.4

const LoginScreen = ({ navigation }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    isValid,
    togglePasswordVisibility,
    showLoginInfo,
    handleLogin,
  } = useLoginViewModel()

  const onLoginPress = () => {
    handleLogin(navigation)
  }

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image source={LOGO_LOGIN} style={styles.logo} resizeMode="contain" />
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.tagline}>
          Sign in to create stunning AI images in seconds.
        </Text>
      </View>

      <Card>
        <View style={styles.titleRow}>
          <Text style={styles.formTitle}>Login</Text>
          <TouchableOpacity
            onPress={showLoginInfo}
            activeOpacity={0.7}
            accessibilityLabel="Show login examples"
          >
            <View style={styles.infoCircle}>
              <Text style={styles.infoText}>i</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.formSubtitle}>
          Enter your email and password to continue.
        </Text>

        <InputField
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          showPasswordToggle
          isPasswordVisible={showPassword}
          onTogglePasswordVisibility={togglePasswordVisibility}
        />

        <PrimaryButton
          title="Login"
          onPress={onLoginPress}
          disabled={!isValid}
        />
      </Card>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    marginBottom: 16,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginRight: 8,
  },
  infoCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.accentMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  formSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 20,
    lineHeight: 20,
  },
})
