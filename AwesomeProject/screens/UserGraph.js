import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const userData = [
    { label: 'Gebruiker 1', percentage: 80 },
    { label: 'Gebruiker 2', percentage: 60 },
    { label: 'Gebruiker 3', percentage: 90 },
    { label: 'Gebruiker 4', percentage: 75 },
    { label: 'Gebruiker 5', percentage: 45 },
];

const UserChartComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BarChart
                data={{
                    labels: userData.map(item => item.label),
                    datasets: [
                        {
                            data: userData.map(item => item.percentage),
                        },
                    ],
                }}
                width={350}
                height={220}
                yAxisSuffix="%"
                chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    barPercentage: 0.7,
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

export default UserChartComponent;

// Importeer het bestand waar het gerenderd moet worden
// import UserChartComponent from './path-to-UserChartComponent';

// In je render-methode of functionele component:
// <UserChartComponent />
