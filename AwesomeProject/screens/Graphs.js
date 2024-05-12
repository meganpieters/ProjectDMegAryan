import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const testData = [
    { label: 'Laadpaal 1', percentage: 80 },
    { label: 'Laadpaal 2', percentage: 60 },
    { label: 'Laadpaal 3', percentage: 90 },
    { label: 'Laadpaal 4', percentage: 75 },
    { label: 'Laadpaal 5', percentage: 45 },
];

const ChartComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BarChart
                data={{
                    labels: testData.map(item => item.label),
                    datasets: [
                        {
                            data: testData.map(item => item.percentage),
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

export default ChartComponent;

// importeer bestand waar het gerenderd moet worden 
// import ChartComponent from './path-to-ChartComponent';

// // In your render method or functional component:
// <ChartComponent />
