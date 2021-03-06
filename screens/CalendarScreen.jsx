import React, {useState} from 'react';
import {Agenda} from 'react-native-calendars'
import { StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CalendarScreen = ({ navigation }) => {

    const [items, setItems] = useState({});

    const loadItems = (day) => {
        console.log(`day is: ${JSON.stringify(day)}`)
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 5);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  orderId: '724104c0-cf8b-10e9-b262-25d5f2e15309',
                  customer: 'Pedido - María Paula Raus',
                  time: '3pm - 5pm',
                  order: 'Caja 6 cupcakes / 24 Galletas Navideñas',
                  fulfillment: 'Express',
                  phone: '83289597',
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          //console.log(this.state.items);
          const newItems = {};
          Object.keys(items).forEach(key => {newItems[key] = items[key];});
          setItems(newItems);
        }, 1000);
    }
    
    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    const renderItem = (item) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Order', {id: item.orderId})}>
            <View style={[styles.item, {flex: 1, flexDirection: 'row'}]}>
            
                <View style={{maxWidth:240, flex:1, flexDirection: 'column', alignContent: 'space-between'}}>
                    <Text style={{fontSize:18, color:'#808080'}}>{item.customer}</Text>
                    <Text style={{marginTop: 5}}>{item.order}</Text>
                    <Text style={{marginTop: 5}}>Entrega: {item.time}</Text>
                    <Text style={{marginTop: 5}}>
                    Teléfono:&nbsp;
                    <Text style={{color: '#00b1b0', textDecorationLine: 'underline'}} onPress={() => Linking.openURL(`tel:${item.phone}`)}>{item.phone}</Text>
                    </Text>
                    <Text style={{marginTop: 5}}>
                    Whatsapp:&nbsp; 
                    <Text style={{color: '#00b1b0', textDecorationLine: 'underline'}} onPress={() => Linking.openURL(`https://wa.me/506${item.phone}`)}>{item.phone}</Text>
                    </Text>
                </View>

                <View>
                    <Icon
                    name="truck-fast"
                    size={30}
                    color={'#f26532'}/>
                </View>
            </View>
        </TouchableOpacity>
    );
    }

    return (
        <Agenda
        items={ items }   
        loadItemsForMonth={(month) => {loadItems(month)}}
        //onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        //onDayPress={(day)=>{console.log('day pressed')}}
        //onDayChange={(day)=>{console.log('day changed')}}
        selected={new Date()}
        //minDate={'2012-05-10'}
        //maxDate={'2012-05-30'}
        //pastScrollRange={50}
        //futureScrollRange={150}
        renderItem={(item, firstItemInDay) => renderItem(item) }
        //renderDay={(day, item) => {return (<View />);}}
        renderEmptyDate={() => {return (<View style={styles.emptyDate}><Text>This is empty date for sure!</Text></View>);}}
        //renderKnob={() => {return (<View />);}}
        //renderEmptyData = {() => {return (<View />);}}
        rowHasChanged={(r1, r2) => {return r1.name !== r2.name}}
        //hideKnob={false}
        markedDates={{
          /*'2020-09-16': {selected: true, marked: true},*/
          '2020-09-16': {marked: true},
          '2020-09-17': {marked: true},
          '2020-09-18': {disabled: true}
        }}
        //disabledByDefault={true}
        //onRefresh={() => console.log('refreshing...')}
        //refreshing={false}
        //refreshControl={null}
        // Agenda theme
        theme={{
          agendaDayTextColor: '#e73e97',
          agendaDayNumColor: '#00b1b0',
          agendaTodayColor: '#e73e97',
          agendaKnobColor: '#e73e97'
        }}
      />
    );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex:1,
      paddingTop: 30
    }
});
 
export default CalendarScreen;