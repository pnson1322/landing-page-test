export const trackedSignals = ["PM2.5", "CO2", "VOC", "Nhiệt độ", "Độ ẩm"];

export const productMetrics = [
  { value: "7", label: "tín hiệu môi trường", icon: "signals" },
  { value: "24/7", label: "theo dõi liên tục", icon: "monitoring" },
  { value: "<4W", label: "tiêu thụ điện", icon: "power" },
] as const;
