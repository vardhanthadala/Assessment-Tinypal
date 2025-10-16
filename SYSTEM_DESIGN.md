# System Design Document

## Architecture Overview

### Component Hierarchy

```
App (Navigation Container)
├── Stack.Navigator
│ ├── DidYouKnowScreen
│ │ ├── Header
│ │ ├── Content Card
│ │ ├── Progress Indicator
│ │ └── Navigation Button
│ └── FlashCardScreen
│ ├── Header
│ ├── Interactive Flash Card
│ ├── Ask Tinu Button
│ └── Back Navigation
```

### Key Design Decisions

1. **Component Reusability**

   - Header component used across multiple screens
   - Consistent styling patterns
   - Modular file structure

2. **Navigation Strategy**

   - Used React Navigation for native-like transitions
   - Stack navigation for linear flow
   - Clean separation between screens

3. **State Management**

   - Local state for flash card flip animation
   - Navigation state managed by React Navigation
   - Props for component communication

4. **Styling Approach**
   - Consistent color palette
   - Responsive layouts with Flexbox
   - Reusable style objects

## Screens Implemented

### 1. Did You Know Screen

- Educational content display
- Progress indicator
- Navigation to next screen

### 2. Flash Card Screen

- Interactive flip animation
- State management for card flip
- Back navigation
- Ask Tinu integration point

## Code Quality Features

- Clean component separation
- TypeScript-ready structure
- Consistent naming conventions
- Professional code organization
