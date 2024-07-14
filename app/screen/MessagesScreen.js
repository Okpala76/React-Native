import { View, FlatList } from 'react-native';
import React, {useState} from 'react';


import ProfileCard from '../components/ProfileCard';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';



const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing]= useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

  return (
    <View style={{backgroundColor: colors.light, flex :1}}>
        <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
            <ProfileCard
            profileImage={item.image}
            name={item.title}
            listings={item.description}
            onPress={() => console.log('Message Clicked', item)}
            renderRightActions={() =>
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
            }
            />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing ={refreshing}
        onRefresh={() => {
            setMessages([  {
                id: 2,
                title: 'T2',
                description: 'D2',
                image: require('../assets/mosh.jpg'),
              }])
        }}
        />
    </View>
  );
}
