export const kinhNghiemSuDungWise = `
    <div class="wise-article">
    <style>
        .wise-article {
            --wise-blue: #00b9ff;
            --wise-dark-blue: #0052ff;
            --bg-slate: #f8fafc;
            --text-main: #334155;
            --text-heading: #0f172a;
            --white: #ffffff;
            --border-color: #e2e8f0;
            --red-alert: #ef4444;
            --green-success: #22c55e;
            --indigo: #6366f1;

            font-family: 'Inter', sans-serif;
            background-color: var(--bg-slate);
            color: var(--text-main);
            line-height: 1.6;
            padding: 40px 20px;
            counter-reset: step-counter;
        }

        .wise-article .container {
            max-width: 1800px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        /* Header Styles */
        .wise-article header {
            background: transparent;
            padding: 32px 40px 16px 40px;
            color: #1a365d;
            text-align: left;
            border-bottom: 3px solid #3182ce;
            margin-bottom: 32px;
        }

        .wise-article .badge {
            display: none;
        }

        .wise-article h1 {
            font-size: 30px;
            font-weight: 800;
            line-height: 1.3;
            margin: 0;
            text-transform: uppercase;
        }

        .wise-article .header-desc {
            display: none;
        }

        /* Main Content Padding */
        .wise-article .content {
            padding: 60px 40px;
        }

        /* Sections and Headings */
        .wise-article section {
            margin-bottom: 60px;
        }

        .wise-article h2 {
            display: flex;
            align-items: center;
            font-size: 28px;
            color: var(--text-heading);
            margin-bottom: 24px;
            gap: 12px;
        }

        .wise-article h2::before {
            content: "";
            width: 6px;
            height: 32px;
            background: var(--wise-blue);
            border-radius: 4px;
            display: inline-block;
        }

        .wise-article h3 {
            font-size: 20px;
            color: var(--text-heading);
            margin: 24px 0 12px 0;
            font-weight: 700;
        }

        .wise-article p {
            margin-bottom: 20px;
            font-size: 16px;
        }

        /* Comparison Box */
        .wise-article .comparison-wrapper {
            background: #f1f5f9;
            padding: 30px;
            border-radius: 16px;
            margin: 30px 0;
        }

        .wise-article .table-container {
            overflow-x: auto;
        }

        .wise-article table {
            width: 100%;
            border-collapse: collapse;
            background: var(--white);
            border-radius: 12px;
            overflow: hidden;
        }

        .wise-article th,
        .wise-article td {
            padding: 18px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }

        .wise-article th {
            background: #e2e8f0;
            font-weight: 700;
            color: var(--text-heading);
        }

        .wise-article .text-blue { color: var(--wise-blue); font-weight: 700; }
        .wise-article .text-red { color: var(--red-alert); font-weight: 500; }

        /* Feature Cards */
        .wise-article .grid-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin: 30px 0;
        }

        .wise-article .card {
            background: var(--white);
            border: 1px solid var(--border-color);
            padding: 30px;
            border-radius: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .wise-article .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0,0,0,0.08);
            border-color: var(--wise-blue);
        }

        .wise-article .card-icon {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }

        .wise-article .icon-blue { background: #e0f2fe; color: var(--wise-blue); }
        .wise-article .icon-green { background: #dcfce7; color: var(--green-success); }
        .wise-article .icon-indigo { background: #e0e7ff; color: var(--indigo); }

        /* Step-by-Step UI */
        .wise-article .process-list {
            list-style: none;
            position: relative;
        }

        .wise-article .process-item {
            position: relative;
            padding-left: 50px;
            margin-bottom: 30px;
        }

        .wise-article .process-item::before {
            content: counter(step-counter);
            counter-increment: step-counter;
            position: absolute;
            left: 0;
            top: 0;
            width: 36px;
            height: 36px;
            background: var(--wise-blue);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
        }

        /* Alerts & Info */
        .wise-article .alert-box {
            background: #fff1f2;
            border-left: 6px solid var(--red-alert);
            padding: 30px;
            border-radius: 0 16px 16px 0;
            margin: 40px 0;
        }

        .wise-article .alert-box h4 {
            color: #991b1b;
            margin-bottom: 12px;
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .wise-article .info-box {
            background: #f0f9ff;
            border-left: 6px solid var(--wise-blue);
            padding: 30px;
            border-radius: 0 16px 16px 0;
            margin: 40px 0;
        }

        /* Dark Section for Business/Freelancers */
        .wise-article .dark-box {
            background: #0f172a;
            color: #cbd5e1;
            padding: 45px;
            border-radius: 24px;
            margin-top: 40px;
        }

        .wise-article .dark-box h3 { color: white; margin-top: 0; }
        .wise-article .dark-box ul li { margin-bottom: 15px; display: flex; align-items: flex-start; gap: 10px; }
        .wise-article .dark-box ul li::before { content: "✓"; color: var(--green-success); font-weight: bold; }

        /* Footer */
        .wise-article footer {
            text-align: center;
            padding: 60px 40px;
            border-top: 1px solid var(--border-color);
            background: #fafafa;
        }

        .wise-article .cta-btn {
            display: inline-block;
            padding: 16px 40px;
            background: var(--wise-blue);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 700;
            font-size: 18px;
            transition: all 0.3s;
            box-shadow: 0 4px 14px rgba(0, 185, 255, 0.4);
        }

        .wise-article .cta-btn:hover {
            transform: scale(1.05);
            background: var(--wise-dark-blue);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .wise-article h1 { font-size: 34px; }
            .wise-article header { padding: 60px 20px; }
            .wise-article .content { padding: 30px 20px; }
            .wise-article .grid-cards { grid-template-columns: 1fr; }
        }
    </style>
    <article class="container">
        <main class="content">
            <!-- Phần 1: Tổng quan -->
            <section>
                <h2>1. Wise là gì và tại sao lại "Rẻ" đến thế?</h2>
                <p>Wise (trước đây là TransferWise) không phải là một ngân hàng truyền thống, mà là một mạng lưới thanh toán ngang hàng (Peer-to-peer). Thay vì chuyển tiền xuyên biên giới qua hệ thống SWIFT đắt đỏ, Wise sở hữu các tài khoản ngân hàng ở khắp các quốc gia.</p>
                
                <div class="comparison-wrapper">
                    <h3 style="margin-top:0">So sánh chi phí thực tế</h3>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tiêu chí</th>
                                    <th class="text-blue">Dịch vụ Wise</th>
                                    <th>Ngân hàng (SWIFT)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Tỷ giá hối đoái</strong></td>
                                    <td class="text-blue">Tỷ giá thực tế (Google)</td>
                                    <td class="text-red">Tỷ giá niêm yết (Phí ẩn 3-5%)</td>
                                </tr>
                                <tr>
                                    <td><strong>Phí cố định</strong></td>
                                    <td>Rất thấp (Khoảng 0.4% - 1%)</td>
                                    <td>Cao ($20 - $50 mỗi lần)</td>
                                </tr>
                                <tr>
                                    <td><strong>Người nhận nhận được</strong></td>
                                    <td class="text-blue">Nhiều tiền hơn rõ rệt</td>
                                    <td>Bị trừ thêm phí ngân hàng trung gian</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p>Bí quyết của Wise nằm ở <strong>Tỷ giá Mid-market</strong>: Đây là tỷ giá giữa giá mua và giá bán trên thị trường tài chính toàn cầu. Wise là một trong số ít dịch vụ áp dụng tỷ giá này cho khách hàng cá nhân.</p>
            </section>

            <!-- Phần 2: Đăng ký & Xác minh -->
            <section>
                <h2>2. Hướng dẫn Đăng ký & Xác minh (KYC) thành công</h2>
                <p>Nhiều người gặp khó khăn ở bước xác minh danh tính dẫn đến bị khóa tài khoản. Dưới đây là kinh nghiệm thực tế:</p>
                
                <div class="process-list">
                    <div class="process-item">
                        <strong>Chọn loại tài khoản:</strong> Nếu bạn là cá nhân, hãy chọn Personal. Nếu bạn có công ty hoặc hộ kinh doanh, hãy chọn Business để nhận được các hạn mức lớn hơn.
                    </div>
                    <div class="process-item">
                        <strong>Giấy tờ xác minh:</strong> Nên sử dụng <strong>Hộ chiếu (Passport)</strong>. Tại sao? Vì Hộ chiếu có ngôn ngữ tiếng Anh và cấu trúc chuẩn quốc tế, giúp hệ thống tự động của Wise phê duyệt trong vòng 5-10 phút. Nếu dùng CCCD, thời gian chờ có thể lên đến 2-3 ngày.
                    </div>
                    <div class="process-item">
                        <strong>Chụp ảnh Selfie:</strong> Đảm bảo môi trường đủ sáng, không bị lóa và ảnh chụp giấy tờ phải thấy rõ 4 góc.
                    </div>
                </div>
                <div class="info-box">
                    <strong>Mẹo nhỏ:</strong> Hãy nạp thử một số tiền nhỏ (khoảng 20 USD) để kích hoạt các tính năng nhận tiền. Đây là điều kiện bắt buộc để Wise cấp cho bạn các số tài khoản định danh (USD, EUR, GBP...).
                </div>
            </section>

            <!-- Phần 3: Cách gửi tiền -->
            <section>
                <h2>3. Cách gửi tiền tiết kiệm nhất</h2>
                <p>Wise cung cấp nhiều phương thức thanh toán, mỗi loại có mức phí khác nhau:</p>
                
                <div class="grid-cards">
                    <div class="card">
                        <div class="card-icon icon-blue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </div>
                        <h4>Chuyển khoản Ngân hàng</h4>
                        <p>Bạn chuyển tiền từ app ngân hàng của mình tới Wise. Đây là cách <strong>Rẻ nhất</strong>. Thời gian xử lý: 0-24h.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon icon-green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        </div>
                        <h4>Thẻ Debit/Credit</h4>
                        <p>Tiền đi ngay lập tức nhưng phí cao hơn (thường thêm 1-2% phí xử lý thẻ). Chỉ nên dùng khi khẩn cấp.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon icon-indigo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h4>Apple/Google Pay</h4>
                        <p>Tiện lợi, nhanh chóng, phí tương đương với thẻ Debit nhưng bảo mật cao hơn.</p>
                    </div>
                </div>
            </section>

            <!-- Phần 4: Tài khoản đa tiền tệ -->
            <section>
                <h2>4. "Vũ khí" Tài khoản đa tiền tệ</h2>
                <p>Đây là lý do chính khiến Wise đánh bại các đối thủ như PayPal. Bạn có thể mở số tài khoản (Bank Details) của hơn 10 quốc gia khác nhau.</p>
                
                <div class="dark-box">
                    <h3>Dành cho Freelancer & Doanh nghiệp:</h3>
                    <ul style="padding-left: 0;">
                        <li>Cấp số tài khoản Mỹ (Routing & Account number) để nhận lương từ Upwork, Fiverr hoặc khách hàng Mỹ 0đ phí.</li>
                        <li>Cấp mã IBAN của Châu Âu giúp nhận tiền EUR cực nhanh.</li>
                        <li>Chuyển đổi tiền tệ tức thì giữa các ví với phí thấp hơn 0.5%.</li>
                        <li>Thẻ Wise Debit: Chi tiêu ngoại tệ trực tiếp từ số dư ví, không bị tính phí chuyển đổi ngoại tệ 3-4% như thẻ ngân hàng VN.</li>
                    </ul>
                </div>
            </section>

            <!-- Phần 5: Lưu ý về giao dịch lớn & Bảo mật -->
            <section>
                <h2>5. Kinh nghiệm xử lý giao dịch lớn (> $10,000)</h2>
                <p>Khi bạn chuyển số tiền lớn, Wise bắt buộc phải tuân thủ luật chống rửa tiền. Để giao dịch không bị treo, hãy lưu ý:</p>
                <div class="alert-box">
                    <h4>⚠️ Quy tắc vàng khi chuyển tiền lớn</h4>
                    <p><strong>1. Chuẩn bị giấy tờ:</strong> Hãy sẵn sàng bản PDF Hợp đồng lao động, Hóa đơn bán hàng hoặc sao kê lương. Wise sẽ gửi email yêu cầu bạn upload chúng.</p>
                    <p><strong>2. Nguồn gốc dòng tiền:</strong> Nếu là tiền tiết kiệm, hãy chuẩn bị sao kê tài khoản ngân hàng thể hiện sự tích lũy qua thời gian.</p>
                    <p><strong>3. Đừng vội vàng:</strong> Với số tiền lớn, thời gian kiểm duyệt có thể mất 1-3 ngày làm việc. Đừng quá lo lắng nếu thấy trạng thái "Under review".</p>
                </div>
                
                <h3>Bảo mật tài khoản</h3>
                <p>Luôn sử dụng ứng dụng xác thực (Google Authenticator) thay vì SMS. Wise cho phép bạn quản lý thiết bị đang đăng nhập, hãy kiểm tra thường xuyên và đăng xuất các thiết bị lạ.</p>
            </section>

            <!-- Phần FAQ -->
            <section>
                <h2>6. Câu hỏi thường gặp (FAQs)</h2>
                <div style="border-top: 1px solid var(--border-color);">
                    <div style="padding: 20px 0; border-bottom: 1px solid var(--border-color);">
                        <strong>Q: Wise có an toàn không?</strong>
                        <p style="margin-top:10px; font-size: 14px; color: #64748b;">A: Cực kỳ an toàn. Wise được cấp phép bởi FCA (Anh), FinCEN (Mỹ) và nhiều tổ chức tài chính hàng đầu thế giới.</p>
                    </div>
                    <div style="padding: 20px 0; border-bottom: 1px solid var(--border-color);">
                        <strong>Q: Người nhận ở Việt Nam có cần tài khoản Wise không?</strong>
                        <p style="margin-top:10px; font-size: 14px; color: #64748b;">A: Không cần. Bạn có thể chuyển thẳng vào số tài khoản ngân hàng bất kỳ tại Việt Nam. Người nhận nhận được VNĐ chỉ sau vài phút.</p>
                    </div>
                    <div style="padding: 20px 0; border-bottom: 1px solid var(--border-color);">
                        <strong>Q: Tôi có thể nhận thẻ Wise vật lý tại Việt Nam không?</strong>
                        <p style="margin-top:10px; font-size: 14px; color: #64748b;">A: Hiện tại Wise chưa hỗ trợ gửi thẻ vật lý trực tiếp về Việt Nam. Tuy nhiên, bạn có thể dùng địa chỉ người thân ở nước ngoài để nhận thẻ và kích hoạt thẻ ảo để dùng trên Apple Pay.</p>
                    </div>
                </div>
            </section>
        </main>
    </article>
</div>
`;

