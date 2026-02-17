import { CalculatorContent } from '@/types/calculator';

export const gad7Content: CalculatorContent = {
  en: {
    whatIs:
      'The Generalized Anxiety Disorder 7-item (GAD-7) scale is one of the most widely used and validated screening tools for generalized anxiety disorder (GAD) and other anxiety conditions. Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke, and colleagues in 2006, the GAD-7 was designed to be a brief, practical instrument that can be self-administered by patients or used by clinicians in primary care and mental health settings. The scale consists of 7 questions that assess how often a person has been bothered by specific anxiety symptoms over the past two weeks, using a 4-point Likert scale ranging from 0 ("Not at all") to 3 ("Nearly every day"). Total scores range from 0 to 21, with higher scores indicating greater anxiety severity. The GAD-7 has demonstrated excellent reliability (Cronbach alpha = 0.92) and good sensitivity (89%) and specificity (82%) for detecting generalized anxiety disorder at a cutoff score of 10. Beyond GAD, the scale has also shown utility in screening for panic disorder, social anxiety disorder, and post-traumatic stress disorder, making it a versatile tool in mental health assessment.',

    howToCalculate:
      'To complete the GAD-7, respond to each of the 7 questions by selecting how often you have been bothered by each symptom over the past 2 weeks. The response options are: 0 = Not at all, 1 = Several days, 2 = More than half the days, 3 = Nearly every day. After answering all 7 questions, your total score is calculated by summing all responses. For example, if you answered: Question 1 = 2, Question 2 = 3, Question 3 = 1, Question 4 = 2, Question 5 = 1, Question 6 = 2, Question 7 = 1, your total score would be 2+3+1+2+1+2+1 = 12, indicating moderate anxiety. The scoring ranges are: 0-4 (minimal anxiety), 5-9 (mild anxiety), 10-14 (moderate anxiety), and 15-21 (severe anxiety).',

    formulaDetails:
      `The GAD-7 scoring system is straightforward but clinically meaningful. Each of the 7 items is scored on a 0-3 scale, giving a possible total score range of 0-21. The cutoff scores were established through rigorous validation studies published in the Annals of Internal Medicine (2006). A score of 10 or higher is the recommended cutoff for identifying probable GAD, with a sensitivity of 89% and specificity of 82%. The scoring thresholds are: Minimal (0-4): Scores in this range suggest the person is experiencing few or no anxiety symptoms. No clinical intervention is typically needed, but monitoring is recommended. Mild (5-9): Indicates mild anxiety symptoms that may benefit from self-help strategies, stress management, and watchful monitoring. Moderate (10-14): Suggests clinically significant anxiety. Further evaluation by a mental health professional is recommended. Cognitive behavioral therapy (CBT) and/or medication may be considered. Severe (15-21): Indicates severe anxiety that likely requires active treatment including psychotherapy and/or pharmacotherapy. Immediate professional evaluation is strongly recommended. The GAD-7 score can also be used as a continuous measure to track anxiety severity over time, making it useful for monitoring treatment response. A change of 5 or more points is considered clinically meaningful.`,

    categories: [
      {
        range: '0-4',
        label: 'Minimal Anxiety',
        description:
          'Few or no anxiety symptoms present. Continue healthy habits and self-care practices. No clinical intervention typically needed.',
        color: '#10B981',
      },
      {
        range: '5-9',
        label: 'Mild Anxiety',
        description:
          'Mild anxiety symptoms present. Self-help strategies, stress management, and relaxation techniques may be helpful. Monitor symptoms.',
        color: '#3B82F6',
      },
      {
        range: '10-14',
        label: 'Moderate Anxiety',
        description:
          'Clinically significant anxiety symptoms. Professional evaluation recommended. Consider cognitive behavioral therapy and/or medication.',
        color: '#F59E0B',
      },
      {
        range: '15-21',
        label: 'Severe Anxiety',
        description:
          'Severe anxiety symptoms requiring active treatment. Immediate professional evaluation strongly recommended. Psychotherapy and/or pharmacotherapy likely needed.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'The GAD-7 score provides a snapshot of anxiety severity over the past two weeks. A score of 0-4 suggests minimal anxiety that is within normal limits. A score of 5-9 indicates mild anxiety that may cause some discomfort but is generally manageable with self-care strategies. A score of 10-14 represents moderate anxiety that is clinically significant and warrants professional evaluation. A score of 15-21 indicates severe anxiety that likely impacts daily functioning and requires active treatment. It is important to note that the GAD-7 is a screening tool, not a diagnostic instrument. A high score does not automatically mean you have an anxiety disorder, and a low score does not guarantee the absence of anxiety problems. Scores should be interpreted in the context of the individual\'s overall clinical presentation, including functional impairment, duration of symptoms, and co-occurring conditions. Additionally, the GAD-7 primarily screens for generalized anxiety disorder but may not fully capture symptoms of other anxiety disorders such as specific phobias, obsessive-compulsive disorder, or separation anxiety disorder. For a definitive diagnosis, a comprehensive clinical evaluation by a qualified mental health professional is necessary.',

    limitations:
      'While the GAD-7 is a well-validated screening tool, it has several important limitations. First, the GAD-7 is designed primarily for screening generalized anxiety disorder and may not adequately capture symptoms of other anxiety disorders such as social anxiety disorder, specific phobias, obsessive-compulsive disorder, or panic disorder, although it has shown some utility for these conditions. Second, as a self-report measure, the GAD-7 relies on the individual\'s subjective assessment and may be influenced by response bias, social desirability, or difficulty in accurately reporting symptom frequency. Third, the GAD-7 does not assess the duration of symptoms beyond the past two weeks, which is important for diagnosing GAD (which requires symptoms to be present for at least 6 months). Fourth, scores may be influenced by temporary stressors, medical conditions (such as thyroid disorders or cardiac conditions), medication side effects, or substance use that can mimic anxiety symptoms. Fifth, the GAD-7 has been primarily validated in adult populations, and its use in adolescents and older adults may require additional considerations. Sixth, cultural factors can influence how anxiety is experienced and expressed, and the GAD-7 may not capture culturally specific anxiety presentations. Finally, the GAD-7 should never be used as the sole basis for clinical decisions; it should always be interpreted alongside a comprehensive clinical interview and additional assessment tools.',

    healthRisks:
      'Untreated anxiety disorders carry significant health risks that extend beyond psychological distress. Chronic anxiety activates the body\'s stress response system, leading to sustained elevation of cortisol and adrenaline levels, which can damage multiple organ systems over time. Cardiovascular risks include increased blood pressure, elevated heart rate, and higher rates of coronary artery disease. A meta-analysis published in the British Medical Journal found that anxiety was associated with a 26% increased risk of coronary heart disease and a 48% increased risk of cardiac death. Gastrointestinal effects include irritable bowel syndrome (IBS), acid reflux, nausea, and appetite changes. The gut-brain axis means that anxiety can directly affect digestive function. Immune system impacts include suppressed immune function, increased susceptibility to infections, and potential acceleration of autoimmune conditions. Sleep disturbances are extremely common in anxiety disorders, including difficulty falling asleep, staying asleep, or experiencing restful sleep, which further compounds health problems. Chronic anxiety increases the risk of developing depression, with approximately 60% of people with anxiety also experiencing depressive symptoms. Substance use disorders are also more common, as individuals may self-medicate with alcohol, drugs, or medications. Cognitive effects include difficulty concentrating, memory problems, and impaired decision-making, which can affect work performance and daily functioning. Chronic muscle tension from anxiety can lead to headaches, back pain, and other musculoskeletal problems.',

    alternativeMeasures:
      'Several other validated tools exist for assessing anxiety alongside or instead of the GAD-7. The Beck Anxiety Inventory (BAI) is a 21-item self-report measure that focuses more on somatic and cognitive symptoms of anxiety, making it useful for differentiating anxiety from depression. The State-Trait Anxiety Inventory (STAI) distinguishes between state anxiety (current feelings) and trait anxiety (general tendency), providing a more nuanced assessment. The Hamilton Anxiety Rating Scale (HAM-A) is a clinician-administered 14-item scale widely used in research settings. The Penn State Worry Questionnaire (PSWQ) specifically measures the tendency toward excessive worry, a core feature of GAD. The Anxiety Sensitivity Index (ASI) assesses fear of anxiety-related sensations and is particularly useful for panic disorder screening. For specific anxiety disorders, specialized tools include the Social Phobia Inventory (SPIN) for social anxiety, the Panic Disorder Severity Scale (PDSS) for panic disorder, the Yale-Brown Obsessive Compulsive Scale (Y-BOCS) for OCD, and the PTSD Checklist (PCL-5) for post-traumatic stress disorder. The PHQ-9 (Patient Health Questionnaire-9) is often used alongside the GAD-7 to screen for co-occurring depression, as anxiety and depression frequently overlap. A comprehensive mental health assessment typically combines multiple tools with clinical interviews for the most accurate evaluation.',

    demographicDifferences:
      'Anxiety disorders show significant variation across demographic groups. Women are approximately twice as likely as men to be diagnosed with generalized anxiety disorder, with lifetime prevalence rates of about 7.7% for women compared to 4.6% for men. This gender difference emerges during adolescence and persists throughout life. Hormonal factors, including fluctuations in estrogen and progesterone, contribute to increased vulnerability during puberty, the premenstrual period, pregnancy, postpartum, and perimenopause. Age influences both the presentation and prevalence of anxiety. Anxiety disorders typically first appear in childhood or early adulthood, with the median age of onset for GAD being 31 years. In older adults, anxiety may present differently, often co-occurring with medical conditions, cognitive decline, or depression, and may be misattributed to normal aging. Cultural background significantly affects how anxiety is experienced and expressed. Some cultures emphasize somatic symptoms (headaches, stomach problems) over psychological symptoms (worry, fear), which can affect GAD-7 scores. Socioeconomic factors also play a role, with individuals facing financial instability, job insecurity, or housing concerns reporting higher anxiety levels. LGBTQ+ individuals experience higher rates of anxiety disorders, largely attributed to minority stress, discrimination, and social stigma. Veterans and military personnel have elevated anxiety rates related to combat exposure and traumatic experiences. People with chronic medical conditions such as heart disease, diabetes, or chronic pain are at increased risk for anxiety disorders.',

    medicalDisclaimer:
      'This GAD-7 anxiety screening tool is provided for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The GAD-7 is a screening instrument, not a diagnostic tool, and a high score does not constitute a diagnosis of generalized anxiety disorder or any other mental health condition. This tool cannot replace a comprehensive clinical evaluation by a qualified mental health professional, psychiatrist, or physician. If you are experiencing significant anxiety symptoms, panic attacks, or any thoughts of self-harm, please seek immediate professional help. Contact your healthcare provider, call a crisis hotline, or go to your nearest emergency room. Results from this screening should be discussed with a qualified healthcare professional who can provide proper evaluation, diagnosis, and treatment recommendations. Treatment for anxiety disorders may include psychotherapy (such as cognitive behavioral therapy), medication, or a combination of both, and should always be supervised by licensed professionals. Do not start, stop, or change any medication based on the results of this screening tool without consulting your healthcare provider.',

    references: [
      'Spitzer RL, Kroenke K, Williams JBW, L\u00f6we B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097.',
      'Kroenke K, Spitzer RL, Williams JBW, Monahan PO, L\u00f6we B. Anxiety disorders in primary care: prevalence, impairment, comorbidity, and detection. Ann Intern Med. 2007;146(5):317-325.',
      'L\u00f6we B, Decker O, M\u00fcller S, et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7) in the general population. Med Care. 2008;46(3):266-274.',
      'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, 5th Edition (DSM-5). 2013.',
      'National Institute of Mental Health (NIMH). Anxiety Disorders. Available at: nimh.nih.gov.',
    ],

    tips: [
      'Regular physical activity (30 minutes of moderate exercise most days) has been shown to reduce anxiety symptoms as effectively as medication in some studies',
      'Practice deep breathing exercises: the 4-7-8 technique (inhale for 4 seconds, hold for 7, exhale for 8) activates the parasympathetic nervous system',
      'Limit caffeine intake, as it can worsen anxiety symptoms by stimulating the fight-or-flight response',
      'Maintain a consistent sleep schedule - poor sleep significantly worsens anxiety, and anxiety makes sleep harder, creating a vicious cycle',
      'Try progressive muscle relaxation: systematically tense and release each muscle group to reduce physical tension associated with anxiety',
      'Consider cognitive behavioral therapy (CBT), the gold standard treatment for anxiety disorders, which helps identify and change unhelpful thought patterns',
      'Practice mindfulness meditation - even 10 minutes daily has been shown to reduce anxiety symptoms and improve emotional regulation',
      'Limit alcohol consumption, which may temporarily reduce anxiety but worsens it in the long term through rebound effects',
      'Build and maintain social connections - social support is a powerful protective factor against anxiety',
      'Keep a worry journal to externalize anxious thoughts and identify patterns in your anxiety triggers',
      'Reduce time spent on news and social media, which can amplify worry and anxiety',
      'Ensure adequate intake of omega-3 fatty acids, magnesium, and B vitamins, which support nervous system health',
      'If your GAD-7 score is 10 or above, seek professional evaluation - effective treatments are available and anxiety disorders are highly treatable',
    ],

    faqs: [
      {
        question: 'What is the GAD-7 test and what does it measure?',
        answer:
          'The GAD-7 (Generalized Anxiety Disorder 7-item) is a validated screening questionnaire that measures the severity of anxiety symptoms over the past 2 weeks. It consists of 7 questions scored on a 0-3 scale, producing a total score of 0-21. Developed by Spitzer et al. in 2006, it is widely used in clinical practice and research to screen for generalized anxiety disorder, though it can also detect symptoms of other anxiety conditions.',
      },
      {
        question: 'What is considered a high score on the GAD-7?',
        answer:
          'A score of 10 or above is generally considered the clinical cutoff for identifying probable generalized anxiety disorder, with 89% sensitivity and 82% specificity. Scores of 5-9 indicate mild anxiety, 10-14 moderate anxiety, and 15-21 severe anxiety. However, any persistent anxiety symptoms, regardless of score, warrant attention and potentially professional evaluation.',
      },
      {
        question: 'How is the GAD-7 different from the PHQ-9?',
        answer:
          'The GAD-7 screens for anxiety disorders (primarily generalized anxiety disorder) while the PHQ-9 screens for depression (major depressive disorder). They are often used together since anxiety and depression frequently co-occur - approximately 60% of people with one condition also have the other. Both use the same 2-week timeframe and similar scoring scales, but they assess different symptom clusters.',
      },
      {
        question: 'Can the GAD-7 diagnose anxiety disorder?',
        answer:
          'No, the GAD-7 is a screening tool, not a diagnostic instrument. It can identify individuals who may have an anxiety disorder and assess symptom severity, but a formal diagnosis requires a comprehensive clinical evaluation by a qualified mental health professional. Diagnosis involves assessing symptom duration (at least 6 months for GAD), functional impairment, ruling out medical causes, and considering other possible conditions.',
      },
      {
        question: 'How often should I take the GAD-7?',
        answer:
          'For general monitoring, taking the GAD-7 monthly or every few months is reasonable. In clinical settings, it may be administered at each visit (typically every 2-4 weeks) to track treatment progress. A change of 5 or more points is considered clinically meaningful. If you are in active treatment, your healthcare provider will advise on appropriate assessment frequency.',
      },
      {
        question: 'What are the most effective treatments for anxiety?',
        answer:
          'The most evidence-based treatments for anxiety disorders include cognitive behavioral therapy (CBT), which is considered the gold standard, and medications such as SSRIs (selective serotonin reuptake inhibitors) and SNRIs (serotonin-norepinephrine reuptake inhibitors). A combination of therapy and medication often produces the best outcomes. Other effective approaches include mindfulness-based stress reduction (MBSR), acceptance and commitment therapy (ACT), regular exercise, and relaxation training.',
      },
      {
        question: 'Can anxiety cause physical symptoms?',
        answer:
          'Yes, anxiety commonly causes numerous physical symptoms including rapid heartbeat, chest tightness, shortness of breath, muscle tension, headaches, stomach problems (nausea, diarrhea), sweating, trembling, dizziness, fatigue, and insomnia. These physical symptoms occur because anxiety activates the sympathetic nervous system (fight-or-flight response), releasing stress hormones like cortisol and adrenaline that affect virtually every organ system.',
      },
      {
        question: 'Is anxiety hereditary?',
        answer:
          'Research suggests that anxiety disorders have a genetic component, with heritability estimates ranging from 30-50%. Having a first-degree relative with an anxiety disorder increases your risk by 4-6 times. However, genetics alone do not determine whether someone will develop anxiety - environmental factors such as stressful life events, childhood experiences, personality traits, and coping skills all play important roles. Anxiety disorders result from a complex interaction between genetic predisposition and environmental factors.',
      },
    ],
  },
  tr: {
    whatIs:
      `Yayg\u0131n Anksiyete Bozuklu\u011fu 7-madde (GAD-7) \u00f6l\u00e7e\u011fi, yayg\u0131n anksiyete bozuklu\u011fu (YAB) ve di\u011fer anksiyete durumlar\u0131 i\u00e7in en yayg\u0131n kullan\u0131lan ve do\u011frulanm\u0131\u015f tarama ara\u00e7lar\u0131ndan biridir. 2006 y\u0131l\u0131nda Dr. Robert L. Spitzer, Dr. Janet B.W. Williams, Dr. Kurt Kroenke ve meslekta\u015flar\u0131 taraf\u0131ndan geli\u015ftirilen GAD-7, birinci basamak sa\u011fl\u0131k ve ruh sa\u011fl\u0131\u011f\u0131 ortamlar\u0131nda hastalar taraf\u0131ndan kendi kendine uygulanabilen veya klinisyenler taraf\u0131ndan kullan\u0131labilen k\u0131sa ve pratik bir ara\u00e7 olarak tasarlanm\u0131\u015ft\u0131r. \u00d6l\u00e7ek, bir ki\u015finin son iki hafta i\u00e7inde belirli anksiyete semptomlar\u0131ndan ne s\u0131kl\u0131kla rahats\u0131z oldu\u011funu de\u011ferlendiren 7 sorudan olu\u015fur ve 0 ("Hi\u00e7") ile 3 ("Neredeyse her g\u00fcn") aras\u0131nda de\u011fi\u015fen 4 puanl\u0131k bir Likert \u00f6l\u00e7e\u011fi kullan\u0131r. Toplam puanlar 0 ile 21 aras\u0131nda de\u011fi\u015fir ve daha y\u00fcksek puanlar daha b\u00fcy\u00fck anksiyete \u015fiddetini g\u00f6sterir. GAD-7, m\u00fckemmel g\u00fcvenilirlik (Cronbach alfa = 0.92) ve 10 kesme puan\u0131nda yayg\u0131n anksiyete bozuklu\u011funu tespit etmede iyi duyarl\u0131l\u0131k (%89) ve \u00f6zg\u00fcll\u00fck (%82) g\u00f6stermi\u015ftir. YAB\u2019\u0131n \u00f6tesinde, \u00f6l\u00e7ek panik bozukluk, sosyal anksiyete bozuklu\u011fu ve travma sonras\u0131 stres bozuklu\u011fu taramalar\u0131nda da yararl\u0131l\u0131k g\u00f6stermi\u015ftir.`,

    howToCalculate:
      `GAD-7\u2019yi tamamlamak i\u00e7in, 7 sorunun her birine son 2 haftada her bir semptomdan ne s\u0131kl\u0131kla rahats\u0131z oldu\u011funuzu se\u00e7erek yan\u0131t verin. Yan\u0131t se\u00e7enekleri: 0 = Hi\u00e7, 1 = Birka\u00e7 g\u00fcn, 2 = G\u00fcnlerin yar\u0131s\u0131ndan fazlas\u0131, 3 = Neredeyse her g\u00fcn. T\u00fcm 7 soruyu yan\u0131tlad\u0131ktan sonra, toplam puan\u0131n\u0131z t\u00fcm yan\u0131tlar\u0131n toplanmas\u0131yla hesaplan\u0131r. \u00d6rne\u011fin, \u015fu \u015fekilde yan\u0131tlad\u0131ysan\u0131z: Soru 1 = 2, Soru 2 = 3, Soru 3 = 1, Soru 4 = 2, Soru 5 = 1, Soru 6 = 2, Soru 7 = 1, toplam puan\u0131n\u0131z 2+3+1+2+1+2+1 = 12 olur ve orta d\u00fczeyde anksiyeteyi g\u00f6sterir. Puanlama aral\u0131klar\u0131: 0-4 (minimal anksiyete), 5-9 (hafif anksiyete), 10-14 (orta anksiyete) ve 15-21 (a\u011f\u0131r anksiyete).`,

    formulaDetails:
      `GAD-7 puanlama sistemi basit ama klinik olarak anlaml\u0131d\u0131r. 7 maddenin her biri 0-3 \u00f6l\u00e7e\u011finde puanlan\u0131r ve 0-21 aras\u0131nda olas\u0131 bir toplam puan aral\u0131\u011f\u0131 verir. Kesme puanlar\u0131, Annals of Internal Medicine\u2019de (2006) yay\u0131nlanan titiz do\u011frulama \u00e7al\u0131\u015fmalar\u0131yla belirlenmi\u015ftir. 10 veya \u00fczeri puan, %89 duyarl\u0131l\u0131k ve %82 \u00f6zg\u00fcll\u00fckle olas\u0131 YAB\u2019\u0131 belirlemek i\u00e7in \u00f6nerilen kesme de\u011feridir. Puanlama e\u015fikleri: Minimal (0-4): Ki\u015finin \u00e7ok az veya hi\u00e7 anksiyete semptomu ya\u015fad\u0131\u011f\u0131n\u0131 g\u00f6sterir. Genellikle klinik m\u00fcdahale gerekmez. Hafif (5-9): \u00d6z yard\u0131m stratejilerinden fayda g\u00f6rebilecek hafif anksiyete semptomlar\u0131n\u0131 g\u00f6sterir. Orta (10-14): Klinik olarak anlaml\u0131 anksiyeteyi g\u00f6sterir. Profesyonel de\u011ferlendirme \u00f6nerilir. A\u011f\u0131r (15-21): Aktif tedavi gerektiren a\u011f\u0131r anksiyeteyi g\u00f6sterir.`,

    categories: [
      {
        range: '0-4',
        label: 'Minimal Anksiyete',
        description:
          'Az veya hi\u00e7 anksiyete semptomu yok. Sa\u011fl\u0131kl\u0131 al\u0131\u015fkanl\u0131klara ve \u00f6z bak\u0131m uygulamalar\u0131na devam edin. Genellikle klinik m\u00fcdahale gerekmez.',
        color: '#10B981',
      },
      {
        range: '5-9',
        label: 'Hafif Anksiyete',
        description:
          'Hafif anksiyete semptomlar\u0131 mevcut. \u00d6z yard\u0131m stratejileri, stres y\u00f6netimi ve gev\u015feme teknikleri yard\u0131mc\u0131 olabilir. Semptomlar\u0131 izleyin.',
        color: '#3B82F6',
      },
      {
        range: '10-14',
        label: 'Orta Anksiyete',
        description:
          'Klinik olarak anlaml\u0131 anksiyete semptomlar\u0131. Profesyonel de\u011ferlendirme \u00f6nerilir. Bili\u015fsel davran\u0131\u015f\u00e7\u0131 terapi ve/veya ila\u00e7 tedavisi d\u00fc\u015f\u00fcn\u00fclebilir.',
        color: '#F59E0B',
      },
      {
        range: '15-21',
        label: 'A\u011f\u0131r Anksiyete',
        description:
          'Aktif tedavi gerektiren a\u011f\u0131r anksiyete semptomlar\u0131. Acil profesyonel de\u011ferlendirme \u015fiddetle \u00f6nerilir. Psikoterapi ve/veya farmakoterapi muhtemelen gereklidir.',
        color: '#EF4444',
      },
    ],

    interpretation:
      `GAD-7 puan\u0131, son iki haftadaki anksiyete \u015fiddetinin bir g\u00f6r\u00fcnt\u00fcs\u00fcn\u00fc sa\u011flar. 0-4 puan minimal anksiyeteyi ve normal s\u0131n\u0131rlar i\u00e7inde oldu\u011funu g\u00f6sterir. 5-9 puan, biraz rahats\u0131zl\u0131\u011fa neden olabilecek ancak genellikle \u00f6z bak\u0131m stratejileriyle y\u00f6netilebilir hafif anksiyeteyi g\u00f6sterir. 10-14 puan, klinik olarak anlaml\u0131 ve profesyonel de\u011ferlendirme gerektiren orta d\u00fczeyde anksiyeteyi temsil eder. 15-21 puan, g\u00fcnl\u00fck i\u015flevselli\u011fi muhtemelen etkileyen ve aktif tedavi gerektiren a\u011f\u0131r anksiyeteyi g\u00f6sterir. GAD-7\u2019nin bir tarama arac\u0131 oldu\u011funu, tan\u0131 arac\u0131 olmad\u0131\u011f\u0131n\u0131 belirtmek \u00f6nemlidir. Y\u00fcksek puan otomatik olarak anksiyete bozuklu\u011funuz oldu\u011fu anlam\u0131na gelmez ve d\u00fc\u015f\u00fck puan anksiyete sorunlar\u0131n\u0131n yoklu\u011funu garanti etmez. Puanlar, bireyin genel klinik sunumu ba\u011flam\u0131nda yorumlanmal\u0131d\u0131r.`,

    limitations:
      `GAD-7 iyi do\u011frulanm\u0131\u015f bir tarama arac\u0131 olsa da, birka\u00e7 \u00f6nemli s\u0131n\u0131rlamas\u0131 vard\u0131r. \u0130lk olarak, GAD-7 \u00f6ncelikle yayg\u0131n anksiyete bozuklu\u011fu taramas\u0131 i\u00e7in tasarlanm\u0131\u015ft\u0131r ve sosyal anksiyete bozuklu\u011fu, \u00f6zg\u00fcl fobiler, obsesif kompulsif bozukluk veya panik bozukluk gibi di\u011fer anksiyete bozukluklar\u0131n\u0131n semptomlar\u0131n\u0131 yeterince yakalayamayabilir. \u0130kinci olarak, bir \u00f6z bildirim \u00f6l\u00e7\u00fcs\u00fc olarak GAD-7, bireyin \u00f6znel de\u011ferlendirmesine dayan\u0131r ve yan\u0131t \u00f6nyarg\u0131s\u0131, sosyal arzu edilirlik veya semptom s\u0131kl\u0131\u011f\u0131n\u0131 do\u011fru bir \u015fekilde bildirmedeki zorluktan etkilenebilir. \u00dc\u00e7\u00fcnc\u00fc olarak, GAD-7 son iki haftan\u0131n \u00f6tesinde semptom s\u00fcresini de\u011ferlendirmez, bu da YAB tan\u0131s\u0131 i\u00e7in \u00f6nemlidir (semptomlar\u0131n en az 6 ay boyunca mevcut olmas\u0131 gerekir). D\u00f6rd\u00fcnc\u00fc olarak, puanlar ge\u00e7ici stres\u00f6rler, t\u0131bbi durumlar, ila\u00e7 yan etkileri veya anksiyete semptomlar\u0131n\u0131 taklit edebilen madde kullan\u0131m\u0131ndan etkilenebilir. Son olarak, GAD-7 klinik kararlar i\u00e7in tek ba\u015f\u0131na kullan\u0131lmamal\u0131d\u0131r; kapsaml\u0131 bir klinik g\u00f6r\u00fc\u015fme ve ek de\u011ferlendirme ara\u00e7lar\u0131yla birlikte yorumlanmal\u0131d\u0131r.`,

    healthRisks:
      `Tedavi edilmeyen anksiyete bozukluklar\u0131, psikolojik s\u0131k\u0131nt\u0131n\u0131n \u00f6tesine ge\u00e7en \u00f6nemli sa\u011fl\u0131k riskleri ta\u015f\u0131r. Kronik anksiyete, v\u00fccudun stres tepki sistemini aktive ederek kortizol ve adrenalin seviyelerinin s\u00fcrekli y\u00fckselmesine yol a\u00e7ar ve bu da zamanla birden fazla organ sistemine zarar verebilir. Kardiyovask\u00fcler riskler aras\u0131nda y\u00fcksek tansiyon, y\u00fcksek kalp h\u0131z\u0131 ve daha y\u00fcksek koroner arter hastal\u0131\u011f\u0131 oranlar\u0131 bulunur. Gastrointestinal etkiler aras\u0131nda huzursuz ba\u011f\u0131rsak sendromu (IBS), asit refl\u00fc, bulant\u0131 ve i\u015ftah de\u011fi\u015fiklikleri yer al\u0131r. Ba\u011f\u0131\u015f\u0131kl\u0131k sistemi \u00fczerindeki etkiler aras\u0131nda bask\u0131lanm\u0131\u015f ba\u011f\u0131\u015f\u0131kl\u0131k fonksiyonu ve enfeksiyonlara kar\u015f\u0131 artan duyarl\u0131l\u0131k bulunur. Uyku bozukluklar\u0131 anksiyete bozukluklar\u0131nda son derece yayg\u0131nd\u0131r. Kronik anksiyete depresyon geli\u015ftirme riskini art\u0131r\u0131r; anksiyeteli ki\u015filerin yakla\u015f\u0131k %60\u2019\u0131 ayn\u0131 zamanda depresif semptomlar ya\u015far. Bili\u015fsel etkiler aras\u0131nda konsantrasyon g\u00fc\u00e7l\u00fc\u011f\u00fc, haf\u0131za sorunlar\u0131 ve bozulmu\u015f karar alma yer al\u0131r.`,

    alternativeMeasures:
      `GAD-7\u2019nin yan\u0131 s\u0131ra veya yerine anksiyeteyi de\u011ferlendirmek i\u00e7in birka\u00e7 do\u011frulanm\u0131\u015f ara\u00e7 daha mevcuttur. Beck Anksiyete Envanteri (BAI), anksiyetenin somatik ve bili\u015fsel semptomlar\u0131na daha fazla odaklanan 21 maddelik bir \u00f6z bildirim \u00f6l\u00e7\u00fcs\u00fcd\u00fcr. Durumluk-S\u00fcrekli Anksiyete Envanteri (STAI), durumluk anksiyete (mevcut duygular) ile s\u00fcrekli anksiyete (genel e\u011filim) aras\u0131nda ayr\u0131m yapar. Hamilton Anksiyete De\u011ferlendirme \u00d6l\u00e7e\u011fi (HAM-A), ara\u015ft\u0131rma ortamlar\u0131nda yayg\u0131n olarak kullan\u0131lan klinisyen taraf\u0131ndan uygulanan 14 maddelik bir \u00f6l\u00e7ektir. PHQ-9 (Hasta Sa\u011fl\u0131\u011f\u0131 Anketi-9), anksiyete ve depresyon s\u0131kl\u0131kla bir arada g\u00f6r\u00fcld\u00fc\u011f\u00fc i\u00e7in e\u015f zamanl\u0131 depresyonu taramak i\u00e7in genellikle GAD-7 ile birlikte kullan\u0131l\u0131r. Kapsaml\u0131 bir ruh sa\u011fl\u0131\u011f\u0131 de\u011ferlendirmesi, en do\u011fru de\u011ferlendirme i\u00e7in genellikle birden fazla arac\u0131 klinik g\u00f6r\u00fc\u015fmelerle birle\u015ftirir.`,

    demographicDifferences:
      `Anksiyete bozukluklar\u0131, demografik gruplar aras\u0131nda \u00f6nemli farkl\u0131l\u0131klar g\u00f6sterir. Kad\u0131nlarda yayg\u0131n anksiyete bozuklu\u011fu tan\u0131s\u0131 erkeklere k\u0131yasla yakla\u015f\u0131k iki kat daha fazla konur; ya\u015fam boyu prevalans oranlar\u0131 kad\u0131nlar i\u00e7in yakla\u015f\u0131k %7.7, erkekler i\u00e7in %4.6\u2019d\u0131r. Bu cinsiyet fark\u0131 ergenlikte ortaya \u00e7\u0131kar ve ya\u015fam boyu devam eder. \u00d6strojen ve progesteron dalgalanmalar\u0131 dahil hormonal fakt\u00f6rler, ergenlik, premenstr\u00fcel d\u00f6nem, hamilelik, do\u011fum sonras\u0131 ve perimenopoz d\u00f6nemlerinde artan savunmas\u0131zl\u0131\u011fa katk\u0131da bulunur. Ya\u015f, anksiyetenin hem sunumunu hem de yayg\u0131nl\u0131\u011f\u0131n\u0131 etkiler. YAB i\u00e7in ortalama ba\u015flang\u0131\u00e7 ya\u015f\u0131 31\u2019dir. Ya\u015fl\u0131 yeti\u015fkinlerde anksiyete farkl\u0131 \u015fekilde ortaya \u00e7\u0131kabilir ve genellikle t\u0131bbi durumlar, bili\u015fsel gerileme veya depresyonla birlikte g\u00f6r\u00fclür. K\u00fclt\u00fcrel arka plan, anksiyetenin nas\u0131l ya\u015fand\u0131\u011f\u0131n\u0131 ve ifade edildi\u011fini \u00f6nemli \u00f6l\u00e7\u00fcde etkiler. Baz\u0131 k\u00fclt\u00fcrler psikolojik semptomlardan (endi\u015fe, korku) \u00e7ok somatik semptomlara (ba\u015f a\u011fr\u0131s\u0131, mide sorunlar\u0131) vurgu yapar.`,

    medicalDisclaimer:
      `Bu GAD-7 anksiyete tarama arac\u0131 yaln\u0131zca e\u011fitim ve bilgilendirme ama\u00e7l\u0131d\u0131r ve profesyonel t\u0131bbi tavsiye, te\u015fhis veya tedavinin yerine kullan\u0131lmamal\u0131d\u0131r. GAD-7 bir tarama arac\u0131d\u0131r, tan\u0131 arac\u0131 de\u011fildir ve y\u00fcksek bir puan yayg\u0131n anksiyete bozuklu\u011fu veya ba\u015fka herhangi bir ruh sa\u011fl\u0131\u011f\u0131 durumu tan\u0131s\u0131 olu\u015fturmaz. Bu ara\u00e7, nitelikli bir ruh sa\u011fl\u0131\u011f\u0131 uzman\u0131, psikiyatrist veya doktor taraf\u0131ndan yap\u0131lan kapsaml\u0131 bir klinik de\u011ferlendirmenin yerini alamaz. \u00d6nemli anksiyete semptomlar\u0131 ya\u015f\u0131yorsan\u0131z, l\u00fctfen acil profesyonel yard\u0131m aray\u0131n. Sa\u011fl\u0131k hizmeti sa\u011flay\u0131c\u0131n\u0131za ba\u015fvurun, kriz hatt\u0131n\u0131 aray\u0131n veya en yak\u0131n acil servise gidin. Bu tarama sonu\u00e7lar\u0131, uygun de\u011ferlendirme, tan\u0131 ve tedavi \u00f6nerileri sa\u011flayabilecek nitelikli bir sa\u011fl\u0131k profesyoneli ile tart\u0131\u015f\u0131lmal\u0131d\u0131r.`,

    references: [
      'Spitzer RL, Kroenke K, Williams JBW, L\u00f6we B. Yayg\u0131n anksiyete bozuklu\u011funu de\u011ferlendirmek i\u00e7in k\u0131sa bir \u00f6l\u00e7\u00fcm: GAD-7. Arch Intern Med. 2006;166(10):1092-1097.',
      'Kroenke K, Spitzer RL, Williams JBW, Monahan PO, L\u00f6we B. Birinci basamakta anksiyete bozukluklar\u0131: prevalans, bozulma, komorbidite ve tespit. Ann Intern Med. 2007;146(5):317-325.',
      'L\u00f6we B, Decker O, M\u00fcller S, ve ark. Yayg\u0131n Anksiyete Bozuklu\u011fu Taray\u0131c\u0131s\u0131n\u0131n (GAD-7) genel pop\u00fclasyonda do\u011frulanmas\u0131 ve standardizasyonu. Med Care. 2008;46(3):266-274.',
      'Amerikan Psikiyatri Birli\u011fi. Mental Bozukluklar\u0131n Tan\u0131sal ve \u0130statistiksel El Kitab\u0131, 5. Bask\u0131 (DSM-5). 2013.',
      'Ulusal Ruh Sa\u011fl\u0131\u011f\u0131 Enstit\u00fcs\u00fc (NIMH). Anksiyete Bozukluklar\u0131. Eri\u015fim: nimh.nih.gov.',
    ],

    tips: [
      'D\u00fczenli fiziksel aktivite (haftada \u00e7o\u011fu g\u00fcn 30 dakika orta d\u00fczeyde egzersiz) baz\u0131 \u00e7al\u0131\u015fmalarda ila\u00e7 kadar etkili bir \u015fekilde anksiyete semptomlar\u0131n\u0131 azaltt\u0131\u011f\u0131 g\u00f6sterilmi\u015ftir',
      'Derin nefes egzersizleri yap\u0131n: 4-7-8 tekni\u011fi (4 saniye nefes al, 7 saniye tut, 8 saniye ver) parasempatik sinir sistemini aktive eder',
      'Kafein al\u0131m\u0131n\u0131 s\u0131n\u0131rlay\u0131n, \u00e7\u00fcnk\u00fc sava\u015f ya da ka\u00e7 tepkisini uyararak anksiyete semptomlar\u0131n\u0131 k\u00f6t\u00fcle\u015ftirebilir',
      'Tutarl\u0131 bir uyku program\u0131 s\u00fcrd\u00fcr\u00fcn - k\u00f6t\u00fc uyku anksiyeteyi \u00f6nemli \u00f6l\u00e7\u00fcde k\u00f6t\u00fcle\u015ftirir ve anksiyete uyumay\u0131 zorla\u015ft\u0131r\u0131r',
      'Progresif kas gev\u015femesi deneyin: anksiyeteyle ili\u015fkili fiziksel gerginli\u011fi azaltmak i\u00e7in her kas grubunu sistematik olarak gerip b\u0131rak\u0131n',
      'Anksiyete bozukluklar\u0131 i\u00e7in alt\u0131n standart tedavi olan bili\u015fsel davran\u0131\u015f\u00e7\u0131 terapi (BDT) d\u00fc\u015f\u00fcn\u00fcn',
      'Fark\u0131ndal\u0131k meditasyonu yap\u0131n - g\u00fcnde sadece 10 dakika bile anksiyete semptomlar\u0131n\u0131 azaltt\u0131\u011f\u0131 g\u00f6sterilmi\u015ftir',
      'Alkol t\u00fcketimini s\u0131n\u0131rlay\u0131n, ge\u00e7ici olarak anksiyeteyi azaltsa da uzun vadede geri tepme etkileriyle k\u00f6t\u00fcle\u015ftirir',
      'Sosyal ba\u011flant\u0131lar kurun ve s\u00fcrd\u00fcr\u00fcn - sosyal destek anksiyeteye kar\u015f\u0131 g\u00fc\u00e7l\u00fc bir koruyucu fakt\u00f6rd\u00fcr',
      'Endi\u015feli d\u00fc\u015f\u00fcnceleri d\u0131\u015fa aktarmak ve anksiyete tetikleyicilerinizdeki kal\u0131plar\u0131 belirlemek i\u00e7in bir endi\u015fe g\u00fcnl\u00fc\u011f\u00fc tutun',
      'Endi\u015feyi ve anksiyeteyi art\u0131rabilecek haber ve sosyal medyada ge\u00e7irilen s\u00fcreyi azalt\u0131n',
      'Sinir sistemi sa\u011fl\u0131\u011f\u0131n\u0131 destekleyen omega-3 ya\u011f asitleri, magnezyum ve B vitaminlerini yeterli al\u0131n',
      'GAD-7 puan\u0131n\u0131z 10 veya \u00fczerindeyse profesyonel de\u011ferlendirme aray\u0131n - etkili tedaviler mevcuttur ve anksiyete bozukluklar\u0131 olduk\u00e7a tedavi edilebilir',
    ],

    faqs: [
      {
        question: 'GAD-7 testi nedir ve neyi \u00f6l\u00e7er?',
        answer:
          `GAD-7 (Yayg\u0131n Anksiyete Bozuklu\u011fu 7-madde), son 2 haftadaki anksiyete semptomlar\u0131n\u0131n \u015fiddetini \u00f6l\u00e7en do\u011frulanm\u0131\u015f bir tarama anketidir. 0-3 \u00f6l\u00e7e\u011finde puanlanan 7 sorudan olu\u015fur ve 0-21 aras\u0131nda toplam puan \u00fcretir. 2006\u2019da Spitzer ve ark. taraf\u0131ndan geli\u015ftirilen bu \u00f6l\u00e7ek, klinik uygulamada ve ara\u015ft\u0131rmalarda yayg\u0131n anksiyete bozuklu\u011fu taramak i\u00e7in yayg\u0131n olarak kullan\u0131l\u0131r.`,
      },
      {
        question: 'GAD-7 testinde y\u00fcksek puan nedir?',
        answer:
          `10 veya \u00fczeri puan, %89 duyarl\u0131l\u0131k ve %82 \u00f6zg\u00fcll\u00fckle olas\u0131 yayg\u0131n anksiyete bozuklu\u011funu belirlemek i\u00e7in genel olarak klinik kesme de\u011feri olarak kabul edilir. 5-9 puan hafif anksiyeteyi, 10-14 orta anksiyeteyi ve 15-21 a\u011f\u0131r anksiyeteyi g\u00f6sterir. Ancak puan ne olursa olsun, s\u00fcrekli anksiyete semptomlar\u0131 dikkat ve potansiyel olarak profesyonel de\u011ferlendirme gerektirir.`,
      },
      {
        question: 'GAD-7 ile PHQ-9 aras\u0131ndaki fark nedir?',
        answer:
          `GAD-7 anksiyete bozukluklar\u0131n\u0131 (\u00f6ncelikle yayg\u0131n anksiyete bozuklu\u011fu) tararken, PHQ-9 depresyonu (majör depresif bozukluk) tarar. Anksiyete ve depresyon s\u0131kl\u0131kla birlikte g\u00f6r\u00fcld\u00fc\u011f\u00fcnden genellikle birlikte kullan\u0131l\u0131rlar - bir durumu olan ki\u015filerin yakla\u015f\u0131k %60\u2019\u0131 di\u011ferine de sahiptir. Her ikisi de ayn\u0131 2 haftal\u0131k zaman dilimini ve benzer puanlama \u00f6l\u00e7eklerini kullan\u0131r, ancak farkl\u0131 semptom k\u00fcmelerini de\u011ferlendirir.`,
      },
      {
        question: 'GAD-7 anksiyete bozuklu\u011funu te\u015fhis edebilir mi?',
        answer:
          `Hay\u0131r, GAD-7 bir tarama arac\u0131d\u0131r, tan\u0131 arac\u0131 de\u011fildir. Anksiyete bozuklu\u011fu olabilecek bireyleri belirleyebilir ve semptom \u015fiddetini de\u011ferlendirebilir, ancak resmi tan\u0131 nitelikli bir ruh sa\u011fl\u0131\u011f\u0131 uzman\u0131 taraf\u0131ndan kapsaml\u0131 bir klinik de\u011ferlendirme gerektirir. Tan\u0131, semptom s\u00fcresini (YAB i\u00e7in en az 6 ay), i\u015flevsel bozulmay\u0131, t\u0131bbi nedenlerin d\u0131\u015flanmas\u0131n\u0131 ve di\u011fer olas\u0131 durumlar\u0131n de\u011ferlendirilmesini i\u00e7erir.`,
      },
      {
        question: 'GAD-7 testini ne s\u0131kl\u0131kta yapmal\u0131y\u0131m?',
        answer:
          `Genel izleme i\u00e7in, GAD-7\u2019yi ayl\u0131k veya birka\u00e7 ayda bir yapmak makuldur. Klinik ortamlarda, tedavi ilerlemesini takip etmek i\u00e7in her ziyarette (genellikle her 2-4 haftada) uygulanabilir. 5 veya daha fazla puanl\u0131k bir de\u011fi\u015fiklik klinik olarak anlaml\u0131 kabul edilir. Aktif tedavideyseniz, sa\u011fl\u0131k hizmeti sa\u011flay\u0131c\u0131n\u0131z uygun de\u011ferlendirme s\u0131kl\u0131\u011f\u0131 konusunda tavsiyede bulunacakt\u0131r.`,
      },
      {
        question: 'Anksiyete i\u00e7in en etkili tedaviler nelerdir?',
        answer:
          `Anksiyete bozukluklar\u0131 i\u00e7in en kan\u0131ta dayal\u0131 tedaviler, alt\u0131n standart olarak kabul edilen bili\u015fsel davran\u0131\u015f\u00e7\u0131 terapi (BDT) ve SSRI\u2019lar ve SNRI\u2019lar gibi ila\u00e7lar\u0131 i\u00e7erir. Terapi ve ila\u00e7 kombinasyonu genellikle en iyi sonu\u00e7lar\u0131 \u00fcretir. Di\u011fer etkili yakla\u015f\u0131mlar aras\u0131nda fark\u0131ndal\u0131k temelli stres azaltma (MBSR), kabul ve kararl\u0131l\u0131k terapisi (ACT), d\u00fczenli egzersiz ve gev\u015feme e\u011fitimi yer al\u0131r.`,
      },
      {
        question: 'Anksiyete fiziksel semptomlara neden olabilir mi?',
        answer:
          `Evet, anksiyete yayg\u0131n olarak h\u0131zl\u0131 kalp at\u0131\u015f\u0131, g\u00f6\u011f\u00fcs s\u0131k\u0131\u015fmas\u0131, nefes darl\u0131\u011f\u0131, kas gerginli\u011fi, ba\u015f a\u011fr\u0131s\u0131, mide sorunlar\u0131, terleme, titreme, ba\u015f d\u00f6nmesi, yorgunluk ve uykusuzluk gibi \u00e7ok say\u0131da fiziksel semptoma neden olur. Bu fiziksel semptomlar, anksiyetenin sempatik sinir sistemini (sava\u015f ya da ka\u00e7 tepkisi) aktive etmesi ve neredeyse her organ sistemini etkileyen kortizol ve adrenalin gibi stres hormonlar\u0131n\u0131 salg\u0131lamas\u0131 nedeniyle ortaya \u00e7\u0131kar.`,
      },
      {
        question: 'Anksiyete kal\u0131tsal m\u0131d\u0131r?',
        answer:
          `Ara\u015ft\u0131rmalar, anksiyete bozukluklar\u0131n\u0131n genetik bir bile\u015feni oldu\u011funu ve kal\u0131t\u0131m tahminlerinin %30-50 aras\u0131nda de\u011fi\u015fti\u011fini g\u00f6stermektedir. Birinci derece akraban\u0131n anksiyete bozuklu\u011fu olmas\u0131 riskinizi 4-6 kat art\u0131r\u0131r. Ancak, genetik tek ba\u015f\u0131na birinin anksiyete geli\u015ftirip geli\u015ftirmeyece\u011fini belirlemez - stresli ya\u015fam olaylar\u0131, \u00e7ocukluk deneyimleri, ki\u015filik \u00f6zellikleri ve ba\u015fa \u00e7\u0131kma becerileri gibi \u00e7evresel fakt\u00f6rler de \u00f6nemli roller oynar.`,
      },
    ],
  },
};
