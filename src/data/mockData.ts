import bagasAvatar from '../assets/memojis/memoji.png';
import dandyAvatar from '../assets/memojis/memoji2.png';
import jhonAvatar from '../assets/memojis/memoji3.png';
import jasonAvatar from '../assets/memojis/memoji4.png';

export const FRIENDS = [
    {
        id: 1,
        name: "Bagas Mahpie",
        status: "Friend",
        avatar: bagasAvatar
    },
    {
        id: 2,
        name: "Sir Dandy",
        status: "Old Friend",
        avatar: dandyAvatar
    },
    {
        id: 3,
        name: "Jhon Tosan",
        status: "Friend",
        avatar: jhonAvatar
    }
];

export const CURRENT_USER = {
    id:1,
    name: "Jason Ranti",
    avatar: jasonAvatar,
    email: "jason@example.com"

}

export const STATISTIC_DATA = {
    greeting: "Good Morning Jason",
    subtitle: "Continue your learning to achieve your target",
    chartData: [
        { day: "9 Aug", value: 35 },
        { day: "11 Aug", value: 45 },
        { day: "31 Aug", value: 35 },
        { day: "8 Sep", value: 60 },
        { day: "10 Sep", value: 35 }
    ]
};
