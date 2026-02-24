import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost as BlogPostType } from '../types';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);

    if (!slug) {
      setLoading(false);
      return;
    }

    // Simulate loading delay to prevent flash
    const timer = setTimeout(() => {
      // Find the post by slug
      const foundPost = blogPosts.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);

        // Find related posts (same category, excluding current post)
        const related = blogPosts
          .filter(
            (p) => p.category === foundPost.category && p.id !== foundPost.id
          )
          .slice(0, 3);
        setRelatedPosts(related);

        // Update page title and meta description for SEO
        document.title = `${foundPost.title} | Sail Agency Blog`;

        // Update meta description
        const metaDescription = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescription) {
          metaDescription.setAttribute('content', foundPost.excerpt);
        }
      }
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  // If loading, show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20 lg:pt-24">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  // If no post found, show 404
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20 lg:pt-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Bài viết không tìm thấy
          </h2>
          <p className="text-gray-600 mb-8">
            Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/blog')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Về trang Blog
            </button>
            <button
              onClick={() => navigate('/')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = (platform: string): void => {
    if (!post) return;

    const url = window.location.href;
    const title = post.title;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleRelatedPostClick = (relatedSlug: string): void => {
    navigate(`/blog/${relatedSlug}`);
  };

  // Simple content rendering function
  const renderContent = (content: string) => {
    // First, handle HTML content if it exists
    if (content.includes('<h1>') || content.includes('<h2>') || content.includes('<p>') || content.includes('<strong>')) {
      // Content already contains HTML tags, render directly
      return (
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
    
    // Otherwise, process markdown-style content
    const sections = content.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, index) => {
      const trimmed = section.trim();
      
      // Handle images ![alt](url)
      if (trimmed.startsWith('![') && trimmed.includes('](')) {
        const imageMatch = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          const [, alt, src] = imageMatch;
          return (
            <div key={index} className="my-8">
              <img
                src={src}
                alt={alt}
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                loading="lazy"
              />
              {alt && (
                <p className="text-sm text-gray-500 text-center mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          );
        }
      }
      
      // Handle main headings (##)
      if (trimmed.startsWith('## ')) {
        const headingText = trimmed.replace('## ', '');
        return (
          <h2 key={index} className="text-2xl font-bold text-blue-900 mt-12 mb-6 first:mt-0">
            {headingText}
          </h2>
        );
      }
      
      // Handle sub headings (###)
      if (trimmed.startsWith('### ')) {
        const headingText = trimmed.replace('### ', '');
        return (
          <h3 key={index} className="text-xl font-semibold text-blue-900 mt-8 mb-4">
            {headingText}
          </h3>
        );
      }

      // Handle 5-level headings (#####)
      if (trimmed.startsWith('##### ')) {
        const headingText = trimmed.replace('##### ', '');
        return (
          <h5 key={index} className="text-base font-semibold text-blue-900 mt-4 mb-2">
            {headingText}
          </h5>
        );
      }
      
      // Handle sub-sub headings (####)
      if (trimmed.startsWith('#### ')) {
        const headingText = trimmed.replace('#### ', '');
        return (
          <h4 key={index} className="text-lg font-semibold text-blue-900 mt-6 mb-3">
            {headingText}
          </h4>
        );
      }
      
      // Handle bullet lists
      if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
        const listItems = trimmed.split('\n').filter(item => item.trim().startsWith('- '));
        return (
          <ul key={index} className="space-y-2 mb-6 ml-4">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-2">•</span>
                <span className="text-gray-600 leading-relaxed">
                  {item.replace('- ', '')}
                </span>
              </li>
            ))}
          </ul>
        );
      }
      
      // Handle numbered lists
      if (/^\d+\./.test(trimmed) || trimmed.includes('\n1.') || trimmed.includes('\n2.')) {
        const listItems = trimmed.split('\n').filter(item => /^\d+\./.test(item.trim()));
        return (
          <ol key={index} className="space-y-2 mb-6 ml-4">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="text-blue-600 mr-3 font-medium">
                  {itemIndex + 1}.
                </span>
                <span className="text-gray-600 leading-relaxed">
                  {item.replace(/^\d+\.\s*/, '')}
                </span>
              </li>
            ))}
          </ol>
        );
      }
      
      // Regular paragraphs
      if (trimmed && !trimmed.startsWith('#')) {
        // Process inline formatting
        return (
          <p 
            key={index} 
            className="text-gray-600 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: trimmed }}
          />
        );
      }
      
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="container-custom py-8">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại Blog
          </button>

          <div>
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 text-sm">Chia sẻ:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-8 h-8 bg-blue-400 text-white rounded flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-8 h-8 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="mx-auto">
          {/* Content */}
          <article className="prose max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600">
                  Chuyên gia tư vấn LLC và thuế doanh nghiệp tại Mỹ với hơn 5
                  năm kinh nghiệm. Đã hỗ trợ hàng trăm doanh nghiệp Việt Nam
                  thành lập và phát triển tại thị trường Mỹ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              Bài viết liên quan
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleRelatedPostClick(relatedPost.slug)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                      {relatedPost.category}
                    </span>

                    <h3 className="text-lg font-semibold text-blue-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedPost.author}</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng đăng ký LLC?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình kinh doanh tại Mỹ với sự hỗ trợ chuyên nghiệp từ
            Sail Agency
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Liên hệ tư vấn miễn phí
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;