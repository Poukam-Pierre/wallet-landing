import { IFaqQuestions } from './interface';

export const faqQuestionsEn: IFaqQuestions[] = [
  {
    question: 'How to send money?',
    answer: {
      response: 'Please follow these steps to send money from the USA :',
      description: [
        'Sign uo or log in to Xafpay',
        'Complete your KYC verification',
        'Link your bank account and fund account',
        "Enter recipient's detail and initiate transfer",
      ],
    },
  },
  {
    question: 'What types of documents do I need to complete KYC?',
    answer: {
      response: 'Any one of the following documents is accepted:',
      description: [
        'Passport',
        'Passport Card',
        "Driver's Licence",
        'National ID Card',
        'Permanent Resident Card',
        'Visa or Work Permit',
      ],
    },
  },
  {
    question: 'Can I send money anytime?',
    answer: {
      response:
        'yes Xafpay operates 24/7 including weekends and public holidays',
    },
  },
  {
    question: 'Which countries can I send money to?',
    answer: {
      response:
        'Xafpay currently enables money tranfers to Camerron, with more currencies and countries coming soon.',
    },
  },
  {
    question: 'What are your transfer fees?',
    answer: {
      response: 'Zafpay offers zero transaction fees',
    },
  },
  {
    question: 'What are the exchange rates?',
    answer: {
      response:
        'We offer unbeatable rates better than standard global exchange rates.',
    },
  },
  {
    question: 'What is the transfer limit?',
    answer: {
      response: 'Our transfer limit is set as follow :',
      description: [
        'Without SSN: $2,999 per transfer/day, $15,000/week.',
        'With SSN: $5,000 per transfer/day, $15,000/week.',
      ],
    },
  },
  {
    question: 'How long does it take to send my money?',
    answer: {
      response:
        'Transfers are instant. It takes a few seconds to deliver your funds to the recipient.',
    },
  },
];

export const faqQuestionsFr: IFaqQuestions[] = [
  {
    question: 'Comment envoyer de l’argent ?',
    answer: {
      response:
        'Suivez ces étapes pour envoyer de l’argent depuis les États-Unis :',
      description: [
        'Inscrivez-vous ou connectez-vous à Xafpay',
        'Complétez votre vérification KYC',
        'Lieez votre compte bancaire et approvisionnez votre compte',
        'Entrez les détails du destinataire et lancez le transfert',
      ],
    },
  },
  {
    question: 'Quels documents faut-il pour compléter le KYC ?',
    answer: {
      response: 'Un seul des documents suivants est accepté :',
      description: [
        'Passeport',
        'Carte de passeport',
        'Permis de conduire',
        'Carte nationale d’identité',
        'Carte de résident permanent',
        'Visa ou permis de travail',
      ],
    },
  },
  {
    question: 'Puis-je envoyer de l’argent à tout moment ?',
    answer: {
      response:
        'Oui, Xafpay fonctionne 24/7, y compris les week-ends et jours fériés.',
    },
  },
  {
    question: 'À quels pays puis-je envoyer de l’argent ?',
    answer: {
      response:
        'Xafpay permet actuellement les transferts vers le Cameroun. D’autres pays et devises arrivent bientôt.',
    },
  },
  {
    question: 'Quels sont vos frais de transfert ?',
    answer: {
      response: 'Xafpay propose des frais de transaction à zéro.',
    },
  },
  {
    question: 'Quels sont vos taux de change ?',
    answer: {
      response:
        'Nous offrons des taux imbattables, meilleurs que les taux standards internationaux.',
    },
  },
  {
    question: 'Quelle est la limite de transfert ?',
    answer: {
      response: 'Nos limites de transfert sont les suivantes :',
      description: [
        'Sans SSN : 2 999 $ par transfert/jour, 15 000 $/semaine.',
        'Avec SSN : 5 000 $ par transfert/jour, 15 000 $/semaine.',
      ],
    },
  },
  {
    question: 'Combien de temps prend le transfert ?',
    answer: {
      response:
        'Les transferts sont instantanés. Quelques secondes suffisent pour que l’argent arrive au destinataire.',
    },
  },
];
