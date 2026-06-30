import type {
  LandingFeature,
  ProductDetail,
  ProductImage,
  ProductSpec,
} from "@/types/landing";

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

export const productDetails: ProductDetail[] = [
  {
    title: "Bảy lớp dữ liệu môi trường",
    description:
      "AuraHub kết hợp dữ liệu CO2, PM2.5, VOC, nhiệt độ, độ ẩm, ánh sáng và tiếng ồn để đưa ra một bức tranh đầy đủ hơn về căn phòng.",
  },
  {
    title: "Tín hiệu tại chỗ, không cần mở app",
    description:
      "Vòng sáng teal chuyển trạng thái theo chất lượng không khí, giúp bạn nhận biết lúc nào nên mở cửa, bật lọc khí hoặc giảm tiếng ồn.",
  },
  {
    title: "Ngữ cảnh cho giấc ngủ",
    description:
      "Thiết bị ghi nhận môi trường trước và trong lúc ngủ, sau đó gom thành lịch sử theo đêm để bạn thấy nguyên nhân phòng quá nóng, bí hoặc ồn.",
  },
  {
    title: "Thiết kế để đặt ở mọi phòng",
    description:
      "Thân máy nhỏ, vỏ nhựa tái chế mờ và lưới nhôm anodized giúp AuraHub hòa vào bàn làm việc, phòng ngủ hoặc kệ đầu giường.",
  },
];

export const productImages: ProductImage[] = [
  {
    src: "/aurahub-angle.webp",
    alt: "AuraHub nhìn từ góc nghiêng trong studio",
    title: "Góc nghiêng sản phẩm",
    description:
      "Thân trụ nhỏ gọn, lưới cảm biến bao quanh và vòng sáng trạng thái ở cạnh đáy.",
    width: 1200,
    height: 799,
  },
  {
    src: "/aurahub-detail.webp",
    alt: "Cận cảnh lưới cảm biến và vòng sáng AuraHub",
    title: "Chi tiết cảm biến",
    description:
      "Cụm lỗ thoáng giúp luồng khí đi qua đều hơn, đồng thời giữ vẻ ngoài tối giản.",
    width: 1400,
    height: 720,
  },
  {
    src: "/aurahub-app.webp",
    alt: "AuraHub đặt cạnh điện thoại hiển thị dashboard sức khỏe môi trường",
    title: "Ứng dụng đồng bộ",
    description:
      "Dashboard gom chất lượng không khí, nhịp ngủ và xu hướng theo ngày trong một giao diện dễ đọc.",
    width: 1400,
    height: 715,
  },
];
