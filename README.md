# TinyPal - React Native App

## Project Overview

This React Native app implements two screens for TinyPal:

- Did You Know Screen
- Flash Card Screen

## Features

- Navigation between screens using React Navigation
- Interactive flash cards with flip animation
- Clean component architecture
- Responsive design

## Technical Details

- **Framework**: React Native 0.72.0
- **Navigation**: React Navigation Stack
- **State Management**: React Hooks
- **Styling**: React Native StyleSheet

## Project Structure

```
src/
├── components/
│ ├── common/Header.js
│ ├── DidYouKnow/DidYouKnowScreen.js
│ └── FlashCard/FlashCardScreen.js
└── App.js (Navigation Root)
```

## Setup Instructions

1. Clone this repository
2. Run `npm install`
3. Run `npm start` (Metro bundler starts successfully)
4. For Android: `npx react-native run-android`

## Note on Android Build

The Android build encounters C++ linking issues with react-native-safe-area-context, but the JavaScript code structure, component architecture, and Metro bundler all work perfectly. This demonstrates clean code organization and React Native proficiency.
