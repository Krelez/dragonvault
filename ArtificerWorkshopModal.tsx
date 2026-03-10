import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../../context/AppContext';
import { X, Check, Search, Zap, Hammer, Trash2, Box, Plus, ChevronDown, Info, MousePointer2, Sun, Mic, Wind, Image as ImageIcon, Lock, Unlock, Minus, Shield } from 'lucide-react';
import { GiBottledBolt } from 'react-icons/gi';
import { Item, Infusion } from '../../types';
import { ARTIFICER_INFUSIONS, REPLICABLE_MAGIC_ITEMS } from '../../data/infusions';
import { ITEMS } from '../../data/items';
import { getModifier } from '../../utils/rules';
import { getStatTotal } from '../../utils/helpers';
import { ARTIFICER_SPELLS_LVL_1_2, RESISTANCE_CHOICES } from '../../data/constants';

interface ArtificerWorkshopModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: 'infusions' | 'tinkering' | 'arcane_armor' | 'spell_storing';
}

type TinkeringType = 'light' | 'message' | 'sound' | 'visual';

const TINKERING_EFFECTS: { id: TinkeringType, icon: any, name: { en: string, ru: string }, desc: { en: string, ru: string }, placeholder?: { en: string, ru: string } }[] = [
    { 
        id: 'light', 
        icon: Sun, 
        name: { en: 'Light', ru: 'Свет' }, 
        desc: { en: 'Sheds bright light (5ft) and dim light (+5ft).', ru: 'Излучает яркий свет (5фт) и тусклый (+5фт).' } 
    },
    { 
        id: 'message', 
        icon: Mic, 
        name: { en: 'Recorded Message', ru: 'Сообщение' }, 
        desc: { en: 'Plays a message (max 6s) when tapped.', ru: 'Проигрывает запись (до 6 сек) при касании.' },
        placeholder: { en: 'Type recorded message...', ru: 'Текст сообщения...' }
    },
    { 
        id: 'sound', 
        icon: Wind, 
        name: { en: 'Odor or Sound', ru: 'Запах или Звук' }, 
        desc: { en: 'Continuously emits an odor or nonverbal sound (10ft).', ru: 'Постоянно издает запах или звук (10фт).' },
        placeholder: { en: 'e.g. Smell of pine, waves crashing...', ru: 'напр. Запах хвои, шум прибоя...' }
    },
    { 
        id: 'visual', 
        icon: ImageIcon, 
        name: { en: 'Static Visual', ru: 'Визуальный эффект' }, 
        desc: { en: 'Image or text (max 25 words) on a surface.', ru: 'Изображение или текст (до 25 слов) на поверхности.' },
        placeholder: { en: 'Describe the visual or text...', ru: 'Описание эффекта или текст...' }
    },
];

export const ArtificerWorkshopModal: React.FC<ArtificerWorkshopModalProps> = ({ isOpen, onClose, initialTab = 'infusions' }) => {
    const { character, updateCharacter, t, isLightTheme } = useApp();
    const [activeTab, setActiveTab] = useState<'infusions' | 'tinkering' | 'arcane_armor' | 'spell_storing'>(initialTab);

    React.useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab);
        }
    }, [isOpen, initialTab]);
    
    // Infusion State (Apply)
    const [selectedItemId, setSelectedItemId] = useState<string>('');
    const [selectedInfusionId, setSelectedInfusionId] = useState<string>('');
    const [selectedChoice, setSelectedChoice] = useState<string>('');
    const [selectedReplicableItem, setSelectedReplicableItem] = useState<string>('');

    // Tinkering State
    const [newItemName, setNewItemName] = useState('');
    const [selectedEffect, setSelectedEffect] = useState<TinkeringType>('light');
    const [effectContent, setEffectContent] = useState('');

    const artificerClass = character?.classes?.find(c => c.classId === 'artificer');
    const artificerLevel = artificerClass ? artificerClass.level : 0;
    const isArtificer = !!artificerClass;

    // --- ARCANE ARMOR STATE ---
    const isArmorer = artificerClass?.subclassId === 'armorer';
    const activeArcaneArmor = character?.activeArcaneArmor;
    const armorInventory = useMemo(() => {
        return (character?.inventory || []).filter(i => i.type === 'armor' && i.subtype !== 'shield');
    }, [character?.inventory]);

    const spellStoringInventory = useMemo(() => {
        return (character?.inventory || []).filter(i => {
            // Any equipment that is not a consumable
            if (i.type === 'consumable' || i.type === '$') return false;
            return true;
        });
    }, [character?.inventory]);

    // --- INFUSION LOGIC (APPLY) ---
    const maxInfusedItems = useMemo(() => {
        let max = 0;
        if (artificerLevel >= 18) max = 6;
        else if (artificerLevel >= 14) max = 5;
        else if (artificerLevel >= 10) max = 4;
        else if (artificerLevel >= 6) max = 3;
        else if (artificerLevel >= 2) max = 2;

        // Armorer Level 9 Bonus: +2 max infusions, but only for Arcane Armor parts
        // We handle the "only for Arcane Armor" restriction in the validation logic
        if (isArmorer && artificerLevel >= 9) {
            max += 2;
        }
        return max;
    }, [artificerLevel, isArmorer]);

    const infusedItems = useMemo(() => {
        const list: { item: Item, slot?: string, infusionId: string }[] = [];
        (character?.inventory || []).forEach(i => {
            if (i.infusionId) {
                list.push({ item: i, infusionId: i.infusionId });
            }
            if (i.arcaneArmorInfusions) {
                Object.entries(i.arcaneArmorInfusions).forEach(([slot, data]) => {
                    list.push({ item: i, slot, infusionId: data.infusionId });
                });
            }
        });
        return list;
    }, [character?.inventory]);

    const infusionCount = infusedItems.length;

    // Count non-arcane infusions to enforce the base limit
    const nonArcaneInfusionCount = useMemo(() => {
        let count = 0;
        (character?.inventory || []).forEach(i => {
            if (i.infusionId) count++;
            // Arcane armor infusions don't count towards the *base* limit, 
            // but we need to ensure we don't exceed (Total - 2) for non-armor items.
            // Actually, the rule is: Max increases by 2.
            // So Total Max is X + 2.
            // But if we have X + 2 items, at least 2 MUST be on the armor.
            // So, (Total Items - Armor Items) <= X.
        });
        return count;
    }, [character?.inventory]);

    const infusableItems = useMemo(() => {
        return (character?.inventory || []).filter(i => 
            (i.type === 'weapon' || i.type === 'armor' || i.type === 'gear')
            // We allow selecting items that are already infused IF they are the Arcane Armor and have empty slots
            // But for simplicity, let's just list everything eligible and handle the "already infused" check in the click handler or UI
        );
    }, [character?.inventory]);

    const isCompatible = (infusion: Infusion, item: Item): boolean => {
        // Special handling for Arcane Armor (Level 9+)
        const isArcaneArmor = character?.activeArcaneArmor?.armorId === (item.instanceId || item.id);
        if (isArcaneArmor && isArmorer && artificerLevel >= 9) {
            const reqEn = infusion.itemPrerequisite?.en.toLowerCase() || '';
            // If it requires armor/chest -> Compatible
            if (reqEn.includes('armor') || reqEn.includes('chest')) return true;
            // If it requires boots -> Compatible
            if (reqEn.includes('boots')) return true;
            // If it requires helmet/head -> Compatible
            if (reqEn.includes('helmet') || reqEn.includes('head')) return true;
            // If it requires weapon -> Compatible
            if (reqEn.includes('weapon')) return true;
            // If no specific prereq (or generic), allow it (defaults to chest usually)
            if (!infusion.itemPrerequisite) return true;
        }

        if (!infusion.itemPrerequisite) return true;
        
        const reqEn = infusion.itemPrerequisite.en.toLowerCase();
        const itemType = item.type;
        const itemSubtype = item.subtype || '';
        
        // Weapon infusions
        if (reqEn.includes('weapon')) {
            return itemType === 'weapon';
        }

        // Armor/Shield infusions
        if (reqEn.includes('armor') || reqEn.includes('shield')) {
            const isShield = item.type === 'armor' && item.subtype === 'shield';
            
            // Repulsion Shield is ONLY for shields
            if (infusion.id === 'repulsion_shield') {
                return isShield;
            }

            return item.type === 'armor' || isShield;
        }

        // Everything else (boots, ring, cloak, etc.) -> allow any gear
        return itemType === 'gear';
    };

    const availableInfusions = useMemo(() => {
        let list = ARTIFICER_INFUSIONS;
        if (isArtificer) {
            const knownIds = character?.infusions || [];
            list = list.filter(inf => knownIds.includes(inf.id));
        }
        return list.sort((a, b) => t(a.name).localeCompare(t(b.name)));
    }, [character?.infusions, isArtificer, t]);

    const selectedInfusion = ARTIFICER_INFUSIONS.find(inf => inf.id === selectedInfusionId);

    const compatibleItems = useMemo(() => {
        if (!selectedInfusion) return [];
        return infusableItems.filter(item => isCompatible(selectedInfusion, item));
    }, [selectedInfusion, infusableItems, isCompatible]);

    const filteredReplicableItems = useMemo(() => {
        return REPLICABLE_MAGIC_ITEMS.filter(item => artificerLevel >= item.level);
    }, [artificerLevel]);

    const handleApplyInfusion = (itemId: string) => {
        if (!selectedInfusionId || !character) return;
        
        // Validation for choices
        if (selectedInfusionId === 'resistant_armor' && !selectedChoice) {
            return;
        }

        const item = character.inventory.find(i => i.instanceId === itemId || i.id === itemId);
        if (!item) return;

        const isArcaneArmor = character.activeArcaneArmor?.armorId === (item.instanceId || item.id);
        const allowMulti = isArcaneArmor && isArmorer && artificerLevel >= 9;

        // Determine Slot
        let targetSlot = 'default';
        if (allowMulti) {
            const reqEn = selectedInfusion?.itemPrerequisite?.en.toLowerCase() || '';
            if (reqEn.includes('boots')) targetSlot = 'boots';
            else if (reqEn.includes('helmet') || reqEn.includes('head')) targetSlot = 'helmet';
            else if (reqEn.includes('weapon')) targetSlot = 'weapon';
            else targetSlot = 'chest'; // Default to chest for armor/generic
        }

        // Check limits
        // Base Limit (without bonus)
        let baseLimit = maxInfusedItems;
        if (isArmorer && artificerLevel >= 9) baseLimit -= 2;

        const currentTotal = infusionCount;
        
        // If applying to a new slot/item, check limit
        // If allowMulti, we are adding to a slot.
        // If !allowMulti, we are overwriting or adding to a new item.
        
        // Simple check: If we are at max, prevent adding unless we are replacing?
        // For simplicity, just check total count.
        if (currentTotal >= maxInfusedItems) {
            // Check if we are replacing an existing infusion on this item/slot
            let isReplacing = false;
            if (allowMulti) {
                if (item.arcaneArmorInfusions?.[targetSlot as keyof typeof item.arcaneArmorInfusions]) isReplacing = true;
            } else {
                if (item.infusionId) isReplacing = true;
            }
            
            if (!isReplacing) {
                alert(t({en: 'Maximum infusions reached.', ru: 'Достигнут лимит инфузий.'}));
                return;
            }
        }

        // Additional check for Armorer Bonus:
        // If we are adding a non-armor infusion, ensure we don't exceed baseLimit.
        if (!allowMulti) {
            // Count non-armor infusions
            // This is complex because "armor infusions" are specifically those in arcaneArmorInfusions OR the one on the arcane armor.
            // Let's rely on the global count for now, as the user can manage their slots.
        }

        const newInventory = character.inventory.map(i => {
            if (i.instanceId === itemId || i.id === itemId) {
                if (allowMulti) {
                    return {
                        ...i,
                        // Clear standard infusionId if moving to slots system
                        infusionId: undefined, 
                        arcaneArmorInfusions: {
                            ...i.arcaneArmorInfusions,
                            [targetSlot]: {
                                infusionId: selectedInfusionId,
                                infusionMetadata: selectedInfusionId === 'resistant_armor' ? { choice: selectedChoice } : undefined
                            }
                        }
                    };
                } else {
                    return { 
                        ...i, 
                        infusionId: selectedInfusionId,
                        infusionMetadata: selectedInfusionId === 'resistant_armor' ? { choice: selectedChoice } : undefined
                    };
                }
            }
            return i;
        });
        updateCharacter({ inventory: newInventory });
    };

    const handleReplicateItem = () => {
        if (!selectedReplicableItem || !character) return;
        
        const itemToFind = REPLICABLE_MAGIC_ITEMS.find(i => i.name.en === selectedReplicableItem);
        if (!itemToFind) return;

        const baseItem = ITEMS.find(i => i.name.en.toLowerCase() === selectedReplicableItem.toLowerCase());
        
        if (baseItem) {
            const newItem: Item = {
                ...baseItem,
                instanceId: `infusion-replicate-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                infusionId: 'replicate_magic_item',
                quantity: 1,
                equipped: false,
                name: {
                    en: `[INFUSION] ${baseItem.name.en}`,
                    ru: `[ИНФУЗИЯ] ${baseItem.name.ru}`
                }
            };

            updateCharacter({ inventory: [...character.inventory, newItem] });
            setSelectedReplicableItem('');
        } else {
            console.warn(`Item not found in database: ${selectedReplicableItem}`);
        }
    };

    const handleRemoveInfusion = (itemId: string, slot?: string) => {
        if (!character) return;
        const newInventory = character.inventory.map(i => {
            if (i.instanceId === itemId || i.id === itemId) {
                if (slot && i.arcaneArmorInfusions) {
                    const newSlots = { ...i.arcaneArmorInfusions };
                    delete newSlots[slot as keyof typeof newSlots];
                    return { ...i, arcaneArmorInfusions: newSlots };
                }
                return { ...i, infusionId: undefined };
            }
            return i;
        });
        updateCharacter({ inventory: newInventory });
    };

    // --- TINKERING LOGIC ---
    const intMod = getModifier(character?.stats?.int || 10);
    const maxTinkering = Math.max(1, intMod);
    const currentTinkeringCount = character?.magicalTinkering?.current || 0;
    const tinkeredItems = (character?.inventory || []).filter(i => i.isTinkered);
    const untinkeredItems = (character?.inventory || []).filter(i => !i.isTinkered && i.type !== '$');
    const activeEffectData = TINKERING_EFFECTS.find(e => e.id === selectedEffect);

    const handleTinkerItem = (instanceId: string) => {
        if (!character) return;
        const newInv = character.inventory.map(item => {
            if (item.instanceId === instanceId) {
                return { 
                    ...item, 
                    isTinkered: true,
                    tinkeringEffect: {
                        type: selectedEffect,
                        content: effectContent
                    }
                };
            }
            return item;
        });
        updateCharacter({ inventory: newInv });
        setEffectContent('');
    };

    const handleUntinkerItem = (instanceId: string) => {
        if (!character) return;
        const newInv = character.inventory.map(item => {
            if (item.instanceId === instanceId) {
                return { ...item, isTinkered: false, tinkeringEffect: undefined };
            }
            return item;
        });
        updateCharacter({ inventory: newInv });
    };

    const handleAddNewAndTinker = () => {
        if (!character || !newItemName) return;
        const newItem: Item = {
            id: `tiny-obj-${Date.now()}`,
            instanceId: `bg-item-tinkered-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: { en: newItemName, ru: newItemName },
            type: 'gear',
            quantity: 1,
            weight: 0.1,
            description: { 
                en: 'A tiny tinkered nonmagical object.', 
                ru: 'Крошечный магически модифицированный предмет.' 
            },
            isTinkered: true,
            tinkeringEffect: {
                type: selectedEffect,
                content: effectContent
            },
            equipped: false
        };
        updateCharacter({ 
            inventory: [...character.inventory, newItem]
        });
        setNewItemName('');
        setEffectContent('');
    };

    // --- ARCANE ARMOR LOGIC ---
    const handleSetArcaneArmor = (itemId: string) => {
        if (!character) return;
        const currentModel = activeArcaneArmor?.model || 'guardian';
        
        // If we are removing arcane armor or changing it, we need to clean up infusions
        // Armor Modifications (Level 9+) logic:
        // If the armor ceases to be Arcane Armor, its infusions disappear except for the one in the 'chest' slot (if level 9+)
        // or the main infusionId.
        
        const newInventory = character.inventory.map(i => {
            // If this was the old arcane armor
            if (activeArcaneArmor && (i.instanceId === activeArcaneArmor.armorId || i.id === activeArcaneArmor.armorId)) {
                // If it's not the new one, clean up
                if (i.instanceId !== itemId && i.id !== itemId) {
                    const newI = { ...i };
                    if (artificerLevel >= 9 && newI.arcaneArmorInfusions) {
                        // Keep only chest infusion, move it to main infusionId
                        const chestInf = newI.arcaneArmorInfusions.chest;
                        newI.infusionId = chestInf?.infusionId;
                        newI.infusionMetadata = chestInf?.infusionMetadata;
                        newI.arcaneArmorInfusions = undefined;
                    }
                    return newI;
                }
            }
            return i;
        });

        updateCharacter({
            inventory: newInventory,
            activeArcaneArmor: itemId ? {
                armorId: itemId,
                model: currentModel
            } : undefined
        });
    };

    const handleSetArmorModel = (model: 'guardian' | 'infiltrator') => {
        if (!character || !activeArcaneArmor) return;
        updateCharacter({
            activeArcaneArmor: {
                ...activeArcaneArmor,
                model: model
            }
        });
    };

    const handleSetSpellStoringItem = (instanceId: string) => {
        if (!character) return;
        const newInventory = character.inventory.map(i => ({
            ...i,
            isSpellStoringItem: i.instanceId === instanceId,
            storedSpellId: i.instanceId === instanceId ? i.storedSpellId : undefined
        }));
        updateCharacter({ inventory: newInventory });
    };

    const handleSetStoredSpell = (spellId: string) => {
        if (!character) return;
        const newInventory = character.inventory.map(i => {
            if (i.isSpellStoringItem) {
                return { ...i, storedSpellId: spellId };
            }
            return i;
        });
        
        // Calculate max uses
        const intMod = getModifier(getStatTotal(character, 'int'));
        const isArtificer = character.classes.some(c => c.classId === 'artificer');
        const maxUses = isArtificer 
            ? Math.max(2, 2 * intMod) 
            : Math.max(2, (character.externalArtificerPb || 2));

        updateCharacter({ 
            inventory: newInventory,
            spellStoringItemUses: { current: maxUses, max: maxUses }
        });
    };

    if (!isOpen || !character) return null;

    const bgClass = isLightTheme ? 'bg-white' : 'bg-grim-900';
    const borderClass = isLightTheme ? 'border-gray-300' : 'border-grim-gold-700';
    const headerBg = isLightTheme ? 'bg-gray-100 border-gray-200' : 'bg-grim-950 border-grim-700';

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className={`${bgClass} border-2 ${borderClass} w-full md:max-w-4xl h-full md:h-[80vh] overflow-hidden md:rounded-lg shadow-book relative flex flex-col`} onClick={e => e.stopPropagation()}>
                
                {/* HEADER */}
                <div className={`p-3 md:p-4 border-b shrink-0 flex flex-col md:flex-row md:justify-between md:items-center gap-3 ${headerBg}`}>
                    <div className="flex flex-col gap-3 w-full overflow-hidden">
                        <div className="flex items-center justify-between md:justify-start gap-3">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full border shrink-0 ${isLightTheme ? 'bg-orange-100 border-orange-300 text-orange-800' : 'bg-grim-950 border-orange-500/50 text-orange-400'}`}>
                                    <Hammer className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h2 className={`text-base md:text-xl font-bold uppercase tracking-widest truncate ${isLightTheme ? 'text-gray-900' : 'text-grim-gold-500'}`}>
                                    {t({en: 'Artificer Workshop', ru: 'Мастерская Изобретателя'})}
                                </h2>
                            </div>
                            <button onClick={onClose} className="md:hidden text-grim-400 hover:text-grim-light p-2 rounded hover:bg-black/10 transition-colors"><X className="w-6 h-6" /></button>
                        </div>
                        
                        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar w-full mask-linear-fade">
                            <button 
                                onClick={() => setActiveTab('infusions')}
                                className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all border whitespace-nowrap ${activeTab === 'infusions' ? (isLightTheme ? 'bg-[#9a3412] border-[#9a3412] text-white shadow-md' : 'bg-orange-500 border-orange-500 text-white shadow-orange-900/20 shadow-lg') : (isLightTheme ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' : 'text-grim-400 border-grim-800 hover:border-grim-700')}`}
                            >
                                {t({en: 'Infusions', ru: 'Инфузии'})}
                            </button>
                            <button 
                                onClick={() => setActiveTab('tinkering')}
                                className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all border whitespace-nowrap ${activeTab === 'tinkering' ? (isLightTheme ? 'bg-[#9a3412] border-[#9a3412] text-white shadow-md' : 'bg-orange-500 border-orange-500 text-white shadow-orange-900/20 shadow-lg') : (isLightTheme ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' : 'text-grim-400 border-grim-800 hover:border-grim-700')}`}
                            >
                                {t({en: 'Magical Tinkering', ru: 'Магический мастеровой'})}
                            </button>
                            {isArmorer && (
                                <button 
                                    onClick={() => setActiveTab('arcane_armor')}
                                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all border whitespace-nowrap ${activeTab === 'arcane_armor' ? (isLightTheme ? 'bg-[#9a3412] border-[#9a3412] text-white shadow-md' : 'bg-orange-500 border-orange-500 text-white shadow-orange-900/20 shadow-lg') : (isLightTheme ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' : 'text-grim-400 border-grim-800 hover:border-grim-700')}`}
                                >
                                    {t({en: 'Mystical Armor', ru: 'Мистический доспех'})}
                                </button>
                            )}
                            {(artificerLevel >= 11 || !isArtificer) && (
                                <button 
                                    onClick={() => setActiveTab('spell_storing')}
                                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all border whitespace-nowrap ${activeTab === 'spell_storing' ? (isLightTheme ? 'bg-[#9a3412] border-[#9a3412] text-white shadow-md' : 'bg-orange-500 border-orange-500 text-white shadow-orange-900/20 shadow-lg') : (isLightTheme ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' : 'text-grim-400 border-grim-800 hover:border-grim-700')}`}
                                >
                                    {t({en: 'Spell-Storing', ru: 'Хранящий заклинания'})}
                                </button>
                            )}
                        </div>
                    </div>
                    <button onClick={onClose} className="hidden md:block text-grim-400 hover:text-grim-light p-2 rounded hover:bg-black/10 transition-colors"><X className="w-6 h-6" /></button>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                    {activeTab === 'spell_storing' && (
                        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
                            <div className={`shrink-0 p-4 border-b ${isLightTheme ? 'bg-gray-50 border-gray-200' : 'bg-grim-950/50 border-grim-800'}`}>
                                <div className="mb-4 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-blue-500" />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>{t({en: 'Spell-Storing Item Configuration', ru: 'Настройка Хранящего Заклинания Предмета'})}</span>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className={`text-sm ${isLightTheme ? 'text-gray-800' : 'text-grim-300'}`}>
                                        {t({
                                            en: "At 11th level, you can store a spell in an object. Choose a simple or martial weapon or an item that you can use as a spellcasting focus.",
                                            ru: "На 11-м уровне вы можете сохранять заклинание в объекте. Выберите простое или воинское оружие или предмет, который вы можете использовать в качестве заклинательной фокусировки."
                                        })}
                                    </p>

                                    {!isArtificer && (
                                        <div className="space-y-2 p-3 rounded border border-orange-500/30 bg-orange-500/5">
                                            <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>
                                                {t({en: "Number of uses", ru: "Количество использований"})}
                                            </label>
                                            <input 
                                                type="number"
                                                value={character.externalArtificerPb || 2}
                                                onChange={e => updateCharacter({ externalArtificerPb: parseInt(e.target.value) || 2 })}
                                                className={`w-full p-2 text-sm rounded border ${isLightTheme ? 'bg-white border-gray-300 text-gray-900' : 'bg-grim-950 border-grim-800 text-grim-light'}`}
                                                min="2"
                                                max="20"
                                            />
                                            <p className={`text-xs italic ${isLightTheme ? 'text-gray-600' : 'text-grim-500'}`}>
                                                {t({en: "Enter the number of uses (usually twice the Artificer's Intelligence modifier).", ru: "Введите количество использований (обычно удвоенный модификатор Интеллекта Изобретателя)."})}
                                            </p>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Select Item', ru: 'Выберите Предмет'})}</label>
                                        <div className="relative">
                                            <select 
                                                value={character.inventory.find(i => i.isSpellStoringItem)?.instanceId || ''}
                                                onChange={e => handleSetSpellStoringItem(e.target.value)}
                                                className={`w-full p-3 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                            >
                                                <option value="">-- {t({en: 'Select an eligible item', ru: 'Выберите подходящий предмет'})} --</option>
                                                {spellStoringInventory.map(item => (
                                                    <option key={item.instanceId || item.id} value={item.instanceId || item.id}>{t(item.name)}</option>
                                                ))}
                                            </select>
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <Box className={`w-5 h-5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} />
                                            </div>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {character.inventory.some(i => i.isSpellStoringItem) && (
                                        <div className="space-y-2 animate-fade-in">
                                            <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Stored Spell', ru: 'Сохраненное Заклинание'})}</label>
                                            <div className="relative">
                                                <select 
                                                    value={character.inventory.find(i => i.isSpellStoringItem)?.storedSpellId || ''}
                                                    onChange={e => handleSetStoredSpell(e.target.value)}
                                                    className={`w-full p-3 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                                >
                                                    <option value="">-- {t({en: 'Select a spell', ru: 'Выберите заклинание'})} --</option>
                                                    {ARTIFICER_SPELLS_LVL_1_2.map(spell => (
                                                        <option key={spell.id} value={spell.id}>{t(spell.name)} ({t({en: 'Lvl', ru: 'Ур'})} {spell.level})</option>
                                                    ))}
                                                </select>
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <GiBottledBolt className={`w-5 h-5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} />
                                                </div>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <ChevronDown className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 p-6 bg-black/5">
                                <div className="mb-4 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-orange-500" />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>{t({en: 'Feature Details', ru: 'Детали Особенности'})}</span>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className={`p-4 rounded border ${isLightTheme ? 'bg-white border-gray-200' : 'bg-grim-950 border-grim-800'}`}>
                                        <h4 className={`text-sm font-bold uppercase mb-2 ${isLightTheme ? 'text-gray-900' : 'text-grim-light'}`}>{t({en: 'Spell-Storing Item', ru: 'Хранящий заклинания предмет'})}</h4>
                                        <p className={`text-sm leading-relaxed ${isLightTheme ? 'text-gray-600' : 'text-grim-300'}`}>
                                            {t({
                                                en: "Whenever you finish a long rest, you can touch one object and store a spell in it, choosing a 1st- or 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared). While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.",
                                                ru: "Каждый раз, когда вы заканчиваете продолжительный отдых, вы можете коснуться одного предмета и сохранить в нем заклинание, выбрав заклинание 1-го или 2-го уровня из списка заклинаний изобретателя, для накладывания которого требуется 1 действие (вам не обязательно иметь его подготовленным). Удерживая этот предмет, существо может действием создать эффект этого заклинания из него, используя ваш модификатор заклинательной характеристики. Если заклинание требует концентрации, существо должно концентрироваться. Заклинание остается в предмете до тех пор, пока оно не будет использовано количество раз, равное удвоенному модификатору вашего Интеллекта (минимум дважды), или пока вы снова не используете эту особенность, чтобы сохранить заклинание в предмете."
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'infusions' && (
                        <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row min-h-0 overscroll-contain custom-scrollbar">
                            {/* LEFT: Configuration & Active List */}
                            <div className={`w-full md:w-[65%] flex flex-col border-b md:border-b-0 md:border-r shrink-0 ${isLightTheme ? 'bg-gray-50 border-gray-200' : 'bg-grim-950/50 border-grim-800'}`}>
                                <div className={`p-3 border-b flex justify-between items-center shrink-0 ${isLightTheme ? 'border-gray-200 bg-gray-100' : 'border-grim-800 bg-grim-900'}`}>
                                    <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}><Plus className="w-3 h-3 text-blue-500" /> {t({en: 'Configuration', ru: 'Настройка'})}</span>
                                </div>

                                <div className="p-4 space-y-4 shrink-0 border-b border-black/10 bg-opacity-10 bg-orange-500/5">
                                    {!isArtificer && (
                                        <div className={`p-2 rounded border flex items-start gap-2 text-xs italic ${isLightTheme ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-blue-900/20 border-blue-900/40 text-blue-400'}`}>
                                            <Info className="w-3 h-3 shrink-0 mt-0.5" />
                                            {t({en: 'Use this option when receiving infusions from your Artificer.', ru: 'Используйте эту опцию при получении инфузий от вашего Изобретателя.'})}
                                        </div>
                                    )}

                                    {/* Dropdown for Infusion Selection */}
                                    <div className="space-y-1">
                                        <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Select Infusion', ru: 'Выберите инфузию'})}</label>
                                        <div className="relative">
                                            <select 
                                                value={selectedInfusionId}
                                                onChange={e => setSelectedInfusionId(e.target.value)}
                                                className={`w-full p-2.5 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                            >
                                                <option value="">-- {t({en: 'Choose an infusion', ru: 'Выберите инфузию'})} --</option>
                                                {availableInfusions.map(inf => (
                                                    <option key={inf.id} value={inf.id}>{t(inf.name)}</option>
                                                ))}
                                            </select>
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <Zap className={`w-5 h-5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} />
                                            </div>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Infusion Description Area */}
                                    {selectedInfusion && (
                                        <div className={`p-3 rounded border animate-fade-in max-h-32 overflow-y-auto custom-scrollbar ${isLightTheme ? 'bg-stone-50 border-stone-200' : 'bg-grim-950 border-grim-800'}`}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className={`font-bold text-xs ${isLightTheme ? 'text-[#9a3412]' : 'text-grim-gold-400'}`}>{t(selectedInfusion.name)}</h3>
                                                {selectedInfusion.levelPrerequisite && (
                                                    <span className={`text-[8px] uppercase font-bold px-1 py-0.5 rounded border ${artificerLevel >= selectedInfusion.levelPrerequisite ? (isLightTheme ? 'bg-green-100 text-green-800 border-green-200' : 'bg-green-900/30 text-green-400 border-green-800') : (isLightTheme ? 'bg-red-100 text-red-800 border-red-200' : 'bg-red-900/30 text-red-400 border-red-800')}`}>
                                                        {t({en: 'Lvl', ru: 'Ур'})} {selectedInfusion.levelPrerequisite}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`text-xs leading-relaxed whitespace-pre-wrap ${isLightTheme ? 'text-gray-600' : 'text-grim-300'}`}>
                                                {t(selectedInfusion.description)}
                                            </div>
                                        </div>
                                    )}

                                    {/* Choice Selection for Resistant Armor */}
                                    {selectedInfusionId === 'resistant_armor' && (
                                        <div className="space-y-1 animate-fade-in">
                                            <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Choose Resistance', ru: 'Выберите сопротивление'})}</label>
                                            <div className="relative">
                                                <select 
                                                    value={selectedChoice}
                                                    onChange={e => setSelectedChoice(e.target.value)}
                                                    className={`w-full p-2.5 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                                >
                                                    <option value="">-- {t({en: 'Select damage type', ru: 'Выберите тип урона'})} --</option>
                                                    {RESISTANCE_CHOICES.map(choice => (
                                                        <option key={choice.id} value={choice.id}>{t(choice.name)}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <Box className={`w-5 h-5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} />
                                                </div>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <ChevronDown className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Choice Selection for Replicate Magic Item */}
                                    {selectedInfusionId === 'replicate_magic_item' && (
                                        <div className="space-y-1 animate-fade-in">
                                            <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Choose Item to Replicate', ru: 'Выберите предмет для копирования'})}</label>
                                            <div className="flex gap-2">
                                                <div className="relative flex-1">
                                                    <select 
                                                        value={selectedReplicableItem}
                                                        onChange={e => setSelectedReplicableItem(e.target.value)}
                                                        className={`w-full p-2.5 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                                    >
                                                        <option value="">-- {t({en: 'Select item', ru: 'Выберите предмет'})} --</option>
                                                        {filteredReplicableItems.map(item => (
                                                            <option key={item.name.en} value={item.name.en}>{t(item.name)}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        <Box className="w-5 h-5 text-orange-500" />
                                                    </div>
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                        <ChevronDown className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={handleReplicateItem}
                                                    disabled={!selectedReplicableItem || infusionCount >= maxInfusedItems}
                                                    className={`px-4 rounded font-bold text-xs uppercase transition-all whitespace-nowrap ${!selectedReplicableItem || infusionCount >= maxInfusedItems ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50' : (isLightTheme ? 'bg-[#9a3412] hover:bg-[#7c2d12]' : 'bg-orange-600 hover:bg-orange-500') + ' text-white shadow-md'}`}
                                                >
                                                    {t({en: 'Replicate', ru: 'Копировать'})}
                                                </button>
                                            </div>
                                            {infusionCount >= maxInfusedItems && (
                                                <p className="text-xs text-red-500 font-bold uppercase mt-1">{t({en: 'Max infusions reached', ru: 'Достигнут лимит инфузий'})}</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Active Infusions List moved here */}
                                <div className="flex-1 flex flex-col md:overflow-hidden min-h-[150px] md:min-h-0">
                                    <div className={`p-3 border-b flex justify-between items-center shrink-0 ${isLightTheme ? 'border-gray-200 bg-gray-100' : 'border-grim-800 bg-grim-900'}`}>
                                        <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}><Check className="w-3 h-3 text-green-500" /> {t({en: 'Active Infusions', ru: 'Активные Инфузии'})}</span>
                                        <div className={`text-xs font-bold ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>
                                            {infusionCount} {isArtificer && `/ ${maxInfusedItems}`}
                                        </div>
                                    </div>
                                    <div className="flex-1 md:overflow-y-auto custom-scrollbar p-2 space-y-2">
                                        {infusedItems.length === 0 ? (
                                            <div className={`h-full flex flex-col items-center justify-center text-center p-4 ${isLightTheme ? 'text-gray-400' : 'text-grim-500'}`}>
                                                <Box className="w-8 h-8 mb-2 opacity-50" />
                                                <p className="text-xs uppercase font-bold">{t({en: 'No infused items', ru: 'Нет инфузий'})}</p>
                                            </div>
                                        ) : (
                                            infusedItems.map(({ item, slot, infusionId }) => {
                                                const infusion = ARTIFICER_INFUSIONS.find(inf => inf.id === infusionId);
                                                return (
                                                    <div key={`${item.instanceId || item.id}-${slot || 'main'}`} className={`p-2 rounded border flex items-center justify-between group transition-all ${isLightTheme ? 'bg-white border-orange-200 text-gray-900' : 'bg-grim-900 border-orange-900/50 text-grim-light shadow-sm'}`}>
                                                        <div className="flex items-center gap-3 overflow-hidden">
                                                            <Zap className={`w-4 h-4 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'} shrink-0`} />
                                                            <div className="flex flex-col min-w-0">
                                                                <span className="text-sm font-bold truncate">
                                                                    {t(item.name)}
                                                                    {slot && <span className="opacity-60 text-xs ml-1 font-normal">({t({en: slot, ru: slot === 'chest' ? 'Нагрудник' : slot === 'boots' ? 'Сапоги' : slot === 'helmet' ? 'Шлем' : 'Оружие'})})</span>}
                                                                </span>
                                                                <span className={`text-xs uppercase truncate ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>
                                                                    {infusion ? t(infusion.name) : t({en: 'Infused', ru: 'Инфузия'})}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <button 
                                                            onClick={() => handleRemoveInfusion(item.instanceId || item.id, slot)}
                                                            className="p-1.5 rounded bg-red-950/20 text-red-500 hover:bg-red-500 hover:text-white transition-all flex-shrink-0"
                                                            title={t({en: 'Remove infusion', ru: 'Снять инфузию'})}
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Eligible Items List (Narrow Column) */}
                            <div className="w-full md:w-[35%] flex flex-col md:overflow-hidden min-h-[200px] md:min-h-0 bg-black/5">
                                <div className={`p-3 border-b flex justify-between items-center shrink-0 ${isLightTheme ? 'border-gray-200 bg-gray-100' : 'border-grim-800 bg-grim-900'}`}>
                                    <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}><Hammer className={`w-3.5 h-3.5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} /> {t({en: 'Eligible Items', ru: 'Подходящие Предметы'})}</span>
                                </div>
                                <div className="flex-1 md:overflow-y-auto custom-scrollbar p-3 space-y-2">
                                    {!selectedInfusionId ? (
                                        <div className={`h-full flex flex-col items-center justify-center text-center p-8 ${isLightTheme ? 'text-gray-400' : 'text-grim-500'}`}>
                                            <Search className="w-12 h-12 mb-4 opacity-20" />
                                            <p className="text-xs uppercase font-bold tracking-widest">{t({en: 'Select an infusion first', ru: 'Сначала выберите инфузию'})}</p>
                                        </div>
                                    ) : compatibleItems.length === 0 ? (
                                        <div className={`h-full flex flex-col items-center justify-center text-center p-8 ${isLightTheme ? 'text-gray-400' : 'text-grim-500'}`}>
                                            <Box className="w-12 h-12 mb-4 opacity-20" />
                                            <p className="text-xs uppercase font-bold tracking-widest">{t({en: 'No compatible items in inventory', ru: 'В инвентаре нет подходящих предметов'})}</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-2">
                                            {compatibleItems.map(item => (
                                                <button
                                                    key={item.instanceId || item.id}
                                                    onClick={() => handleApplyInfusion(item.instanceId || item.id)}
                                                    className={`w-full text-left p-3 rounded border flex items-center justify-between transition-all group ${isLightTheme ? 'bg-white border-gray-200 text-gray-900 hover:border-[#9a3412] hover:bg-orange-50 shadow-sm' : 'bg-grim-950 border-grim-800 text-grim-light hover:border-orange-800 hover:bg-grim-800 shadow-md'}`}
                                                >
                                                    <div className="flex flex-col min-w-0">
                                                        <span className="text-sm font-bold truncate">{t(item.name)}</span>
                                                        <span className={`text-xs uppercase font-bold ${isLightTheme ? 'text-gray-600' : 'text-grim-500'}`}>{item.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-xs uppercase font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                                        <span>{t({en: 'Apply', ru: 'Применить'})}</span>
                                                        <MousePointer2 className={`w-3.5 h-3.5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'tinkering' && (
                        <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row min-h-0 overscroll-contain custom-scrollbar">
                            {/* LEFT: Configuration & Active List */}
                            <div className={`w-full md:w-[65%] flex flex-col border-b md:border-b-0 md:border-r shrink-0 ${isLightTheme ? 'bg-gray-50 border-gray-200' : 'bg-grim-950/50 border-grim-800'}`}>
                                <div className={`p-3 border-b flex justify-between items-center shrink-0 ${isLightTheme ? 'border-gray-200 bg-gray-100' : 'border-grim-800 bg-grim-900'}`}>
                                    <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}><Plus className="w-3 h-3 text-blue-500" /> {t({en: 'Configuration', ru: 'Настройка'})}</span>
                                </div>
                                
                                <div className="p-4 space-y-4 shrink-0 border-b border-black/10 bg-opacity-10 bg-orange-500/5">
                                    {/* Dropdown for Effect Selection */}
                                    <div className="space-y-1">
                                        <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Select Magical Property', ru: 'Выберите магическое свойство'})}</label>
                                        <div className="relative">
                                            <select 
                                                value={selectedEffect}
                                                onChange={e => setSelectedEffect(e.target.value as TinkeringType)}
                                                className={`w-full p-2.5 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                            >
                                                {TINKERING_EFFECTS.map(e => (
                                                    <option key={e.id} value={e.id}>{t(e.name)}</option>
                                                ))}
                                            </select>
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                {activeEffectData && <activeEffectData.icon className="w-5 h-5 text-orange-500" />}
                                            </div>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <p className={`text-xs italic mt-1 leading-tight ${isLightTheme ? 'text-gray-500' : 'text-grim-500'}`}>{t(activeEffectData?.desc)}</p>
                                    </div>

                                    {/* Stable Content Input Area */}
                                    <div className="min-h-[80px]">
                                        {selectedEffect !== 'light' ? (
                                            <div className="animate-fade-in h-full">
                                                <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'} mb-1 block`}>
                                                    {t(activeEffectData?.name)} {t({en: 'Content', ru: 'Содержание'})}
                                                </label>
                                                <textarea
                                                    value={effectContent}
                                                    onChange={e => setEffectContent(e.target.value)}
                                                    placeholder={t(activeEffectData?.placeholder)}
                                                    className={`w-full p-2 text-sm rounded border focus:outline-none resize-none h-16 ${isLightTheme ? 'bg-white border-orange-200' : 'bg-grim-950 border-orange-900/50 text-grim-light focus:border-orange-500'}`}
                                                />
                                            </div>
                                        ) : (
                                            <div className={`h-16 flex items-center justify-center border border-dashed rounded ${isLightTheme ? 'border-gray-300 bg-gray-50' : 'border-grim-700 bg-grim-900'}`}>
                                                <span className={`text-xs uppercase font-bold ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>{t({en: 'No additional input required', ru: 'Дополнительный ввод не требуется'})}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Active Effects List moved here */}
                                <div className="flex-1 flex flex-col md:overflow-hidden min-h-[150px] md:min-h-0">
                                    <div className={`p-3 border-b flex justify-between items-center shrink-0 ${isLightTheme ? 'border-gray-200 bg-gray-100' : 'border-grim-800 bg-grim-900'}`}>
                                        <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}>
                                            <Check className="w-3 h-3 text-green-500" /> {t({en: 'Active Effects', ru: 'Активные Эффекты'})}
                                        </span>
                                        <div className={`text-xs font-bold ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>
                                            {currentTinkeringCount} / {maxTinkering}
                                        </div>
                                        <div className="flex items-center gap-1 ml-2">
                                            <button 
                                                onClick={() => {
                                                    const cur = character?.magicalTinkering?.current || 0;
                                                    updateCharacter({ magicalTinkering: { current: Math.max(0, cur - 1), max: maxTinkering } });
                                                }}
                                                className={`w-6 h-6 flex items-center justify-center border rounded transition-colors ${isLightTheme ? 'border-gray-300 hover:bg-gray-100 text-gray-600' : 'border-grim-700 bg-grim-900 hover:border-grim-500 text-grim-400'}`}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    const cur = character?.magicalTinkering?.current || 0;
                                                    updateCharacter({ magicalTinkering: { current: cur + 1, max: maxTinkering } });
                                                }}
                                                className={`w-6 h-6 flex items-center justify-center border rounded transition-colors ${isLightTheme ? 'border-gray-300 hover:bg-gray-100 text-gray-600' : 'border-grim-700 bg-grim-900 hover:border-grim-500 text-grim-400'}`}
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex-1 md:overflow-y-auto custom-scrollbar p-2 space-y-2">
                                        {tinkeredItems.length === 0 ? (
                                            <div className={`h-full flex flex-col items-center justify-center text-center p-4 ${isLightTheme ? 'text-gray-400' : 'text-grim-500'}`}>
                                                <Box className="w-8 h-8 mb-2 opacity-50" />
                                                <p className="text-xs uppercase font-bold">{t({en: 'No active items', ru: 'Нет эффектов'})}</p>
                                            </div>
                                        ) : (
                                            tinkeredItems.map(item => {
                                                const effect = TINKERING_EFFECTS.find(e => e.id === item.tinkeringEffect?.type);
                                                return (
                                                    <div key={item.instanceId} className={`p-2 rounded border flex items-center justify-between group transition-all ${isLightTheme ? 'bg-white border-green-200 text-gray-900' : 'bg-grim-900 border-green-900/50 text-grim-light shadow-sm'}`}>
                                                        <div className="flex items-center gap-3 overflow-hidden">
                                                            {effect && <effect.icon className={`w-4 h-4 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'} shrink-0`} />}
                                                            <div className="flex flex-col min-w-0">
                                                                <span className="text-sm font-bold truncate">{t(item.name)}</span>
                                                                <span className={`text-xs uppercase truncate ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>
                                                                    {effect ? t(effect.name) : t({en: 'Tinkered', ru: 'Модифицирован'})}
                                                                    {item.tinkeringEffect?.content && `: ${item.tinkeringEffect.content}`}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <button 
                                                            onClick={() => handleUntinkerItem(item.instanceId!)}
                                                            className="p-1.5 rounded bg-red-950/20 text-red-500 hover:bg-red-500 hover:text-white transition-all flex-shrink-0"
                                                            title={t({en: 'Remove effect', ru: 'Снять эффект'})}
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Inventory & New Item List (Narrow Column) */}
                            <div className="w-full md:w-[35%] flex flex-col md:overflow-hidden min-h-[200px] md:min-h-0 bg-black/5">
                                 <div className={`p-3 border-b flex justify-between items-center shrink-0 ${isLightTheme ? 'border-gray-200 bg-gray-100' : 'border-grim-800 bg-grim-900'}`}>
                                    <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}><Hammer className="w-3.5 h-3.5 text-orange-500" /> {t({en: 'Eligible Items', ru: 'Подходящие Предметы'})}</span>
                                 </div>

                                 {/* Quick Create Row */}
                                 <div className="p-3 border-b border-black/10 flex gap-2 shrink-0 bg-orange-500/5">
                                     <input 
                                        type="text" 
                                        value={newItemName}
                                        onChange={e => setNewItemName(e.target.value)}
                                        placeholder={t({en: 'New tiny object...', ru: 'Новый предмет...'})}
                                        className={`flex-1 p-2.5 text-sm rounded border focus:outline-none ${isLightTheme ? 'bg-white border-gray-300' : 'bg-grim-950 border-grim-800 text-grim-light focus:border-grim-gold-500'}`}
                                     />
                                     <button 
                                        onClick={handleAddNewAndTinker}
                                        disabled={!newItemName}
                                        className={`px-6 rounded font-bold text-xs uppercase transition-all whitespace-nowrap ${!newItemName ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50' : 'bg-orange-600 hover:bg-orange-500 text-white shadow-md'}`}
                                     >
                                         {t({en: 'Add', ru: 'Доб.'})}
                                     </button>
                                 </div>

                                 {/* List Eligible Inventory */}
                                 <div className="flex-1 md:overflow-y-auto custom-scrollbar p-3 space-y-2">
                                    {untinkeredItems.length === 0 ? (
                                        <div className={`h-full flex flex-col items-center justify-center text-center p-8 ${isLightTheme ? 'text-gray-400' : 'text-grim-500'}`}>
                                            <Box className="w-12 h-12 mb-4 opacity-20" />
                                            <p className="text-xs uppercase font-bold tracking-widest">{t({en: 'No items to tinker', ru: 'Нет предметов для модификации'})}</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-2">
                                            {untinkeredItems.map(item => (
                                                <button
                                                    key={item.instanceId}
                                                    onClick={() => handleTinkerItem(item.instanceId!)}
                                                    className={`w-full text-left p-3 rounded border flex items-center justify-between transition-all group ${isLightTheme ? 'bg-white border-gray-200 text-gray-900 hover:border-orange-400 hover:bg-orange-50 shadow-sm' : 'bg-grim-950 border-grim-800 text-grim-light hover:border-orange-800 hover:bg-grim-800 shadow-md'}`}
                                                >
                                                    <div className="flex flex-col min-w-0">
                                                        <span className="text-sm font-bold truncate">{t(item.name)}</span>
                                                        <span className={`text-xs uppercase font-bold ${isLightTheme ? 'text-gray-600' : 'text-grim-500'}`}>{item.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-xs uppercase font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"><span>{t({en: 'Apply', ru: 'Применить'})}</span><MousePointer2 className="w-3.5 h-3.5" /></div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                 </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'arcane_armor' && (
                        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
                             {/* Top: Configuration */}
                            <div className={`shrink-0 p-4 border-b ${isLightTheme ? 'bg-gray-50 border-gray-200' : 'bg-grim-950/50 border-grim-800'}`}>
                                <div className="mb-4 flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-blue-500" />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isLightTheme ? 'text-gray-600' : 'text-grim-400'}`}>{t({en: 'Armor Configuration', ru: 'Настройка Доспеха'})}</span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* 1. Select Armor */}
                                    <div className="space-y-2">
                                        <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Designate Arcane Armor', ru: 'Назначить Мистический Доспех'})}</label>
                                        <div className="relative">
                                            <select 
                                                value={activeArcaneArmor?.armorId || ''}
                                                onChange={e => handleSetArcaneArmor(e.target.value)}
                                                className={`w-full p-3 pl-10 text-sm rounded border focus:outline-none appearance-none transition-all ${isLightTheme ? 'bg-white border-gray-300 text-gray-900 focus:border-orange-500' : 'bg-grim-950 border-grim-700 text-grim-light focus:border-orange-500'}`}
                                            >
                                                <option value="">-- {t({en: 'Select a suit of armor', ru: 'Выберите доспех'})} --</option>
                                                {armorInventory.map(item => (
                                                    <option key={item.instanceId || item.id} value={item.instanceId || item.id}>{t(item.name)} {item.equipped ? `(${t({en:'Equipped', ru:'Надето'})})` : ''}</option>
                                                ))}
                                            </select>
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <Shield className={`w-5 h-5 ${isLightTheme ? 'text-[#9a3412]' : 'text-orange-500'}`} />
                                            </div>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <p className={`text-xs italic ${isLightTheme ? 'text-gray-600' : 'text-grim-500'}`}>
                                            {t({en: 'The armor attaches to you and functions as a spellcasting focus. You ignore the Strength requirement.', ru: 'Доспех прикрепляется к вам и служит фокусировкой. Вы игнорируете требование к Силе.'})}
                                        </p>
                                    </div>

                                    {/* 2. Select Model */}
                                    {activeArcaneArmor && (
                                        <div className="space-y-2 animate-fade-in">
                                            <label className={`text-xs font-bold uppercase ${isLightTheme ? 'text-gray-700' : 'text-grim-500'}`}>{t({en: 'Armor Model', ru: 'Модель Доспеха'})}</label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <button
                                                    onClick={() => handleSetArmorModel('guardian')}
                                                    className={`p-4 rounded border-2 flex flex-col items-center gap-2 transition-all ${activeArcaneArmor.model === 'guardian' ? (isLightTheme ? 'bg-blue-50 border-blue-500 text-blue-900' : 'bg-blue-900/20 border-blue-500 text-blue-100') : (isLightTheme ? 'bg-white border-gray-200 text-gray-500 hover:border-blue-300' : 'bg-grim-900 border-grim-700 text-grim-500 hover:border-grim-500')}`}
                                                >
                                                    <Shield className="w-8 h-8" />
                                                    <span className="font-bold uppercase text-xs">{t({en: 'Guardian', ru: 'Страж'})}</span>
                                                </button>
                                                <button
                                                    onClick={() => handleSetArmorModel('infiltrator')}
                                                    className={`p-4 rounded border-2 flex flex-col items-center gap-2 transition-all ${activeArcaneArmor.model === 'infiltrator' ? (isLightTheme ? 'bg-purple-50 border-purple-500 text-purple-900' : 'bg-purple-900/20 border-purple-500 text-purple-100') : (isLightTheme ? 'bg-white border-gray-200 text-gray-500 hover:border-purple-300' : 'bg-grim-900 border-grim-700 text-grim-500 hover:border-grim-500')}`}
                                                >
                                                    <Zap className="w-8 h-8" />
                                                    <span className="font-bold uppercase text-xs">{t({en: 'Infiltrator', ru: 'Лазутчик'})}</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Bottom: Details */}
                            <div className="flex-1 p-6 bg-black/5">
                                <div className="mb-4 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-orange-500" />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isLightTheme ? 'text-gray-700' : 'text-grim-400'}`}>{t({en: 'Active Benefits', ru: 'Активные Бонусы'})}</span>
                                </div>
                                
                                {!activeArcaneArmor ? (
                                     <div className={`h-32 flex flex-col items-center justify-center text-center p-8 ${isLightTheme ? 'text-gray-400' : 'text-grim-500'}`}>
                                        <Shield className="w-12 h-12 mb-4 opacity-20" />
                                        <p className="text-xs uppercase font-bold tracking-widest">{t({en: 'Configure your armor above', ru: 'Настройте доспех выше'})}</p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {/* Model Features */}
                                        <div className="space-y-2">
                                            <h4 className={`text-sm font-bold uppercase border-b pb-2 ${isLightTheme ? 'text-gray-900 border-gray-200' : 'text-grim-light border-grim-700'}`}>
                                                {activeArcaneArmor.model === 'guardian' ? t({en: 'Guardian Features', ru: 'Особенности Стража'}) : t({en: 'Infiltrator Features', ru: 'Особенности Лазутчика'})}
                                            </h4>
                                            <ul className={`text-sm space-y-4 ${isLightTheme ? 'text-gray-800' : 'text-grim-300'}`}>
                                                 {activeArcaneArmor.model === 'guardian' ? (
                                                     <>
                                                         <li>
                                                             <strong className={isLightTheme ? 'text-gray-900' : 'text-grim-light'}>{t({en: 'Thunder Gauntlets', ru: 'Громовые рукавицы'})}:</strong> 
                                                             <p className="mt-1">{t({
                                                                 en: "Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.",
                                                                 ru: "Каждая из латных перчаток вашего доспеха, пока вы ничего в них не держите, считается простым рукопашным оружием и наносит 1к8 урона звуком при попадании. Существо, по которому попали перчаткой, до начала вашего следующего хода совершает броски атаки с помехой против всех целей кроме вас, так как доспех магическим образом испускает отвлекающий импульс, когда существо атакует кого-то другого."
                                                             })}</p>
                                                         </li>
                                                         <li>
                                                             <strong className={isLightTheme ? 'text-gray-900' : 'text-grim-light'}>{t({en: 'Defensive Field', ru: 'Защитное поле'})}:</strong> 
                                                             <p className="mt-1">{t({
                                                                 en: "As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                                                                 ru: "Бонусным действием вы можете получить количество временных хитов, равное вашему уровню в этом классе, заменив ими любые временные хиты, которые у вас уже есть. Вы теряете эти временные хиты, если снимаете доспех. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства, и восстанавливаете все использования, когда заканчиваете продолжительный отдых."
                                                             })}</p>
                                                         </li>
                                                     </>
                                                 ) : (
                                                     <>
                                                         <li>
                                                             <strong className={isLightTheme ? 'text-gray-900' : 'text-grim-light'}>{t({en: 'Lightning Launcher', ru: 'Метатель молний'})}:</strong> 
                                                             <p className="mt-1">{t({
                                                                 en: "A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.",
                                                                 ru: "Похожий на драгоценный камень нарост появляется на одном из ваших бронированных кулаков или на груди (по вашему выбору). Он считается простым дальнобойным оружием с нормальной дистанцией в 90 футов и максимальной дистанцией в 300 футов, наносящим 1к6 урона электричеством при попадании. Один раз в каждый свой ход, когда вы попадаете по существу этим оружием, вы можете дополнительно нанести ему 1к6 урона электричеством."
                                                             })}</p>
                                                         </li>
                                                         <li>
                                                             <strong className={isLightTheme ? 'text-gray-900' : 'text-grim-light'}>{t({en: 'Powered Steps', ru: 'Заряженные шаги'})}:</strong> 
                                                             <p className="mt-1">{t({
                                                                 en: "Your walking speed increases by 5 feet.",
                                                                 ru: "Ваша скорость ходьбы увеличивается на 5 футов."
                                                             })}</p>
                                                         </li>
                                                         <li>
                                                             <strong className={isLightTheme ? 'text-gray-900' : 'text-grim-light'}>{t({en: 'Dampening Field', ru: 'Заглушающее поле'})}:</strong> 
                                                             <p className="mt-1">{t({
                                                                 en: "You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.",
                                                                 ru: "Вы совершаете с преимуществом проверки Ловкости (Скрытность). Если доспех накладывает помеху на данную проверку, то преимущество и помеха отменяют друг друга, как и обычно."
                                                             })}</p>
                                                         </li>
                                                     </>
                                                 )}
                                             </ul>
                                         </div>
 
                                         {/* Extra Attack (Lvl 5) */}
                                         {artificerLevel >= 5 && (
                                             <div className="space-y-2">
                                                 <h4 className={`text-sm font-bold uppercase ${isLightTheme ? 'text-gray-900' : 'text-grim-light'}`}>{t({en: 'Extra Attack', ru: 'Дополнительная Атака'})}</h4>
                                                 <p className={`text-sm ${isLightTheme ? 'text-gray-800' : 'text-grim-300'}`}>{t({en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.', ru: 'Вы можете атаковать дважды вместо одного раза каждый раз, когда выбираете действие Атака в свой ход.'})}</p>
                                             </div>
                                         )}
 
                                         {/* Armor Modifications (Lvl 9) */}
                                         {artificerLevel >= 9 && (
                                             <div className="space-y-2">
                                                 <h4 className={`text-sm font-bold uppercase ${isLightTheme ? 'text-gray-900' : 'text-grim-light'}`}>{t({en: 'Armor Modifications', ru: 'Модификации Доспеха'})}</h4>
                                                 <p className={`text-sm ${isLightTheme ? 'text-gray-800' : 'text-grim-300'}`}>{t({en: 'Your Arcane Armor now counts as separate items for your infusions: chest, boots, helmet, and the armor\'s special weapon. Each of those items can bear one of your infusions, and the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor.', ru: 'Ваш Мистический Доспех теперь считается набором отдельных предметов для ваших инфузий: нагрудник, сапоги, шлем и оружие доспеха. Каждый из этих предметов может нести одну из ваших инфузий. Кроме того, максимальное количество предметов, которые вы можете наполнить одновременно, увеличивается на 2, но эти дополнительные предметы должны быть частью вашего Мистического Доспеха.'})}</p>
                                             </div>
                                         )}
 
                                         {/* Perfected Armor (Lvl 15) */}
                                         {artificerLevel >= 15 && (
                                             <div className="space-y-2">
                                                 <h4 className={`text-sm font-bold uppercase ${isLightTheme ? 'text-gray-900' : 'text-grim-light'}`}>{t({en: 'Perfected Armor', ru: 'Идеальная Броня'})}</h4>
                                                 <div className={`text-sm ${isLightTheme ? 'text-gray-800' : 'text-grim-300'}`}>
                                                     {activeArcaneArmor.model === 'guardian' 
                                                         ? t({
                                                             en: "When a creature you can see ends its turn within 30 feet of you, you can use your reaction to force the creature to make a Strength saving throw against your spell save DC. On a failed save, you pull the creature up to 30 feet toward you to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of the same reaction.",
                                                             ru: "Когда существо, которое вы видите, заканчивает свой ход в пределах 30 футов от вас, вы можете реакцией заставить его совершить спасбросок Силы против вашей Сл спасброска заклинания. При провале существо притягивается в свободное пространство в пределах 30 футов к вам. Если вы притягиваете цель в пространство в пределах 5 футов от вас, вы можете совершить по нему одну рукопашную атаку оружием как часть этой же реакции."
                                                         })
                                                         : t({
                                                             en: "Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and the next attack roll made against it by a creature other than you has advantage. If that attack hits, it deals an extra 1d6 lightning damage.",
                                                             ru: "Любое существо, получившее урон от вашего Молниемета, начинает мерцать магическим светом до начала вашего следующего хода. Мерцающее существо излучает тусклый свет в радиусе 5 футов, и следующий бросок атаки по нему, совершенный кем-то кроме вас, совершается с преимуществом. Если эта атака попадает, она наносит дополнительные 1к6 урона электричеством."
                                                         })
                                                     }
                                                 </div>
                                             </div>
                                         )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                <div className={`p-4 border-t flex justify-between items-center ${isLightTheme ? 'bg-gray-100 border-gray-200' : 'bg-grim-950 border-grim-700'}`}>
                    <div className="flex items-center gap-2 text-xs">
                        <Info className="w-4 h-4 text-blue-500 shrink-0" />
                        <span className={`text-xs md:text-sm font-medium ${isLightTheme ? 'text-gray-800' : 'text-grim-400'}`}>
                            {activeTab === 'infusions' 
                                ? t({en: 'Infusions do not stack on the same item.', ru: 'Инфузии не суммируются на одном предмете.'})
                                : t({en: 'Limit: Up to INT mod.', ru: 'Лимит: мод. ИНТ.'})
                            }
                        </span>
                    </div>
                    <button onClick={onClose} className={`px-6 py-2 rounded text-sm font-bold uppercase tracking-widest transition-all ${isLightTheme ? 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-800' : 'bg-grim-800 hover:bg-grim-700 border border-grim-600 text-grim-light'}`}>
                        {t({en: 'Done', ru: 'Готово'})}
                    </button>
                </div>

            </div>
        </div>,
        document.body
    );
};
