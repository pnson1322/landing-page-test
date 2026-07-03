export type LandingFeature = {
  title: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ChatMessageRole = "assistant" | "user";

export type ChatMessage = {
  content: string;
  id: string;
  role: ChatMessageRole;
};

export type ProductDetail = {
  title: string;
  description: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

export type GalleryModalState = {
  isVisible: boolean;
  isClosing: boolean;
};

export type ProductGalleryItem = {
  image: ProductImage;
  isActive: boolean;
  onSelect: () => void;
};
