/*
 * Blog posts for Dr. Joyal S's website.
 *
 * These objects provide data for the Blog listing and individual post pages. Each
 * post includes a unique slug (used in the URL), a human‑readable title,
 * publication date, a brief excerpt and the full HTML content. The content can
 * include headings, paragraphs and lists. If you would like to update or add
 * your own articles later, simply modify this array and redeploy the site.
 */

const blogPosts = [
  {
    slug: 'understanding-diabetes-mellitus',
    title: 'Understanding Diabetes Mellitus: Types, Causes and Symptoms',
    date: '2025-07-01',
    excerpt:
      'Discover the basics of diabetes mellitus – explore the differences between Type 1 and Type 2, common causes and early warning signs.',
    content: `
      <p>Diabetes mellitus is a chronic metabolic disorder characterised by elevated blood sugar levels. It occurs when your body either doesn't produce enough insulin or cannot effectively use the insulin it produces. Insulin is a hormone produced by your pancreas that helps glucose enter your cells to be used for energy.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Types of Diabetes</h2>
      <p>There are two primary types of diabetes:</p>
      <ul class="list-disc ml-6">
        <li><strong>Type 1 Diabetes:</strong> An autoimmune condition in which the body’s immune system attacks and destroys insulin‑producing beta cells in the pancreas. People with Type 1 diabetes require lifelong insulin therapy.</li>
        <li><strong>Type 2 Diabetes:</strong> Occurs when the body becomes resistant to insulin or doesn't produce enough. This is the most common form and is often linked with lifestyle factors such as obesity and inactivity.</li>
      </ul>
      <h2 class="text-xl font-semibold mt-4 mb-2">Common Symptoms</h2>
      <p>Early signs of diabetes can include excessive thirst, frequent urination, unexplained weight loss, fatigue and blurry vision. Recognising these signs early and consulting a healthcare professional can help prevent complications.</p>
    `,
  },
  {
    slug: 'importance-of-diet-in-diabetes-management',
    title: 'The Importance of Diet in Diabetes Management',
    date: '2025-07-03',
    excerpt:
      'Good nutrition is the cornerstone of diabetes care. Learn which foods help stabilise blood sugar and which ones to limit.',
    content: `
      <p>Dietary choices play a crucial role in managing diabetes. Eating balanced meals at regular intervals helps maintain stable blood glucose levels and prevents spikes and crashes.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Focus on Whole Foods</h2>
      <p>Choose high‑fibre foods such as whole grains, legumes, fruits and vegetables. Fibre slows digestion, leading to a gradual release of glucose into the bloodstream. Lean proteins and healthy fats also help you feel full and control hunger.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Limit Simple Carbohydrates</h2>
      <p>Refined carbohydrates like white bread, sugary drinks and pastries can cause rapid increases in blood sugar. Opt for complex carbohydrates and watch portion sizes. Consult with a qualified dietitian for personalised guidance.</p>
    `,
  },
  {
    slug: 'physical-activity-and-diabetes',
    title: 'Physical Activity and Diabetes: How Exercise Improves Blood Glucose Control',
    date: '2025-07-05',
    excerpt:
      'Regular physical activity is one of the most effective tools for improving insulin sensitivity and overall health. Here’s why.',
    content: `
      <p>Exercise helps your muscles use glucose for energy, which lowers your blood sugar levels. It also improves insulin sensitivity, meaning your cells use insulin more effectively.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Recommended Activities</h2>
      <p>Aim for at least 150 minutes of moderate‑intensity aerobic exercise each week, such as brisk walking, cycling or swimming. Strength training twice a week helps build muscle, further enhancing glucose metabolism.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Safety Tips</h2>
      <p>Check your blood sugar before and after exercise, stay hydrated and carry a fast‑acting carbohydrate snack in case of low blood sugar. Speak with your doctor before starting a new exercise programme.</p>
    `,
  },
  {
    slug: 'preventing-diabetes-complications',
    title: 'Preventing Complications of Diabetes: Early Detection and Care',
    date: '2025-07-07',
    excerpt:
      'Long‑term high blood sugar can damage organs and systems. Learn how regular check‑ups and lifestyle management can prevent complications.',
    content: `
      <p>Persistent hyperglycaemia may lead to complications like cardiovascular disease, neuropathy, nephropathy and retinopathy. Early detection and proactive management are essential.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Regular Screenings</h2>
      <p>Schedule routine eye exams, kidney function tests and foot checks. Monitoring blood pressure and cholesterol levels also reduces your risk of heart disease.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Healthy Lifestyle</h2>
      <p>Maintaining a healthy diet, exercising regularly, avoiding tobacco and moderating alcohol intake are key components of preventing complications. Working closely with your healthcare team ensures personalised care.</p>
    `,
  },
  {
    slug: 'gestational-diabetes-what-you-need-to-know',
    title: 'Gestational Diabetes: What You Need to Know',
    date: '2025-07-09',
    excerpt:
      'Gestational diabetes affects pregnant women and can impact both mother and baby. Understand risk factors, management and prognosis.',
    content: `
      <p>Gestational diabetes develops during pregnancy when the body cannot produce enough insulin to meet increased needs. Most cases resolve after childbirth, but it requires careful management during pregnancy.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Risk Factors</h2>
      <p>Risk factors include obesity, family history of diabetes and previous history of gestational diabetes. Women over the age of 25 are also at higher risk.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Management</h2>
      <p>Following a balanced diet, monitoring blood glucose levels and engaging in moderate physical activity are important. Some women may require insulin therapy. Post‑pregnancy screening is crucial as gestational diabetes increases the risk of developing Type 2 diabetes later in life.</p>
    `,
  },
  {
    slug: 'diabetes-and-heart-health',
    title: 'Diabetes and Heart Health: Reducing Cardiovascular Risk',
    date: '2025-07-11',
    excerpt:
      'People with diabetes are at increased risk of cardiovascular disease. Learn strategies to protect your heart.',
    content: `
      <p>High blood sugar over time damages blood vessels and the nerves that control your heart. This increases the likelihood of heart disease and stroke. Managing diabetes effectively is therefore a key aspect of cardiovascular health.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Monitor Blood Pressure and Cholesterol</h2>
      <p>Keeping your blood pressure and cholesterol within target ranges reduces your risk. A heart‑healthy diet rich in fruits, vegetables, whole grains and lean proteins supports both glucose and lipid control.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Stay Active and Quit Smoking</h2>
      <p>Regular exercise strengthens the cardiovascular system. If you smoke, quitting is one of the best things you can do for your heart and overall health.</p>
    `,
  },
  {
    slug: 'stress-management-in-diabetes',
    title: 'Stress Management in Diabetes: Mind and Body Balance',
    date: '2025-07-13',
    excerpt:
      'Stress can impact blood glucose levels and overall well‑being. Discover techniques to manage stress effectively.',
    content: `
      <p>When you’re stressed, your body releases hormones that can raise blood sugar levels. Long‑term stress may therefore worsen diabetes control.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Relaxation Techniques</h2>
      <p>Mindfulness meditation, deep breathing exercises and yoga can help reduce stress and improve mental clarity. Setting aside time for yourself each day to unwind is important.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Sleep and Support</h2>
      <p>Quality sleep is essential for metabolic health. Building a strong support network of friends, family and healthcare providers also helps you manage stress more effectively.</p>
    `,
  },
  {
    slug: 'technology-and-diabetes-care',
    title: 'The Role of Technology in Modern Diabetes Care',
    date: '2025-07-15',
    excerpt:
      'Continuous glucose monitors, insulin pumps and health apps are revolutionising diabetes management. Learn about the latest tools.',
    content: `
      <p>Advances in medical technology have made it easier than ever to track blood glucose and manage diabetes. Continuous glucose monitoring (CGM) systems provide real‑time data, allowing for timely adjustments to diet and insulin.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Insulin Delivery Innovations</h2>
      <p>Modern insulin pumps mimic the function of a healthy pancreas by delivering small doses of insulin throughout the day. Some pumps can even adjust insulin delivery automatically based on CGM readings.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Health Apps and Telemedicine</h2>
      <p>Mobile apps help patients log meals, track medication and communicate with healthcare providers. Telemedicine has also made consultations more accessible, particularly for those living in remote areas.</p>
    `,
  },
  {
    slug: 'nutrition-myths-and-diabetes',
    title: 'Debunking Common Nutrition Myths in Diabetes',
    date: '2025-07-17',
    excerpt:
      'There is a lot of misinformation about what people with diabetes should or shouldn’t eat. Let’s separate fact from fiction.',
    content: `
      <p>One of the most pervasive myths is that people with diabetes must avoid carbohydrates altogether. In reality, carbohydrates are an essential part of a balanced diet; the key lies in choosing complex carbs and monitoring portion sizes.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Fruit and Sugar</h2>
      <p>Another common myth is that fruit is off‑limits due to its natural sugars. Fruits are packed with vitamins, minerals and fibre. Choosing whole fruits instead of juices and monitoring portions is important.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Sugar‑Free Products</h2>
      <p>“Sugar‑free” doesn’t always mean carb‑free. Some sugar‑free products can still raise blood glucose levels. Always read nutrition labels and focus on whole, minimally processed foods.</p>
    `,
  },
  {
    slug: 'sleep-and-metabolic-health',
    title: 'Why Sleep Matters for Metabolic Health and Diabetes',
    date: '2025-07-19',
    excerpt:
      'Poor sleep can disrupt hormones that regulate appetite and glucose. Discover the link between sleep and metabolic health.',
    content: `
      <p>Getting enough high‑quality sleep is essential for metabolic health. Sleep deprivation increases levels of the hunger hormone ghrelin and decreases the satiety hormone leptin, which can lead to overeating and weight gain.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">The Sleep–Glucose Connection</h2>
      <p>Lack of sleep also impacts insulin sensitivity, making it harder for your cells to use glucose effectively. Strive for 7–9 hours of sleep per night and maintain a consistent sleep schedule.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Tips for Better Sleep</h2>
      <p>Create a relaxing bedtime routine, limit caffeine and screen time in the evening and ensure your bedroom is cool, dark and quiet. If you have persistent sleep issues, consult a healthcare professional.</p>
    `,
  },
  {
    slug: 'foot-care-for-people-with-diabetes',
    title: 'Essential Foot Care for People with Diabetes',
    date: '2025-07-21',
    excerpt:
      'Good foot care is vital for preventing infections and complications in people with diabetes. Here’s how to keep your feet healthy.',
    content: `
      <p>Diabetes can cause nerve damage and poor blood circulation, making your feet more vulnerable to injuries and infections. Daily foot care helps catch problems early.</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Daily Checks and Hygiene</h2>
      <p>Inspect your feet every day for cuts, blisters or swelling. Wash them with mild soap, dry thoroughly and apply moisturiser to prevent cracking (but avoid the areas between your toes).</p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Proper Footwear</h2>
      <p>Wear comfortable, well‑fitting shoes and clean socks. Avoid walking barefoot and trim toenails carefully. See a podiatrist regularly and seek immediate care for any sores or infections.</p>
    `,
  },
];

// Expose the posts globally so our React code can import without bundling
window.blogPosts = blogPosts;