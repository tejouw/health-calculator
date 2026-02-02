'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Facebook, Twitter, Link2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackShare } from '@/lib/analytics';

// Pinterest icon component (not in lucide-react)
const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

interface ShareButtonsProps {
  url?: string;
  title: string;
  description?: string;
  calculatorId: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  description = '',
  calculatorId,
  className,
  variant = 'horizontal',
  size = 'md',
}) => {
  const t = useTranslations('common');
  const [copied, setCopied] = useState(false);

  // Use current URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'pinterest' | 'copy_link') => {
    trackShare(calculatorId, platform);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      handleShare('copy_link');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareButtons = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2] hover:bg-[#166FE5]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      platform: 'facebook' as const,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[#1DA1F2] hover:bg-[#1A91DA]',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      platform: 'twitter' as const,
    },
    {
      name: 'Pinterest',
      icon: PinterestIcon,
      color: 'bg-[#E60023] hover:bg-[#C50020]',
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      platform: 'pinterest' as const,
    },
  ];

  return (
    <div
      className={cn(
        'flex items-center gap-2',
        variant === 'vertical' && 'flex-col',
        className
      )}
    >
      <span className="text-sm font-medium text-neutral-600">{t('share')}:</span>
      <div
        className={cn(
          'flex gap-2',
          variant === 'vertical' && 'flex-col'
        )}
      >
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleShare(button.platform)}
            className={cn(
              'flex items-center justify-center rounded-full text-white transition-transform hover:scale-110',
              button.color,
              sizeClasses[size]
            )}
            title={`${t('share')} on ${button.name}`}
            aria-label={`${t('share')} on ${button.name}`}
          >
            <button.icon className={iconSizeClasses[size]} />
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className={cn(
            'flex items-center justify-center rounded-full transition-all',
            copied
              ? 'bg-green-500 text-white'
              : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300',
            sizeClasses[size]
          )}
          title={copied ? 'Copied!' : 'Copy link'}
          aria-label={copied ? 'Link copied' : 'Copy link'}
        >
          {copied ? (
            <Check className={iconSizeClasses[size]} />
          ) : (
            <Link2 className={iconSizeClasses[size]} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
