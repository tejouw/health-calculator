'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { calculateChineseGender, formatDate, getGenderChartForAge } from './chineseGenderLogic';
import { ChineseGenderInput } from './chineseGenderTypes';
import { chineseGenderContent } from './chineseGenderContent';
import { Sparkles, Calendar, Baby, Heart, Info, Star, BookOpen, Activity, HelpCircle, FileText, AlertTriangle } from 'lucide-react';

interface ChineseGenderCalculatorProps {
  locale: 'en' | 'tr';
}

const ChineseGenderCalculator: React.FC<ChineseGenderCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [motherBirthDate, setMotherBirthDate] = useState<string>('');
  const [conceptionDate, setConceptionDate] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateChineseGender> | null>(null);
  const [error, setError] = useState<string>('');
  const [showChart, setShowChart] = useState<boolean>(false);

  const handleCalculate = () => {
    setError('');

    try {
      if (!motherBirthDate) {
        setError(locale === 'tr' ? 'Lütfen doğum tarihinizi girin' : 'Please enter your birth date');
        return;
      }

      if (!conceptionDate) {
        setError(
          locale === 'tr'
            ? 'Lütfen hamilelik (döllendirme) tarihinizi girin'
            : 'Please enter your conception date'
        );
        return;
      }

      const motherBirth = new Date(motherBirthDate);
      const conception = new Date(conceptionDate);

      // Validate dates
      const today = new Date();
      if (motherBirth > today) {
        setError(
          locale === 'tr'
            ? 'Doğum tarihi gelecekte olamaz'
            : 'Birth date cannot be in the future'
        );
        return;
      }

      if (conception > today) {
        setError(
          locale === 'tr'
            ? 'Hamilelik tarihi gelecekte olamaz'
            : 'Conception date cannot be in the future'
        );
        return;
      }

      if (conception < motherBirth) {
        setError(
          locale === 'tr'
            ? 'Hamilelik tarihi doğum tarihinden önce olamaz'
            : 'Conception date cannot be before birth date'
        );
        return;
      }

      const input: ChineseGenderInput = {
        motherBirthDate: motherBirth,
        conceptionDate: conception,
      };

      const genderResult = calculateChineseGender(input);
      setResult(genderResult);
    } catch (err: any) {
      setError(err.message || (locale === 'tr' ? 'Hesaplama hatası' : 'Calculation error'));
    }
  };

  const handleReset = () => {
    setMotherBirthDate('');
    setConceptionDate('');
    setResult(null);
    setError('');
    setShowChart(false);
  };

  const genderChart = result ? getGenderChartForAge(result.lunarAge) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Çin Cinsiyet Tahmincisi' : 'Chinese Gender Predictor'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Eski Çin takvimi ile eğlenceli tahmin'
                : 'Fun prediction based on ancient Chinese calendar'}
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mb-6 flex items-start gap-3 rounded-lg bg-amber-50 p-4 border border-amber-200">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900">
            <p className="font-semibold mb-1">
              {locale === 'tr' ? 'Sadece Eğlence İçin!' : 'For Entertainment Only!'}
            </p>
            <p>
              {locale === 'tr'
                ? 'Bu hesaplayıcı bilimsel değildir ve %50 doğruluk oranına sahiptir (rastgele tahmin ile aynı). Sadece eğlence ve kültürel ilgi amaçlıdır.'
                : 'This calculator is not scientific and has ~50% accuracy (same as random chance). It is for entertainment and cultural interest only.'}
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <Input
            label={locale === 'tr' ? 'Annenin Doğum Tarihi' : "Mother's Birth Date"}
            type="date"
            value={motherBirthDate}
            onChange={(e) => setMotherBirthDate(e.target.value)}
            required
            leftIcon={<Calendar className="h-5 w-5" />}
          />

          <Input
            label={
              locale === 'tr'
                ? 'Hamilelik (Döllendirme) Tarihi'
                : 'Conception Date (or Estimated)'
            }
            type="date"
            value={conceptionDate}
            onChange={(e) => setConceptionDate(e.target.value)}
            required
            leftIcon={<Baby className="h-5 w-5" />}
            helperText={
              locale === 'tr'
                ? 'Genellikle son adet tarihinden 2 hafta sonra'
                : 'Typically 2 weeks after last menstrual period'
            }
          />
        </div>

        {error && <p className="mt-4 text-sm text-danger-main">{error}</p>}

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            <Sparkles className="mr-2 h-5 w-5" />
            {locale === 'tr' ? 'Tahmin Et' : 'Predict'}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Result */}
      {result && (
        <>
          {/* Gender Prediction Card */}
          <Card
            className={`animate-slide-up border-2 ${
              result.predictedGender === 'boy'
                ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50'
                : 'border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50'
            }`}
          >
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmin Edilen Cinsiyet' : 'Predicted Gender'}
              </h3>

              <div className="mb-4 flex items-center justify-center gap-3">
                {result.predictedGender === 'boy' ? (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-4xl">
                    👶🏻
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500 text-4xl">
                    👶🏻
                  </div>
                )}
                <div>
                  <div
                    className={`text-5xl font-bold ${
                      result.predictedGender === 'boy' ? 'text-blue-600' : 'text-pink-600'
                    }`}
                  >
                    {result.predictedGender === 'boy'
                      ? locale === 'tr'
                        ? 'Erkek'
                        : 'Boy'
                      : locale === 'tr'
                        ? 'Kız'
                        : 'Girl'}
                  </div>
                  <Badge
                    variant={result.predictedGender === 'boy' ? 'primary' : 'danger'}
                    size="lg"
                    className="mt-2"
                  >
                    {locale === 'tr' ? 'Eğlence Amaçlı' : 'For Fun'}
                  </Badge>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2">
                <div className="text-center">
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? 'Ay Yaşı (Çin)' : 'Lunar Age (Chinese)'}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-neutral-900">{result.lunarAge}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? 'Hamilelik Ayı' : 'Conception Month'}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-neutral-900">{result.lunarMonth}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Chinese Zodiac Card */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-amber-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? 'Çin Burcu' : 'Chinese Zodiac'}
              </h3>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">
                    {locale === 'tr' ? 'Hamilelik Yılı' : 'Conception Year'}
                  </p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {result.conceptionYear}
                  </p>
                </div>
                <div className="text-5xl">🐉</div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-neutral-600 mb-1">
                    {locale === 'tr' ? 'Burç Hayvanı' : 'Zodiac Animal'}
                  </p>
                  <p className="text-lg font-semibold text-amber-900">
                    {result.chineseZodiac[locale]}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-600 mb-1">
                    {locale === 'tr' ? 'Element' : 'Element'}
                  </p>
                  <p className="text-lg font-semibold text-amber-900">
                    {result.zodiacElement[locale]}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Gender Chart Toggle */}
          {genderChart && Object.keys(genderChart).length > 0 && (
            <Card className="animate-slide-up">
              <Button
                onClick={() => setShowChart(!showChart)}
                variant="outline"
                className="w-full"
              >
                <Heart className="mr-2 h-5 w-5" />
                {showChart
                  ? locale === 'tr'
                    ? 'Tabloyu Gizle'
                    : 'Hide Chart'
                  : locale === 'tr'
                    ? 'Çin Cinsiyet Tablosunu Göster'
                    : 'Show Chinese Gender Chart'}
              </Button>

              {showChart && (
                <div className="mt-4 overflow-x-auto">
                  <p className="text-sm text-neutral-600 mb-3">
                    {locale === 'tr'
                      ? `Ay Yaşı ${result.lunarAge} için tahminler (Mavi = Erkek, Pembe = Kız):`
                      : `Predictions for Lunar Age ${result.lunarAge} (Blue = Boy, Pink = Girl):`}
                  </p>
                  <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
                    {Object.entries(genderChart).map(([month, gender]) => (
                      <div
                        key={month}
                        className={`rounded-lg p-3 text-center ${
                          gender === 'boy'
                            ? 'bg-blue-100 border border-blue-300'
                            : 'bg-pink-100 border border-pink-300'
                        } ${
                          parseInt(month) === result.lunarMonth
                            ? 'ring-2 ring-neutral-900'
                            : ''
                        }`}
                      >
                        <div className="text-xs text-neutral-600 mb-1">
                          {locale === 'tr' ? 'Ay' : 'M'} {month}
                        </div>
                        <div
                          className={`text-xl font-bold ${
                            gender === 'boy' ? 'text-blue-600' : 'text-pink-600'
                          }`}
                        >
                          {gender === 'boy' ? '👦' : '👧'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          )}

          {/* Disclaimer Card */}
          <Card className="border-l-4 border-l-amber-500 bg-amber-50">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="mb-1 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Önemli Uyarı' : 'Important Disclaimer'}
                </h4>
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Çin Cinsiyet Tahmincisi bilimsel olarak kanıtlanmamıştır ve yaklaşık %50 doğruluk oranına sahiptir (madeni para atma ile aynı). Bu yalnızca eğlence ve kültürel gelenek amaçlıdır. Bebeğinizin gerçek cinsiyetini öğrenmek için ultrason veya NIPT gibi tıbbi yöntemleri kullanın. Her iki cinsiyete de açık olun ve bebeğinizin sağlığına odaklanın!'
                    : 'The Chinese Gender Predictor has not been scientifically validated and has approximately 50% accuracy (same as flipping a coin). This is for entertainment and cultural tradition only. For reliable gender information, use medical methods like ultrasound or NIPT. Be open to either gender and focus on your baby\'s health!'}
                </p>
              </div>
            </div>
          </Card>

          {/* Fun Facts Card */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '🎉 Eğlenceli Bilgiler' : '🎉 Fun Facts'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-white/80 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl mb-2">📜</div>
                <h4 className="font-semibold text-neutral-900 mb-1">
                  {locale === 'tr' ? '700+ Yıllık Gelenek' : '700+ Year Tradition'}
                </h4>
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Qing Hanedanlığı döneminden kalma eski bir tahmin yöntemi'
                    : 'Ancient prediction method from the Qing Dynasty era'}
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl mb-2">🎲</div>
                <h4 className="font-semibold text-neutral-900 mb-1">
                  {locale === 'tr' ? '%50 Doğruluk' : '50% Accuracy'}
                </h4>
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Madeni para atmakla aynı şans - tamamen eğlence için!'
                    : 'Same as flipping a coin - purely for fun!'}
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl mb-2">🌙</div>
                <h4 className="font-semibold text-neutral-900 mb-1">
                  {locale === 'tr' ? 'Ay Takvimi' : 'Lunar Calendar'}
                </h4>
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Ayın evrelerine göre 29.5 günlük ay ayları kullanır'
                    : 'Uses 29.5-day lunar months based on moon phases'}
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl mb-2">🔬</div>
                <h4 className="font-semibold text-neutral-900 mb-1">
                  {locale === 'tr' ? 'Bilimsel Değil' : 'Not Scientific'}
                </h4>
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Kültürel gelenek, tıbbi yöntem değil'
                    : 'Cultural tradition, not medical method'}
                </p>
              </div>
            </div>
          </Card>

          {/* Baby Name Suggestions */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="h-6 w-6 text-pink-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '👶 Popüler İsim Önerileri' : '👶 Popular Name Suggestions'}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`rounded-lg p-4 ${result.predictedGender === 'boy' ? 'bg-blue-50 border-2 border-blue-300' : 'bg-neutral-50 border border-neutral-200'}`}>
                <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  <span className="text-2xl">👦</span>
                  {locale === 'tr' ? 'Erkek İsimleri' : 'Boy Names'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'tr'
                    ? ['Emir', 'Yusuf', 'Ömer', 'Eymen', 'Aslan', 'Alparslan']
                    : ['Liam', 'Noah', 'Oliver', 'James', 'Elijah', 'Lucas']
                  ).map((name, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`rounded-lg p-4 ${result.predictedGender === 'girl' ? 'bg-pink-50 border-2 border-pink-300' : 'bg-neutral-50 border border-neutral-200'}`}>
                <h4 className="font-semibold text-pink-600 mb-3 flex items-center gap-2">
                  <span className="text-2xl">👧</span>
                  {locale === 'tr' ? 'Kız İsimleri' : 'Girl Names'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'tr'
                    ? ['Zeynep', 'Elif', 'Defne', 'Asya', 'Azra', 'Lina']
                    : ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Mia']
                  ).map((name, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Lucky Elements Card */}
          <Card className="animate-slide-up bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-amber-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '✨ Şanslı Elementler' : '✨ Lucky Elements'}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur">
                <div className="text-4xl mb-2">🎨</div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {locale === 'tr' ? 'Şanslı Renkler' : 'Lucky Colors'}
                </h4>
                <div className="flex gap-2 justify-center flex-wrap">
                  {result.predictedGender === 'boy' ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-blue-500" title="Blue"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500" title="Green"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700" title="Black"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 rounded-full bg-pink-400" title="Pink"></div>
                      <div className="w-8 h-8 rounded-full bg-red-400" title="Red"></div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-neutral-300" title="White"></div>
                    </>
                  )}
                </div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur">
                <div className="text-4xl mb-2">🔢</div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {locale === 'tr' ? 'Şanslı Sayılar' : 'Lucky Numbers'}
                </h4>
                <p className="text-2xl font-bold text-amber-600">
                  {result.predictedGender === 'boy' ? '1, 6, 8' : '2, 7, 9'}
                </p>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur">
                <div className="text-4xl mb-2">🌸</div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {locale === 'tr' ? 'Element' : 'Element'}
                </h4>
                <p className="text-lg font-semibold text-neutral-700">
                  {result.zodiacElement[locale]}
                </p>
              </div>
            </div>
          </Card>

          {/* Pregnancy Timeline */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '📅 Hamilelik Zaman Çizelgesi' : '📅 Pregnancy Timeline'}
              </h3>
            </div>
            <div className="space-y-3">
              {[
                {
                  week: locale === 'tr' ? '10. Hafta' : 'Week 10',
                  title: locale === 'tr' ? 'NIPT Testi' : 'NIPT Test',
                  desc: locale === 'tr' ? '%99+ doğrulukla cinsiyet öğrenebilirsiniz' : 'Can learn gender with 99%+ accuracy',
                  icon: '🧬',
                },
                {
                  week: locale === 'tr' ? '18-22. Hafta' : 'Week 18-22',
                  title: locale === 'tr' ? 'Ultrason' : 'Ultrasound',
                  desc: locale === 'tr' ? 'Anatomi taraması ile %95-99 doğruluk' : 'Anatomy scan with 95-99% accuracy',
                  icon: '🔍',
                },
                {
                  week: locale === 'tr' ? '40. Hafta' : 'Week 40',
                  title: locale === 'tr' ? 'Doğum Sürprizi!' : 'Birth Surprise!',
                  desc: locale === 'tr' ? 'En kesin yöntem - beklemek!' : 'Most reliable method - waiting!',
                  icon: '🎁',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="primary" size="sm">{item.week}</Badge>
                      <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Tips */}
          <Card className="animate-slide-up bg-gradient-to-br from-green-50 to-teal-50">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '💡 Hızlı İpuçları' : '💡 Quick Tips'}
              </h3>
            </div>
            <div className="space-y-2">
              {[
                locale === 'tr'
                  ? '🎯 Bu yöntem sadece eğlence amaçlıdır - ciddiye almayın!'
                  : '🎯 This method is purely for fun - don\'t take it seriously!',
                locale === 'tr'
                  ? '🩺 Güvenilir sonuç için doktorunuza danışın'
                  : '🩺 Consult your doctor for reliable results',
                locale === 'tr'
                  ? '❤️ Her iki cinsiyete de açık olun - sağlık en önemlisi'
                  : '❤️ Be open to either gender - health is most important',
                locale === 'tr'
                  ? '🎉 Arkadaşlarınızla paylaşın ve tahminlerini alın!'
                  : '🎉 Share with friends and get their predictions!',
              ].map((tip, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white/60 rounded-lg backdrop-blur">
                  <span className="text-sm text-neutral-700">{tip}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* FAQ - Compact Version */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '❓ Sık Sorulanlar' : '❓ Common Questions'}
              </h3>
            </div>
            <div className="space-y-3">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Bu yöntem doğru mu?' : 'Is this method accurate?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="p-3 text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Hayır, bilimsel çalışmalar %50 doğruluk gösteriyor (madeni para atmakla aynı). Sadece eğlence için kullanın!'
                    : 'No, scientific studies show 50% accuracy (same as coin flip). Use for entertainment only!'}
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Ay yaşı nedir?' : 'What is lunar age?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="p-3 text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Çin geleneğinde bebekler 1 yaşında doğar ve Çin Yeni Yılı\'nda yaş alır. Basit hesaplama: Batı yaşı + 1'
                    : 'In Chinese tradition, babies are 1 year old at birth and age at Chinese New Year. Simple calc: Western age + 1'}
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Gerçekten cinsiyeti nasıl öğrenebilirim?' : 'How can I really learn the gender?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="p-3 text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Ultrason (18-22 hafta, %95-99), NIPT kan testi (10+ hafta, %99+) veya doğumda öğrenebilirsiniz!'
                    : 'Ultrasound (18-22 weeks, 95-99%), NIPT blood test (10+ weeks, 99%+) or wait for birth!'}
                </p>
              </details>
            </div>
          </Card>

          {/* SEO Content - Collapsible Sections */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '📚 Detaylı Bilgiler' : '📚 Detailed Information'}
              </h3>
            </div>
            <div className="space-y-3">
              {/* How It Works */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '🔍 Çin Cinsiyet Tahmincisi Nasıl Çalışır?' : '🔍 How Does the Chinese Gender Predictor Work?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p className="mb-3">{chineseGenderContent[locale].whatIs.substring(0, 600)}...</p>
                  <p className="text-xs text-neutral-500 italic">
                    {locale === 'tr'
                      ? '700+ yıllık geleneksel Çin takvimi metodolojisi'
                      : '700+ year old traditional Chinese calendar methodology'}
                  </p>
                </div>
              </details>

              {/* Formula & Methodology */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '🧮 Formül ve Hesaplama Yöntemi' : '🧮 Formula & Calculation Method'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <div className="bg-neutral-50 p-3 rounded mb-3 font-mono text-xs">
                    Lunar Age = Western Age + 1
                    <br />
                    Lunar Month = Conception Month (simplified)
                  </div>
                  <p>{chineseGenderContent[locale].formulaDetails?.substring(0, 500)}...</p>
                </div>
              </details>

              {/* Interpreting Results */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '📊 Sonuçları Nasıl Yorumlamalıyım?' : '📊 How to Interpret Results?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p>{chineseGenderContent[locale].interpretation?.substring(0, 600)}...</p>
                  <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-xs font-semibold text-amber-900">
                      ⚠️ {locale === 'tr' ? 'Önemli: %50 doğruluk oranı - sadece eğlence için!' : 'Important: 50% accuracy - for entertainment only!'}
                    </p>
                  </div>
                </div>
              </details>

              {/* Limitations */}
              <details className="group border border-red-200 rounded-lg bg-red-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-red-100">
                  <span className="font-semibold text-red-900">
                    {locale === 'tr' ? '⚠️ Sınırlamalar ve Bilimsel Gerçekler' : '⚠️ Limitations & Scientific Facts'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-red-900 leading-relaxed border-t border-red-200">
                  <ul className="list-disc list-inside space-y-2">
                    <li>{locale === 'tr' ? 'Bilimsel temeli yok (%50 doğruluk = şans)' : 'No scientific basis (50% accuracy = chance)'}</li>
                    <li>{locale === 'tr' ? 'Tarihsel kökeni doğrulanamıyor' : 'Historical origin cannot be verified'}</li>
                    <li>{locale === 'tr' ? 'Farklı versiyonlar farklı sonuçlar veriyor' : 'Different versions give different results'}</li>
                    <li>{locale === 'tr' ? 'Cinsiyet kromozomlarla belirlenir, zamanlamayla değil' : 'Gender determined by chromosomes, not timing'}</li>
                  </ul>
                </div>
              </details>

              {/* Alternative Methods */}
              <details className="group border border-green-200 rounded-lg bg-green-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-green-100">
                  <span className="font-semibold text-green-900">
                    {locale === 'tr' ? '✅ Güvenilir Alternatif Yöntemler' : '✅ Reliable Alternative Methods'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-green-900 leading-relaxed border-t border-green-200">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">🔬</span>
                      <div>
                        <p className="font-semibold">NIPT Testi</p>
                        <p className="text-xs">{locale === 'tr' ? '10+ hafta, %99+ doğruluk' : '10+ weeks, 99%+ accuracy'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">📡</span>
                      <div>
                        <p className="font-semibold">Ultrason</p>
                        <p className="text-xs">{locale === 'tr' ? '18-22 hafta, %95-99 doğruluk' : '18-22 weeks, 95-99% accuracy'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">🎁</span>
                      <div>
                        <p className="font-semibold">{locale === 'tr' ? 'Doğumda Sürpriz' : 'Birth Surprise'}</p>
                        <p className="text-xs">{locale === 'tr' ? '40. hafta, %100 doğruluk!' : 'Week 40, 100% accuracy!'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* Medical Disclaimer */}
              <details className="group border-2 border-amber-400 rounded-lg bg-amber-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-amber-100">
                  <span className="font-semibold text-amber-900">
                    {locale === 'tr' ? '⚕️ Tıbbi Sorumluluk Reddi' : '⚕️ Medical Disclaimer'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-amber-900 leading-relaxed border-t border-amber-300">
                  <p className="mb-3">{chineseGenderContent[locale].medicalDisclaimer?.substring(0, 400)}...</p>
                  <p className="text-xs font-semibold">
                    {locale === 'tr'
                      ? '⚠️ Bu hesaplayıcı tıbbi tavsiye değildir. Sağlık konularında mutlaka doktorunuza danışın.'
                      : '⚠️ This calculator is not medical advice. Always consult your doctor for health matters.'}
                  </p>
                </div>
              </details>
            </div>
          </Card>

          {/* Scientific References */}
          <Card className="animate-slide-up bg-neutral-50">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-neutral-600" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    {locale === 'tr' ? '📖 Bilimsel Kaynaklar ve Referanslar' : '📖 Scientific Sources & References'}
                  </h3>
                </div>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ol className="mt-4 space-y-2 text-xs text-neutral-600 leading-relaxed">
                {chineseGenderContent[locale].references?.map((reference, index) => (
                  <li key={index} className="pl-4 border-l-2 border-neutral-300">
                    {index + 1}. {reference}
                  </li>
                ))}
              </ol>
            </details>
          </Card>
        </>
      )}
    </div>
  );
};

export default ChineseGenderCalculator;
