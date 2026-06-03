# AI Image Generator

A React Native CLI app for generating AI-style images with MVVM architecture, stack navigation, and a polished UI.

## Setup Instructions

### Prerequisites

- Node.js >= 22.11.0
- Android Studio (Android) and/or Xcode (iOS)
- React Native: 0.85.3

### Install dependencies

```sh
npm install
```

### Start Metro

```sh
npm start
```

### Run the app

Open a second terminal from the project root:

```sh
# Android
npm run android

# iOS — install pods first, then run
cd ios && pod install && cd ..
npm run ios
```

### Test credentials

| Field    | Example           |
|----------|-------------------|
| Email    | `name@email.com`  |
| Password | `abc123`          |

Tap the **i** icon next to **Login** for format hints.

---

## Architecture Overview

This project follows **MVVM** (Model-View-ViewModel):

| Layer        | Location        | Responsibility                                      |
|--------------|-----------------|-----------------------------------------------------|
| **View**     | `screens/`      | UI only — layout, components, thin navigation wiring |
| **ViewModel**| `viewmodels/`   | State, validation, business logic via custom hooks   |
| **Model**    | `utils/`        | Constants, mock data, lightweight `creationsStore`   |

### Data flow

```
Screen  →  useViewModel()  →  state + handlers
                ↓
         components/ (reusable UI)
                ↓
         utils/ (constants, store)
```

### Key decisions

- **Navigation** — React Navigation native stack: Login → Home → Generate
- **State** — `useState` and custom hooks only (no Redux, no Context API)
- **Shared recent images** — `creationsStore.js` syncs generated items to Home without global state libraries
- **Login** — `navigation.replace('Home')` so back from Home does not return to Login
- **Generate** — `navigation.goBack()` returns to Home

---

## Folder Structure

```
AIImageGen/
├── App.tsx                 # App entry — SafeArea + KeyboardAvoidingView
├── index.js                # React Native registry
├── src/
│   ├── assets/             # Local images (Logo1.jpeg, Logo.png, Logo2–4.jpeg)
│   ├── components/         # Reusable UI
│   │   ├── Card.js
│   │   ├── CategoryCard.js
│   │   ├── CountBadge.js
│   │   ├── EmptyState.js
│   │   ├── HeroCard.js
│   │   ├── ImageCard.js
│   │   ├── ImagePreview.js
│   │   ├── InputField.js
│   │   ├── PrimaryButton.js
│   │   ├── SearchBar.js
│   │   ├── SectionCard.js
│   │   └── SectionHeader.js
│   ├── navigation/
│   │   └── AppNavigator.js # Stack: Login → Home → Generate
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   └── GenerateScreen.js
│   ├── viewmodels/
│   │   ├── useLoginViewModel.js
│   │   ├── useHomeViewModel.js
│   │   └── useGenerateViewModel.js
│   └── utils/
│       ├── colors.js       # Soft gray theme palette
│       ├── constants.js    # Assets, AI categories
│       ├── creationsStore.js
│       └── mockData.js
├── android/                # Android native project
└── ios/                    # iOS native project
```

---

## Features

- Login with email/password validation and disabled button when invalid
- Home with search, AI style categories, and recent creations gallery
- Generate screen with prompt, style picker, and mock image preview
- Empty state on Home when no images have been created yet
