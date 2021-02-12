import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Wrapper } from '..';
import { height, width } from 'react-native-dimension';
import { colors } from '../../services';

const CustomBottomSheet = ({ content }) => {
    return (
        <BottomSheet
            // ref={ref => {
            //     this.sheetRef = ref;
            // }}
            onCloseEnd={() => {

            }}
            snapPoints={[height(10), height(50), height(85)]}
            borderRadius={0}
            initialSnap={1}
            style={{ backgroundColor: 'red' }}
            //enabledGestureInteraction={true}
            enabledContentGestureInteraction={false}
            // enabledHeaderGestureInteraction={true}

            renderHeader={() => {
                return (
                    <Wrapper style={styles.bottomSheetHeader}>
                        <View style={styles.bottomSheetBarThick} />
                    </Wrapper>
                )
            }}
            renderContent={() => {
                return (
                    <View style={styles.bottomSheetContainer}>
                        {content}
                    </View>
                );
            }}
        />
    )
}

export { CustomBottomSheet };


const styles = StyleSheet.create({
    bottomSheetHeader: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: height(4),
        marginBottom: 0,
        borderBottomWidth: 0,
        justifyContent: 'center',
    },
    bottomSheetContainer: {
        backgroundColor: '#FFFFFF',
        // padding: 16,
        height: height(85),
        // marginTop: 0
    },
    bottomSheetBarThick: {
        height: 3,
        width: width(10),
        borderRadius: width(15),
        alignSelf: 'center',
        backgroundColor: colors.appBgColor3,
    },
})