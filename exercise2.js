
import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");

    // The answer sheet
    const correctAnswers = ["silly cat", "witch cat", "shocked cat"];

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswers[0]) score++;
        if (answer2 === correctAnswers[1]) score++;
        if (answer3 === correctAnswers[2]) score++;

        Alert.alert("Results", "Score: " + score + " out of 3");
    };

    return (
        <ScrollView>
            <Text>Quiz Time!</Text>

            <View>
                <Text>1. Describe the picture.</Text>
                <Image source={require('./assets/silly cat.jpg')} />
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

            <View>
                <Text>2. Describe the picture.</Text>
                <Image source={require('./assets/witch cat.jpg')} />
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

            <View>
                <Text>3. Describe the picture.</Text>
                <Image source={require('./assets/shocked cat.jpg')} />
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

            <Button title="Submit Answers" onPress={handleSubmit} />
        </ScrollView>
    );
}
