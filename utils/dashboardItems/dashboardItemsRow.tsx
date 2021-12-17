import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import DashboardItem from './dashboardItem';

const DashboardItemRow = ({modalVisible}:any) => {
    const data= [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/s2v6pwy1/dailyhelp.png',
            text: 'Add your Daily help'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/s2v6pwy1/dailyhelp.png',
            text: 'Add your Daily help'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        }
    ]

    const data1= [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/d38Sh3FB/add-Parcel.png',
            text: 'Add Parcel'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/nrFn2Ckd/vehicle.png',
            text: 'Add Vehicle'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/QdNnMjyQ/restaurant.png',
            text: 'Add restaurant'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/J7JF66Xk/kid.png',
            text: 'Add Kid'
        }
    ]

    const data2 = [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/cLDkgPpV/person.png',
            text: 'Add person'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/s2v6pwy1/dailyhelp.png',
            text: 'Add your Daily help'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        }
    ]
    
    const data4 = [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/d38Sh3FB/add-Parcel.png',
            text: 'Add Parcel'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/nrFn2Ckd/vehicle.png',
            text: 'Add Vehicle'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/QdNnMjyQ/restaurant.png',
            text: 'Add restaurant'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/J7JF66Xk/kid.png',
            text: 'Add Kid'
        }
    ]

    const data3 = [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/s2v6pwy1/dailyhelp.png',
            text: 'Add your Daily help'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/s2v6pwy1/dailyhelp.png',
            text: 'Add your Daily help'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        }
    ]

    const data5 = [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/cLDkgPpV/person.png',
            text: 'Add Person'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/s2v6pwy1/dailyhelp.png',
            text: 'Add your Daily help'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/Hs9hHrBW/preapproveentry.png',
            text: 'Pre-Approve Entry'
        }
    ]

    const data6 = [
        {
            id: 1,
            // image: '../../assets/images/dailyhelp.png',
            image: 'https://i.postimg.cc/d38Sh3FB/add-Parcel.png',
            text: 'Add Parcel'
        },
        {
            id: 2,
            // image: '../../assets/images/preapproveentry.png',
            image: 'https://i.postimg.cc/nrFn2Ckd/vehicle.png',
            text: 'Add Vehicle'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/QdNnMjyQ/restaurant.png',
            text: 'Add restaurant'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/J7JF66Xk/kid.png',
            text: 'Add Kid'
        }
    ]

    return (
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data1.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data2.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data3.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data4.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data5.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {data6.map(ele => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '25%', marginRight: 2}} key={ele.id}>
                            {/* <Text>{data.length}</Text> */}
                            <DashboardItem text={ele.text} image={ele.image} id={ele.id}/>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

export default DashboardItemRow;