import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { usePage } from '@inertiajs/react';
const chartData = [
    { date: 'January', total: 186 },
    { date: 'February', total: 305 },
    { date: 'March', total: 237 },
    { date: 'April', total: 73 },
    { date: 'May', total: 209 },
    { date: 'June', total: 214 },
];

const chartConfig = {
    total: {
        label: 'total',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
    const { post_daily_views_data, featureDatas } = usePage().props;
    const formattedData = (post_daily_views_data || []).map((item) => ({
        date: item.date,
        total: Number(item.total),
    }));
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Post views count</CardTitle>
                    <CardDescription>Showing total visitors for the last 30 dates</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer className='h-[220px] w-full' config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={formattedData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value} />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                            <Area dataKey="total" type="natural" fill="var(--color-total)" fillOpacity={0.4} stroke="var(--color-total)" />
                        </AreaChart>
                    </ChartContainer>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">Total Views up to date : {featureDatas?.totalPostViews} views</div>
                    </CardFooter>
                </CardContent>
            </Card>
        </>
    );
}
