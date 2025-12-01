import AvatarWithProgress from "../ui/AvatarWithProgress";
import { CURRENT_USER, STATISTIC_DATA } from "../../data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { colors } from "../../theme/colors";

export default function StatisticCard() {
    const primaryColor = colors.primary;
    const lightColor = colors.secondary;
    const lastValue = STATISTIC_DATA.chartData[STATISTIC_DATA.chartData.length - 1].value;
    const percentage = (lastValue / 100) * 100;

    return (
        <div className="bg-white  mt-5 rounded-xl lg:rounded-2xl border border-transparent">
            <div className="flex flex-col text-center items-center gap-4 lg:gap-2 mb-4 lg:mb-6">
                <AvatarWithProgress
                    src={CURRENT_USER.avatar}
                    alt={CURRENT_USER.name}
                    percentage={percentage}
                    size="xl"
                />
                <div>
                    <h3 className="font-medium mt-2 text-base lg:text-xl">{STATISTIC_DATA.greeting} 🔥</h3>
                    <p className="text-xs text-gray-500 ">{STATISTIC_DATA.subtitle}</p>
                </div>
            </div>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={190} className="bg-gray-50  rounded-2xl mt-7 lg:rounded-3xl">
                <BarChart
                    data={STATISTIC_DATA.chartData}
                    margin={{ top: 30, right: 30, left: 0, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[20, 60]} ticks={[20, 40, 60]} tick={{ fontSize: 12, fontWeight: 800}} axisLine={false} tickLine={false} />
                    <Bar dataKey="value" radius={8}>
                        {STATISTIC_DATA.chartData.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index % 2 === 0 ? lightColor : primaryColor}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}