"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone, BarChart3, User, Award, Ticket, Gamepad2, Bell, MapPin, PieChart, Settings, MessageSquare, TrendingUp, Code } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Modal } from "@/components/ui/Modal";

export function Fonctionnalites() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

    const clientFeatures = [
        {
            id: "compte",
            icon: User,
            title: "Compte utilisateur & expérience personnalisée",
            summary: "Inscription rapide, profil intelligent, historique détaillé",
            details: {
                intro: "L'application est conçue pour créer une habitude d'utilisation, augmenter la fréquence de visite, et maximiser la valeur client à long terme (LTV) grâce à des mécaniques de fidélisation avancées.",
                sections: [
                    {
                        title: "Inscription rapide via :",
                        items: ["Email", "Numéro de téléphone", "Connexion sociale (optionnelle)"]
                    },
                    {
                        title: "Profil utilisateur intelligent :",
                        items: [
                            "Nom, photo (optionnel)",
                            "Restaurants favoris",
                            "Préférences alimentaires (ex : végétarien, halal, sans gluten)",
                            "Fréquence de visite",
                            "Historique de consommation"
                        ]
                    },
                    {
                        title: "Historique détaillé :",
                        items: [
                            "Visites passées",
                            "Points gagnés",
                            "Récompenses obtenues",
                            "Coupons utilisés ou expirés"
                        ]
                    }
                ],
                objectif: "👉 Objectif business : mieux connaître le client pour personnaliser les offres et augmenter les conversions."
            }
        },
        {
            id: "fidelite",
            icon: Award,
            title: "Système de fidélité intelligent & évolutif",
            summary: "Points automatiques, paliers dynamiques, récompenses",
            details: {
                sections: [
                    {
                        title: "Accumulation automatique de points :",
                        items: [
                            "Par montant dépensé",
                            "Par visite",
                            "Par action (avis, parrainage, défi complété)"
                        ]
                    },
                    {
                        title: "Paliers de fidélité dynamiques :",
                        items: ["Bronze / Silver / Gold / VIP"]
                    },
                    {
                        title: "Avantages exclusifs par palier :",
                        items: [
                            "Réductions supérieures",
                            "Accès anticipé aux promotions",
                            "Offres réservées aux clients fidèles"
                        ]
                    },
                    {
                        title: "Récompenses automatisées :",
                        items: [
                            "Cadeaux gratuits",
                            "Remises immédiates",
                            "Produits premium offerts",
                            "Expériences exclusives (ex : menu spécial VIP)"
                        ]
                    }
                ],
                objectif: "👉 Effet psychologique : l'utilisateur ne veut pas \"perdre son statut\", ce qui augmente naturellement la rétention."
            }
        },
        {
            id: "coupons",
            icon: Ticket,
            title: "Coupons & offres intelligentes (moteur d'upsell)",
            summary: "QR Code sécurisé, offres conditionnelles, personnalisation",
            details: {
                sections: [
                    {
                        title: "Coupons numériques sécurisés via QR Code",
                        items: []
                    },
                    {
                        title: "Coupons conditionnels :",
                        items: [
                            "Minimum de dépense",
                            "Jour ou heure spécifique",
                            "Produit ciblé"
                        ]
                    },
                    {
                        title: "Offres personnalisées basées sur le comportement :",
                        items: [
                            "Client inactif → offre de réactivation",
                            "Client régulier → upsell premium",
                            "Client à forte valeur → récompense VIP"
                        ]
                    },
                    {
                        title: "Offres à durée limitée (urgence) :",
                        items: [
                            "Compte à rebours",
                            "Offres flash",
                            "Happy hour digital"
                        ]
                    },
                    {
                        title: "Coupons événementiels automatisés :",
                        items: [
                            "Anniversaire",
                            "Fêtes",
                            "Anniversaire d'inscription",
                            "Nombre X de visites atteint"
                        ]
                    }
                ],
                objectif: "👉 Objectif business : augmenter le panier moyen et déclencher l'achat par rareté et personnalisation."
            }
        },
        {
            id: "gamification",
            icon: Gamepad2,
            title: "Gamification avancée (différenciateur clé)",
            summary: "Badges, défis engageants, récompenses bonus",
            details: {
                sections: [
                    {
                        title: "Badges de fidélité :",
                        items: [
                            "Client fidèle",
                            "Explorateur (plusieurs restaurants)",
                            "Client premium",
                            "Ambassadeur"
                        ]
                    },
                    {
                        title: "Défis engageants :",
                        items: [
                            "\"5 visites en 30 jours\"",
                            "\"Essayer 3 menus différents\"",
                            "\"Venir hors heures de pointe\""
                        ]
                    },
                    {
                        title: "Récompenses bonus :",
                        items: [
                            "Points supplémentaires",
                            "Coupons exclusifs",
                            "Accès à des offres cachées"
                        ]
                    }
                ],
                objectif: "👉 Résultat : l'app devient un jeu → l'utilisateur revient sans y être poussé."
            }
        },
        {
            id: "notifications",
            icon: Bell,
            title: "Notifications push ultra ciblées",
            summary: "Automatiques, intelligentes, comportementales",
            details: {
                sections: [
                    {
                        title: "Notifications automatiques :",
                        items: [
                            "Nouveau coupon disponible",
                            "Récompense prête à être utilisée",
                            "Fin imminente d'une offre"
                        ]
                    },
                    {
                        title: "Notifications intelligentes :",
                        items: [
                            "Heures creuses → attirer du trafic",
                            "Jours habituellement visités",
                            "Inactivité détectée → relance personnalisée"
                        ]
                    },
                    {
                        title: "Notifications comportementales :",
                        items: [
                            "\"Vous êtes à 10 points d'une récompense\"",
                            "\"Encore une visite pour passer Gold\""
                        ]
                    }
                ],
                objectif: "👉 Impact direct : trafic maîtrisé + réduction des périodes creuses."
            }
        },
        {
            id: "carte",
            icon: MapPin,
            title: "Carte des restaurants & expérience locale",
            summary: "Géolocalisation, fiches détaillées, suggestions intelligentes",
            details: {
                sections: [
                    {
                        title: "Carte interactive avec géolocalisation",
                        items: []
                    },
                    {
                        title: "Fiches détaillées :",
                        items: [
                            "Photos",
                            "Horaires",
                            "Promotions en cours",
                            "Récompenses disponibles"
                        ]
                    },
                    {
                        title: "Suggestions intelligentes :",
                        items: [
                            "Restaurants proches",
                            "Offres adaptées aux préférences utilisateur"
                        ]
                    }
                ],
                objectif: "👉 Valeur ajoutée : découverte + rétention multi-établissements."
            }
        }
    ];

    const restaurantFeatures = [
        {
            id: "dashboard",
            icon: PieChart,
            title: "Tableau de bord décisionnel",
            summary: "KPIs en temps réel, vision claire de l'impact",
            details: {
                intro: "Le back-office est conçu comme un outil marketing clé en main, sans compétences techniques requises.",
                sections: [
                    {
                        title: "Métriques clés :",
                        items: [
                            "Nombre d'utilisateurs actifs",
                            "Nouveaux clients vs clients récurrents",
                            "Taux de fidélisation",
                            "Fréquence moyenne de visite",
                            "Panier moyen estimé",
                            "Coupons créés vs utilisés"
                        ]
                    }
                ],
                objectif: "👉 Vision claire de l'impact réel de la fidélisation sur le chiffre d'affaires."
            }
        },
        {
            id: "offres",
            icon: Settings,
            title: "Gestion avancée des offres & promotions",
            summary: "Création en clics, règles avancées, tests A/B",
            details: {
                sections: [
                    {
                        title: "Création de coupons en quelques clics",
                        items: []
                    },
                    {
                        title: "Règles avancées :",
                        items: [
                            "Paliers de fidélité",
                            "Segmentation client",
                            "Jours / heures spécifiques"
                        ]
                    },
                    {
                        title: "Activation / désactivation instantanée",
                        items: []
                    },
                    {
                        title: "Tests A/B possibles sur les offres",
                        items: []
                    }
                ],
                objectif: "👉 Objectif : tester, optimiser et maximiser le ROI."
            }
        },
        {
            id: "gestion-fidelite",
            icon: Award,
            title: "Gestion stratégique de la fidélité",
            summary: "Configuration paliers, ajustement points, récompenses variées",
            details: {
                sections: [
                    {
                        title: "Configuration personnalisée des paliers",
                        items: []
                    },
                    {
                        title: "Ajustement de la valeur des points",
                        items: []
                    },
                    {
                        title: "Types de récompenses variés :",
                        items: [
                            "Réduction",
                            "Cadeau",
                            "Produit premium",
                            "Avantage exclusif"
                        ]
                    },
                    {
                        title: "Fidélité adaptable selon la stratégie du restaurant",
                        items: []
                    }
                ],
                objectif: ""
            }
        },
        {
            id: "communication",
            icon: MessageSquare,
            title: "Communication client automatisée",
            summary: "Notifications ciblées, campagnes planifiées, messages auto",
            details: {
                sections: [
                    {
                        title: "Envoi de notifications ciblées :",
                        items: [
                            "Par comportement",
                            "Par segment client",
                            "Par palier"
                        ]
                    },
                    {
                        title: "Campagnes marketing planifiées :",
                        items: [
                            "Relance clients inactifs",
                            "Promotions saisonnières",
                            "Nouveaux menus"
                        ]
                    },
                    {
                        title: "Messages automatiques :",
                        items: [
                            "Anniversaire",
                            "Retour après inactivité",
                            "Félicitations (nouveau palier)"
                        ]
                    }
                ],
                objectif: "👉 Gain énorme de temps pour le restaurateur."
            }
        },
        {
            id: "analytics",
            icon: TrendingUp,
            title: "Analyse & statistiques avancées (ROI)",
            summary: "Performances, comportement, mesure ROI",
            details: {
                sections: [
                    {
                        title: "Données disponibles :",
                        items: [
                            "Performances des campagnes",
                            "Taux d'utilisation des coupons",
                            "Comportement client détaillé",
                            "Identification des clients à forte valeur",
                            "Mesure du ROI des actions marketing"
                        ]
                    }
                ],
                objectif: "👉 Décisions basées sur des données réelles, pas sur l'intuition."
            }
        }
    ];

    return (
        <Section className="bg-background" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Fonctionnalités Détaillées
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto mb-4"
                >
                    Une application complète pour clients et restaurateurs
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-sm font-medium" style={{ color: '#1d4760' }}
                >
                    👆 Cliquez sur une fonctionnalité pour voir tous les détails
                </motion.p>
            </div>

            {/* Côté Client */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <Smartphone className="w-16 h-16 mx-auto mb-4" style={{ color: '#1d4760' }} />
                    <h3 className="text-4xl font-bold">Côté Utilisateur (Client final)</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientFeatures.map((feature, index) => (
                        <motion.button
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                            onClick={() => setSelectedFeature(feature.id)}
                            className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-400 transition-all hover:shadow-xl hover:scale-105 text-left"
                        >
                            <feature.icon className="w-10 h-10 mb-4" style={{ color: '#1d4760' }} />
                            <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted mb-3">{feature.summary}</p>
                            <span className="text-xs font-medium" style={{ color: '#1d4760' }}>Voir détails →</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Côté Restaurateur */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <BarChart3 className="w-16 h-16 mx-auto mb-4" style={{ color: '#1d4760' }} />
                    <h3 className="text-4xl font-bold">Côté Restaurateur (Back-Office)</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurantFeatures.map((feature, index) => (
                        <motion.button
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                            onClick={() => setSelectedFeature(feature.id)}
                            className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-400 transition-all hover:shadow-xl hover:scale-105 text-left"
                        >
                            <feature.icon className="w-10 h-10 mb-4" style={{ color: '#1d4760' }} />
                            <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted mb-3">{feature.summary}</p>
                            <span className="text-xs font-medium" style={{ color: '#1d4760' }}>Voir détails →</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Architecture Technique */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-16"
            >
                <button
                    onClick={() => setSelectedFeature("architecture")}
                    className="w-full text-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-105" style={{ backgroundColor: '#1d4760' }}
                >
                    <Code className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Architecture Technique</h3>
                    <p className="text-blue-100">Cliquez pour voir les détails techniques</p>
                </button>
            </motion.div>

            {/* Valeur Stratégique */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="mt-12 text-center"
            >
                <div className="inline-block text-white rounded-2xl px-12 py-8 max-w-4xl" style={{ backgroundColor: '#1d4760' }}>
                    <h4 className="text-2xl font-bold mb-4">Valeur stratégique globale</h4>

                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <ul className="space-y-2">
                            <li>• +20 à +40 % de fréquence de visite</li>
                            <li>• Augmentation du panier moyen</li>
                            <li>• Réduction des périodes creuses</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>• Fidélisation long terme</li>
                            <li>• Indépendance vis-à-vis des plateformes externes</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Modals pour chaque fonctionnalité */}
            {[...clientFeatures, ...restaurantFeatures].map((feature) => (
                <Modal
                    key={feature.id}
                    isOpen={selectedFeature === feature.id}
                    onClose={() => setSelectedFeature(null)}
                    title={feature.title}
                >
                    <div className="space-y-6">
                        {feature.details.intro && (
                            <p className="text-muted leading-relaxed italic bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                                {feature.details.intro}
                            </p>
                        )}

                        {feature.details.sections.map((section, idx) => (
                            <div key={idx}>
                                {section.title && <h4 className="text-lg font-bold mb-3">{section.title}</h4>}
                                {section.items.length > 0 && (
                                    <ul className="space-y-2 ml-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1" style={{ color: '#1d4760' }}>•</span>
                                                <span className="text-muted">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {feature.details.objectif && (
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                <p className="font-semibold">
                                    {feature.details.objectif}
                                </p>
                            </div>
                        )}
                    </div>
                </Modal>
            ))}

            {/* Modal Architecture Technique */}
            <Modal
                isOpen={selectedFeature === "architecture"}
                onClose={() => setSelectedFeature(null)}
                title="Architecture Technique (simplifiée)"
            >
                <div className="space-y-4">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="font-bold" style={{ color: '#1d4760' }}>•</span>
                            <span className="text-muted"><strong>Application mobile :</strong> React Native / Flutter</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold">•</span>
                            <span className="text-muted"><strong>Backend sécurisé :</strong> (API)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold">•</span>
                            <span className="text-muted"><strong>Base de données :</strong> utilisateurs & transactions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold">•</span>
                            <span className="text-muted"><strong>Système de notifications push</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold">•</span>
                            <span className="text-muted"><strong>Hébergement cloud sécurisé</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold">•</span>
                            <span className="text-muted"><strong>Architecture évolutive :</strong> (ajout de nouvelles fonctionnalités)</span>
                        </li>
                    </ul>
                </div>
            </Modal>
        </Section>
    );
}
