import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity,Alert, useColorScheme, TextInput } from 'react-native';
// import { Input } from 'react-native-magnus';
import { List, Divider, IconButton } from 'react-native-paper';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TicketingContainer() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Kasma', date: 'Yesterday at 16:34', amount: -120 },
    { id: 2, title: 'Kabwe', date: 'Yesterday at 13:03', amount: -220 },
    { id: 3, title: 'Chingola', date: 'Yesterday at 16:34', amount: 859 },
    { id: 4, title: 'Ndola', date: 'Wed, 01 Nov 2023 at 09:10', amount: -20 }
  ]);

  const handleSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTicketPress = (ticket: { id: number; title: string; date: string; amount: number; }) => {
    // Navigate to the TicketDetails screen and pass the ticket details as parameters
    navigation.navigate('TicketDetails', { ticket });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Tickets"
            value={searchQuery}
            onChangeText={handleSearch}
            style={styles.searchInput}
            // suffix={<Ionicons icon="search-outline" onPress={() => {}} />}
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Ticket Listings</Text>
          <List.Section>
            {filteredTickets.map(ticket => (
              <TouchableOpacity key={ticket.id} onPress={() => handleTicketPress(ticket)}>
                <View>
                  <List.Item
                    title={ticket.title}
                    description={ticket.date}
                    style={styles.listItem}
                    titleStyle={styles.listTitle}
                    descriptionStyle={styles.listDescription}
                    right={() => (
                      <Text style={ticket.amount < 0 ? styles.redText : styles.greenText}>
                        {ticket.amount < 0 ? `${ticket.amount} ZMW` : `+${ticket.amount} £`}
                      </Text>
                    )}
                  />
                  <Divider />
                </View>
              </TouchableOpacity>
            ))}
          </List.Section>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    height: 50,
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    paddingVertical: 10,
  },
  listTitle: {
    fontWeight: 'bold',
  },
  listDescription: {
    color: '#888',
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
});
