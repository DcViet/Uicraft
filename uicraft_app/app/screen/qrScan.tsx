// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// const QRScannerScreen = () => {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [scanned, setScanned] = useState(false);
//   const [result, setResult] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
//     setScanned(true);
//     setResult(data);
//     Alert.alert(
//       'Kết quả quét QR',
//       `Dữ liệu: ${data}\nLoại: ${type}`,
//       [{ text: 'OK', onPress: () => setScanned(false) }],
//       { cancelable: false }
//     );
//   };

//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>Đang yêu cầu quyền truy cập camera...</Text>
//       </View>
//     );
//   }
//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>Không có quyền truy cập camera</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       <View style={styles.topContent}>
//         <Text style={styles.topText}>Đưa mã QR vào khung để quét</Text>
//       </View>
//       <View style={styles.marker} />
//       <View style={styles.bottomContent}>
//         {scanned && (
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => setScanned(false)}
//           >
//             <Text style={styles.buttonText}>Quét lại</Text>
//  personally          </TouchableOpacity>
//         )}
//         {result && <Text style={styles.resultText}>Kết quả: {result}</Text>}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   topContent: {
//     position: 'absolute',
//     top: 40,
//     width: '100%',
//     alignItems: 'center',
//   },
//   topText: {
//     fontSize: 20,
//     color: '#fff',
//     textAlign: 'center',
//   },
//   marker: {
//     position: 'absolute',
//     top: '30%',
//     left: '20%',
//     width: '60%',
//     height: '40%',
//     borderWidth: 2,
//     borderColor: '#fff',
//     borderRadius: 10,
//     backgroundColor: 'transparent',
//   },
//   bottomContent: {
//     position: 'absolute',
//     bottom: 40,
//     width: '100%',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   resultText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   message: {
//     flex: 1,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default QRScannerScreen;