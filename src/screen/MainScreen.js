import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ArrowLeft, Camera, Image } from 'react-native-feather';

const MainScreen = () => {
//   const navigation = useNavigation();

  return (
    // <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={styles.backButton}
            accessibilityRole="button"
            accessibilityLabel="Quay lại màn hình chính"
          >
            <ArrowLeft stroke="white" width={24} height={24} />
            <Text style={styles.backButtonText}>Quay lại</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.actionButton}
            accessibilityRole="button"
            accessibilityLabel="Chụp ảnh"
          >
            <Camera stroke="white" width={24} height={24} />
            <Text style={styles.actionButtonText}>Chụp ảnh</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            accessibilityRole="button"
            accessibilityLabel="Chọn ảnh từ thư viện"
          >
            <Image stroke="white" width={24} height={24} />
            <Text style={styles.actionButtonText}>Chọn ảnh</Text>
          </TouchableOpacity>
        </View>
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default MainScreen;

