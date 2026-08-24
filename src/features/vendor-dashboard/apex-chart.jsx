import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function ApexChart({ options, type, height, id }) {
  const elRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return undefined;
    const opts = {
      ...options,
      series: options.series,
      chart: {
        ...(options.chart || {}),
        type: type || options.chart?.type || 'line',
        height: height || options.chart?.height || 315,
        ...(id ? { id } : {}),
      },
    };
    const chart = new ApexCharts(elRef.current, opts);
    chart.render();
    chartRef.current = chart;
    return () => {
      chart.destroy();
      chartRef.current = null;
    };
  }, []);

  return <div ref={elRef} />;
}
