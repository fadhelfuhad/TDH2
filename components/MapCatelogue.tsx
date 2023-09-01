import { MainStackList } from "@/types";
import React from 'react'
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { catelogueList } from "@/assets/data/mock";
import CatelogueItem from "@/app/screens/catelogue/CatelogueItem";
import SelectableButton from "@/components/SelectableButtone"
import { useAppSelector } from "@/app/hooks";
import { selectGenderFilters } from "@/app/redux/selectors"
import { ICatelogueGroup, ICatelogueItem } from "@/assets/data/model";



export default function MapCatelogue() {

    const genderFilterList = useAppSelector(selectGenderFilters)

    const renderCatelogueButton: ListRenderItem<ICatelogueGroup> = ({ item }) => {
        return <SelectableButton name={item.name} selected={item.id === 1} onPress={() => { }} />
    }

    const renderCatelogueItem: ListRenderItem<ICatelogueItem> = ({ item }) => {
        return <CatelogueItem catelogue={item} />
    }

    return (
        <View style={styles.screen}>
         
            <FlatList
                style={styles.buttonList}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={catelogueList}
                keyExtractor={(item, i) => item.id.toString()}
                renderItem={renderCatelogueItem}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 35,
        paddingHorizontal: 16,
        flex: 1,
    },
    buttonList: {
        marginTop: 18,
    }
})