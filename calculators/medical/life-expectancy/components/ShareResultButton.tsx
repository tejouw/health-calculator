'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui';
import { Share2, Check, Facebook, Twitter } from 'lucide-react';

interface ShareResultButtonProps {
  lifeExpectancy: number;
  comparisonToAverage: number;
  locale: 'en' | 'tr';
}

const ShareResultButton: React.FC<ShareResultButtonProps> = ({
  lifeExpectancy,
  comparisonToAverage,
  locale,
}) => {
  const [copied, setCopied] = useState(false);

  const shareText =
    locale === 'tr'
      ? `🎂 Yaşam beklentim ${Math.round(lifeExpectancy)} yaş! ${
          comparisonToAverage > 0
            ? `Ortalamadan ${comparisonToAverage.toFixed(1)} yıl fazla! 🎉`
            : ''
        } Sizinki ne kadar? Hesaplayın:`
      : `🎂 My life expectancy is ${Math.round(lifeExpectancy)} years! ${
          comparisonToAverage > 0
            ? `That's ${comparisonToAverage.toFixed(1)} years above average! 🎉`
            : ''
        } Calculate yours:`;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async (platform?: 'twitter' | 'facebook') => {
    const fullText = `${shareText} ${shareUrl}`;

    if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}`,
        '_blank'
      );
    } else if (platform === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
        '_blank'
      );
    } else {
      // Copy to clipboard
      try {
        await navigator.clipboard.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-center text-sm font-semibold text-neutral-700">
        {locale === 'tr' ? 'Sonuçlarınızı Paylaşın' : 'Share Your Results'}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Button
          onClick={() => handleShare()}
          variant="outline"
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              {locale === 'tr' ? 'Kopyalandı!' : 'Copied!'}
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4" />
              {locale === 'tr' ? 'Linki Kopyala' : 'Copy Link'}
            </>
          )}
        </Button>

        <Button
          onClick={() => handleShare('twitter')}
          variant="outline"
          className="gap-2 border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
        >
          <Twitter className="h-4 w-4 fill-current" />
          Twitter
        </Button>

        <Button
          onClick={() => handleShare('facebook')}
          variant="outline"
          className="gap-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
        >
          <Facebook className="h-4 w-4 fill-current" />
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default ShareResultButton;
