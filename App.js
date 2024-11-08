// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
//
// const InputBox = ({ label, onChangeText }) => {
//     return (
//         <View>
//             <Text>{label}</Text>
//             <TextInput style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} onChangeText={onChangeText} />
//         </View>
//     );
// };
//
// const MyApp = () => {
//     const [pw, setPw] = useState('');
//     const [type, setType] = useState('Guest'); // Default user type
//     const [name, setName] = useState(''); // Username
//
//     return (
//         <View>
//             <Text>User Type:</Text>
//             <RNPickerSelect
//                 onValueChange={(value) => setType(value)}
//                 items={[
//                     { label: 'Admin', value: 'Admin' },
//                     { label: 'Guest', value: 'Guest' },
//                 ]}
//             />
//
//             <InputBox label="User Name:" onChangeText={setName} />
//             <InputBox label="Password:" onChangeText={setPw} />
//
//             <TouchableOpacity onPress={() => {
//                 const correctPassword = '123';
//                 let message = 'Error! Wrong Password!';
//                 if (pw === correctPassword) {
//                     message = `Welcome ${type} ${name}`;
//                 }
//                 ToastAndroid.show(message, ToastAndroid.SHORT);
//             }}>
//                 <Text>LOG IN</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
//
// export default MyApp;
//
//
//
import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 10,
    },
    questionCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    submitButton: {
        color:'black',
        marginTop: 10,
        borderRadius: 10,
    },
});

export default function App() {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");

    const correctAnswers = ["silly cat", "witch cat", "shocked cat"];

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswers[0]) score++;
        if (answer2 === correctAnswers[1]) score++;
        if (answer3 === correctAnswers[2]) score++;

        Alert.alert("Results", "Score: " + score + " out of 3");
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Quiz Time!</Text>

            <View style={styles.questionCard}>
                <Text style={styles.questionText}>1. Describe the picture.</Text>
                <Image source={require('./assets/silly cat.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer1(value)}
                    items={[
                        { label: 'witch cat', value: 'witch cat' },
                        { label: 'shocked cat', value: 'shocked cat' },
                        { label: 'silly cat', value: 'silly cat' },
                    ]}
                    placeholder={{ label: "Choose answer", value: null }}
                />
            </View>

            <View style={styles.questionCard}>
                <Text style={styles.questionText}>2. Describe the picture.</Text>
                <Image source={require('./assets/witch cat.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer2(value)}
                    items={[
                        { label: 'witch cat', value: 'witch cat' },
                        { label: 'shocked cat', value: 'shocked cat' },
                        { label: 'silly cat', value: 'silly cat' },
                    ]}
                    placeholder={{ label: "Choose answer", value: null }}
                />
            </View>

            <View style={styles.questionCard}>
                <Text style={styles.questionText}>3. Describe the picture.</Text>
                <Image source={require('./assets/shocked cat.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer3(value)}
                    items={[
                        { label: 'witch cat', value: 'witch cat' },
                        { label: 'shocked cat', value: 'shocked cat' },
                        { label: 'silly cat', value: 'silly cat' },
                    ]}
                    placeholder={{ label: "Choose answer", value: null }}
                />
            </View>

            <View style={styles.submitButton}>
                <Button title="Submit Answers" onPress={handleSubmit} color="#ff33e4" />
            </View>
        </ScrollView>
    );
}

