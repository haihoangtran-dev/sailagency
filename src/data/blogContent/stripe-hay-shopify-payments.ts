export const soSanhStripeVaShopifyPayments = `
<div class="comparison-container">
    <h1>Phân tích & So sánh: Stripe vs. Shopify Payments</h1>

    <h2>1. Tổng quan</h2>
    <ul>
        <li><strong>Stripe:</strong> Thành lập năm 2010, là một cổng thanh toán độc lập mạnh mẽ, linh hoạt, phù hợp cho mọi quy mô doanh nghiệp và yêu cầu tùy biến cao (API-first).</li>
        <li><strong>Shopify Payments:</strong> Là giải pháp thanh toán "của nhà trồng được", xây dựng dựa trên cơ sở hạ tầng của Stripe nhưng được tối ưu hóa riêng cho hệ sinh thái Shopify.</li>
    </ul>

    <h2>2. Điểm tương đồng</h2>
    <p>Cả hai đều chia sẻ chung một nền tảng công nghệ lõi:</p>
    <ul>
        <li><strong>Bảo mật:</strong> Đều sử dụng hệ thống chống gian lận <strong>Stripe Radar</strong> và tuân thủ tiêu chuẩn <strong>PCI DSS cấp 1</strong>.</li>
        <li><strong>Hỗ trợ thẻ:</strong> Chấp nhận hầu hết các loại thẻ quốc tế (Visa, Mastercard, Amex, Discover).</li>
        <li><strong>Quy trình KYC:</strong> Đều yêu cầu xác minh danh tính người bán chặt chẽ trước khi kích hoạt.</li>
    </ul>

    <h2>3. So sánh chi tiết các khía cạnh quan trọng</h2>
    <table border="1" style="width:100%; border-collapse: collapse; margin-top: 20px; font-family: sans-serif;">
        <thead>
            <tr style="background-color: #f8f9fa;">
                <th style="padding: 12px; text-align: left;">Khía cạnh</th>
                <th style="padding: 12px; text-align: left;">Stripe</th>
                <th style="padding: 12px; text-align: left;">Shopify Payments</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><strong>Phí giao dịch (Mặc định)</strong></td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">2.9% + 30¢</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Tùy gói (2.4% - 2.9%) + 30¢</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><strong>Phí giao dịch bổ sung</strong></td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Phải trả thêm phí cho Shopify (0.5% - 2%)</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><span style="color: #28a745; font-weight: bold;">Miễn phí</span></td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><strong>Chuyển đổi tiền tệ</strong></td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Hỗ trợ 135+ loại tiền tệ</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Hạn chế hơn theo quốc gia</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><strong>Thiết lập</strong></td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Cần kỹ năng kỹ thuật để tối ưu</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Tích hợp sẵn, kích hoạt nhanh</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><strong>Quản trị</strong></td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Dashboard Stripe riêng biệt</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">Quản lý trực tiếp trong admin Shopify</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;"><strong>Payout (Rút tiền)</strong></td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">2 - 7 ngày</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">2 - 3 ngày</td>
            </tr>
        </tbody>
    </table>

    <h2>4. Ưu và nhược điểm</h2>
    <h3>Stripe (Dành cho sự linh hoạt)</h3>
    <ul>
        <li><strong>Ưu điểm:</strong> Tùy biến cao qua API, hỗ trợ thanh toán quốc tế và tiền điện tử tốt. Phù hợp bán hàng đa nền tảng.</li>
        <li><strong>Nhược điểm:</strong> Phí giao dịch quốc tế cao. Cần đội ngũ kỹ thuật để tùy chỉnh sâu.</li>
    </ul>

    <h3>Shopify Payments (Dành cho sự tiện lợi)</h3>
    <ul>
        <li><strong>Ưu điểm:</strong> Tiết kiệm chi phí (không phí bổ sung). Quản lý dòng tiền dễ dàng, tập trung.</li>
        <li><strong>Nhược điểm:</strong> Giới hạn quốc gia hỗ trợ. Rủi ro bị khóa cổng ảnh hưởng đến toàn bộ cửa hàng.</li>
    </ul>

    <img src="https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Thành công thương mại điện tử" style="width:100%; border-radius: 8px; margin: 20px 0;" />

    <h2>5. Lời khuyên từ chuyên gia</h2>
    <ol>
        <li><strong>Chọn Shopify Payments nếu:</strong> Bạn ở quốc gia được hỗ trợ và muốn tối đa hóa lợi nhuận bằng cách cắt giảm các khoản phí ẩn.</li>
        <li><strong>Chọn Stripe nếu:</strong> Bạn cần giải pháp toàn cầu, nhiều phương thức thanh toán địa phương hoặc vận hành hệ thống Hybrid.</li>
    </ol>
</div>
`;