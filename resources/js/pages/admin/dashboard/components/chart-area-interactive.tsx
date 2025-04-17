import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { usePage } from '@inertiajs/react';
// const post_daily_views_data = [
//   { date: "January", total: 186 },
//   { date: "February", total: 305 },
//   { date: "March", total: 237 },
//   { date: "April", total: 73 },
//   { date: "May", total: 209 },
//   { date: "June", total: 214 },
// ]

const chartConfig = {
    total: {
        label: 'total',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
    const { post_daily_views_data } = usePage().props;
    return (
        <Card>
            <CardHeader>
                <CardTitle>Posts Daily View Count</CardTitle>
                <CardDescription>Showing total post's visitors for the last 30 dates</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={post_daily_views_data}
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
            </CardContent>
            <CardFooter>
                {/* <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Post Views Count Daily <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground flex items-center gap-2 leading-none">January - June 2024</div>
                    </div>
                </div> */}
            </CardFooter>
        </Card>
    );
}
