import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
      text: "Hello! 👋 Welcome to African Joy. How can I help you today?",
      sender: "bot",
    },
  ]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || message;
    if (!messageText.trim()) return;

    setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);
    setMessage("");

    // Simulate bot response (no logic, just UI)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message! Our team will get back to you soon. 🌟",
          sender: "bot",
        },
      ]);
    }, 1000);
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
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid hsl(101, 45%, 45%)",
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
                        fill="white"
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
                className="relative w-20 h-20 rounded-full overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, hsl(101, 45%, 45%) 0%, hsl(101, 45%, 30%) 100%)",
                  boxShadow: "0 8px 32px hsla(101, 45%, 45%, 0.5), 0 0 60px hsla(101, 45%, 45%, 0.3)",
                }}
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
                      <rect x="10" y="18" width="20" height="36" rx="2" fill="white" opacity="0.95" />
                      <rect x="13" y="8" width="14" height="12" rx="1.5" fill="white" opacity="0.95" />
                      
                      {/* Milk Level with Animation */}
                      <motion.rect
                        x="12"
                        y="28"
                        width="16"
                        height="20"
                        fill="hsl(300, 100%, 99%)"
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
                      <circle cx="20" cy="35" r="4" fill="hsl(101, 45%, 45%)" opacity="0.7" />
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
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  style={{
                    boxShadow: "0 0 20px hsla(359, 70%, 51%, 0.8)",
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
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
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
                      className="flex items-center gap-2 p-3 rounded-xl bg-card hover:bg-primary/10 transition-colors border border-border group"
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
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border-border focus:border-primary transition-colors"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => handleSendMessage()}
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
