import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { colors } from '../utils/colors'

const InputField = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  autoCapitalize = 'sentences',
  showPasswordToggle = false,
  isPasswordVisible = false,
  onTogglePasswordVisibility,
}) => {
  const isSecure = showPasswordToggle ? !isPasswordVisible : secureTextEntry

  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        style={[
          styles.input,
          multiline && styles.multiline,
          showPasswordToggle && styles.inputWithToggle,
        ]}
      />

      {showPasswordToggle ? (
        <TouchableOpacity
          onPress={onTogglePasswordVisibility}
          style={styles.toggleButton}
          activeOpacity={0.7}
          accessibilityLabel={
            isPasswordVisible ? 'Hide password' : 'Show password'
          }
        >
          <Text style={styles.eyeIcon}>
            {isPasswordVisible ? '👁‍🗨' : '👁'}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
    fontSize: 16,
    color: colors.textPrimary,
  },
  inputWithToggle: {
    paddingRight: 48,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  toggleButton: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  eyeIcon: {
    fontSize: 20,
  },
})
