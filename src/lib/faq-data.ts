export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface FAQCategory {
  name: string;
  description: string;
}

export const faqCategories: FAQCategory[] = [
  { name: "WordPress Setup & Hosting", description: "Questions about WordPress installation, hosting, and initial setup" },
  { name: "Elementor Page Builder", description: "Common queries about using Elementor for website design" },
  { name: "Divi Page Builder", description: "Questions specific to Divi theme and builder" },
  { name: "Theme Customization", description: "Customizing themes, colors, fonts, and layouts" },
  { name: "Responsive Design", description: "Making websites mobile-friendly and responsive" },
  { name: "Plugin Management", description: "Installing, configuring, and troubleshooting plugins" },
  { name: "WooCommerce & E-commerce", description: "Setting up and managing online stores" },
  { name: "SEO & Performance", description: "Search engine optimization and site speed" },
  { name: "Course Information", description: "General questions about the course structure" },
  { name: "Certification & Placement", description: "Information about certificates and job placement" },
];

export const defaultFAQs: FAQ[] = [
  // WordPress Setup & Hosting (8 questions)
  {
    id: "wp-1",
    question: "What hosting provider should I use for WordPress?",
    answer: "<p>We recommend <strong>Bluehost</strong>, <strong>SiteGround</strong>, or <strong>WP Engine</strong> for WordPress hosting.</p><ul><li><strong>Bluehost</strong>: Great for beginners, affordable, and officially recommended by WordPress.org</li><li><strong>SiteGround</strong>: Excellent speed and customer support</li><li><strong>WP Engine</strong>: Premium managed WordPress hosting for advanced users</li></ul><p>All three offer one-click WordPress installation and 99.9% uptime guarantees.</p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-2",
    question: "How do I install WordPress on my hosting account?",
    answer: "<p>Most hosting providers offer <strong>one-click WordPress installation</strong>:</p><ol><li>Log in to your hosting <strong>cPanel</strong> or control panel</li><li>Find the <strong>WordPress installer</strong> (often called Softaculous or QuickInstall)</li><li>Click 'Install WordPress'</li><li>Choose your domain and directory</li><li>Set up your admin username and password</li><li>Click 'Install' and wait for completion</li></ol><p>After installation, you can access your WordPress admin at <code>yourdomain.com/wp-admin</code></p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-3",
    question: "What is the difference between WordPress.com and WordPress.org?",
    answer: "<p><strong>WordPress.org</strong> (Self-hosted):</p><ul><li>Free, open-source software</li><li>You own your website completely</li><li>Need to purchase hosting separately</li><li>Full control over customization and plugins</li><li>Recommended for this course</li></ul><p><strong>WordPress.com</strong> (Hosted service):</p><ul><li>Hosted solution with limited free plan</li><li>Limited customization on free plans</li><li>Premium plans required for plugins</li><li>Good for simple blogs, not for professional development</li></ul>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-4",
    question: "How do I connect my domain to my WordPress site?",
    answer: "<p>To connect a domain to your WordPress hosting:</p><ol><li>Log in to your domain registrar (GoDaddy, Namecheap, etc.)</li><li>Find <strong>DNS settings</strong> or <strong>Nameservers</strong></li><li>Get nameserver details from your hosting provider (usually 2-4 nameservers)</li><li>Update your domain's nameservers to point to your hosting</li><li>Wait 24-48 hours for DNS propagation (usually takes 2-6 hours)</li></ol><p><strong>Alternative:</strong> If your domain and hosting are from the same provider, it's often automatic!</p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-5",
    question: "How do I enable SSL (HTTPS) on my WordPress site?",
    answer: "<p>To enable SSL/HTTPS:</p><ol><li>Get a free SSL certificate from your hosting provider (most offer free Let's Encrypt SSL)</li><li>Install the SSL certificate through cPanel or hosting control panel</li><li>Install <strong>Really Simple SSL</strong> plugin in WordPress</li><li>Activate the plugin - it will automatically redirect HTTP to HTTPS</li></ol><p><strong>Important:</strong> SSL is essential for security, SEO, and building trust with visitors!</p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-6",
    question: "What are the basic WordPress settings I should configure after installation?",
    answer: "<p>Essential WordPress settings to configure:</p><ol><li><strong>Settings → General</strong>: Set site title, tagline, timezone</li><li><strong>Settings → Reading</strong>: Choose static homepage or blog listing</li><li><strong>Settings → Permalinks</strong>: Select 'Post name' for SEO-friendly URLs</li><li><strong>Settings → Discussion</strong>: Configure comment settings</li><li><strong>Users</strong>: Create proper admin account, delete default 'admin' username</li><li><strong>Plugins</strong>: Remove unused default plugins</li></ol><p>Also install essential plugins: security plugin, backup plugin, and SEO plugin.</p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-7",
    question: "How do I create a backup of my WordPress site?",
    answer: "<p>You can backup your WordPress site in multiple ways:</p><p><strong>Method 1: Using Plugins (Recommended)</strong></p><ul><li><strong>UpdraftPlus</strong>: Free, automatic backups to cloud storage</li><li><strong>BackupBuddy</strong>: Premium solution with easy restoration</li><li><strong>Duplicator</strong>: Great for site migration and cloning</li></ul><p><strong>Method 2: Manual Backup</strong></p><ol><li>Export database via phpMyAdmin</li><li>Download all files via FTP/cPanel File Manager</li><li>Store both safely</li></ol><p><strong>Pro tip:</strong> Schedule automatic daily backups!</p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "wp-8",
    question: "What should I do if my WordPress site shows a white screen (WSOD)?",
    answer: "<p>The White Screen of Death usually indicates a PHP error:</p><ol><li><strong>Enable debugging</strong>: Add to wp-config.php: <code>define('WP_DEBUG', true);</code></li><li><strong>Deactivate plugins</strong>: Rename plugins folder via FTP to /plugins_old</li><li><strong>Switch theme</strong>: Rename active theme folder to force default theme</li><li><strong>Increase memory</strong>: Add to wp-config.php: <code>define('WP_MEMORY_LIMIT', '256M');</code></li><li><strong>Check error logs</strong>: Look in /wp-content/debug.log</li></ol><p>If issue persists, contact your hosting provider for server logs.</p>",
    category: "WordPress Setup & Hosting",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Elementor Page Builder (10 questions)
  {
    id: "elem-1",
    question: "What is Elementor and why should I use it?",
    answer: "<p><strong>Elementor</strong> is the world's leading WordPress page builder with a drag-and-drop interface.</p><p><strong>Benefits:</strong></p><ul><li>Visual, real-time editing (WYSIWYG)</li><li>No coding required</li><li>90+ widgets and design elements</li><li>Responsive design controls</li><li>Global design system (colors, fonts)</li><li>Template library with 100+ designs</li></ul><p>Perfect for creating professional websites without writing code!</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-2",
    question: "How do I install and activate Elementor?",
    answer: "<p>Installing Elementor is simple:</p><ol><li>Go to <strong>Plugins → Add New</strong> in WordPress</li><li>Search for 'Elementor'</li><li>Click <strong>Install Now</strong> on 'Elementor Website Builder'</li><li>Click <strong>Activate</strong></li><li>Complete the setup wizard</li><li>Start creating pages!</li></ol><p><strong>Note:</strong> The free version includes all core features. Elementor Pro (paid) adds advanced widgets like Forms, Popups, and WooCommerce Builder.</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-3",
    question: "What's the difference between Elementor Free and Elementor Pro?",
    answer: "<p><strong>Elementor Free:</strong></p><ul><li>40+ basic widgets</li><li>Basic templates</li><li>Responsive editing</li><li>Great for simple websites</li></ul><p><strong>Elementor Pro ($49-$999/year):</strong></p><ul><li>90+ widgets including Forms, Sliders, Price Tables</li><li>Theme Builder (header, footer, single post)</li><li>WooCommerce Builder</li><li>Popup Builder</li><li>300+ Pro templates</li><li>Custom CSS</li><li>Role Manager</li></ul><p>For professional work, Pro is highly recommended!</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-4",
    question: "How do I create a custom header and footer in Elementor?",
    answer: "<p><strong>Requires Elementor Pro:</strong></p><ol><li>Go to <strong>Templates → Theme Builder</strong></li><li>Click <strong>Add New</strong> → Select <strong>Header</strong></li><li>Design your header with widgets (Logo, Menu, etc.)</li><li>Click <strong>Publish</strong> → Set display conditions (e.g., Entire Site)</li><li>Repeat for <strong>Footer</strong></li></ol><p><strong>Free Alternative:</strong> Use a theme with header/footer that works with Elementor, like Astra or Hello theme.</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-5",
    question: "How do I make my Elementor pages responsive for mobile?",
    answer: "<p>Elementor has built-in responsive controls:</p><ol><li>In Elementor editor, find the <strong>responsive mode switcher</strong> at bottom</li><li>Switch between Desktop 💻, Tablet 📱, and Mobile 📱</li><li>Adjust settings for each device (spacing, font size, column width)</li><li>Use <strong>Hide on Device</strong> option to hide elements on specific screens</li><li>Set <strong>reverse columns</strong> for mobile in Column settings</li></ol><p><strong>Pro Tip:</strong> Always preview on actual devices before publishing!</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-6",
    question: "How do I import Elementor templates?",
    answer: "<p>Importing Elementor templates:</p><ol><li>In Elementor editor, click the <strong>folder icon</strong> (Templates)</li><li>Go to <strong>My Templates</strong> tab</li><li>Click <strong>Import Templates</strong></li><li>Upload your .json template file</li><li>Click <strong>Import Now</strong></li></ol><p><strong>Or use Template Library:</strong></p><ol><li>Click folder icon → <strong>Library</strong> tab</li><li>Browse <strong>Pages</strong> or <strong>Blocks</strong></li><li>Click <strong>Insert</strong> to add to your page</li></ol><p>Many free and premium templates available online!</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-7",
    question: "What are Elementor Global Colors and Fonts?",
    answer: "<p><strong>Global Colors and Fonts</strong> allow you to maintain consistent design across your entire site.</p><p><strong>Setting up:</strong></p><ol><li>Click hamburger menu (☰) in Elementor → <strong>Site Settings</strong></li><li>Go to <strong>Global Colors</strong></li><li>Define your brand colors (Primary, Secondary, etc.)</li><li>Go to <strong>Global Fonts</strong></li><li>Set up your typography (Primary Heading, Body Text, etc.)</li></ol><p><strong>Benefit:</strong> Change one color/font globally, and it updates everywhere! Saves hours of work.</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-8",
    question: "How do I create a contact form in Elementor?",
    answer: "<p><strong>With Elementor Pro:</strong></p><ol><li>Drag the <strong>Form widget</strong> onto your page</li><li>Add/remove fields as needed</li><li>Customize button text and styling</li><li>Set up <strong>Actions After Submit</strong> (Email, redirect, etc.)</li><li>Configure email recipient in Form → Email settings</li></ol><p><strong>Free Alternative:</strong></p><ol><li>Install <strong>Contact Form 7</strong> or <strong>WPForms</strong> plugin</li><li>Create form in plugin</li><li>Copy shortcode</li><li>Use Elementor's <strong>Shortcode widget</strong> to display form</li></ol>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-9",
    question: "Why is my Elementor editor loading slowly or not loading?",
    answer: "<p>Common causes and fixes:</p><ol><li><strong>Clear cache</strong>: Elementor → Tools → Regenerate CSS & Data</li><li><strong>Disable conflicting plugins</strong>: Deactivate plugins one by one</li><li><strong>Increase PHP memory</strong>: Add to wp-config.php: <code>define('WP_MEMORY_LIMIT', '256M');</code></li><li><strong>Update Elementor</strong>: Ensure latest version installed</li><li><strong>Switch to default theme</strong> temporarily to test</li><li><strong>Check hosting resources</strong>: Contact host if server limits are low</li></ol><p>Enable Safe Mode: Elementor → Tools → Safe Mode to troubleshoot.</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "elem-10",
    question: "How do I create reusable sections in Elementor?",
    answer: "<p>Creating reusable templates:</p><ol><li>Design your section in Elementor</li><li>Right-click the section handle → <strong>Save as Template</strong></li><li>Name your template → Save</li><li>To reuse: Click <strong>+ Add Section</strong> → <strong>My Templates</strong></li><li>Insert your saved section</li></ol><p><strong>Pro Tip:</strong> Use <strong>Global Widgets</strong> (Pro feature) to create widgets that update everywhere when edited once. Perfect for CTAs, pricing tables, etc.</p>",
    category: "Elementor Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Divi Page Builder (7 questions)
  {
    id: "divi-1",
    question: "What is Divi and how is it different from Elementor?",
    answer: "<p><strong>Divi</strong> is a premium WordPress theme and visual page builder by Elegant Themes.</p><p><strong>Key Differences:</strong></p><ul><li><strong>Divi</strong>: Theme + Builder combo, $89/year or $249 lifetime</li><li><strong>Elementor</strong>: Plugin-based builder, works with any theme</li></ul><p><strong>Divi Advantages:</strong></p><ul><li>Built-in theme and builder integration</li><li>Includes Divi Theme, Extra theme, and Bloom/Monarch plugins</li><li>Split testing built-in</li></ul><p>Both are excellent; choice depends on preference and project needs.</p>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "divi-2",
    question: "How do I install and activate Divi?",
    answer: "<p>Installing Divi:</p><ol><li>Purchase Divi from <strong>ElegantThemes.com</strong></li><li>Download the <strong>Divi theme</strong> zip file from your account</li><li>In WordPress: <strong>Appearance → Themes → Add New → Upload Theme</strong></li><li>Upload the Divi.zip file</li><li>Click <strong>Activate</strong></li><li>Enter your Elegant Themes API key (from your account)</li><li>Run the Divi setup wizard</li></ol><p>Now you can use Divi Builder on any page!</p>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "divi-3",
    question: "What are the different Divi editing modes?",
    answer: "<p>Divi offers three building experiences:</p><ol><li><strong>Visual Builder</strong> (Recommended): Edit on the frontend with real-time preview. Click 'Use Divi Builder' → 'Build on the Front End'</li><li><strong>Divi Builder (Backend)</strong>: Classic backend editor. More stable on slower connections.</li><li><strong>Divi Theme Builder</strong>: Create custom templates for headers, footers, product pages, blog layouts, etc.</li></ol><p><strong>Pro Tip:</strong> Use Visual Builder for most work - it's the most intuitive!</p>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "divi-4",
    question: "How do I import Divi pre-made layouts?",
    answer: "<p>Divi includes 800+ pre-made layouts:</p><ol><li>Click <strong>+ Add New Section</strong> in Divi Builder</li><li>Select <strong>Choose A Pre-made Design</strong></li><li>Browse categories or search for layouts</li><li>Click on a layout to preview</li><li>Click <strong>Use This Layout</strong> to import</li></ol><p><strong>Or import entire page:</strong></p><ol><li>Click purple Divi icon → <strong>Load From Library</strong></li><li>Browse <strong>Pre-made Layouts</strong> tab</li><li>Choose and insert</li></ol><p>You get access to new layouts monthly with Elegant Themes membership!</p>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "divi-5",
    question: "How do I create a global header and footer in Divi?",
    answer: "<p>Using Divi Theme Builder:</p><ol><li>Go to <strong>Divi → Theme Builder</strong></li><li>Click <strong>Add Global Header</strong></li><li>Design your header using Divi modules</li><li>Save and assign to <strong>All Pages</strong> (or specific conditions)</li><li>Repeat for <strong>Global Footer</strong></li></ol><p><strong>Pro Tip:</strong> Save as <strong>Global</strong> so changes update across all pages. Use conditions to show different headers for different page types!</p>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "divi-6",
    question: "How do I make Divi pages load faster?",
    answer: "<p>Optimizing Divi performance:</p><ol><li><strong>Enable Static CSS Files</strong>: Divi → Theme Options → Builder → Performance → Enable</li><li><strong>Enable Divi Builder Dynamic Module Framework</strong></li><li><strong>Use a caching plugin</strong>: WP Rocket or W3 Total Cache</li><li><strong>Optimize images</strong>: Use WebP format, compress before upload</li><li><strong>Limit use of animations</strong> on mobile</li><li><strong>Minify CSS/JS</strong>: Use Autoptimize plugin</li><li><strong>Use CDN</strong>: Cloudflare or similar</li></ol><p>These optimizations can cut load time by 50-70%!</p>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "divi-7",
    question: "What's the difference between regular and global modules in Divi?",
    answer: "<p><strong>Regular Module:</strong></p><ul><li>Unique to the page where it's created</li><li>Changes only affect that instance</li></ul><p><strong>Global Module:</strong></p><ul><li>Can be reused across multiple pages</li><li>Editing it updates all instances sitewide</li><li>Perfect for CTAs, contact forms, pricing tables</li></ul><p><strong>Creating Global Module:</strong></p><ol><li>Hover over module → Click settings gear</li><li>Click <strong>Save as Global</strong></li><li>To reuse: Add Module → Load From Library → Global items</li></ol>",
    category: "Divi Page Builder",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Theme Customization (8 questions)
  {
    id: "theme-1",
    question: "How do I install a WordPress theme?",
    answer: "<p>Installing a WordPress theme:</p><p><strong>Method 1: From WordPress Repository</strong></p><ol><li>Go to <strong>Appearance → Themes → Add New</strong></li><li>Search for your theme</li><li>Click <strong>Install</strong> → <strong>Activate</strong></li></ol><p><strong>Method 2: Upload Premium Theme</strong></p><ol><li>Download theme .zip file</li><li><strong>Appearance → Themes → Add New → Upload Theme</strong></li><li>Choose file → Install → Activate</li></ol><p><strong>Popular themes:</strong> Astra, GeneratePress, OceanWP (all work great with page builders!)</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-2",
    question: "How do I customize my theme's colors and fonts?",
    answer: "<p>Customizing theme appearance:</p><ol><li>Go to <strong>Appearance → Customize</strong></li><li>Navigate to <strong>Colors</strong> section</li><li>Change Primary, Secondary, Background colors</li><li>Go to <strong>Typography/Fonts</strong> section</li><li>Select Google Fonts or upload custom fonts</li><li>Set font sizes for headings, body text</li><li>Click <strong>Publish</strong> to save</li></ol><p><strong>Advanced:</strong> For more control, use a theme like Astra Pro or GeneratePress Premium with extensive customization options.</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-3",
    question: "What is a child theme and why do I need one?",
    answer: "<p>A <strong>child theme</strong> inherits functionality from a parent theme but allows safe customization.</p><p><strong>Why use child themes:</strong></p><ul><li>Your customizations won't be lost when parent theme updates</li><li>Safe way to modify theme files</li><li>Professional best practice</li></ul><p><strong>Creating child theme:</strong></p><ol><li>Use <strong>Child Theme Configurator</strong> plugin (easiest)</li><li>Or create manually with style.css and functions.php</li></ol><p><strong>Note:</strong> Not needed if you're only customizing through Customizer or page builder!</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-4",
    question: "How do I add custom CSS to my theme?",
    answer: "<p>Adding custom CSS in WordPress:</p><p><strong>Method 1: WordPress Customizer (Recommended)</strong></p><ol><li>Go to <strong>Appearance → Customize</strong></li><li>Find <strong>Additional CSS</strong> section</li><li>Add your CSS code</li><li>Preview changes in real-time</li><li>Click <strong>Publish</strong></li></ol><p><strong>Method 2: Child Theme</strong></p><ol><li>Add CSS to child theme's style.css file</li></ol><p><strong>Method 3: Plugin</strong></p><ul><li>Use <strong>Simple Custom CSS</strong> or <strong>WP Add Custom CSS</strong> plugin</li></ul>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-5",
    question: "How do I change my site logo and favicon?",
    answer: "<p>Changing logo and favicon:</p><p><strong>Logo:</strong></p><ol><li>Go to <strong>Appearance → Customize → Site Identity</strong></li><li>Click <strong>Select Logo</strong></li><li>Upload your logo image (PNG recommended, transparent background)</li><li>Adjust logo size if needed</li></ol><p><strong>Favicon:</strong></p><ol><li>In same section, click <strong>Select Site Icon</strong></li><li>Upload 512x512px image</li><li>WordPress automatically creates smaller versions</li></ol><p><strong>Tip:</strong> Logo should be 200-300px wide, favicon 512x512px square.</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-6",
    question: "How do I create a custom menu in WordPress?",
    answer: "<p>Creating navigation menus:</p><ol><li>Go to <strong>Appearance → Menus</strong></li><li>Click <strong>Create a new menu</strong></li><li>Name your menu (e.g., 'Primary Menu')</li><li>Add pages, posts, or custom links from left sidebar</li><li>Drag to reorder items</li><li>Indent items to create dropdown submenus</li><li>Choose <strong>Menu Location</strong> (Header, Footer, etc.)</li><li>Click <strong>Save Menu</strong></li></ol><p><strong>Tip:</strong> You can create multiple menus for different locations!</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-7",
    question: "How do I add widgets to my sidebar and footer?",
    answer: "<p>Managing widgets:</p><ol><li>Go to <strong>Appearance → Widgets</strong></li><li>See available <strong>Widget Areas</strong> (Sidebar, Footer columns, etc.)</li><li>Drag widgets from left into widget areas</li><li>Configure each widget's settings</li><li>Click <strong>Save</strong></li></ol><p><strong>Common widgets:</strong></p><ul><li>Search</li><li>Recent Posts</li><li>Categories</li><li>Custom HTML (for custom content)</li><li>Text widget</li></ul><p><strong>Note:</strong> Block-based themes (FSE) use different widget system!</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "theme-8",
    question: "Can I use multiple themes on one WordPress site?",
    answer: "<p>Technically, only <strong>one theme is active</strong> at a time on your WordPress site.</p><p><strong>However, you can:</strong></p><ul><li>Install unlimited themes (only one active)</li><li>Use <strong>Theme Switcha</strong> plugin to test different themes</li><li>Use page-specific designs with page builders (Elementor/Divi templates)</li></ul><p><strong>Pro Approach:</strong></p><ol><li>Choose one flexible theme (Astra, GeneratePress)</li><li>Use page builder for different page designs</li><li>Create multiple templates within same theme</li></ol><p>This is more efficient than switching themes!</p>",
    category: "Theme Customization",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Responsive Design (6 questions)
  {
    id: "resp-1",
    question: "What is responsive design and why is it important?",
    answer: "<p><strong>Responsive design</strong> means your website automatically adapts to different screen sizes (desktop, tablet, mobile).</p><p><strong>Why it's crucial:</strong></p><ul><li>60%+ of web traffic is mobile</li><li>Google uses mobile-first indexing for SEO</li><li>Poor mobile experience = lost visitors/customers</li><li>Professional standard in 2024</li></ul><p><strong>Key principles:</strong></p><ul><li>Flexible layouts that scale</li><li>Optimized images</li><li>Readable fonts on all devices</li><li>Touch-friendly buttons and links</li></ul>",
    category: "Responsive Design",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "resp-2",
    question: "How do I test if my website is mobile-friendly?",
    answer: "<p>Testing responsive design:</p><p><strong>Method 1: Browser DevTools</strong></p><ol><li>Right-click page → <strong>Inspect</strong></li><li>Click <strong>device toggle</strong> icon (phone/tablet icon)</li><li>Test different device sizes</li></ol><p><strong>Method 2: Google Mobile-Friendly Test</strong></p><ul><li>Visit: search.google.com/test/mobile-friendly</li><li>Enter your URL → Test</li></ul><p><strong>Method 3: Real Devices</strong></p><ul><li>Test on actual phones and tablets</li><li>Use BrowserStack for testing multiple devices</li></ul>",
    category: "Responsive Design",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "resp-3",
    question: "How do I fix text that's too small on mobile?",
    answer: "<p>Fixing mobile text size:</p><p><strong>In Page Builder (Elementor/Divi):</strong></p><ol><li>Select text element</li><li>Switch to <strong>Mobile view</strong></li><li>Increase <strong>Font Size</strong> specifically for mobile</li><li>Ensure <strong>line height</strong> is at least 1.5</li></ol><p><strong>Best Practices:</strong></p><ul><li>Body text: minimum 16px on mobile</li><li>Headings: scale appropriately (H1: 28-32px mobile)</li><li>Use <strong>rem</strong> or <strong>em</strong> units for better scaling</li></ul><p><strong>Quick fix:</strong> Add CSS: <code>body { font-size: 16px; }</code></p>",
    category: "Responsive Design",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "resp-4",
    question: "How do I fix overlapping elements on mobile?",
    answer: "<p>Fixing mobile layout issues:</p><ol><li><strong>Reduce padding/margins</strong> in mobile view</li><li><strong>Stack columns</strong> vertically on mobile (Column → Responsive → Mobile: 100% width)</li><li><strong>Hide decorative elements</strong> on mobile using 'Hide on Mobile' option</li><li><strong>Reduce section heights</strong> for mobile</li><li><strong>Test in mobile view</strong> while building</li></ol><p><strong>Common causes:</strong></p><ul><li>Fixed widths instead of percentages</li><li>Too much padding on mobile</li><li>Images not set to max-width: 100%</li></ul>",
    category: "Responsive Design",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "resp-5",
    question: "How do I create a mobile menu (hamburger menu)?",
    answer: "<p>Creating mobile-friendly navigation:</p><p><strong>Most themes include this automatically!</strong></p><p><strong>In Elementor:</strong></p><ol><li>Use <strong>Nav Menu widget</strong></li><li>In <strong>Mobile Dropdown</strong> settings</li><li>Set breakpoint (usually 768px)</li><li>Choose hamburger icon</li><li>Customize dropdown appearance</li></ol><p><strong>Customizing:</strong></p><ul><li>Change hamburger icon</li><li>Style mobile menu colors</li><li>Add close (X) button</li></ul><p><strong>Note:</strong> Divi and most modern themes handle this automatically.</p>",
    category: "Responsive Design",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "resp-6",
    question: "What are breakpoints and how do I use them?",
    answer: "<p><strong>Breakpoints</strong> are screen widths where your design adapts to different devices.</p><p><strong>Standard breakpoints:</strong></p><ul><li><strong>Desktop:</strong> 1200px and above</li><li><strong>Tablet:</strong> 768px - 1199px</li><li><strong>Mobile:</strong> Below 768px</li></ul><p><strong>In Elementor/Divi:</strong></p><ul><li>Set different values for each device</li><li>Use responsive settings in style panels</li><li>Preview each breakpoint before publishing</li></ul><p><strong>Pro tip:</strong> Design desktop-first, then optimize for tablet and mobile!</p>",
    category: "Responsive Design",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Plugin Management (7 questions)
  {
    id: "plugin-1",
    question: "How do I install a WordPress plugin?",
    answer: "<p>Installing plugins:</p><p><strong>Method 1: From WordPress Repository</strong></p><ol><li>Go to <strong>Plugins → Add New</strong></li><li>Search for plugin name</li><li>Click <strong>Install Now</strong></li><li>Click <strong>Activate</strong></li></ol><p><strong>Method 2: Upload Premium Plugin</strong></p><ol><li>Download plugin .zip file</li><li><strong>Plugins → Add New → Upload Plugin</strong></li><li>Choose file → Install → Activate</li></ol><p><strong>Note:</strong> Only install plugins from trusted sources!</p>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "plugin-2",
    question: "What are essential plugins every WordPress site should have?",
    answer: "<p><strong>Must-have plugins:</strong></p><ol><li><strong>Security:</strong> Wordfence or Sucuri Security</li><li><strong>SEO:</strong> Yoast SEO or Rank Math</li><li><strong>Backup:</strong> UpdraftPlus or BackupBuddy</li><li><strong>Performance:</strong> WP Rocket or W3 Total Cache</li><li><strong>Forms:</strong> Contact Form 7 or WPForms</li><li><strong>Image Optimization:</strong> Smush or ShortPixel</li><li><strong>Page Builder:</strong> Elementor or Divi</li></ol><p><strong>Recommendation:</strong> Keep plugins to minimum (10-20 max) for best performance.</p>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "plugin-3",
    question: "How do I fix plugin conflicts?",
    answer: "<p>Troubleshooting plugin conflicts:</p><ol><li><strong>Deactivate all plugins</strong> except the problematic one</li><li>Check if issue persists</li><li><strong>Reactivate plugins one by one</strong> to identify conflict</li><li>When you find conflicting plugin, look for alternatives</li><li>Or contact plugin developers for support</li></ol><p><strong>Prevention:</strong></p><ul><li>Keep all plugins updated</li><li>Test new plugins on staging site first</li><li>Read reviews before installing</li><li>Avoid nulled/pirated plugins (security risk!)</li></ul>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "plugin-4",
    question: "Should I delete or deactivate unused plugins?",
    answer: "<p><strong>Always DELETE unused plugins, don't just deactivate!</strong></p><p><strong>Why delete:</strong></p><ul><li>Deactivated plugins still take up space</li><li>Can still be exploited by hackers</li><li>May conflict during updates</li><li>Clutters your plugin list</li></ul><p><strong>Safe deletion process:</strong></p><ol><li>Create backup first</li><li>Deactivate plugin</li><li>Test site to ensure nothing breaks</li><li>Click <strong>Delete</strong></li></ol><p><strong>Exception:</strong> Keep deactivated if you plan to use it seasonally.</p>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "plugin-5",
    question: "How many plugins are too many?",
    answer: "<p>There's no magic number, but <strong>quality over quantity</strong> matters!</p><p><strong>Guidelines:</strong></p><ul><li><strong>10-20 plugins</strong>: Typical for most sites</li><li><strong>20-30 plugins</strong>: Acceptable if well-coded</li><li><strong>40+ plugins</strong>: Likely causing performance issues</li></ul><p><strong>What matters more:</strong></p><ul><li>Plugin code quality (well-coded plugins don't slow sites)</li><li>How many run on frontend vs. backend only</li><li>Database queries each plugin makes</li></ul><p><strong>Optimization:</strong></p><ul><li>Use multi-purpose plugins (e.g., Jetpack for multiple features)</li><li>Audit regularly with Query Monitor plugin</li></ul>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "plugin-6",
    question: "What should I do before updating plugins?",
    answer: "<p><strong>Pre-update checklist:</strong></p><ol><li><strong>Create full backup</strong> (database + files)</li><li><strong>Read update changelog</strong> for breaking changes</li><li><strong>Test on staging site</strong> if possible</li><li><strong>Update during low-traffic times</strong></li><li><strong>Update WordPress core first</strong>, then plugins</li><li><strong>Update one at a time</strong> (test between updates)</li></ol><p><strong>After updating:</strong></p><ul><li>Test key site functionality</li><li>Check for errors in browser console</li><li>Clear cache</li></ul><p><strong>If something breaks:</strong> Restore from backup or deactivate problematic plugin.</p>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "plugin-7",
    question: "Are nulled/pirated plugins safe to use?",
    answer: "<p><strong>NEVER use nulled or pirated plugins! Here's why:</strong></p><p><strong>Security Risks:</strong></p><ul><li>Often contain malware, backdoors, or malicious code</li><li>Can steal sensitive data or passwords</li><li>May inject spam links into your site</li><li>Could get your site blacklisted by Google</li></ul><p><strong>Other Issues:</strong></p><ul><li>No updates = security vulnerabilities</li><li>No support from developers</li><li>May break your site</li><li>Illegal and unethical</li></ul><p><strong>Alternatives:</strong></p><ul><li>Use free versions or lite plugins</li><li>Invest in legitimate licenses (often very affordable)</li><li>Look for open-source alternatives</li></ul>",
    category: "Plugin Management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // WooCommerce & E-commerce (7 questions)
  {
    id: "woo-1",
    question: "How do I set up WooCommerce on my WordPress site?",
    answer: "<p>Setting up WooCommerce:</p><ol><li>Install <strong>WooCommerce plugin</strong>: Plugins → Add New → Search 'WooCommerce'</li><li>Activate and start <strong>Setup Wizard</strong></li><li>Configure: <ul><li>Store address and currency</li><li>Shipping zones and methods</li><li>Payment gateways (PayPal, Stripe)</li><li>Tax settings</li></ul></li><li>Add your first product: <strong>Products → Add New</strong></li><li>Create Shop and Cart pages (auto-created by wizard)</li></ol><p><strong>Recommended:</strong> Install WooCommerce-compatible theme like Storefront, Astra, or OceanWP.</p>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "woo-2",
    question: "How do I add products to my WooCommerce store?",
    answer: "<p>Adding products:</p><ol><li>Go to <strong>Products → Add New</strong></li><li>Enter <strong>Product Name</strong> and <strong>Description</strong></li><li>Set <strong>Product Data</strong>: <ul><li><strong>Simple product</strong> (single item)</li><li><strong>Variable product</strong> (with options like size/color)</li><li><strong>Grouped</strong> or <strong>External</strong> products</li></ul></li><li>Add <strong>Regular Price</strong> and <strong>Sale Price</strong> (optional)</li><li>Upload <strong>Product Images</strong> (featured + gallery)</li><li>Set <strong>Categories</strong> and <strong>Tags</strong></li><li>Configure <strong>Inventory</strong> (SKU, stock management)</li><li>Add <strong>Shipping</strong> details (weight, dimensions)</li><li>Click <strong>Publish</strong></li></ol>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "woo-3",
    question: "How do I set up payment gateways in WooCommerce?",
    answer: "<p>Setting up payments:</p><ol><li>Go to <strong>WooCommerce → Settings → Payments</strong></li><li>Enable payment methods: <ul><li><strong>PayPal Standard</strong> (free, built-in)</li><li><strong>Stripe</strong> (install Stripe plugin)</li><li><strong>Bank Transfer</strong></li><li><strong>Cash on Delivery</strong></li></ul></li><li>Click <strong>Manage</strong> to configure each gateway</li><li>Enter API keys/credentials</li><li>Test in sandbox mode first!</li></ol><p><strong>Popular gateways:</strong></p><ul><li>Stripe: Credit/debit cards</li><li>PayPal: Buyer protection</li><li>Square: In-person + online</li></ul>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "woo-4",
    question: "How do I configure shipping in WooCommerce?",
    answer: "<p>Setting up shipping:</p><ol><li>Go to <strong>WooCommerce → Settings → Shipping</strong></li><li>Create <strong>Shipping Zones</strong> (regions/countries)</li><li>For each zone, add <strong>Shipping Methods</strong>: <ul><li><strong>Flat Rate</strong>: Fixed price</li><li><strong>Free Shipping</strong>: Above certain amount/always</li><li><strong>Local Pickup</strong></li></ul></li><li>Configure rates and conditions</li><li>Add <strong>Shipping Classes</strong> for different product types</li></ol><p><strong>Advanced:</strong> Use plugins like Table Rate Shipping for complex rules or integrate with carriers (UPS, FedEx) for live rates.</p>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "woo-5",
    question: "How do I create product variations (size, color, etc.) in WooCommerce?",
    answer: "<p>Creating variable products:</p><ol><li>Create product, select <strong>Variable Product</strong> from Product Data dropdown</li><li>Go to <strong>Attributes</strong> tab</li><li>Add attributes (e.g., Size, Color)</li><li>Enter values separated by | (e.g., Small | Medium | Large)</li><li>Check <strong>Used for variations</strong></li><li>Click <strong>Save attributes</strong></li><li>Go to <strong>Variations</strong> tab</li><li>Click <strong>Generate variations</strong> from all attributes</li><li>Set price, stock, image for each variation</li><li>Click <strong>Save changes</strong></li></ol><p>Customers can now select variations on product page!</p>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "woo-6",
    question: "How do I customize my WooCommerce shop page design?",
    answer: "<p>Customizing WooCommerce design:</p><p><strong>Method 1: WordPress Customizer</strong></p><ol><li><strong>Appearance → Customize → WooCommerce</strong></li><li>Adjust product catalog, single product, cart settings</li></ol><p><strong>Method 2: With Page Builder</strong></p><ul><li><strong>Elementor Pro</strong>: Use WooCommerce Builder widgets</li><li><strong>Divi</strong>: Use WooCommerce modules</li><li>Design custom product pages, shop pages</li></ul><p><strong>Method 3: WooCommerce Plugins</strong></p><ul><li>WooCommerce Customizer</li><li>YITH WooCommerce Customize</li></ul><p><strong>What you can customize:</strong> Layouts, buttons, colors, product grids, quick view, etc.</p>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "woo-7",
    question: "How do I add coupon codes and discounts in WooCommerce?",
    answer: "<p>Creating coupons:</p><ol><li>Go to <strong>WooCommerce → Coupons → Add Coupon</strong></li><li>Set <strong>Coupon Code</strong> (e.g., SAVE20)</li><li>Choose <strong>Discount Type</strong>: <ul><li>Percentage discount</li><li>Fixed cart discount</li><li>Fixed product discount</li></ul></li><li>Set <strong>Coupon Amount</strong></li><li>Configure restrictions: <ul><li>Minimum/maximum spend</li><li>Specific products/categories</li><li>Usage limits</li><li>Expiry date</li></ul></li><li>Click <strong>Publish</strong></li></ol><p><strong>Promotion ideas:</strong> Welcome discount, abandoned cart recovery, seasonal sales, bulk purchase discounts.</p>",
    category: "WooCommerce & E-commerce",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // SEO & Performance (4 questions)
  {
    id: "seo-1",
    question: "How do I optimize my WordPress site for SEO?",
    answer: "<p><strong>Essential SEO optimization steps:</strong></p><ol><li><strong>Install SEO plugin</strong>: Yoast SEO or Rank Math</li><li><strong>Set permalinks</strong>: Settings → Permalinks → Post name</li><li><strong>Create XML sitemap</strong>: Auto-generated by SEO plugin</li><li><strong>Submit to Google Search Console</strong></li><li><strong>Optimize content</strong>: <ul><li>Use target keywords naturally</li><li>Write compelling meta descriptions</li><li>Use H1, H2, H3 headings properly</li><li>Add alt text to images</li><li>Internal linking</li></ul></li><li><strong>Improve site speed</strong></li><li><strong>Get SSL certificate</strong> (HTTPS)</li><li><strong>Mobile optimization</strong></li></ol>",
    category: "SEO & Performance",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "seo-2",
    question: "How do I improve my WordPress site speed?",
    answer: "<p><strong>Speed optimization techniques:</strong></p><ol><li><strong>Use caching plugin</strong>: WP Rocket, W3 Total Cache, or WP Super Cache</li><li><strong>Optimize images</strong>: Compress with Smush or ShortPixel, use WebP format</li><li><strong>Enable lazy loading</strong> for images</li><li><strong>Minify CSS/JS</strong>: Use Autoptimize plugin</li><li><strong>Use a CDN</strong>: Cloudflare (free) or premium CDN</li><li><strong>Choose fast hosting</strong>: Upgrade if needed</li><li><strong>Limit plugins</strong>: Remove unused plugins</li><li><strong>Use lightweight theme</strong></li><li><strong>Enable GZIP compression</strong></li><li><strong>Database optimization</strong>: WP-Optimize plugin</li></ol><p><strong>Test with:</strong> GTmetrix, Google PageSpeed Insights, Pingdom</p>",
    category: "SEO & Performance",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "seo-3",
    question: "What is an XML sitemap and how do I create one?",
    answer: "<p>An <strong>XML sitemap</strong> is a file that lists all pages on your site, helping search engines crawl and index your content.</p><p><strong>Creating a sitemap:</strong></p><ol><li>Install <strong>Yoast SEO</strong> or <strong>Rank Math</strong> plugin</li><li>Sitemap is auto-generated at <code>yourdomain.com/sitemap.xml</code></li><li>Or use <strong>Google XML Sitemaps</strong> plugin</li></ol><p><strong>Submitting to Google:</strong></p><ol><li>Go to <strong>Google Search Console</strong></li><li>Add your site</li><li>Go to <strong>Sitemaps</strong> section</li><li>Submit your sitemap URL</li></ol><p>Google will start crawling your site more effectively!</p>",
    category: "SEO & Performance",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "seo-4",
    question: "How do I optimize images for web without losing quality?",
    answer: "<p><strong>Image optimization best practices:</strong></p><ol><li><strong>Choose right format</strong>: <ul><li>JPG: Photos</li><li>PNG: Graphics with transparency</li><li>WebP: Modern format, best compression (recommended!)</li></ul></li><li><strong>Compress before upload</strong>: <ul><li>Use TinyPNG or Squoosh</li><li>Or install Smush/ShortPixel plugin for automatic compression</li></ul></li><li><strong>Resize to actual display size</strong>: Don't upload 4000px image if displayed at 800px</li><li><strong>Enable lazy loading</strong></li><li><strong>Use responsive images</strong>: WordPress does this automatically</li><li><strong>Add descriptive alt text</strong> (SEO + accessibility)</li></ol><p><strong>Target:</strong> Keep images under 200KB each!</p>",
    category: "SEO & Performance",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Course Information (5 questions)
  {
    id: "course-1",
    question: "What will I learn in the No-Code/CMS Development course?",
    answer: "<p>Our comprehensive No-Code/CMS curriculum covers:</p><ul><li><strong>WordPress Fundamentals</strong>: Installation, configuration, content management</li><li><strong>Page Builders</strong>: Elementor and Divi mastery</li><li><strong>Theme Development</strong>: Customization, child themes, responsive design</li><li><strong>WooCommerce</strong>: E-commerce setup and management</li><li><strong>Plugin Ecosystem</strong>: Essential plugins and troubleshooting</li><li><strong>SEO & Performance</strong>: Optimization techniques</li><li><strong>Client Management</strong>: Project workflows and delivery</li><li><strong>Portfolio Projects</strong>: Build 5+ real websites</li></ul><p>You'll be job-ready as a CMS Developer/WordPress Specialist!</p>",
    category: "Course Information",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "course-2",
    question: "How long is the No-Code/CMS course?",
    answer: "<p><strong>Course Duration:</strong> 4 months (16 weeks)</p><p><strong>Schedule options:</strong></p><ul><li><strong>Weekday batch</strong>: Mon-Fri, 6 PM - 9 PM</li><li><strong>Weekend batch</strong>: Sat-Sun, 10 AM - 5 PM</li></ul><p><strong>What's included:</strong></p><ul><li>Live interactive sessions (100+ hours)</li><li>Recorded lectures for review</li><li>5+ hands-on projects</li><li>Weekly assignments</li><li>Doubt-clearing sessions</li><li>Capstone project</li><li>Placement preparation (final month)</li></ul><p><strong>Total commitment:</strong> 15-20 hours per week including self-study.</p>",
    category: "Course Information",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "course-3",
    question: "Do I need any prior experience to join the No-Code/CMS course?",
    answer: "<p><strong>No coding experience required!</strong> This course is designed for complete beginners.</p><p><strong>Prerequisites:</strong></p><ul><li>Basic computer knowledge</li><li>Passion for web design and building websites</li><li>Internet connection and laptop/desktop</li><li>Willingness to learn and practice</li></ul><p><strong>Who is this course for:</strong></p><ul><li>Complete beginners</li><li>Career changers</li><li>Freelancers wanting to add skills</li><li>Small business owners</li><li>Designers wanting to build their designs</li><li>Marketing professionals</li></ul><p>We start from absolute basics!</p>",
    category: "Course Information",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "course-4",
    question: "What is the course fee and do you offer payment plans?",
    answer: "<p><strong>Course Fee:</strong> $1,999 (₹1,65,000)</p><p><strong>What's included:</strong></p><ul><li>Complete 4-month curriculum</li><li>All course materials and resources</li><li>Premium plugin/theme access for projects</li><li>Lifetime access to recordings</li><li>Placement support</li><li>Certificate of completion</li></ul><p><strong>Payment options:</strong></p><ol><li><strong>Full payment</strong>: 10% discount = $1,799</li><li><strong>EMI Plans</strong>: <ul><li>3 months: No interest</li><li>6 months: Minimal interest</li></ul></li><li><strong>Scholarships</strong>: Up to 30% for deserving students</li></ol><p><strong>7-day money-back guarantee!</strong></p>",
    category: "Course Information",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "course-5",
    question: "What projects will I build during the course?",
    answer: "<p>You'll build <strong>5+ professional portfolio projects</strong>:</p><ol><li><strong>Business Website</strong>: Corporate site with Elementor</li><li><strong>E-commerce Store</strong>: Full WooCommerce setup with payment gateway</li><li><strong>Restaurant Website</strong>: With online ordering and reservations</li><li><strong>Portfolio Website</strong>: For creative professionals using Divi</li><li><strong>Membership Site</strong>: With user registration and restricted content</li><li><strong>Capstone Project</strong>: Your choice - demonstrate all skills</li></ol><p>All projects are:</p><ul><li>Fully responsive</li><li>SEO optimized</li><li>Deployed to live servers</li><li>Portfolio-ready</li></ul><p>Perfect for showcasing to employers/clients!</p>",
    category: "Course Information",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // Certification & Placement (4 questions)
  {
    id: "cert-1",
    question: "Will I receive a certificate after completing the course?",
    answer: "<p><strong>Yes! You'll receive:</strong></p><ol><li><strong>Certificate of Completion</strong>: Upon finishing all modules and projects</li><li><strong>Merit Certificate</strong>: For top performers (top 10% of batch)</li></ol><p><strong>Certificate features:</strong></p><ul><li>Industry-recognized credential</li><li>Verified digital certificate (shareable on LinkedIn)</li><li>Physical certificate mailed to you</li><li>Includes course topics covered and project details</li></ul><p><strong>Requirements for certificate:</strong></p><ul><li>Complete all modules (80%+ attendance)</li><li>Submit all assignments</li><li>Complete capstone project</li><li>Pass final assessment</li></ul>",
    category: "Certification & Placement",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cert-2",
    question: "What placement assistance do you provide?",
    answer: "<p><strong>Comprehensive placement support:</strong></p><ol><li><strong>Resume Building</strong>: Professional resume tailored to CMS developer roles</li><li><strong>Portfolio Development</strong>: Showcase your best projects</li><li><strong>LinkedIn Optimization</strong>: Profile enhancement for visibility</li><li><strong>Mock Interviews</strong>: Practice with feedback</li><li><strong>Interview Preparation</strong>: Common questions, technical tests</li><li><strong>Job Referrals</strong>: Direct connections to 100+ partner companies</li><li><strong>Freelance Guidance</strong>: How to get Upwork/Fiverr clients</li><li><strong>Placement Drives</strong>: Regular company interviews</li></ol><p><strong>Support duration:</strong> Up to 1 year after course completion!</p>",
    category: "Certification & Placement",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cert-3",
    question: "What kind of jobs can I get after completing the No-Code/CMS course?",
    answer: "<p><strong>Career opportunities:</strong></p><ul><li><strong>WordPress Developer</strong>: $40K-$70K/year</li><li><strong>CMS Developer</strong>: $45K-$75K/year</li><li><strong>Website Designer</strong>: $35K-$60K/year</li><li><strong>E-commerce Specialist</strong>: $50K-$80K/year</li><li><strong>Freelance Website Builder</strong>: $25-$100/hour</li><li><strong>Digital Agency Developer</strong>: $45K-$70K/year</li><li><strong>Small Business Web Consultant</strong>: Project-based</li></ul><p><strong>Freelance potential:</strong></p><ul><li>Website projects: $500-$5,000 each</li><li>Monthly retainers: $300-$1,500</li><li>Build 2-3 sites/month = $2,000-$10,000 income</li></ul>",
    category: "Certification & Placement",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cert-4",
    question: "What is your placement success rate?",
    answer: "<p><strong>Placement Statistics:</strong></p><ul><li><strong>85% placement rate</strong> within 3 months of course completion</li><li><strong>Average starting package:</strong> $45,000-$55,000/year</li><li><strong>Highest package:</strong> $95,000/year</li></ul><p><strong>Our students are working at:</strong></p><ul><li>Digital marketing agencies</li><li>Web development companies</li><li>E-commerce businesses</li><li>Freelance (30% of graduates)</li><li>Product companies</li></ul><p><strong>Success factors:</strong></p><ul><li>100+ partner companies</li><li>Strong portfolio projects</li><li>Practical, job-ready skills</li><li>Dedicated placement team</li></ul><p><strong>Note:</strong> Placement depends on student effort, interview performance, and market conditions.</p>",
    category: "Certification & Placement",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// LocalStorage keys
export const FAQ_STORAGE_KEY = 'skillmount_faqs';

// Utility functions
export const loadFAQs = (): FAQ[] => {
  try {
    const stored = localStorage.getItem(FAQ_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading FAQs from localStorage:', error);
  }
  return defaultFAQs;
};

export const saveFAQs = (faqs: FAQ[]): void => {
  try {
    localStorage.setItem(FAQ_STORAGE_KEY, JSON.stringify(faqs));
  } catch (error) {
    console.error('Error saving FAQs to localStorage:', error);
  }
};

export const initializeFAQs = (): void => {
  const existing = localStorage.getItem(FAQ_STORAGE_KEY);
  if (!existing) {
    saveFAQs(defaultFAQs);
  }
};

