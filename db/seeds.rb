User.destroy_all
Program.destroy_all
Review.destroy_all
Status.destroy_all

users = []
users << User.create!(username: 'Guest', password: 'password')
users << User.create!(username: 'Luke', password: 'password')
users << User.create!(username: 'Timmy', password: 'password')
users << User.create!(username: 'Frank', password: 'password')

user_ids = users.map(&:id)

programs = []

programs << Program.create!({
  name: 'Ruby on Rails',
  creator: 'David Heinsmeier Hansson',
  description: 'Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don\'t repeat yourself (DRY), and the active record pattern.',
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478379951/fg5otdbdy3f5tmt3plqd.png",
  source_code_url: 'https://github.com/rails/rails',
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478379951/fg5otdbdy3f5tmt3plqd.png",
  author_id: user_ids[0]
})

programs << Program.create!({
  name: "Node.js",
  creator: "Ryan Dahl",
  source_code_url: "https://github.com/nodejs/node",
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478476842/zxozxwvxdc1dtp6fedkm.jpg",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478390051/qn4ezajyfmdta1kh8ojp.png",
  description: "Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications. Although Node.js is not a JavaScript framework, many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.\n\nNode.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).\n\nThe Node.js distributed development project, governed by the Node.js Foundation, is facilitated by the Linux Foundation's Collaborative Projects program.",
  author_id: user_ids[0]
})

programs << Program.create!({
  name: "Atom",
  creator: "GitHub",
  source_code_url: "https://github.com/atom",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478385048/icve4ksfvnn4tnusuzak.png",
  description: "Atom is a free and open-source text and source code editor for OS X, Linux, and Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies. Most of the extending packages have free software licenses and are community-built and maintained. Atom is based on Electron (formerly known as Atom Shell), a framework that enables cross-platform desktop applications using Chromium and Node.js. It is written in CoffeeScript and Less. It can also be used as an integrated development environment (IDE). Atom was released from beta, as version 1.0, on June 25, 2015. Its developers call it a \"hackable text editor for the 21st Century\".",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478385048/icve4ksfvnn4tnusuzak.png"
})

programs << Program.create!({
  name: "Material-Ui",
  creator: "Olivier Tassinari",
  source_code_url: "https://github.com/callemall/material-ui",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478389665/eqkmgqwr7stpgezwhe0j.svg",
  description: "Material Design (codenamed Quantum Paper) is a design language developed in 2014 by Google. Expanding upon the \"card\" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.\n\nDesigner Matías Duarte explained that, \"unlike real paper, our digital material can expand and reform intelligently. Material has physical surfaces and edges. Seams and shadows provide meaning about what you can touch.\" Google states that their new design language is based on paper and ink.\n\nMaterial Design can be used in API Level 21 and newer via the v7 appcompat library, which is used on virtually all Android devices manufactured after 2009. Material Design will gradually be extended throughout Google's array of web and mobile products, providing a consistent experience across all platforms and applications. Google has also released application programming interfaces (APIs) for third-party developers to incorporate the design language into their applications.\n\n",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478389665/eqkmgqwr7stpgezwhe0j.jpg"
})

programs << Program.create!(
  name: "Vim",
  creator: "Bram Moolenaar",
  source_code_url: "https://github.com/vim/vim",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478472662/tjjjuqie0u7b4sbwfo8s.png",
  description: "Vim (a contraction of Vi IMproved) is a clone of Bill Joy's vi text editor program for Unix. It was written by Bram Moolenaar based on source for a port of the Stevie editor to the Amiga and first released publicly in 1991. Vim is designed for use both from a command-line interface and as a standalone application in a graphical user interface. Vim is free and open source software and is released under a license that includes some charityware clauses, encouraging users who enjoy the software to consider donating to children in Uganda. The license is compatible with the GNU General Public License.\nAlthough Vim was originally released for the Amiga, Vim has since been developed to be cross-platform, supporting many other platforms. In 2006, it was voted the most popular editor amongst Linux Journal readers;[6 in 2015 the Stack Overflow developer survey found it to be the third most popular text editor;[7 and in 2016 the Stack Overflow developer survey found it to be the fourth most popular development environment.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478472662/tjjjuqie0u7b4sbwfo8s.png"
)

programs << Program.create!(
  name: "AngularJS",
  creator: "Google",
  description: 'AngularJS (commonly referred to as "Angular" or "Angular.js") is a complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.\n\nThe AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.\n\nAccording to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and approximately 12,000 other sites out of 1 million tested in October 2016.\n\nAngularJS is the frontend part of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular.js itself, and Node.js runtime environment.',
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475391/eutx7pxzhtrmszzvp80g.png",
  source_code_url: "https://github.com/angular/angular.js",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475391/eutx7pxzhtrmszzvp80g.png"
)

programs << Program.create!(
  name: "Backbone.js",
  creator: "Jeremy Ashkenas",
  source_code_url: "https://github.com/jashkenas/backbone/",
  description: "Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm. Backbone is known for being lightweight, as its only hard dependency is on one JavaScript library, Underscore.js, plus jQuery for use of the full library. It is designed for developing single-page web applications, and for keeping various parts of web applications (e.g. multiple clients and the server) synchronized. Backbone was created by Jeremy Ashkenas, who is also known for CoffeeScript and Underscore.js.",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475542/din4nzefal24dc1vvpfr.png",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475542/din4nzefal24dc1vvpfr.png"
)

programs << Program.create!(
  name: "Django",
  creator: "Lawrence Journal-World",
  source_code_url: "https://github.com/django/django",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475707/exkz9qeidcvmo5tetpc2.png",
  description: "Django is a free and open-source web framework, written in Python, which follows the model-view-template (MVT) architectural pattern. It is maintained by the Django Software Foundation (DSF), an independent organization established as a 501(c)(3) non-profit.\n\nDjango's primary goal is to ease the creation of complex, database-driven websites. Django emphasizes reusability and \"pluggability\" of components, rapid development, and the principle of don't repeat yourself. Python is used throughout, even for settings files and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.\n\nSome well-known sites that use Django include the Public Broadcasting Service, Pinterest, Instagram, Mozilla, The Washington Times, Disqus, Bitbucket, and Nextdoor.",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475707/exkz9qeidcvmo5tetpc2.png"
)

programs << Program.create!(
  name: "Snap",
  creator: "Gregory Collins, doug Beardsly",
  source_code_url: "https://github.com/snapframework/snap-core",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475947/rg1xropbr1icomudealg.png",
  description: "Snap is a simple web development framework written in the Haskell programming language. It is used by Silk, JanRain, Racemetric, www.lpaste.net, SooStone Inc, and Group Commerce. Snap is also used as a lightweight, standalone Haskell server. The popular static site generator Hakyll uses Snap for its preview mode.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475947/rg1xropbr1icomudealg.png"
)

programs << Program.create!(
  name: "Capybara",
  creator: "Jonas Nicklas",
  source_code_url: "https://github.com/jnicklas/capybara",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478476278/oztudi2rtxett0kvxtvh.jpg",
  description: "Capybara is a web-based test automation software that simulates scenarios for user stories and automates web application testing for behavior-driven software development. It is a part of the Cucumber testing framework written in the Ruby programming language that simulates various aspects of a web browser from the perspective of a real user.\n\nPretending to be a user, it can interact with the application to receive pages, parse the HTML and submit the forms.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478476278/oztudi2rtxett0kvxtvh.jpg"
)

programs << Program.create!(
  name: "RSpec",
  creator: "David Chelimsky, Myron Marston, Andy Lindeman, Jon Rowe, Paul Casaretto, Sam Phippen, Bradley Schaefer",
  description: "RSpec is a behavior-driven development (BDD) framework for the Ruby programming language, inspired by JBehave. It contains its own mocking framework that is fully integrated into the framework based upon JMock. The framework can be considered a domain-specific language (DSL) and resembles a natural language specification.",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478476491/eunn5teybxdwzwihmvob.png",
  source_code_url: "https://github.com/rspec/rspec-core",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478476491/eunn5teybxdwzwihmvob.png"
)

programs << Program.create!(
  name: "Z Shell",
  creator: "Paul Falstad",
  source_code_url: "https://sourceforge.net/p/zsh/code/ci/master/tree/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477040/ltxb9hqoz2fpeel9lrmt.jpg",
  description: "The Z shell (zsh) is a Unix shell that can be used as an interactive login shell and as a powerful command interpreter for shell scripting. Zsh is an extended Bourne shell with a large number of improvements, including some features of bash, ksh, and tcsh.\n\nPaul Falstad wrote the first version of zsh in 1990 while a student at Princeton University. The name zsh derives from the name of Yale professor Zhong Shao (then an Assistant Professor at Princeton University) — Paul Falstad regarded Shao's login-id, \"zsh\", as a good name for a shell. Speakers of American English pronounce \"Z\" as zee, so \"Z shell\" is allophonous with \"C shell\", which in turn is a homophone of \"seashell\".",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477040/ltxb9hqoz2fpeel9lrmt.jpg"
)

programs << Program.create!(
  name: "Emacs",
  creator: "Richard Stallman",
  source_code_url: "https://github.com/emacs-mirror/emacs",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477374/ojpb2m5rsumekorwlhxq.png",
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477374/ojpb2m5rsumekorwlhxq.png",
  author_id: user_ids[3],
  description: "Emacs and its derivatives are a family of text editors that are characterized by their extensibility. The manual for the most widely used variant, GNU Emacs, describes it as \"the extensible, customizable, self-documenting, real-time display editor\". Development of the first Emacs began in the mid-1970s and continues actively as of 2016.\n\nEmacs has over 2,000 built-in commands and allows the user to combine these commands into macros to automate work. Emacs Lisp provides a deep extension capability allowing users and developers to write new commands using a dialect of the Lisp programming language. Extensions have been written to manage email, files, outlines, and RSS feeds.\n\nThe original EMACS was written in 1976 by Richard Stallman and Guy L. Steele, Jr. as a set of Editor MACroS for the TECO editor. It was inspired by the ideas of the TECO-macro editors TECMAC and TMACS.\n\nThe most popular, and most ported, version of Emacs is GNU Emacs, which was created by Stallman for the GNU Project. XEmacs is a variant that branched from GNU Emacs in 1991. Both GNU Emacs and XEmacs use Emacs Lisp and are for the most part compatible with each other.\n\nEmacs is, along with vi, one of the two main contenders in the traditional editor wars of Unix culture. Both are among the oldest application programs still in use.",
)

programs << Program.create!(
  name: "jQuery",
  creator: "jQuery Team",
  source_code_url: "https://github.com/jquery/jquery",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477564/f1ls4lmcbi5viajwgo02.gif",
  description: "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. jQuery is free, open-source software licensed under the MIT License.\n\njQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets. The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications.\n\nThe set of jQuery core features—DOM element selections, traversal and manipulation—enabled by its selector engine (named \"Sizzle\" from v1.3), created a new \"programming style\", fusing algorithms and DOM data structures. This style influenced the architecture of other JavaScript frameworks like YUI v3 and Dojo, later stimulating the creation of the standard Selectors API.\n\nMicrosoft and Nokia bundle jQuery on their platforms. Microsoft includes it with Visual Studio for use within Microsoft's ASP.NET AJAX and ASP.NET MVC frameworks while Nokia has integrated it into the Web Run-Time widget development platform. jQuery has also been used in MediaWiki since version 1.16.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477564/f1ls4lmcbi5viajwgo02.jpg"
)

programs << Program.create!(
  name: "Kubuntu",
  creator: "Blue Systems",
  source_code_url: "https://repogen.simplylinux.ch/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478785/vgn4rhmkrqi9wptggb3f.jpg",
  description: "Kubuntu is an official flavour of the Ubuntu operating system which uses the KDE Plasma Desktop instead of the Unity graphical environment. As part of the Ubuntu project, Kubuntu uses the same underlying systems. Every package in Kubuntu shares the same repositories as Ubuntu, and it is released regularly on the same schedule as Ubuntu.\n\nKubuntu was sponsored by Canonical Ltd. until 2012, and then directly by Blue Systems. Now employees of Blue Systems contribute upstream, to KDE and Debian, and Kubuntu development is led by community contributors. During the changeover, Kubuntu retained the use of Ubuntu project servers and existing developers",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478785/vgn4rhmkrqi9wptggb3f.jpg"
)

programs << Program.create!(
  name: "Ubuntu",
  creator: "Ubuntu Comunity",
  source_code_url: "http://cdimage.ubuntu.com/source/current/source/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477860/iv6zz7tz6uuiq5wcvhhq.png",
  description: "Ubuntu is a Debian-based Linux operating system for personal computers; tablets and smartphones, where Ubuntu Touch edition is used; and also runs network servers, usually with the Ubuntu Server edition, either on physical or virtual servers (such as on mainframes) and/or with containers, that is with enterprise-class features; runs on the most popular architectures, including server-class ARM-based.\n\nUbuntu is published by Canonical Ltd, who offer commercial support. It is based on free software and named after the Southern African philosophy of ubuntu (literally, 'human-ness'), which Canonical Ltd. suggests can be loosely translated as \"humanity to others\" or \"I am what I am because of who we all are\". It uses Unity as its default user interface for the desktop.\n\nUbuntu is the most popular operating system running in hosted environments, so–called \"clouds\", as it is the most popular server Linux distribution.\n\nDevelopment of Ubuntu is led by UK-based Canonical Ltd., a company of South African entrepreneur Mark Shuttleworth. Canonical generates revenue through the sale of technical support and other services related to Ubuntu. The Ubuntu project is publicly committed to the principles of open-source software development; people are encouraged to use free software, study how it works, improve upon it, and distribute it.",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477860/iv6zz7tz6uuiq5wcvhhq.png"
)

programs << Program.create!(
  name: "Debian",
  creator: "Debian Project",
  source_code_url: "http://sources.debian.net/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478026/rbcrjhygrm62z90iniye.png",
  description: "Debian is a Unix-like computer operating system that is composed entirely of free software, most of which is under the GNU General Public License and packaged by a group of individuals participating in the Debian Project.\n\nThe Debian Project was first announced in 1993 by Ian Murdock, Debian 0.01 was released on September 15, 1993, and the first stable release was made in 1996.\n\nThe projects work is carried out over the Internet by a team of volunteers guided by the Debian Project Leader and three foundational documents: the Debian Social Contract, the Debian Constitution, and the Debian Free Software Guidelines. New distributions are updated continually, and the next candidate is released after a time-based freeze.\n\nAs one of the earliest Linux distributions, it was decided that Debian was to be developed openly and freely distributed in the spirit of the GNU Project. This decision drew the attention and support of the Free Software Foundation, which sponsored the project for one year from November 1994 to November 1995. Upon the ending of the sponsorship, the Debian Project formed the non-profit organisation Software in the Public Interest.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478026/rbcrjhygrm62z90iniye.png"
)

programs << Program.create!(
  name: "Braintree",
  creator: "Bryan Johnson",
  source_code_url: "https://github.com/braintree/braintree_ruby",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478194/fb2tj1g3xjbwexop2blf.png",
  description: "Braintree—a subsidiary of PayPal—is a company based in Chicago that specializes in mobile and web payment systems for ecommerce companies. Braintree emphasizes its easy integrations, multiple payment method options (including PayPal and Venmo), simple pricing, security, and support.\n\nBraintree provides its customers with a merchant account and a payment gateway, along with various features including recurring billing, credit card storage, support for mobile and international payments, and PCI Compliance solutions.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478194/fb2tj1g3xjbwexop2blf.png"
)

programs << Program.create!(
  name: "Webpack",
  creator: "Tobias Koppers, Sean Larkin, Johannes Ewald, Juho Vepsäläinen",
  source_code_url: "https://github.com/webpack/webpack",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478343/uasvpriawt68tuezyemh.png",
  description: "Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.It takes the dependencies and generates a dependency graph allowing you to use a modular approach for your web application development purposes.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478343/uasvpriawt68tuezyemh.png"
)

programs << Program.create!(
  name: "Bourne Shell",
  creator: "Stephen Bourne",
  source_code_url: "http://heirloom.sourceforge.net/sh.html",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478496/hgqnkegvly9hwa8saxbu.png",
  description: "The Bourne shell (sh) is a shell, or command-line interpreter, for computer operating systems.\n\nThe Bourne shell was the default shell for Unix Version 7. Most Unix-like systems continue to have /bin/sh—which will be the Bourne shell, or a symbolic link or hard link to a compatible shell even when other shells are used by most users.\n\nDeveloped by Stephen Bourne at Bell Labs, it was a replacement for the Thompson shell, whose executable file had the same name—sh. It was released in 1977 in the Version 7 Unix release distributed to colleges and universities. Although it is used as an interactive command interpreter, it was also intended as a scripting language and contains most of the features that are commonly considered to produce structured programs.\n\nIt gained popularity with the publication of The Unix Programming Environment by Brian Kernighan and Rob Pike—the first commercially published book that presented the shell as a programming language in a tutorial form.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478496/hgqnkegvly9hwa8saxbu.png"
)

programs << Program.create!(
  name: "Red Hat Linux",
  creator: "Red Hat",
  source_code_url: "https://www.redhat.com/en",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478807344/utgpklenw6dhzwevpkhw.png",
  description: "Red Hat Linux, assembled by the company Red Hat, was a widely used Linux distribution until its discontinuation in 2004.\n\nEarly releases of Red Hat Linux were called Red Hat Commercial Linux; Red Hat first published the software on November 3, 1994. It was the first Linux distribution to use the RPM Package Manager as its packaging format, and over time has served as the starting point for several other distributions, such as Mandriva Linux and Yellow Dog Linux.\n\nIn 2003, Red Hat discontinued the Red Hat Linux line in favor of Red Hat Enterprise Linux (RHEL) for enterprise environments. Fedora, developed by the community-supported Fedora Project and sponsored by Red Hat, is a free-of-cost alternative intended for home use. Red Hat Linux 9, the final release, hit its official end-of-life on April 30, 2004, although updates were published for it through 2006 by the Fedora Legacy project until that shut down in early 2007.",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478807344/utgpklenw6dhzwevpkhw.png"
)


programs << Program.create!(
  name: "React Router",
  creator: "Alexander Gudermann",
  source_code_url: "https://github.com/ReactTraining/react-router",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478809494/vl3b1rky51pvr4m6pxlw.png",
  description: "React Router is a complete routing library for React.\n\nReact Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478809494/vl3b1rky51pvr4m6pxlw.png"
)

programs << Program.create!(
  name: "Bundler",
  creator: "Andre Arko, Samuel Giddins, James Wen, Chris Morris",
  source_code_url: "https://github.com/bundler/bundler",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478809764/tuaxacotgrln2ov9re5w.png",
  description: "Bundler provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.\n\nBundler is an exit from dependency hell, and ensures that the gems you need are present in development, staging, and production. Starting work on a project is as simple as bundle install.",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478809764/tuaxacotgrln2ov9re5w.png"
)

programs << Program.create!(
  name: "XCode",
  creator: "Apple Inc.",
  source_code_url: "https://developer.apple.com/xcode/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478809949/aychltnghru2n6q36uff.jpg",
  description: "Xcode is an integrated development environment (IDE) containing a suite of software development tools developed by Apple for developing software for macOS, iOS, WatchOS and tvOS. First released in 2003, the latest stable release is version 8 and is available via the Mac App Store free of charge for OS X El Capitan and macOS Sierra users. Registered developers can download preview releases and prior versions of the suite through the Apple Developer website. However, Apple recently made a beta version of version 8.0 of the software available to those of the public with Apple Developer accounts.",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478809949/aychltnghru2n6q36uff.jpg"
)

programs << Program.create!(
  name: "The Silver Searcher",
  creator: "Geoff Greer",
  source_code_url: "https://github.com/ggreer",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478812553/yioj7vcxbpovtckd1xaa.jpg",
  description: "Do you know C? I invite you to pair with me to help me get to Ag 1.0.\n\nWhat's so great about Ag?\n\nIt is an order of magnitude faster than ack. It ignores file patterns from your .gitignore and .hgignore. If there are files in your source repo you don't want to search, just add their patterns to a .ignore file. The command name is 33% shorter than ack, and all keys are on the home row!",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478812553/yioj7vcxbpovtckd1xaa.jpg"
)

programs << Program.create!(
  name: "Rubymine",
  creator: "JetBrains",
  source_code_url: "http://www.jetbrains.com/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478810182/hbrivj6ock7iau1uiqag.png",
  description: "JetBrains (formerly IntelliJ) is a software development company whose tools are targeted towards software developers and project managers.\n\nAs of 2015, the company has over 500 employees in its five offices: in Prague, Saint Petersburg, Moscow, Munich, and Boston.\n\nThe company offers an extended family of integrated development environments (IDEs) for the programming languages Java, Ruby, Python, PHP, SQL, Objective-C, C++, and JavaScript.\n\nIn 2011 the company entered a new area by introducing Kotlin, a programming language that runs in a Java virtual machine (JVM).\n\nInfoWorld magazine awarded the firm \"Technology of the Year Award\" in 2015 and 2011.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478810182/hbrivj6ock7iau1uiqag.png"
)

programs << Program.create!(
  name: "Devise",
  creator: "Lucas Mazza",
  source_code_url: "https://github.com/plataformatec/devise",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478810344/rizhjkiz0dkomijgcons.png",
  description: "Just about every public-facing Rails app needs some type of authentication scheme. Authentication is often confused and interchanged with authorization, although the 2 terms have very distinct meanings.\n\nIn a nut shell, authentication determines if users are who they say they are, commonly through a username and password combination. Authorization determines which actions an authenticated user can perform. Devise is a solution to the former problem. I recently switched from AuthLogic in favor of Devise’s advanced engine for providing models, controllers and views. AuthLogic leaves it up to the developer to create the views and controllers. However, views are generally the first thing you should override, but thankfully Devise makes that easy as well.\n\nDevise is a very active gem, and in conjunction with omniauth, has made it incredibly simple to setup Facebook and Twitter login buttons in less than a dozen lines of code. At first, the engine seemed too overbearing for me, but once I understood how easy it is to override and extend Devise, I made the switch.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478810344/rizhjkiz0dkomijgcons.png"
)

programs << Program.create!(
  name: "CanCan",
  creator: "Vasiliy Ermolovich",
  source_code_url: "https://github.com/ryanb/cancan",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478810471/r5dubx4bveg3zuuvcpl7.jpg",
  description: "CanCan is an incredibly easy way to define and access user permissions. All apps tend to have some sort of authorization scheme, but it’s generally setup adhoc, and leads to very messy view code. If you have dozens of if object.user == current_user statements littered among your views and controllers, it’s time to take a look at CanCan.\n\nIf you aren’t authorizing the current user to modify a provided object in update actions, a user could send a post request to update another user’s project, for example. With CanCan, your app’s authorization scheme is defined centrally in an Ability model. By using the can? method, you can check to see if the current user is authorized to perform an action to handle conditional view rendering.\n\nCanCan also makes it dead simple to authorize controller actions and handle authorization exceptions.",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478810471/r5dubx4bveg3zuuvcpl7.jpg"
)

programs << Program.create!(
  name: "Paperclip",
  creator: "Tute Costa",
  source_code_url: "https://github.com/thoughtbot/paperclip",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478810708/kdq1j0fykrm7e5gitre9.jpg",
  description: "If you’ve ever written code to handle file uploads and image processing, you surely cringe every time a client says “I’d like the user to have his or her own photo”–that is until you’ve worked with a gem as easy to use as this one.\n\nPaperclip makes it trivial to restrict content types, define storage locations and access a model’s associated attachment. If you’re working with images, you can define styles with corresponding resolutions for use-cases such as thumbnails and profile sizes.\n\nEven if you are using Heroku with its read-only file system, paperclip works beautifully with outside storage mechanism such as Amazon S3.",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478810708/kdq1j0fykrm7e5gitre9.jpg"
)

programs << Program.create!(
  name: "Rack SSL Enforcer",
  creator: "Tobias Matthies",
  source_code_url: "https://github.com/tobmatth/rack-ssl-enforcer",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478810868/pcrbhrxwmpjj1ejtmvyb.png",
  description: "With all the hype a few months ago over Firesheep, even basic, non credit-card accepting, apps that use passwords need for SSL. Sure, there’s no requirement that you secure your app, and even if a user’s account was compromised it may cause little harm.\n\nHowever, most people reuse the same password for everything, and I wouldn’t like to have on my conscience that a user’s online banking password was stolen because they accessed my app without SSL at Starbucks.\n\nRack SSL Enforcer is a dead simple gem that uses Rack to redirect non https requests to the https equivalent. The default configuration forces HTTPS on every request, but can easily be overridden to only required it on some URL and URL patterns.\n\nYou may be familiar with the ssl_requirement gem originally released by DHH. This isn’t compatible with Rails 3, although there is a fork bartt-ssl_requirement that is which I’ve used in previous projects. I never really liked the idea of HTTPS redirection happening after the request gets to the controller. The rack solution is much simpler, especially for securing an entire app.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478810868/pcrbhrxwmpjj1ejtmvyb.png"
)

programs << Program.create!(
  name: "Async.js",
  creator: "Graeme Yeates",
  source_code_url: "https://github.com/caolan/async",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478811014/dvsu8tmdamdf8yamfzhb.svg",
  description: "Asynchronous JavaScript has rebuilt the way JavaScript content interacts with your web pages, allowing you to increase performance by getting rid of render-blocking JavaScript. Render-blocking basically means that any JavaScript content that resides in the “above the fold” parts of a page will not be loaded, until JavaScript itself has been finished loading in the page. This can have certain effects on the performance of your website, but with the helps of libraries such as Async.js — you can open the door to load JavaScript content alongside everything else, sometimes even faster. The library is meant to be used with Node.js, originally, but these days it will work with browsers too, so you can inject it in any project, whether it uses Node.js or not. There are more than twenty functions that this library gives you control over.",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478811014/dvsu8tmdamdf8yamfzhb.jpg"
)

programs << Program.create!(
  name: "lodash",
  creator: "Benjamin Tan, John-David Dalton, Jeroen Engels, Justin Ridgewell, Mathias Bynens, Jean-Philippe Sirois, Zack Hall",
  source_code_url: "https://github.com/lodash/lodash",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478811074/x7kvakstyrapdfxjiczc.png",
  description: "Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478811074/x7kvakstyrapdfxjiczc.png"
)

programs << Program.create!(
  name: "React",
  creator: "Facebook",
  source_code_url: "https://github.com/facebook/react",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478813592/hpxky5y7ibchthbepxn5.png",
  description: "React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML.\n\nIt is maintained by Facebook, Instagram and a community of individual developers and corporations. According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, and others.\n\nAs of March 2016, React and React Native are Facebook's top two open-source projects by number of stars on GitHub, and React is the 6th most starred project of all time on GitHub.",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478813592/hpxky5y7ibchthbepxn5.png"
)

programs << Program.create!(
  name: "Git",
  creator: "Linus Torvalds",
  source_code_url: "https://git-scm.com/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478811788/ntehqflawqfgs3bumsru.png",
  description: "Git is a version control system that is used for software development and other version control tasks. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.\n\nGit was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Its current maintainer is Junio Hamano.\n\nAs with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking capabilities, independent of network access or a central server.\n\nLike the Linux kernel, Git is free software distributed under the terms of the GNU General Public License version 2.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478811788/ntehqflawqfgs3bumsru.png"
)

programs << Program.create!(
  name: "Mac OS",
  creator: "Apple",
  source_code_url: "http://www.apple.com/macos/sierra/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478807885/uu7gmand4morjwbbrdda.gif",
  description: 'The family of Macintosh operating systems developed by Apple Inc. includes the graphical user interface-based operating systems it has designed for use with its Macintosh series of personal computers since 1984, as well as the related system software it once created for compatible third-party systems.\n\nIn 1984, Apple debuted the operating system that is now known as the "Classic" Mac OS with its release of the original Macintosh System Software. The system, rebranded "Mac OS" in 1996, was preinstalled on every Macintosh until 2002 and offered on Macintosh clones for a short time in the 1990s. Noted for its ease of use, it was also criticized for its lack of modern technologies compared to its competitors.\n\nThe current Mac operating system is macOS, originally named "Mac OS X" until 2012 and then "OS X" until 2016. Developed between 1997 and 2001 after Apple`s purchase of NeXT, Mac OS X brought an entirely new architecture based on NeXTSTEP, a Unix system, that eliminated many of the technical challenges that faced the classic Mac OS. The current macOS is preinstalled with every Mac and is updated annually. It is the basis of Apple`s current system software for its other devices, iOS, watchOS, and tvOS.',
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478807885/uu7gmand4morjwbbrdda.jpg"
)

programs << Program.create!(
  name: "Windows OS",
  creator: "Microsoft",
  source_code_url: "https://www.microsoft.com/en-us/windows",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478811459/zzqdnidcawe2pfunomcb.png",
  description: "Microsoft Windows (or simply Windows) is a metafamily of graphical operating systems developed, marketed, and sold by Microsoft. It consists of several families of operating systems, each of which cater to a certain sector of the computing industry with the OS typically associated with IBM PC compatible architecture. Active Windows families include Windows NT, Windows Embedded and Windows Phone; these may encompass subfamilies, e.g. Windows Embedded Compact (Windows CE) or Windows Server. Defunct Windows families include Windows 9x; Windows 10 Mobile is an active product, unrelated to the defunct family Windows Mobile.\n\nMicrosoft introduced an operating environment named Windows on November 20, 1985, as a graphical operating system shell for MS-DOS in response to the growing interest in graphical user interfaces (GUIs). Microsoft Windows came to dominate the world's personal computer (PC) market with over 90% market share, overtaking Mac OS, which had been introduced in 1984. Apple came to see Windows as an unfair encroachment on their innovation in GUI development as implemented on products such as the Lisa and Macintosh (eventually settled in court in Microsoft's favor in 1993). On PCs, Windows is still the most popular operating system. However, in 2014, Microsoft admitted losing the majority of the overall operating system market to Android, because of the massive growth in sales of Android smartphones. In 2014, the number of Windows devices sold were less than 25% of Android devices sold. This comparisons, however, may not be fully relevant as the two operating systems traditionally targeted different platforms.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478811459/zzqdnidcawe2pfunomcb.png"
)

programs << Program.create!(
  name: "Redux",
  creator: "Dan Abramov",
  source_code_url: "https://github.com/reactjs/redux",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478811859/uzbqjpg82dv6l92emfat.png",
  description: "Redux is a predictable state container for JavaScript apps.\n\n(If you're looking for a WordPress framework, check out Redux Framework.)\n\nIt helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.\n\nYou can use Redux together with React, or with any other view library.\n\nIt is tiny (2kB, including dependencies).",
  author_id: user_ids[0],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478811859/uzbqjpg82dv6l92emfat.png"
)

programs << Program.create!(
  name: "Mercurial",
  creator: "Matt Mackall",
  source_code_url: "https://www.mercurial-scm.org/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478812040/gcjbix51z5syd5xthqvl.png",
  description: "Mercurial, a cross-platform, distributed revision-control tool for software developers, is mainly implemented using the Python programming language, but includes a binary diff implementation written in C. It is supported on MS Windows and Unix-like systems, such as FreeBSD, Mac OS X and Linux. Mercurial is primarily a command-line driven program, but graphical user interface extensions are available. All of Mercurial's operations are invoked as arguments to its driver program hg (a reference to Hg - the chemical symbol of the element mercury).\n\nMercurial's major design goals include high performance and scalability, decentralized, fully distributed collaborative development, robust handling of both plain text and binary files, and advanced branching and merging capabilities, while remaining conceptually simple. It includes an integrated web-interface. Mercurial has also taken steps to ease the transition for users of other version control systems, particularly Subversion.\n\nMatt Mackall originated Mercurial and serves as its lead developer. Mercurial is released as free software under the terms of the GNU GPL v2 (or any later version).",
  author_id: user_ids[1],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478812040/gcjbix51z5syd5xthqvl.png"
)

programs << Program.create!(
  name: "Sublime Text",
  creator: "Jon Skinner",
  source_code_url: "https://www.sublimetext.com/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478812244/oklgfgdi9uchlwubljwy.png",
  description: "Sublime Text is a proprietary cross-platform source code editor with a Python application programming interface (API). It natively supports many programming languages and markup languages, and its functionality can be extended by users with plugins, typically community-built and maintained under free-software licenses.",
  author_id: user_ids[2],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478812244/oklgfgdi9uchlwubljwy.png"
)

programs << Program.create!(
  name: "Rake",
  creator: "Jim Weirich",
  source_code_url: "https://github.com/ruby/rake",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478812362/y074tmhkvnrdpswxr315.jpg",
  description: "Rake is a Make-like program implemented in Ruby. Tasks and dependencies are specified in standard Ruby syntax.\n\nRake has the following features:\n\nRakefiles (rake's version of Makefiles) are completely defined in standard Ruby syntax. No XML files to edit. No quirky Makefile syntax to worry about (is that a tab or a space?)\n\nUsers can specify tasks with prerequisites.\n\nRake supports rule patterns to synthesize implicit tasks.\n\nFlexible FileLists that act like arrays but know about manipulating file names and paths.\n\nA library of prepackaged tasks to make building rakefiles easier. For example, tasks for building tarballs. (Formerly tasks for building RDoc, Gems and publishing to FTP were included in rake but they're now available in RDoc, RubyGems and respectively.)\n\nSupports parallel execution of tasks.",
  author_id: user_ids[3],
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478812362/y074tmhkvnrdpswxr315.jpg"
)

program_ids = programs.map(&:id)

program_ids.each do |program_id|
  user_ids.each do |user_id|
    status = ((program_id + user_id) % 3) + 1
    Status.create!(
      user_id: user_id,
      program_id: program_id,
      content: status.to_s
    )
  end
end

REVIEWS = [
  "I know some people say it's **out of date**, but I couldn't _imagine_ work with out XXX. I think it's impressive how well XXX has stood the test of time. It's a real _testament_ to the community of developers that maintain it. 'People ask me, would you recommend XXX?' and the answer is always **_YES!_**",
  "There are three main problems with XXX. They are\n* It's **too slow**. \n* It's unreliable.\n* The developer community is _very_ unfriendly.\n\nI wouldn't recommend XXX unless you have no other choice.",
  "## Pros\n XXX is quite easy to use. The learning curve is really quite shallow. I picked it up in a weekend.\n# Cons\n\nXXX doesn't scale well. Once you reach a certain size limit you will likely find it to be prohibitively slow. We had to stop using XXX at about 10,000 users.",
  "May I suggest this [link](https://www.google.com) where XXX is discussed in great detail. I learned a lot from their tutorial. The docs are a little wanting, but I found the tutorial quite satisfactory.",
  "# First\nXXX is very useful in my day to day work!\n## Second\nI use it on all my projects. Such as? Oh, I don' know...\n* The internet\n* My highly lucrative monkey training business\n* Need I go on?",
  "People always recommended XXX to me. For a long time I was resistant to using XXX because the interface is pretty scary. However, now that I have tried it I find XXX useful for a couple reasons\n* It is much more efficient than windows me.\n * While it takes some getting used to, the interface is actually very intuitive\nOverall, I would recommend XXX to most people.",
  "I really am surprised more people haven't adopted XXX yet. I know it's new and the bugs haven't all be ironed out, but I already find it **indispensable** in my day to day life!",
  "Isn't it cool how these _comments_ can be written in **markdown**? I find it so much easier to **_express_** myself. (Also, I hear you can use links, insert images, etc.)"
]

USES = [
  "my personal web page",
  "several work projects",
  "mobile development",
  "web development",
  "computer games"
]

programs.each do |program|
  reviews = REVIEWS.shuffle
  uses = USES.shuffle
  user_ids.shuffle.each do |user_id|
    Review.create!(
      author_id: user_id,
      program_id: program.id,
      body: reviews[user_id % 4].gsub('XXX', program.name),
      project_used_in: uses[user_id % 4]
    )
  end
end
