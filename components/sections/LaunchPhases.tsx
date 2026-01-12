"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Section } from "../ui/Section";
import { Modal } from "../ui/Modal";

export function LaunchPhases() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

    const phases = [
        {
            phase: "Phase 0",
            title: "Préparation & branding",
            duration: "2–3 semaines",
            details: {
                objectif: "Poser les fondations de l'identité iBox et préparer les outils de lancement",
                actions: [
                    "Finalisation de l'identité visuelle (logo, charte graphique, couleurs)",
                    "Création du site web de présentation (ce site actuel)",
                    "Rédaction des messages clés et positionnement",
                    "Préparation des supports marketing (pitch deck, one-pager)",
                    "Configuration des outils (CRM, analytics, email marketing)",
                    "Définition des KPIs et tableaux de bord de suivi",
                    "Mise en place des processus de vérification transporteurs",
                ],
                livrables: [
                    "Site web opérationnel",
                    "Kit de marque complet",
                    "Documents de présentation",
                    "Outils de tracking configurés",
                ],
            },
        },
        {
            phase: "Phase 1",
            title: "Awareness & compréhension",
            duration: "2 mois",
            details: {
                objectif: "Faire connaître iBox et éduquer le marché sur le concept d'infrastructure réglementée",
                actions: [
                    "Lancement des campagnes Meta Ads (Facebook/Instagram) - 800 $/mois",
                    "Campagnes Google Display pour visibilité - 300 $/mois",
                    "LinkedIn Ads ciblant les professionnels B2B - 400 $/mois",
                    "Publication de contenu éducatif (blog, LinkedIn)",
                    "Présence sur groupes et forums professionnels du transport",
                    "Webinaires de présentation du concept",
                    "Premiers contacts directs avec transporteurs clés",
                ],
                metriques: [
                    "250K–350K impressions totales",
                    "2K–3.5K visiteurs qualifiés sur le site",
                    "CTR moyen : 0.8%–1.2%",
                    "Temps moyen sur site > 2 minutes",
                    "Taux de rebond < 60%",
                ],
            },
        },
        {
            phase: "Phase 2",
            title: "Acquisition & qualification",
            duration: "2–3 mois",
            details: {
                objectif: "Convertir l'intérêt en leads qualifiés et constituer la base de transporteurs/clients",
                actions: [
                    "Meta Lead Ads avec formulaires optimisés - 1 200 $/mois",
                    "Google Search Ads sur mots-clés à forte intention - 600 $/mois",
                    "Retargeting des visiteurs engagés - 400 $/mois",
                    "Appels de qualification pour chaque lead",
                    "Vérification des licences et assurances transporteurs",
                    "Démonstrations personnalisées pour entreprises",
                    "Négociations avec premiers partenaires stratégiques",
                    "Tests A/B des messages et landing pages",
                ],
                resultats: [
                    "110–160 leads qualifiés par mois",
                    "40–60 transporteurs vérifiés intéressés",
                    "20–30 entreprises B2B en discussion",
                    "50–70 demandes déménagement particuliers",
                    "Base de données CRM structurée",
                ],
            },
        },
        {
            phase: "Phase 3",
            title: "Activation & premières opérations",
            duration: "3 mois",
            details: {
                objectif: "Lancer les premières opérations commerciales et valider le modèle économique",
                actions: [
                    "Onboarding des premiers transporteurs (80–120 activés)",
                    "Signature des premiers contrats entreprises (30–50)",
                    "Réalisation des premiers déménagements (40–60)",
                    "Mise en place du support client 7j/7",
                    "Suivi qualité de chaque opération",
                    "Collecte des retours clients et ajustements",
                    "Optimisation des processus opérationnels",
                    "Gestion des litiges et amélioration continue",
                    "Documentation des cas d'usage réussis",
                ],
                revenus: [
                    "Transport B2B : ~3 500 $/mois (100 opérations × 350 $ × 10%)",
                    "Déménagement : ~2 000 $/mois (20 déménagements × 1 000 $ × 10%)",
                    "Revenu total : 5 000–6 000 $/mois",
                    "Validation du modèle économique",
                ],
            },
        },
        {
            phase: "Phase 4",
            title: "Optimisation & scale",
            duration: "Après validation",
            details: {
                objectif: "Scaler les opérations validées et étendre géographiquement",
                actions: [
                    "Analyse des données Phase 3 et identification des leviers",
                    "Augmentation progressive des budgets marketing",
                    "Automatisation des processus répétitifs",
                    "Expansion géographique (nouvelles villes)",
                    "Recrutement d'une équipe opérationnelle",
                    "Développement de fonctionnalités avancées (app mobile)",
                    "Partenariats stratégiques avec acteurs majeurs",
                    "Levée de fonds si nécessaire pour accélération",
                ],
                objectifs: [
                    "Multiplier par 3–5 le volume d'opérations",
                    "Atteindre la rentabilité opérationnelle",
                    "Couvrir 3–5 zones géographiques",
                    "Constituer un réseau de 500+ transporteurs vérifiés",
                    "Devenir référence sur le marché local",
                ],
            },
        },
    ];

    return (
        <Section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Phases de lancement
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Vision macro du déploiement progressif
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-sm text-primary mt-4 font-medium"
                >
                    👆 Cliquez sur une phase pour voir les détails
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {phases.map((phase, index) => (
                    <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        className="relative"
                    >
                        <button
                            onClick={() => setSelectedPhase(index)}
                            className="w-full bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl hover:scale-105 text-left cursor-pointer"
                        >
                            <div className="text-sm font-semibold text-primary mb-2">{phase.phase}</div>
                            <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                            <div className="text-sm text-muted font-mono">{phase.duration}</div>
                            <div className="mt-4 text-xs text-accent font-medium flex items-center gap-1">
                                Voir détails <ArrowRight className="w-3 h-3" />
                            </div>
                        </button>
                        {index < phases.length - 1 && (
                            <ArrowRight className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Modals */}
            {phases.map((phase, index) => (
                <Modal
                    key={phase.phase}
                    isOpen={selectedPhase === index}
                    onClose={() => setSelectedPhase(null)}
                    title={`${phase.phase} : ${phase.title}`}
                >
                    <div className="space-y-6">
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                            <p className="text-sm text-muted mb-1">Durée</p>
                            <p className="text-lg font-semibold">{phase.duration}</p>
                        </div>

                        {phase.details.objectif && (
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-primary">🎯 Objectif</h3>
                                <p className="text-muted leading-relaxed">{phase.details.objectif}</p>
                            </div>
                        )}

                        {phase.details.actions && (
                            <div>
                                <h3 className="text-xl font-bold mb-3">📋 Actions concrètes</h3>
                                <ul className="space-y-2">
                                    {phase.details.actions.map((action, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted">{action}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {phase.details.livrables && (
                            <div>
                                <h3 className="text-xl font-bold mb-3">📦 Livrables</h3>
                                <ul className="space-y-2">
                                    {phase.details.livrables.map((livrable, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-muted">{livrable}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {phase.details.metriques && (
                            <div>
                                <h3 className="text-xl font-bold mb-3">📊 Métriques clés</h3>
                                <ul className="space-y-2">
                                    {phase.details.metriques.map((metrique, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-primary font-bold">•</span>
                                            <span className="text-muted font-mono text-sm">{metrique}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {phase.details.resultats && (
                            <div>
                                <h3 className="text-xl font-bold mb-3">✅ Résultats attendus</h3>
                                <ul className="space-y-2">
                                    {phase.details.resultats.map((resultat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-muted">{resultat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {phase.details.revenus && (
                            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
                                <h3 className="text-xl font-bold mb-3">💰 Revenus</h3>
                                <ul className="space-y-2">
                                    {phase.details.revenus.map((revenu, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-accent font-bold">$</span>
                                            <span className="text-foreground font-semibold">{revenu}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {phase.details.objectifs && (
                            <div>
                                <h3 className="text-xl font-bold mb-3">🚀 Objectifs de scale</h3>
                                <ul className="space-y-2">
                                    {phase.details.objectifs.map((objectif, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted">{objectif}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Modal>
            ))}
        </Section>
    );
}
