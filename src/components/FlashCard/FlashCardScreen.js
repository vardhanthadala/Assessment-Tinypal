import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from '../common/Header';

const FlashCardScreen = ({ navigation }) => { 
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="UNLEARN OLD PATTERNS" subtitle="ans 101" />

      <View style={styles.content}>
        <View style={styles.progress}>
          <Text style={styles.progressText}>1 / 3</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => setIsFlipped(!isFlipped)}
        >
          <Text style={styles.cardText}>
            {isFlipped
              ? 'Toys and screens? Obvious distractions. But also: "Open your mouth! Here comes an aeroplane!", "Look there\'s a bird!", etc.'
              : 'What Qualifies as Distractions?'}
          </Text>
          <Text style={styles.hintText}>
            {isFlipped ? 'Tap to see question' : 'Tap to see answer'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.askTinuButton}>
          <Text style={styles.askTinuText}>Ask Tinu</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Did You Know</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  progress: {
    padding: 16,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
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

export default FlashCardScreen;
