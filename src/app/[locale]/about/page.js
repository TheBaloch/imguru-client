export function generateMetadata({ params: { locale } }) {
  const translations = {
    en: {
      title: "About Us - Natty NYC",
      description:
        "Learn more about Natty NYC, our mission, and our passionate team dedicated to bringing you the latest in skincare, beauty, and more.",
      keywords:
        "About Us, Natty NYC, skincare, beauty, team, cosmetics, wellness",
    },
    es: {
      title: "Sobre Nosotros - Natty NYC",
      description:
        "Conoce más sobre Natty NYC, nuestra misión y nuestro equipo apasionado dedicado a ofrecerte lo último en cuidado de la piel, belleza y más.",
      keywords:
        "Sobre Nosotros, Natty NYC, cuidado de la piel, belleza, equipo, cosméticos, bienestar",
    },
    fr: {
      title: "À Propos de Nous - Natty NYC",
      description:
        "Découvrez Natty NYC, notre mission et notre équipe passionnée dédiée à vous apporter les dernières tendances en soins de peau, beauté et plus encore.",
      keywords:
        "À Propos de Nous, Natty NYC, soins de peau, beauté, équipe, cosmétiques, bien-être",
    },
    de: {
      title: "Über Uns - Natty NYC",
      description:
        "Erfahren Sie mehr über Natty NYC, unsere Mission und unser engagiertes Team, das Ihnen die neuesten Trends in Hautpflege, Schönheit und mehr bietet.",
      keywords:
        "Über Uns, Natty NYC, Hautpflege, Schönheit, Team, Kosmetik, Wellness",
    },
    pt: {
      title: "Sobre Nós - Natty NYC",
      description:
        "Saiba mais sobre Natty NYC, nossa missão e nossa equipe apaixonada dedicada a trazer as últimas tendências em cuidados com a pele, beleza e mais.",
      keywords:
        "Sobre Nós, Natty NYC, cuidados com a pele, beleza, equipe, cosméticos, bem-estar",
    },
    ar: {
      title: "معلومات عنا - Natty NYC",
      description:
        "تعرف على Natty NYC، مهمتنا وفريقنا المتفاني المكرس لتقديم أحدث المعلومات حول العناية بالبشرة، الجمال، والمزيد.",
      keywords:
        "معلومات عنا، Natty NYC، العناية بالبشرة، الجمال، الفريق، مستحضرات التجميل، العافية",
    },
  };

  const translation = translations[locale] || translations.en;

  return {
    metadataBase: new URL("https://blog.nattynyc.com"),
    title: translation.title,
    description: translation.description,
    keywords: translation.keywords,
    authors: [{ name: "Natty NYC Editorial Team" }],
    openGraph: {
      title: translation.title,
      description: translation.description,
      url: `https://blog.nattynyc.com/${locale}/about`,
      siteName: "Natty NYC",
      images: [
        {
          url: "https://blog.nattynyc.com/favicon.ico",
          width: 50,
          height: 50,
          alt: "NattyNYC icon",
        },
      ],
      locale: locale,
      type: "website",
    },
    icons: {
      icon: "https://blog.nattynyc.com/favicon.ico",
      apple: "https://blog.nattynyc.com/favicon.ico",
    },
    alternates: {
      canonical: `https://blog.nattynyc.com/${locale}/about`,
      languages: {
        en: "https://blog.nattynyc.com/en/about",
        es: "https://blog.nattynyc.com/es/about",
        fr: "https://blog.nattynyc.com/fr/about",
        de: "https://blog.nattynyc.com/de/about",
        ar: "https://blog.nattynyc.com/ar/about",
        pt: "https://blog.nattynyc.com/pt/about",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({ params: { locale } }) {
  const translations = {
    en: {
      title: "About Us - Natty NYC",
      missionTitle: "Our Mission",
      mission:
        "At Natty NYC, our mission is to be your trusted source for the latest trends, tips, and reviews in skincare, beauty, fragrances, supplements, and hair care. We provide comprehensive, expert-reviewed content that empowers you to make informed decisions about your personal care routine.",
      valuesTitle: "Our Core Values",
      values:
        "Integrity, expertise, innovation, and community are the pillars of Natty NYC. We are committed to delivering honest, insightful content that reflects our dedication to high standards.",
      commitmentTitle: "Our Commitment",
      commitment:
        "Accuracy, timeliness, and impartiality are at the heart of what we do. Our editorial team rigorously reviews all products and trends, ensuring our recommendations are grounded in thorough research and real user experiences.",
      partnershipsTitle: "Industry Collaborations",
      partnerships:
        "We work closely with industry experts, beauty professionals, and trusted brands to bring you the latest and most relevant information. These partnerships ensure that we stay ahead of trends and innovations, enhancing the value we provide.",
      futureGoalsTitle: "Our Vision for the Future",
      futureGoals:
        "We are excited about the future as we plan to expand our content, explore new topics, and continue to be a trusted source in the beauty and skincare industry. Our commitment is to evolve with our readers' needs and interests.",
      customerFocusTitle: "Customer Focus",
      customerFocus:
        "You, our audience, are at the heart of everything we do. We actively seek feedback and engage with our readers to ensure our content meets your needs and expectations. By listening to our community, we continuously improve and strive to exceed your expectations.",
      welcomeTitle: "Welcome to Natty NYC",
      welcome:
        "Thank you for visiting Natty NYC! Whether you're a skincare enthusiast, beauty aficionado, or someone looking to enhance your personal care routine, we're here to guide you every step of the way. Dive into our world and discover expert tips, honest reviews, and the latest trends designed to help you look and feel your best.",
      exploreTitle: "Explore Our Categories",
      explore:
        "From skincare routines to the latest in hair care, from fragrance reviews to supplement guides, explore our diverse categories and find the content that speaks to your beauty and wellness journey.",
    },
    es: {
      title: "Sobre Nosotros - Natty NYC",
      missionTitle: "Nuestra Misión",
      mission:
        "En Natty NYC, nuestra misión es ser su fuente confiable para las últimas tendencias, consejos y reseñas en cuidado de la piel, belleza, fragancias, suplementos y cuidado del cabello. Proporcionamos contenido integral, revisado por expertos, que le empodera para tomar decisiones informadas sobre su rutina de cuidado personal.",
      valuesTitle: "Nuestros Valores Fundamentales",
      values:
        "La integridad, la experiencia, la innovación y la comunidad son los pilares de Natty NYC. Estamos comprometidos a entregar contenido honesto e informativo que refleja nuestra dedicación a altos estándares.",
      commitmentTitle: "Nuestro Compromiso",
      commitment:
        "La precisión, la puntualidad y la imparcialidad están en el corazón de lo que hacemos. Nuestro equipo editorial revisa rigurosamente todos los productos y tendencias, asegurando que nuestras recomendaciones estén basadas en una investigación exhaustiva y experiencias reales de los usuarios.",
      partnershipsTitle: "Colaboraciones en la Industria",
      partnerships:
        "Trabajamos estrechamente con expertos de la industria, profesionales de la belleza y marcas confiables para brindarle la información más reciente y relevante. Estas asociaciones aseguran que estemos a la vanguardia de las tendencias e innovaciones, mejorando el valor que proporcionamos.",
      futureGoalsTitle: "Nuestra Visión para el Futuro",
      futureGoals:
        "Estamos entusiasmados con el futuro mientras planeamos expandir nuestro contenido, explorar nuevos temas y continuar siendo una fuente confiable en la industria de la belleza y el cuidado de la piel. Nuestro compromiso es evolucionar con las necesidades e intereses de nuestros lectores.",
      customerFocusTitle: "Enfoque en el Cliente",
      customerFocus:
        "Usted, nuestra audiencia, está en el centro de todo lo que hacemos. Buscamos activamente comentarios y nos involucramos con nuestros lectores para asegurarnos de que nuestro contenido cumpla con sus necesidades y expectativas. Al escuchar a nuestra comunidad, mejoramos continuamente y nos esforzamos por superar sus expectativas.",
      welcomeTitle: "Bienvenido a Natty NYC",
      welcome:
        "¡Gracias por visitar Natty NYC! Ya sea que sea un entusiasta del cuidado de la piel, un aficionado a la belleza o alguien que busca mejorar su rutina de cuidado personal, estamos aquí para guiarle en cada paso del camino. Sumérjase en nuestro mundo y descubra consejos de expertos, reseñas honestas y las últimas tendencias diseñadas para ayudarle a verse y sentirse lo mejor posible.",
      exploreTitle: "Explore Nuestras Categorías",
      explore:
        "Desde rutinas de cuidado de la piel hasta lo último en cuidado del cabello, desde reseñas de fragancias hasta guías de suplementos, explore nuestras diversas categorías y encuentre el contenido que habla a su viaje de belleza y bienestar.",
    },
    fr: {
      title: "À Propos de Nous - Natty NYC",
      missionTitle: "Notre Mission",
      mission:
        "Chez Natty NYC, notre mission est d'être votre source fiable pour les dernières tendances, conseils et critiques en soins de la peau, beauté, parfums, suppléments et soins capillaires. Nous fournissons un contenu complet, revu par des experts, qui vous permet de prendre des décisions éclairées sur votre routine de soins personnels.",
      valuesTitle: "Nos Valeurs Fondamentales",
      values:
        "L'intégrité, l'expertise, l'innovation et la communauté sont les piliers de Natty NYC. Nous nous engageons à fournir un contenu honnête et perspicace qui reflète notre engagement envers des normes élevées.",
      commitmentTitle: "Notre Engagement",
      commitment:
        "La précision, la ponctualité et l'impartialité sont au cœur de notre action. Notre équipe éditoriale examine rigoureusement tous les produits et tendances, garantissant que nos recommandations sont basées sur des recherches approfondies et des expériences réelles d'utilisateurs.",
      partnershipsTitle: "Collaborations avec l'Industrie",
      partnerships:
        "Nous travaillons en étroite collaboration avec des experts de l'industrie, des professionnels de la beauté et des marques de confiance pour vous apporter les informations les plus récentes et pertinentes. Ces partenariats garantissent que nous restons à la pointe des tendances et des innovations, renforçant la valeur que nous offrons.",
      futureGoalsTitle: "Notre Vision pour l'Avenir",
      futureGoals:
        "Nous sommes enthousiasmés par l'avenir alors que nous prévoyons d'élargir notre contenu, d'explorer de nouveaux sujets et de continuer à être une source fiable dans l'industrie de la beauté et des soins de la peau. Notre engagement est d'évoluer avec les besoins et les intérêts de nos lecteurs.",
      customerFocusTitle: "Focus sur le Client",
      customerFocus:
        "Vous, notre public, êtes au cœur de tout ce que nous faisons. Nous recherchons activement des retours et engageons un dialogue avec nos lecteurs pour nous assurer que notre contenu répond à leurs besoins et attentes. En écoutant notre communauté, nous améliorons continuellement et nous efforçons de dépasser vos attentes.",
      welcomeTitle: "Bienvenue chez Natty NYC",
      welcome:
        "Merci de visiter Natty NYC ! Que vous soyez un passionné de soins de la peau, un amateur de beauté ou quelqu'un qui cherche à améliorer sa routine de soins personnels, nous sommes là pour vous guider à chaque étape. Plongez dans notre univers et découvrez des conseils d'experts, des avis honnêtes et les dernières tendances conçues pour vous aider à être et à vous sentir au mieux.",
      exploreTitle: "Explorez Nos Catégories",
      explore:
        "Des routines de soins de la peau aux dernières tendances en matière de soins capillaires, des critiques de parfums aux guides de suppléments, explorez nos différentes catégories et trouvez le contenu qui correspond à votre parcours beauté et bien-être.",
    },
    pt: {
      title: "Sobre Nós - Natty NYC",
      missionTitle: "Nossa Missão",
      mission:
        "No Natty NYC, nossa missão é ser sua fonte confiável para as últimas tendências, dicas e avaliações em cuidados com a pele, beleza, fragrâncias, suplementos e cuidados com o cabelo. Fornecemos conteúdo abrangente, revisado por especialistas, que capacita você a tomar decisões informadas sobre sua rotina de cuidados pessoais.",
      valuesTitle: "Nossos Valores Centrais",
      values:
        "Integridade, especialização, inovação e comunidade são os pilares do Natty NYC. Estamos comprometidos em fornecer conteúdo honesto e perspicaz que reflita nossa dedicação a altos padrões.",
      commitmentTitle: "Nosso Compromisso",
      commitment:
        "Precisão, pontualidade e imparcialidade estão no coração do que fazemos. Nossa equipe editorial revisa rigorosamente todos os produtos e tendências, garantindo que nossas recomendações sejam baseadas em pesquisas minuciosas e experiências reais dos usuários.",
      partnershipsTitle: "Colaborações na Indústria",
      partnerships:
        "Trabalhamos em estreita colaboração com especialistas da indústria, profissionais da beleza e marcas de confiança para trazer as informações mais recentes e relevantes. Essas parcerias garantem que estamos na vanguarda das tendências e inovações, aprimorando o valor que oferecemos.",
      futureGoalsTitle: "Nossa Visão para o Futuro",
      futureGoals:
        "Estamos entusiasmados com o futuro enquanto planejamos expandir nosso conteúdo, explorar novos tópicos e continuar sendo uma fonte confiável na indústria da beleza e cuidados com a pele. Nosso compromisso é evoluir com as necessidades e interesses de nossos leitores.",
      customerFocusTitle: "Foco no Cliente",
      customerFocus:
        "Você, nosso público, está no centro de tudo o que fazemos. Buscamos ativamente feedback e nos envolvemos com nossos leitores para garantir que nosso conteúdo atenda às suas necessidades e expectativas. Ao ouvir nossa comunidade, melhoramos continuamente e nos esforçamos para superar suas expectativas.",
      welcomeTitle: "Bem-vindo ao Natty NYC",
      welcome:
        "Obrigado por visitar o Natty NYC! Seja você um entusiasta do cuidado com a pele, um aficionado por beleza ou alguém que deseja aprimorar sua rotina de cuidados pessoais, estamos aqui para orientá-lo em cada passo do caminho. Mergulhe em nosso mundo e descubra dicas de especialistas, avaliações honestas e as últimas tendências, tudo projetado para ajudá-lo a se sentir e a se parecer com o seu melhor.",
      exploreTitle: "Explore Nossas Categorias",
      explore:
        "Desde rotinas de cuidados com a pele até as últimas tendências em cuidados com os cabelos, desde resenhas de fragrâncias até guias de suplementos, explore nossas diversas categorias e encontre o conteúdo que fala com sua jornada de beleza e bem-estar.",
    },
    de: {
      title: "Über Uns - Natty NYC",
      missionTitle: "Unsere Mission",
      mission:
        "Bei Natty NYC ist es unsere Mission, Ihre vertrauenswürdige Quelle für die neuesten Trends, Tipps und Bewertungen in den Bereichen Hautpflege, Schönheit, Düfte, Nahrungsergänzungsmittel und Haarpflege zu sein. Wir bieten umfassende, von Experten geprüfte Inhalte, die Ihnen helfen, fundierte Entscheidungen über Ihre persönliche Pflegeroutine zu treffen.",
      valuesTitle: "Unsere Grundwerte",
      values:
        "Integrität, Fachwissen, Innovation und Gemeinschaft sind die Säulen von Natty NYC. Wir sind bestrebt, ehrliche und aufschlussreiche Inhalte zu liefern, die unser Engagement für hohe Standards widerspiegeln.",
      commitmentTitle: "Unser Engagement",
      commitment:
        "Genauigkeit, Aktualität und Unparteilichkeit stehen im Mittelpunkt unseres Handelns. Unser Redaktionsteam überprüft alle Produkte und Trends gründlich, um sicherzustellen, dass unsere Empfehlungen auf gründlicher Recherche und echten Nutzererfahrungen basieren.",
      partnershipsTitle: "Branchenkooperationen",
      partnerships:
        "Wir arbeiten eng mit Branchenexperten, Schönheitsprofis und vertrauenswürdigen Marken zusammen, um Ihnen die neuesten und relevantesten Informationen zu liefern. Diese Partnerschaften gewährleisten, dass wir immer einen Schritt voraus sind, wenn es um Trends und Innovationen geht, und den Mehrwert, den wir bieten, weiter steigern.",
      futureGoalsTitle: "Unsere Vision für die Zukunft",
      futureGoals:
        "Wir freuen uns auf die Zukunft, in der wir unser Angebot erweitern, neue Themen erkunden und weiterhin eine vertrauenswürdige Quelle in der Schönheits- und Hautpflegebranche bleiben werden. Unser Ziel ist es, uns kontinuierlich an den Bedürfnissen und Interessen unserer Leser zu orientieren.",
      customerFocusTitle: "Kundenorientierung",
      customerFocus:
        "Sie, unser Publikum, stehen im Mittelpunkt unseres Handelns. Wir suchen aktiv nach Feedback und pflegen den Austausch mit unseren Lesern, um sicherzustellen, dass unsere Inhalte Ihre Bedürfnisse und Erwartungen erfüllen. Durch das Zuhören unserer Community verbessern wir uns ständig und streben danach, Ihre Erwartungen zu übertreffen.",
      welcomeTitle: "Willkommen bei Natty NYC",
      welcome:
        "Vielen Dank, dass Sie Natty NYC besuchen! Ob Sie ein Hautpflege-Enthusiast, Schönheitsliebhaber oder jemand sind, der seine persönliche Pflegeroutine verbessern möchte – wir sind hier, um Sie auf jedem Schritt des Weges zu begleiten. Tauchen Sie ein in unsere Welt und entdecken Sie Experten-Tipps, ehrliche Bewertungen und die neuesten Trends, die darauf abzielen, Ihnen zu helfen, Ihr Bestes zu geben und sich wohl zu fühlen.",
      exploreTitle: "Entdecken Sie unsere Kategorien",
      explore:
        "Von Hautpflegeroutinen über die neuesten Haarpflege-Trends bis hin zu Duftbewertungen und Nahrungsergänzungsmitteln – entdecken Sie unsere vielfältigen Kategorien und finden Sie die Inhalte, die zu Ihrer Schönheits- und Wellness-Reise passen.",
    },
    ar: {
      title: "من نحن - مدونة NattyNYC",
      missionTitle: "مهمتنا",
      mission:
        "في مدونة NattyNYC، مهمتنا هي أن نكون مصدر الثقة لديك لأحدث الاتجاهات، النصائح، والمراجعات في مجالات العناية بالبشرة، الجمال، العطور، المكملات الغذائية، والعناية بالشعر. نحن نقدم محتوى شاملاً، تمت مراجعته من قبل خبراء، لتمكينك من اتخاذ قرارات مستنيرة بشأن روتين العناية الشخصية الخاص بك.",
      valuesTitle: "قيمنا الأساسية",
      values:
        "النزاهة، الخبرة، الابتكار، والمجتمع هي الركائز الأساسية لمدونة NattyNYC. نحن ملتزمون بتقديم محتوى صادق وبصير يعكس التزامنا بالمعايير العالية.",
      commitmentTitle: "التزامنا",
      commitment:
        "الدقة، الآنية، والحياد هي جوهر ما نقوم به. فريقنا التحريري يقوم بمراجعة دقيقة لجميع المنتجات والاتجاهات، مما يضمن أن توصياتنا تستند إلى بحث معمق وتجارب حقيقية من المستخدمين.",
      partnershipsTitle: "التعاونات الصناعية",
      partnerships:
        "نحن نعمل عن كثب مع خبراء الصناعة، محترفي الجمال، والعلامات التجارية الموثوقة لتقديم أحدث المعلومات وأهمها لك. هذه الشراكات تضمن أننا دائمًا في مقدمة الاتجاهات والابتكارات، مما يعزز القيمة التي نقدمها.",
      futureGoalsTitle: "رؤيتنا للمستقبل",
      futureGoals:
        "نحن متحمسون للمستقبل حيث نخطط لتوسيع محتوياتنا، استكشاف مواضيع جديدة، والاستمرار في أن نكون مصدر ثقة في صناعة الجمال والعناية بالبشرة. التزامنا هو أن نتطور مع احتياجات واهتمامات قرائنا.",
      customerFocusTitle: "التركيز على العميل",
      customerFocus:
        "أنتم، جمهورنا، في صميم كل ما نقوم به. نحن نسعى بنشاط للحصول على التغذية الراجعة ونتفاعل مع قرائنا لضمان أن محتوياتنا تلبي احتياجاتكم وتوقعاتكم. من خلال الاستماع إلى مجتمعنا، نقوم بالتحسين المستمر ونسعى جاهدين لتجاوز توقعاتكم.",
      welcomeTitle: "مرحبًا بكم في مدونة NattyNYC",
      welcome:
        "شكرًا لزيارتكم مدونة NattyNYC! سواء كنت متحمسًا للعناية بالبشرة، هاوي جمال، أو شخصًا يتطلع لتحسين روتين العناية الشخصية الخاص به، نحن هنا لإرشادك في كل خطوة على الطريق. انغمس في عالمنا واكتشف نصائح الخبراء، المراجعات الصادقة، وأحدث الاتجاهات المصممة لمساعدتك على الظهور والشعور بأفضل حال.",
      exploreTitle: "استكشف فئاتنا",
      explore:
        "من روتينات العناية بالبشرة إلى أحدث اتجاهات العناية بالشعر، ومن مراجعات العطور إلى أدلة المكملات الغذائية، استكشف فئاتنا المتنوعة واعثر على المحتوى الذي يتحدث إلى رحلتك في الجمال والعافية.",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <div className="bg-white text-gray-800 font-mono">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 text-center">{t.title}</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.welcomeTitle}</h2>
          <p className="text-base leading-6">{t.welcome}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.missionTitle}</h2>
          <p className="text-base leading-6">{t.mission}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.valuesTitle}</h2>
          <p className="text-base leading-6">{t.values}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.commitmentTitle}</h2>
          <p className="text-base leading-6">{t.commitment}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.partnershipsTitle}</h2>
          <p className="text-base leading-6">{t.partnerships}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.futureGoalsTitle}</h2>
          <p className="text-base leading-6">{t.futureGoals}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.customerFocusTitle}</h2>
          <p className="text-base leading-6">{t.customerFocus}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{t.exploreTitle}</h2>
          <p className="text-base leading-6">{t.explore}</p>
        </section>
      </div>
    </div>
  );
}
