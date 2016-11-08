
User.create!(username: 'Guest', password: 'password', id: 1)
User.create!(username: 'Luke', password: 'password', id: 2)
User.create!(username: 'Timmy', password: 'password', id: 3)
User.create!(username: 'Frank', password: 'password', id: 4)

Program.create!({
  name: 'Ruby on Rails',
  creator: 'David Heinsmeier Hansson',
  description: 'Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don\'t repeat yourself (DRY), and the active record pattern.',
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478379951/fg5otdbdy3f5tmt3plqd.png",
  source_code_url: 'https://github.com/rails/rails',
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478379951/fg5otdbdy3f5tmt3plqd.png",
  author_id: 1
})

Program.create!({
  name: "Node.js",
  creator: "Ryan Dahl",
  source_code_url: "https://github.com/nodejs/node",
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478476842/zxozxwvxdc1dtp6fedkm.jpg",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478390051/qn4ezajyfmdta1kh8ojp.png",
  description: "Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications. Although Node.js is not a JavaScript framework, many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.\n\nNode.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).\n\nThe Node.js distributed development project, governed by the Node.js Foundation, is facilitated by the Linux Foundation's Collaborative Projects program.",
  author_id: 1
})

Program.create!({
  name: "Atom",
  creator: "GitHub",
  source_code_url: "https://github.com/atom",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478385048/icve4ksfvnn4tnusuzak.png",
  description: "Atom is a free and open-source text and source code editor for OS X, Linux, and Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies. Most of the extending packages have free software licenses and are community-built and maintained. Atom is based on Electron (formerly known as Atom Shell), a framework that enables cross-platform desktop applications using Chromium and Node.js. It is written in CoffeeScript and Less. It can also be used as an integrated development environment (IDE). Atom was released from beta, as version 1.0, on June 25, 2015. Its developers call it a \"hackable text editor for the 21st Century\".",
  author_id: 2,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478385048/icve4ksfvnn4tnusuzak.png"
})

Program.create!({
  name: "Material-Ui",
  creator: "Olivier Tassinari",
  source_code_url: "https://github.com/callemall/material-ui",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478389665/eqkmgqwr7stpgezwhe0j.svg",
  description: "Material Design (codenamed Quantum Paper) is a design language developed in 2014 by Google. Expanding upon the \"card\" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.\n\nDesigner Matías Duarte explained that, \"unlike real paper, our digital material can expand and reform intelligently. Material has physical surfaces and edges. Seams and shadows provide meaning about what you can touch.\" Google states that their new design language is based on paper and ink.\n\nMaterial Design can be used in API Level 21 and newer via the v7 appcompat library, which is used on virtually all Android devices manufactured after 2009. Material Design will gradually be extended throughout Google's array of web and mobile products, providing a consistent experience across all platforms and applications. Google has also released application programming interfaces (APIs) for third-party developers to incorporate the design language into their applications.\n\n",
  author_id: 3,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478389665/eqkmgqwr7stpgezwhe0j.jpg"
})

Program.create!(
  name: "Vim",
  creator: "Bram Moolenaar",
  source_code_url: "https://github.com/vim/vim",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478472662/tjjjuqie0u7b4sbwfo8s.png",
  description: "Vim (a contraction of Vi IMproved) is a clone of Bill Joy's vi text editor program for Unix. It was written by Bram Moolenaar based on source for a port of the Stevie editor to the Amiga and first released publicly in 1991. Vim is designed for use both from a command-line interface and as a standalone application in a graphical user interface. Vim is free and open source software and is released under a license that includes some charityware clauses, encouraging users who enjoy the software to consider donating to children in Uganda. The license is compatible with the GNU General Public License.\nAlthough Vim was originally released for the Amiga, Vim has since been developed to be cross-platform, supporting many other platforms. In 2006, it was voted the most popular editor amongst Linux Journal readers;[6 in 2015 the Stack Overflow developer survey found it to be the third most popular text editor;[7 and in 2016 the Stack Overflow developer survey found it to be the fourth most popular development environment.",
  author_id: 4,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478472662/tjjjuqie0u7b4sbwfo8s.png"
)

Program.create!(
  name: "AngularJS",
  creator: "Google",
  description: 'AngularJS (commonly referred to as "Angular" or "Angular.js") is a complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.\n\nThe AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.\n\nAccording to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and approximately 12,000 other sites out of 1 million tested in October 2016.\n\nAngularJS is the frontend part of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular.js itself, and Node.js runtime environment.',
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475391/eutx7pxzhtrmszzvp80g.png",
  source_code_url: "https://github.com/angular/angular.js",
  author_id: 1,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475391/eutx7pxzhtrmszzvp80g.png"
)

Program.create!(
  name: "Backbone.js",
  creator: "Jeremy Ashkenas",
  source_code_url: "https://github.com/jashkenas/backbone/",
  description: "Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm. Backbone is known for being lightweight, as its only hard dependency is on one JavaScript library, Underscore.js, plus jQuery for use of the full library. It is designed for developing single-page web applications, and for keeping various parts of web applications (e.g. multiple clients and the server) synchronized. Backbone was created by Jeremy Ashkenas, who is also known for CoffeeScript and Underscore.js.",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475542/din4nzefal24dc1vvpfr.png",
  author_id: 2,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475542/din4nzefal24dc1vvpfr.png"
)

Program.create!(
  name: "Django",
  creator: "Lawrence Journal-World",
  source_code_url: "https://github.com/django/django",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475707/exkz9qeidcvmo5tetpc2.png",
  description: "Django (/ˈdʒæŋɡoʊ/ jang-goh) is a free and open-source web framework, written in Python, which follows the model-view-template (MVT) architectural pattern. It is maintained by the Django Software Foundation (DSF), an independent organization established as a 501(c)(3) non-profit.\n\nDjango's primary goal is to ease the creation of complex, database-driven websites. Django emphasizes reusability and \"pluggability\" of components, rapid development, and the principle of don't repeat yourself. Python is used throughout, even for settings files and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.\n\nSome well-known sites that use Django include the Public Broadcasting Service, Pinterest, Instagram, Mozilla, The Washington Times, Disqus, Bitbucket, and Nextdoor.",
  author_id: 3,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475707/exkz9qeidcvmo5tetpc2.png"
)

Program.create!(
  name: "Snap",
  creator: "Gregory Collins, doug Beardsly",
  source_code_url: "https://github.com/snapframework/snap-core",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478475947/rg1xropbr1icomudealg.png",
  description: "Snap is a simple web development framework written in the Haskell programming language. It is used by Silk, JanRain, Racemetric, www.lpaste.net, SooStone Inc, and Group Commerce. Snap is also used as a lightweight, standalone Haskell server. The popular static site generator Hakyll uses Snap for its preview mode.",
  author_id: 4,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478475947/rg1xropbr1icomudealg.png"
)

Program.create!(
  name: "Capybara",
  creator: "Jonas Nicklas",
  source_code_url: "https://github.com/jnicklas/capybara",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478476278/oztudi2rtxett0kvxtvh.jpg",
  description: "Capybara is a web-based test automation software that simulates scenarios for user stories and automates web application testing for behavior-driven software development. It is a part of the Cucumber testing framework written in the Ruby programming language that simulates various aspects of a web browser from the perspective of a real user.\n\nPretending to be a user, it can interact with the application to receive pages, parse the HTML and submit the forms.",
  author_id: 1,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478476278/oztudi2rtxett0kvxtvh.jpg"
)

Program.create!(
  name: "RSpec",
  creator: "David Chelimsky, Myron Marston, Andy Lindeman, Jon Rowe, Paul Casaretto, Sam Phippen, Bradley Schaefer",
  description: "RSpec is a behavior-driven development (BDD) framework for the Ruby programming language, inspired by JBehave. It contains its own mocking framework that is fully integrated into the framework based upon JMock. The framework can be considered a domain-specific language (DSL) and resembles a natural language specification.",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478476491/eunn5teybxdwzwihmvob.png",
  source_code_url: "https://github.com/rspec/rspec-core",
  author_id: 2,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478476491/eunn5teybxdwzwihmvob.png"
)

Program.create!(
  name: "Z Shell",
  creator: "Paul Falstad",
  source_code_url: "https://sourceforge.net/p/zsh/code/ci/master/tree/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477040/ltxb9hqoz2fpeel9lrmt.jpg",
  description: "The Z shell (zsh) is a Unix shell that can be used as an interactive login shell and as a powerful command interpreter for shell scripting. Zsh is an extended Bourne shell with a large number of improvements, including some features of bash, ksh, and tcsh.\n\nPaul Falstad wrote the first version of zsh in 1990 while a student at Princeton University. The name zsh derives from the name of Yale professor Zhong Shao (then an Assistant Professor at Princeton University) — Paul Falstad regarded Shao's login-id, \"zsh\", as a good name for a shell. Speakers of American English pronounce \"Z\" as zee, so \"Z shell\" is allophonous with \"C shell\", which in turn is a homophone of \"seashell\".",
  author_id: 3,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477040/ltxb9hqoz2fpeel9lrmt.jpg"
)

Program.create!(
  name: "Emacs",
  creator: "Richard Stallman",
  source_code_url: "https://github.com/emacs-mirror/emacs",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477374/ojpb2m5rsumekorwlhxq.png",
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477374/ojpb2m5rsumekorwlhxq.png",
  author_id: 4,
  description: "Emacs and its derivatives are a family of text editors that are characterized by their extensibility. The manual for the most widely used variant, GNU Emacs, describes it as \"the extensible, customizable, self-documenting, real-time display editor\". Development of the first Emacs began in the mid-1970s and continues actively as of 2016.\n\nEmacs has over 2,000 built-in commands and allows the user to combine these commands into macros to automate work. Emacs Lisp provides a deep extension capability allowing users and developers to write new commands using a dialect of the Lisp programming language. Extensions have been written to manage email, files, outlines, and RSS feeds.\n\nThe original EMACS was written in 1976 by Richard Stallman and Guy L. Steele, Jr. as a set of Editor MACroS for the TECO editor. It was inspired by the ideas of the TECO-macro editors TECMAC and TMACS.\n\nThe most popular, and most ported, version of Emacs is GNU Emacs, which was created by Stallman for the GNU Project. XEmacs is a variant that branched from GNU Emacs in 1991. Both GNU Emacs and XEmacs use Emacs Lisp and are for the most part compatible with each other.\n\nEmacs is, along with vi, one of the two main contenders in the traditional editor wars of Unix culture. Both are among the oldest application programs still in use.",
)

Program.create!(
  name: "jQuery",
  creator: "jQuery Team",
  source_code_url: "https://github.com/jquery/jquery",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477564/f1ls4lmcbi5viajwgo02.gif",
  description: "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. jQuery is free, open-source software licensed under the MIT License.\n\njQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets. The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications.\n\nThe set of jQuery core features—DOM element selections, traversal and manipulation—enabled by its selector engine (named \"Sizzle\" from v1.3), created a new \"programming style\", fusing algorithms and DOM data structures. This style influenced the architecture of other JavaScript frameworks like YUI v3 and Dojo, later stimulating the creation of the standard Selectors API.\n\nMicrosoft and Nokia bundle jQuery on their platforms. Microsoft includes it with Visual Studio for use within Microsoft's ASP.NET AJAX and ASP.NET MVC frameworks while Nokia has integrated it into the Web Run-Time widget development platform. jQuery has also been used in MediaWiki since version 1.16.",
  author_id: 1,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477564/f1ls4lmcbi5viajwgo02.jpg"
)

Program.create!(
  name: "Kubuntu",
  creator: "Blue Systems",
  source_code_url: "https://repogen.simplylinux.ch/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478785/vgn4rhmkrqi9wptggb3f.jpg",
  description: "Kubuntu is an official flavour of the Ubuntu operating system which uses the KDE Plasma Desktop instead of the Unity graphical environment. As part of the Ubuntu project, Kubuntu uses the same underlying systems. Every package in Kubuntu shares the same repositories as Ubuntu, and it is released regularly on the same schedule as Ubuntu.\n\nKubuntu was sponsored by Canonical Ltd. until 2012, and then directly by Blue Systems. Now employees of Blue Systems contribute upstream, to KDE and Debian, and Kubuntu development is led by community contributors. During the changeover, Kubuntu retained the use of Ubuntu project servers and existing developers",
  author_id: 2,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478785/vgn4rhmkrqi9wptggb3f.jpg"
)

Program.create!(
  name: "Ubuntu",
  creator: "Ubuntu Comunity",
  source_code_url: "http://cdimage.ubuntu.com/source/current/source/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478477860/iv6zz7tz6uuiq5wcvhhq.png",
  description: "Ubuntu is a Debian-based Linux operating system for personal computers; tablets and smartphones, where Ubuntu Touch edition is used; and also runs network servers, usually with the Ubuntu Server edition, either on physical or virtual servers (such as on mainframes) and/or with containers, that is with enterprise-class features; runs on the most popular architectures, including server-class ARM-based.\n\nUbuntu is published by Canonical Ltd, who offer commercial support. It is based on free software and named after the Southern African philosophy of ubuntu (literally, 'human-ness'), which Canonical Ltd. suggests can be loosely translated as \"humanity to others\" or \"I am what I am because of who we all are\". It uses Unity as its default user interface for the desktop.\n\nUbuntu is the most popular operating system running in hosted environments, so–called \"clouds\", as it is the most popular server Linux distribution.\n\nDevelopment of Ubuntu is led by UK-based Canonical Ltd., a company of South African entrepreneur Mark Shuttleworth. Canonical generates revenue through the sale of technical support and other services related to Ubuntu. The Ubuntu project is publicly committed to the principles of open-source software development; people are encouraged to use free software, study how it works, improve upon it, and distribute it.",
  author_id: 3,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478477860/iv6zz7tz6uuiq5wcvhhq.png"
)

Program.create!(
  name: "Debian",
  creator: "Debian Project",
  source_code_url: "http://sources.debian.net/",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478026/rbcrjhygrm62z90iniye.png",
  description: "Debian (/ˈdɛbiən/) is a Unix-like computer operating system that is composed entirely of free software, most of which is under the GNU General Public License and packaged by a group of individuals participating in the Debian Project.\n\nThe Debian Project was first announced in 1993 by Ian Murdock, Debian 0.01 was released on September 15, 1993, and the first stable release was made in 1996.\n\nThe projects work is carried out over the Internet by a team of volunteers guided by the Debian Project Leader and three foundational documents: the Debian Social Contract, the Debian Constitution, and the Debian Free Software Guidelines. New distributions are updated continually, and the next candidate is released after a time-based freeze.\n\nAs one of the earliest Linux distributions, it was decided that Debian was to be developed openly and freely distributed in the spirit of the GNU Project. This decision drew the attention and support of the Free Software Foundation, which sponsored the project for one year from November 1994 to November 1995. Upon the ending of the sponsorship, the Debian Project formed the non-profit organisation Software in the Public Interest.",
  author_id: 4,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478026/rbcrjhygrm62z90iniye.png"
)

Program.create!(
  name: "Braintree",
  creator: "Bryan Johnson",
  source_code_url: "https://github.com/braintree/braintree_ruby",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478194/fb2tj1g3xjbwexop2blf.png",
  description: "Braintree—a subsidiary of PayPal—is a company based in Chicago that specializes in mobile and web payment systems for ecommerce companies. Braintree emphasizes its easy integrations, multiple payment method options (including PayPal and Venmo), simple pricing, security, and support.\n\nBraintree provides its customers with a merchant account and a payment gateway, along with various features including recurring billing, credit card storage, support for mobile and international payments, and PCI Compliance solutions.",
  author_id: 1,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478194/fb2tj1g3xjbwexop2blf.png"
)

Program.create!(
  name: "Webpack",
  creator: "Tobias Koppers, Sean Larkin, Johannes Ewald, Juho Vepsäläinen",
  source_code_url: "https://github.com/webpack/webpack",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478343/uasvpriawt68tuezyemh.png",
  description: "Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.It takes the dependencies and generates a dependency graph allowing you to use a modular approach for your web application development purposes.",
  author_id: 1,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478343/uasvpriawt68tuezyemh.png"
)

Program.create!(
  name: "Bourne Shell",
  creator: "Stephen Bourne",
  source_code_url: "http://heirloom.sourceforge.net/sh.html",
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478478496/hgqnkegvly9hwa8saxbu.png",
  description: "The Bourne shell (sh) is a shell, or command-line interpreter, for computer operating systems.\n\nThe Bourne shell was the default shell for Unix Version 7. Most Unix-like systems continue to have /bin/sh—which will be the Bourne shell, or a symbolic link or hard link to a compatible shell even when other shells are used by most users.\n\nDeveloped by Stephen Bourne at Bell Labs, it was a replacement for the Thompson shell, whose executable file had the same name—sh. It was released in 1977 in the Version 7 Unix release distributed to colleges and universities. Although it is used as an interactive command interpreter, it was also intended as a scripting language and contains most of the features that are commonly considered to produce structured programs.\n\nIt gained popularity with the publication of The Unix Programming Environment by Brian Kernighan and Rob Pike—the first commercially published book that presented the shell as a programming language in a tutorial form.",
  author_id: 1,
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478478496/hgqnkegvly9hwa8saxbu.png"
)

Status.create!(
  user_id: 1,
  program_id: 1,
  content: "1"
)

Status.create!(
  user_id: 1,
  program_id: 4,
  content: "1"
)

Status.create!(
  user_id: 1,
  program_id: 2,
  content: "2"
)

Status.create!(
  user_id: 1,
  program_id: 5,
  content: "2"
)

Status.create!(
  user_id: 1,
  program_id: 7,
  content: "2"
)

Status.create!(
  user_id: 1,
  program_id: 3,
  content: "3"
)

Status.create!(
  user_id: 1,
  program_id: 6,
  content: "3"
)

Status.create!(
  user_id: 1,
  program_id: 9,
  content: "3"
)

Status.create!(
  user_id: 1,
  program_id: 13,
  content: "3"
)
