import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Button
      title="           VER MAIS           "
      color="#212121"
      accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5bdaf',
    height: 30,
    width: 350,
  },
});