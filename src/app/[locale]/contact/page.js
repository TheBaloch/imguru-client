export function generateMetadata({ params: { locale } }) {
  const translations = {
    en: {
      title: "Contact Us - Natty NYC",
      description:
        "Get in touch with Natty NYC. We are here to answer your questions, provide support, and assist with any inquiries you may have.",
      keywords:
        "Contact Us, Natty NYC, support, customer service, inquiries, help",
    },
    es: {
      title: "Contáctanos - Natty NYC",
      description:
        "Ponte en contacto con Natty NYC. Estamos aquí para responder a tus preguntas, brindar soporte y asistir con cualquier consulta que puedas tener.",
      keywords:
        "Contáctanos, Natty NYC, soporte, servicio al cliente, consultas, ayuda",
    },
    fr: {
      title: "Contactez-Nous - Natty NYC",
      description:
        "Contactez Natty NYC. Nous sommes là pour répondre à vos questions, fournir du support et vous aider avec toute demande que vous pourriez avoir.",
      keywords:
        "Contactez-Nous, Natty NYC, support, service client, demandes, aide",
    },
    de: {
      title: "Kontaktieren Sie Uns - Natty NYC",
      description:
        "Kontaktieren Sie Natty NYC. Wir sind hier, um Ihre Fragen zu beantworten, Unterstützung zu bieten und bei allen Anfragen zu helfen, die Sie haben könnten.",
      keywords:
        "Kontaktieren Sie Uns, Natty NYC, Unterstützung, Kundenservice, Anfragen, Hilfe",
    },
    pt: {
      title: "Fale Conosco - Natty NYC",
      description:
        "Entre em contato com a Natty NYC. Estamos aqui para responder suas perguntas, fornecer suporte e ajudar com qualquer dúvida que você possa ter.",
      keywords:
        "Fale Conosco, Natty NYC, suporte, atendimento ao cliente, dúvidas, ajuda",
    },
    ar: {
      title: "اتصل بنا - Natty NYC",
      description:
        "تواصل مع Natty NYC. نحن هنا للإجابة على أسئلتك، تقديم الدعم، ومساعدتك في أي استفسارات قد تكون لديك.",
      keywords: "اتصل بنا، Natty NYC، دعم، خدمة العملاء، استفسارات، مساعدة",
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
      url: `https://blog.nattynyc.com/${locale}/contact`,
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
      canonical: `https://blog.nattynyc.com/${locale}/contact`,
      languages: {
        en: "https://blog.nattynyc.com/en/contact",
        es: "https://blog.nattynyc.com/es/contact",
        fr: "https://blog.nattynyc.com/fr/contact",
        de: "https://blog.nattynyc.com/de/contact",
        ar: "https://blog.nattynyc.com/ar/contact",
        pt: "https://blog.nattynyc.com/pt/contact",
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
      contactUs: "Contact Us",
      phone: "Phone",
      address: "Address",
      email: "Email",
      name: "Name",
      subject: "Subject",
      message: "Message",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderSubject: "Enter the subject",
      placeholderMessage: "Enter your message",
      submit: "Submit",
      formIntro:
        "Fill out the form below and we'll get back to you as soon as possible.",
    },
    es: {
      contactUs: "Contáctenos",
      phone: "Teléfono",
      address: "Dirección",
      email: "Correo Electrónico",
      name: "Nombre",
      subject: "Asunto",
      message: "Mensaje",
      placeholderName: "Ingrese su nombre",
      placeholderEmail: "Ingrese su correo electrónico",
      placeholderSubject: "Ingrese el asunto",
      placeholderMessage: "Ingrese su mensaje",
      submit: "Enviar",
      formIntro:
        "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
    },
    fr: {
      contactUs: "Nous Contacter",
      phone: "Téléphone",
      address: "Adresse",
      email: "Email",
      name: "Nom",
      subject: "Sujet",
      message: "Message",
      placeholderName: "Entrez votre nom",
      placeholderEmail: "Entrez votre email",
      placeholderSubject: "Entrez le sujet",
      placeholderMessage: "Entrez votre message",
      submit: "Envoyer",
      formIntro:
        "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
    },
    de: {
      contactUs: "Kontaktieren Sie uns",
      phone: "Telefon",
      address: "Adresse",
      email: "E-Mail",
      name: "Name",
      subject: "Betreff",
      message: "Nachricht",
      placeholderName: "Geben Sie Ihren Namen ein",
      placeholderEmail: "Geben Sie Ihre E-Mail-Adresse ein",
      placeholderSubject: "Geben Sie den Betreff ein",
      placeholderMessage: "Geben Sie Ihre Nachricht ein",
      submit: "Absenden",
      formIntro:
        "Füllen Sie das folgende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.",
    },
    ja: {
      contactUs: "お問い合わせ",
      phone: "電話",
      address: "住所",
      email: "メール",
      name: "名前",
      subject: "件名",
      message: "メッセージ",
      placeholderName: "名前を入力してください",
      placeholderEmail: "メールアドレスを入力してください",
      placeholderSubject: "件名を入力してください",
      placeholderMessage: "メッセージを入力してください",
      submit: "送信",
      formIntro:
        "以下のフォームに記入していただければ、できるだけ早くお返事いたします。",
    },
    ar: {
      contactUs: "اتصل بنا",
      phone: "هاتف",
      address: "عنوان",
      email: "البريد الإلكتروني",
      name: "الاسم",
      subject: "الموضوع",
      message: "الرسالة",
      placeholderName: "أدخل اسمك",
      placeholderEmail: "أدخل بريدك الإلكتروني",
      placeholderSubject: "أدخل الموضوع",
      placeholderMessage: "أدخل رسالتك",
      submit: "إرسال",
      formIntro: "املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن.",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">{t.contactUs}</h2>
          <p className="text-gray-600 mt-2">{t.formIntro}</p>
        </div>
        <form className="space-y-6 p-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t.placeholderName}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t.placeholderEmail}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              {t.subject}
            </label>
            <input
              type="text"
              id="subject"
              placeholder={t.placeholderSubject}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {t.message}
            </label>
            <textarea
              id="message"
              placeholder={t.placeholderMessage}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm h-36 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-black text-white px-4 py-2 shadow-sm hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
          >
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
