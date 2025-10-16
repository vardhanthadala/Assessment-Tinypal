import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Header;
