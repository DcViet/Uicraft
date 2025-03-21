// Định nghĩa danh mục dịch vụ
export interface CourierCategory {
    id: string;
    name: string;
}

// Định nghĩa dịch vụ chuyển phát nhanh
export interface CourierService {
    id: string;
    name: string;
    image: { uri: string };
    categoryId: string;
    span?: number;
}

// Định nghĩa truy cập nhanh
export interface QuickAccess {
    id: string;
    name: string;
    image: { uri: string };
    categoryId: string;
    span: number;
    isViewMore?: boolean;
}

// Danh mục dịch vụ
export const courierCategories: CourierCategory[] = [
    { id: '1', name: 'Lịch sử vận chuyển' },
    { id: '2', name: 'Lịch sử trò chuyện' },
    { id: '3', name: 'Tổng đài - khiếu nại' },
];

// Danh sách dịch vụ
export const courierServices: CourierService[] = [
    { id: '1', name: 'Tìm bưu cục', image: { uri: 'https://img.icons8.com/3d-fluency/94/post-office.png' }, categoryId: '1', span: 1 },
    { id: '2', name: 'Tạo vận đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/shipping-box.png' }, categoryId: '1', span: 1 },
    { id: '3', name: 'Tính phí vận chuyển', image: { uri: 'https://img.icons8.com/3d-fluency/94/cash.png' }, categoryId: '1', span: 1 },
    { id: '4', name: 'Tra cứu đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/search.png' }, categoryId: '3', span: 2 },
];

// Danh sách truy cập nhanh
export const quickAccess: QuickAccess[] = [
    { id: '1', name: 'Tìm bưu cục', image: { uri: 'https://img.icons8.com/3d-fluency/94/point-objects.png' }, categoryId: '1', span: 1 },
    { id: '2', name: 'Tạo vận đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/receipt.png' }, categoryId: '1', span: 1 },
    { id: '3', name: 'Tính phí vận chuyển', image: { uri: 'https://img.icons8.com/3d-fluency/94/map-marker.png' }, categoryId: '1', span: 1 },
    { id: '4', name: 'Tra cứu đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/search.png' }, categoryId: '2', span: 1 },
    { id: 'view-more', name: 'Xem thêm', image: { uri: '' }, categoryId: '', span: 1, isViewMore: true },
];


// Định nghĩa danh mục món ăn
export interface FoodCategory {
    id: string;
    name: string;
}

// Định nghĩa món ăn
export interface FoodItem {
    id: string;
    name: string;
    image: { uri: string };
    categoryId: string;
    span?: number;
}

// Định nghĩa món ăn phổ biến gần đây
export interface PopularFoodItem {
    id: string;
    name: string;
    image: { uri: string };
    categoryId: string;
    span: number;
    isViewMore?: boolean;
}

// Danh mục món ăn
export const foodCategories: FoodCategory[] = [
    { id: '1', name: 'Món theo vùng miền' },
    { id: '2', name: 'Món theo nguyên liệu chính' },
    { id: '3', name: 'Món theo cách chế biến' },
    { id: '4', name: 'Món theo dịp ăn' },
    { id: '5', name: 'Món theo hành vi ăn uống' },
];

// Danh sách món ăn
export const foodItems: FoodItem[] = [
    { id: '1', name: 'Miền Bắc', image: { uri: 'https://img.icons8.com/3d-fluency/94/rice-bowl.png' }, categoryId: '1', span: 1 },
    { id: '2', name: 'Miền Trung', image: { uri: 'https://img.icons8.com/3d-fluency/94/spring-roll.png' }, categoryId: '1', span: 1 },
    { id: '3', name: 'Miền Nam', image: { uri: 'https://img.icons8.com/3d-fluency/94/pho.png' }, categoryId: '1', span: 1 },

    { id: '4', name: 'Hải sản', image: { uri: 'https://img.icons8.com/3d-fluency/94/fish.png' }, categoryId: '2', span: 1 },
    { id: '5', name: 'Thịt', image: { uri: 'https://img.icons8.com/3d-fluency/94/steak.png' }, categoryId: '2', span: 1 },

    { id: '6', name: 'Món nước', image: { uri: 'https://img.icons8.com/3d-fluency/94/soup.png' }, categoryId: '3', span: 1 },
    { id: '7', name: 'Món chiên', image: { uri: 'https://img.icons8.com/3d-fluency/94/fried-chicken.png' }, categoryId: '3', span: 1 },
];

// Danh sách món ăn phổ biến gần đây
export const popularFoods: PopularFoodItem[] = [
    { id: '1', name: 'Bánh Mì Peopeo', image: { uri: 'https://luxuo.vn/wp-content/uploads/2024/03/banhmivietnam.jpeg' }, categoryId: '1', span: 1 },
    { id: '2', name: 'Tiệm Peopeo', image: { uri: 'https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-6.JPG' }, categoryId: '1', span: 1 },
    { id: '3', name: 'Quán Nhậu AZ', image: { uri: 'https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-3.JPG' }, categoryId: '1', span: 1 },
    { id: '4', name: 'Bistro 47', image: { uri: 'https://mediawinwin.vn/cosy/admin/upload/images/dich-vu-chup-anh-san-pham-chuyen-nghiep-tai-ha-noi-02.JPG' }, categoryId: '2', span: 1 },
    { id: 'view-more', name: 'Xem thêm', image: { uri: '' }, categoryId: '', span: 1, isViewMore: true },
];


// Interface cho lịch sử vận chuyển (CourierHistory)
export interface CourierHistory {
    id: string;
    categoryId: string;
    title: string;
    sendDate: string; // Ngày gửi (định dạng chuỗi, ví dụ: 'YYYY-MM-DD')
    deliveryDate: string | null; // Ngày giao, có thể null nếu chưa giao hoặc không áp dụng
    description: string;
    image: { uri: string }; // Kiểu object với thuộc tính uri
}

// Dữ liệu lịch sử
export const courierHistory: CourierHistory[] = [
    // Dữ liệu cho category "Lịch sử vận chuyển" (id: '1')
    {
        id: 'h1',
        categoryId: '1',
        title: 'Gói hàng #12345 đã giao thành công',
        sendDate: '2025-03-18',
        deliveryDate: '2025-03-20',
        description: '',
        image: { uri: 'https://example.com/images/package12345.jpg' },
    },
    {
        id: 'h2',
        categoryId: '1',
        title: 'Gói hàng #12346 đang vận chuyển',
        sendDate: '2025-03-19',
        deliveryDate: null,
        description: '',
        image: { uri: 'https://example.com/images/package12346.jpg' },
    },

    // Dữ liệu cho category "Lịch sử trò chuyện" (id: '2')
    {
        id: 'h3',
        categoryId: '1',
        title: 'Trò chuyện với nhân viên A',
        sendDate: '2025-03-19',
        deliveryDate: null,
        description: 'Hỏi về tình trạng đơn hàng #12345, đã được giải đáp.',
        image: { uri: 'https://example.com/images/chat1.png' },
    },
    {
        id: 'h4',
        categoryId: '1',
        title: 'Trò chuyện với tổng đài',
        sendDate: '2025-03-20',
        deliveryDate: null,
        description: 'Yêu cầu đổi địa chỉ giao hàng cho đơn #12346.',
        image: { uri: 'https://example.com/images/chat2.png' },
    },

    // Dữ liệu cho category "Tổng đài - khiếu nại" (id: '3')
    {
        id: 'h5',
        categoryId: '1',
        title: 'Khiếu nại trễ giao hàng',
        sendDate: '2025-03-18',
        deliveryDate: null,
        description: 'Đơn hàng #12347 giao trễ 2 ngày, đã gửi yêu cầu xử lý.',
        image: { uri: 'https://example.com/images/complaint1.jpg' },
    },
    {
        id: 'h6',
        categoryId: '1',
        title: 'Phản hồi khiếu nại #12347',
        sendDate: '2025-03-21',
        deliveryDate: null,
        description: 'Tổng đài xác nhận hoàn tiền 50% cho đơn hàng trễ.',
        image: { uri: 'https://example.com/images/response1.jpg' },
    },
];