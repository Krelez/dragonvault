import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../../context/AppContext';
import { useManageSpells } from '../../hooks/useManageSpells';
import { Spell, CharacterClass, Character } from '../../types';
import { SPELLS, CLASSES, RANGER_ARCHETYPE_SPELLS, CLERIC_DOMAIN_SPELLS, PALADIN_OATH_SPELLS, DRUID_CIRCLE_SPELLS, SORCERER_ORIGIN_SPELLS, ARTIFICER_SPECIALIST_SPELLS, WARLOCK_PATRON_SPELLS, PRIMAL_AWARENESS_SPELLS, DIVINE_SOUL_AFFINITY_MAP, ELDRITCH_INVOCATIONS, INVOCATION_SPELL_MAP, getInnateSpells, DRUID_LANDS } from '../../data/mockData';
import { LUNAR_PHASES } from '../../data/classes/sorcerer';
import { getSchoolConfig, parseSpellId } from '../../utils/sheetUtils';
import { MagicRegistry } from '../../utils/magic/magicRegistry';
import { BookOpen, X, Shield, Minus, Lock, PenTool, Book, Ghost, Sparkles, Eye, Leaf, Sun, Brain, Music } from 'lucide-react';
import { SpellManagerSidebar } from './SpellManagerSidebar';

// Helper for Class Theme Colors
const getClassStyle = (id: string, isLight: boolean) => {
    const map: Record<string, { bg: string, border: string, headerText: string }> = {
        'artificer': { 
            bg: isLight ? 'bg-orange-50' : 'bg-orange-900/10', 
            border: 'border-orange-500',
            headerText: isLight ? 'text-orange-900' : 'text-orange-400'
        },
        'barbarian': { 
            bg: isLight ? 'bg-red-50' : 'bg-red-900/10', 
            border: 'border-red-500',
            headerText: isLight ? 'text-red-900' : 'text-red-400'
        },
        'bard': { 
            bg: isLight ? 'bg-pink-50' : 'bg-pink-900/10', 
            border: 'border-pink-500',
            headerText: isLight ? 'text-pink-900' : 'text-pink-400'
        },
        'cleric': { 
            bg: isLight ? 'bg-yellow-50' : 'bg-yellow-900/10', 
            border: 'border-yellow-500',
            headerText: isLight ? 'text-yellow-900' : 'text-yellow-400'
        },
        'druid': { 
            bg: isLight ? 'bg-green-50' : 'bg-green-900/10', 
            border: 'border-green-500',
            headerText: isLight ? 'text-green-900' : 'text-green-400'
        },
        'fighter': { 
            bg: isLight ? 'bg-slate-50' : 'bg-slate-900/10', 
            border: 'border-slate-500',
            headerText: isLight ? 'text-slate-900' : 'text-slate-400'
        },
        'monk': { 
            bg: isLight ? 'bg-cyan-50' : 'bg-cyan-900/10', 
            border: 'border-cyan-500',
            headerText: isLight ? 'text-cyan-900' : 'text-cyan-400'
        },
        'paladin': { 
            bg: isLight ? 'bg-amber-50' : 'bg-amber-900/10', 
            border: 'border-amber-500',
            headerText: isLight ? 'text-amber-900' : 'text-amber-400'
        },
        'ranger': { 
            bg: isLight ? 'bg-green-50' : 'bg-green-900/10', 
            border: 'border-green-500',
            headerText: isLight ? 'text-green-900' : 'text-green-400'
        },
        'rogue': { 
            bg: isLight ? 'bg-gray-100' : 'bg-gray-800/30', 
            border: 'border-gray-500',
            headerText: isLight ? 'text-gray-900' : 'text-grim-300'
        },
        'sorcerer': { 
            bg: isLight ? 'bg-red-50' : 'bg-red-900/10', 
            border: 'border-red-500',
            headerText: isLight ? 'text-red-900' : 'text-red-400'
        },
        'warlock': { 
            bg: isLight ? 'bg-purple-50' : 'bg-purple-900/10', 
            border: 'border-purple-500',
            headerText: isLight ? 'text-purple-900' : 'text-purple-400'
        },
        'wizard': { 
            bg: isLight ? 'bg-blue-50' : 'bg-blue-900/10', 
            border: 'border-blue-500',
            headerText: isLight ? 'text-blue-900' : 'text-blue-400'
        },
        'shadow_touched': { 
            bg: isLight ? 'bg-slate-50' : 'bg-slate-900/10', 
            border: 'border-slate-500',
            headerText: isLight ? 'text-slate-900' : 'text-slate-400'
        },
        'fey_touched': { 
            bg: isLight ? 'bg-pink-50' : 'bg-pink-900/10', 
            border: 'border-pink-500',
            headerText: isLight ? 'text-pink-900' : 'text-pink-400'
        },
        'fey_teleportation': { 
            bg: isLight ? 'bg-fuchsia-50' : 'bg-fuchsia-900/10', 
            border: 'border-fuchsia-500',
            headerText: isLight ? 'text-fuchsia-900' : 'text-fuchsia-400'
        },
        'magic_initiate': {
            bg: isLight ? 'bg-amber-50' : 'bg-amber-900/20', 
            border: 'border-amber-500',
            headerText: isLight ? 'text-amber-900' : 'text-amber-400'
        },
        'ritual_caster': {
            bg: isLight ? 'bg-amber-50' : 'bg-amber-900/20', 
            border: 'border-amber-500',
            headerText: isLight ? 'text-amber-900' : 'text-amber-400'
        },
        'magical_secrets': {
            bg: isLight ? 'bg-purple-50' : 'bg-purple-900/10',
            border: 'border-purple-500',
            headerText: isLight ? 'text-purple-900' : 'text-purple-400'
        },
        'bard_secrets': {
            bg: isLight ? 'bg-violet-50' : 'bg-violet-900/10',
            border: 'border-violet-500',
            headerText: isLight ? 'text-violet-900' : 'text-violet-400'
        },
        'telekinetic': {
            bg: isLight ? 'bg-indigo-50' : 'bg-indigo-900/10',
            border: 'border-indigo-500',
            headerText: isLight ? 'text-indigo-900' : 'text-indigo-400'
        },
        'telepathic': {
            bg: isLight ? 'bg-indigo-50' : 'bg-indigo-900/10',
            border: 'border-indigo-500',
            headerText: isLight ? 'text-indigo-900' : 'text-indigo-400'
        },
        'spell_sniper': {
            bg: isLight ? 'bg-indigo-50' : 'bg-indigo-900/20',
            border: 'border-indigo-500',
            headerText: isLight ? 'text-indigo-900' : 'text-indigo-400'
        }
    };
    return map[id] || { 
        bg: isLight ? 'bg-gray-50' : 'bg-grim-800/20', 
        border: 'border-grim-600',
        headerText: isLight ? 'text-gray-900' : 'text-grim-300'
    };
};

export const ManageSpellsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const { character, updateCharacter, contentSources, setSpellManagerOpen } = useApp();
    const { state, data, actions, ui } = useManageSpells(character, updateCharacter, contentSources, isOpen);
    const { t, isLight } = ui;
    const { setWizardMode } = actions;
    const { wizardMode } = state;
    const [mobileTab, setMobileTab] = useState<'library' | 'grimoire'>('library');
    const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

    React.useEffect(() => {
        setPortalContainer(document.body);
    }, []);

    React.useEffect(() => {
        if (isOpen) {
            setSpellManagerOpen(true);
        } else {
            setSpellManagerOpen(false);
        }
        return () => setSpellManagerOpen(false);
    }, [isOpen, setSpellManagerOpen]);

    const handleSpellClick = (spellId: string) => {
        actions.focusSpell(spellId);
        setMobileTab('library');
    };

    const invocationSpellIds = useMemo(() => {
        const charInvocations = character?.invocations || [];
        const charFeatures = character?.featuresObtained || [];
        const allInvocations = [...charInvocations];
        charFeatures.forEach(f => {
            if (ELDRITCH_INVOCATIONS.some(inv => inv.id === f)) {
                allInvocations.push(f);
            } else if (f.startsWith('eldritch_adept:')) {
                const invId = f.split(':')[1];
                if (invId) allInvocations.push(invId);
            }
        });
        return allInvocations.map(id => {
            const name = INVOCATION_SPELL_MAP[id];
            return name ? SPELLS.find(s => s.id === name)?.id : null;
        }).filter((id): id is string => !!id);
    }, [character?.invocations, character?.featuresObtained]);

    const featSpellIds = useMemo(() => {
        const ids: string[] = [];
        return ids;
    }, [character?.featuresObtained]);

    const hasWarlockClass = useMemo(() => character?.classes.some(c => c.classId === 'warlock'), [character?.classes]);

    if (!isOpen || !character || !portalContainer) return null;

    const isWizardScribeMode = data.isWizard && state.wizardMode === 'scribe';

    const getGrimoireGroups = (cls: CharacterClass) => {
        const classAutoKnown = MagicRegistry.getAutoKnownSpells(character, cls.classId);
        const knownSet = new Set<string>([...character.spellsKnown, ...(Array.from(classAutoKnown) as string[])]);
        
        const validSpells = Array.from(knownSet)
            .map(id => ({ rawId: id, ...parseSpellId(id as string) }))
            .filter(({ classId, spellId }) => {
                if (classId && classId === cls.classId) return true;
                if (classId === 'arcanum' && cls.classId === 'warlock') return true;
                
                if (cls.classId === 'cleric' && (classId === 'acolyte_of_nature' || classId === 'reaper' || classId === 'arcane_initiate')) return false;

                if (cls.classId === 'cleric' && (classId === 'acolyte_of_nature' || classId === 'reaper' || classId === 'arcane_initiate')) return true;
                
                if (cls.classId === 'bard' && (classId === 'magical_secrets' || classId === 'bard_secrets' || classId === 'spirit_session')) return false;

                if (['ritual', 'ritual_caster', 'magic_initiate'].includes(classId || '')) {
                     return classId === cls.classId;
                } 
                
                if (classId && classId !== cls.classId && !(cls.classId === 'cleric' && (classId === 'acolyte_of_nature' || classId === 'reaper' || classId === 'arcane_initiate'))) return false;

                if (!classId) {
                     const spell = SPELLS.find(s => s.id === spellId);
                     if (!spell) return false;
                     const spellNameLower = spell.name.en.toLowerCase();
                     
                     const isShadowInvis = spellNameLower === 'invisibility' && character.featuresObtained.some(f => f.startsWith('shadow_touched'));
                     const isFeyStep = spellNameLower === 'misty step' && character.featuresObtained.some(f => f.startsWith('fey_touched'));
                     const isFeyTeleportation = spellNameLower === 'misty step' && character.featuresObtained.some(f => f.startsWith('fey_teleportation'));

                     if (cls.classId === 'shadow_touched' && isShadowInvis) return true;
                     if (cls.classId === 'fey_touched' && isFeyStep) return true;
                     if (cls.classId === 'fey_teleportation' && isFeyTeleportation) return true;
                     
                     if ((isShadowInvis || isFeyStep || isFeyTeleportation) && !(cls as any).isVirtual) return false;

                     const isLunar = character.classes.some(c => c.classId === 'sorcerer' && c.subclassId === 'lunar');
                     const isSorcererActive = cls.classId === 'sorcerer';
                     
                     if (isLunar && !isSorcererActive) {
                         const allLunarSpells = [
                             ...LUNAR_PHASES['full'].spells,
                             ...LUNAR_PHASES['new'].spells,
                             ...LUNAR_PHASES['crescent'].spells,
                             'Sacred Flame'
                         ];
                         
                         const isPhaseSpell = allLunarSpells.some((n: string) => n.toLowerCase() === spellNameLower);
                         
                         if (isPhaseSpell) {
                             return false; 
                         }
                     }

                     let owningClassId: string | null = null;
                     
                     for (const c of character.classes) {
                         const sub = c.subclassId;
                         if (c.classId === 'ranger' && sub && RANGER_ARCHETYPE_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) owningClassId = 'ranger';
                         if (c.classId === 'cleric' && sub && CLERIC_DOMAIN_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) owningClassId = 'cleric';
                         if (c.classId === 'paladin' && sub && PALADIN_OATH_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) owningClassId = 'paladin';
                         if (c.classId === 'druid' && sub) {
                              if (DRUID_CIRCLE_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) owningClassId = 'druid';
                              if (sub === 'land' && character.druidLand) {
                                  const land = DRUID_LANDS.find(l => l.id === character.druidLand);
                                  if (land && land.spells.some(s => s.toLowerCase() === spellNameLower)) owningClassId = 'druid';
                              }
                              if (sub === 'moon' && c.level >= 14 && spellNameLower === 'alter self') owningClassId = 'druid';
                         }
                         if (c.classId === 'sorcerer' && sub === 'divine_soul' && character.divineSoulAffinity && DIVINE_SOUL_AFFINITY_MAP[character.divineSoulAffinity].toLowerCase() === spellNameLower) owningClassId = 'sorcerer';
                         if (c.classId === 'warlock' && sub === 'celestial' && (spellNameLower === 'light' || spellNameLower === 'sacred flame')) owningClassId = 'warlock';
                         if (c.classId === 'wizard' && sub === 'illusion' && spellNameLower === 'minor illusion') owningClassId = 'wizard';
                         if (c.classId === 'barbarian' && (sub === 'totem_warrior' || sub === 'ancestral_guardian')) {
                              if (sub === 'totem_warrior' && (['speak with animals', 'beast sense'].includes(spellNameLower) || (c.level >= 10 && spellNameLower === 'commune with nature'))) owningClassId = 'barbarian';
                              if (sub === 'ancestral_guardian' && c.level >= 10 && ['augury', 'clairvoyance'].includes(spellNameLower)) owningClassId = 'barbarian';
                         }

                         if (c.classId === 'bard' && sub === 'spirits' && spellNameLower === 'guidance') owningClassId = 'bard';
                         if (c.classId === 'druid' && sub === 'spores' && spellNameLower === 'chill touch') owningClassId = 'druid';
                         if (c.classId === 'druid' && sub === 'stars' && spellNameLower === 'guidance') owningClassId = 'druid';
                         if (c.classId === 'sorcerer' && sub === 'lunar' && spellNameLower === 'sacred flame') owningClassId = 'sorcerer';
                     }
                     
                     if (invocationSpellIds.includes(spellId)) owningClassId = 'warlock';
                     if (character.pactBoon === 'chain' && spellNameLower === 'find familiar') owningClassId = 'warlock';

                     if (owningClassId && owningClassId !== cls.classId) return false;
                     if (cls.classId === 'warlock' && (character.pactSpells?.includes(spellId) || character.bookSecrets?.includes(spellId) || invocationSpellIds.includes(spellId))) return false;
                     
                     if (cls.classId === 'ranger' && cls.fightingStyleId === 'druidic_warrior' && spell.level === 0 && spell.classes.includes('druid')) return true;
                     if (cls.classId === 'paladin' && cls.fightingStyleId === 'blessed_warrior' && spell.level === 0 && spell.classes.includes('cleric')) return true;
                     if (cls.classId === 'cleric' && cls.subclassId === 'nature' && spell.level === 0 && spell.classes.includes('druid')) return true;
                     
                     const sub = cls.subclassId;
                     if (cls.classId === 'ranger' && sub && RANGER_ARCHETYPE_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) return true;
                     if (cls.classId === 'cleric' && sub && CLERIC_DOMAIN_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) return true;
                     if (cls.classId === 'paladin' && sub && PALADIN_OATH_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) return true;
                     if (cls.classId === 'druid' && sub) {
                          if (DRUID_CIRCLE_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) return true;
                          if (sub === 'land' && character.druidLand) {
                              const land = DRUID_LANDS.find(l => l.id === character.druidLand);
                              if (land && land.spells.some(s => s.toLowerCase() === spellNameLower)) return true;
                          }
                          if (sub === 'moon' && cls.level >= 14 && spellNameLower === 'alter self') return true;
                     }
                     if (cls.classId === 'sorcerer' && sub && SORCERER_ORIGIN_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) return true;
                     if (cls.classId === 'sorcerer' && sub === 'lunar' && spellNameLower === 'sacred flame') return true;
                     if (cls.classId === 'artificer' && sub) {
                         const spells = ARTIFICER_SPECIALIST_SPELLS[sub] || [];
                         const idx = spells.findIndex(s => s.toLowerCase() === spellNameLower);
                         if (idx !== -1) {
                             const req = idx < 2 ? 3 : idx < 4 ? 5 : idx < 6 ? 9 : idx < 8 ? 13 : 17;
                             if (cls.level >= req) return true;
                         }
                         if (sub === 'alchemist') {
                             if (spellNameLower === 'lesser restoration' && cls.level >= 9) return true;
                             if ((spellNameLower === 'greater restoration' || spellNameLower === 'heal') && cls.level >= 15) return true;
                         }
                     }
                     if (cls.classId === 'warlock' && sub && WARLOCK_PATRON_SPELLS[sub]?.some(s => s.toLowerCase() === spellNameLower)) return true;
                     if (cls.classId === 'ranger' && character.featuresObtained.includes('primal_awareness') && PRIMAL_AWARENESS_SPELLS.some(p => p.name.toLowerCase() === spellNameLower)) return true;
                     if (cls.classId === 'ranger' && character.featuresObtained.includes('fey_reinforcements') && spellNameLower === 'summon fey') return true;
                     if (cls.classId === 'sorcerer' && sub === 'divine_soul' && character.divineSoulAffinity && DIVINE_SOUL_AFFINITY_MAP[character.divineSoulAffinity].toLowerCase() === spellNameLower) return true;
                     
                     if (cls.classId === 'warlock' && sub === 'celestial' && (spellNameLower === 'light' || spellNameLower === 'sacred flame')) return true;
                     if (cls.classId === 'wizard' && sub === 'illusion' && spellNameLower === 'minor illusion') return true;
                     if (cls.classId === 'barbarian' && (sub === 'totem_warrior' || sub === 'ancestral_guardian')) {
                          if (sub === 'totem_warrior' && (['speak with animals', 'beast sense'].includes(spellNameLower) || (cls.level >= 10 && spellNameLower === 'commune with nature'))) return true;
                          if (sub === 'ancestral_guardian' && cls.level >= 10 && ['augury', 'clairvoyance'].includes(spellNameLower)) return true;
                     }

                     if (owningClassId && owningClassId === cls.classId) return true;
                     
                     if (cls.classId === 'rogue' && cls.subclassId === 'arcane_trickster' && spell.classes.includes('wizard')) return true;
                     if (cls.classId === 'fighter' && cls.subclassId === 'eldritch_knight' && spell.classes.includes('wizard')) return true;

                     return spell.classes.includes(cls.classId);
                }
                return false;
            })
            .map(({ spellId, rawId }) => ({ uniqueId: rawId, id: spellId, ...SPELLS.find(s => s.id === spellId) }))
            .filter(s => !!s.name);
            
        const uniqueSpells = [];
        const seenIds = new Set();
        for (const s of validSpells) { if (!seenIds.has(s.id)) { uniqueSpells.push(s); seenIds.add(s.id); } }
        
        let finalSpells = uniqueSpells;
        if (cls.classId === 'wizard') {
            if (state.wizardMode === 'scribe') { finalSpells = finalSpells.filter(s => (s.level || 0) > 0); } 
            else if (state.wizardMode === 'prepare') { finalSpells = finalSpells.filter(s => s.level === 0 || character!.preparedSpells?.includes(s.id) || character!.preparedSpells?.includes(`wizard|${s.id}`) || data.autoKnownSpellIds.has(s.id)); }
        }
        return finalSpells;
    };
    
    const renderSpecialList = (title: string, spellIds: string[], isRemovable: boolean = true, listKey?: keyof Character, classId?: string, titleColorClass?: string, icon?: React.ReactNode, fixedSpellIds: string[] = []) => {
        if (spellIds.length === 0) return null;
        const headerClass = titleColorClass || (isLight ? 'text-gray-500' : 'text-grim-500');
        return (
            <div className="mb-2 last:mb-0">
                <div className={`flex items-center gap-2 mb-1 pb-1 border-b border-black/5 dark:border-white/5`}>
                    <div className={`text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-2 ${headerClass}`}>
                        {icon} {title}
                        {!isRemovable && <Lock className="w-2.5 h-2.5 opacity-70" />}
                    </div>
                </div>
                <ul className="space-y-0.5">
                    {spellIds.map(spellId => {
                         const { spellId: pureId } = parseSpellId(spellId);
                         const s = SPELLS.find(x => x.id === pureId);
                         const schoolConf = getSchoolConfig(s?.school || '', isLight);
                         const SchoolIcon = schoolConf.icon;
                         const isRitual = s?.components.includes('R') || s?.description.en.includes('Ritual');
                         const isFixed = fixedSpellIds.includes(pureId);
                         return (
                            <li key={spellId} className={`text-xs flex justify-between items-center group py-0.5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-md px-2 transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(spellId)}>
                                <div className="flex items-center gap-2 overflow-hidden flex-1">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}>
                                        <SchoolIcon className="w-3 h-3" />
                                    </div>
                                    <span className="truncate font-quattro font-medium pt-0.5">{t(s?.name || '')}</span>
                                    {isRitual && <span className="ml-1 text-[8px] px-1 rounded-sm font-bold uppercase tracking-wider text-amber-500/80 border border-amber-500/30 bg-amber-500/5">R</span>}
                                    {s?.level !== undefined && s.level > 0 && <span className={`ml-auto mr-1 text-[8px] px-1 rounded-sm font-bold uppercase tracking-wider ${isLight ? 'text-gray-400 border border-gray-200' : 'text-grim-600 border border-grim-800'}`}>L{s.level}</span>}
                                </div>
                                {isRemovable && !isFixed ? (
                                    <button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(spellId, false, s?.level || 0, listKey, classId); }} className="text-red-500/60 hover:text-red-500 p-1 transition-colors" title={t({en: "Remove", ru: "Удалить"})}><Minus className="w-3.5 h-3.5" /></button>
                                ) : <Lock className="w-2.5 h-2.5 text-grim-700 opacity-30 mr-1" />}
                            </li>
                         );
                    })}
                </ul>
            </div>
        );
    };

    const getPsionicSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('psionic|')).map(id => id.split('|')[1]);
    const getClockworkSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('clockwork|')).map(id => id.split('|')[1]);
    const getDivineSoulSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('divine_soul|')).map(id => id.split('|')[1]);
    const getArcanumSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('arcanum|')).map(id => id.split('|')[1]);
    const getMagicInitiateSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('magic_initiate|')).map(id => id.split('|')[1]);
    const getMagicalSecretsSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('magical_secrets|')).map(id => id.split('|')[1]);
    const getBardSecretsSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('bard_secrets|')).map(id => id.split('|')[1]);
    const getSpiritSessionSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('spirit_session|')).map(id => id.split('|')[1]);
    
    const getRitualCasterSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('ritual|') || id.startsWith('ritual_caster|')).map(id => id.split('|')[1]);
    const getArcaneInitiateSpells = (cls: CharacterClass) => character.spellsKnown.filter(id => id.startsWith('arcane_initiate|')).map(id => id.split('|')[1]);
    
    const innateSpells = getInnateSpells(character.raceId, character.level);

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="bg-grim-900 border-0 md:border-2 border-grim-gold-700 w-full md:max-w-6xl h-full md:h-[90vh] overflow-hidden rounded-none md:rounded-lg shadow-book relative flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-2 md:p-4 border-b border-grim-700 bg-grim-950 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2 md:gap-3">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-grim-gold-500" />
                        <h2 className="text-sm md:text-lg font-quattro font-bold text-grim-gold-500 uppercase tracking-widest">{t({en: 'Manage Spells', ru: 'Управление Заклинаниями'})}</h2>
                    </div>
                    <button onClick={onClose} className="text-grim-muted hover:text-grim-light"><X className="w-5 h-5 md:w-6 md:h-6" /></button>
                </div>

                <div className="md:hidden flex bg-grim-950 border-b border-grim-800 p-1 gap-1 shrink-0 items-center overflow-x-auto">
                    <button onClick={() => setMobileTab('library')} className={`flex-1 py-2 text-xs font-bold uppercase rounded ${mobileTab === 'library' ? 'bg-grim-800 text-grim-gold-500' : 'text-grim-500'}`}>{t({en: 'Library', ru: 'Библиотека'})}</button>
                    <button onClick={() => setMobileTab('grimoire')} className={`flex-1 py-2 text-xs font-bold uppercase rounded ${mobileTab === 'grimoire' ? 'bg-grim-800 text-grim-gold-500' : 'text-grim-500'}`}>{t({en: 'Grimoire', ru: 'Гримуар'})}</button>
                </div>

                <div className="flex flex-col md:flex-row flex-1 min-h-0">
                    <div className={`${mobileTab === 'library' ? 'flex' : 'hidden'} md:flex flex-col md:w-2/3 border-r border-grim-700 flex-1 min-h-0`}>
                         <SpellManagerSidebar state={state} actions={actions} data={data} ui={ui} hideBadges={true} />
                    </div>
                    
                    <div className={`${mobileTab === 'grimoire' ? 'flex' : 'hidden'} md:flex flex-col md:w-1/3 bg-grim-950 p-3 overflow-y-auto custom-scrollbar`}>
                         {isWizardScribeMode && (
                             <div className={`mb-3 p-2 rounded flex items-center gap-3 ${isLight ? 'bg-amber-100 border border-amber-300 text-amber-900' : 'bg-amber-900/20 border border-amber-500/50 text-amber-500'}`}>
                                 <Book className="w-5 h-5 shrink-0" />
                                 <div className="flex flex-col"><span className="text-xs font-bold uppercase tracking-widest">{t({en: 'Spellbook Mode', ru: 'Режим Книги'})}</span><span className="text-[10px] opacity-80">{t({en: 'Add new spells to your book', ru: 'Добавляйте новые заклинания в книгу'})}</span></div>
                             </div>
                         )}
                         <h3 className="text-sm font-bold text-grim-gold-500 uppercase mb-2 border-b border-grim-800 pb-2 flex items-center gap-2"><BookOpen className="w-4 h-4"/> {t({en: 'My Grimoire', ru: 'Мой Гримуар'})}</h3>
                         
                         {!isWizardScribeMode && innateSpells.length > 0 && (
                            <div className={`mb-3 p-3 rounded-xl border ${isLight ? 'bg-amber-50/50 border-amber-200/50' : 'bg-amber-900/5 border-amber-800/20 shadow-inner'}`}>
                                {renderSpecialList(t({en: 'Innate Spells', ru: 'Врожденная магия'}), innateSpells.map((s: Spell) => s.id), false, undefined, undefined, isLight ? 'text-amber-800' : 'text-amber-500/80')}
                            </div>
                         )}

                         {!isWizardScribeMode && featSpellIds.length > 0 && (
                            <div className={`mb-3 p-3 rounded-xl border ${isLight ? 'bg-indigo-50/50 border-indigo-200/50' : 'bg-indigo-900/5 border-indigo-800/20 shadow-inner'}`}>
                                {renderSpecialList(t({en: 'Feat Spells', ru: 'Заклинания черт'}), featSpellIds, false, undefined, undefined, isLight ? 'text-indigo-800' : 'text-indigo-500/80')}
                            </div>
                         )}
                         
                         {!isWizardScribeMode && invocationSpellIds.length > 0 && !hasWarlockClass && (
                             <div className={`mb-3 p-3 rounded-xl border ${isLight ? 'bg-indigo-50/50 border-indigo-200/50' : 'bg-indigo-900/5 border-indigo-800/20 shadow-inner'}`}>
                                 {renderSpecialList(t({en: 'Eldritch Invocations', ru: 'Тайные Воззвания'}), invocationSpellIds, false, undefined, 'warlock', isLight ? 'text-indigo-800' : 'text-indigo-400/80')}
                             </div>
                         )}
                         
                         {data.castingClasses.map((cls: any, idx: number) => {
                             if (isWizardScribeMode && cls.classId !== 'wizard') return null;
                             const isVirtual = cls.isVirtual;
                             let nameObj = cls.name;
                             if (!isVirtual) { const def = CLASSES.find(c => c.id === cls.classId); nameObj = def ? def.name : { en: cls.classId, ru: cls.classId }; }

                             let ritualAbility = '';
                             let ritualClassName = '';
                             if (cls.classId === 'ritual_caster' && data.ritualCasterConfig) {
                                 const rcId = data.ritualCasterConfig.classId;
                                 const rcDef = CLASSES.find(c => c.id === rcId);
                                 ritualClassName = rcDef ? t(rcDef.name) : rcId;
                                 ritualAbility = rcId === 'wizard' ? 'INT' : (['cleric', 'druid'].includes(rcId) ? 'WIS' : 'CHA');
                             }

                             const spells = getGrimoireGroups(cls);
                             const isWarlock = cls.classId === 'warlock';
                             const isRanger = cls.classId === 'ranger';
                             const isPaladin = cls.classId === 'paladin';
                             const isCleric = cls.classId === 'cleric';
                             const isBard = cls.classId === 'bard';
                             const isAberrant = cls.classId === 'sorcerer' && cls.subclassId === 'aberrant';
                             const isClockwork = cls.classId === 'sorcerer' && cls.subclassId === 'clockwork';
                             const isDivineSoul = cls.classId === 'sorcerer' && cls.subclassId === 'divine_soul';
                             
                             const isArcaneCleric = isCleric && character?.classes.find(c => c.classId === 'cleric')?.subclassId === 'arcane';
                             
                             let ClassIcon = Shield; let iconClass = "text-grim-600";
                             if (isWarlock) { ClassIcon = Eye; iconClass = "text-purple-500"; }
                             else if (isRanger) { ClassIcon = Leaf; iconClass = "text-green-500"; }
                             else if (isPaladin) { ClassIcon = Sun; iconClass = "text-yellow-500"; }
                             else if (cls.classId === 'shadow_touched') { ClassIcon = Ghost; iconClass = "text-gray-500"; }
                             else if (cls.classId === 'fey_touched') { ClassIcon = Sparkles; iconClass = "text-pink-500"; }
                             else if (cls.classId === 'fey_teleportation') { ClassIcon = Sparkles; iconClass = "text-fuchsia-500"; }
                             else if (cls.classId === 'magic_initiate') { ClassIcon = Sparkles; iconClass = "text-amber-500"; }
                             else if (cls.classId === 'ritual_caster') { ClassIcon = BookOpen; iconClass = "text-amber-500"; }
                             else if (cls.classId === 'telekinetic') { ClassIcon = Brain; iconClass = "text-indigo-500"; }
                             else if (cls.classId === 'telepathic') { ClassIcon = Brain; iconClass = "text-indigo-500"; }
                             
                             const druidicSpells = isRanger ? character.spellsKnown.filter(id => !parseSpellId(id).classId && SPELLS.find(s=>s.id===parseSpellId(id).spellId && s.level===0 && s.classes.includes('druid'))) : [];
                             const blessedSpells = isPaladin ? character.spellsKnown.filter(id => !parseSpellId(id).classId && SPELLS.find(s=>s.id===parseSpellId(id).spellId && s.level===0 && s.classes.includes('cleric'))) : [];
                             
                             const psionicSpells = isAberrant ? getPsionicSpells(cls) : [];
                             const clockworkSpells = isClockwork ? getClockworkSpells(cls) : [];
                             const divineSoulSpells = isDivineSoul ? getDivineSoulSpells(cls) : [];
                             const magicInitiateSpells = cls.classId === 'magic_initiate' ? getMagicInitiateSpells(cls) : [];
                             const ritualCasterSpells = cls.classId === 'ritual_caster' ? getRitualCasterSpells(cls) : [];
                             const arcanumSpells = isWarlock && cls.level >= 11 ? getArcanumSpells(cls) : [];
                             const magicalSecretsSpells = isBard ? getMagicalSecretsSpells(cls) : [];
                             const bardSecretsSpells = isBard ? getBardSecretsSpells(cls) : [];
                             const spiritSessionSpells = isBard ? getSpiritSessionSpells(cls) : [];
                             
                             const arcaneInitiateSpells = isArcaneCleric ? getArcaneInitiateSpells(cls) : [];
                             
                             const styles = getClassStyle(cls.classId, isLight);

                              return (
                                 <div key={idx} className={`mb-3 p-3 rounded-xl border transition-all ${styles.bg} ${isLight ? 'border-black/5' : 'border-white/5 shadow-inner'}`}>
                                     <div className="flex items-center gap-2 mb-2 pb-1 border-b border-black/5 dark:border-white/5 justify-between">
                                         <div className="flex items-center gap-2">
                                             <div className={`p-1.5 rounded-lg ${isLight ? 'bg-white/50' : 'bg-black/20'}`}>
                                                 <ClassIcon className={`w-4 h-4 ${iconClass}`} />
                                             </div>
                                             <span className={`text-xs font-cinzel font-bold uppercase tracking-[0.1em] ${styles.headerText}`}>{t(nameObj)}</span>
                                         </div>
                                         {cls.classId === 'ritual_caster' && ritualClassName && (
                                             <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${isLight ? 'bg-white border-amber-300 text-amber-800' : 'bg-grim-900 border-amber-700 text-amber-500'}`}>
                                                 {ritualClassName} • {ritualAbility}
                                             </span>
                                         )}
                                     </div>
                                     
                                     {isWarlock && !isWizardScribeMode && (
                                         <div className="space-y-2">
                                             {renderSpecialList(t({en: 'Pact of the Tome', ru: 'Договор Гримуара'}), character.pactSpells || [], true, 'pactSpells', 'warlock', isLight ? 'text-purple-700' : 'text-purple-400')}
                                             {renderSpecialList(t({en: 'Book of Ancient Secrets', ru: 'Книга Древних Секретов'}), character.bookSecrets || [], true, 'bookSecrets', 'warlock', isLight ? 'text-amber-700' : 'text-amber-500')}
                                             {renderSpecialList(t({en: 'Eldritch Invocations', ru: 'Тайные Воззвания'}), invocationSpellIds, false, undefined, 'warlock', isLight ? 'text-indigo-700' : 'text-indigo-400')}
                                             {arcanumSpells.length > 0 && (
                                                 <div className="mb-4">
                                                     <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 pb-1 border-b border-black/5 dark:border-white/5 flex items-center gap-2 ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
                                                         {t({en: 'Mystic Arcanum', ru: 'Таинственный арканум'})}
                                                     </div>
                                                     <ul className="space-y-1">
                                                         {arcanumSpells.map(spellId => { 
                                                             const s = SPELLS.find(x => x.id === spellId); 
                                                             if (!s) return null; 
                                                             const schoolConf = getSchoolConfig(s.school || '', isLight); 
                                                             const SchoolIcon = schoolConf.icon; 
                                                             return (
                                                                 <li key={spellId} className={`text-xs flex justify-between items-center group py-1 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-md px-2 transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(spellId)}>
                                                                     <div className="flex items-center gap-2 overflow-hidden flex-1">
                                                                         <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}>
                                                                             <SchoolIcon className="w-3 h-3" />
                                                                         </div>
                                                                         <span className="truncate font-quattro font-medium pt-0.5">{t(s.name)}</span>
                                                                         <span className={`ml-auto mr-1 text-[8px] px-1 rounded-sm font-bold uppercase tracking-wider ${isLight ? 'text-indigo-700 border border-indigo-200' : 'text-indigo-400 border border-indigo-900'}`}>{s.level}</span>
                                                                     </div>
                                                                     <button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(spellId, false, s.level, 'spellsKnown', 'arcanum'); }} className="text-red-500/60 hover:text-red-500 p-1" title={t({en: "Remove", ru: "Удалить"})}><Minus className="w-3.5 h-3.5" /></button>
                                                                 </li>
                                                             ); 
                                                         })}
                                                     </ul>
                                                 </div>
                                             )}
                                         </div>
                                     )}
                                     
                                     {isBard && !isWizardScribeMode && (
                                         <div className="space-y-2">
                                             {spiritSessionSpells.length > 0 && renderSpecialList(t({en: 'Spirit Session', ru: 'Духовный обряд'}), spiritSessionSpells.map(id => `spirit_session|${id}`), true, 'spellsKnown', 'spirit_session', isLight ? 'text-indigo-700' : 'text-indigo-400', <Music className="w-2.5 h-2.5" />)}
                                             {magicalSecretsSpells.length > 0 && renderSpecialList(t({en: 'Additional Magical Secrets', ru: 'Дополнительные тайны магии'}), magicalSecretsSpells.map(id => `magical_secrets|${id}`), true, 'spellsKnown', 'magical_secrets', isLight ? 'text-purple-700' : 'text-purple-400')}
                                             {bardSecretsSpells.length > 0 && renderSpecialList(t({en: 'Magical Secrets', ru: 'Тайны магии'}), bardSecretsSpells.map(id => `bard_secrets|${id}`), true, 'spellsKnown', 'bard_secrets', isLight ? 'text-violet-700' : 'text-violet-400')}
                                         </div>
                                     )}
                                     
                                     {isArcaneCleric && arcaneInitiateSpells.length > 0 && !isWizardScribeMode && renderSpecialList(t({en: 'Arcane Domain', ru: 'Домен Магии'}), arcaneInitiateSpells.map(id => `arcane_initiate|${id}`), true, 'spellsKnown', 'arcane_initiate', isLight ? 'text-indigo-700' : 'text-indigo-400')}
                                     
                                     {isDivineSoul && divineSoulSpells.length > 0 && !isWizardScribeMode && renderSpecialList(t({en: 'Divine Magic', ru: 'Божественная магия'}), divineSoulSpells.map(id => `divine_soul|${id}`), true, 'spellsKnown', 'divine_soul', isLight ? 'text-rose-700' : 'text-rose-400')}
                                     {isAberrant && psionicSpells.length > 0 && !isWizardScribeMode && (
                                         <div className="space-y-2">
                                             <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 pb-1 border-b border-black/5 dark:border-white/5 flex items-center gap-2 ${isLight ? 'text-pink-700' : 'text-pink-400'}`}>{t({en: 'Psionic Spells', ru: 'Псионические заклинания'})}</div>
                                             {Array.from({length: 6}, (_, i) => i).map((lvl) => { 
                                                 const lvlSpells = psionicSpells.filter(spellId => { const s = SPELLS.find(x => x.id === spellId); return s && s.level === lvl; }); 
                                                 if (lvlSpells.length === 0) return null; 
                                                 return (
                                                     <div key={lvl} className="mb-3 last:mb-0">
                                                         <div className="text-[9px] text-grim-500 font-bold uppercase tracking-wider mb-1 pl-1">{lvl === 0 ? 'Cantrip' : `Level ${lvl}`}</div>
                                                         <ul className="space-y-1">
                                                             {lvlSpells.map(spellId => { 
                                                                 const s = SPELLS.find(x => x.id === spellId); 
                                                                 const schoolConf = getSchoolConfig(s?.school || '', isLight); 
                                                                 const SchoolIcon = schoolConf.icon; 
                                                                 return (
                                                                     <li key={spellId} className={`text-xs flex justify-between items-center group py-1 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-md px-2 transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(spellId)}>
                                                                         <div className="flex items-center gap-2 truncate flex-1">
                                                                             <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}>
                                                                                 <SchoolIcon className="w-3 h-3" />
                                                                             </div>
                                                                             <span className="truncate font-quattro font-medium pt-0.5">{t(s?.name || '')}</span>
                                                                         </div>
                                                                         <button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(spellId, false, lvl, 'spellsKnown', 'psionic'); }} className="text-red-500/60 hover:text-red-500 p-1" title={t({en: "Remove", ru: "Удалить"})}><Minus className="w-3.5 h-3.5" /></button>
                                                                     </li>
                                                                 ); 
                                                             })}
                                                         </ul>
                                                     </div>
                                                 ); 
                                             })}
                                         </div>
                                     )}
                                     {isClockwork && clockworkSpells.length > 0 && !isWizardScribeMode && (
                                         <div className="space-y-2">
                                             <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 pb-1 border-b border-black/5 dark:border-white/5 flex items-center gap-2 ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>{t({en: 'Clockwork Spells', ru: 'Заводные заклинания'})}</div>
                                             {Array.from({length: 6}, (_, i) => i).map((lvl) => { 
                                                 const lvlSpells = clockworkSpells.filter(spellId => { const s = SPELLS.find(x => x.id === spellId); return s && s.level === lvl; }); 
                                                 if (lvlSpells.length === 0) return null; 
                                                 return (
                                                     <div key={lvl} className="mb-3 last:mb-0">
                                                         <div className="text-[9px] text-grim-500 font-bold uppercase tracking-wider mb-1 pl-1">{lvl === 0 ? 'Cantrip' : `Level ${lvl}`}</div>
                                                         <ul className="space-y-1">
                                                             {lvlSpells.map(spellId => { 
                                                                 const s = SPELLS.find(x => x.id === spellId); 
                                                                 const schoolConf = getSchoolConfig(s?.school || '', isLight); 
                                                                 const SchoolIcon = schoolConf.icon; 
                                                                 return (
                                                                     <li key={spellId} className={`text-xs flex justify-between items-center group py-1 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-md px-2 transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(spellId)}>
                                                                         <div className="flex items-center gap-2 truncate flex-1">
                                                                             <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}>
                                                                                 <SchoolIcon className="w-3 h-3" />
                                                                             </div>
                                                                             <span className="truncate font-quattro font-medium pt-0.5">{t(s?.name || '')}</span>
                                                                         </div>
                                                                         <button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(spellId, false, lvl, 'spellsKnown', 'clockwork'); }} className="text-red-500/60 hover:text-red-500 p-1" title={t({en: "Remove", ru: "Удалить"})}><Minus className="w-3.5 h-3.5" /></button>
                                                                     </li>
                                                                 ); 
                                                             })}
                                                         </ul>
                                                     </div>
                                                 ); 
                                             })}
                                         </div>
                                     )}
                                     {isRanger && druidicSpells.length > 0 && !isWizardScribeMode && renderSpecialList(t({en: 'Druidic Warrior', ru: 'Воин-друид'}), druidicSpells.map((id:string) => parseSpellId(id).spellId), true, undefined, 'ranger', isLight ? 'text-green-700' : 'text-green-500')}
                                     {isPaladin && blessedSpells.length > 0 && !isWizardScribeMode && renderSpecialList(t({en: 'Blessed Warrior', ru: 'Благословенный воин'}), blessedSpells.map((id:string) => parseSpellId(id).spellId), true, undefined, 'paladin', isLight ? 'text-yellow-700' : 'text-yellow-500')}
                                     
                                     {cls.classId === 'magic_initiate' && magicInitiateSpells.length > 0 && !isWizardScribeMode && (
                                         <ul className="space-y-1 mb-2">
                                             {magicInitiateSpells.map((spellId: string) => {
                                                  const { spellId: pureId } = parseSpellId(spellId);
                                                  const s = SPELLS.find(x => x.id === pureId);
                                                  if (!s) return null;
                                                  const schoolConf = getSchoolConfig(s.school || '', isLight);
                                                  const SchoolIcon = schoolConf.icon;
                                                  return (
                                                     <li key={spellId} className={`text-xs flex justify-between items-center group py-1.5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-md px-2 transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(spellId)}>
                                                         <div className="flex items-center gap-2 overflow-hidden flex-1">
                                                             <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}>
                                                                 <SchoolIcon className="w-3 h-3" />
                                                             </div>
                                                             <span className="truncate font-quattro font-medium pt-0.5">{t(s.name)}</span>
                                                         </div>
                                                         <button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(spellId, false, s.level || 0, 'spellsKnown', 'magic_initiate'); }} className="text-red-500/60 hover:text-red-500 p-1" title={t({en: "Remove", ru: "Удалить"})}><Minus className="w-3.5 h-3.5" /></button>
                                                     </li>
                                                  );
                                             })}
                                         </ul>
                                     )}

                                     {cls.classId === 'ritual_caster' && ritualCasterSpells.length > 0 && !isWizardScribeMode && (
                                         <ul className="space-y-1 mb-2">
                                             {ritualCasterSpells.map((spellId: string) => {
                                                  const { spellId: pureId } = parseSpellId(spellId);
                                                  const s = SPELLS.find(x => x.id === pureId);
                                                  if (!s) return null;
                                                  const schoolConf = getSchoolConfig(s.school || '', isLight);
                                                  const SchoolIcon = schoolConf.icon;
                                                  return (
                                                     <li key={spellId} className={`text-xs flex justify-between items-center group py-1.5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-md px-2 transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(spellId)}>
                                                         <div className="flex items-center gap-2 overflow-hidden flex-1">
                                                             <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}>
                                                                 <SchoolIcon className="w-3 h-3" />
                                                             </div>
                                                             <span className="truncate font-quattro font-medium pt-0.5">{t(s.name)}</span>
                                                             <span className="ml-1 text-[8px] px-1 rounded-sm font-bold uppercase tracking-wider text-amber-500/80 border border-amber-500/30 bg-amber-500/5">R</span>
                                                         </div>
                                                         <button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(spellId, false, s.level || 0, 'spellsKnown', 'ritual_caster'); }} className="text-red-500/60 hover:text-red-500 p-1" title={t({en: "Remove", ru: "Удалить"})}><Minus className="w-3.5 h-3.5" /></button>
                                                     </li>
                                                  );
                                             })}
                                         </ul>
                                     )}
                                     
                                     <div className="space-y-2">
                                         {Array.from({length: 10}, (_, i) => i).map((lvl: number) => {
                                             if (cls.classId === 'ritual_caster' || cls.classId === 'magic_initiate') return null;
                                             
                                             const spellsAtLevel = spells.filter((s: any) => (s.level || 0) === lvl);
                                             if (spellsAtLevel.length === 0) return null;
                                             return (
                                                 <div key={lvl} className="mb-1 last:mb-0">
                                                     <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 pb-1 border-b border-black/5 dark:border-white/5 opacity-70 pl-1 ${isLight ? 'text-gray-600' : 'text-grim-400'}`}>{lvl === 0 ? 'Cantrips' : `Level ${lvl}`}</div>
                                                     <ul className="space-y-0.5">
                                                         {spellsAtLevel.map((s: any) => {
                                                             const schoolConf = getSchoolConfig(s.school, isLight); const SchoolIcon = schoolConf.icon; const isRitual = s.components.includes('R') || s.description.en.includes('Ritual'); const isAuto = actions.isAutoPreparedSpell(s.name.en, cls.classId);
                                                             const isFixedFeatSpell = (cls.classId === 'shadow_touched' && s.name.en === 'Invisibility') || 
                                                                                    (cls.classId === 'fey_touched' && s.name.en === 'Misty Step') || 
                                                                                    (cls.classId === 'fey_teleportation' && s.name.en === 'Misty Step');
                                                             
                                                             const isReaper = character.spellsKnown.includes(`reaper|${s.id}`);
                                                             const isAcolyte = character.spellsKnown.includes(`acolyte_of_nature|${s.id}`);

                                                             return (<li key={s.uniqueId || s.id} className={`text-xs flex justify-between items-center group py-0.5 px-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors ${isLight ? 'text-gray-800' : 'text-grim-light'}`} onClick={() => handleSpellClick(s.id)}>
                                                                 <div className="flex items-center gap-2 truncate flex-1">
                                                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${schoolConf.color} opacity-60`}><SchoolIcon className="w-3 h-3" /></div>
                                                                    <span className={`truncate font-quattro font-medium pt-0.5 ${isAuto || isFixedFeatSpell ? (isLight ? styles.headerText : 'text-grim-gold-500') : ''}`}>{t(s.name)}</span>
                                                                    {isRitual && <span className="ml-1 text-[8px] px-1 rounded-sm font-bold uppercase tracking-wider text-amber-500/80 border border-amber-500/30 bg-amber-500/5">R</span>}
                                                                 </div>
                                                                 {!isAuto && !isFixedFeatSpell ? (<button onClick={(e) => { e.stopPropagation(); actions.toggleSpell(s.id, false, lvl, undefined, cls.classId); }} className="text-red-500/40 hover:text-red-500 p-1 transition-all" title={t({en: 'Remove', ru: 'Удалить'})}><Minus className="w-3.5 h-3.5" /></button>) : <Lock className="w-3 h-3 text-grim-700 opacity-30 mr-1" />}
                                                             </li>);
                                                         })}
                                                     </ul>
                                                 </div>
                                             );
                                         })}
                                     </div>
                                 </div>
                             );
                         })}
                         {data.castingClasses.length === 0 && !invocationSpellIds.length && !featSpellIds.length && !data.hasShadowTouched && !data.hasFeyTouched && !data.hasFeyTeleportation && !data.magicInitiateConfig && <div className="text-center text-grim-600 italic mt-10">{t({en: 'No spellcasting classes found.', ru: 'Классы заклинателей не найдены.'})}</div>}
                    </div>
                </div>
            </div>
        </div>,
        portalContainer
    );
};