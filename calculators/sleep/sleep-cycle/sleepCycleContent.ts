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
      'Uyku dongusu hesaplayici, yatis saatiniz, uyanis saatiniz ve yasiniz arasindaki iliskiyi inceleyerek tum uyku mimarinizi analiz eden gelismis bir aractir. Yalnizca optimal yatis saati oneren basit bir uyku hesaplayicisinin aksine, bu arac hem gercek yatis hem de uyanis saatinizi alarak kapsamli bir uyku kalitesi analizi uretir. Her gece, beyniniz yaklasik 90 dakikada bir farkli uyku asamalarindan gecer: hafif uyku (N1 ve N2), derin uyku (N3/yavas dalga uykusu) ve REM (Hizli Goz Hareketi) uykusu. Bu asamalarin dagilimi gece boyunca tahmin edilebilir bir duzen izler — vucut fiziksel restorasyonu oncelik olarak belirledigi icin derin uyku gecenin ilk yarisinda baskindir, REM uyku ise bellek pekistirme, duygusal duzenleme ve yaraticiligi destekleyerek ikinci yarida artar. Kisisel uyku dongusu durzenini anlamak cok onemlidir cunku uyku kalitesi yalnizca sureye degil, tam dongulerin tamamlanmasina ve uyku asamalarinin dogru dengesinin elde edilmesine baglidir. Bu hesaplayici, dongu tamamlanmanizi, yas grubunuz icin sure yeterliliginizi ve dongu hizalamanizi degerlendirerek 0 ile 100 arasinda kapsamli bir kalite puani olusturur. Ardindan, her dongunun hafif, derin ve REM asamalarindan nasil gectigini gosteren bir zaman cizelgesiyle tahmini uyku mimarinizi gorsellestirir. Sonuc, zamanlama ayarlamalari icin kisisellestirilmis oneriler, haftalik uyku projeksiyonlari ve belirli yatis saatinizden hesaplanan cevre optimizasyonu ipuclarini icerir. Ulusal Uyku Vakfi ve Amerikan Uyku Tibbi Akademisi arastirmalari, uyku kalitesinin — yalnizca miktarin degil — gunduz uyanikligi, bilissel performans, bagisiklik fonksiyonu ve uzun vadeli saglik sonuclarinin temel ongorusucu oldugunu tutarli bir sekilde gostermektedir.',

    howToCalculate:
      'Uyku dongusu hesaplayicisini kullanmak icin dort bilgi girin: yatis saatiniz (yataga girdiginiz zaman), uyanis saatiniz (alarminiz caldiginda veya dogal olarak uyandiginizda), yas grubunuz (onerilen uyku suresini belirler) ve tahmini uykuya dalma sureniz (nufus ortalamarina gore varsayilan 14 dakika). Hesaplayici daha sonra birkac hesaplama yapar. Ilk olarak, yatakta gecirdiginiz toplam sureyi hesaplar ve gercek uyku suresini belirlemek icin uykuya dalma gecikmesini cikarir. Bunu tam uyku donguleri ve kalan kismi donguyu bulmak icin 90 dakikaya boler. Ornegin, gece 23:00\'te yatip sabah 07:00\'de kalkirsaniz ve 14 dakika uykuya dalma suresiyle gercek uyku sureniz 466 dakikadir (7 saat 46 dakika), bu da kismi altinci dongunun 16 dakikasi ile 5 tam dongu verir. Kalite puani algoritmasi uc faktoru tartar: dongu sayisi (%40 — optimal 5-6 dongu), yas bazli onerilere gore sure eslesme (%35) ve dongu hizalamasi (%25 — bir dongu sinirinda uyanmaya ne kadar yakin oldugunuz). Her faktor 0-100 olarak puanlanir ve agirlikli bir son puana birlestirilir. Hesaplayici daha sonra her dongu pozisyonu icin uyku asamasi dagilimini modelleyerek derin uykunun dogal olarak nasil azaldigini ve REM\'in gece boyunca nasil arttigini gosterir. Son olarak, yatis saatinizden hesaplanan belirli saatlerle kisisellestirilmis ipuclari olusturur — son kafein aliminiz (yatmadan 8 saat once), son agir ogun (3 saat once) ve ekran kesme zamani (1 saat once) gibi.',

    formulaDetails:
      'Uyku dongusu hesaplayici, uyku bilimi arastirmalarina dayanan cok faktorlu bir kalite degerlendirme algoritmasi kullanir. Temel formul: Kalite Puani = (Dongu Sayisi Puani x 0,40) + (Sure Puani x 0,35) + (Hizalama Puani x 0,25). Dongu Sayisi Puanlamasi: 5-6 tam dongu = 100 puan, 4 dongu = 80, 7 dongu = 85, 3 dongu = 50, 3\'ten az veya 7\'den fazla = 20. Bu, cogu yetiskin icin 5-6 dongunun (7,5-9 saat) optimal uyku mimarisini temsil ettigi bilimsel gorusu yansitir. Sure Puanlamasi, gercek uyku suresini Ulusal Uyku Vakfi\'ndan yasa ozgu onerilerle karsilastirir: 18-64 yas yetiskinler 7-9 saat (optimal 8) ihtiyac duyar, 65+ yas yasli yetiskinler 7-8 saat (optimal 7,5), gencler 13-17 yas 8-10 saat. Onerilen aralikta = 100 puan, 30 dakika icinde = 80, 1 saat icinde = 60, 2 saat icinde = 40, otesi = 20. Hizalama Puanlamasi kismi dongu kalanini degerlendirir: 0 dakika (mukemmel hizalama) = 100, 1-15 dakika = 85, 16-30 dakika = 60, 31-60 dakika = 30, 61-89 dakika = 50. Uyku asamasi modellemesi, dongu pozisyonu basina arastirma tabanli dagilimlar kullanir: Dongu 1, vucut fiziksel restorasyonu onceliklendirdigini yansitan %40 derin uykuya sahiptir; Dongu 5-6\'ya kadar, derin uyku %5-10\'a duser ve REM bilissel islemeye gecisi yansitarak %30\'a yukselir.',

    categories: [
      {
        range: '0-39',
        label: 'Zayif Uyku Kalitesi',
        description:
          'Uyku duzeniniz onemli iyilestirme alanina sahip. Cok az dongu aliyor, onerilen surenin cok disinda uyuyor veya dongu ortasinda uyaniyor olabilirsiniz. Programinizi ayarlamayi ve bu desen devam ederse bir uyku uzmani ile gorusmeyi dusunun.',
        color: '#EF4444',
      },
      {
        range: '40-59',
        label: 'Orta Uyku Kalitesi',
        description:
          'Uykunuz yeterli ama iyilestirilebilir. Onerilen surenin biraz altinda veya ustunde olabilirsiniz ya da uyanis saatiniz dongu sinirlariyla iyi hizalanmiyor olabilir. Kucuk zamanlama ayarlamalari kendinizi nasil dinlenmis hissettiginizi onemli olcude iyilestirebilir.',
        color: '#F59E0B',
      },
      {
        range: '60-79',
        label: 'Iyi Uyku Kalitesi',
        description:
          'Uyku duzeniniz, iyi dongu tamamlama ve makul sure ile saglamdir. Zamanlama veya cevre kosullarindaki kucuk optimizasyonlar sizi mukemmel araliga tasiyabilir. Gun boyunca iyi bir performans gostermeniz muhtemeldir.',
        color: '#3B82F6',
      },
      {
        range: '80-100',
        label: 'Mukemmel Uyku Kalitesi',
        description:
          'Uyku duzeniniz, tam donguler, yasiniza uygun sure ve iyi dongu hizalamasi ile iyi optimize edilmistir. Uzun vadeli saglik yararlari icin bu deseni surdurun. Gun boyunca dinlenmis ve uyanik hissetmelisiniz.',
        color: '#10B981',
      },
    ],

    interpretation:
      'Uyku kalitesi puaniniz uyku sagliginin uc boyutunu yansitir. Yuksek bir dongu sayisi puani (toplamlarin %40\'i), yeterince 90 dakikalik dongu tamamladiginiz anlamina gelir — onarici uykunun yapi taslari. Her dongu sizi hafif uyku (kaslarin gevser ve kalp atisi yavasar), derin uyku (buyume hormonu serbest birakildigi ve doku onarimi gerceklestigi) ve REM uykusundan (anilarin pekistirildigi ve duyguranin islendigi) gecirir. Sure puani (%35), toplam uykunuzu yas grubunuz icin bilimsel olarak belirlenmis onerilerle karsilastirir. Hem cok az hem de cok fazla uyku saglik riskleriyle iliskilidir. Hizalama puani (%25), dogal bir dongu sinirinin yakininda uyanip uyanmadiginizi olcer — dongu ortasinda, ozellikle derin uyku sirasinda uyanmak, 30+ dakika surebilen uyku ataleti (sersemlik) yaratir. 80+ puan, uyku mimarinizin iyi optimize edildigini gosterir. 60-79 puanlar iyi ama iyilestirilebilir uykuyu gosterir. 60\'in altinda, uyku programinizda anlamli degisikliklerin gunduz uyanikliginizi, ruh halinizi ve bilissel performansinizi iyilestirebilecegini gosterir.',

    limitations:
      'Bu hesaplayici standart bir 90 dakikalik uyku dongusu modeli kullanir, ancak bireysel dongu uzunluklari aslinda 80 ile 110 dakika arasinda degisir ve uyku borcu, alkol tuketimi, ilaclar ve stres duzeyine gore geceden geceye degisebilir. Asama dagilim yuzdeleri nufus ortalamaridir — bireysel farklilik onemlidir ve gercek asama dagilimi yalnizca polisomnografi (klinik uyku calisma) veya yuksek kaliteli uyku izleyicileriyle olculebilir. Hesaplayici, uyku apnesi, huzursuz bacak sendromu, periyodik uzuv hareket bozuklugu veya uykusuzluk gibi zamanlama ne olursa olsun uyku mimarisini ciddi sekilde parcalayabilen uyku bozukluklarini hesaba katmaz. Uyku kalitesi burada yakalanmayan faktorlerden etkilenir: oda sicakligi, gurultu seviyeleri, isik maruziyeti, yatak konforu, agri, anksiyete, kafein metabolizma hizi (genetik olarak degiskendir) ve ilaclar. Uykuya dalma suresi tahmini bir ortalamadir — uyku anksiyetesi veya uykusuzlugu olan bireyler 30-60+ dakika surebilir.',

    healthRisks:
      'Kronik kotu uyku kalitesi ve yetersiz uyku donguleri, gunduz uyukluklamasinin otesinde genis kapsamli saglik sonuclarina sahiptir. Kardiyovaskuler riskler onemli olcude artar — European Heart Journal\'daki bir meta-analiz, kisa uyucularin (6 saatin altinda) koroner kalp hastaligi gelistirme riskinin %48 daha yuksek oldugunu ve inme riskinin %15 daha yuksek oldugunu bulmistur. Uyku yoksunlugu glukoz metabolizmasini ve insulin duyarliligini bozar; calismalar gecede 6 saatten az uyumanin tip 2 diyabet riskini %28 artirdigini gostermistir. Bagisiklik sistemi zarar gorur: Sleep dergisinde yayinlanan arastirma, 7 saatten az uyuyan kisilerin virus maruziyetinden sonra soguk alginligi gelistirme olasiliklarinin 8+ saat uyuyanlara gore 2,94 kat daha fazla oldugunu gostermistir. Ruh sagligi derinden etkilenir — yetersiz REM uykusu duygusal duzenlemeyi bozar ve 2,5 kat artmis depresyon riskiyle iliskilendirilir. Bilissel gerileme hizlanir: derin uyku sirasinda, glimfatik sistem Alzheimer hastaligi ile iliskili beta-amiloid plak temizler ve kronik uyku bozulmasi demans riskini artirabilir.',

    alternativeMeasures:
      'Hesaplayici tabanli tahminlerin otesinde daha hassas uyku degerlendirmesi icin birkac arac ve yontem mevcuttur. Polisomnografi (PSG) altin standart olmaya devam eder — bir uyku laboratuvarinda yapilir, kesin uyku mimarisi verileri saglamak ve bozukluklari teshis etmek icin EEG beyin dalgalarini, EOG goz hareketlerini, EMG kas aktivitesini, EKG kalp ritmini, solunum cabasini, oksijen saturasyonunu ve vucut pozisyonunu izler. Ev Uyku Apnesi Testi (HSAT), suphelenen uyku apnesi icin daha basit bir alternatif olup evde nefes alma, oksijen seviyeleri ve kalp atisini izler. Tuketici giyilebilir cihazlar onemli olcude iyilesmistir — Oura Ring, WHOOP band, Apple Watch ve Fitbit, orta duzeyde dogrulukla uyku asamalarini tahmin etmek icin fotoplejtismografi (PPG) ve akselerometre kullanir. Aktigrafi, tibbi dereceli bilek sensorleri kullanarak 1-2 hafta boyunca hareket durzenlerini izler ve sirkadiyen ritim degerlendirmesi icin degerlidir. Uyku gunlukleri — 2+ hafta boyunca yatis saati, uyanis saati, oznel kalite ve gunduz uyanikligini kaydederek — degerli trend verileri saglar.',

    demographicDifferences:
      'Uyku mimarisi demografik ozellikler arasinda onemli olcude degisir. Yas en etkili faktor: yenidoganlar uykunun %50\'sini REM\'de gecirir; yetiskinlikte bu %20-25\'e duser. Yasli yetiskinler (65+) azalmis derin uyku yasarlar — genc yetiskinlerdeki %15-20\'ye kiyasla genellikle toplam uykunun yalnizca %5-10\'u — ve daha sik gece uyanmalari, benzer toplam uyku ihtiyaclarina ragmen daha hafif, daha parcali uyku yasanmasina yol acar. Ergenler, erken okul baslangic saatlerini sorunlu kilan biyolojik bir sirkadiyen kaymasi (gecikmeli uyku fazasi) yasarlar — melatonin salgilanmalari yetiskinlere kiyasla 1-2 saat gecikir. Kadinlar genellikle erkeklerden 11-13 dakika daha fazla uykuya ihtiyac duyar ve uykulari adet dongusu sirasindaki hormonal dalgalanmalardan (progesteron vucut sicakligini artirarak uykuyu bozar), hamilelik (ozellikle ucuncu trimester) ve menopoz (sicak basmalari, gece terlemeleri) daha fazla etkilenir. Genetik kronotip varyasyonlari (PER3 geni ve digerleri) gercek "gece kuslari" ve "sabah kuslari" yaratir.',

    medicalDisclaimer:
      'Bu uyku dongusu hesaplayici, standart uyku bilimi modellerine dayanan egitim amaçli tahminler saglar ve tibbi tavsiye veya teshis olarak degerlendirilmemelidir. Kalite puani yalnizca zamanlama verilerine dayanan bir yaklaşimdir ve uyku bozukluklarini, solunum anormalliklerini veya uyku kalitesini etkileyen diger tibbi durumlari tespit edemez. Yeterli uyku suresine ragmen asiri gunduz uyukluklamasi, yuksek sesle horlama veya uyku sirasinda gozlemlenen nefes duraklamalari, 3 haftadan uzun sure uykuya dalma veya uyku surekliligi guclugu, huzursuz bacaklar veya periyodik uzuv hareketleri, kronik yorgunluk veya onarici olmayan uyku, uyku duzeninde onemli degisiklikler gibi kalici semptomlar yasiyorsaniz, lutfen bir saglik uzmani veya sertifikali uyku tibbi uzmani ile gorusun. Belirli tibbi durumlar, ilaclar ve maddeler uyku mimarisini bu hesaplayicinin hesaba katamayacagi sekillerde onemli olcude degistirebilir. Hesaplayici sonuclarina dayanarak receteli ilaclari veya uyku tedavilerini asla degistirmeyin.',

    references: [
      'Ulusal Uyku Vakfi - Uyku Suresi Onerileri (2015)',
      'Amerikan Uyku Tibbi Akademisi - Uyku Calismalari Klinik Uygulama Kilavuzlari',
      'Walker M. Neden Uyuruz: Uykunun ve Ruyalarin Gucunu Acmak. Scribner. 2017.',
      'Ohayon MM ve ark. Nicel Uyku Parametrelerinin Meta-Analizi. Sleep. 2004;27(7):1255-1273.',
      'Cappuccio FP ve ark. Uyku Suresi ve Tum Nedenlere Bagli Olum. Sleep. 2010;33(5):585-592.',
      'Hirshkowitz M ve ark. Ulusal Uyku Vakfi Uyku Suresi Onerileri. Sleep Health. 2015;1(1):40-43.',
      'Kleitman N. Uyku ve Uyaniklik. Chicago Universitesi Yayinlari. 1963.',
      'Carskadon MA, Dement WC. Normal Insan Uykusu: Genel Bakis. Uyku Tibbi Ilkeleri ve Uygulamalari. 6. baski. 2017.',
    ],

    tips: [
      'Sirkadiyen ritminizi stabilize etmek icin hafta sonlari dahil 30 dakikalik bir pencere icinde tutarli yatis ve uyanis saatlerini surdurun',
      'Optimal onarici uyku icin gecede 5-6 tam 90 dakikalik dongu hedefleyin',
      'Yatmadan en az 8 saat once kafeinden kacinin — "kahve icip uyuyabilseniz" bile kafein derin uykuyu %20 azaltir',
      'Yatak odanizi 18-20°C (64-68°F) arasinda tutun — uyku baslangici icin cekirdek vucut sicakliginin dusmesi gerekir',
      'Mavi isik ekran maruziyetini yatmadan 60 dakika once durdurun veya gun battisindan sonra kehribar tonlu gozluk kullanin',
      'Bir uyku dongusu sirasinda uyanir ve sersem hissederseniz, dongu sinirlariyla daha iyi hizalanmak icin alarminizi 15-20 dakika her iki yonde ayarlamayi deneyin',
      'Uyandiktan sonraki 30 dakika icinde sabah gunes isigi maruziyeti, sirkadiyen saatinizi sifirlamaniza ve gece uyku kalitenizi iyilestirmenize yardimci olur',
      'Duzenli egzersiz uyku kalitesini arttirir, ancak yogun aktiviteyi yatmadan en az 4 saat once bitirin',
    ],

    faqs: [
      {
        question: 'Gecede kac uyku dongusune ihtiyacim var?',
        answer:
          'Cogu yetiskin gecede 5-6 tam uyku dongusune, toplam 7,5-9 saatlik gercek uykuya ihtiyac duyar. Dort dongu (6 saat) temel islevsellik icin minimumdur, ancak bilissel performans ve saglik sonuclari 5-6 dongu ile daha iyidir. Bazi bireyler genetik varyasyonlar (DEC2 geni) nedeniyle 4 dongu ile iyi isleyebilir, ancak bu nadirdir (nufusun %1-3\'u). Surekli 4\'ten az dongu almak (6 saatin altinda) onemli olcude artmis saglik riskleriyle iliskilidir.',
      },
      {
        question: 'Neden 8 saat uyuduktan sonra bile yorgun hissediyorum?',
        answer:
          'Yeterli uyku suresine ragmen yorgun hissetmek genellikle bir miktar sorunundan ziyade bir kalite sorununu gosterir. Yaygin nedenler: dongu ortasinda, ozellikle derin uyku sirasinda uyanmak; teshis edilmemis uyku apnesi (yetiskinlerin %2-4\'unu etkiler); alkol tuketimi (REM uykuyu basklar); veya tutarsiz uyku zamanlama (sirkadiyen ritmi bozar). Gurultu, isik ve sicaklik gibi cevre faktorleri de sizi tam olarak uyandirmadan uykuyu parcalayabilir. Yorgunluk devam ederse, bozukluklari dislamak icin bir uyku calisma dusunun.',
      },
      {
        question: 'En onemli uyku asamasi hangisi?',
        answer:
          'Tum uyku asamalari temel islevlere hizmet eder ve hicbiri daha "onemli" degildir — birlikte calisirlar. Derin uyku (N3) fiziksel onarim icin kritiktir: buyume hormonu salgisi, doku onarimi, bagisiklik fonksiyonu guclendirme ve beyin metabolik atik temizleme. REM uykusu bilissel islevler icin gereklidir: bellek pekistirme, duygusal isleme, yaraticilik ve ogrenme. Hafif uyku (N1/N2) gecisleri kolaylastirir ve bellek isleme ile motor beceri ogrenimine katkida bulunur. Herhangi bir asamayi kaybetmek belirli islevleri onemli olcude bozar — anahtar, dengeli, tam dongulere ulasmaktir.',
      },
      {
        question: '90 dakikalik uyku dongusu herkes icin gecerli mi?',
        answer:
          '90 dakikalik ortalama uyku arastirmalarinda iyi belirlenmistir, ancak bireyler arasinda 80 ile 110 dakika arasinda degisir. Kisisel dongu uzunlugunuz, uyku borcu (uyku yoksunlugu oldugunuzda daha uzun derin uyku), alkol (REM\'i basklar, dongu yapisini degistirir), ilaclar, stres ve yasa gore geceden geceye degisebilir. 90 dakikalik tahmin, planlama amaclari icin en guvenilir ortalamadir. Hesaplanan saatlerde uyanirken surekli sersem hissediyorsaniz, kisisel dongu sinirinizi bulmak icin alarminizi 10-15 dakika erken veya gec kaydirmayi deneyin.',
      },
      {
        question: 'Yas uyku dongulemi nasil etkiler?',
        answer:
          'Yas, uyku mimarisini onemli olcude yeniden sekillendirr. Yenidoganlar uykunun %50\'sini REM\'de gecirir; yetiskinler ortalama %20-25 alir; yasli yetiskinler %15-20\'ye dusebilir. Derin uyku (N3) en dramatik sekilde azalir — saglikli genc yetiskinler %15-20 derin uyku alirken, 60 yas ustu yetiskinler yalnizca %5-10 alabilir, bu da daha hafif, daha az onarici uyku ile sonuclanir. Yasli yetiskinler ayrica daha fazla gece uyanmalari ve daha erken dogal uyanis zamanlari (sirkadiyen faz ilerlemesi) yasarlar. Ergenler, dogal olarak daha gec uykuya dalan ve daha gec uyanan gecikmeli bir sirkadiyen kayma yasarlar.',
      },
      {
        question: 'Hafta sonlari kayip uykuyu telafi edebilir miyim?',
        answer:
          'Kismi olarak, ancak "sosyal jet lag" (hafta sonlarinda uyku zamanlamasini 2+ saat kaydirmak) sirkadiyen ritmi bozar ve Pazartesi sabahlarini zorlastirir. Arastirmalar, hafta sonu telafi uykusunun hafta ici uyku borcunun bazi etkilerini kismi olarak tersine cevirebilecegini gostermistir — bir 2018 calismasi, kisa hafta ici uykuyla iliskili olum riskini azalttigini bulmistur. Ancak bilissel performans tamamen iyilesmez ve sirkadiyen bozulmanin kendisi saglik maliyetleri tasir. Daha iyi strateji, tutarli uyku zamanlamasini (30-60 dakika icinde) surdurmek ve borc birikiyorsa hafta ici uykusunu kademeli olarak uzatmaktir.',
      },
      {
        question: '20 dakika icinde uykuya dalamazsam ne yapmaliyim?',
        answer:
          '15-20 dakika icinde uykuya dalmadiysaniz, uyku uzmanlari yataktan kalkmanizi ve loş isiklandirmada sakin, uyarici olmayan bir aktivite (fiziksel kitap okuma, hafif esneme, sakin ses dinleme) yapmanizi ve uyku hali hissettiginizde yataga donmenizi onerir. Bu, beyninizin yatagi uyaniklikla iliskilendirmesini onler — Uykusuzluk icin Bilissel Davranisci Terapinin (CBT-I) temel ilkesi. Saati kontrol etmekten, ekran kullanmaktan veya yemek yemekten kacinin. Bu duzenli olarak (3+ hafta boyunca haftada 3+ gece) yasanirsa, uykusuzluk veya anksiyete bozukluklarini isaret edebilecegi icin bir saglik uzmani ile gorusun.',
      },
      {
        question: 'Bu uyku dongusu hesaplayicisi ne kadar doğru?',
        answer:
          'Bu hesaplayici, iyi belirlenmis uyku bilimi ilkelerine (90 dakikalik donguler, yas bazli oneriler, asama dagilim desenleri) dayanan makul bir tahmin saglar. Ancak fizyolojik sinyalleri izleyen klinik uyku calismalari (polisomnografi) ve hatta tuketici uyku izleyicilerinin dogrulugunu eslesiremez. Kalite puani yalnizca zamanlamaya dayanir ve uyku bozukluklari, cevre faktorleri, madde kullanimi veya bireysel biyolojik varyasyonu hesaba katmaz. Bunu bir planlama araci ve oz farkindelik yardimcisi olarak kullanin, teshis araci olarak degil. Onerilen zamanlamalar nasil hissettiginizi surekli olarak iyilestirmiyorsa, profesyonel degerlendirme onerilir.',
      },
    ],
  },
};
