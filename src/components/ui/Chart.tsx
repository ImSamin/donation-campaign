"use client";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ data }: any) => {
  const { raisedAmount, targetAmount } = data;

  const remainingAmount = targetAmount - raisedAmount;

  const raisedPercentage = (raisedAmount / targetAmount) * 100;

  const chartData = [
    { name: "Raised Amount", value: raisedPercentage },
    { name: "Remaining Amount", value: 100 - raisedPercentage },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
          }: any) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                style={{ fontWeight: "bold", fontSize: "32px" }} // Adjust font weight and size
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          align="center"
          iconSize={10}
          iconType="circle"
          layout="horizontal"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
