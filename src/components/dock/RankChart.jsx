import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const color = ["#87CAB9", "#123E7A", "#A493F5", "#FF5B69", "#FFD549"]

export default function RankChart({data, player}){
    return (
        <LineChart
            width={650}
            height={300}
            data={data}
            margin={{
                top: 30, right: 30, left: 0, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            {player.map((name, i) => {
                return (<Line type="monotone" dataKey={name} stroke={color[i]} />)
            })}
        </LineChart>
    );
}