import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

// Header Component
const Header = ({ title, subtitle }) => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.title}>{title}</Text>
      {subtitle && <Text style={headerStyles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: '#2D3748',
    padding: 16,
    paddingTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    opacity: 0.8,
  },
});

// DidYouKnowScreen Component (YOUR CODE)
const DidYouKnowScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="UNLEARN OLD PATTERNS" subtitle="Distractions=No No!" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>DID YOU KNOW?</Text>
          <Text style={styles.bullet}>• Eating with distractions</Text>
          <Text style={styles.bullet}>
            • Higher rates of healthy food refusal
          </Text>
          <Text style={styles.bullet}>
            • One study found that kids were twice as likely to become picky
            eaters when they ate with distractions
          </Text>
          <Text style={styles.citation}>
            Journal of Applied Developmental Psychology
          </Text>
        </View>
      </ScrollView>

      <View style={styles.progress}>
        <Text style={styles.progressText}>1 / 5</Text>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('FlashCard')}
      >
        <Text style={styles.nextButtonText}>Next → Flash Cards</Text>
      </TouchableOpacity>
    </View>
  );
};

// FlashCardScreen Component
const FlashCardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="UNLEARN OLD PATTERNS" subtitle="ans 101" />

      <View style={flashCardStyles.content}>
        <View style={styles.progress}>
          <Text style={styles.progressText}>1 / 3</Text>
        </View>

        <View style={flashCardStyles.card}>
          <Text style={flashCardStyles.cardText}>
            What Qualifies as Distractions?
          </Text>
          <Text style={flashCardStyles.hintText}>Tap to see answer</Text>
        </View>

        <TouchableOpacity style={flashCardStyles.askTinuButton}>
          <Text style={flashCardStyles.askTinuText}>Ask Tinu</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={flashCardStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={flashCardStyles.backButtonText}>
          ← Back to Did You Know
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const flashCardStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    margin: 16,
    minHeight: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 16,
  },
  hintText: {
    fontSize: 12,
    color: '#718096',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  askTinuButton: {
    backgroundColor: '#48BB78',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  askTinuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#718096',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

// Your Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 12,
    textAlign: 'center',
  },
  bullet: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 8,
    lineHeight: 20,
  },
  citation: {
    fontSize: 12,
    color: '#718096',
    fontStyle: 'italic',
    marginTop: 12,
  },
  progress: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
  },
  progressText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Navigation Setup
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DidYouKnow"
          component={DidYouKnowScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlashCard"
          component={FlashCardScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
