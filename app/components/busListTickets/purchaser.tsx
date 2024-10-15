import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Purchaser() {

    const [ticketCount, setTicketCount] = useState({});
    const [route, setRoute] = React.useState({ from: 'Lusaka', to: 'Kabwe', date: '8th July 2024' });

    // const handleIncrease = (id: string | number) => {
    //     setTicketCount((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    // };

    // const handleDecrease = (id) => {
    //     setTicketCount((prev) => {
    //       if (prev[id] > 0) {
    //         return { ...prev, [id]: prev[id] - 1 };
    //       }
    //       return prev;
    //     });
    // };

    // const handleBuy = (name, count) => {
    //     if (count > 0) {
    //       alert(`Purchased ${count} tickets for ${name}`);
    //     } else {
    //       alert('Please select at least one ticket.');
    //     }
    //   };

      const changeRoute = () => {
        // Logic to change route (mocked for example)
        setRoute({ from: 'Lusaka', to: 'Kabwe', date: '10th July 2024' });
      };
      
  return (
    <View>
        <View>
            <TouchableOpacity>
                <Text>Buy Now</Text>
            </TouchableOpacity>
        </View>
        <View>

        </View>
    </View>
  )
}
function setTicketCount(arg0: (prev: any) => any) {
    throw new Error('Function not implemented.');
}

