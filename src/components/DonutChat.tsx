import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { Pie, PolarChart } from 'victory-native';
import { formatCurrency } from '../utils/formatCurrency';

export interface DonutItem {
  label: string;
  value: number;
  color: string;
  [key: string]: unknown;
}

interface DonutChartProps {
  data: DonutItem[];
}

function DonutChart({ data }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <View className="mt-7 items-center justify-center">
      <View style={{ height: 220, width: 220 }}>
        <PolarChart data={data} labelKey="label" valueKey="value" colorKey="color">
          <Pie.Chart innerRadius={70} />
        </PolarChart>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 220,
            width: 220,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text className="text-[20px] font-bold text-titleText">{formatCurrency(total)}</Text>
          <Text className="mt-[6px] text-xs font-medium text-grey">Total Spent</Text>
        </View>
      </View>

      <View className="mt-6 w-full gap-[18px]">
        {data.map((item, index) => (
          <View key={index} className="flex-row items-center justify-between gap-2">
            <View className="flex-row items-start gap-4">
              <View className="mt-1 size-4 rounded-full" style={{ backgroundColor: item.color }} />
              <View>
                <Text className="text-sm font-medium text-black">{item.label}</Text>
                <Text className="mt-2 text-sm font-medium text-grey">
                  {((item.value / total) * 100).toFixed(1)}%
                </Text>
              </View>
            </View>
            <View className="flex-row gap-2">
              <Text className="text-sm font-semibold text-titleText">
                {formatCurrency(item.value)}
              </Text>
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="text-grey" />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default DonutChart;
