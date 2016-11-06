# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'Guest', password: 'password')
User.create!(username: 'Luke', password: 'password')
User.create!(username: 'Timmy', password: 'password')
User.create!(username: 'Frank', password: 'password')

Program.create!(
  name: 'Ruby on Rails',
  createor: 'David Heinsmeier Hansson',
  description: 'Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don\'t repeat yourself (DRY), and the active record pattern.',
    source_code_url: 'https://github.com/rails/rails',
  image_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478379951/fg5otdbdy3f5tmt3plqd.png"
  thumbnail_url: "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478379951/fg5otdbdy3f5tmt3plqd.png"
  author_id: 3
)

Program.create!(
  name: "Node.js",
  creator: "Ryan Dahl",
  source_code_url: "https://github.com/nodejs/node",
  image_url:
   "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478390051/qn4ezajyfmdta1kh8ojp.png",
  description:
   "Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications. Although Node.js is not a JavaScript framework, many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.\n\nNode.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).\n\nThe Node.js distributed development project, governed by the Node.js Foundation, is facilitated by the Linux Foundation's Collaborative Projects program.",
  author_id: 3
)

Program.create!(
  name: "Atom",
  creator: "GitHub",
  source_code_url: "https://github.com/atom",
  image_url:
   "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478385048/icve4ksfvnn4tnusuzak.png",
  description:
   "Atom is a free and open-source text and source code editor for OS X, Linux, and Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies. Most of the extending packages have free software licenses and are community-built and maintained. Atom is based on Electron (formerly known as Atom Shell), a framework that enables cross-platform desktop applications using Chromium and Node.js. It is written in CoffeeScript and Less. It can also be used as an integrated development environment (IDE). Atom was released from beta, as version 1.0, on June 25, 2015. Its developers call it a \"hackable text editor for the 21st Century\".",
  author_id: 10,
  thumbnail_url:
  "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478385048/icve4ksfvnn4tnusuzak.png"
)

Program.create!(
name: "Material-Ui",
  creator: "Olivier Tassinari",
  source_code_url: "https://github.com/callemall/material-ui",
  image_url:
   "http://res.cloudinary.com/dfmknrbfz/image/upload/v1478389665/eqkmgqwr7stpgezwhe0j.svg",
  description:
   "Material Design (codenamed Quantum Paper) is a design language developed in 2014 by Google. Expanding upon the \"card\" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.\n\nDesigner Matías Duarte explained that, \"unlike real paper, our digital material can expand and reform intelligently. Material has physical surfaces and edges. Seams and shadows provide meaning about what you can touch.\" Google states that their new design language is based on paper and ink.\n\nMaterial Design can be used in API Level 21 and newer via the v7 appcompat library, which is used on virtually all Android devices manufactured after 2009. Material Design will gradually be extended throughout Google's array of web and mobile products, providing a consistent experience across all platforms and applications. Google has also released application programming interfaces (APIs) for third-party developers to incorporate the design language into their applications.\n\n",
  author_id: 3,
  thumbnail_url:
   "http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478389665/eqkmgqwr7stpgezwhe0j.jpg"
)
