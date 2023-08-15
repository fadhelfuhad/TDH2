
import React from 'react'
import { StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import BannerContent from "./BannerContent";
import ProductList from "./ProductList";
import { catelogues, newProducts, recommended } from "@/assets/data/mock";
import CatelogueList from "./CatelogueList";



export default function Home() {

    return (
        <ScrollView style={styles.screen}>
            <BannerContent />
            <ProductList title={newProducts.title} products={newProducts.products} />
            <CatelogueList catelogues={catelogues} />
            <ProductList title={newProducts.title} products={recommended.products} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
    }
})