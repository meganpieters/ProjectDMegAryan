// IPAddress.js
import { Platform } from 'react-native';

export const getIPAddress = () => {
    if (Platform.OS === 'ios') {
        return 'http://127.0.0.1:8000/api/chargers';
    } else if (Platform.OS === 'android') {
        return 'http://10.0.2.2:8000/api/chargers'; // of 10.0.3.2 als je de Android Emulator gebruikt
    } else {
        // Default fallback
        return 'http://localhost:8000/api/chargers';
    }
};
