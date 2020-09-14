import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView,  ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component'
import orderService from './../services/order.service'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import i18n from './../i18n/i18n'

const OrderScreen = ({ route, navigation }) => {

    const Tab = createBottomTabNavigator()
    const { id } = route.params

    const [order, setOrder] = useState(null)

    useEffect(()=> {
        const getOrder = async() => {
            setOrder(await orderService.get(id))
        }
        if(!order) { getOrder() }
    }, [order])

    const tabScreenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
    
            switch(route.name) {
                case 'Items':
                    return <Icon name={'receipt'} size={size} color={color} />
                
                case 'Customer':
                    return <Icon name={'account'} size={size} color={color} />
                
                case 'Shipping':
                    return <Icon name={'truck-fast'} size={size} color={color} />
                
                case 'Payment':
                    return <Icon name={'credit-card-clock'} size={size} color={color} />
    
                case 'Gallery':
                    return <Icon name={'file-image-outline'} size={size} color={color} />
            }
        },
    })
    
    const tabBarOptions = () => {
        return {
            activeTintColor: 'deeppink',
            inactiveTintColor: 'gray',
        }
        
    }

    const render = () => {
        if(!order) { return (<></>) }
        return (
            <NavigationContainer independent={true}>
                <Tab.Navigator screenOptions={tabScreenOptions} tabBarOptions={tabBarOptions()}>
                    <Tab.Screen name="Items" component={ItemScreen} options={ {title : i18n.t('items')}} initialParams={{orderParam: order}}/>
                    <Tab.Screen name="Customer" component={CustomerScreen} options={ {title : i18n.t('customer')} }/>
                    <Tab.Screen name="Shipping" component={ShippingScreen} options={ {title : i18n.t('shipping')} }/>
                    <Tab.Screen name="Payment" component={PaymentScreen} options={ {title : i18n.t('payment')} }/>
                    <Tab.Screen name="Gallery" component={GalleryScreen} options={ {title : i18n.t('gallery')} }/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

    return ( render() )
}

const ItemScreen = ({ navigation, route }) => {

    const { orderParam } = route.params

    //order
    const [order, setOrder] = useState(orderParam)

    //table
    const [itemTableHeaders, setItemTableHeaders] = useState([i18n.t('item'), i18n.t('quantity'), i18n.t('price') + ' ₡', ''])
    const [itemTableData, setItemTableData] = useState([
        ['Caja de Cupcakes', '2', '9500', ''],
        ['Docena de Donas', '1', '4500', ''],
        ['Caja de Cakepops Surtida', '2', '5000', ''],
        ['Queque de Matrimonio', '1', '35000', '']
    ])

    const element = (data, index) => (
        <TouchableOpacity onPress={() => console.log(index)}>
          <View style={ styles.btn }>
            <Icon name={'pencil'} size={25} color={'white'} style={{textAlign: 'center'}}/>
          </View>
        </TouchableOpacity>
    );

    const render = () => {

        if(!order) { return (<></>) }

        return (
            <SafeAreaView style={styles.safeareacontainer}>
                <ScrollView>
                    <View style={styles.tabcontainer}>
                        <View style={styles.holder}>
                            <Text style={styles.sectiontitle}>{i18n.t('orderNo')}: { order.orderno }</Text>
                            <Text style={styles.sectionsubtitle}>{i18n.t('customer')}: { order.customer.fullname } </Text>
                        </View>
                    </View>

                    <View style={styles.tabcontainer}>
                        <View style={styles.tableholder}>
                            <View style={styles.justifiedcontainer}>
                                <Text style={styles.sectiontitle}>{i18n.t('items')}:</Text>
                                <Button title={i18n.t('addNewItem')}/>
                            </View>
                            <Table borderStyle={{ borderColor: 'transparent' }}>
                                <Row data={itemTableHeaders} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.textLeft}/>
                                {
                                    itemTableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell 
                                                key={cellIndex} 
                                                flex={cellIndex === 0 ? 2 : 1} 
                                                data={cellIndex === 3 ? element(cellData, index) : cellData} 
                                                textStyle={cellIndex === 0 ? styles.textLeft: styles.text}
                                            />
                                        ))
                                        }
                                    </TableWrapper>
                                    ))
                                }
                            </Table>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    return ( render() );
}

const CustomerScreen = () => {
    return (
        <View style={styles.tabcontainer}>
            <Text>Customer Screen</Text>
        </View>
    );
}

const ShippingScreen = () => {
    return (
        <View style={styles.tabcontainer}>
            <Text>Shipping Screen</Text>
        </View>
    );
}

const PaymentScreen = () => {
    return (
        <View style={styles.tabcontainer}>
            <Text>Payment Screen</Text>
        </View>
    );
}

const GalleryScreen = () => {
    return (
        <View style={styles.tabcontainer}>
            <Text>Gallery Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tabcontainer: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 },
    holder: { justifyContent: 'center', alignItems: 'flex-start', 
                backgroundColor:'white', padding: 10, borderStyle: 'solid',
                    borderColor:'lightgray', borderWidth: 1, borderRadius: 6, width: '95%', height: 'auto'},
    tableholder: { width:'95%' },
    safeareacontainer: {flex: 1, marginTop: 5 },
    justifiedcontainer: { flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 },
    sectiontitle: { fontSize: 18 },
    sectionsubtitle: {color: 'grey', fontSize: 16 },
    wrapper: { flexDirection: 'row' },
    head: { height: 35, backgroundColor: 'lightgrey' },
    text: { margin: 6, textAlign: 'center'},
    textLeft: { margin: 6, textAlign: 'left' },
    textRight: { margin: 6, textAlign: 'right' },
    row: { flexDirection: 'row', height: 60, backgroundColor: 'white', borderBottomColor: 'lightgrey', borderBottomWidth: 1 },
    btn: { width: 60,  backgroundColor: '#00b1b0',  borderRadius: 5, padding: 5 }
});
 
export default OrderScreen;