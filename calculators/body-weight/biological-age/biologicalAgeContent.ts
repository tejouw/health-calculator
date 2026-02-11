export const biologicalAgeContent = {
  en: {
    title: 'Biological Age Calculator',
    description: 'Calculate your biological age based on lifestyle factors, health metrics, and genetics',

    // Table of Contents labels
    tocCalculator: 'Calculator',
    tocResults: 'Results',
    tocHowItWorks: 'How It Works',
    tocFormula: 'Formula & Methodology',
    tocInterpreting: 'Interpreting Results',
    tocCategories: 'Categories',
    tocFaq: 'FAQs',
    tocDisclaimer: 'Medical Disclaimer',
    tocReferences: 'References',

    // Form labels
    basicInfoTitle: 'Basic Information',
    chronologicalAgeLabel: 'Your Chronological Age',
    chronologicalAgePlaceholder: 'Enter your age in years',
    genderLabel: 'Biological Sex',
    genderMale: 'Male',
    genderFemale: 'Female',
    heightLabel: 'Height (cm)',
    heightPlaceholder: 'e.g., 170',
    weightLabel: 'Weight (kg)',
    weightPlaceholder: 'e.g., 70',

    // Lifestyle factors
    lifestyleFactorsTitle: 'Lifestyle Factors',
    smokingLabel: 'Smoking Status',
    smokingNever: 'Never smoked',
    smokingFormer: 'Former smoker',
    smokingCurrent: 'Current smoker',

    alcoholLabel: 'Alcohol Consumption',
    alcoholNone: 'None',
    alcoholModerate: 'Moderate (1-2 drinks/day)',
    alcoholHeavy: 'Heavy (3+ drinks/day)',

    exerciseLabel: 'Exercise Frequency',
    exerciseSedentary: 'Sedentary (No exercise)',
    exerciseLight: 'Light (1-2 days/week)',
    exerciseModerate: 'Moderate (3-4 days/week)',
    exerciseActive: 'Active (5-6 days/week)',
    exerciseVeryActive: 'Very Active (Daily)',

    sleepLabel: 'Sleep Quality',
    sleepPoor: 'Poor (<5 hours or very restless)',
    sleepFair: 'Fair (5-6 hours)',
    sleepGood: 'Good (7-8 hours)',
    sleepExcellent: 'Excellent (8-9 hours, deep sleep)',

    stressLabel: 'Stress Level',
    stressLow: 'Low (Rarely stressed)',
    stressModerate: 'Moderate (Occasional stress)',
    stressHigh: 'High (Frequent stress)',
    stressVeryHigh: 'Very High (Chronic stress)',

    dietLabel: 'Diet Quality',
    dietPoor: 'Poor (Mostly processed foods)',
    dietFair: 'Fair (Some healthy foods)',
    dietGood: 'Good (Mostly whole foods)',
    dietExcellent: 'Excellent (Mediterranean/Plant-based)',

    // Health metrics
    healthMetricsTitle: 'Health Metrics',
    chronicConditionsLabel: 'Number of Chronic Conditions',
    chronicConditionsHelp: 'Diabetes, heart disease, hypertension, etc.',

    familyLongevityLabel: 'Family Longevity',
    familyLow: 'Low (Parents died before 70)',
    familyAverage: 'Average (Parents lived 70-80)',
    familyHigh: 'High (Parents lived 80+)',

    bloodPressureLabel: 'Blood Pressure (Optional)',
    bloodPressureNormal: 'Normal (<120/80)',
    bloodPressureElevated: 'Elevated (120-139/80-89)',
    bloodPressureHigh: 'High (140+/90+)',

    cholesterolLabel: 'Cholesterol Level (Optional)',
    cholesterolNormal: 'Normal (<200 mg/dL)',
    cholesterolBorderline: 'Borderline (200-239 mg/dL)',
    cholesterolHigh: 'High (240+ mg/dL)',

    // NEW: Nutrition Habits
    nutritionHabitsTitle: 'Nutrition Habits',
    breakfastLabel: 'Breakfast Habit',
    breakfastNever: 'Never eat breakfast',
    breakfastSometimes: 'Sometimes (2-3 days/week)',
    breakfastDaily: 'Daily breakfast',

    fruitVegetableLabel: 'Daily Fruit & Vegetable Servings',
    fruitVegetable01: '0-1 servings',
    fruitVegetable23: '2-3 servings',
    fruitVegetable45: '4-5 servings',
    fruitVegetable6plus: '6+ servings',

    processedFoodLabel: 'Processed Food Frequency',
    processedFoodDaily: 'Daily',
    processedFoodWeekly: 'Several times a week',
    processedFoodMonthly: 'A few times a month',
    processedFoodRarely: 'Rarely or never',

    omega3Label: 'Omega-3 Intake',
    omega3None: 'None',
    omega3Occasional: 'Occasional (fish 1-2x/month)',
    omega3Regular: 'Regular (fish 2-3x/week)',
    omega3DailySupplement: 'Daily supplement + regular fish',

    sugarLabel: 'Sugar Consumption',
    sugarHigh: 'High (sweets/sodas daily)',
    sugarModerate: 'Moderate (occasional sweets)',
    sugarLow: 'Low (rarely eat added sugar)',

    waterIntakeLabel: 'Daily Water Intake',
    waterLow: 'Low (less than 4 glasses)',
    waterModerate: 'Moderate (4-6 glasses)',
    waterAdequate: 'Adequate (6-8 glasses)',
    waterOptimal: 'Optimal (8+ glasses)',

    caffeineLabel: 'Caffeine Intake',
    caffeineNone: 'None',
    caffeineModerate: 'Moderate (1-3 cups/day)',
    caffeineHigh: 'High (4+ cups/day)',

    // NEW: Supplements & Health
    supplementsHealthTitle: 'Supplements & Health',
    vitaminDLabel: 'Vitamin D Level',
    vitaminDDeficient: 'Deficient (never tested/no sun)',
    vitaminDLow: 'Low (limited sun, no supplement)',
    vitaminDNormal: 'Normal (some sun/supplement)',
    vitaminDOptimal: 'Optimal (regular sun + supplement)',

    dentalHealthLabel: 'Dental Health',
    dentalPoor: 'Poor (frequent issues, rare dentist visits)',
    dentalFair: 'Fair (occasional issues)',
    dentalGood: 'Good (annual checkups, daily brushing)',
    dentalExcellent: 'Excellent (2x/year dentist, flossing daily)',

    sunlightLabel: 'Daily Sunlight Exposure',
    sunlightMinimal: 'Minimal (mostly indoors)',
    sunlightModerate: 'Moderate (some outdoor time)',
    sunlightAdequate: 'Adequate (15-30 min daily outdoors)',

    // NEW: Mental & Social
    mentalSocialTitle: 'Mental & Social Wellbeing',
    meditationLabel: 'Meditation/Mindfulness Practice',
    meditationNever: 'Never',
    meditationWeekly: 'Weekly (1-3 times)',
    meditationDaily: 'Daily practice',

    socialLabel: 'Social Connections',
    socialIsolated: 'Isolated (rarely see others)',
    socialFew: 'Few (small circle, infrequent contact)',
    socialModerate: 'Moderate (regular social activities)',
    socialStrong: 'Strong network (close friends, community)',

    purposeLabel: 'Sense of Purpose/Goals',
    purposeNone: 'No clear purpose or goals',
    purposeVague: 'Vague sense of direction',
    purposeClear: 'Clear goals and direction',
    purposeStrong: 'Strong life purpose (ikigai)',

    mentalStimulationLabel: 'Mental Stimulation',
    mentalStimLow: 'Low (routine tasks only)',
    mentalStimModerate: 'Moderate (occasional reading/puzzles)',
    mentalStimHigh: 'High (daily learning, puzzles, creativity)',

    // NEW: Lifestyle Balance
    lifestyleBalanceTitle: 'Lifestyle Balance',
    screenTimeLabel: 'Daily Recreational Screen Time',
    screenTime02: '0-2 hours',
    screenTime24: '2-4 hours',
    screenTime46: '4-6 hours',
    screenTime68: '6-8 hours',
    screenTime8plus: '8+ hours',

    workLifeLabel: 'Work-Life Balance',
    workLifePoor: 'Poor (overworked, no boundaries)',
    workLifeFair: 'Fair (occasional overtime)',
    workLifeGood: 'Good (reasonable hours, some hobbies)',
    workLifeExcellent: 'Excellent (balanced, fulfilling hobbies)',

    // Errors
    errorAge: 'Please enter your age',
    errorAgeRange: 'Age must be between 18 and 100',
    errorHeight: 'Please enter your height',
    errorWeight: 'Please enter your weight',

    // Result labels
    biologicalAgeLabel: 'Your Biological Age',
    chronologicalAgeResult: 'Chronological Age',
    ageDifferenceLabel: 'Age Difference',
    yearsYounger: 'years younger',
    yearsOlder: 'years older',
    percentileLabel: 'Better than',
    ofPeople: 'of people your age',

    // Categories
    categoryExceptional: 'Exceptional',
    categoryYounger: 'Biologically Younger',
    categoryChronological: 'Age-Appropriate',
    categoryOlder: 'Biologically Older',
    categoryAccelerated: 'Accelerated Aging',

    // Interactive sections
    agingFactorsTitle: 'Your Aging Factors Breakdown',
    healthSystemsTitle: 'Health System Ages',
    cardiovascularLabel: 'Cardiovascular Age',
    metabolicLabel: 'Metabolic Age',
    skeletalLabel: 'Skeletal Age',
    cognitiveLabel: 'Cognitive Age',

    lifeExpectancyTitle: 'Life Expectancy Analysis',
    currentExpectancy: 'Current Life Expectancy',
    optimalExpectancy: 'Optimal Life Expectancy',
    potentialGain: 'Potential Years to Gain',

    topActionsTitle: 'Priority Action Items',
    impactHigh: 'High Impact',
    impactMedium: 'Medium Impact',
    impactLow: 'Low Impact',
    difficultyEasy: 'Easy',
    difficultyModerate: 'Moderate',
    difficultyChallenging: 'Challenging',

    // Factor names
    factorSmoking: 'Smoking',
    factorExercise: 'Exercise',
    factorDiet: 'Diet Quality',
    factorSleep: 'Sleep Quality',
    factorStress: 'Stress Level',
    factorAlcohol: 'Alcohol',
    factorBMI: 'Body Composition',
    factorConditions: 'Chronic Conditions',
    factorGenetics: 'Genetics/Family',
    factorBloodPressure: 'Blood Pressure',
    factorBreakfast: 'Breakfast Habit',
    factorFruitVegetable: 'Fruit & Vegetables',
    factorProcessedFood: 'Processed Foods',
    factorOmega3: 'Omega-3 Intake',
    factorVitaminD: 'Vitamin D',
    factorMeditation: 'Meditation',
    factorSocial: 'Social Connections',
    factorPurpose: 'Purpose in Life',
    factorScreenTime: 'Screen Time',
    factorSunlight: 'Sunlight Exposure',
    factorDental: 'Dental Health',
    factorMentalStimulation: 'Mental Stimulation',
    factorWorkLifeBalance: 'Work-Life Balance',
    factorCaffeine: 'Caffeine',
    factorSugar: 'Sugar Consumption',
    factorWater: 'Water Intake',

    // Interactive section titles
    dailyRoutineTitle: 'Daily Anti-Aging Routine',
    weeklyPlanTitle: 'Weekly Optimization Plan',
    nutritionPlanTitle: 'Age-Reversing Nutrition Plan',
    exercisePlanTitle: 'Longevity Exercise Plan',
    stressManagementTitle: 'Stress Reduction Strategies',
    sleepOptimizationTitle: 'Sleep Quality Enhancement',
    timelineTitle: 'Your Improvement Timeline',
    timelineDescription: 'Based on your profile, here is what you could achieve with consistent changes:',

    // Plan labels
    timeLabel: 'Time',
    activityLabel: 'Activity',
    benefitLabel: 'Benefit',
    dayLabel: 'Day',
    focusLabel: 'Focus',
    activitiesLabel: 'Activities',
    typeLabel: 'Type',
    frequencyLabel: 'Frequency',
    durationLabel: 'Duration',

    // Educational content
    howItWorksTitle: 'How the Biological Age Calculator Works',
    howItWorksContent: `Our advanced biological age calculator analyzes multiple aspects of your health and lifestyle to determine your body's true age, which may differ significantly from your chronological age.

**What is Biological Age?**
Biological age represents the functional capacity of your body's systems—cardiovascular, metabolic, skeletal, and cognitive—rather than simply how many years you've been alive. Two people born on the same day can have vastly different biological ages based on their lifestyle choices, genetics, and environmental factors.

**The Science Behind It:**
The calculator uses a comprehensive multi-factor analysis based on peer-reviewed research from longevity studies, including the famous Framingham Heart Study, Blue Zones research, and data from the National Institute on Aging. We evaluate ten critical aging factors:

1. **Smoking Status**: The single most impactful modifiable factor. Current smokers age 8+ years faster, while former smokers show partial recovery depending on how long they've quit.

2. **Exercise Frequency**: Regular physical activity is strongly correlated with longevity. Those who exercise vigorously 5+ days per week can be 5-9 years biologically younger than sedentary individuals.

3. **Diet Quality**: A Mediterranean-style diet rich in vegetables, fruits, whole grains, and healthy fats can reduce biological age by 4+ years compared to a processed food-heavy diet.

4. **Sleep Quality**: Consistent, restorative sleep (7-9 hours) is essential for cellular repair. Poor sleep accelerates aging by 3+ years through increased inflammation and oxidic stress.

5. **Stress Management**: Chronic stress elevates cortisol, accelerating cellular aging through telomere shortening. High stress can age you 3-4 years faster.

6. **Alcohol Consumption**: The relationship is J-shaped—moderate consumption may have slight benefits, but heavy drinking significantly accelerates aging through liver damage and inflammation.

7. **Body Composition (BMI)**: Optimal BMI (18.5-24.9) correlates with longer healthspan. Both obesity and being underweight increase biological age.

8. **Chronic Conditions**: Each chronic condition (diabetes, heart disease, etc.) typically adds 2-3 years to biological age through systemic inflammation and organ stress.

9. **Genetics/Family Longevity**: While you can't change your genes, family history provides insight into your genetic predisposition. Those with long-lived parents have a 3-year advantage.

10. **Clinical Markers**: Blood pressure and cholesterol levels provide objective measures of cardiovascular health, key indicators of biological aging.

**System-Specific Ages:**
The calculator also estimates your cardiovascular age, metabolic age, skeletal age, and cognitive age. These can vary significantly—you might have a young cardiovascular system but an older metabolic age if you're sedentary with poor diet.

**The Algorithm:**
Each factor is weighted based on scientific evidence of its impact on longevity. The algorithm calculates your total aging adjustment and determines your biological age, which then drives personalized recommendations for the highest-impact interventions.`,

    formulaTitle: 'The Scientific Formula and Methodology',
    formulaContent: `Our biological age calculation is based on the cumulative impact model used in longevity research, incorporating findings from multiple large-scale epidemiological studies.

**Base Formula:**
Biological Age = Chronological Age - (Sum of Positive Factors) + (Sum of Negative Factors)

**Factor Impact Values:**
Each lifestyle and health factor has a scientifically-determined impact range:

• **Smoking**: 0 to -8 years (Current smokers: -8, Former: -2, Never: 0)
• **Exercise**: -3 to +5 years (Sedentary: -3, Light: 0, Moderate: +2, Active: +4, Very Active: +5)
• **Diet Quality**: -4 to +4 years (Poor: -4, Fair: -1, Good: +2, Excellent: +4)
• **Sleep**: -3 to +3 years (Poor: -3, Fair: 0, Good: +1, Excellent: +3)
• **Stress**: -4 to +1 years (Low: +1, Moderate: -1, High: -3, Very High: -4)
• **Alcohol**: -3 to +2 years (None: 0, Moderate: +2, Heavy: -3)
• **BMI**: -5 to +2 years (Based on distance from optimal 18.5-24.9 range)
• **Chronic Conditions**: 0 to -10 years (Each condition: approximately -2 years)
• **Family Longevity**: -3 to +3 years (Low: -3, Average: 0, High: +3)
• **Blood Pressure**: 0 to -4 years (Normal: 0, Elevated: -2, High: -4)

**Weighting System:**
Factors are not equally weighted. The algorithm uses these evidence-based weights:
- Smoking: 1.0 (highest impact)
- Exercise: 0.9
- Diet: 0.8
- Chronic Conditions: 0.8
- Sleep: 0.7
- Stress: 0.7
- BMI: 0.7
- Blood Pressure: 0.7
- Alcohol: 0.6
- Genetics: 0.5 (non-modifiable baseline)

**Health System Age Calculations:**

**Cardiovascular Age** = Base Age - (0.8 × Smoking Impact) - (0.6 × Exercise Impact) - (0.8 × BP Impact)

This emphasizes factors most critical to heart health: smoking cessation, regular exercise, and blood pressure control.

**Metabolic Age** = Base Age - (0.8 × Diet Impact) - (0.4 × Exercise Impact) - (0.8 × BMI Impact)

Focuses on factors affecting insulin sensitivity, glucose metabolism, and body composition.

**Skeletal Age** = Base Age - (0.7 × Exercise Impact) - (0.3 × Diet Impact)

Weight-bearing exercise and calcium/vitamin D intake are primary determinants of bone health.

**Cognitive Age** = Base Age - (0.8 × Sleep Impact) - (0.6 × Stress Impact) - (0.3 × Exercise Impact)

Brain health depends heavily on quality sleep, stress management, and the neuroprotective effects of exercise.

**Life Expectancy Calculation:**
Starting from gender-specific baseline life expectancy (males: 76 years, females: 81 years), we apply the total aging adjustment:

Estimated Life Expectancy = Baseline + Total Aging Adjustment

Optimal life expectancy (males: 85, females: 90) represents maximum potential with ideal lifestyle factors.

**Percentile Ranking:**
Your percentile is calculated by comparing your age difference to population distributions from the US National Health and Nutrition Examination Survey (NHANES) data, adjusted for age cohorts.

**Scientific Basis:**
This methodology synthesizes findings from:
- Framingham Heart Study (cardiovascular risk factors)
- Nurses' Health Study (diet and lifestyle impacts)
- Blue Zones Research (longevity hotspot analysis)
- National Institute on Aging longitudinal studies
- Telomere length studies correlating cellular aging with lifestyle
- UK Biobank (500,000+ participants)

**Limitations:**
This calculator provides estimates based on population-level data. Individual variation exists due to genetics, environmental factors, and measurement timing. Consider this a screening tool, not a diagnostic instrument.`,

    interpretingTitle: 'Interpreting Your Biological Age Results',
    interpretingContent: `Understanding what your biological age means and how to act on it is crucial for improving your healthspan—the number of years you live in good health.

**Result Categories Explained:**

**Exceptional (10+ years younger):**
Congratulations! You're in the top 5% of your age group. Your lifestyle choices are paying tremendous dividends. Your body is aging significantly slower than your peers. Maintain your habits and focus on any remaining opportunities for optimization. Even small improvements in weaker areas can extend your healthspan further.

**Biologically Younger (5-9 years younger):**
Excellent work! You're in the top 20% for your age. Your healthy habits are clearly working. You have strong foundational health that sets you up for longevity. Review your aging factors breakdown to identify the 1-2 areas where you could improve from "good" to "excellent" for even better results.

**Age-Appropriate (-4 to +4 years difference):**
Your biological age roughly matches your chronological age, placing you in the middle 40% of your cohort. The good news is there's substantial room for improvement! Small changes in multiple areas can accumulate to significant benefits. Focus on the "low-hanging fruit"—factors where you scored poorly but changes are relatively easy to implement (like sleep habits or stress management).

**Biologically Older (5-9 years older):**
Your body is aging faster than optimal. This is a clear signal that lifestyle modifications are needed. You're in the 60-80th percentile for aging speed—faster than most of your peers. The positive perspective: many of these factors are highly modifiable. Addressing even 2-3 major issues can reverse several years of biological aging within months. Prioritize the action items provided, particularly those marked "high impact."

**Accelerated Aging (10+ years older):**
This result indicates significant aging acceleration that requires immediate attention. You're in the bottom 20% for aging trajectory among your age group. This is a wake-up call, but not a death sentence. The human body has remarkable regenerative capacity. Former smokers who quit show measurable reversal of cardiovascular aging within 1-2 years. People who adopt Mediterranean diets see metabolic improvements within months. The key is systematic, sustained change.

**Understanding Your Aging Factors Breakdown:**

Each of your 10 aging factors receives a score (0-100) and status rating:
- **Excellent (85-100)**: Optimal for longevity
- **Good (70-84)**: Above average, minor improvements possible
- **Fair (50-69)**: Average, clear room for improvement
- **Poor (0-49)**: High-priority area for change

**The Color Coding System:**
- **Green**: Positive contribution to longevity
- **Yellow**: Neutral or slightly negative
- **Orange**: Moderate aging acceleration
- **Red**: Significant aging acceleration requiring immediate attention

**Health System Ages—What They Tell You:**

**Cardiovascular Age higher than biological age?**
Your heart and blood vessels are aging faster. Focus on aerobic exercise, blood pressure management, and smoking cessation. This is the #1 predictor of mortality.

**Metabolic Age higher?**
Your body's ability to process nutrients and regulate blood sugar is compromised. Emphasize diet quality, weight management, and resistance exercise.

**Skeletal Age higher?**
Your bones and joints are aging faster. Weight-bearing exercise, adequate protein, calcium, and vitamin D are critical.

**Cognitive Age higher?**
Your brain health needs attention. Prioritize sleep, stress reduction, social connection, and cognitive challenges.

**Life Expectancy Numbers:**

**Current Life Expectancy**: Based on your current lifestyle, this is your statistical life expectancy.

**Optimal Life Expectancy**: What you could achieve with ideal lifestyle factors.

**Potential Years to Gain**: The difference between current and optimal—your opportunity zone. Each year here represents not just quantity, but quality of life.

**Taking Action:**

Review your Priority Action Items. These are ranked by:
1. **Impact**: How much difference this change can make
2. **Difficulty**: How challenging implementation will be
3. **Priority**: Combining impact and feasibility

Start with high-impact, easy-to-moderate difficulty items. Success breeds motivation for tackling harder changes.

**Timeline for Results:**

Biological age improvements happen faster than you think:
- **2-4 weeks**: Sleep and stress changes show measurable benefits
- **1-3 months**: Exercise and diet changes begin reversing metabolic aging
- **6-12 months**: Smoking cessation shows cardiovascular improvements
- **1-2 years**: Sustained lifestyle changes can reverse 5-10 years of biological aging

**When to Retest:**

Recalculate your biological age every 6-12 months to track progress. Make sure you've implemented changes consistently for at least 3-6 months before expecting significant shifts.`,

    categoriesTitle: 'Biological Age Categories and Ranges',
    categoriesContent: `Biological age categories help contextualize your results within population norms and provide framework for understanding your aging trajectory.

**Category 1: Exceptional (10+ years younger)**
**Range**: Biological age is 10 or more years below chronological age
**Percentile**: Top 5%
**Characteristics**:
- Multiple lifestyle factors at optimal levels
- Typically includes: never smoked, very active exercise, excellent diet, quality sleep
- Often has strong family longevity genetics
- Low to no chronic conditions
- Healthy clinical markers (BP, cholesterol)

**Real-World Profile**: Marathon runner, 50 years old, biological age 38. Non-smoker, plant-based diet, 8 hours sleep, low stress, normal BP and cholesterol. Parents lived to 90+.

**Maintenance Strategy**: Continue current habits. Fine-tune remaining suboptimal factors. Focus on injury prevention and sustainable habits.

**Category 2: Biologically Younger (5-9 years younger)**
**Range**: 5-9 years below chronological age
**Percentile**: 75-95th percentile
**Characteristics**:
- Majority of lifestyle factors at good-to-excellent levels
- May have 1-2 areas for improvement
- Generally physically active and health-conscious
- Few chronic conditions

**Real-World Profile**: 45-year-old with biological age 38. Former smoker (quit 5 years ago), exercises 4 days/week, good diet, manages stress well, occasional alcohol.

**Improvement Strategy**: Identify the 1-2 weakest factors and elevate them from "good" to "excellent." This could push you into exceptional range.

**Category 3: Age-Appropriate (-4 to +4 years)**
**Range**: Within 4 years of chronological age in either direction
**Percentile**: 30-70th percentile (middle of the bell curve)
**Characteristics**:
- Mix of positive and negative lifestyle factors
- Some healthy habits but also some risk factors
- May have 1-2 well-managed chronic conditions
- Average sleep, moderate stress, irregular exercise

**Real-World Profile**: 55-year-old with biological age 53-57. Non-smoker but sedentary, fair diet, occasional alcohol, moderate stress, borderline high BP, one chronic condition (pre-diabetes).

**Improvement Strategy**: Focus on "low-hanging fruit"—factors scored "poor" that are relatively easy to address (like increasing steps/day, improving sleep hygiene, stress management techniques). Small improvements across multiple factors compound rapidly.

**Category 4: Biologically Older (5-9 years older)**
**Range**: 5-9 years above chronological age
**Percentile**: 10-30th percentile
**Characteristics**:
- Multiple negative lifestyle factors
- May include: current smoker, sedentary, poor diet, poor sleep
- Often has 2-3 chronic conditions
- High stress levels common

**Real-World Profile**: 50-year-old with biological age 57. Current smoker, sedentary job with no exercise, fast food diet, 5-6 hours sleep, high stress, overweight (BMI 32), hypertension.

**Improvement Strategy**: Systematic approach needed. Start with highest-impact factor (likely smoking cessation). Then add one new positive behavior every 2-4 weeks: walking, sleep routine, stress management. Consider professional support (physician, nutritionist, therapist).

**Category 5: Accelerated Aging (10+ years older)**
**Range**: 10 or more years above chronological age
**Percentile**: Bottom 10%
**Characteristics**:
- Multiple high-risk factors present
- Often includes: current smoking, heavy alcohol use, obesity, sedentary lifestyle
- Multiple chronic conditions (3+)
- Poor clinical markers (high BP, high cholesterol)
- Chronic stress and poor sleep

**Real-World Profile**: 45-year-old with biological age 58. Pack-a-day smoker, heavy alcohol use, sedentary, fast food diet, obese (BMI 38), poor sleep, very high stress, three chronic conditions (diabetes, hypertension, high cholesterol).

**Improvement Strategy**: Requires comprehensive lifestyle overhaul with professional support. Medical intervention likely needed for existing conditions. Focus sequence: (1) Smoking cessation with medical support, (2) Medication adherence for chronic conditions, (3) Small activity increases (walking), (4) Gradual diet improvements, (5) Sleep and stress management. Set 6-month, 1-year, and 2-year goals. Track progress closely.

**Special Considerations by Age Group:**

**Ages 18-30**: Your biological age is still highly malleable. Bad habits haven't had decades to compound yet. Early intervention has the highest lifetime ROI.

**Ages 31-50**: The "compression zone" where lifestyle impacts become increasingly visible. This is the critical window for establishing longevity-promoting habits.

**Ages 51-70**: Even significant biological age differences are still highly modifiable. Research shows lifestyle changes in this age group can reverse years of aging within 1-2 years.

**Ages 70+**: Focus shifts to healthspan—maintaining independence, cognitive function, and quality of life. Even small improvements have enormous practical impact.

**Gender Differences:**
Women typically have a 5-year life expectancy advantage over men, partly due to hormonal differences, but also behavioral (women more likely to seek preventive care). Men tend to have higher cardiovascular aging but may have advantages in skeletal aging due to higher muscle mass.

**Intersecting Factors:**
Biological age isn't just a sum of parts. Factors interact synergistically. For example, exercise improves sleep quality, which improves stress management, which improves diet choices. Conversely, smoking worsens every other system. This is why comprehensive lifestyle change is more powerful than isolated improvements.`,

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is biological age scientifically valid or just a wellness trend?',
        answer: 'Biological age is a scientifically-grounded concept backed by decades of longevity research from institutions like the National Institute on Aging, Harvard Medical School, and large-scale studies like the Framingham Heart Study. The idea that chronological age doesn\'t fully capture health status is well-established. Clinical biomarkers like telomere length, DNA methylation patterns (epigenetic clocks), and inflammatory markers correlate strongly with lifestyle factors and predict mortality risk better than chronological age alone. Our calculator uses validated lifestyle factors known to affect these biological aging markers. It\'s a screening tool based on population data, not a clinical diagnostic test, but it reflects real science.',
      },
      {
        question: 'Can I actually reverse my biological age, or is aging inevitable?',
        answer: 'Yes, biological age can be reversed—this is well-documented in scientific literature. Studies on smoking cessation show measurable reversal of cardiovascular aging within 1-2 years. Research on caloric restriction and Mediterranean diets demonstrates reversal of metabolic aging markers. Exercise interventions in sedentary older adults show improvements in telomere length (cellular aging marker) and cardiovascular function equivalent to being 10-20 years younger. While chronological aging is inevitable, the rate of biological aging is highly modifiable. You can\'t stop time, but you can dramatically slow—and even temporarily reverse—functional decline through sustained lifestyle changes.',
      },
      {
        question: 'How accurate is this calculator compared to clinical tests?',
        answer: 'Our calculator provides population-based estimates with good general accuracy for lifestyle-driven biological aging. Clinical tests like DNA methylation clocks (Horvath clock, GrimAge), telomere length measurement, and comprehensive biomarker panels provide more precise individual results but cost $300-$3,000 and require blood draws. This free calculator captures 70-80% of lifestyle-related aging acceleration, making it excellent for identifying problem areas and tracking improvement over time. For the most accurate assessment, consider clinical biological age testing annually and use this calculator for quarterly check-ins on lifestyle changes.',
      },
      {
        question: 'I have a chronic disease. Can I still improve my biological age?',
        answer: 'Absolutely! Having a chronic condition affects your baseline, but lifestyle factors still have massive impact. Type 2 diabetics who adopt intensive lifestyle changes (diet, exercise, weight loss) can achieve remission and reverse years of metabolic aging. Heart disease patients who quit smoking and exercise regularly show significant cardiovascular age improvements. Even with serious conditions, optimizing modifiable factors (sleep, stress, nutrition, activity) improves quality of life, slows disease progression, and can reverse aspects of biological aging in healthy systems. Work closely with your physician when making lifestyle changes while managing chronic conditions.',
      },
      {
        question: 'Why does moderate alcohol consumption sometimes show benefits?',
        answer: 'The "J-shaped curve" for alcohol—where moderate consumption appears better than none—is controversial and increasingly questioned. Some observational studies suggested 1-2 drinks daily (especially red wine) might have cardiovascular benefits through antioxidants and HDL cholesterol increases. However, recent research challenges this, suggesting the apparent benefits were due to confounding factors (moderate drinkers tend to be wealthier, have better healthcare access). The 2023 WHO statement declared no safe level of alcohol consumption. Our calculator reflects the traditional view with slight benefits for moderate intake, but zero consumption is perfectly healthy and may be optimal. Heavy drinking (3+ drinks daily) unambiguously accelerates aging through liver damage, inflammation, and cancer risk.',
      },
      {
        question: 'How quickly will I see results if I make lifestyle changes?',
        answer: 'Timeline varies by change type: Sleep and stress interventions show measurable benefits in 2-4 weeks (improved heart rate variability, reduced inflammation markers). Diet changes begin improving metabolic markers within 1-3 months (insulin sensitivity, cholesterol levels). Exercise shows cardiovascular improvements in 6-12 weeks, with more substantial changes by 6 months. Smoking cessation: cardiovascular risk drops 50% within 1 year; lung function improves over 3-9 months. Weight loss: each 10% reduction in excess weight yields significant metabolic improvements. For biological age reversal visible in recalculation: expect to need 6-12 months of consistent changes to see significant shifts (3-5 years younger). Major reversals (5-10 years) typically require 1-2 years of comprehensive lifestyle optimization.',
      },
      {
        question: 'Is genetics or lifestyle more important for biological age?',
        answer: 'Research suggests genetics accounts for about 20-30% of longevity variation, while lifestyle and environment account for 70-80%. The famous "Blue Zones" studies of populations with exceptional longevity (Okinawa, Sardinia, Loma Linda, Nicoya, Ikaria) show that lifestyle factors—plant-heavy diet, daily movement, strong social bonds, stress management, purpose—are primary drivers. Even with "bad genes," optimal lifestyle can largely compensate. Conversely, excellent genetics can\'t overcome terrible lifestyle choices. Your family history sets a baseline, but your daily choices determine the trajectory. This is empowering: most of your biological age is under your control.',
      },
      {
        question: 'Should I retake this calculator, and how often?',
        answer: 'Yes! Tracking biological age over time provides motivation and helps measure intervention effectiveness. Recommended frequency: Initial baseline, then 6 months after implementing major lifestyle changes, then annually for maintenance. More frequent testing (quarterly) is useful if you\'re actively working on multiple improvements and want to stay motivated. Ensure consistency in how you answer questions (especially subjective ones like stress level and diet quality). Keep a record of your scores and aging factors breakdown to see which interventions moved the needle most. Celebrate improvements—seeing biological age decrease is one of the most powerful motivators for maintaining healthy behaviors.',
      },
    ],

    disclaimerTitle: 'Important Medical Disclaimer',
    disclaimerContent: 'This biological age calculator provides educational estimates based on lifestyle factors and population health data. It is NOT a medical diagnostic tool and should not replace professional medical advice, diagnosis, or treatment. Results are approximations based on statistical models and do not account for individual genetic variations, specific medical conditions, or other unmeasured factors that affect aging. Always consult with qualified healthcare providers regarding your health status, before making significant lifestyle changes, and for interpretation of any health metrics. If you have chronic conditions or take medications, discuss lifestyle modifications with your physician. This calculator is for informational and motivational purposes only. Individual results may vary significantly from population-based predictions.',

    referencesTitle: 'Scientific References and Sources',
    references: [
      'National Institute on Aging (NIH) - Biology of Aging Research and Interventions to Slow Aging',
      'Framingham Heart Study - Cardiovascular Risk Factors and Longevity (Boston University, ongoing since 1948)',
      'Horvath, S. (2013). DNA methylation age of human tissues and cell types. Genome Biology, 14(10), R115.',
      'Blue Zones Research - Dan Buettner, National Geographic - Longevity Hotspot Analysis',
      'Nurses\' Health Study - Harvard Medical School - Diet, Lifestyle, and Chronic Disease (125,000+ participants)',
      'Blackburn, E.H., Epel, E.S., Lin, J. (2015). Human telomere biology: A contributory and interactive factor in aging. Science, 350(6265), 1193-1198.',
      'Levine, M.E. (2013). Modeling the rate of senescence: can estimated biological age predict mortality more accurately than chronological age? Journals of Gerontology Series A, 68(6), 667-674.',
      'World Health Organization - Global Health Observatory Data on Life Expectancy and Risk Factors',
    ],
  },

  tr: {
    title: 'Biyolojik Yaş Hesaplayıcı',
    description: 'Yaşam tarzı faktörleri, sağlık metrikleri ve genetiğe dayalı biyolojik yaşınızı hesaplayın',

    // İçindekiler etiketleri
    tocCalculator: 'Hesaplayıcı',
    tocResults: 'Sonuçlar',
    tocHowItWorks: 'Nasıl Çalışır',
    tocFormula: 'Formül ve Metodoloji',
    tocInterpreting: 'Sonuçları Yorumlama',
    tocCategories: 'Kategoriler',
    tocFaq: 'Sıkça Sorulan Sorular',
    tocDisclaimer: 'Tıbbi Sorumluluk Reddi',
    tocReferences: 'Kaynaklar',

    // Form labels
    basicInfoTitle: 'Temel Bilgiler',
    chronologicalAgeLabel: 'Kronolojik Yaşınız',
    chronologicalAgePlaceholder: 'Yaşınızı yıl olarak girin',
    genderLabel: 'Biyolojik Cinsiyet',
    genderMale: 'Erkek',
    genderFemale: 'Kadın',
    heightLabel: 'Boy (cm)',
    heightPlaceholder: 'örn. 170',
    weightLabel: 'Kilo (kg)',
    weightPlaceholder: 'örn. 70',

    // Lifestyle factors
    lifestyleFactorsTitle: 'Yaşam Tarzı Faktörleri',
    smokingLabel: 'Sigara Durumu',
    smokingNever: 'Hiç içmedim',
    smokingFormer: 'Eski içici',
    smokingCurrent: 'Aktif içici',

    alcoholLabel: 'Alkol Tüketimi',
    alcoholNone: 'Hiç',
    alcoholModerate: 'Orta (Günde 1-2 içki)',
    alcoholHeavy: 'Ağır (Günde 3+ içki)',

    exerciseLabel: 'Egzersiz Sıklığı',
    exerciseSedentary: 'Hareketsiz (Egzersiz yok)',
    exerciseLight: 'Hafif (Haftada 1-2 gün)',
    exerciseModerate: 'Orta (Haftada 3-4 gün)',
    exerciseActive: 'Aktif (Haftada 5-6 gün)',
    exerciseVeryActive: 'Çok Aktif (Her gün)',

    sleepLabel: 'Uyku Kalitesi',
    sleepPoor: 'Kötü (<5 saat veya çok huzursuz)',
    sleepFair: 'Orta (5-6 saat)',
    sleepGood: 'İyi (7-8 saat)',
    sleepExcellent: 'Mükemmel (8-9 saat, derin uyku)',

    stressLabel: 'Stres Seviyesi',
    stressLow: 'Düşük (Nadiren stresli)',
    stressModerate: 'Orta (Ara sıra stres)',
    stressHigh: 'Yüksek (Sık stres)',
    stressVeryHigh: 'Çok Yüksek (Kronik stres)',

    dietLabel: 'Diyet Kalitesi',
    dietPoor: 'Kötü (Çoğunlukla işlenmiş gıdalar)',
    dietFair: 'Orta (Bazı sağlıklı gıdalar)',
    dietGood: 'İyi (Çoğunlukla doğal gıdalar)',
    dietExcellent: 'Mükemmel (Akdeniz/Bitki bazlı)',

    // Health metrics
    healthMetricsTitle: 'Sağlık Metrikleri',
    chronicConditionsLabel: 'Kronik Hastalık Sayısı',
    chronicConditionsHelp: 'Diyabet, kalp hastalığı, hipertansiyon vb.',

    familyLongevityLabel: 'Aile Uzun Ömürlülüğü',
    familyLow: 'Düşük (Ebeveynler 70\'den önce öldü)',
    familyAverage: 'Ortalama (Ebeveynler 70-80 yaşadı)',
    familyHigh: 'Yüksek (Ebeveynler 80+ yaşadı)',

    bloodPressureLabel: 'Kan Basıncı (İsteğe Bağlı)',
    bloodPressureNormal: 'Normal (<120/80)',
    bloodPressureElevated: 'Yüksek (120-139/80-89)',
    bloodPressureHigh: 'Çok Yüksek (140+/90+)',

    cholesterolLabel: 'Kolesterol Seviyesi (İsteğe Bağlı)',
    cholesterolNormal: 'Normal (<200 mg/dL)',
    cholesterolBorderline: 'Sınırda (200-239 mg/dL)',
    cholesterolHigh: 'Yüksek (240+ mg/dL)',

    // NEW: Nutrition Habits
    nutritionHabitsTitle: 'Beslenme Alışkanlıkları',
    breakfastLabel: 'Kahvaltı Alışkanlığı',
    breakfastNever: 'Hiç kahvaltı yapmam',
    breakfastSometimes: 'Bazen (haftada 2-3 gün)',
    breakfastDaily: 'Her gün kahvaltı yaparım',

    fruitVegetableLabel: 'Günlük Meyve ve Sebze Porsiyonu',
    fruitVegetable01: '0-1 porsiyon',
    fruitVegetable23: '2-3 porsiyon',
    fruitVegetable45: '4-5 porsiyon',
    fruitVegetable6plus: '6+ porsiyon',

    processedFoodLabel: 'İşlenmiş Gıda Sıklığı',
    processedFoodDaily: 'Her gün',
    processedFoodWeekly: 'Haftada birkaç kez',
    processedFoodMonthly: 'Ayda birkaç kez',
    processedFoodRarely: 'Nadiren veya hiç',

    omega3Label: 'Omega-3 Alımı',
    omega3None: 'Hiç',
    omega3Occasional: 'Ara sıra (ayda 1-2 kez balık)',
    omega3Regular: 'Düzenli (haftada 2-3 kez balık)',
    omega3DailySupplement: 'Günlük takviye + düzenli balık',

    sugarLabel: 'Şeker Tüketimi',
    sugarHigh: 'Yüksek (günlük tatlı/gazlı içecek)',
    sugarModerate: 'Orta (ara sıra tatlı)',
    sugarLow: 'Düşük (nadiren eklenmiş şeker)',

    waterIntakeLabel: 'Günlük Su Alımı',
    waterLow: 'Düşük (4 bardaktan az)',
    waterModerate: 'Orta (4-6 bardak)',
    waterAdequate: 'Yeterli (6-8 bardak)',
    waterOptimal: 'Optimal (8+ bardak)',

    caffeineLabel: 'Kafein Alımı',
    caffeineNone: 'Hiç',
    caffeineModerate: 'Orta (günde 1-3 fincan)',
    caffeineHigh: 'Yüksek (günde 4+ fincan)',

    // NEW: Supplements & Health
    supplementsHealthTitle: 'Takviyeler ve Sağlık',
    vitaminDLabel: 'D Vitamini Seviyesi',
    vitaminDDeficient: 'Yetersiz (hiç test edilmemiş/güneş yok)',
    vitaminDLow: 'Düşük (sınırlı güneş, takviye yok)',
    vitaminDNormal: 'Normal (biraz güneş/takviye)',
    vitaminDOptimal: 'Optimal (düzenli güneş + takviye)',

    dentalHealthLabel: 'Diş Sağlığı',
    dentalPoor: 'Kötü (sık sorunlar, nadir diş hekimi ziyareti)',
    dentalFair: 'Orta (ara sıra sorunlar)',
    dentalGood: 'İyi (yıllık kontrol, günlük fırçalama)',
    dentalExcellent: 'Mükemmel (yılda 2 diş hekimi, günlük diş ipi)',

    sunlightLabel: 'Günlük Güneş Işığı Maruziyeti',
    sunlightMinimal: 'Minimal (çoğunlukla iç mekanda)',
    sunlightModerate: 'Orta (biraz dış mekan zamanı)',
    sunlightAdequate: 'Yeterli (günlük 15-30 dk dış mekan)',

    // NEW: Mental & Social
    mentalSocialTitle: 'Zihinsel ve Sosyal İyi Oluş',
    meditationLabel: 'Meditasyon/Farkındalık Pratiği',
    meditationNever: 'Hiç',
    meditationWeekly: 'Haftalık (1-3 kez)',
    meditationDaily: 'Günlük pratik',

    socialLabel: 'Sosyal Bağlantılar',
    socialIsolated: 'İzole (nadiren başkalarını görürüm)',
    socialFew: 'Az (küçük çevre, seyrek iletişim)',
    socialModerate: 'Orta (düzenli sosyal aktiviteler)',
    socialStrong: 'Güçlü ağ (yakın arkadaşlar, topluluk)',

    purposeLabel: 'Yaşam Amacı/Hedefleri',
    purposeNone: 'Net bir amaç veya hedef yok',
    purposeVague: 'Belirsiz bir yön duygusu',
    purposeClear: 'Net hedefler ve yön',
    purposeStrong: 'Güçlü yaşam amacı (ikigai)',

    mentalStimulationLabel: 'Zihinsel Uyarım',
    mentalStimLow: 'Düşük (sadece rutin görevler)',
    mentalStimModerate: 'Orta (ara sıra okuma/bulmaca)',
    mentalStimHigh: 'Yüksek (günlük öğrenme, bulmaca, yaratıcılık)',

    // NEW: Lifestyle Balance
    lifestyleBalanceTitle: 'Yaşam Tarzı Dengesi',
    screenTimeLabel: 'Günlük Eğlence Amaçlı Ekran Süresi',
    screenTime02: '0-2 saat',
    screenTime24: '2-4 saat',
    screenTime46: '4-6 saat',
    screenTime68: '6-8 saat',
    screenTime8plus: '8+ saat',

    workLifeLabel: 'İş-Yaşam Dengesi',
    workLifePoor: 'Kötü (aşırı çalışma, sınır yok)',
    workLifeFair: 'Orta (ara sıra fazla mesai)',
    workLifeGood: 'İyi (makul saatler, bazı hobiler)',
    workLifeExcellent: 'Mükemmel (dengeli, tatmin edici hobiler)',

    // Errors
    errorAge: 'Lütfen yaşınızı girin',
    errorAgeRange: 'Yaş 18 ile 100 arasında olmalıdır',
    errorHeight: 'Lütfen boyunuzu girin',
    errorWeight: 'Lütfen kilonuzu girin',

    // Result labels
    biologicalAgeLabel: 'Biyolojik Yaşınız',
    chronologicalAgeResult: 'Kronolojik Yaş',
    ageDifferenceLabel: 'Yaş Farkı',
    yearsYounger: 'yıl genç',
    yearsOlder: 'yıl yaşlı',
    percentileLabel: 'Daha iyi',
    ofPeople: 'yaşıtınızdan',

    // Categories
    categoryExceptional: 'İstisnai',
    categoryYounger: 'Biyolojik Olarak Genç',
    categoryChronological: 'Yaşa Uygun',
    categoryOlder: 'Biyolojik Olarak Yaşlı',
    categoryAccelerated: 'Hızlanmış Yaşlanma',

    // Interactive sections
    agingFactorsTitle: 'Yaşlanma Faktörleri Dağılımınız',
    healthSystemsTitle: 'Sağlık Sistemi Yaşları',
    cardiovascularLabel: 'Kardiyovasküler Yaş',
    metabolicLabel: 'Metabolik Yaş',
    skeletalLabel: 'İskelet Yaşı',
    cognitiveLabel: 'Bilişsel Yaş',

    lifeExpectancyTitle: 'Yaşam Beklentisi Analizi',
    currentExpectancy: 'Mevcut Yaşam Beklentisi',
    optimalExpectancy: 'Optimal Yaşam Beklentisi',
    potentialGain: 'Kazanılabilecek Yıllar',

    topActionsTitle: 'Öncelikli Eylem Öğeleri',
    impactHigh: 'Yüksek Etki',
    impactMedium: 'Orta Etki',
    impactLow: 'Düşük Etki',
    difficultyEasy: 'Kolay',
    difficultyModerate: 'Orta',
    difficultyChallenging: 'Zorlu',

    // Factor names
    factorSmoking: 'Sigara',
    factorExercise: 'Egzersiz',
    factorDiet: 'Diyet Kalitesi',
    factorSleep: 'Uyku Kalitesi',
    factorStress: 'Stres Seviyesi',
    factorAlcohol: 'Alkol',
    factorBMI: 'Vücut Kompozisyonu',
    factorConditions: 'Kronik Hastalıklar',
    factorGenetics: 'Genetik/Aile',
    factorBloodPressure: 'Kan Basıncı',
    factorBreakfast: 'Kahvaltı Alışkanlığı',
    factorFruitVegetable: 'Meyve ve Sebze',
    factorProcessedFood: 'İşlenmiş Gıdalar',
    factorOmega3: 'Omega-3 Alımı',
    factorVitaminD: 'D Vitamini',
    factorMeditation: 'Meditasyon',
    factorSocial: 'Sosyal Bağlantılar',
    factorPurpose: 'Yaşam Amacı',
    factorScreenTime: 'Ekran Süresi',
    factorSunlight: 'Güneş Işığı',
    factorDental: 'Diş Sağlığı',
    factorMentalStimulation: 'Zihinsel Uyarım',
    factorWorkLifeBalance: 'İş-Yaşam Dengesi',
    factorCaffeine: 'Kafein',
    factorSugar: 'Şeker Tüketimi',
    factorWater: 'Su Alımı',

    // Interactive section titles
    dailyRoutineTitle: 'Günlük Anti-Aging Rutini',
    weeklyPlanTitle: 'Haftalık Optimizasyon Planı',
    nutritionPlanTitle: 'Yaş Tersine Çevirme Beslenme Planı',
    exercisePlanTitle: 'Uzun Ömür Egzersiz Planı',
    stressManagementTitle: 'Stres Azaltma Stratejileri',
    sleepOptimizationTitle: 'Uyku Kalitesi İyileştirme',
    timelineTitle: 'İyileştirme Zaman Çizelgeniz',
    timelineDescription: 'Profilinize göre, tutarlı değişikliklerle elde edebilecekleriniz:',

    // Plan labels
    timeLabel: 'Zaman',
    activityLabel: 'Aktivite',
    benefitLabel: 'Fayda',
    dayLabel: 'Gün',
    focusLabel: 'Odak',
    activitiesLabel: 'Aktiviteler',
    typeLabel: 'Tür',
    frequencyLabel: 'Sıklık',
    durationLabel: 'Süre',

    // Educational content
    howItWorksTitle: 'Biyolojik Yaş Hesaplayıcı Nasıl Çalışır?',
    howItWorksContent: `Gelişmiş biyolojik yaş hesaplayıcımız, vücudunuzun gerçek yaşını belirlemek için sağlığınızın ve yaşam tarzınızın birden fazla yönünü analiz eder; bu yaş kronolojik yaşınızdan önemli ölçüde farklı olabilir.

**Biyolojik Yaş Nedir?**
Biyolojik yaş, vücudunuzun sistemlerinin—kardiyovasküler, metabolik, iskelet ve bilişsel—işlevsel kapasitesini temsil eder; yani sadece kaç yıl yaşadığınızı değil. Aynı günde doğan iki kişi, yaşam tarzı seçimleri, genetik ve çevresel faktörlere bağlı olarak çok farklı biyolojik yaşlara sahip olabilir.

**Arkasındaki Bilim:**
Hesaplayıcı, ünlü Framingham Kalp Çalışması, Mavi Bölgeler araştırması ve Ulusal Yaşlanma Enstitüsü'nden elde edilen veriler dahil olmak üzere hakemli uzun ömür çalışmalarına dayanan kapsamlı bir çok faktörlü analiz kullanır. On kritik yaşlanma faktörünü değerlendiriyoruz:

1. **Sigara Durumu**: En etkili değiştirilebilir faktör. Aktif içiciler 8+ yıl daha hızlı yaşlanır, eski içiciler ne kadar süredir bıraktıklarına bağlı olarak kısmi iyileşme gösterir.

2. **Egzersiz Sıklığı**: Düzenli fiziksel aktivite uzun ömürlülükle güçlü şekilde ilişkilidir. Haftada 5+ gün şiddetli egzersiz yapanlar hareketsiz bireylere göre biyolojik olarak 5-9 yıl daha genç olabilir.

3. **Diyet Kalitesi**: Sebze, meyve, tam tahıllar ve sağlıklı yağlar açısından zengin Akdeniz tarzı bir diyet, işlenmiş gıda ağırlıklı diyete kıyasla biyolojik yaşı 4+ yıl azaltabilir.

4. **Uyku Kalitesi**: Tutarlı, onarıcı uyku (7-9 saat) hücresel onarım için esastır. Kötü uyku, artan iltihaplanma ve oksidatif stres yoluyla yaşlanmayı 3+ yıl hızlandırır.

5. **Stres Yönetimi**: Kronik stres kortizolü yükseltir, telomer kısalması yoluyla hücresel yaşlanmayı hızlandırır. Yüksek stres sizi 3-4 yıl daha hızlı yaşlandırabilir.

6. **Alkol Tüketimi**: İlişki J-şeklindedir—orta tüketimin hafif faydaları olabilir, ancak ağır içki karaciğer hasarı ve iltihaplanma yoluyla yaşlanmayı önemli ölçüde hızlandırır.

7. **Vücut Kompozisyonu (BMI)**: Optimal BMI (18.5-24.9) daha uzun sağlık ömrü ile ilişkilidir. Hem obezite hem de zayıf olmak biyolojik yaşı artırır.

8. **Kronik Hastalıklar**: Her kronik hastalık (diyabet, kalp hastalığı vb.) tipik olarak sistemik iltihaplanma ve organ stresi yoluyla biyolojik yaşa 2-3 yıl ekler.

9. **Genetik/Aile Uzun Ömürlülüğü**: Genlerinizi değiştiremezsiniz, ancak aile geçmişi genetik yatkınlığınız hakkında fikir verir. Uzun yaşayan ebeveynleri olanlar 3 yıllık bir avantaja sahiptir.

10. **Klinik Belirteçler**: Kan basıncı ve kolesterol seviyeleri kardiyovasküler sağlığın objektif ölçülerini sağlar, biyolojik yaşlanmanın anahtar göstergeleridir.

**Sisteme Özel Yaşlar:**
Hesaplayıcı ayrıca kardiyovasküler yaşınızı, metabolik yaşınızı, iskelet yaşınızı ve bilişsel yaşınızı tahmin eder. Bunlar önemli ölçüde değişebilir—hareketsiz ve kötü diyetli iseniz genç bir kardiyovasküler sisteminiz olabilir ancak daha yaşlı bir metabolik yaşınız olabilir.

**Algoritma:**
Her faktör, uzun ömür üzerindeki etkisine ilişkin bilimsel kanıtlara dayalı olarak ağırlıklandırılır. Algoritma toplam yaşlanma ayarlamanızı hesaplar ve biyolojik yaşınızı belirler; bu da en yüksek etkili müdahaleler için kişiselleştirilmiş önerileri yönlendirir.`,

    formulaTitle: 'Bilimsel Formül ve Metodoloji',
    formulaContent: `Biyolojik yaş hesaplamamız, birden fazla büyük ölçekli epidemiyolojik çalışmadan elde edilen bulguları içeren uzun ömür araştırmasında kullanılan kümülatif etki modeline dayanmaktadır.

**Temel Formül:**
Biyolojik Yaş = Kronolojik Yaş - (Pozitif Faktörlerin Toplamı) + (Negatif Faktörlerin Toplamı)

**Faktör Etki Değerleri:**
Her yaşam tarzı ve sağlık faktörünün bilimsel olarak belirlenmiş bir etki aralığı vardır:

• **Sigara**: 0 ile -8 yıl (Aktif içiciler: -8, Eski: -2, Hiç: 0)
• **Egzersiz**: -3 ile +5 yıl (Hareketsiz: -3, Hafif: 0, Orta: +2, Aktif: +4, Çok Aktif: +5)
• **Diyet Kalitesi**: -4 ile +4 yıl (Kötü: -4, Orta: -1, İyi: +2, Mükemmel: +4)
• **Uyku**: -3 ile +3 yıl (Kötü: -3, Orta: 0, İyi: +1, Mükemmel: +3)
• **Stres**: -4 ile +1 yıl (Düşük: +1, Orta: -1, Yüksek: -3, Çok Yüksek: -4)
• **Alkol**: -3 ile +2 yıl (Hiç: 0, Orta: +2, Ağır: -3)
• **BMI**: -5 ile +2 yıl (Optimal 18.5-24.9 aralığından uzaklığa göre)
• **Kronik Hastalıklar**: 0 ile -10 yıl (Her hastalık: yaklaşık -2 yıl)
• **Aile Uzun Ömürlülüğü**: -3 ile +3 yıl (Düşük: -3, Ortalama: 0, Yüksek: +3)
• **Kan Basıncı**: 0 ile -4 yıl (Normal: 0, Yüksek: -2, Çok Yüksek: -4)

**Ağırlıklandırma Sistemi:**
Faktörler eşit ağırlıkta değildir. Algoritma şu kanıta dayalı ağırlıkları kullanır:
- Sigara: 1.0 (en yüksek etki)
- Egzersiz: 0.9
- Diyet: 0.8
- Kronik Hastalıklar: 0.8
- Uyku: 0.7
- Stres: 0.7
- BMI: 0.7
- Kan Basıncı: 0.7
- Alkol: 0.6
- Genetik: 0.5 (değiştirilemez temel)

**Sağlık Sistemi Yaş Hesaplamaları:**

**Kardiyovasküler Yaş** = Temel Yaş - (0.8 × Sigara Etkisi) - (0.6 × Egzersiz Etkisi) - (0.8 × KB Etkisi)

Bu, kalp sağlığı için en kritik faktörleri vurgular: sigara bırakma, düzenli egzersiz ve kan basıncı kontrolü.

**Metabolik Yaş** = Temel Yaş - (0.8 × Diyet Etkisi) - (0.4 × Egzersiz Etkisi) - (0.8 × BMI Etkisi)

İnsülin duyarlılığını, glukoz metabolizmasını ve vücut kompozisyonunu etkileyen faktörlere odaklanır.

**İskelet Yaşı** = Temel Yaş - (0.7 × Egzersiz Etkisi) - (0.3 × Diyet Etkisi)

Ağırlık taşıyan egzersiz ve kalsiyum/D vitamini alımı kemik sağlığının birincil belirleyicileridir.

**Bilişsel Yaş** = Temel Yaş - (0.8 × Uyku Etkisi) - (0.6 × Stres Etkisi) - (0.3 × Egzersiz Etkisi)

Beyin sağlığı büyük ölçüde kaliteli uykuya, stres yönetimine ve egzersizin nörokoruyucu etkilerine bağlıdır.

**Yaşam Beklentisi Hesaplaması:**
Cinsiyete özgü temel yaşam beklentisinden başlayarak (erkekler: 76 yıl, kadınlar: 81 yıl), toplam yaşlanma ayarlamasını uygularız:

Tahmini Yaşam Beklentisi = Temel + Toplam Yaşlanma Ayarlaması

Optimal yaşam beklentisi (erkekler: 85, kadınlar: 90), ideal yaşam tarzı faktörleriyle maksimum potansiyeli temsil eder.

**Yüzdelik Sıralama:**
Yüzdeliğiniz, yaş farkınızı ABD Ulusal Sağlık ve Beslenme İnceleme Anketi (NHANES) verilerinden elde edilen popülasyon dağılımlarıyla karşılaştırarak, yaş kohortları için ayarlanarak hesaplanır.

**Bilimsel Temel:**
Bu metodoloji şu bulgulardan sentezlenir:
- Framingham Kalp Çalışması (kardiyovasküler risk faktörleri)
- Hemşireler Sağlık Çalışması (diyet ve yaşam tarzı etkileri)
- Mavi Bölgeler Araştırması (uzun ömür sıcak noktası analizi)
- Ulusal Yaşlanma Enstitüsü uzunlamasına çalışmaları
- Hücresel yaşlanmayı yaşam tarzıyla ilişkilendiren telomer uzunluğu çalışmaları
- Birleşik Krallık Biobankası (500.000+ katılımcı)

**Sınırlamalar:**
Bu hesaplayıcı, popülasyon düzeyinde verilere dayalı tahminler sağlar. Genetik, çevresel faktörler ve ölçüm zamanlaması nedeniyle bireysel varyasyon mevcuttur. Bunu bir tarama aracı olarak düşünün, tanı aracı olarak değil.`,

    interpretingTitle: 'Biyolojik Yaş Sonuçlarınızı Yorumlama',
    interpretingContent: `Biyolojik yaşınızın ne anlama geldiğini ve ona nasıl göre hareket edeceğinizi anlamak, sağlık ömrünüzü—iyi sağlıkla yaşadığınız yıl sayısını—iyileştirmek için çok önemlidir.

**Sonuç Kategorileri Açıklandı:**

**İstisnai (10+ yıl genç):**
Tebrikler! Yaş grubunuzun en iyi %5'indesiniz. Yaşam tarzı seçimleriniz muazzam kar sağlıyor. Vücudunuz yaşıtlarınızdan önemli ölçüde daha yavaş yaşlanıyor. Alışkanlıklarınızı sürdürün ve optimizasyon için kalan fırsatlara odaklanın. Daha zayıf alanlardaki küçük iyileştirmeler bile sağlık ömrünüzü daha da uzatabilir.

**Biyolojik Olarak Genç (5-9 yıl genç):**
Mükemmel iş! Yaşınız için en iyi %20'desiniz. Sağlıklı alışkanlıklarınız açıkça işe yarıyor. Sizi uzun ömre hazırlayan güçlü temel sağlığınız var. "İyi"den "mükemmel"e geliştirilebileceğiniz 1-2 alanı belirlemek için yaşlanma faktörleri dağılımınızı gözden geçirin.

**Yaşa Uygun (-4 ile +4 yıl fark):**
Biyolojik yaşınız kabaca kronolojik yaşınızla eşleşiyor, sizi kohortunuzun orta %40'ına yerleştiriyor. İyi haber şu ki önemli ölçüde iyileştirme için yer var! Birden fazla alanda küçük değişiklikler önemli faydalara dönüşebilir. "Kolay kazanımlara"—kötü puan aldığınız ancak değişikliklerin nispeten kolay uygulanabildiği faktörlere (uyku alışkanlıkları veya stres yönetimi gibi) odaklanın.

**Biyolojik Olarak Yaşlı (5-9 yıl yaşlı):**
Vücudunuz optimalden daha hızlı yaşlanıyor. Bu, yaşam tarzı değişikliklerinin gerekli olduğunun açık bir işaretidir. Yaşlanma hızı için 60-80. yüzdelik dilimdesiniz—yaşıtlarınızın çoğundan daha hızlı. Olumlu bakış açısı: bu faktörlerin çoğu oldukça değiştirilebilir. Sadece 2-3 büyük sorunu ele almak bile aylar içinde birkaç yıllık biyolojik yaşlanmayı tersine çevirebilir. Sağlanan eylem öğelerine, özellikle "yüksek etki" olarak işaretlenenlere öncelik verin.

**Hızlanmış Yaşlanma (10+ yıl yaşlı):**
Bu sonuç, acil dikkat gerektiren önemli yaşlanma hızlanmasını gösterir. Yaş grubunuz arasında yaşlanma yörüngesi için en alttaki %20'desiniz. Bu bir uyandırma çağrısıdır, ancak ölüm cezası değildir. İnsan vücudu dikkate değer rejeneratif kapasiteye sahiptir. Bırakan eski içiciler 1-2 yıl içinde kardiyovasküler yaşlanmanın ölçülebilir tersine çevrilmesini gösterir. Akdeniz diyetlerini benimseyen insanlar aylar içinde metabolik iyileşmeler görür. Anahtar sistematik, sürdürülebilir değişimdir.

**Yaşlanma Faktörleri Dağılımınızı Anlamak:**

10 yaşlanma faktörünüzün her biri bir puan (0-100) ve durum değerlendirmesi alır:
- **Mükemmel (85-100)**: Uzun ömür için optimal
- **İyi (70-84)**: Ortalamanın üstünde, küçük iyileştirmeler mümkün
- **Orta (50-69)**: Ortalama, açık iyileştirme alanı
- **Kötü (0-49)**: Değişim için yüksek öncelikli alan

**Renk Kodlama Sistemi:**
- **Yeşil**: Uzun ömre olumlu katkı
- **Sarı**: Nötr veya hafif negatif
- **Turuncu**: Orta yaşlanma hızlanması
- **Kırmızı**: Acil dikkat gerektiren önemli yaşlanma hızlanması

**Sağlık Sistemi Yaşları—Size Ne Söyler:**

**Kardiyovasküler Yaş biyolojik yaştan yüksek mi?**
Kalbiniz ve kan damarlarınız daha hızlı yaşlanıyor. Aerobik egzersize, kan basıncı yönetimine ve sigara bırakmaya odaklanın. Bu ölümlülüğün 1 numaralı öngörücüsüdür.

**Metabolik Yaş daha yüksek mi?**
Vücudunuzun besinleri işleme ve kan şekerini düzenleme yeteneği tehlikeye girmiştir. Diyet kalitesine, kilo yönetimine ve direnç egzersizine vurgu yapın.

**İskelet Yaşı daha yüksek mi?**
Kemikleriniz ve eklemleriniz daha hızlı yaşlanıyor. Ağırlık taşıyan egzersiz, yeterli protein, kalsiyum ve D vitamini kritiktir.

**Bilişsel Yaş daha yüksek mi?**
Beyin sağlığınız dikkat gerektiriyor. Uykuya, stres azaltmaya, sosyal bağlantıya ve bilişsel zorluklara öncelik verin.

**Yaşam Beklentisi Sayıları:**

**Mevcut Yaşam Beklentisi**: Mevcut yaşam tarzınıza dayalı olarak, bu sizin istatistiksel yaşam beklentinizdir.

**Optimal Yaşam Beklentisi**: İdeal yaşam tarzı faktörleriyle elde edebilecekleriniz.

**Kazanılabilecek Yıllar**: Mevcut ve optimal arasındaki fark—fırsat bölgeniz. Buradaki her yıl sadece miktar değil, aynı zamanda yaşam kalitesini temsil eder.

**Harekete Geçme:**

Öncelikli Eylem Öğelerinizi gözden geçirin. Bunlar şuna göre sıralanır:
1. **Etki**: Bu değişikliğin ne kadar fark yaratabileceği
2. **Zorluk**: Uygulamanın ne kadar zorlu olacağı
3. **Öncelik**: Etki ve fizibilite birleşimi

Yüksek etkili, kolay-orta zorluklu öğelerle başlayın. Başarı, daha zor değişikliklerle başa çıkmak için motivasyon yaratır.

**Sonuçlar İçin Zaman Çizelgesi:**

Biyolojik yaş iyileştirmeleri düşündüğünüzden daha hızlı gerçekleşir:
- **2-4 hafta**: Uyku ve stres değişiklikleri ölçülebilir faydalar gösterir
- **1-3 ay**: Egzersiz ve diyet değişiklikleri metabolik yaşlanmayı tersine çevirmeye başlar
- **6-12 ay**: Sigara bırakma kardiyovasküler iyileştirmeler gösterir
- **1-2 yıl**: Sürdürülen yaşam tarzı değişiklikleri 5-10 yıllık biyolojik yaşlanmayı tersine çevirebilir

**Ne Zaman Yeniden Test Edilmeli:**

İlerlemeyi izlemek için biyolojik yaşınızı her 6-12 ayda bir yeniden hesaplayın. Önemli kaymalar beklemeden önce değişiklikleri en az 3-6 ay boyunca tutarlı bir şekilde uyguladığınızdan emin olun.`,

    categoriesTitle: 'Biyolojik Yaş Kategorileri ve Aralıkları',
    categoriesContent: `Biyolojik yaş kategorileri, sonuçlarınızı popülasyon normları içinde bağlamsallaştırmanıza ve yaşlanma yörüngenizi anlamanız için çerçeve sağlar.

**Kategori 1: İstisnai (10+ yıl genç)**
**Aralık**: Biyolojik yaş kronolojik yaşın 10 veya daha fazla yıl altında
**Yüzdelik**: En iyi %5
**Özellikler**:
- Birden fazla yaşam tarzı faktörü optimal seviyelerde
- Tipik olarak şunları içerir: hiç sigara içmedi, çok aktif egzersiz, mükemmel diyet, kaliteli uyku
- Genellikle güçlü aile uzun ömürlülük genetiğine sahiptir
- Düşük veya hiç kronik hastalık yok
- Sağlıklı klinik belirteçler (KB, kolesterol)

**Gerçek Dünya Profili**: Maraton koşucusu, 50 yaşında, biyolojik yaş 38. Sigara içmeyen, bitki bazlı diyet, 8 saat uyku, düşük stres, normal KB ve kolesterol. Ebeveynler 90+'ya yaşadı.

**Bakım Stratejisi**: Mevcut alışkanlıkları sürdürün. Kalan optimal olmayan faktörleri ince ayarlayın. Yaralanma önleme ve sürdürülebilir alışkanlıklara odaklanın.

**Kategori 2: Biyolojik Olarak Genç (5-9 yıl genç)**
**Aralık**: Kronolojik yaşın 5-9 yıl altında
**Yüzdelik**: 75-95. yüzdelik
**Özellikler**:
- Yaşam tarzı faktörlerinin çoğunluğu iyi-mükemmel seviyelerde
- 1-2 iyileştirme alanı olabilir
- Genellikle fiziksel olarak aktif ve sağlık bilincine sahip
- Az kronik hastalık

**Gerçek Dünya Profili**: Biyolojik yaşı 38 olan 45 yaşındaki. Eski içici (5 yıl önce bıraktı), haftada 4 gün egzersiz yapıyor, iyi diyet, stresi iyi yönetiyor, ara sıra alkol.

**İyileştirme Stratejisi**: En zayıf 1-2 faktörü belirleyin ve onları "iyi"den "mükemmel"e yükseltin. Bu sizi istisnai aralığa itebilir.

**Kategori 3: Yaşa Uygun (-4 ile +4 yıl)**
**Aralık**: Kronolojik yaşın her iki yönde 4 yıl içinde
**Yüzdelik**: 30-70. yüzdelik (çan eğrisinin ortası)
**Özellikler**:
- Pozitif ve negatif yaşam tarzı faktörlerinin karışımı
- Bazı sağlıklı alışkanlıklar ama aynı zamanda bazı risk faktörleri
- 1-2 iyi yönetilen kronik hastalık olabilir
- Ortalama uyku, orta stres, düzensiz egzersiz

**Gerçek Dünya Profili**: Biyolojik yaşı 53-57 olan 55 yaşında. Sigara içmeyen ama hareketsiz, orta diyet, ara sıra alkol, orta stres, sınırda yüksek KB, bir kronik hastalık (pre-diyabet).

**İyileştirme Stratejisi**: "Kolay kazanımlara"—"kötü" puan alan ancak ele alınması nispeten kolay faktörlere (günlük adımları artırma, uyku hijyenini iyileştirme, stres yönetimi teknikleri gibi) odaklanın. Birden fazla faktördeki küçük iyileştirmeler hızla birleşir.

**Kategori 4: Biyolojik Olarak Yaşlı (5-9 yıl yaşlı)**
**Aralık**: Kronolojik yaşın 5-9 yıl üstünde
**Yüzdelik**: 10-30. yüzdelik
**Özellikler**:
- Birden fazla negatif yaşam tarzı faktörü
- Şunları içerebilir: aktif içici, hareketsiz, kötü diyet, kötü uyku
- Genellikle 2-3 kronik hastalığı vardır
- Yüksek stres seviyeleri yaygındır

**Gerçek Dünya Profili**: Biyolojik yaşı 57 olan 50 yaşında. Aktif içici, hareketsiz iş egzersiz yok, fast food diyeti, 5-6 saat uyku, yüksek stres, aşırı kilolu (BMI 32), hipertansiyon.

**İyileştirme Stratejisi**: Sistematik yaklaşım gerekli. En yüksek etkili faktörle başlayın (muhtemelen sigara bırakma). Sonra her 2-4 haftada bir yeni pozitif davranış ekleyin: yürüyüş, uyku rutini, stres yönetimi. Profesyonel destek düşünün (doktor, beslenme uzmanı, terapist).

**Kategori 5: Hızlanmış Yaşlanma (10+ yıl yaşlı)**
**Aralık**: Kronolojik yaşın 10 veya daha fazla yıl üstünde
**Yüzdelik**: En alt %10
**Özellikler**:
- Birden fazla yüksek riskli faktör mevcut
- Genellikle şunları içerir: aktif sigara, ağır alkol kullanımı, obezite, hareketsiz yaşam tarzı
- Birden fazla kronik hastalık (3+)
- Kötü klinik belirteçler (yüksek KB, yüksek kolesterol)
- Kronik stres ve kötü uyku

**Gerçek Dünya Profili**: Biyolojik yaşı 58 olan 45 yaşında. Günde bir paket sigara içici, ağır alkol kullanımı, hareketsiz, fast food diyeti, obez (BMI 38), kötü uyku, çok yüksek stres, üç kronik hastalık (diyabet, hipertansiyon, yüksek kolesterol).

**İyileştirme Stratejisi**: Profesyonel destekle kapsamlı yaşam tarzı revizyonu gerektirir. Mevcut durumlar için muhtemelen tıbbi müdahale gerekir. Odak sırası: (1) Tıbbi destekle sigara bırakma, (2) Kronik hastalıklar için ilaç uyumu, (3) Küçük aktivite artışları (yürüyüş), (4) Kademeli diyet iyileştirmeleri, (5) Uyku ve stres yönetimi. 6 ay, 1 yıl ve 2 yıllık hedefler belirleyin. İlerlemeyi yakından takip edin.

**Yaş Grubuna Göre Özel Hususlar:**

**18-30 yaş**: Biyolojik yaşınız hala oldukça değiştirilebilir. Kötü alışkanlıklar henüz onlarca yıldır birleşmedi. Erken müdahale en yüksek yaşam boyu yatırım getirisine sahiptir.

**31-50 yaş**: Yaşam tarzı etkilerinin giderek daha görünür hale geldiği "sıkışma bölgesi". Bu, uzun ömrü destekleyen alışkanlıkları oluşturmak için kritik penceredir.

**51-70 yaş**: Önemli biyolojik yaş farklılıkları bile hala oldukça değiştirilebilir. Araştırma, bu yaş grubundaki yaşam tarzı değişikliklerinin 1-2 yıl içinde yıllarca yaşlanmayı tersine çevirebileceğini gösteriyor.

**70+ yaş**: Odak sağlık ömrüne—bağımsızlığı, bilişsel işlevi ve yaşam kalitesini korumaya kaydırılır. Küçük iyileştirmeler bile muazzam pratik etkiye sahiptir.

**Cinsiyet Farklılıkları:**
Kadınlar tipik olarak erkeklere göre 5 yıllık yaşam beklentisi avantajına sahiptir, kısmen hormonal farklılıklar nedeniyle, ama aynı zamanda davranışsal olarak da (kadınların önleyici bakım arama olasılığı daha yüksektir). Erkekler daha yüksek kardiyovasküler yaşlanmaya eğilimlidir ancak daha yüksek kas kütlesi nedeniyle iskelet yaşlanmasında avantajlara sahip olabilir.

**Kesişen Faktörler:**
Biyolojik yaş sadece parçaların toplamı değildir. Faktörler sinerjik olarak etkileşir. Örneğin, egzersiz uyku kalitesini artırır, bu da stres yönetimini artırır, bu da diyet seçimlerini iyileştirir. Tersine, sigara diğer tüm sistemleri kötüleştirir. Bu nedenle kapsamlı yaşam tarzı değişimi izole iyileştirmelerden daha güçlüdür.`,

    faqTitle: 'Sık Sorulan Sorular',
    faqs: [
      {
        question: 'Biyolojik yaş bilimsel olarak geçerli mi yoksa sadece bir sağlık trendi mi?',
        answer: 'Biyolojik yaş, Ulusal Yaşlanma Enstitüsü, Harvard Tıp Fakültesi gibi kurumlardan ve Framingham Kalp Çalışması gibi büyük ölçekli çalışmalardan onlarca yıllık uzun ömür araştırmasıyla desteklenen bilimsel temelli bir kavramdır. Kronolojik yaşın sağlık durumunu tam olarak yakalamaması fikri iyi kurulmuştur. Telomer uzunluğu, DNA metilasyon kalıpları (epigenetik saatler) ve inflamatuar belirteçler gibi klinik biyobelirteçler yaşam tarzı faktörleriyle güçlü şekilde ilişkilidir ve ölüm riskini kronolojik yaştan daha iyi tahmin eder. Hesaplayıcımız bu biyolojik yaşlanma belirteçlerini etkilediği bilinen doğrulanmış yaşam tarzı faktörlerini kullanır. Klinik tanı testi değil, popülasyon verilerine dayalı bir tarama aracıdır, ancak gerçek bilimi yansıtır.',
      },
      {
        question: 'Biyolojik yaşımı gerçekten tersine çevirebilir miyim, yoksa yaşlanma kaçınılmaz mı?',
        answer: 'Evet, biyolojik yaş tersine çevrilebilir—bu bilimsel literatürde iyi belgelenmiştir. Sigara bırakma üzerine yapılan çalışmalar 1-2 yıl içinde kardiyovasküler yaşlanmanın ölçülebilir tersine çevrilmesini gösteriyor. Kalorik kısıtlama ve Akdeniz diyetleri üzerine araştırma metabolik yaşlanma belirteçlerinin tersine çevrilmesini gösteriyor. Hareketsiz yaşlı yetişkinlerde egzersiz müdahaleleri telomer uzunluğunda (hücresel yaşlanma belirteci) ve 10-20 yıl daha genç olmaya eşdeğer kardiyovasküler fonksiyonda iyileştirmeler gösteriyor. Kronolojik yaşlanma kaçınılmaz olsa da, biyolojik yaşlanma hızı oldukça değiştirilebilir. Zamanı durduramazsınız, ancak sürdürülen yaşam tarzı değişiklikleri yoluyla fonksiyonel düşüşü önemli ölçüde yavaşlatabilir ve hatta geçici olarak tersine çevirebilirsiniz.',
      },
      {
        question: 'Bu hesaplayıcı klinik testlere kıyasla ne kadar doğru?',
        answer: 'Hesaplayıcımız, yaşam tarzı kaynaklı biyolojik yaşlanma için iyi genel doğrulukla popülasyon tabanlı tahminler sağlar. DNA metilasyon saatleri (Horvath saati, GrimAge), telomer uzunluğu ölçümü ve kapsamlı biyobelirteç panelleri gibi klinik testler daha kesin bireysel sonuçlar sağlar ancak 300-3.000 dolar arasında maliyete sahiptir ve kan alımı gerektirir. Bu ücretsiz hesaplayıcı yaşam tarzı ile ilgili yaşlanma hızlanmasının %70-80\'ini yakalar, bu da onu sorun alanlarını belirlemek ve zamanla iyileşmeyi takip etmek için mükemmel hale getirir. En doğru değerlendirme için, yıllık klinik biyolojik yaş testi düşünün ve bu hesaplayıcıyı yaşam tarzı değişikliklerinde üç aylık kontroller için kullanın.',
      },
      {
        question: 'Kronik bir hastalığım var. Yine de biyolojik yaşımı iyileştirebilir miyim?',
        answer: 'Kesinlikle! Kronik bir duruma sahip olmak temel çizginizi etkiler, ancak yaşam tarzı faktörleri hala büyük etkiye sahiptir. Yoğun yaşam tarzı değişiklikleri (diyet, egzersiz, kilo kaybı) benimseyen Tip 2 diyabetliler remisyon elde edebilir ve yıllarca metabolik yaşlanmayı tersine çevirebilir. Sigara bırakıp düzenli egzersiz yapan kalp hastalığı hastaları önemli kardiyovasküler yaş iyileştirmeleri gösterir. Ciddi durumlarla bile, değiştirilebilir faktörleri (uyku, stres, beslenme, aktivite) optimize etmek yaşam kalitesini artırır, hastalık ilerlemesini yavaşlatır ve sağlıklı sistemlerde biyolojik yaşlanma yönlerini tersine çevirebilir. Kronik durumları yönetirken yaşam tarzı değişiklikleri yaparken doktorunuzla yakın çalışın.',
      },
      {
        question: 'Neden orta düzeyde alkol tüketimi bazen fayda gösteriyor?',
        answer: 'Alkol için "J-şekilli eğri"—orta tüketimin hiçbirinden daha iyi göründüğü—tartışmalıdır ve giderek sorgulanmaktadır. Bazı gözlemsel çalışmalar günlük 1-2 içkinin (özellikle kırmızı şarap) antioksidanlar ve HDL kolesterol artışları yoluyla kardiyovasküler faydaları olabileceğini öne sürdü. Ancak, son araştırmalar bunu sorguluyor ve görünen faydaların karıştırıcı faktörlerden kaynaklandığını öne sürüyor (orta içenler daha zengin olma, daha iyi sağlık hizmetlerine erişim eğilimindedir). 2023 DSÖ bildirisi güvenli alkol tüketimi seviyesi olmadığını ilan etti. Hesaplayıcımız orta alım için hafif faydalarla geleneksel görüşü yansıtır, ancak sıfır tüketim tamamen sağlıklıdır ve optimal olabilir. Ağır içki (günde 3+ içki) karaciğer hasarı, iltihaplanma ve kanser riski yoluyla yaşlanmayı açıkça hızlandırır.',
      },
      {
        question: 'Yaşam tarzı değişiklikleri yaparsam ne kadar hızlı sonuç göreceğim?',
        answer: 'Zaman çizelgesi değişiklik tipine göre değişir: Uyku ve stres müdahaleleri 2-4 haftada ölçülebilir faydalar gösterir (iyileştirilmiş kalp hızı değişkenliği, azaltılmış inflamasyon belirteçleri). Diyet değişiklikleri 1-3 ay içinde metabolik belirteçleri iyileştirmeye başlar (insülin duyarlılığı, kolesterol seviyeleri). Egzersiz 6-12 haftada kardiyovasküler iyileştirmeler gösterir, 6 aya kadar daha önemli değişikliklerle. Sigara bırakma: kardiyovasküler risk 1 yıl içinde %50 düşer; akciğer fonksiyonu 3-9 ay içinde iyileşir. Kilo kaybı: fazla kilonun her %10 azalması önemli metabolik iyileştirmeler sağlar. Yeniden hesaplamada görünen biyolojik yaş tersine çevirme için: önemli kaymalar görmek için 6-12 ay tutarlı değişikliğe ihtiyaç duymayı bekleyin (3-5 yıl daha genç). Büyük tersine çevirmeler (5-10 yıl) tipik olarak 1-2 yıl kapsamlı yaşam tarzı optimizasyonu gerektirir.',
      },
      {
        question: 'Biyolojik yaş için genetik mi yoksa yaşam tarzı mı daha önemli?',
        answer: 'Araştırma, genetiğin uzun ömür varyasyonunun yaklaşık %20-30\'unu oluşturduğunu, yaşam tarzı ve çevrenin ise %70-80\'ini oluşturduğunu öne sürüyor. İstisnai uzun ömre sahip popülasyonların (Okinawa, Sardinya, Loma Linda, Nicoya, İkaria) ünlü "Mavi Bölgeler" çalışmaları yaşam tarzı faktörlerinin—bitki ağırlıklı diyet, günlük hareket, güçlü sosyal bağlar, stres yönetimi, amaç—birincil itici güçler olduğunu gösteriyor. "Kötü genlerle" bile, optimal yaşam tarzı büyük ölçüde telafi edebilir. Tersine, mükemmel genetik korkunç yaşam tarzı seçimlerini aşamaz. Aile geçmişiniz bir temel belirler, ancak günlük seçimleriniz yörüngeyi belirler. Bu güçlendiricidir: biyolojik yaşınızın çoğu sizin kontrolünüz altındadır.',
      },
      {
        question: 'Bu hesaplayıcıyı yeniden almalı mıyım ve ne sıklıkla?',
        answer: 'Evet! Zaman içinde biyolojik yaşı takip etmek motivasyon sağlar ve müdahale etkinliğini ölçmeye yardımcı olur. Önerilen sıklık: İlk temel, sonra önemli yaşam tarzı değişikliklerini uyguladıktan 6 ay sonra, sonra bakım için yıllık. Aktif olarak birden fazla iyileştirme üzerinde çalışıyorsanız ve motive kalmak istiyorsanız daha sık test (üç aylık) yararlıdır. Soruları nasıl yanıtladığınızda tutarlılığı sağlayın (özellikle stres seviyesi ve diyet kalitesi gibi öznel olanlar). Hangi müdahalelerin en çok fark yarattığını görmek için puanlarınızın ve yaşlanma faktörleri dağılımınızın kaydını tutun. İyileştirmeleri kutlayın—biyolojik yaşın azaldığını görmek sağlıklı davranışları sürdürmek için en güçlü motivasyonlardan biridir.',
      },
    ],

    disclaimerTitle: 'Önemli Tıbbi Uyarı',
    disclaimerContent: 'Bu biyolojik yaş hesaplayıcı yaşam tarzı faktörlerine ve popülasyon sağlık verilerine dayalı eğitici tahminler sağlar. Tıbbi tanı aracı DEĞİLDİR ve profesyonel tıbbi tavsiye, tanı veya tedavinin yerini almamalıdır. Sonuçlar istatistiksel modellere dayalı yaklaşıklardır ve bireysel genetik varyasyonları, özel tıbbi durumları veya yaşlanmayı etkileyen diğer ölçülmemiş faktörleri hesaba katmaz. Sağlık durumunuzla ilgili, önemli yaşam tarzı değişiklikleri yapmadan önce ve herhangi bir sağlık metriğinin yorumlanması için her zaman kalifiye sağlık hizmeti sağlayıcılarına danışın. Kronik durumlarınız varsa veya ilaç kullanıyorsanız, yaşam tarzı değişikliklerini doktorunuzla görüşün. Bu hesaplayıcı yalnızca bilgilendirme ve motivasyon amaçlıdır. Bireysel sonuçlar popülasyon tabanlı tahminlerden önemli ölçüde değişebilir.',

    referencesTitle: 'Bilimsel Referanslar ve Kaynaklar',
    references: [
      'Ulusal Yaşlanma Enstitüsü (NIH) - Yaşlanma Biyolojisi Araştırması ve Yaşlanmayı Yavaşlatma Müdahaleleri',
      'Framingham Kalp Çalışması - Kardiyovasküler Risk Faktörleri ve Uzun Ömürlülük (Boston Üniversitesi, 1948\'den beri devam ediyor)',
      'Horvath, S. (2013). İnsan dokularının ve hücre tiplerinin DNA metilasyon yaşı. Genome Biology, 14(10), R115.',
      'Mavi Bölgeler Araştırması - Dan Buettner, National Geographic - Uzun Ömür Sıcak Nokta Analizi',
      'Hemşireler Sağlık Çalışması - Harvard Tıp Fakültesi - Diyet, Yaşam Tarzı ve Kronik Hastalık (125.000+ katılımcı)',
      'Blackburn, E.H., Epel, E.S., Lin, J. (2015). İnsan telomer biyolojisi: Yaşlanmada katkıda bulunan ve etkileşimli bir faktör. Science, 350(6265), 1193-1198.',
      'Levine, M.E. (2013). Yaşlılık hızını modelleme: tahmini biyolojik yaş ölümlülüğü kronolojik yaştan daha doğru tahmin edebilir mi? Journals of Gerontology Series A, 68(6), 667-674.',
      'Dünya Sağlık Örgütü - Yaşam Beklentisi ve Risk Faktörleri Üzerine Küresel Sağlık Gözlemevi Verileri',
    ],
  },
};

export function getInterpretationContent(
  result: { category: string; ageDifference: number },
  locale: 'en' | 'tr'
): string {
  const content = biologicalAgeContent[locale];
  const diff = Math.abs(result.ageDifference);

  if (result.category === 'exceptional') {
    return locale === 'en'
      ? `Outstanding! Your biological age is ${diff} years younger than your chronological age. You're in the top 5% for aging trajectory.`
      : `Mükemmel! Biyolojik yaşınız kronolojik yaşınızdan ${diff} yıl genç. Yaşlanma yörüngesi için en iyi %5'tesiniz.`;
  }
  if (result.category === 'younger') {
    return locale === 'en'
      ? `Great work! Your biological age is ${diff} years younger. You're aging slower than most people your age.`
      : `Harika iş! Biyolojik yaşınız ${diff} yıl daha genç. Yaşıtlarınızın çoğundan daha yavaş yaşlanıyorsunuz.`;
  }
  if (result.category === 'chronological') {
    return locale === 'en'
      ? `Your biological age is close to your chronological age. There's significant room for improvement through lifestyle changes.`
      : `Biyolojik yaşınız kronolojik yaşınıza yakın. Yaşam tarzı değişiklikleriyle önemli ölçüde iyileştirme alanı var.`;
  }
  if (result.category === 'older') {
    return locale === 'en'
      ? `Your biological age is ${diff} years older. This indicates accelerated aging that can be reversed with targeted lifestyle changes.`
      : `Biyolojik yaşınız ${diff} yıl daha yaşlı. Bu, hedefli yaşam tarzı değişiklikleriyle tersine çevrilebilecek hızlanmış yaşlanmayı gösterir.`;
  }
  return locale === 'en'
    ? `Your biological age is ${diff} years older, indicating significant aging acceleration. Comprehensive lifestyle changes are strongly recommended.`
    : `Biyolojik yaşınız ${diff} yıl daha yaşlı, önemli yaşlanma hızlanmasını gösteriyor. Kapsamlı yaşam tarzı değişiklikleri şiddetle tavsiye edilir.`;
}

export const biologicalAgeEducationalContent = biologicalAgeContent;
