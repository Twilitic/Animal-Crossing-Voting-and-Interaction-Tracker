
import React, { useState, useEffect, useReducer, useContext, createContext, useMemo, useRef } from 'react';
import { allVillagers, speciesEmojiMap } from './data';
import { Villager, AppState, Screen, Gender, Personality } from './types';
import { AddIcon, AmiiboIcon, BanishIcon, CheckIcon, EditIcon, RemoveIcon, ResetIcon, SaveIcon, SettingsIcon, TrashIcon } from './components/Icons';

// --- CONTEXT & REDUCER ---

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<any> } | undefined>(undefined);

const initialState: AppState = {
    villagers: Array(10).fill(null),
    player1Ranks: [],
    player2Ranks: [],
    dailyToggles: [],
    settings: {
      showBirthdays: true,
    }
};

function appReducer(state: AppState, action: any): AppState {
    switch (action.type) {
        case 'SET_SLOTS':
            const newVillagers = Array(action.payload).fill(null);
            const currentVillagers = state.villagers.filter(v => v !== null);
            currentVillagers.forEach((v, i) => {
                if (i < action.payload) newVillagers[i] = v;
            });
            return { ...state, villagers: newVillagers };
        case 'ADD_VILLAGER': {
            const newVillagers = [...state.villagers];
            newVillagers[action.payload.index] = action.payload.villager;
            const villagerExists = (arr: string[]) => arr.includes(action.payload.villager.id);
            return {
                ...state,
                villagers: newVillagers,
                player1Ranks: villagerExists(state.player1Ranks) ? state.player1Ranks : [...state.player1Ranks, action.payload.villager.id],
                player2Ranks: villagerExists(state.player2Ranks) ? state.player2Ranks : [...state.player2Ranks, action.payload.villager.id],
            };
        }
        case 'REMOVE_VILLAGER': {
            const villagerToRemove = state.villagers[action.payload.index];
            if (!villagerToRemove) return state;
            const newVillagers = [...state.villagers];
            newVillagers[action.payload.index] = null;
            return {
                ...state,
                villagers: newVillagers,
                player1Ranks: state.player1Ranks.filter(id => id !== villagerToRemove.id),
                player2Ranks: state.player2Ranks.filter(id => id !== villagerToRemove.id),
                dailyToggles: state.dailyToggles.filter(id => id !== villagerToRemove.id),
            };
        }
        case 'SAVE_RANKS': {
            if (action.payload.player === 'player1') {
                return { ...state, player1Ranks: action.payload.ranks };
            }
            if (action.payload.player === 'player2') {
                return { ...state, player2Ranks: action.payload.ranks };
            }
            return state;
        }
        case 'TOGGLE_INTERACTION': {
            const toggles = state.dailyToggles;
            const id = action.payload;
            const newToggles = toggles.includes(id) ? toggles.filter(tId => tId !== id) : [...toggles, id];
            return { ...state, dailyToggles: newToggles };
        }
        case 'RESET_INTERACTIONS':
            return { ...state, dailyToggles: [] };
        case 'IMPORT_DATA':
            return action.payload;
        case 'TOGGLE_BIRTHDAYS':
            return { ...state, settings: { ...state.settings, showBirthdays: !state.settings.showBirthdays }};
        default:
            return state;
    }
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        try {
            const savedState = localStorage.getItem('ac-villager-tracker');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                dispatch({ type: 'IMPORT_DATA', payload: parsedState });
            }
        } catch (error) {
            console.error("Failed to load state from localStorage", error);
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem('ac-villager-tracker', JSON.stringify(state));
            } catch (error) {
                console.error("Failed to save state to localStorage", error);
            }
        }
    }, [state, isInitialized]);
    
    if (!isInitialized) return null; // Or a loading spinner

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};


// --- HELPER & UI COMPONENTS ---

const VillagerCard: React.FC<{ villager: Villager; isInteracted?: boolean; onToggle?: () => void; isBanished?: boolean }> = ({ villager, isInteracted, onToggle, isBanished = false }) => {
    const genderBorder = villager.gender === 'Female' ? 'border-pink-400' : 'border-blue-500';
    const specialVillager = villager.gameAppearances.includes('Amiibo');

    return (
        <div 
            className={`relative rounded-2xl shadow-lg p-4 text-center transition-all duration-300 transform hover:-translate-y-1 ${onToggle ? 'cursor-pointer' : ''} ${isBanished ? 'bg-red-100' : 'bg-white'} w-full h-full`}
            onClick={onToggle}
        >
            <div className={`relative w-24 h-24 mx-auto rounded-full border-4 ${genderBorder} flex items-center justify-center bg-green-100 mb-2`}>
                <span className="text-5xl">{speciesEmojiMap[villager.species] || '❓'}</span>
                {specialVillager && (
                    <div className="absolute -top-1 -right-1 bg-yellow-400 p-1 rounded-full text-white shadow">
                        <AmiiboIcon className="w-4 h-4" />
                    </div>
                )}
            </div>
            <h3 className="font-bold text-lg text-gray-800">{villager.name}</h3>
            <p className="text-sm text-gray-500">{villager.personality}</p>
            
            {(isInteracted || isBanished) && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center">
                    {isBanished ? 
                        <BanishIcon className="w-16 h-16 text-red-500" /> : 
                        <CheckIcon className="w-12 h-12 text-green-400" />}
                </div>
            )}
        </div>
    );
};

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                {children}
            </div>
        </div>
    );
};

const SearchModalContent: React.FC<{ onSelect: (villager: Villager) => void; closeModal: () => void }> = ({ onSelect, closeModal }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showCustomForm, setShowCustomForm] = useState(false);

    const filteredVillagers = useMemo(() => {
        if (!searchTerm) return [];
        return allVillagers.filter(v => v.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 10);
    }, [searchTerm]);

    const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const birthday = formData.get('birthday') as string;
        const customVillager: Villager = {
            id: name.toLowerCase().replace(/ /g, '-') + Date.now(), // Ensure custom villagers have unique IDs
            name: name,
            gender: formData.get('gender') as Gender,
            species: formData.get('species') as string,
            personality: formData.get('personality') as Personality,
            birthday: birthday || 'Unknown',
            gameAppearances: 'Custom'
        };
        onSelect(customVillager);
        closeModal();
    };

    if (showCustomForm) {
        return (
            <form onSubmit={handleCustomSubmit}>
                <div className="space-y-4">
                    <input name="name" placeholder="Name" required className="w-full p-2 border rounded"/>
                    <input name="species" placeholder="Species" required className="w-full p-2 border rounded"/>
                    <input name="birthday" placeholder="Birthday (e.g., June 9)" className="w-full p-2 border rounded"/>
                    <select name="gender" required className="w-full p-2 border rounded">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select name="personality" required className="w-full p-2 border rounded">
                        {['Jock', 'Cranky', 'Peppy', 'Sisterly', 'Lazy', 'Normal', 'Snooty', 'Smug'].map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>
                <div className="mt-4 flex justify-between">
                    <button type="button" onClick={() => setShowCustomForm(false)} className="px-4 py-2 bg-gray-200 rounded">Back to Search</button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Custom Villager</button>
                </div>
            </form>
        );
    }
    
    return (
        <div>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type a villager's name..."
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
            />
            <div className="max-h-64 overflow-y-auto">
                {filteredVillagers.map(v => (
                    <div key={v.id} onClick={() => { onSelect(v); closeModal(); }} className="p-3 hover:bg-gray-100 cursor-pointer rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-bold">{v.name}</p>
                            <p className="text-sm text-gray-500">{v.species}, {v.personality}</p>
                        </div>
                        <span className="text-xs text-gray-400 max-w-[50%] truncate">{v.gameAppearances}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-center">
                <button onClick={() => setShowCustomForm(true)} className="px-4 py-2 bg-green-500 text-white rounded">Add Custom Villager</button>
            </div>
        </div>
    );
};


const SettingsModalContent: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const { state, dispatch } = useAppContext();
    const [importData, setImportData] = useState('');
    const [showExport, setShowExport] = useState(false);

    const handleImport = () => {
        try {
            const parsedData = JSON.parse(importData);
            dispatch({ type: 'IMPORT_DATA', payload: parsedData });
            alert('Data imported successfully!');
            closeModal();
        } catch (e) {
            alert('Invalid data format. Please paste valid JSON.');
        }
    };
    
    const exportData = JSON.stringify(state, null, 2);

    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-bold text-lg mb-2">Settings</h3>
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" checked={state.settings.showBirthdays} onChange={() => dispatch({ type: 'TOGGLE_BIRTHDAYS' })} />
                    <span>Show Birthday Reminders</span>
                </label>
            </div>
            
            <div className="border-t pt-4">
                <h3 className="font-bold text-lg mb-2">Import/Export Data</h3>
                <div className="flex space-x-2 mb-4">
                    <button onClick={() => setShowExport(false)} className={`px-4 py-2 rounded-lg w-1/2 ${!showExport ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Import</button>
                    <button onClick={() => setShowExport(true)} className={`px-4 py-2 rounded-lg w-1/2 ${showExport ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Export</button>
                </div>

                {showExport ? (
                     <div>
                        <p className="text-sm text-gray-600 mb-2">Copy this text to save your data:</p>
                        <textarea readOnly value={exportData} className="w-full h-40 p-2 border rounded bg-gray-100 font-mono text-xs"/>
                    </div>
                ) : (
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Paste your data here to load it:</p>
                        <textarea value={importData} onChange={e => setImportData(e.target.value)} className="w-full h-40 p-2 border rounded"/>
                        <button onClick={handleImport} className="mt-2 px-4 py-2 bg-green-500 text-white rounded w-full">Load Data</button>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- SCREEN COMPONENTS ---

const TownSetupScreen: React.FC<{ setScreen: (screen: Screen) => void }> = ({ setScreen }) => {
    const { state, dispatch } = useAppContext();
    const [searchModalIndex, setSearchModalIndex] = useState<number | null>(null);

    const presets = {
        "New Horizons": 10,
        "New Leaf": 10,
        "GCN / DnMe+": 15,
    };

    const handleAddVillager = (villager: Villager) => {
        if (searchModalIndex !== null) {
            dispatch({ type: 'ADD_VILLAGER', payload: { index: searchModalIndex, villager } });
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <Modal isOpen={searchModalIndex !== null} onClose={() => setSearchModalIndex(null)} title="Add a Villager">
                <SearchModalContent onSelect={handleAddVillager} closeModal={() => setSearchModalIndex(null)} />
            </Modal>
            
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-green-800">Town Setup</h1>
                <p className="text-gray-600 mt-2">Configure your town's villager slots and assign your villagers.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
                <h2 className="text-xl font-bold mb-4">1. Set Villager Slots</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(presets).map(([name, count]) => (
                        <button key={name} onClick={() => dispatch({ type: 'SET_SLOTS', payload: count })} className={`px-4 py-2 rounded-full text-sm font-semibold ${state.villagers.length === count ? 'bg-yellow-400 text-yellow-900' : 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'}`}>
                            {name} ({count})
                        </button>
                    ))}
                </div>
                 <div className="flex items-center space-x-2">
                    <span className="font-semibold">Custom:</span>
                    <button onClick={() => dispatch({ type: 'SET_SLOTS', payload: Math.max(1, state.villagers.length - 1) })} className="p-2 bg-red-200 rounded-full text-red-700 hover:bg-red-300"><RemoveIcon className="w-5 h-5"/></button>
                    <span className="text-lg font-bold w-8 text-center">{state.villagers.length}</span>
                    <button onClick={() => dispatch({ type: 'SET_SLOTS', payload: state.villagers.length + 1 })} className="p-2 bg-green-200 rounded-full text-green-700 hover:bg-green-300"><AddIcon className="w-5 h-5"/></button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4">2. Assign Villagers</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {state.villagers.map((villager, index) => (
                        villager ? (
                            <div key={villager.id + index} className="relative group">
                                <VillagerCard villager={villager} />
                                <button onClick={() => dispatch({ type: 'REMOVE_VILLAGER', payload: { index } })} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <TrashIcon />
                                </button>
                            </div>
                        ) : (
                            <button key={index} onClick={() => setSearchModalIndex(index)} className="aspect-square border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:bg-gray-100 hover:border-gray-400 transition">
                                <AddIcon className="w-8 h-8 mb-1" />
                                <span className="text-sm">Add Villager</span>
                            </button>
                        )
                    ))}
                </div>
            </div>
             <div className="mt-8 text-center">
                <button onClick={() => setScreen('dashboard')} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition">
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};


const DashboardScreen: React.FC<{ setScreen: (screen: Screen) => void }> = ({ setScreen }) => {
    const { state, dispatch } = useAppContext();
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);

    const townVillagers = useMemo(() => state.villagers.filter((v): v is Villager => v !== null), [state.villagers]);
    
    const villagerScores = useMemo(() => {
        return townVillagers.map(v => {
            const rank1 = state.player1Ranks.indexOf(v.id) + 1 || townVillagers.length + 1;
            const rank2 = state.player2Ranks.indexOf(v.id) + 1 || townVillagers.length + 1;
            return {
                villager: v,
                score: rank1 + rank2,
            };
        });
    }, [townVillagers, state.player1Ranks, state.player2Ranks]);

    const { banished, remaining } = useMemo(() => {
        if (villagerScores.length === 0) return { banished: [], remaining: [] };
        
        const sorted = [...villagerScores].sort((a, b) => b.score - a.score);
        const highestScore = sorted[0]?.score;
        const banished = highestScore ? sorted.filter(v => v.score === highestScore) : [];
        const remaining = highestScore ? sorted.filter(v => v.score < highestScore).sort((a,b) => a.score - b.score) : sorted;
        
        return { banished, remaining };
    }, [villagerScores]);

    const today = new Date();
    const todayString = today.toLocaleString('en-US', { month: 'long', day: 'numeric' });
    const todaysBirthdays = state.settings.showBirthdays ? townVillagers.filter(v => v.birthday === todayString) : [];
    
    const lowestScore = remaining[0]?.score;

    return (
        <div className="min-h-screen bg-green-50">
            <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-extrabold text-green-800">Villager Dashboard</h1>
                        <p className="text-sm text-gray-500">Today is {todayString}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => setScreen('player1_voting')} className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold hover:bg-blue-300">Player 1 Vote</button>
                        <button onClick={() => setScreen('player2_voting')} className="px-4 py-2 bg-pink-200 text-pink-800 rounded-full text-sm font-semibold hover:bg-pink-300">Player 2 Vote</button>
                        <button onClick={() => setScreen('setup')} className="p-2 text-gray-600 hover:text-black hover:bg-gray-200 rounded-full" title="Edit Town">
                            <EditIcon className="h-5 w-5" />
                        </button>
                        <button onClick={() => setSettingsModalOpen(true)} className="p-2 text-gray-600 hover:text-black hover:bg-gray-200 rounded-full" title="Settings">
                            <SettingsIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>
            
            <main className="p-4 md:p-8 max-w-7xl mx-auto">
                 <Modal isOpen={settingsModalOpen} onClose={() => setSettingsModalOpen(false)} title="Settings & Data">
                     <SettingsModalContent closeModal={() => setSettingsModalOpen(false)} />
                 </Modal>

                {todaysBirthdays.length > 0 && (
                    <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-8 shadow-md">
                        <p className="font-bold">🎂 Today's Birthdays!</p>
                        <p>It's {todaysBirthdays.map(v => v.name).join(' & ')}'s birthday today ({todayString})! Don't forget to visit them!</p>
                    </div>
                )}
                
                {banished.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-3xl font-bold text-red-700 text-center mb-4">Banished</h2>
                        <div className="flex justify-center flex-wrap gap-6">
                           {banished.map(({ villager }) => (
                                <div key={villager.id} className="w-56">
                                    <VillagerCard villager={villager} isBanished={true} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-bold text-gray-700">Villager Grid</h2>
                         <button onClick={() => dispatch({ type: 'RESET_INTERACTIONS' })} className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 shadow-sm">
                            <ResetIcon className="w-4 h-4" />
                            <span>Reset Day</span>
                        </button>
                    </div>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {remaining.map(({ villager, score }) => {
                            const isFavorite = score === lowestScore;
                            return (
                                <div key={villager.id} className={isFavorite ? 'p-1 rounded-3xl shimmer-border' : ''}>
                                    <VillagerCard 
                                        villager={villager} 
                                        isInteracted={state.dailyToggles.includes(villager.id)}
                                        onToggle={() => dispatch({ type: 'TOGGLE_INTERACTION', payload: villager.id })}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </section>

                {townVillagers.length === 0 && (
                     <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                        <p className="text-2xl font-bold text-gray-700">Your town is empty!</p>
                        <p className="text-gray-500 mb-6">Go to the setup screen to add some villagers.</p>
                        <button onClick={() => setScreen('setup')} className="px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition">Set Up Town</button>
                    </div>
                )}
            </main>
        </div>
    );
};

const VotingScreen: React.FC<{ setScreen: (screen: Screen) => void; player: 'player1' | 'player2' }> = ({ setScreen, player }) => {
    const { state, dispatch } = useAppContext();
    const townVillagers = useMemo(() => state.villagers.filter((v): v is Villager => v !== null), [state.villagers]);

    const initialRanks = player === 'player1' ? state.player1Ranks : state.player2Ranks;
    const [rankedVillagers, setRankedVillagers] = useState<Villager[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    useEffect(() => {
        const villagerMap = new Map(townVillagers.map(v => [v.id, v]));
        const sorted = initialRanks.map(id => villagerMap.get(id)).filter((v): v is Villager => v !== undefined);
        const unsorted = townVillagers.filter(v => !initialRanks.includes(v.id));
        setRankedVillagers([...sorted, ...unsorted]);
    }, [townVillagers, initialRanks]);
    
    const handleSave = () => {
        const ranks = rankedVillagers.map(v => v.id);
        dispatch({ type: 'SAVE_RANKS', payload: { player, ranks } });
        setScreen('dashboard');
    };

    const handleDragEnd = () => {
        if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
            const listCopy = [...rankedVillagers];
            const dragItemContent = listCopy[dragItem.current];
            listCopy.splice(dragItem.current, 1);
            listCopy.splice(dragOverItem.current, 0, dragItemContent);
            setRankedVillagers(listCopy);
        }
        dragItem.current = null;
        dragOverItem.current = null;
    };
    
    const handleClick = (index: number) => {
        if (selectedIndex === null) {
            setSelectedIndex(index);
        } else {
            if (selectedIndex !== index) {
                const listCopy = [...rankedVillagers];
                // Swap the items
                [listCopy[selectedIndex], listCopy[index]] = [listCopy[index], listCopy[selectedIndex]];
                setRankedVillagers(listCopy);
            }
            setSelectedIndex(null);
        }
    }

    const playerName = player === 'player1' ? 'Player 1' : 'Player 2';
    const playerColor = player === 'player1' ? 'bg-blue-500' : 'bg-pink-500';

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">{playerName}'s Ranking</h1>
                <p className="text-gray-600 mt-2">Rank villagers from most favorite (top) to least favorite (bottom).</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rankedVillagers.map((v, i) => (
                    <div
                        key={v.id}
                        draggable
                        onClick={() => handleClick(i)}
                        onDragStart={() => (dragItem.current = i)}
                        onDragEnter={() => (dragOverItem.current = i)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => e.preventDefault()}
                        className={`bg-white p-2 rounded-lg shadow-sm cursor-grab transition-all duration-300 flex items-center space-x-3 ${selectedIndex === i ? 'ring-4 ring-yellow-400' : 'hover:shadow-md hover:-translate-y-px'}`}
                    >
                        <div className="w-8 h-8 bg-green-200 text-green-700 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-3xl flex-shrink-0 ${v.gender === 'Female' ? 'bg-pink-100' : 'bg-blue-100'}`}>
                            {speciesEmojiMap[v.species] || '❓'}
                        </div>
                        <div className="flex-grow overflow-hidden">
                            <p className="font-bold text-gray-800 truncate">{v.name}</p>
                            <p className="text-sm text-gray-500">{v.personality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-between items-center sticky bottom-0 py-4 bg-gray-50/90 backdrop-blur-sm">
                <button onClick={() => setScreen('dashboard')} className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300 transition">
                    Back to Dashboard
                </button>
                <button onClick={handleSave} className={`flex items-center space-x-2 px-6 py-3 ${playerColor} text-white font-bold rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition`}>
                    <SaveIcon className="w-5 h-5" />
                    <span>Save Ranks</span>
                </button>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---

function App() {
    const [screen, setScreen] = useState<Screen>('dashboard');

    // Effect to check if it's the first launch
    useEffect(() => {
        const isSetup = localStorage.getItem('ac-villager-tracker-isSetup');
        if (!isSetup) {
            setScreen('setup');
            localStorage.setItem('ac-villager-tracker-isSetup', 'true');
        }
    }, []);

    const renderScreen = () => {
        switch (screen) {
            case 'setup':
                return <TownSetupScreen setScreen={setScreen} />;
            case 'dashboard':
                return <DashboardScreen setScreen={setScreen} />;
            case 'player1_voting':
                return <VotingScreen setScreen={setScreen} player="player1" />;
            case 'player2_voting':
                return <VotingScreen setScreen={setScreen} player="player2" />;
            default:
                return <DashboardScreen setScreen={setScreen} />;
        }
    };

    return (
        <AppProvider>
            <div className="bg-gray-50 min-h-screen">
                {renderScreen()}
            </div>
        </AppProvider>
    );
}

export default App;
