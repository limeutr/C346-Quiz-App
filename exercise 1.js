import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
    const [userType, setUserType] = useState('Guest'); // State for User Type
    const [userName, setUserName] = useState(''); // State for User Name
    const [password, setPassword] = useState(''); // State for Password

    const showToast = () => {
        const welcomeMessage = "Welcome " + userType + " " + userName;
        ToastAndroid.show(welcomeMessage, ToastAndroid.SHORT);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUserType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
            />

            <Text>User Name:</Text>
            <TextInput
                style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
                placeholder="Enter User Name"
                value={userName}
                onChangeText={setUserName}
            />

            <Text>Password:</Text>
            <TextInput
                style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
                placeholder="Enter Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={showToast}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#0000FF', marginVertical: 20 }}>
                    LOG IN
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyApp;
