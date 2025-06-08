import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen() {
    return (
        <LinearGradient
            colors={['#3b82f6', '#06b6d4', '#2ef2e0']}
            locations={[0, 0.7, 1]} 
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text className="text-white text-xl font-bold">Sign In</Text>
        </LinearGradient>
    );
}
