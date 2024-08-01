import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Constants from "expo-constants";

import listingsApi from "../api/listings";
import routes from '../navigation/routes';
import Cardi from '../components/Cardi';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';



export default function ListingScreen({ navigation }) {

    const {data:listings, error, loading, request:loadListings} = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings();
    }, []);


    return (
        <>
        
        
        <ActivityIndicator visible={loading} />
        <View style={styles.container}>
            {error && (
                <>
                    <AppText>Couldn't retrieve the listings</AppText>
                    <AppButton children="retry" onPress={loadListings} />
                </>
            )}


            {!loading && (
                <FlatList
                    data={listings}
                    keyExtractor={(list) => list.title}
                    renderItem={({ item }) => 
                        <Cardi
                            title={item.title}
                            subtitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    }
                />
            )}
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,  
    }
});
