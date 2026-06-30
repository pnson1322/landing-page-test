import type { LandingFeature, ProductSpec } from "@/types/landing";

export const features: LandingFeature[] = [
  {
    title: "Đo không khí liên tục",
    description:
      "Theo dõi CO2, bụi mịn PM2.5, VOC, nhiệt độ và độ ẩm để bạn biết căn phòng đang thay đổi ra sao.",
  },
  {
    title: "Gợi ý nhịp ngủ",
    description:
      "Tổng hợp ánh sáng, tiếng ồn và chất lượng không khí để đưa ra lịch nghỉ ngơi phù hợp hơn.",
  },
  {
    title: "Cảnh báo rõ ràng",
    description:
      "Vòng sáng đổi màu theo trạng thái môi trường, dễ hiểu ngay cả khi không mở điện thoại.",
  },
  {
    title: "Đồng bộ ứng dụng",
    description:
      "Lưu lịch sử, xem xu hướng theo ngày và xuất dữ liệu cho hệ sinh thái nhà thông minh.",
  },
];

export const specs: ProductSpec[] = [
  {
    label: "Cảm biến",
    value: "CO2, PM2.5, VOC, nhiệt độ, độ ẩm, ánh sáng, tiếng ồn",
  },
  {
    label: "Kết nối",
    value: "Wi-Fi 2.4 GHz, Bluetooth Low Energy",
  },
  {
    label: "Nguồn điện",
    value: "USB-C 5V, tiêu thụ dưới 4W",
  },
  {
    label: "Kích thước",
    value: "104 x 104 x 92 mm",
  },
  {
    label: "Chất liệu",
    value: "Nhựa tái chế mờ, lưới nhôm anodized",
  },
  {
    label: "Tương thích",
    value: "iOS, Android, Google Home, Apple Home",
  },
];
