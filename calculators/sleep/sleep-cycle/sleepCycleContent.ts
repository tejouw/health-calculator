import { CalculatorContent } from '@/types/calculator';

export const sleepCycleContent: CalculatorContent = {
  en: {
    whatIs:
      'A sleep cycle calculator is an advanced tool that analyzes your entire sleep architecture by examining the relationship between your bedtime, wake time, and age. Unlike a simple sleep calculator that suggests optimal bedtimes, this tool takes both your actual bedtime and wake-up time to produce a comprehensive sleep quality analysis. Each night, your brain cycles through distinct stages of sleep approximately every 90 minutes: light sleep (N1 and N2), deep sleep (N3/slow-wave sleep), and REM (Rapid Eye Movement) sleep. The distribution of these stages shifts throughout the night in a predictable pattern — deep sleep dominates the first half of the night when your body prioritizes physical restoration, while REM sleep increases in the second half, supporting memory consolidation, emotional regulation, and creativity. Understanding your personal sleep cycle pattern is crucial because sleep quality depends not just on duration, but on completing full cycles and achieving the right balance of sleep stages. This calculator evaluates your cycle completion, duration adequacy for your age group, and cycle alignment to generate a comprehensive quality score from 0 to 100. It then visualizes your estimated sleep architecture with a timeline showing how each cycle progresses through light, deep, and REM stages. The result includes personalized recommendations for timing adjustments, weekly sleep projections, and environment optimization tips calculated from your specific bedtime. Research from the National Sleep Foundation and American Academy of Sleep Medicine consistently shows that sleep quality — not just quantity — is the key predictor of daytime alertness, cognitive performance, immune function, and long-term health outcomes.',

    howToCalculate:
      'To use the sleep cycle calculator, enter four pieces of information: your bedtime (when you get into bed), your wake-up time (when your alarm goes off or you naturally wake), your age group (which determines recommended sleep duration), and your estimated time to fall asleep (default 14 minutes based on population averages). The calculator then performs several computations. First, it calculates your total time in bed and subtracts the fall-asleep latency to determine actual sleep time. It divides this by 90 minutes to find complete sleep cycles and any remaining partial cycle. For example, if you go to bed at 11:00 PM and wake at 7:00 AM with 14 minutes to fall asleep, your actual sleep time is 466 minutes (7 hours 46 minutes), yielding 5 complete cycles with 16 minutes of a partial sixth cycle. The quality score algorithm weighs three factors: cycle count (40% — optimal is 5-6 cycles), duration match against age-based recommendations (35%), and cycle alignment (25% — how close you wake to a cycle boundary). Each factor is scored 0-100 and combined into a weighted final score. The calculator then models the sleep stage distribution for each cycle position, showing how deep sleep naturally decreases and REM increases across the night. Finally, it generates personalized tips with specific times calculated from your bedtime — such as your last caffeine intake (8 hours before bed), last heavy meal (3 hours before), and screen cutoff time (1 hour before).',

    formulaDetails:
      'The sleep cycle calculator uses a multi-factor quality assessment algorithm grounded in sleep science research. The core formula: Quality Score = (Cycle Count Score x 0.40) + (Duration Score x 0.35) + (Alignment Score x 0.25). Cycle Count Scoring: 5-6 complete cycles = 100 points, 4 cycles = 80, 7 cycles = 85, 3 cycles = 50, fewer than 3 or more than 7 = 20. This reflects the scientific consensus that 5-6 cycles (7.5-9 hours) represents optimal sleep architecture for most adults. Duration Scoring compares actual sleep time against age-specific recommendations from the National Sleep Foundation: adults 18-64 need 7-9 hours (optimal 8), older adults 65+ need 7-8 hours (optimal 7.5), teenagers 13-17 need 8-10 hours. Within recommended range = 100 points, within 30 minutes = 80, within 1 hour = 60, within 2 hours = 40, beyond = 20. Alignment Scoring evaluates partial cycle remainder: 0 minutes (perfect alignment) = 100, 1-15 minutes = 85, 16-30 minutes = 60, 31-60 minutes = 30, 61-89 minutes = 50. Sleep stage modeling uses research-based distributions per cycle position: Cycle 1 has 40% deep sleep reflecting the body prioritizing physical restoration; by Cycle 5-6, deep sleep drops to 5-10% while REM increases to 30%, reflecting the shift toward cognitive processing. The 90-minute cycle length is based on Nathaniel Kleitman foundational sleep research, though individual cycles can range 80-110 minutes.',

    categories: [
      {
        range: '0-39',
        label: 'Poor Sleep Quality',
        description:
          'Your sleep pattern shows significant room for improvement. You may be getting too few cycles, sleeping far outside your recommended duration, or waking mid-cycle. Consider adjusting your schedule and consulting a sleep specialist if this pattern persists.',
        color: '#EF4444',
      },
      {
        range: '40-59',
        label: 'Fair Sleep Quality',
        description:
          'Your sleep is adequate but could be improved. You may be slightly under or over the recommended duration, or your wake time might not align well with cycle boundaries. Small timing adjustments could significantly improve how rested you feel.',
        color: '#F59E0B',
      },
      {
        range: '60-79',
        label: 'Good Sleep Quality',
        description:
          'Your sleep pattern is solid with good cycle completion and reasonable duration. Minor optimizations in timing or environment could push you into the excellent range. You are likely functioning well during the day.',
        color: '#3B82F6',
      },
      {
        range: '80-100',
        label: 'Excellent Sleep Quality',
        description:
          'Your sleep pattern is well-optimized with complete cycles, appropriate duration for your age, and good cycle alignment. Maintain this pattern for long-term health benefits. You should feel rested and alert during the day.',
        color: '#10B981',
      },
    ],

    interpretation:
      'Your sleep quality score reflects three dimensions of sleep health. A high cycle count score (40% of total) means you are completing enough 90-minute cycles — the building blocks of restorative sleep. Each cycle takes you through light sleep (where muscles relax and heart rate slows), deep sleep (where growth hormone is released and tissue repair occurs), and REM sleep (where memories are consolidated and emotions are processed). The duration score (35%) compares your total sleep against scientifically established recommendations for your age group. Both too little and too much sleep are associated with health risks. The alignment score (25%) measures whether you wake near a natural cycle boundary — waking mid-cycle, especially during deep sleep, causes sleep inertia (grogginess) that can persist for 30+ minutes. A score of 80+ suggests your sleep architecture is well-optimized. Scores of 60-79 indicate good but improvable sleep. Below 60 suggests meaningful changes to your sleep schedule could improve your daytime alertness, mood, and cognitive performance. The sleep stage breakdown shows your estimated distribution of light, deep, and REM sleep — ideally, deep sleep should constitute 15-20% and REM 20-25% of your total sleep time.',

    limitations:
      'This calculator uses a standardized 90-minute sleep cycle model, but individual cycle lengths actually range from 80 to 110 minutes and can vary night to night based on sleep debt, alcohol consumption, medications, and stress levels. The stage distribution percentages are population averages — individual variation is significant, and actual stage distribution can only be measured with polysomnography (clinical sleep study) or high-quality sleep trackers. The calculator does not account for sleep disorders such as sleep apnea, restless leg syndrome, periodic limb movement disorder, or insomnia, all of which can severely fragment sleep architecture regardless of timing. Sleep quality is affected by factors not captured here: room temperature, noise levels, light exposure, bed comfort, pain, anxiety, caffeine metabolism speed (which is genetically variable), and medications. The fall-asleep time estimate is an average — individuals with sleep anxiety or insomnia may take 30-60+ minutes. The quality score is an estimate based on timing alone and cannot replace objective sleep measurements. Shift workers, parents of young children, and people with irregular schedules may find the recommendations difficult to implement consistently.',

    healthRisks:
      'Chronic poor sleep quality and inadequate sleep cycles have far-reaching health consequences beyond daytime drowsiness. Cardiovascular risks increase substantially — a meta-analysis in the European Heart Journal found that short sleepers (under 6 hours) have a 48% greater risk of developing coronary heart disease and a 15% greater risk of stroke. Sleep deprivation disrupts glucose metabolism and insulin sensitivity, with studies showing that sleeping less than 6 hours per night increases type 2 diabetes risk by 28%. The immune system suffers: research published in Sleep journal demonstrated that people sleeping fewer than 7 hours were 2.94 times more likely to develop a cold after virus exposure compared to those sleeping 8+ hours. Mental health is profoundly affected — insufficient REM sleep impairs emotional regulation and is linked to a 2.5x increased risk of depression. Cognitive decline is accelerated: during deep sleep, the glymphatic system clears beta-amyloid plaques associated with Alzheimer disease, and chronic sleep disruption may increase dementia risk. Weight management becomes harder as sleep deprivation increases ghrelin (hunger hormone) and decreases leptin (satiety hormone), promoting overeating. Performance impairment from 24 hours without sleep is equivalent to a blood alcohol concentration of 0.10% — above the legal driving limit in most jurisdictions.',

    alternativeMeasures:
      'For more precise sleep assessment beyond calculator-based estimates, several tools and methods are available. Polysomnography (PSG) remains the gold standard — conducted in a sleep laboratory, it monitors EEG brain waves, EOG eye movements, EMG muscle activity, ECG heart rhythm, respiratory effort, oxygen saturation, and body position to provide definitive sleep architecture data and diagnose disorders. Home Sleep Apnea Testing (HSAT) is a simpler alternative for suspected sleep apnea, monitoring breathing, oxygen levels, and heart rate at home. Consumer wearable devices have improved significantly — the Oura Ring, WHOOP band, Apple Watch, and Fitbit use photoplethysmography (PPG) and accelerometry to estimate sleep stages with moderate accuracy (70-80% agreement with PSG for sleep vs. wake detection). Actigraphy, using medical-grade wrist sensors, tracks movement patterns over 1-2 weeks and is valuable for circadian rhythm assessment. Sleep diaries — recording bedtime, wake time, subjective quality, and daytime alertness for 2+ weeks — provide valuable trend data. The Pittsburgh Sleep Quality Index (PSQI) is a validated 19-item questionnaire used clinically to assess sleep quality. The Epworth Sleepiness Scale measures daytime sleepiness tendency. For insomnia specifically, Cognitive Behavioral Therapy for Insomnia (CBT-I) is the first-line treatment recommended over medication.',

    demographicDifferences:
      'Sleep architecture varies significantly across demographics. Age is the most impactful factor: newborns spend 50% of sleep in REM; by adulthood this decreases to 20-25%. Older adults (65+) experience reduced deep sleep — often only 5-10% of total sleep versus 15-20% in young adults — and more frequent nighttime awakenings, leading to lighter, more fragmented sleep despite similar total sleep needs. Teenagers undergo a biological circadian shift (delayed sleep phase) that makes early school start times problematic — their melatonin release is delayed by 1-2 hours compared to adults. Women generally need 11-13 minutes more sleep than men, and their sleep is more affected by hormonal fluctuations during menstrual cycles (progesterone increases body temperature, disrupting sleep), pregnancy (especially third trimester), and menopause (hot flashes, night sweats). Genetic chronotype variations (the PER3 gene and others) create genuine "night owls" and "morning larks" — forcing a night owl into an early schedule causes chronic circadian misalignment. A small percentage (1-3%) carry DEC2 gene mutations allowing them to genuinely thrive on 6 hours of sleep, but this is rare. Shift workers face unique challenges: rotating shifts prevent circadian entrainment, and permanent night shifts require specialized light exposure and melatonin timing strategies. Cultural factors also play a role — populations with siesta traditions may get less nighttime sleep but compensate with afternoon naps.',

    medicalDisclaimer:
      'This sleep cycle calculator provides educational estimates based on standardized sleep science models and should not be considered medical advice or diagnosis. The quality score is an approximation based on timing data alone and cannot detect sleep disorders, breathing abnormalities, or other medical conditions that affect sleep quality. If you experience persistent symptoms such as excessive daytime sleepiness despite adequate sleep duration, loud snoring or observed breathing pauses during sleep, difficulty falling asleep or staying asleep for more than 3 weeks, restless legs or periodic limb movements, chronic fatigue or non-restorative sleep, or significant changes in sleep patterns, please consult a healthcare provider or board-certified sleep medicine specialist. Certain medical conditions (thyroid disorders, chronic pain, depression, anxiety, GERD), medications (beta-blockers, corticosteroids, SSRIs, decongestants), and substances (alcohol, cannabis, nicotine) can significantly alter sleep architecture in ways this calculator cannot account for. Never modify prescribed medications or sleep treatments based solely on calculator results. Pregnant women, individuals with diagnosed sleep disorders, and those taking sleep medications should follow their healthcare provider recommendations rather than general calculator suggestions.',

    references: [
      'National Sleep Foundation - Sleep Duration Recommendations (2015)',
      'American Academy of Sleep Medicine - Clinical Practice Guidelines for Sleep Studies',
      'Walker M. Why We Sleep: Unlocking the Power of Sleep and Dreams. Scribner. 2017.',
      'Ohayon MM et al. Meta-Analysis of Quantitative Sleep Parameters. Sleep. 2004;27(7):1255-1273.',
      'Cappuccio FP et al. Sleep Duration and All-Cause Mortality. Sleep. 2010;33(5):585-592.',
      'Hirshkowitz M et al. National Sleep Foundation Sleep Duration Recommendations. Sleep Health. 2015;1(1):40-43.',
      'Kleitman N. Sleep and Wakefulness. University of Chicago Press. 1963.',
      'Carskadon MA, Dement WC. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine. 6th ed. 2017.',
    ],

    tips: [
      'Maintain consistent bed and wake times within a 30-minute window, even on weekends, to stabilize your circadian rhythm',
      'Aim for 5-6 complete 90-minute cycles per night for optimal restorative sleep',
      'Avoid caffeine at least 8 hours before bedtime — even if you "can sleep after coffee," caffeine reduces deep sleep by 20%',
      'Keep your bedroom between 18-20°C (64-68°F) — core body temperature must drop for sleep onset',
      'Stop blue light screen exposure 60 minutes before bed, or use amber-tinted glasses after sunset',
      'If you wake during a sleep cycle and feel groggy, try adjusting your alarm by 15-20 minutes in either direction to better align with cycle boundaries',
      'Morning sunlight exposure within 30 minutes of waking helps reset your circadian clock and improves nighttime sleep quality',
      'Regular exercise improves sleep quality, but finish vigorous activity at least 4 hours before bedtime',
    ],

    faqs: [
      {
        question: 'How many sleep cycles do I need per night?',
        answer:
          'Most adults need 5-6 complete sleep cycles per night, totaling 7.5-9 hours of actual sleep. Four cycles (6 hours) is the minimum for basic function, though cognitive performance and health outcomes are better with 5-6 cycles. Some individuals may function well on 4 cycles due to genetic variations (DEC2 gene), but this is rare (1-3% of the population). Consistently getting fewer than 4 cycles (under 6 hours) is associated with significantly increased health risks.',
      },
      {
        question: 'Why do I feel tired even after 8 hours of sleep?',
        answer:
          'Feeling tired after adequate sleep duration usually indicates a quality problem rather than a quantity problem. Common causes include: waking during deep sleep (mid-cycle), which causes significant grogginess; undiagnosed sleep apnea (affects 2-4% of adults), which fragments sleep hundreds of times per night; alcohol consumption, which suppresses REM sleep; or inconsistent sleep timing, which disrupts circadian rhythm. Environmental factors like noise, light, and temperature can also fragment sleep without fully waking you. If fatigue persists, consider a sleep study to rule out disorders.',
      },
      {
        question: 'What is the most important sleep stage?',
        answer:
          'All sleep stages serve essential functions, and none is more "important" — they work together. Deep sleep (N3) is critical for physical restoration: growth hormone release, tissue repair, immune function strengthening, and clearance of brain metabolic waste (beta-amyloid). REM sleep is essential for cognitive functions: memory consolidation, emotional processing, creativity, and learning. Light sleep (N1/N2) facilitates transitions and contributes to memory processing and motor skill learning. Losing any one stage significantly impairs specific functions — the key is achieving balanced, complete cycles.',
      },
      {
        question: 'Does the 90-minute sleep cycle apply to everyone?',
        answer:
          'The 90-minute average is well-established in sleep research but varies between individuals from 80 to 110 minutes. Your personal cycle length can also vary night to night based on sleep debt (longer deep sleep when sleep-deprived), alcohol (suppresses REM, alters cycle structure), medications, stress, and age. The 90-minute estimate is the most reliable average for planning purposes. If you consistently feel groggy waking at calculated times, try shifting your alarm by 10-15 minutes earlier or later to find your personal cycle boundary.',
      },
      {
        question: 'How does age affect my sleep cycles?',
        answer:
          'Age significantly reshapes sleep architecture. Newborns spend 50% of sleep in REM; adults average 20-25%; older adults may drop to 15-20%. Deep sleep (N3) decreases most dramatically — healthy young adults get 15-20% deep sleep, while adults over 60 may get only 5-10%, resulting in lighter, less restorative sleep. Older adults also experience more nighttime awakenings and earlier natural wake times (circadian phase advance). Teenagers undergo a delayed circadian shift, naturally falling asleep and waking later. These changes are normal but mean that sleep optimization strategies should be age-appropriate.',
      },
      {
        question: 'Can I make up for lost sleep on weekends?',
        answer:
          'Partially, but "social jet lag" (shifting sleep timing by 2+ hours on weekends) disrupts circadian rhythm and can make Monday mornings harder. Research shows that weekend recovery sleep can partially reverse some effects of weekday sleep debt — a 2018 study found it reduced the mortality risk associated with short weekday sleep. However, cognitive performance does not fully recover, and the circadian disruption itself carries health costs. The better strategy is maintaining consistent sleep timing (within 30-60 minutes) and gradually extending weeknight sleep if you are accumulating debt.',
      },
      {
        question: 'What should I do if I cannot fall asleep within 20 minutes?',
        answer:
          'If you have not fallen asleep within 15-20 minutes, sleep experts recommend getting out of bed and doing a calm, non-stimulating activity (reading a physical book, gentle stretching, listening to calm audio) in dim lighting until you feel drowsy, then returning to bed. This prevents your brain from associating the bed with wakefulness — a key principle of Cognitive Behavioral Therapy for Insomnia (CBT-I). Avoid checking the clock, using screens, or eating. If this happens regularly (3+ nights per week for 3+ weeks), consult a healthcare provider as it may indicate insomnia or anxiety disorders.',
      },
      {
        question: 'How accurate is this sleep cycle calculator?',
        answer:
          'This calculator provides a reasonable estimate based on well-established sleep science principles (90-minute cycles, age-based recommendations, stage distribution patterns). However, it cannot match the accuracy of clinical sleep studies (polysomnography) or even consumer sleep trackers that monitor physiological signals. The quality score is based on timing alone and does not account for sleep disorders, environmental factors, substance use, or individual biological variation. Use it as a planning tool and self-awareness aid, not a diagnostic instrument. If the suggested timings consistently do not improve how you feel, professional evaluation is recommended.',
      },
    ],
  },

  tr: {
    whatIs:
      'Uyku döngüsü hesaplayıcı, yatış saatiniz, uyanış saatiniz ve yaşınız arasındaki ilişkiyi inceleyerek tüm uyku mimarinizi analiz eden gelişmiş bir araçtır. Yalnızca optimal yatış saati öneren basit bir uyku hesaplayıcısının aksine, bu araç hem gerçek yatış hem de uyanış saatinizi alarak kapsamlı bir uyku kalitesi analizi üretir. Her gece, beyniniz yaklaşık 90 dakikada bir farklı uyku aşamalarından geçer: hafif uyku (N1 ve N2), derin uyku (N3/yavaş dalga uykusu) ve REM (Hızlı Göz Hareketi) uykusu. Bu aşamaların dağılımı gece boyunca tahmin edilebilir bir düzen izler — vücut fiziksel restorasyonu öncelik olarak belirlediği için derin uyku gecenin ilk yarısında baskındır, REM uyku ise bellek pekiştirme, duygusal düzenleme ve yaratıcılığı destekleyerek ikinci yarıda artar. Kişisel uyku döngüsü düzenini anlamak çok önemlidir çünkü uyku kalitesi yalnızca süreye değil, tam döngülerin tamamlanmasına ve uyku aşamalarının doğru dengesinin elde edilmesine bağlıdır. Bu hesaplayıcı, döngü tamamlanmanızı, yaş grubunuz için süre yeterliliğinizi ve döngü hizalamanızı değerlendirerek 0 ile 100 arasında kapsamlı bir kalite puanı oluşturur. Ardından, her döngünün hafif, derin ve REM aşamalarından nasıl geçtiğini gösteren bir zaman çizelgesiyle tahmini uyku mimarinizi görselleştirir. Sonuç, zamanlama ayarlamaları için kişiselleştirilmiş öneriler, haftalık uyku projeksiyonları ve belirli yatış saatinizden hesaplanan çevre optimizasyonu ipuçlarını içerir. Ulusal Uyku Vakfı ve Amerikan Uyku Tıbbı Akademisi araştırmaları, uyku kalitesinin — yalnızca miktarın değil — gündüz uyanıklığı, bilişsel performans, bağışıklık fonksiyonu ve uzun vadeli sağlık sonuçlarının temel öngörücüsü olduğunu tutarlı bir şekilde göstermektedir.',

    howToCalculate:
      'Uyku döngüsü hesaplayıcısını kullanmak için dört bilgi girin: yatış saatiniz (yatağa girdiğiniz zaman), uyanış saatiniz (alarmınız çaldığında veya doğal olarak uyandığınızda), yaş grubunuz (önerilen uyku süresini belirler) ve tahmini uykuya dalma süreniz (nüfus ortalamalarına göre varsayılan 14 dakika). Hesaplayıcı daha sonra birkaç hesaplama yapar. İlk olarak, yatakta geçirdiğiniz toplam süreyi hesaplar ve gerçek uyku süresini belirlemek için uykuya dalma gecikmesini çıkarır. Bunu tam uyku döngüleri ve kalan kısmi döngüyü bulmak için 90 dakikaya böler. Örneğin, gece 23:00\'te yatıp sabah 07:00\'de kalkarsanız ve 14 dakika uykuya dalma süresiyle gerçek uyku süreniz 466 dakikadır (7 saat 46 dakika), bu da kısmi altıncı döngünün 16 dakikası ile 5 tam döngü verir. Kalite puanı algoritması üç faktörü tartar: döngü sayısı (%40 — optimal 5-6 döngü), yaş bazlı önerilere göre süre eşleşme (%35) ve döngü hizalaması (%25 — bir döngü sınırında uyanmaya ne kadar yakın olduğunuz). Her faktör 0-100 olarak puanlanır ve ağırlıklı bir son puana birleştirilir. Hesaplayıcı daha sonra her döngü pozisyonu için uyku aşaması dağılımını modelleyerek derin uykunun doğal olarak nasıl azaldığını ve REM\'in gece boyunca nasıl arttığını gösterir. Son olarak, yatış saatinizden hesaplanan belirli saatlerle kişiselleştirilmiş ipuçları oluşturur — son kafein alımınız (yatmadan 8 saat önce), son ağır öğün (3 saat önce) ve ekran kesme zamanı (1 saat önce) gibi.',

    formulaDetails:
      'Uyku döngüsü hesaplayıcı, uyku bilimi araştırmalarına dayanan çok faktörlü bir kalite değerlendirme algoritması kullanır. Temel formül: Kalite Puanı = (Döngü Sayısı Puanı x 0,40) + (Süre Puanı x 0,35) + (Hizalama Puanı x 0,25). Döngü Sayısı Puanlaması: 5-6 tam döngü = 100 puan, 4 döngü = 80, 7 döngü = 85, 3 döngü = 50, 3\'ten az veya 7\'den fazla = 20. Bu, çoğu yetişkin için 5-6 döngünün (7,5-9 saat) optimal uyku mimarisini temsil ettiği bilimsel görüşü yansıtır. Süre Puanlaması, gerçek uyku süresini Ulusal Uyku Vakfı\'ndan yaşa özgü önerilerle karşılaştırır: 18-64 yaş yetişkinler 7-9 saat (optimal 8) ihtiyaç duyar, 65+ yaş yaşlı yetişkinler 7-8 saat (optimal 7,5), gençler 13-17 yaş 8-10 saat. Önerilen aralıkta = 100 puan, 30 dakika içinde = 80, 1 saat içinde = 60, 2 saat içinde = 40, ötesi = 20. Hizalama Puanlaması kısmi döngü kalanını değerlendirir: 0 dakika (mükemmel hizalama) = 100, 1-15 dakika = 85, 16-30 dakika = 60, 31-60 dakika = 30, 61-89 dakika = 50. Uyku aşaması modellemesi, döngü pozisyonu başına araştırma tabanlı dağılımlar kullanır: Döngü 1, vücut fiziksel restorasyonu önceliklendirdiğini yansıtan %40 derin uykuya sahiptir; Döngü 5-6\'ya kadar, derin uyku %5-10\'a düşer ve REM bilişsel işlemeye geçişi yansıtarak %30\'a yükselir.',

    categories: [
      {
        range: '0-39',
        label: 'Zayıf Uyku Kalitesi',
        description:
          'Uyku düzeniniz önemli iyileştirme alanına sahip. Çok az döngü alıyor, önerilen sürenin çok dışında uyuyor veya döngü ortasında uyanıyor olabilirsiniz. Programınızı ayarlamayı ve bu desen devam ederse bir uyku uzmanı ile görüşmeyi düşünün.',
        color: '#EF4444',
      },
      {
        range: '40-59',
        label: 'Orta Uyku Kalitesi',
        description:
          'Uykunuz yeterli ama iyileştirilebilir. Önerilen sürenin biraz altında veya üstünde olabilirsiniz ya da uyanış saatiniz döngü sınırlarıyla iyi hizalanmıyor olabilir. Küçük zamanlama ayarlamaları kendinizi nasıl dinlenmiş hissettiğinizi önemli ölçüde iyileştirebilir.',
        color: '#F59E0B',
      },
      {
        range: '60-79',
        label: 'İyi Uyku Kalitesi',
        description:
          'Uyku düzeniniz, iyi döngü tamamlama ve makul süre ile sağlamdır. Zamanlama veya çevre koşullarındaki küçük optimizasyonlar sizi mükemmel aralığa taşıyabilir. Gün boyunca iyi bir performans göstermeniz muhtemeldir.',
        color: '#3B82F6',
      },
      {
        range: '80-100',
        label: 'Mükemmel Uyku Kalitesi',
        description:
          'Uyku düzeniniz, tam döngüler, yaşınıza uygun süre ve iyi döngü hizalaması ile iyi optimize edilmiştir. Uzun vadeli sağlık yararları için bu deseni sürdürün. Gün boyunca dinlenmiş ve uyanık hissetmelisiniz.',
        color: '#10B981',
      },
    ],

    interpretation:
      'Uyku kalitesi puanınız uyku sağlığının üç boyutunu yansıtır. Yüksek bir döngü sayısı puanı (toplamların %40\'ı), yeterince 90 dakikalık döngü tamamladığınız anlamına gelir — onarıcı uykunun yapı taşları. Her döngü sizi hafif uyku (kasların gevşer ve kalp atışı yavaşlar), derin uyku (büyüme hormonu serbest bırakıldığı ve doku onarımı gerçekleştiği) ve REM uykusundan (anıların pekiştirildiği ve duyguların işlendiği) geçirir. Süre puanı (%35), toplam uykunuzu yaş grubunuz için bilimsel olarak belirlenmiş önerilerle karşılaştırır. Hem çok az hem de çok fazla uyku sağlık riskleriyle ilişkilidir. Hizalama puanı (%25), doğal bir döngü sınırının yakınında uyanıp uyanmadığınızı ölçer — döngü ortasında, özellikle derin uyku sırasında uyanmak, 30+ dakika sürebilen uyku ataleti (sersemlik) yaratır. 80+ puan, uyku mimarinizin iyi optimize edildiğini gösterir. 60-79 puanlar iyi ama iyileştirilebilir uykuyu gösterir. 60\'ın altında, uyku programınızda anlamlı değişikliklerin gündüz uyanıklığınızı, ruh halinizi ve bilişsel performansınızı iyileştirebileceğini gösterir.',

    limitations:
      'Bu hesaplayıcı standart bir 90 dakikalık uyku döngüsü modeli kullanır, ancak bireysel döngü uzunlukları aslında 80 ile 110 dakika arasında değişir ve uyku borcu, alkol tüketimi, ilaçlar ve stres düzeyine göre geceden geceye değişebilir. Aşama dağılım yüzdeleri nüfus ortalamalarıdır — bireysel farklılık önemlidir ve gerçek aşama dağılımı yalnızca polisomnografi (klinik uyku çalışması) veya yüksek kaliteli uyku izleyicileriyle ölçülebilir. Hesaplayıcı, uyku apnesi, huzursuz bacak sendromu, periyodik uzuv hareket bozukluğu veya uykusuzluk gibi zamanlama ne olursa olsun uyku mimarisini ciddi şekilde parçalayabilen uyku bozukluklarını hesaba katmaz. Uyku kalitesi burada yakalanmayan faktörlerden etkilenir: oda sıcaklığı, gürültü seviyeleri, ışık maruziyeti, yatak konforu, ağrı, anksiyete, kafein metabolizma hızı (genetik olarak değişkendir) ve ilaçlar. Uykuya dalma süresi tahmini bir ortalamadır — uyku anksiyetesi veya uykusuzluğu olan bireyler 30-60+ dakika sürebilir.',

    healthRisks:
      'Kronik kötü uyku kalitesi ve yetersiz uyku döngüleri, gündüz uyuklamasının ötesinde geniş kapsamlı sağlık sonuçlarına sahiptir. Kardiyovasküler riskler önemli ölçüde artar — European Heart Journal\'daki bir meta-analiz, kısa uyucuların (6 saatin altında) koroner kalp hastalığı geliştirme riskinin %48 daha yüksek olduğunu ve inme riskinin %15 daha yüksek olduğunu bulmuştur. Uyku yoksunluğu glukoz metabolizmasını ve insülin duyarlılığını bozar; çalışmalar gecede 6 saatten az uyumanın tip 2 diyabet riskini %28 artırdığını göstermiştir. Bağışıklık sistemi zarar görür: Sleep dergisinde yayınlanan araştırma, 7 saatten az uyuyan kişilerin virüs maruziyetinden sonra soğuk algınlığı geliştirme olasılıklarının 8+ saat uyuyanlara göre 2,94 kat daha fazla olduğunu göstermiştir. Ruh sağlığı derinden etkilenir — yetersiz REM uykusu duygusal düzenlemeyi bozar ve 2,5 kat artmış depresyon riskiyle ilişkilendirilir. Bilişsel gerileme hızlanır: derin uyku sırasında, glimfatik sistem Alzheimer hastalığı ile ilişkili beta-amiloid plak temizler ve kronik uyku bozulması demans riskini artırabilir.',

    alternativeMeasures:
      'Hesaplayıcı tabanlı tahminlerin ötesinde daha hassas uyku değerlendirmesi için birkaç araç ve yöntem mevcuttur. Polisomnografi (PSG) altın standart olmaya devam eder — bir uyku laboratuvarında yapılır, kesin uyku mimarisi verileri sağlamak ve bozuklukları teşhis etmek için EEG beyin dalgalarını, EOG göz hareketlerini, EMG kas aktivitesini, EKG kalp ritmini, solunum çabasını, oksijen satürasyonunu ve vücut pozisyonunu izler. Ev Uyku Apnesi Testi (HSAT), şüphelenen uyku apnesi için daha basit bir alternatif olup evde nefes alma, oksijen seviyeleri ve kalp atışını izler. Tüketici giyilebilir cihazlar önemli ölçüde iyileşmiştir — Oura Ring, WHOOP band, Apple Watch ve Fitbit, orta düzeyde doğrulukla uyku aşamalarını tahmin etmek için fotopletismografi (PPG) ve akselerometre kullanır. Aktigrafi, tıbbi dereceli bilek sensörleri kullanarak 1-2 hafta boyunca hareket düzenlerini izler ve sirkadiyen ritim değerlendirmesi için değerlidir. Uyku günlükleri — 2+ hafta boyunca yatış saati, uyanış saati, öznel kalite ve gündüz uyanıklığını kaydederek — değerli trend verileri sağlar.',

    demographicDifferences:
      'Uyku mimarisi demografik özellikler arasında önemli ölçüde değişir. Yaş en etkili faktör: yenidoğanlar uykunun %50\'sini REM\'de geçirir; yetişkinlikte bu %20-25\'e düşer. Yaşlı yetişkinler (65+) azalmış derin uyku yaşarlar — genç yetişkinlerdeki %15-20\'ye kıyasla genellikle toplam uykunun yalnızca %5-10\'u — ve daha sık gece uyanmaları, benzer toplam uyku ihtiyaçlarına rağmen daha hafif, daha parçalı uyku yaşanmasına yol açar. Ergenler, erken okul başlangıç saatlerini sorunlu kılan biyolojik bir sirkadiyen kayması (gecikmeli uyku fazası) yaşarlar — melatonin salgılanmaları yetişkinlere kıyasla 1-2 saat gecikir. Kadınlar genellikle erkeklerden 11-13 dakika daha fazla uykuya ihtiyaç duyar ve uykuları adet döngüsü sırasındaki hormonal dalgalanmalardan (progesteron vücut sıcaklığını artırarak uykuyu bozar), hamilelik (özellikle üçüncü trimester) ve menopoz (sıcak basmaları, gece terlemeleri) daha fazla etkilenir. Genetik kronotip varyasyonları (PER3 geni ve diğerleri) gerçek "gece kuşları" ve "sabah kuşları" yaratır.',

    medicalDisclaimer:
      'Bu uyku döngüsü hesaplayıcı, standart uyku bilimi modellerine dayanan eğitim amaçlı tahminler sağlar ve tıbbi tavsiye veya teşhis olarak değerlendirilmemelidir. Kalite puanı yalnızca zamanlama verilerine dayanan bir yaklaşımdır ve uyku bozukluklarını, solunum anormalliklerini veya uyku kalitesini etkileyen diğer tıbbi durumları tespit edemez. Yeterli uyku süresine rağmen aşırı gündüz uyuklaması, yüksek sesle horlama veya uyku sırasında gözlemlenen nefes duraklamaları, 3 haftadan uzun süre uykuya dalma veya uyku sürekliliği güçlüğü, huzursuz bacaklar veya periyodik uzuv hareketleri, kronik yorgunluk veya onarıcı olmayan uyku, uyku düzeninde önemli değişiklikler gibi kalıcı semptomlar yaşıyorsanız, lütfen bir sağlık uzmanı veya sertifikalı uyku tıbbı uzmanı ile görüşün. Belirli tıbbi durumlar, ilaçlar ve maddeler uyku mimarisini bu hesaplayıcının hesaba katamayacağı şekillerde önemli ölçüde değiştirebilir. Hesaplayıcı sonuçlarına dayanarak reçeteli ilaçları veya uyku tedavilerini asla değiştirmeyin.',

    references: [
      'Ulusal Uyku Vakfı - Uyku Süresi Önerileri (2015)',
      'Amerikan Uyku Tıbbı Akademisi - Uyku Çalışmaları Klinik Uygulama Kılavuzları',
      'Walker M. Neden Uyuruz: Uykunun ve Rüyaların Gücünü Açmak. Scribner. 2017.',
      'Ohayon MM ve ark. Nicel Uyku Parametrelerinin Meta-Analizi. Sleep. 2004;27(7):1255-1273.',
      'Cappuccio FP ve ark. Uyku Süresi ve Tüm Nedenlere Bağlı Ölüm. Sleep. 2010;33(5):585-592.',
      'Hirshkowitz M ve ark. Ulusal Uyku Vakfı Uyku Süresi Önerileri. Sleep Health. 2015;1(1):40-43.',
      'Kleitman N. Uyku ve Uyanıklık. Chicago Üniversitesi Yayınları. 1963.',
      'Carskadon MA, Dement WC. Normal İnsan Uykusu: Genel Bakış. Uyku Tıbbı İlkeleri ve Uygulamaları. 6. baskı. 2017.',
    ],

    tips: [
      'Sirkadiyen ritminizi stabilize etmek için hafta sonları dahil 30 dakikalık bir pencere içinde tutarlı yatış ve uyanış saatlerini sürdürün',
      'Optimal onarıcı uyku için gecede 5-6 tam 90 dakikalık döngü hedefleyin',
      'Yatmadan en az 8 saat önce kafeinden kaçının — "kahve içip uyuyabilseniz" bile kafein derin uykuyu %20 azaltır',
      'Yatak odanızı 18-20°C (64-68°F) arasında tutun — uyku başlangıcı için çekirdek vücut sıcaklığının düşmesi gerekir',
      'Mavi ışık ekran maruziyetini yatmadan 60 dakika önce durdurun veya gün battısından sonra kehribar tonlu gözlük kullanın',
      'Bir uyku döngüsü sırasında uyanır ve sersem hissederseniz, döngü sınırlarıyla daha iyi hizalanmak için alarmınızı 15-20 dakika her iki yönde ayarlamayı deneyin',
      'Uyandıktan sonraki 30 dakika içinde sabah güneş ışığı maruziyeti, sirkadiyen saatinizi sıfırlamanıza ve gece uyku kalitenizi iyileştirmenize yardımcı olur',
      'Düzenli egzersiz uyku kalitesini arttırır, ancak yoğun aktiviteyi yatmadan en az 4 saat önce bitirin',
    ],

    faqs: [
      {
        question: 'Gecede kaç uyku döngüsüne ihtiyacım var?',
        answer:
          'Çoğu yetişkin gecede 5-6 tam uyku döngüsüne, toplam 7,5-9 saatlik gerçek uykuya ihtiyaç duyar. Dört döngü (6 saat) temel işlevsellik için minimumdur, ancak bilişsel performans ve sağlık sonuçları 5-6 döngü ile daha iyidir. Bazı bireyler genetik varyasyonlar (DEC2 geni) nedeniyle 4 döngü ile iyi işleyebilir, ancak bu nadirdir (nüfusun %1-3\'ü). Sürekli 4\'ten az döngü almak (6 saatin altında) önemli ölçüde artmış sağlık riskleriyle ilişkilidir.',
      },
      {
        question: 'Neden 8 saat uyuduktan sonra bile yorgun hissediyorum?',
        answer:
          'Yeterli uyku süresine rağmen yorgun hissetmek genellikle bir miktar sorunundan ziyade bir kalite sorununu gösterir. Yaygın nedenler: döngü ortasında, özellikle derin uyku sırasında uyanmak; teşhis edilmemiş uyku apnesi (yetişkinlerin %2-4\'ünü etkiler); alkol tüketimi (REM uykuyu baskılar); veya tutarsız uyku zamanlama (sirkadiyen ritmi bozar). Gürültü, ışık ve sıcaklık gibi çevre faktörleri de sizi tam olarak uyandırmadan uykuyu parçalayabilir. Yorgunluk devam ederse, bozuklukları dışlamak için bir uyku çalışması düşünün.',
      },
      {
        question: 'En önemli uyku aşaması hangisi?',
        answer:
          'Tüm uyku aşamaları temel işlevlere hizmet eder ve hiçbiri daha "önemli" değildir — birlikte çalışırlar. Derin uyku (N3) fiziksel onarım için kritiktir: büyüme hormonu salgısı, doku onarımı, bağışıklık fonksiyonu güçlendirme ve beyin metabolik atık temizleme. REM uykusu bilişsel işlevler için gereklidir: bellek pekiştirme, duygusal işleme, yaratıcılık ve öğrenme. Hafif uyku (N1/N2) geçişleri kolaylaştırır ve bellek işleme ile motor beceri öğrenimine katkıda bulunur. Herhangi bir aşamayı kaybetmek belirli işlevleri önemli ölçüde bozar — anahtar, dengeli, tam döngülere ulaşmaktır.',
      },
      {
        question: '90 dakikalık uyku döngüsü herkes için geçerli mi?',
        answer:
          '90 dakikalık ortalama uyku araştırmalarında iyi belirlenmiştir, ancak bireyler arasında 80 ile 110 dakika arasında değişir. Kişisel döngü uzunluğunuz, uyku borcu (uyku yoksunluğu olduğunuzda daha uzun derin uyku), alkol (REM\'i baskılar, döngü yapısını değiştirir), ilaçlar, stres ve yaşa göre geceden geceye değişebilir. 90 dakikalık tahmin, planlama amaçları için en güvenilir ortalamadır. Hesaplanan saatlerde uyanırken sürekli sersem hissediyorsanız, kişisel döngü sınırınızı bulmak için alarmınızı 10-15 dakika erken veya geç kaydırmayı deneyin.',
      },
      {
        question: 'Yaş uyku döngülerimi nasıl etkiler?',
        answer:
          'Yaş, uyku mimarisini önemli ölçüde yeniden şekillendirir. Yenidoğanlar uykunun %50\'sini REM\'de geçirir; yetişkinler ortalama %20-25 alır; yaşlı yetişkinler %15-20\'ye düşebilir. Derin uyku (N3) en dramatik şekilde azalır — sağlıklı genç yetişkinler %15-20 derin uyku alırken, 60 yaş üstü yetişkinler yalnızca %5-10 alabilir, bu da daha hafif, daha az onarıcı uyku ile sonuçlanır. Yaşlı yetişkinler ayrıca daha fazla gece uyanmaları ve daha erken doğal uyanış zamanları (sirkadiyen faz ilerlemesi) yaşarlar. Ergenler, doğal olarak daha geç uykuya dalan ve daha geç uyanan gecikmeli bir sirkadiyen kayma yaşarlar.',
      },
      {
        question: 'Hafta sonları kayıp uykuyu telafi edebilir miyim?',
        answer:
          'Kısmen, ancak "sosyal jet lag" (hafta sonlarında uyku zamanlamasını 2+ saat kaydırmak) sirkadiyen ritmi bozar ve Pazartesi sabahlarını zorlaştırır. Araştırmalar, hafta sonu telafi uykusunun hafta içi uyku borcunun bazı etkilerini kısmen tersine çevirebileceğini göstermiştir — bir 2018 çalışması, kısa hafta içi uykuyla ilişkili ölüm riskini azalttığını bulmuştur. Ancak bilişsel performans tamamen iyileşmez ve sirkadiyen bozulmanın kendisi sağlık maliyetleri taşır. Daha iyi strateji, tutarlı uyku zamanlamasını (30-60 dakika içinde) sürdürmek ve borç birikiyorsa hafta içi uykusunu kademeli olarak uzatmaktır.',
      },
      {
        question: '20 dakika içinde uykuya dalamazsam ne yapmalıyım?',
        answer:
          '15-20 dakika içinde uykuya dalmadıysanız, uyku uzmanları yataktan kalkmanızı ve loş aydınlatmada sakin, uyarıcı olmayan bir aktivite (fiziksel kitap okuma, hafif esneme, sakin ses dinleme) yapmanızı ve uyku hali hissettiğinizde yatağa dönmenizi önerir. Bu, beyninizin yatağı uyanıklıkla ilişkilendirmesini önler — Uykusuzluk için Bilişsel Davranışçı Terapinin (CBT-I) temel ilkesi. Saati kontrol etmekten, ekran kullanmaktan veya yemek yemekten kaçının. Bu düzenli olarak (3+ hafta boyunca haftada 3+ gece) yaşanırsa, uykusuzluk veya anksiyete bozukluklarını işaret edebileceği için bir sağlık uzmanı ile görüşün.',
      },
      {
        question: 'Bu uyku döngüsü hesaplayıcısı ne kadar doğru?',
        answer:
          'Bu hesaplayıcı, iyi belirlenmiş uyku bilimi ilkelerine (90 dakikalık döngüler, yaş bazlı öneriler, aşama dağılım desenleri) dayanan makul bir tahmin sağlar. Ancak fizyolojik sinyalleri izleyen klinik uyku çalışmaları (polisomnografi) ve hatta tüketici uyku izleyicilerinin doğruluğunu eşleştiremez. Kalite puanı yalnızca zamanlamaya dayanır ve uyku bozuklukları, çevre faktörleri, madde kullanımı veya bireysel biyolojik varyasyonu hesaba katmaz. Bunu bir planlama aracı ve öz farkındalık yardımcısı olarak kullanın, teşhis aracı olarak değil. Önerilen zamanlamalar nasıl hissettiğinizi sürekli olarak iyileştirmiyorsa, profesyonel değerlendirme önerilir.',
      },
    ],
  },
};
