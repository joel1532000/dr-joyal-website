/*
 * Main React application for Dr. Joyal S’s personal website.
 *
 * This file defines all of the pages and components for the site. It uses
 * React Router to handle navigation between pages without reloading the
 * browser. The TailwindCSS classes provide modern styling and
 * responsiveness. If you wish to modify the site’s layout, content or
 * colours, update the JSX below. To add new blog posts, edit posts.js.
 */

// Destructure React Router components from the global ReactRouterDOM object.
// When using the UMD build from a CDN, ReactRouterDOM is attached to the
// window object. Without referencing it this way, ReactRouterDOM may be
// undefined when compiled by babel‑standalone. See:
// https://unpkg.com/react-router-dom@6/umd/react-router-dom.production.min.js
const {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} = window.ReactRouterDOM;

/**
 * Site header with navigation links.
 */
function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo or site name */}
          <span className="text-2xl font-bold text-orange-700">Dr.&nbsp;Joyal&nbsp;S</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-orange-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-600">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-600">
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile menu button (visible on small screens) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

/**
 * Mobile navigation menu toggled by a hamburger icon. The menu slides down from the top when open.
 */
function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      <button
        className="text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-2">
          <ul className="flex flex-col space-y-2 px-4">
            <li>
              <Link to="/" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-orange-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-orange-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-orange-600">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-orange-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

/**
 * Floating WhatsApp chat button. Replace the phone number and message as needed.
 */
function WhatsAppWidget() {
  const phoneNumber = '+910000000000'; // Replace with your WhatsApp number
  const defaultMsg = encodeURIComponent('Hello Dr. Joyal, I would like to know more about your services.');
  const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMsg}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M19.05 4.94A10 10 0 004.9 19.08L3 21l1.92-.9a10 10 0 0014.16-15.17zM12 20a8 8 0 117.91-9.3c-.49-.27-1-.47-1.52-.63a5.65 5.65 0 00-3.17 1.23l-.11.09a.59.59 0 01-.64.05l-1.1-.55a6.63 6.63 0 01-2.35-2.14l-.1-.13a.59.59 0 01.05-.64l.88-1.23a1.3 1.3 0 00-.21-1.72 4.84 4.84 0 00-1.9-1.2 1.27 1.27 0 00-.9.04c-.31.14-.62.3-.91.48a8.19 8.19 0 00-.46.27 1.31 1.31 0 00-.46 1.81 9.78 9.78 0 004.69 4.94 9.12 9.12 0 003.23 1.18 1.32 1.32 0 001.3-.51l.25-.33a7.44 7.44 0 002.15-.48 7 7 0 002.78-2.16 7.89 7.89 0 001.62-4.1A8 8 0 0112 20z" />
      </svg>
    </a>
  );
}

/**
 * Page: Home
 * Introductory content with a hero section, brief about the doctor and call to action.
 */
function Home() {
  React.useEffect(() => {
    document.title = 'Home | Dr. Joyal S';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Welcome to the official website of Dr. Joyal S, specialist in diabetes, lifestyle disorders and metabolic health. Book appointments and learn more about personalised care.'
      );
    }
  }, []);
  return (
    <div className="bg-[#fdf2e9]">
      {/* Hero section */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-orange-700 mb-4">
            Empowering Lives Through Precision Diabetes Care
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Comprehensive diabetes and lifestyle disorder management for improved
            metabolic health. Offering personalised care plans to help you live
            your healthiest life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded shadow hover:bg-orange-700 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
        {/* Placeholder image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1580281658623-7ac569d39c30?auto=format&fit=crop&w=600&q=80"
            alt="Doctor consultation illustration"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </section>
      {/* Services overview */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Diabetes Management</h3>
            <p className="text-gray-700">
              Evidence‑based management plans designed to control blood
              glucose levels, reduce complications and improve your quality of
              life.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Lifestyle Plans</h3>
            <p className="text-gray-700">
              Personalised diet and exercise recommendations tailored to
              optimise metabolic health and support sustainable weight
              management.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Online Consultations</h3>
            <p className="text-gray-700">
              Virtual appointments enable you to receive expert medical
              advice and follow‑up care from the comfort of your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Page: About
 * Biography and professional timeline.
 */
function About() {
  React.useEffect(() => {
    document.title = 'About | Dr. Joyal S';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Dr. Joyal S’s background, medical qualifications and passion for treating diabetes and lifestyle disorders.'
      );
    }
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">About Me</h1>
      <p className="text-gray-700 mb-4">
        Hello! I’m <strong>Dr. Joyal S</strong>, an MBBS graduate and a proud
        holder of a Fellowship in Diabetes Mellitus. Over the years, I have
        dedicated my practice to helping individuals manage diabetes and other
        lifestyle disorders through evidence‑based medical care and personalised
        counselling.
      </p>
      <p className="text-gray-700 mb-4">
        My approach focuses on comprehensive metabolic health — incorporating
        diet, exercise, sleep and stress management — to empower my patients
        towards long‑term well‑being.
      </p>
      <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">Education &amp; Qualifications</h2>
      <ul className="space-y-4">
        <li className="border-l-4 border-orange-600 pl-4">
          <h3 className="font-semibold">MBBS</h3>
          <p>Obtained from a reputed medical college with extensive clinical training.</p>
        </li>
        <li className="border-l-4 border-orange-600 pl-4">
          <h3 className="font-semibold">Fellowship in Diabetes Mellitus</h3>
          <p>Advanced fellowship programme focusing on the latest advancements in diabetes management and care.</p>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-orange-700 mt-8 mb-4">Mission &amp; Vision</h2>
      <p className="text-gray-700">
        My mission is to provide compassionate, patient‑centred diabetes care that
        integrates medical expertise with lifestyle modifications. I envision a
        world where individuals with diabetes live fulfilling lives, empowered
        by knowledge and supported by accessible healthcare.
      </p>
    </div>
  );
}

/**
 * Page: Services
 * Detailed information about services provided.
 */
function Services() {
  React.useEffect(() => {
    document.title = 'Services | Dr. Joyal S';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore comprehensive services offered by Dr. Joyal S, including diabetes management, lifestyle counselling and virtual consultations.'
      );
    }
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Services</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            Diabetes Management
          </h2>
          <p className="text-gray-700">
            Comprehensive evaluation and management of Type 1 and Type 2
            diabetes. Services include regular monitoring, medication
            management, insulin therapy guidance, dietary counselling and
            education on self‑management techniques.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            Lifestyle &amp; Metabolic Health Plans
          </h2>
          <p className="text-gray-700">
            Personalised plans focusing on nutrition, physical activity and
            behavioural changes to improve metabolic health. These plans aim to
            support weight management, prevent complications and enhance
            overall wellness.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            Online &amp; Telehealth Consultations
          </h2>
          <p className="text-gray-700">
            Offering secure and convenient virtual consultations for patients
            who prefer to receive care from their home. These sessions ensure
            continuity of care and personalised follow‑ups via video calls.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="/contact"
          className="inline-block bg-orange-600 text-white px-5 py-3 rounded shadow hover:bg-orange-700 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
}

/**
 * Page: Blog listing
 * Renders all blog posts with title, date and excerpt.
 */
function BlogList() {
  React.useEffect(() => {
    document.title = 'Blog | Dr. Joyal S';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Read insightful articles about diabetes, lifestyle management and metabolic health written by Dr. Joyal S.'
      );
    }
  }, []);
  // Use posts from the global variable defined in posts.js
  const posts = window.blogPosts || [];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

/**
 * Page: Individual blog post
 */
function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  // Find the post with matching slug
  const post = (window.blogPosts || []).find((p) => p.slug === slug);
  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | Dr. Joyal S`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          post.excerpt
        );
      }
    }
  }, [post]);
  if (!post) {
    return <NotFound />;
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <button
        onClick={() => navigate(-1)}
        className="text-orange-600 hover:underline mb-4"
      >
        ← Back to Blog
      </button>
      <h1 className="text-3xl font-bold text-orange-700 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      {/* Render HTML content directly */}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

/**
 * Page: Contact
 * Contains a contact form (Formspree) and a map embed.
 */
function Contact() {
  React.useEffect(() => {
    document.title = 'Contact | Dr. Joyal S';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Get in touch with Dr. Joyal S for appointments, questions or consultations. Use the form or WhatsApp to reach out.'
      );
    }
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Contact</h1>
      {/* Contact form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Send a Message</h2>
        {/* Formspree endpoint placeholder. Replace with your own Formspree form ID. */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded shadow hover:bg-orange-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Map embed */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Find Us</h2>
        <div className="w-full h-64">
          <iframe
            src="https://maps.google.com/maps?q=Sivagangai%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Sivagangai, Tamil Nadu"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/**
 * Fallback page for unmatched routes.
 */
function NotFound() {
  React.useEffect(() => {
    document.title = 'Page Not Found | Dr. Joyal S';
  }, []);
  return (
    <div className="max-w-3xl mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-bold text-orange-700 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-orange-600 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}

/**
 * Main layout with header, routed content and footer. The WhatsAppWidget
 * appears on every page.
 */
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

/**
 * Footer component with basic information and links.
 */
function Footer() {
  return (
    <footer className="bg-white shadow-inner py-6">
      <div className="max-w-5xl mx-auto px-4 text-center text-gray-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Dr. Joyal S. All rights reserved.
        </p>
        <p>
          <a href="mailto:info@example.com" className="text-orange-600 hover:underline">
            info@example.com
          </a>{' '}
          | Sivagangai, Tamil&nbsp;Nadu
        </p>
      </div>
    </footer>
  );
}

/**
 * Root application wrapper.
 */
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

// Render the React application into the DOM
ReactDOM.render(<App />, document.getElementById('root'));