import React, {useState} from "react";
import { View, TextInput, Button } from "react-native"

import styles from "../styles/styles";

import { createPerson, updatePerson} from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation}) {
    const person = route.params?.person

    const [first,setFirstName] = useState(person?.firstName || "")
    const [lastName,setLastName] = useState(person?.lastName || "")
    const [email,setEmail] = useState(person?.email || "")

    async function save() {
        const data = { first,last,email};

        if(person){
            await updatePerson(person.id,data);
""
        }else{
            await createPerson(data)
        }
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <TextInput 
             placeholder="First Name"
             value={firstName}
             onChange={setFirstName}
            />
            <TextInput 
             placeholder="Last Name"
             value={lastName}
             onChange={setLastName}
            />
            <TextInput 
             placeholder="Email"
             value={email}
             onChange={setEmail}
            />
            <Button 
            title="Salvar"
            onPress={save}
            />
            <Button 
            title="Cancelar"
            onPress={()=> navigation.goBack()}
            />

        </View>
    )

}