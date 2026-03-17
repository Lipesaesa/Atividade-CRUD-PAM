import React, {useEffect, useState } from "react"
import { View, Text, FlatList, Button} from "react-native";

import styles from "../styles/styles"

import { getPeople } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }) {
    //estado da lista
    const [people, setPeople] = useState([])

    async function loadPeople(){
        const data =await getPeople();

        setPeople(data)
    }

    useEffect(() =>{
        loadPeople()
    }, [])

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pessoas</Text>

            <Button
            title="Adicionar Pessoa"
            onPress={() => navigation.navigate("AddEdit")}
            />

            <Flat 
                data={people}
                keyExtractor={(item)=>item.id.toString()}

                renderItem={({item}) => (
                    <CardPersonal 
                    item={item}
                    navigation={navigation}
                    refresh={loadPeople}
                    />
                )}
            />

        </View>
    )
    function CardPersonal({item, navigation, refresh}){
        return(
            <View style={styles.card}>
                <View>
                    <Text style={styles.name}>
                        {item.firstName} {item.lastName}
                    </Text>

                    <Text style={styles.email}>
                        {item.email}
                    </Text>
                </View>

                <View>
                    <Button 
                    title="Editar"
                    onPress={()=> navigation.navigate("addEdit", {person:item})}
                    />

                    <Button 
                        title="Deletar"
                        onPress={async ()=> {
                            await deletePerson(item.id)
                            refresh();
                        }}
                    />
                </View>

            </View>

            
        )
    }
}