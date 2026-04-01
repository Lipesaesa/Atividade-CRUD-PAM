import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
    const person = route.params?.person;

    const [first, setFirstName] = useState(person?.first || "");
    const [last, setLastName] = useState(person?.last || "");
    const [email, setEmail] = useState(person?.email || "");
    const [phone, setPhone] = useState(person?.phone || "");

    async function save() {
        try {
            const data = { first, last, email, phone };

            if (!first || !last || !email || !phone) {
                Alert.alert("Erro", "Preencha todos os campos");
                return;
            }

            if (person) {
                await updatePerson(person.id, data);
            } else {
                await createPerson(data);
            }

            Alert.alert("Sucesso", "Pessoa salva com sucesso!");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar");
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={first}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={last}
                onChangeText={setLastName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />

            <View style={styles.buttonSpace}>
                <Button title="Salvar" onPress={save} />
            </View>

            <Button
                title="Cancelar"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}