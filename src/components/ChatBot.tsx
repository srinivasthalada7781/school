import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ_DATA, SUGGESTIONS, FAQItem, ChatMessage } from "@/lib/chatbot-data";
import { cn } from "@/lib/utils";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: "welcome",
                    text: "Namaste! Welcome to Genesis International Montessori & STEM School. How can I assist you today?",
                    sender: "bot",
                    timestamp: new Date(),
                },
            ]);
        }
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        const apiUrl = import.meta.env.VITE_CHATBOT_API_URL;

        if (apiUrl) {
            try {
                const formData = new FormData();
                formData.append("message", text);

                const response = await fetch(`${apiUrl}/chat`, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    const botMessage: ChatMessage = {
                        id: (Date.now() + 1).toString(),
                        text: data.answer,
                        sender: "bot",
                        timestamp: new Date(),
                    };
                    setMessages((prev) => [...prev, botMessage]);
                    setIsTyping(false);
                    return;
                }
            } catch (error) {
                console.error("Chatbot API Error:", error);
                // Fallback to local logic if API fails
            }
        }

        // Fallback or Local Processing
        setTimeout(() => {
            const response = findResponse(text);
            const botMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: response,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const findResponse = (query: string): string => {
        const lowerQuery = query.toLowerCase().trim();

        // Scoring system for better matching
        let bestMatch: FAQItem | null = null;
        let highestScore = 0;

        FAQ_DATA.forEach((item) => {
            let score = 0;

            const question = item.question.toLowerCase();

            // Check for exact phrase matches in question
            if (lowerQuery.includes(question)) {
                score += 10;
            }

            // Check keywords
            item.keywords.forEach((keyword) => {
                const cleanKeyword = keyword.toLowerCase().replace(/[?.,!]/g, '');
                if (cleanKeyword.length < 3) return;

                if (lowerQuery.includes(cleanKeyword)) {
                    score += 2;

                    // Boost if keyword is at the start or end of a word (boundary check)
                    const regex = new RegExp(`\\b${cleanKeyword}\\b`, 'i');
                    if (regex.test(lowerQuery)) {
                        score += 3;
                    }
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        });

        // If we have a decent score, return the match
        if (bestMatch && highestScore > 3) {
            return (bestMatch as FAQItem).answer;
        }

        // Default fallbacks
        if (lowerQuery.includes("hi") || lowerQuery.includes("hello") || lowerQuery.includes("hey")) {
            return "Hello! I'm the Genesis School Assistant. I can help you with admissions, fees, timings, curriculum, and more. What would you like to know?";
        }

        if (lowerQuery.includes("thank") || lowerQuery.includes("ok") || lowerQuery.includes("good")) {
            return "You're welcome! Feel free to ask if you have any more questions.";
        }

        return "I'm sorry, I don't have a specific answer for that. Would you like to speak with our admissions office at +91 97030 33531 or email us at genesissrikakulam@gmail.com?";
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[320px] sm:w-[380px] h-[500px] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center">
                                <img src="/pictures/Genesis Stem Final Logo.png" alt="Logo" className="w-full h-auto object-contain" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Genesis Assistant</p>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-[10px] opacity-80 uppercase tracking-wider font-semibold">Online</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={cn(
                                    "flex max-w-[85%] flex-col",
                                    m.sender === "user" ? "ml-auto items-end" : "items-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "px-4 py-2 rounded-2xl text-sm leading-relaxed animate-in fade-in zoom-in-95 duration-200",
                                        m.sender === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-white text-foreground border border-border rounded-tl-none shadow-sm"
                                    )}
                                >
                                    {m.text}
                                </div>
                                <span className="text-[10px] text-muted-foreground mt-1 px-1">
                                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-start gap-1">
                                <div className="bg-white border border-border px-4 py-2 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
                                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    {messages.length < 4 && (
                        <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-border bg-white">
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => handleSend(s)}
                                    className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-border">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend(inputValue);
                            }}
                            className="flex gap-2"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-muted border-none rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-16 h-16 rounded-full shadow-premium flex items-center justify-center transition-all duration-300 hover:scale-110",
                    isOpen ? "bg-white text-primary border border-border" : "bg-primary text-primary-foreground"
                )}
            >
                {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
            </button>
        </div>
    );
};

export default ChatBot;
