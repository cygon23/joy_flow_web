import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Milk, Package, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickActions = [
  { icon: Milk, label: "Our Products", value: "Tell me about your products" },
  { icon: Package, label: "Order Info", value: "How can I order?" },
  { icon: Phone, label: "Contact", value: "How can I contact you?" },
  { icon: Info, label: "About Us", value: "Tell me about African Joy" },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([
    {
      text: "Hello! 👋 Welcome to African Joy. How can I help you today with our premium dairy products and services?",
      sender: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const cleanMarkdown = (text: string) => {
    return text
      .replace(/[*_~`#]/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/(\r\n|\r|\n){2,}/g, "\n\n")
      .trim();
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || message;
    if (!messageText.trim() || isTyping) return;

    setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);
    setMessage("");
    setIsTyping(true);

    try {
      const conversationHistory = messages
        .slice(-4)
        .map((msg) => `${msg.sender === "bot" ? "AI" : "User"}: ${msg.text}`)
        .join("\n");

      const systemPrompt = `You are the African Joy Customer Assistant, a friendly, professional, and knowledgeable AI representing African Joy, a leading dairy producer in Tanzania specializing in premium milk and dairy products.

COMMUNICATION STYLE:
- Be warm, friendly, and customer-focused
- Keep initial responses concise and informative (2-3 sentences) unless the user asks for more details
- Use a conversational, approachable tone while maintaining professionalism
- Show enthusiasm about African Joy products and commitment to quality
- Always offer to provide more information if needed
- End responses by asking if they need anything else

COMPANY INFORMATION:
Company: African Joy
Industry: Dairy Production & Distribution
Specialization: Premium quality milk and dairy products
Location: Tanzania
Core Values: Quality, Freshness, Customer Satisfaction, Local Community Support

PRODUCTS & SERVICES:
1. Fresh Milk - Premium quality, locally sourced
2. Dairy Products - Various dairy items (yogurt, cheese, butter, etc.)
3. Wholesale & Retail Distribution
4. Custom dairy solutions for businesses
5. Quality assurance and fresh daily delivery

CONTACT INFORMATION:
- Primary Phone: +255 784 240 780
- Secondary Phone: +255 745 330 042
- Instagram: Encourage users to visit our Instagram for product updates, promotions, and behind-the-scenes content
- Website: Encourage users to visit our website for complete product catalog and online ordering

IMPORTANT INSTRUCTIONS:
1. CONTEXT BOUNDARIES: Only answer questions about African Joy, our dairy products, services, ordering, delivery, pricing, and general dairy-related inquiries
2. If asked about topics outside African Joy's context (politics, other companies, unrelated subjects), politely redirect: "I'm here to help with African Joy products and services. For that topic, I'd recommend other resources. Is there anything about our dairy products I can help you with?"
3. MISSING INFORMATION: If you don't have specific information (exact prices, delivery schedules, product availability), say: "For specific details on [topic], please contact our support team at +255 784 240 780 or +255 745 330 042. They'll be happy to help you!"
4. SOCIAL MEDIA & WEBSITE: Always suggest visiting Instagram for visual content and website for detailed information
5. CONCISE RESPONSES: Keep answers brief and clear unless user requests detailed information
6. STAY ON BRAND: Focus on quality, freshness, local sourcing, and customer care

SAMPLE RESPONSES:
- Products: "African Joy offers premium fresh milk and a variety of dairy products including [list 2-3]. All sourced locally for maximum freshness. Would you like to know more about a specific product?"
- Pricing: "For current pricing and special offers, please call us at +255 784 240 780. Our team can provide detailed pricing based on your needs!"
- Ordering: "You can order by calling +255 784 240 780 or +255 745 330 042. Visit our Instagram and website for product previews. Would you like delivery information too?"
- Delivery: "We offer fresh daily delivery services. For delivery areas and schedules, contact +255 784 240 780. Where are you located?"

Previous conversation:
${conversationHistory}

User: ${messageText}

Remember: Be concise, helpful, stay within context, and always provide contact info when you don't have specific details.`;

      const apiUrl = `https://CreepyTech-creepy-ai.hf.space/ai/logic?q=${encodeURIComponent(
        systemPrompt
      )}&logic=chat`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data && data.result) {
        const cleanText = cleanMarkdown(data.result);
        setMessages((prev) => [...prev, { text: cleanText, sender: "bot" }]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "I apologize for the inconvenience. I'm having trouble connecting right now. Please contact our support team directly at +255 784 240 780 or +255 745 330 042. You can also visit our Instagram and website for more information. Thank you for your patience! 🙏",
          sender: "bot",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Animated Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
          >
            {/* Outer Glow Container */}
            <div className="relative">
              {/* Multiple Pulsing Rings */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  style={{
                    filter: "blur(1px)",
                  }}
                  animate={{
                    scale: [1, 2, 2.8],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Rotating Milk Drops Around Button */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orbit-drop-${i}`}
                  className="absolute"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      x: Math.cos((i / 6) * Math.PI * 2) * 45 - 4,
                      y: Math.sin((i / 6) * Math.PI * 2) * 45 - 6,
                    }}
                  >
                    <svg width="8" height="12" viewBox="0 0 12 16">
                      <path
                        d="M6 0C6 0 0 8 0 11C0 13.7614 2.68629 16 6 16C9.31371 16 12 13.7614 12 11C12 8 6 0 6 0Z"
                        className="fill-primary-foreground"
                        opacity="0.9"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}

              {/* Main Button */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                onClick={() => setIsOpen(true)}
                className="relative w-20 h-20 rounded-full overflow-hidden group bg-gradient-to-br from-primary to-primary-dark shadow-[0_8px_32px_hsl(var(--primary)/0.5),0_0_60px_hsl(var(--primary)/0.3)]"
              >
                {/* Liquid Morphing Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent"
                  animate={{
                    borderRadius: [
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "30% 60% 70% 40% / 50% 60% 30% 60%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Animated Milk Bottle Icon */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg width="36" height="48" viewBox="0 0 40 60" fill="none">
                      {/* Milk Bottle */}
                      <rect x="10" y="18" width="20" height="36" rx="2" className="fill-primary-foreground" opacity="0.95" />
                      <rect x="13" y="8" width="14" height="12" rx="1.5" className="fill-primary-foreground" opacity="0.95" />
                      
                      {/* Milk Level with Animation */}
                      <motion.rect
                        x="12"
                        y="28"
                        width="16"
                        height="20"
                        className="fill-background"
                        animate={{
                          height: [20, 24, 20],
                          y: [28, 24, 28],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      
                      {/* Joy Label */}
                      <circle cx="20" cy="35" r="4" className="fill-primary" opacity="0.7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Notification Badge with Pulse */}
                <motion.div
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-[0_0_20px_hsl(var(--secondary)/0.8)]"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <motion.span
                    className="text-sm font-bold text-secondary-foreground"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    !
                  </motion.span>
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md"
          >
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20">
              {/* Header */}
              <motion.div
                className="relative bg-gradient-to-br from-primary to-primary-dark p-6 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-20 h-20 rounded-full bg-primary-foreground/30 blur-xl"
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-foreground/30"
                      animate={{
                        borderRadius: [
                          "50% 50% 50% 50%",
                          "60% 40% 30% 70%",
                          "50% 50% 50% 50%",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <Milk className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-primary-foreground text-lg">
                        African Joy
                      </h3>
                      <motion.div
                        className="flex items-center gap-1 text-sm text-primary-foreground/80"
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>Online</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-primary-foreground" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Messages Container */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-card to-muted/20">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        msg.sender === "user"
                          ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-lg"
                          : "bg-card text-foreground shadow-md border border-border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-card text-foreground shadow-md border border-border rounded-2xl p-4">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.15s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="p-4 bg-muted/30 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  Quick Actions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage(action.value)}
                      disabled={isTyping}
                      className="flex items-center gap-2 p-3 rounded-xl bg-card hover:bg-primary/10 transition-colors border border-border group disabled:opacity-50"
                    >
                      <action.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-foreground">
                        {action.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 bg-card border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                    placeholder="Type your message..."
                    disabled={isTyping}
                    className="flex-1 rounded-xl border-border focus:border-primary transition-colors"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => handleSendMessage()}
                      disabled={!message.trim() || isTyping}
                      size="icon"
                      className="rounded-xl bg-gradient-to-br from-secondary to-secondary/80 hover:to-secondary shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;