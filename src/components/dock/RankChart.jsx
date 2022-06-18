import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        time: '10시', a: 4000, b: 2400, c: 2400,
    },
    {
        time: '11시', a: 3000, b: 1398, c: 2210,
    },
    {
        time: '12시', a: 2000, b: 9800, c: 2290,
    },
    {
        time: '13시', a: 2780, b: 3908, c: 2000,
    },
    {
        time: '14시', a: 1890, b: 4800, c: 2181,
    },
    {
        time: '15시', a: 2390, b: 3800, c: 2500,
    },
    {
        time: '16시', a: 3490, b: 4300, c: 2100,
    },
];

export default function RankChart(){
    return (
        <LineChart
            width={650}
            height={300}
            data={data}
            margin={{
                top: 30, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="a" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="b" stroke="#82ca9d" />
            <Line type="monotone" dataKey="c" stroke="#82ca9d" />
        </LineChart>
    );
}