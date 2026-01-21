import { BlogPost } from '../types';
import { 
  quyTrinhThanhLapLLCTaiHoaKy,
  huongDanDangKyLLCTaiDelaware,
  llcLuaChonLyTuongChoKinhDoanhOnlineTaiMy
} from './blogContent';

export const blogPosts: BlogPost[] = [
        {
    id: 3,
    title: 'LLC: Lựa Chọn Lý Tưởng Cho Kinh Doanh Online Tại Mỹ',
    slug: 'lc-lua-chon-ly-tuong-cho-kinh-doanh-online-tai-my',
    excerpt:
      'Khi bạn bắt đầu một doanh nghiệp tại Mỹ, việc chọn đúng loại hình doanh nghiệp Mỹ là yếu tố quan trọng để đảm bảo sự thành công lâu dài.',
    content: llcLuaChonLyTuongChoKinhDoanhOnlineTaiMy,
    author: 'Sail Agency',
    publishDate: '2025-04-12',
    category: 'LLC tại Mỹ',
    tags: ['LLC', 'Đăng ký doanh nghiệp'],
    readTime: '15 phút đọc',
    image:
      'https://images.pexels.com/photos/1550342/pexels-photo-1550342.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
      {
    id: 1,
    title: 'Quy trình thành lập LLC tại Hoa Kỳ: Hướng dẫn chi tiết cho doanh nghiệp quốc tế',
    slug: 'huong-dan-dang-ky-llc-tai-hoa-ky',
    excerpt:
      'Hoa Kỳ là một trong những thị trường hấp dẫn nhất để thành lập doanh nghiệp, đặc biệt đối với các doanh nghiệp nước ngoài muốn tiếp cận thị trường quốc tế.',
    content: quyTrinhThanhLapLLCTaiHoaKy,
    author: 'Sail Agency',
    publishDate: '2025-02-10',
    category: 'LLC tại Mỹ',
    tags: ['LLC', 'Đăng ký doanh nghiệp'],
    readTime: '15 phút đọc',
    image:
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Hướng dẫn đăng ký LLC tại Delaware: Lợi ích và quy trình chi tiết',
    slug: 'huong-dan-dang-ky-llc-tai-delaware',
    excerpt:
      'Delaware là một trong những bang được ưa chuộng nhất để thành lập LLC tại Hoa Kỳ nhờ vào hệ thống pháp luật doanh nghiệp thuận lợi.',
    content: huongDanDangKyLLCTaiDelaware,
    author: 'Sail Agency',
    publishDate: '2024-10-15',
    category: 'LLC tại Mỹ',
    tags: ['Delaware', 'LLC', 'Đăng ký doanh nghiệp'],
    readTime: '8 phút đọc',
    image:
      'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
];

export const categories: string[] = [
  'Tất cả',
  'LLC tại Mỹ',
  'Thuế cho LLC',
  'Kinh nghiệm kinh doanh',
];

export const tags: string[] = [
  'LLC',
  'Delaware',
  'Wyoming',
  'Nevada',
  'Thuế',
  'EIN',
  'Operating Agreement',
  'Registered Agent',
  'IRS',
  'Tax Planning',
  'Business Management',
  'Legal Documents',
  'LLC Compliance',
  'Business Services',
  'LLC Setup',
  'Đăng ký doanh nghiệp',
];