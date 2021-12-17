import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import DashboardItemRow from '../../utils/dashboardItems/dashboardItemsRow';


const Dashboard = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const styles = StyleSheet.create({

    })

    return(
        <View style={{flex: 1, height: '100%', width: '100%'}}>
            <ScrollView>
                <View style={{height: 100}}>

                </View>
                <View style={{padding: 25}}>
                    <View style={{paddingBottom: 10}}>
                        <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>Visitors</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <DashboardItemRow modalVisible={modalVisible} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Dashboard;